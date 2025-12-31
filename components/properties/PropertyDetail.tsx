"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { StrapiProperty } from "@/types/strapi";
import { getImageUrl } from "@/lib/images";

interface PropertyDetailProps {
  property: StrapiProperty;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const { attributes } = property;

  const gallery = (attributes.gallery?.data as any[]) || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Hide navbar when image modal is open
  useEffect(() => {
    if (isImageModalOpen) {
      document.body.classList.add('image-modal-open');
      // Hide navbar container (the fixed div in layout.tsx)
      const navbarContainer = document.querySelector('body > div[class*="fixed"][class*="top-0"]');
      if (navbarContainer) {
        (navbarContainer as HTMLElement).style.display = 'none';
      }
    } else {
      document.body.classList.remove('image-modal-open');
      const navbarContainer = document.querySelector('body > div[class*="fixed"][class*="top-0"]');
      if (navbarContainer) {
        (navbarContainer as HTMLElement).style.display = '';
      }
    }
    return () => {
      document.body.classList.remove('image-modal-open');
      const navbarContainer = document.querySelector('body > div[class*="fixed"][class*="top-0"]');
      if (navbarContainer) {
        (navbarContainer as HTMLElement).style.display = '';
      }
    };
  }, [isImageModalOpen]);

  // Categorize documents from the documents array
  const categorizeDocument = (doc: any): string | null => {
    const name = (doc.attributes?.name || doc.attributes?.alternativeText || "").toLowerCase();
    const url = (doc.attributes?.url || "").toLowerCase();
    const fullText = `${name} ${url}`;

    if (fullText.includes("epc") || fullText.includes("energy performance")) {
      return "epc";
    }
    if (fullText.includes("gas safety") || fullText.includes("gas")) {
      return "gas";
    }
    if (fullText.includes("eicr") || fullText.includes("electrical") || fullText.includes("electrical safety")) {
      return "electrical";
    }
    if (fullText.includes("hmo") || fullText.includes("licence") || fullText.includes("license")) {
      return "hmo";
    }
    return null;
  };

  // Get documents from the documents array, categorized
  const allDocuments = (attributes.documents?.data as any[]) || [];
  
  // Get IDs of specific field documents to avoid duplicates
  const specificDocIds = new Set([
    attributes.epc_document?.data?.id,
    attributes.gas_safety_certificate?.data?.id,
    attributes.electrical_safety_report?.data?.id,
    attributes.hmo_licence?.data?.id,
  ].filter(Boolean));

  // Filter out documents that are already in specific fields
  const filteredDocuments = allDocuments.filter((doc) => !specificDocIds.has(doc.id));
  
  const categorizedDocs = {
    epc: filteredDocuments.filter((doc) => categorizeDocument(doc) === "epc"),
    gas: filteredDocuments.filter((doc) => categorizeDocument(doc) === "gas"),
    electrical: filteredDocuments.filter((doc) => categorizeDocument(doc) === "electrical"),
    hmo: filteredDocuments.filter((doc) => categorizeDocument(doc) === "hmo"),
    other: filteredDocuments.filter((doc) => !categorizeDocument(doc)),
  };

  const addressParts = [
    attributes.address,
    attributes.city,
    attributes.state,
    attributes.zipcode,
  ].filter(Boolean);
  const fullAddress = addressParts.join(", ");

  const hasImages = gallery.length > 0;
  const currentImageSrc = hasImages
    ? getImageUrl(gallery[currentIndex])
    : "/images/placeholder-property.jpg";

