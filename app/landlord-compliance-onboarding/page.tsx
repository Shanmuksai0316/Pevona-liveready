'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useMemo, useEffect } from "react";
import React from "react";

type DocumentCategory = "proofOfIdentity" | "selfieWithId" | "proofOfOwnership";
type UploadStatus = "uploading" | "success" | "error" | null;

interface UploadedFile {
  name: string;
  timestamp: number;
}

export default function LandlordServicesPage() {
  const [checkedItems, setCheckedItems] = useState<Record<DocumentCategory, boolean>>({
    proofOfIdentity: false,
    selfieWithId: false,
    proofOfOwnership: false,
  });

  const [uploadedFiles, setUploadedFiles] = useState<Record<DocumentCategory, UploadedFile[]>>({
    proofOfIdentity: [],
    selfieWithId: [],
    proofOfOwnership: [],
  });

  const [uploadProgress, setUploadProgress] = useState<Record<DocumentCategory, number>>({
    proofOfIdentity: 0,
    selfieWithId: 0,
    proofOfOwnership: 0,
  });

  const [uploadStatus, setUploadStatus] = useState<Record<DocumentCategory, UploadStatus>>({
    proofOfIdentity: null,
    selfieWithId: null,
    proofOfOwnership: null,
  });

  // Create stable file input refs for each document category
  const fileInputRefs = useRef<Record<DocumentCategory, HTMLInputElement | null>>({
    proofOfIdentity: null,
    selfieWithId: null,
    proofOfOwnership: null,
  });

  const [isDragging, setIsDragging] = useState<DocumentCategory | null>(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [isLoadingFiles, setIsLoadingFiles] = useState(true);

  const ALLOWED_FORMATS = ["image/jpeg", "image/png", "application/pdf"];
  const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".pdf"];
  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

  // Load uploaded files on component mount
  useEffect(() => {
    const loadUploadedFiles = async () => {
      try {
        const response = await fetch('/api/landlord/upload-documents');
        if (response.ok) {
          const data = await response.json();
          setUploadedFiles(data.files);
          // Update checked items based on uploaded files
          setCheckedItems((prevCheckedItems) => {
            const newCheckedItems = { ...prevCheckedItems };
            Object.keys(data.files).forEach((category) => {
              if (data.files[category] && data.files[category].length > 0) {
                newCheckedItems[category as DocumentCategory] = true;
              }
            });
            return newCheckedItems;
          });
        }
      } catch (error) {
        console.error('Error loading uploaded files:', error);
      } finally {
        setIsLoadingFiles(false);
      }
    };

    loadUploadedFiles();
  }, []);
  
  // Category-specific upload limits
  const getMaxUploadsForCategory = (category: DocumentCategory): number => {
    if (category === "selfieWithId") {
      return 3; // Only 1 selfie allowed
    }
    return 3; // 3 files for other categories
  };

  // Get upload count for a specific category
  const getUploadCount = (category: DocumentCategory): number => {
    return uploadedFiles[category]?.length || 0;
  };

  // Check if a category can accept more uploads
  const canUploadToCategory = (category: DocumentCategory): boolean => {
    return getUploadCount(category) < getMaxUploadsForCategory(category);
  };

  const validateFile = (file: File, category: DocumentCategory): string | null => {
    if (!canUploadToCategory(category)) {
      const maxAllowed = getMaxUploadsForCategory(category);
      return `Maximum ${maxAllowed} ${maxAllowed === 1 ? 'file' : 'files'} allowed for this document type.`;
    }
    if (!ALLOWED_FORMATS.includes(file.type)) {
      return "Invalid file format. Please use JPG, PNG, or PDF.";
    }
    if (file.size > MAX_FILE_SIZE) {
      return "File size exceeds 10MB limit.";
    }
    return null;
  };

  const showToastMessage = (message: string): void => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleFileSelect = async (file: File, category: DocumentCategory): Promise<void> => {
    const error = validateFile(file, category);
    if (error) {
      showToastMessage(error);
      return;
    }

    setUploadStatus({ ...uploadStatus, [category]: "uploading" });
    setUploadProgress({ ...uploadProgress, [category]: 0 });

    // Simulate upload progress
    let progressValue = 0;
    const interval = setInterval(() => {
      progressValue = Math.min(progressValue + Math.random() * 30, 90);
      setUploadProgress((prev) => ({
        ...prev,
        [category]: progressValue,
      }));
    }, 100);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", category);

      const response = await fetch("/api/landlord/upload-documents", {
        method: "POST",
        body: formData,
      });

      clearInterval(interval);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Upload failed");
      }

      const result = await response.json();

      // Add file to the array for this category
      const newFile: UploadedFile = { name: file.name, timestamp: Date.now() };
      const updatedFiles = [...(uploadedFiles[category] || []), newFile];
      
      setUploadedFiles((prevFiles) => ({
        ...prevFiles,
        [category]: updatedFiles,
      }));

      setUploadStatus({ ...uploadStatus, [category]: "success" });
      setUploadProgress({ ...uploadProgress, [category]: 100 });

      // Mark as checked if files are uploaded
      setCheckedItems((prevChecked) => ({
        ...prevChecked,
        [category]: true,
      }));

      showToastMessage(`${file.name} uploaded successfully!`);

      // Reset status after 2 seconds
      setTimeout(() => {
        setUploadStatus((prevStatus) => ({
          ...prevStatus,
          [category]: null,
        }));
      }, 2000);

      // Reset file input to allow re-uploading the same file
      if (fileInputRefs.current[category]) {
        fileInputRefs.current[category]!.value = '';
      }
    } catch (error) {
      clearInterval(interval);
      setUploadStatus({ ...uploadStatus, [category]: "error" });
      const errorMessage = error instanceof Error ? error.message : "Upload failed. Please try again.";
      showToastMessage(errorMessage);
      console.error("Upload error:", error);
    }
  };

  const handleRemoveFile = async (category: DocumentCategory, timestamp: number): Promise<void> => {
    try {
      const response = await fetch(`/api/landlord/upload-documents?category=${category}&timestamp=${timestamp}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Use functional state update to ensure we have the latest state
        setUploadedFiles((prevFiles) => {
          const updatedFiles = prevFiles[category].filter((f) => f.timestamp !== timestamp);
          return {
            ...prevFiles,
            [category]: updatedFiles,
          };
        });

        // Also update checkedItems if no files remain - use functional update
        setCheckedItems((prevChecked) => {
          const currentFiles = uploadedFiles[category];
          const willBeEmpty = currentFiles.length === 1; // Will be empty after removal
          if (willBeEmpty) {
            return {
              ...prevChecked,
              [category]: false,
            };
          }
          return prevChecked;
        });

        showToastMessage('File removed successfully!');
      } else {
        const errorData = await response.json();
        showToastMessage(errorData.error || 'Failed to remove file');
      }
    } catch (error) {
      console.error('Error removing file:', error);
      showToastMessage('Failed to remove file. Please try again.');
    }
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>, category: DocumentCategory): void => {
    e.preventDefault();
    setIsDragging(category);
  };

  const handleDragLeave = (): void => {
    setIsDragging(null);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, category: DocumentCategory): void => {
    e.preventDefault();
    setIsDragging(null);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file, category);
  };

  const handleBrowseClick = (category: DocumentCategory): void => {
    fileInputRefs.current[category]?.click();
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-[10000] animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="bg-[#002f57] text-white px-6 py-4 rounded-[12px] shadow-lg flex items-center gap-3 min-w-[300px] max-w-[500px]">
            <svg
              className="w-5 h-5 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <p className="font-manrope text-[14px] leading-[20px]">{toastMessage}</p>
          </div>
        </div>
      )}
      {/* Hero section */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/landlord-compliance-onboarding/banner.webp"
                alt="Business meeting with landlords"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Landlord Compliance & Onboarding
            </h1>
            {/* <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              End-to-end property management that saves time, reduces risk, and ensures
              full legal compliance. Trusted by landlords who value clear communication and
              consistent results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Request a Consultation
            </Link> */}
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
            <Image
                src="/images/Landlord/landlord-services-bg-mbl.png"
              alt="Business meeting with landlords"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
            </div>
          </div>

          {/* Mobile Content - Center Aligned, Bottom 50px */}
          <div className="lg:hidden relative flex items-end justify-center pb-[50px] h-[850px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Landlord Compliance & Onboarding
            </h1>
              {/* <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              End-to-end property management that saves time, reduces risk, and ensures
              full legal compliance. Trusted by landlords who value clear communication and
              consistent results.
            </p>
            <Link
              href="/contact"
                className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Request a Consultation
            </Link> */}
            </div>
          </div>
        </div>
      </section>

{/* Managing Every Detail */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[26px] lg:gap-[100px] items-center">
        <div className="flex-1 relative w-full max-w-[720px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/landlord-compliance-onboarding/Why we ask for documents.webp"
            alt="Digital housing market graph"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 720px"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Why we ask for documents
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            To protect you, your tenants, and the Pevona brand, UK law requires basic identity
and property checks when we onboard new landlords. These steps help prevent
impersonation and fraud, and ensure your property is ready to let safely and
compliantly. Everything you upload is encrypted and stored securely, and we only
keep it for as long as the law requires.
          </p>
        </div>
      </section>

{/* Managing Every Detail */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[26px] lg:gap-[100px] items-center">
        
<div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Terms of Business
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            As part of our standard onboarding process, we will share a read‑only copy of our
Terms of Business for you to look over at your convenience. There’s nothing you
need to decide immediately — this step simply ensures you’re familiar with how we
work and what you can expect from us going forward. Once you’ve had a chance to
review it, we will send you the DocuSign version for signature whenever you feel
ready to proceed.
          </p>
        </div>        
        
<div className="flex-1 relative w-full max-w-[720px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/landlord-compliance-onboarding/Terms of Business.webp"
            alt="Digital housing market graph"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 720px"
            unoptimized
          />
        </div>   
      </section>

 {/* Our Letting Process */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[70px] items-center">
        <div className="flex-1 w-full lg:max-w-[526px] space-y-9">
          <div className="space-y-4">
            <p className="font-crimson text-[20px] leading-[30px] tracking-[-0.6px] text-[#002f57]">
              How It Works
            </p>
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Documents we need from you
            </h2>
          </div>
          <div className="relative w-full max-w-[528px] h-[352px] min-h-[300px] sm:min-h-[350px] lg:min-h-[352px] min-w-0 rounded-[24px] overflow-hidden">
            <Image
              src="/images/landlord-compliance-onboarding/Documents we need from you.webp"
              alt="Landlord signing documents"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 528px"
              unoptimized
            />
          </div>
        </div>

        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-px bg-[#002f57]/15 hidden lg:block" />

          <div className="space-y-[20px] lg:space-y-[70px] pl-[70px]">
            {/* Proof of Identity - Special 50/50 layout */}
            <div className="relative flex gap-4">
              <div className="flex-shrink-0 absolute left-[-60px] top-[6px]">
                <div className="w-[20px] h-[20px] rounded-full bg-[#002f57] flex items-center justify-center">
                  <span className="w-[12px] h-[12px] rounded-full bg-white" />
                </div>
              </div>
              <div className="w-full">
                <h3 className="font-crimson text-[26px] leading-[30px] text-[#002f57] mb-4">
                  Proof of identity (choose ONE of the following):
                </h3>
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start">
                  {/* Left side - Examples Image */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative w-full h-[280px] min-h-[200px] sm:min-h-[250px] lg:min-h-[280px] rounded-[16px] overflow-hidden bg-[#FAFAFA] border border-[rgba(0,0,0,0.08)]">
                      <Image
                        src="/images/landlord-compliance-onboarding/Documents we need from you.webp"
                        alt="Proof of identity examples - Passport and UK driving licence"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50%"
                        unoptimized
                      />
                    </div>
                  </div>
                  {/* Right side - Options list */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 list-disc list-inside space-y-2">
                      <li>Passport (clear colour photo of the main photo page; include signature page if separate)</li>
                      <li>UK photocard driving licence (clear colour photos of the front and back)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Other steps in list format */}
            {[
              {
                title: "Liveness / likeness check (when remote):",
                body: "A selfie of you holding your ID next to your face (passport open at photo page, or photocard front facing the camera). This simply confirms the person in the document is you.",
              },
              {
                title: "Proof of ownership (provide ANY ONE primary document; you may add supporting evidence if helpful):",
                options: [
                  "Official Land Registry Title Register (Title Deed)",
                  "Mortgage statement (issued within the last 12 months)",
                  "Completion statement from your conveyancer/solicitor (if recently purchased)",
                  "Building insurance schedule naming you and the property address",
                  "Service charge or ground rent demand in your name (leasehold; useful as supporting evidence)",
                ],
              },
              
            ].map((step, index) => (
              <div key={index} className="relative flex gap-4">
                <div className="flex-shrink-0 absolute left-[-60px] top-[6px]">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#002f57] flex items-center justify-center">
                    <span className="w-[12px] h-[12px] rounded-full bg-white" />
                  </div>
                </div>
                <div className="space-y-[2px]">
                  <h3 className="font-crimson text-[26px] leading-[30px] text-[#002f57]">
                    {step.title}
                  </h3>
                  {step.options ? (
                    <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 list-disc list-inside space-y-1">
                      {step.options.map((option, optIndex) => (
                        <li key={optIndex}>{option}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                      {step.body}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


{/* Secure submission options */}
      <div className="lg:px-0 px-5 overflow-x-auto">
        <section className="max-w-full mx-0 md:mx-[60px] 1400:max-w-[1336px] 1400:mx-auto 1920:max-w-[1600px] mt-[60px] lg:mt-[140px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] min-w-[calc(100vw-40px)] lg:min-w-0">
          <div className="w-full lg:w-[60%] space-y-4 pl-[5%]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Secure submission options
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            You can upload your files via our secure portal (preferred) or reply to our email
using our encrypted link. Accepted formats: JPG, PNG, PDF. Please ensure images
are well‑lit and text is readable</p>
        </div>

        <div className="w-full lg:w-[40%] relative h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/landlord-compliance-onboarding/Secure submission options.webp"
            alt="Tenant and landlord agreement"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 675px"
            unoptimized
          />
        </div>
      </section>
      </div>


{/* Data protection & retention */}
      <div className="lg:px-0 px-5 overflow-x-auto">
        <section className="max-w-full mx-0 md:mx-[60px] 1400:max-w-[1336px] 1400:mx-auto 1920:max-w-[1600px] mt-[80px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] min-w-[calc(100vw-40px)] lg:min-w-0">
        <div className="w-full lg:w-[40%] relative h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/landlord-compliance-onboarding/Data protection & retention.webp"
            alt="Property management team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 680px"
            unoptimized
          />
        </div>

          <div className="w-full lg:w-[60%] space-y-4 p-[5%] lg:pr-[5%] lg:pl-0 lg:pt-0 lg:pb-0">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Data protection & retention
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
We apply access controls and encryption. Documents are retained only for the
statutory period under Regulation 40 (MLR 2017) and then deleted. If you have
questions about privacy, please contact us.
          </p>
        </div>
      </section>
      </div>

{/* Upload Documents Section */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px] 650:mt-[100px] lg:mt-[140px] 1500:mt-[160px] mb-[60px] 650:mb-[80px] lg:mb-[100px]">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <div>
              <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
                Upload your documents securely
              </h2>
            </div>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 max-w-[700px]">
              Thanks for completing the initial steps. Please upload the items below to finalise verification.
            </p>
            <p className="font-manrope text-[14px] text-[#666]">
              You can upload up to <span className="font-semibold">3 files for Proof of Identity and Proof of Ownership</span>, and <span className="font-semibold">1 selfie file</span> for Selfie-with-ID.
            </p>
          </div>

          {/* Document Upload Cards */}
          <div className="space-y-6">
            {/* Proof of Identity - 50/50 Layout with Image */}
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
              {/* Left side - Image */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] rounded-[16px] overflow-hidden bg-[#FAFAFA] border border-[rgba(0,0,0,0.08)]">
                  <Image
                    src="/images/landlord-compliance-onboarding/Documents we need from you.webp"
                    alt="Proof of identity upload"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50%"
                    unoptimized
                  />
                </div>
              </div>
              {/* Right side - Proof of Identity Card */}
              <div className="w-full lg:w-1/2 flex-shrink-0">
                {(() => {
                  const doc = {
                    id: "proofOfIdentity",
                    title: "Proof of identity",
                    description: "Upload a clear photo of your passport or driving license.",
                    examples: ["Passport photo page", "Driving license (front & back)"],
                  };
                  const docId = doc.id as DocumentCategory;
                  return (
                    <div className="border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 bg-white">
                  {/* Checkbox and Title with Counter */}
                  <div className="flex items-start gap-4 mb-6">
                    <input
                      type="checkbox"
                      checked={checkedItems[docId]}
                      onChange={(e) =>
                        setCheckedItems({
                          ...checkedItems,
                          [docId]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 rounded border-[rgba(0,0,0,0.12)] mt-1 cursor-pointer accent-[#002f57]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h3 className="font-manrope font-bold text-[20px] text-[#002f57]">
                          {doc.title}
                        </h3>
                        <div className="bg-[#002f57] text-white px-3 py-1 rounded-[6px] text-sm">
                          <span className="font-manrope font-semibold text-[12px]">
                            {getUploadCount(docId)}/{getMaxUploadsForCategory(docId)}
                          </span>
                        </div>
                      </div>
                      <p className="font-manrope text-[16px] text-[#333] opacity-80">
                        {doc.description}
                      </p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mb-6 ml-9 space-y-2">
                    <p className="font-manrope text-[14px] text-[#666] font-semibold">Examples of acceptable formats:</p>
                    <div className="flex gap-4 flex-wrap">
                      {doc.examples.map((example, idx) => (
                        <div key={idx} className="bg-[#FAFAFA] border border-[rgba(0,0,0,0.08)] rounded-[8px] px-3 py-2">
                          <p className="font-manrope text-[14px] text-[#333]">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ml-9">
                    {/* Display uploaded files list */}
                    {uploadedFiles[docId].length > 0 && (
                      <div className="mb-4 space-y-2">
                        {uploadedFiles[docId].map((file) => (
                          <div
                            key={file.timestamp}
                            className="flex items-center justify-between bg-green-50 border border-green-200 rounded-[8px] p-3"
                          >
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-manrope text-[14px] text-green-800">{file.name}</span>
                            </div>
                            <button
                              onClick={() => handleRemoveFile(docId, file.timestamp)}
                              className="text-red-500 hover:text-red-700 font-manrope text-[12px] font-semibold"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Upload area - show only if can upload or already has files */}
                    {(canUploadToCategory(docId) || uploadedFiles[docId].length > 0) && (
                      <div
                        className={`border-2 border-dashed rounded-[12px] p-8 text-center transition-all cursor-pointer ${
                          isDragging === docId
                            ? "border-[#002f57] bg-[#002f57]/5"
                            : "border-[rgba(0,0,0,0.12)] bg-[#FAFAFA] hover:border-[#002f57] hover:bg-[#002f57]/2"
                        }`}
                        onDragEnter={(e) => handleDragEnter(e, docId)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, docId)}
                      >
                        <input
                          ref={(el) => { fileInputRefs.current[docId] = el; }}
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          disabled={!canUploadToCategory(docId)}
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileSelect(e.target.files[0], docId);
                            }
                          }}
                          className="hidden"
                        />

                        {uploadStatus[docId] === "uploading" ? (
                          <div className="space-y-4">
                            <svg
                              className="w-12 h-12 mx-auto text-[#002f57] animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <p className="font-manrope text-[16px] text-[#333]">Uploading...</p>
                            <div className="w-full bg-[rgba(0,0,0,0.08)] rounded-full h-2">
                              <div
                                className="bg-[#002f57] h-2 rounded-full transition-all"
                                style={{ width: `${uploadProgress[docId]}%` }}
                              />
                            </div>
                          </div>
                        ) : uploadStatus[docId] === "success" ? (
                          <div className="space-y-3">
                            <svg
                              className="w-12 h-12 mx-auto text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="font-manrope text-[16px] text-green-600 font-semibold">
                              File uploaded successfully!
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {canUploadToCategory(docId) ? (
                              <>
                                <svg
                                  className="w-12 h-12 mx-auto text-[#666] opacity-50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <div>
                                  <p className="font-manrope text-[16px] text-[#333] font-semibold">
                                    Drag and drop your file here
                                  </p>
                                  <p className="font-manrope text-[14px] text-[#666] opacity-80">
                                    or click the button below
                                  </p>
                                </div>
                                <button
                                  onClick={() => handleBrowseClick(docId)}
                                  className="bg-[#002f57] hover:bg-[#001f3a] text-white font-manrope font-semibold text-[14px] px-6 py-2 rounded-[8px] transition-colors"
                                >
                                  Browse Files
                                </button>
                                <p className="font-manrope text-[12px] text-[#666]">
                                  Accepted formats: JPG, PNG, PDF (Max 10MB)
                                </p>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-12 h-12 mx-auto text-[#999] opacity-30"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <div>
                                  <p className="font-manrope text-[16px] text-[#666] font-semibold">
                                    Upload limit reached
                                  </p>
                                  <p className="font-manrope text-[14px] text-[#999] opacity-80">
                                    Maximum {getMaxUploadsForCategory(docId)} {getMaxUploadsForCategory(docId) === 1 ? 'file' : 'files'} allowed
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                    </div>
                  </div>
                  );
                })()}
              </div>
            </div>

            {/* Other Document Upload Cards */}
            {[
              {
                id: "selfieWithId",
                title: "Selfie‑with‑ID (liveness)",
                description: "Take a selfie holding your ID next to your face. Both should be clearly visible.",
                examples: ["Face and document both visible"],
              },
              {
                id: "proofOfOwnership",
                title: "Proof of ownership",
                description: "Upload documents proving you own the property (mortgage statement, deed, etc.).",
                examples: ["Mortgage statement", "Property deed"],
              },
            ].map((doc) => {
              const docId = doc.id as DocumentCategory;
              return (
                <div key={doc.id} className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
                  {/* Left side - Image */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="relative w-full h-full min-h-[300px] sm:min-h-[350px] lg:min-h-[400px] rounded-[16px] overflow-hidden bg-[#FAFAFA] border border-[rgba(0,0,0,0.08)]">
                      <Image
                        src="/images/landlord-compliance-onboarding/Documents we need from you.webp"
                        alt={`${doc.title} upload`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50%"
                        unoptimized
                      />
                    </div>
                  </div>
                  {/* Right side - Upload Card */}
                  <div className="w-full lg:w-1/2 flex-shrink-0">
                    <div className="border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 bg-white">
                  {/* Checkbox and Title with Counter */}
                  <div className="flex items-start gap-4 mb-6">
                    <input
                      type="checkbox"
                      checked={checkedItems[docId]}
                      onChange={(e) =>
                        setCheckedItems({
                          ...checkedItems,
                          [docId]: e.target.checked,
                        })
                      }
                      className="w-5 h-5 rounded border-[rgba(0,0,0,0.12)] mt-1 cursor-pointer accent-[#002f57]"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-4 mb-1">
                        <h3 className="font-manrope font-bold text-[20px] text-[#002f57]">
                          {doc.title}
                        </h3>
                        <div className="bg-[#002f57] text-white px-3 py-1 rounded-[6px] text-sm">
                          <span className="font-manrope font-semibold text-[12px]">
                            {getUploadCount(docId)}/{getMaxUploadsForCategory(docId)}
                          </span>
                        </div>
                      </div>
                      <p className="font-manrope text-[16px] text-[#333] opacity-80">
                        {doc.description}
                      </p>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="mb-6 ml-9 space-y-2">
                    <p className="font-manrope text-[14px] text-[#666] font-semibold">Examples of acceptable formats:</p>
                    <div className="flex gap-4 flex-wrap">
                      {doc.examples.map((example, idx) => (
                        <div key={idx} className="bg-[#FAFAFA] border border-[rgba(0,0,0,0.08)] rounded-[8px] px-3 py-2">
                          <p className="font-manrope text-[14px] text-[#333]">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="ml-9">
                    {/* Display uploaded files list */}
                    {uploadedFiles[docId].length > 0 && (
                      <div className="mb-4 space-y-2">
                        {uploadedFiles[docId].map((file) => (
                          <div
                            key={file.timestamp}
                            className="flex items-center justify-between bg-green-50 border border-green-200 rounded-[8px] p-3"
                          >
                            <div className="flex items-center gap-2">
                              <svg
                                className="w-5 h-5 text-green-600"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              <span className="font-manrope text-[14px] text-green-800">{file.name}</span>
                            </div>
                            <button
                              onClick={() => handleRemoveFile(docId, file.timestamp)}
                              className="text-red-500 hover:text-red-700 font-manrope text-[12px] font-semibold"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Upload area - show only if can upload or already has files */}
                    {(canUploadToCategory(docId) || uploadedFiles[docId].length > 0) && (
                      <div
                        className={`border-2 border-dashed rounded-[12px] p-8 text-center transition-all cursor-pointer ${
                          isDragging === docId
                            ? "border-[#002f57] bg-[#002f57]/5"
                            : "border-[rgba(0,0,0,0.12)] bg-[#FAFAFA] hover:border-[#002f57] hover:bg-[#002f57]/2"
                        }`}
                        onDragEnter={(e) => handleDragEnter(e, docId)}
                        onDragLeave={handleDragLeave}
                        onDrop={(e) => handleDrop(e, docId)}
                      >
                        <input
                          ref={(el) => { fileInputRefs.current[docId] = el; }}
                          type="file"
                          accept=".jpg,.jpeg,.png,.pdf"
                          disabled={!canUploadToCategory(docId)}
                          onChange={(e) => {
                            if (e.target.files?.[0]) {
                              handleFileSelect(e.target.files[0], docId);
                            }
                          }}
                          className="hidden"
                        />

                        {uploadStatus[docId] === "uploading" ? (
                          <div className="space-y-4">
                            <svg
                              className="w-12 h-12 mx-auto text-[#002f57] animate-spin"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              />
                            </svg>
                            <p className="font-manrope text-[16px] text-[#333]">Uploading...</p>
                            <div className="w-full bg-[rgba(0,0,0,0.08)] rounded-full h-2">
                              <div
                                className="bg-[#002f57] h-2 rounded-full transition-all"
                                style={{ width: `${uploadProgress[docId]}%` }}
                              />
                            </div>
                          </div>
                        ) : uploadStatus[docId] === "success" ? (
                          <div className="space-y-3">
                            <svg
                              className="w-12 h-12 mx-auto text-green-500"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <p className="font-manrope text-[16px] text-green-600 font-semibold">
                              File uploaded successfully!
                            </p>
                          </div>
                        ) : (
                          <div className="space-y-4">
                            {canUploadToCategory(docId) ? (
                              <>
                                <svg
                                  className="w-12 h-12 mx-auto text-[#666] opacity-50"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                                  />
                                </svg>
                                <div>
                                  <p className="font-manrope text-[16px] text-[#333] font-semibold">
                                    Drag and drop your file here
                                  </p>
                                  <p className="font-manrope text-[14px] text-[#666] opacity-80">
                                    or click the button below
                                  </p>
                                </div>
                                <button
                                  onClick={() => handleBrowseClick(docId)}
                                  className="bg-[#002f57] hover:bg-[#001f3a] text-white font-manrope font-semibold text-[14px] px-6 py-2 rounded-[8px] transition-colors"
                                >
                                  Browse Files
                                </button>
                                <p className="font-manrope text-[12px] text-[#666]">
                                  Accepted formats: JPG, PNG, PDF (Max 10MB)
                                </p>
                              </>
                            ) : (
                              <>
                                <svg
                                  className="w-12 h-12 mx-auto text-[#999] opacity-30"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <div>
                                  <p className="font-manrope text-[16px] text-[#666] font-semibold">
                                    Upload limit reached
                                  </p>
                                  <p className="font-manrope text-[14px] text-[#999] opacity-80">
                                    Maximum {getMaxUploadsForCategory(docId)} {getMaxUploadsForCategory(docId) === 1 ? 'file' : 'files'} allowed
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-8">
            <button
              disabled={!Object.values(checkedItems).every((v) => v)}
              onClick={() => {
                showToastMessage('Verification completed successfully! We will contact you shortly.');
                // Here you could add logic to submit the verification to your backend
                // For now, just show a success message
              }}
              className={`px-8 py-4 rounded-[8px] font-manrope font-semibold text-[16px] transition-all ${
                Object.values(checkedItems).every((v) => v)
                  ? "bg-[#002f57] hover:bg-[#001f3a] text-white cursor-pointer"
                  : "bg-[rgba(0,0,0,0.08)] text-[#999] cursor-not-allowed"
              }`}
            >
              Complete Verification
            </button>
          </div>
        </div>
      </section>

{/* Need help section */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px] 650:mt-[100px] lg:mt-[140px] 1500:mt-[160px] mb-[60px] 650:mb-[80px] lg:mb-[100px] text-center">
        <div className="max-w-[700px] mx-auto space-y-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Need help?
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            If you'd prefer, we can complete the liveness/likeness step on a brief video call.
            Our team is happy to help.
          </p>
        </div>
      </section>



</div>

  );
}