  const nextImage = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev + 1) % gallery.length);
  };

  const prevImage = () => {
    if (!hasImages) return;
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
  };

  const goToImage = (index: number) => {
    if (!hasImages) return;
    setCurrentIndex(index);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      propertySlug: attributes.slug,
      propertyTitle: attributes.title,
    };

    try {
      const response = await fetch("/api/property-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("Form submission error:", response.status, errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen property-detail-page">
      {/* Hero / Gallery */}
      <section className="relative w-full">
        <div 
          className="relative h-[500px] md:h-[600px] lg:h-[700px] min-h-[500px] overflow-hidden cursor-pointer"
          onClick={() => {
            if (hasImages) {
              setIsImageModalOpen(true);
              setModalImageIndex(currentIndex);
            }
          }}
        >
          {hasImages ? (
            <>
              <Image
                src={currentImageSrc}
                alt={attributes.title}
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    aria-label="Previous image"
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-colors z-10"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    aria-label="Next image"
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 transition-colors z-10"
                  >
                    <svg
                      className="w-6 h-6 text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1 rounded text-sm font-manrope">
                    {currentIndex + 1}/{gallery.length}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="font-manrope text-gray-500">No images available</span>
            </div>
          )}
        </div>

        {gallery.length > 1 && (
          <div className="flex justify-center gap-2 py-4 bg-white">
            {gallery.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goToImage(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-pevona-green" : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>
        )}
      </section>

      {/* Image Modal/Popup */}
      {isImageModalOpen && gallery.length > 0 && (
        <div 
          className="fixed inset-0 z-[10002] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <button
            onClick={() => setIsImageModalOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/70 rounded-full p-3 transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div 
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={getImageUrl(gallery[modalImageIndex])}
              alt={`${attributes.title} - Image ${modalImageIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain max-w-full max-h-full"
              unoptimized
            />

            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImageIndex((prev) => (prev === 0 ? gallery.length - 1 : prev - 1));
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-colors z-10"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImageIndex((prev) => (prev === gallery.length - 1 ? 0 : prev + 1));
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-3 transition-colors z-10"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded text-sm font-manrope">
                  {modalImageIndex + 1} / {gallery.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Top summary bar */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="font-crimson text-[24px] font-semibold text-pevona-dark leading-snug">
              {attributes.title}
            </h1>
            {fullAddress && (
              <p className="font-manrope text-sm text-gray-600 mt-2">{fullAddress}</p>
            )}
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="font-manrope text-sm text-gray-500">Sales Price</span>
            <span className="font-crimson text-[24px] font-semibold text-pevona-dark">
              {attributes.currency || "GBP"}
              {attributes.price?.toLocaleString?.("en-GB") ?? attributes.price}
            </span>
          </div>
        </div>
      </section>

      {/* Main content + sidebar form */}
      <section className="mx-auto max-w-6xl px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-10 md:py-14">
        <div className="grid grid-cols-1 lg:[grid-template-columns:minmax(0,1.7fr)_minmax(0,1.3fr)] gap-10 lg:gap-12">
          {/* Left: details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tenure Information */}
            {attributes.tenure_information && (
              <div>
                <p className="font-crimson font-semibold text-[24px] text-pevona-dark mb-1">
                  Tenure Information:
                </p>
                <p className="font-manrope text-sm md:text-base text-gray-700">
                  {attributes.tenure_information}
                </p>
              </div>
            )}

            {/* Property Details */}
            <div>
              <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
                Property Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Country
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    UK
                  </p>
                </div>
                {attributes.rent_price && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      Rent Price
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {attributes.currency || "GBP"}
                      {typeof attributes.rent_price === 'number' 
                        ? attributes.rent_price.toLocaleString("en-GB")
                        : attributes.rent_price}
                    </p>
                  </div>
                )}
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Property Size
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.area ? `${attributes.area.toLocaleString("en-GB")} sq ft` : "-"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Local Council
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.local_council || (attributes.city ? `${attributes.city} Council` : "-")}
                  </p>
                </div>
                {attributes.council_tax_band && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      Council Tax Band
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {attributes.council_tax_band}
                    </p>
                  </div>
                )}
                {attributes.annual_ground_rents && attributes.annual_ground_rents !== "N/A" && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      Annual Ground Rents
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {typeof attributes.annual_ground_rents === 'number'
                        ? `${attributes.currency || "GBP"}${(attributes.annual_ground_rents as number).toLocaleString("en-GB")}`
                        : String(attributes.annual_ground_rents)}
                    </p>
                  </div>
                )}
                {attributes.estimated_annual_service_charges && attributes.estimated_annual_service_charges !== "N/A" && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      Estimated Annual Service Charges
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {typeof attributes.estimated_annual_service_charges === 'number'
                        ? `${attributes.currency || "GBP"}${(attributes.estimated_annual_service_charges as number).toLocaleString("en-GB")}`
                        : String(attributes.estimated_annual_service_charges)}
                    </p>
                  </div>
                )}
                {attributes.number_of_years_of_lease && attributes.number_of_years_of_lease !== "N/A" && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      Number of Years of Lease
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {attributes.number_of_years_of_lease}
                    </p>
                  </div>
                )}
                {attributes.hmo && attributes.hmo !== "N/A" && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      HMO
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {attributes.hmo}
                    </p>
                  </div>
                )}
                {attributes.utilities && (
                  <div className="space-y-1">
                    <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                      Utilities
                    </p>
                    <p className="font-manrope text-base text-gray-900">
                      {attributes.utilities}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Property Essentials */}
            <div>
              <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
                Property Essentials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Property Type
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.property_type ?? "-"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Bedrooms
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.bedrooms ?? "-"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Bathrooms
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.bathrooms ?? "-"}
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <p className="font-crimson font-semibold text-[24px] text-pevona-dark mb-1">
                    Parking:
                  </p>
                  <p className="font-manrope text-sm md:text-base text-gray-700 whitespace-pre-line">
                    {attributes.parking || "-"}
                  </p>
                </div>
                <div>
                  <p className="font-crimson font-semibold text-[24px] text-pevona-dark mb-1">
                    Accessibility:
                  </p>
                  <p className="font-manrope text-sm md:text-base text-gray-700 whitespace-pre-line">
                    {attributes.accessibility || "-"}
                  </p>
                </div>
              </div>
            </div>

            {/* Risk, Safety & Legal Status */}
            <div>
              <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
                Risk, Safety & Legal Status
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-manrope text-sm text-gray-600">
                    Cladding / Building Safety:
                  </span>
                  <span className="font-manrope text-sm text-gray-900">
                    {attributes.cladding_building_safety || "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-manrope text-sm text-gray-600">
                    Rights & Restrictions:
                  </span>
                  <span className="font-manrope text-sm text-gray-900">
                    {attributes.rights_restrictions || "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-manrope text-sm text-gray-600">Flood Risk:</span>
                  <span className="font-manrope text-sm text-gray-900">
                    {attributes.flood_risk || "-"}
                  </span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                  <span className="font-manrope text-sm text-gray-600">Listed Status:</span>
                  <span className="font-manrope text-sm text-gray-900">
                    {attributes.listed_status || "-"}
                  </span>
                </div>
              </div>
            </div>

            {/* EPC - Energy Performance Certificate */}
            <div>
              <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
                EPC - Energy Performance Certificate
              </h2>
              <div className="flex justify-between border-b border-gray-100 pb-2">
                <span className="font-manrope text-sm text-gray-600">EPC Rating:</span>
                <span className="font-manrope text-sm text-gray-900">
                  {attributes.epc_rating || "-"}
                </span>
              </div>
            </div>

            {/* Property Description */}
            <div>
              <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
                Property Description
              </h2>
              {attributes.description ? (
                <div
                  className="prose prose-sm max-w-none font-manrope text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: attributes.description }}
                />
              ) : (
                <p className="font-manrope text-sm text-gray-500">NO Description</p>
              )}
            </div>

            {/* Documents & Certifications */}
            <div>
              <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
                Documents & Certifications
              </h2>
              <div className="space-y-3">
                {/* Energy Performance Certificate (EPC) */}
                {(attributes.epc_document?.data || categorizedDocs.epc.length > 0) ? (
                  <>
                    {attributes.epc_document?.data && (
                      <a
                        href={getImageUrl(attributes.epc_document.data)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {attributes.epc_document.data.attributes?.name || attributes.epc_document.data.attributes?.alternativeText || "Energy Performance Certificate (EPC)"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    )}
                    {categorizedDocs.epc.map((doc) => (
                      <a
                        key={doc.id}
                        href={getImageUrl(doc)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {doc.attributes?.name || doc.attributes?.alternativeText || "Energy Performance Certificate (EPC)"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="font-manrope text-sm text-gray-800">
                      Energy Performance Certificate (EPC)
                    </span>
                    <span className="font-manrope text-sm text-gray-500">-</span>
                  </div>
                )}

                {/* Gas Safety Certificate */}
                {(attributes.gas_safety_certificate?.data || categorizedDocs.gas.length > 0) ? (
                  <>
                    {attributes.gas_safety_certificate?.data && (
                      <a
                        href={getImageUrl(attributes.gas_safety_certificate.data)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {attributes.gas_safety_certificate.data.attributes?.name || attributes.gas_safety_certificate.data.attributes?.alternativeText || "Gas Safety Certificate"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    )}
                    {categorizedDocs.gas.map((doc) => (
                      <a
                        key={doc.id}
                        href={getImageUrl(doc)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {doc.attributes?.name || doc.attributes?.alternativeText || "Gas Safety Certificate"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="font-manrope text-sm text-gray-800">
                      Gas Safety Certificate
                    </span>
                    <span className="font-manrope text-sm text-gray-500">-</span>
                  </div>
                )}

                {/* Electrical Safety Report (EICR) */}
                {(attributes.electrical_safety_report?.data || categorizedDocs.electrical.length > 0) ? (
                  <>
                    {attributes.electrical_safety_report?.data && (
                      <a
                        href={getImageUrl(attributes.electrical_safety_report.data)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {attributes.electrical_safety_report.data.attributes?.name || attributes.electrical_safety_report.data.attributes?.alternativeText || "Electrical Safety Report (EICR)"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    )}
                    {categorizedDocs.electrical.map((doc) => (
                      <a
                        key={doc.id}
                        href={getImageUrl(doc)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {doc.attributes?.name || doc.attributes?.alternativeText || "Electrical Safety Report (EICR)"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="font-manrope text-sm text-gray-800">
                      Electrical Safety Report (EICR)
                    </span>
                    <span className="font-manrope text-sm text-gray-500">-</span>
                  </div>
                )}

                {/* HMO Licence (if applicable) */}
                {(attributes.hmo_licence?.data || categorizedDocs.hmo.length > 0) ? (
                  <>
                    {attributes.hmo_licence?.data && (
                      <a
                        href={getImageUrl(attributes.hmo_licence.data)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {attributes.hmo_licence.data.attributes?.name || attributes.hmo_licence.data.attributes?.alternativeText || "HMO Licence (if applicable)"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    )}
                    {categorizedDocs.hmo.map((doc) => (
                      <a
                        key={doc.id}
                        href={getImageUrl(doc)}
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between py-3 border-b border-gray-100"
                      >
                        <span className="font-manrope text-sm text-gray-800">
                          {doc.attributes?.name || doc.attributes?.alternativeText || "HMO Licence (if applicable)"}
                        </span>
                        <span className="font-manrope text-sm text-pevona-green">Download</span>
                      </a>
                    ))}
                  </>
                ) : (
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <span className="font-manrope text-sm text-gray-800">
                      HMO Licence (if applicable)
                    </span>
                    <span className="font-manrope text-sm text-gray-500">-</span>
                  </div>
                )}

                {/* Other documents (not categorized) */}
                {categorizedDocs.other.map((doc) => (
                  <a
                    key={doc.id}
                    href={getImageUrl(doc)}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-3 border-b border-gray-100"
                  >
                    <span className="font-manrope text-sm text-gray-800">
                      {doc.attributes?.name || doc.attributes?.alternativeText || "Document"}
                    </span>
                    <span className="font-manrope text-sm text-pevona-green">Download</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: booking form sidebar (floating) */}
          <aside className="lg:col-span-1">
            <div className="border border-gray-200 rounded-lg shadow-lg sticky top-6 bg-white overflow-hidden z-10">
              <button
                type="button"
                onClick={() => setIsFormOpen((open) => !open)}
                className="w-full px-6 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="font-crimson text-[24px] font-semibold text-pevona-dark">
                    Book a Viewing or Reserve
                  </h3>
                  <p className="font-manrope text-xs text-gray-500 mt-1 hidden sm:block">
                    Tap to {isFormOpen ? "hide" : "show"} the booking form.
                  </p>
                </div>
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-gray-700 transition-transform ${
                    isFormOpen ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>

              {isFormOpen && (
                <div className="px-6 pb-6 pt-1 border-t border-gray-100">
                  <p className="font-manrope text-sm text-gray-600 mb-5 text-center">
                    Share your details and our team will contact you
                  </p>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                      <label
                        htmlFor="name"
                        className="block font-manrope text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-pevona-green focus:border-pevona-green"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block font-manrope text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-pevona-green focus:border-pevona-green"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block font-manrope text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-pevona-green focus:border-pevona-green"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block font-manrope text-sm font-medium text-gray-700 mb-1.5"
                      >
                        Message (optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm font-manrope focus:outline-none focus:ring-2 focus:ring-pevona-green focus:border-pevona-green"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="rounded-lg bg-green-50 border border-green-200 p-3">
                        <p className="font-manrope text-sm text-green-800">
                          ✓ Thank you! We'll be in touch shortly.
                        </p>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="rounded-lg bg-red-50 border border-red-200 p-3">
                        <p className="font-manrope text-sm text-red-800">
                          Something went wrong. Please try again or contact us directly.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-lg bg-pevona-green py-2.5 px-4 text-sm font-manrope font-semibold text-white hover:bg-[#00a86b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting..." : "Register Your Interest"}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* Location - At bottom */}
      {(attributes.map_embed || fullAddress || (attributes.latitude && attributes.longitude)) && (
        <section className="bg-gray-50 border-t border-gray-200 mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
          <div className="mx-auto max-w-6xl px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-10 md:py-14">
            <h2 className="font-crimson text-[24px] font-semibold text-pevona-dark mb-4">
              Location
            </h2>
            <p className="font-manrope text-sm text-gray-600 mb-4">{fullAddress}</p>
            <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden bg-gray-200">
              {attributes.map_embed ? (
                <div
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: attributes.map_embed }}
                />
              ) : (
                <iframe
                  src={
                    attributes.latitude && attributes.longitude
                      ? `https://www.google.com/maps?q=${attributes.latitude},${attributes.longitude}&z=15&output=embed`
                      : `https://www.google.com/maps?q=${encodeURIComponent(
                          fullAddress || attributes.city || ""
                        )}&output=embed`
                  }
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              )}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}


