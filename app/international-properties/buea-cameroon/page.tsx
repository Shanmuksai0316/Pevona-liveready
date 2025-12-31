"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import svgPaths from "../imports/svg-q9n7c86uub";

export default function BueaCameroonProject() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [selectedCurrency, setSelectedCurrency] = useState<"XAF" | "USD" | "GBP">("XAF");
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const desktopVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Wait a bit for DOM to be ready
    const timer = setTimeout(() => {
      const setupVideo = (video: HTMLVideoElement | null, name: string) => {
        if (!video) {
          console.log(`${name} video ref is null`);
          return;
        }

        console.log(`Setting up ${name} video`, video);

        // Ensure video is muted and can play inline
        video.muted = true;
        video.playsInline = true;
        video.setAttribute("muted", "true");
        video.setAttribute("playsinline", "true");
        video.setAttribute("webkit-playsinline", "true");

        const attemptPlay = () => {
          console.log(`${name} video readyState:`, video.readyState);
          if (video.readyState >= 2) {
            const playPromise = video.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  console.log(`${name} video is now playing`);
                })
                .catch((error) => {
                  console.error(`${name} video play error:`, error);
                  // Retry after delay
                  setTimeout(() => {
                    video.play().catch((err) => {
                      console.error(`${name} video retry failed:`, err);
                    });
                  }, 500);
                });
            }
          }
        };

        // Try to play when video can play
        const handleCanPlay = () => {
          console.log(`${name} video can play`);
          attemptPlay();
        };

        const handleLoadedData = () => {
          console.log(`${name} video loaded data`);
          attemptPlay();
        };

        const handleLoadedMetadata = () => {
          console.log(`${name} video loaded metadata`);
          attemptPlay();
        };

        // Add event listeners
        video.addEventListener("canplay", handleCanPlay);
        video.addEventListener("loadeddata", handleLoadedData);
        video.addEventListener("loadedmetadata", handleLoadedMetadata);
        video.addEventListener("canplaythrough", handleCanPlay);

        // Try immediately if already loaded
        if (video.readyState >= 2) {
          attemptPlay();
        }

        // Also try after a short delay
        setTimeout(attemptPlay, 100);
        setTimeout(attemptPlay, 500);
        setTimeout(attemptPlay, 1000);
      };

      setupVideo(mobileVideoRef.current, "Mobile");
      setupVideo(desktopVideoRef.current, "Desktop");
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
      budget: formData.get("budget") as string,
      propertySlug: "buea-cameroon",
      propertyTitle: "Shopping Centre – Buea, Cameroon",
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
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
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
    <div className="bg-[#fafafa] min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[850px] sm:h-[600px] md:h-[700px] lg:h-[760px] mb-[30px] md:mb-[75px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden bg-[#002f57]">
        {/* Mobile Video Background */}
        <div className="absolute inset-0 lg:hidden z-0">
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onLoadedData={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch((err) => console.error("Mobile video play error:", err));
            }}
            onCanPlay={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch((err) => console.error("Mobile video play error:", err));
            }}
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch((err) => console.error("Mobile video play error:", err));
            }}
            onError={(e) => {
              console.error("Mobile video error:", e);
              const video = e.currentTarget;
              console.error("Video error details:", {
                error: video.error,
                networkState: video.networkState,
                readyState: video.readyState,
                src: video.currentSrc
              });
            }}
            onStalled={() => console.log("Mobile video stalled")}
            onWaiting={() => console.log("Mobile video waiting")}
          >
            <source src="/images/International-Properties/buea-cameroon-mbl-bg.webm" type="video/webm" />
          </video>
        </div>
        {/* Desktop Video Background */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <video
            ref={desktopVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            onLoadedData={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch((err) => console.error("Desktop video play error:", err));
            }}
            onCanPlay={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch((err) => console.error("Desktop video play error:", err));
            }}
            onLoadedMetadata={(e) => {
              const video = e.currentTarget;
              video.muted = true;
              video.play().catch((err) => console.error("Desktop video play error:", err));
            }}
            onError={(e) => {
              console.error("Desktop video error:", e);
              const video = e.currentTarget;
              console.error("Video error details:", {
                error: video.error,
                networkState: video.networkState,
                readyState: video.readyState,
                src: video.currentSrc
              });
            }}
            onStalled={() => console.log("Desktop video stalled")}
            onWaiting={() => console.log("Desktop video waiting")}
          >
            <source src="/images/International-Properties/buea-cameroon-bg-dsk.webm" type="video/webm" />
          </video>
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-4 sm:px-6 max-w-[1300px] mx-auto pb-4 sm:pb-6 md:pb-[31px]">
          <h1 className="font-crimson text-white text-[28px] sm:text-[36px] md:text-[48px] lg:text-[66px] leading-tight sm:leading-[42px] md:leading-[56px] lg:leading-[72px] tracking-tight lg:tracking-[-1.98px] mb-3 sm:mb-4">
            Shopping Centre - Buea, Cameroon
          </h1>
          <p className="font-manrope text-white text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] mb-6 sm:mb-8 max-w-[1300px] px-2">
            A contemporary shopping centre designed to support retail, dining, and lifestyle experiences for a fast‑growing urban community. Positioned along the Molyko corridor, this development offers strategic visibility, modern infrastructure, and strong long‑term commercial demand.
          </p>
          <Link
            href="/contact"
            className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-manrope font-semibold text-[#002f57] text-[16px] sm:text-[18px] hover:bg-white/90 transition-colors"
          >
            Register Your Interest
          </Link>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="max-w-[1300px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-4 sm:px-6 py-[30px] md:py-[75px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[139px] items-center">
          <div className="w-full lg:w-[638px] h-[300px] sm:h-[400px] lg:h-[512px] min-h-[300px] min-w-0 rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] overflow-hidden relative flex-shrink-0">
            <Image
              src="/images/International-Properties/Project highlights.png"
              alt="Shopping Centre exterior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 638px"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h2 className="font-crimson text-[#002f57] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] mb-6 sm:mb-8">
              Project highlights
            </h2>
            <div className="space-y-5 sm:space-y-7">
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src="/images/International-Properties/Buea, Cameroon.svg"
                    alt="Buea, Cameroon icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="font-crimson font-semibold text-[#002f57] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] sm:leading-[28px] lg:leading-[30px]">Buea, Cameroon</p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src="/images/International-Properties/Retail & Mixed‑Use Commercial.svg"
                    alt="Retail & Mixed‑Use Commercial icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="font-crimson font-semibold text-[#002f57] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] sm:leading-[28px] lg:leading-[30px]">Retail & Mixed‑Use Commercial</p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src="/images/International-Properties/Proposed Development (Conceptual Design).svg"
                    alt="Proposed Development icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="font-crimson font-semibold text-[#002f57] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] sm:leading-[28px] lg:leading-[30px]">Proposed Development (Conceptual Design)</p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src="/images/International-Properties/~1,930 sqm.svg"
                    alt="Area icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="font-crimson font-semibold text-[#002f57] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] sm:leading-[28px] lg:leading-[30px]">~1,930 sqm</p>
              </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src="/images/International-Properties/Multi‑level retail structure.svg"
                    alt="Multi-level retail structure icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="font-crimson font-semibold text-[#002f57] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] sm:leading-[28px] lg:leading-[30px]">Multi‑level retail structure</p>
                  </div>
              <div className="flex gap-3 sm:gap-4 items-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center flex-shrink-0 relative">
                  <Image
                    src="/images/International-Properties/Available on request.svg"
                    alt="Available on request icon"
                    width={40}
                    height={40}
                    className="object-contain w-full h-full"
                    unoptimized
                  />
                </div>
                <p className="font-crimson font-semibold text-[#002f57] text-[18px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[24px] sm:leading-[28px] lg:leading-[30px]">Available on request</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* A New Standard Section */}
      <section className="max-w-[1300px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-4 sm:px-6 py-[30px] md:py-[75px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="w-full lg:flex-1">
            <h2 className="font-crimson text-[#002f57] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] mb-4">
              A New Standard of Place‑Making
            </h2>
            <p className="font-manrope text-[#333] opacity-80 text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
              Situated in Buea's thriving Molyko corridor, the Shopping Centre reimagines local commerce and everyday convenience with a refined retail boulevard, modern commercial spaces, and flexible units for tenants of all categories. The masterplan blends functionality with contemporary design creating a dynamic retail destination built for strong long‑term returns.
            </p>
          </div>
          <div className="w-full lg:w-[609px] h-[300px] sm:h-[400px] lg:h-[450px] min-h-[300px] min-w-0 rounded-[20px] sm:rounded-[24px] lg:rounded-[26px] overflow-hidden border border-[rgba(0,0,0,0.12)] relative flex-shrink-0">
            <Image
              src="/images/International-Properties/A New Standard of Place‑Making.png"
              alt="Modern restaurant interior"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 609px"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Masterplan Overview Section */}
      <section className="max-w-[1300px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-4 sm:px-6 py-[30px] md:py-[75px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start">
          <div className="w-full lg:w-[650px] h-[400px] sm:h-[500px] lg:h-[656px] min-h-[400px] min-w-0 rounded-[24px] sm:rounded-[30px] lg:rounded-[36px] overflow-hidden relative flex-shrink-0">
            <Image
              src="/images/International-Properties/Masterplan Overview.png"
              alt="Masterplan overview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 650px"
              unoptimized
            />
          </div>
          <div className="flex-1 pt-0 lg:pt-8">
            <h2 className="font-crimson text-[#002f57] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[66px] tracking-tight lg:tracking-[-1.68px] mb-6 sm:mb-8">
              Masterplan Overview
            </h2>

            <div className="space-y-6 sm:space-y-9">
              <div>
                <h3 className="font-crimson font-semibold text-[#1e1e1e] text-[20px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-3">
                  Site Characteristics
                </h3>
                <div className="space-y-2">
                  <BulletPoint text="Located in a growing commercial node within Buea" />
                  <BulletPoint text="Proximity to the University of Buea" />
                  <BulletPoint text="Surrounded by dense residential clusters" />
                  <BulletPoint text="High pedestrian and vehicular flow" />
                  <BulletPoint text="Accessible via adjacent road networks" />
                </div>
              </div>

              <div>
                <h3 className="font-crimson font-semibold text-[#1e1e1e] text-[20px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-3">
                  Design Intent
                </h3>
                <div className="space-y-2">
                  <BulletPoint text="Clear functional zoning across multiple levels" />
                  <BulletPoint text="Optimised circulation for visitors and tenants" />
                  <BulletPoint text="Flexible retail bay layouts supporting diverse business types" />
                  <BulletPoint text="Strong back‑of‑house service pathways" />
                  <BulletPoint text="Structural grid designed for efficient construction" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted for Elegance Section */}
      <section className="max-w-[1300px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-4 sm:px-6 py-[30px] md:py-[75px]">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[638px] flex-shrink-0">
            <div className="mb-6 sm:mb-8">
              <h2 className="font-crimson text-[#002f57] text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] mb-4">
                Crafted for Elegance, Engineered for Performance
              </h2>
              <p className="font-manrope text-[#333] opacity-80 text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
                The architectural concept balances practicality with contemporary visual appeal. The building massing maximises frontage for retailers, while its façade integrates clean geometric lines, prominent signage zones, and glazed surfaces that elevate the customer experience.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="font-crimson font-semibold text-[#1e1e1e] text-[18px] sm:text-[20px] leading-[24px] sm:leading-[28px] mb-4">
                Key Features
              </h3>
              <div className="space-y-2">
                <KeyFeatureBullet text="Multiple access points" />
                <KeyFeatureBullet text="Prominent façade visibility" />
                <KeyFeatureBullet text="Optimised natural lighting" />
                <KeyFeatureBullet text="Efficient internal circulation" />
                <KeyFeatureBullet text="Retail-friendly layouts" />
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="w-full lg:flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-[26px]">
            <div className="w-full h-[180px] sm:h-[200px] lg:h-[226px] min-h-[180px] min-w-0 rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Crafted for Elegance, Engineered for Performance-1.png"
                alt="Architectural detail 1"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="w-full h-[180px] sm:h-[200px] lg:h-[226px] min-h-[180px] min-w-0 rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Crafted for Elegance, Engineered for Performance-2.png"
                alt="Architectural detail 2"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="w-full h-[180px] sm:h-[200px] lg:h-[226px] min-h-[180px] min-w-0 rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Crafted for Elegance, Engineered for Performance-3.png"
                alt="Architectural detail 3"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="w-full h-[180px] sm:h-[200px] lg:h-[226px] min-h-[180px] min-w-0 rounded-[20px] sm:rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Crafted for Elegance, Engineered for Performance-4.png"
                alt="Architectural detail 4"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover the Layout Section */}
      <section className="bg-white py-[30px] md:py-[75px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <h2 className="font-crimson text-[#002f57] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight lg:leading-[56px] text-center mb-8 sm:mb-12">
            Discover the Layout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Ground Floor Plan */}
            <div className="relative rounded-[16px] overflow-hidden">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] min-h-[250px] min-w-0">
                <Image
                  src="/images/International-Properties/Mask group (4).png"
                  alt="Ground Floor - Retail Plan"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#002f57] to-transparent">
                <h3 className="font-crimson font-semibold text-white text-[24px] sm:text-[28px] lg:text-[32px] mb-2 sm:mb-3">Ground Floor - Retail Plan</h3>
                <ul className="space-y-1 sm:space-y-1.5">
                  <li className="font-manrope text-white text-[12px] sm:text-[14px]">• On-site pedestrian movement</li>
                  <li className="font-manrope text-white text-[12px] sm:text-[14px]">• Rental-optimised lot arrangement</li>
                  <li className="font-manrope text-white text-[12px] sm:text-[14px]">• Rear corridors for operations</li>
                </ul>
              </div>
            </div>
            {/* First Floor Plan */}
            <div className="relative rounded-[16px] overflow-hidden">
              <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] min-h-[250px] min-w-0">
                <Image
                  src="/images/International-Properties/Mask group (5).png"
                  alt="First Floor - Retail & Commercial"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-[#002f57] to-transparent">
                <h3 className="font-crimson font-semibold text-white text-[24px] sm:text-[28px] lg:text-[32px] mb-2 sm:mb-3">First Floor - Retail & Commercial</h3>
                <ul className="space-y-1 sm:space-y-1.5">
                  <li className="font-manrope text-white text-[12px] sm:text-[14px]">• Scalable offices, services, retail, and restaurants</li>
                  <li className="font-manrope text-white text-[12px] sm:text-[14px]">• Open walkways and spatial variety</li>
                  <li className="font-manrope text-white text-[12px] sm:text-[14px]">• Suitable for multiple tenant types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Collection Section */}
      <section className="bg-[#fafafa] py-[30px] md:py-[75px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="font-crimson text-[#002f57] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight lg:leading-[56px] mb-3">
              Explore the Collection
            </h2>
            <p className="font-manrope text-[#333] opacity-70 text-[14px] sm:text-[16px]">
              Build your modern lifestyle or invest in the design, retail, and commercial anchors that bring the destination to life.
            </p>
          </div>

          <div className="bg-white rounded-[8px] overflow-hidden border border-[rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-[#002f57]">
                    <th className="font-crimson font-semibold text-white text-[14px] sm:text-[16px] lg:text-[18px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left">Type</th>
                    <th className="font-crimson font-semibold text-white text-[14px] sm:text-[16px] lg:text-[18px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left">Level</th>
                    <th className="font-crimson font-semibold text-white text-[14px] sm:text-[16px] lg:text-[18px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left">Size</th>
                    <th className="font-crimson font-semibold text-white text-[14px] sm:text-[16px] lg:text-[18px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left">Starting At</th>
                    <th className="font-crimson font-semibold text-white text-[14px] sm:text-[16px] lg:text-[18px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4 text-left">Availability</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[rgba(0,0,0,0.08)]">
                    <td className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Retail Unit</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Ground Floor</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">25 m²</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">AVAILABLE ASP</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Available</td>
                  </tr>
                  <tr className="border-b border-[rgba(0,0,0,0.08)]">
                    <td className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Small Office Space</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">1st Floor</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">30 m²</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">AVAILABLE ASP</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Available</td>
                  </tr>
                  <tr className="border-b border-[rgba(0,0,0,0.08)]">
                    <td className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Office Space</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">1st Floor</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">45 m²</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">AVAILABLE ASP</td>
                    <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-3 sm:px-4 lg:px-6 py-3 sm:py-4">Sold</td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Here Section */}
      <section className="bg-white py-[30px] md:py-[75px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-crimson text-[#002f57] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight lg:leading-[56px] mb-4 sm:mb-6">
                Why Invest Here
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                <li className="font-manrope text-[#333] text-[14px] sm:text-[16px]">• Strong demand from students, families, and local businesses</li>
                <li className="font-manrope text-[#333] text-[14px] sm:text-[16px]">• High footfall stemming from strategic location</li>
                <li className="font-manrope text-[#333] text-[14px] sm:text-[16px]">• Diverse tenant opportunities</li>
                <li className="font-manrope text-[#333] text-[14px] sm:text-[16px]">• Positioned adjacent to a high-density residential</li>
              </ul>
            </div>
            <div className="w-full lg:w-[520px] h-[250px] sm:h-[300px] lg:h-[350px] min-h-[250px] min-w-0 rounded-[16px] overflow-hidden flex-shrink-0 relative">
              <Image
                src="/images/International-Properties/Why Invest Here.png"
                alt="Investment opportunity"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 520px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans Section */}
      <section className="bg-[#fafafa] py-[30px] md:py-[75px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-4">
            <h2 className="font-crimson text-[#002f57] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight lg:leading-[56px]">
              Payment Plans & Ownership Options
            </h2>
            <div className="flex items-center gap-2 sm:gap-3 font-manrope text-[#333] text-[14px] sm:text-[16px]">
              <span>•</span>
              <button
                onClick={() => setSelectedCurrency("XAF")}
                className={`px-3 py-1.5 rounded-[6px] transition-colors font-semibold ${
                  selectedCurrency === "XAF"
                    ? "bg-[#002f57] text-white"
                    : "bg-transparent text-[#333] hover:bg-[#002f57]/10"
                }`}
              >
                XAF
              </button>
              <button
                onClick={() => setSelectedCurrency("USD")}
                className={`px-3 py-1.5 rounded-[6px] transition-colors font-semibold ${
                  selectedCurrency === "USD"
                    ? "bg-[#002f57] text-white"
                    : "bg-transparent text-[#333] hover:bg-[#002f57]/10"
                }`}
              >
                USD
              </button>
              <button
                onClick={() => setSelectedCurrency("GBP")}
                className={`px-3 py-1.5 rounded-[6px] transition-colors font-semibold ${
                  selectedCurrency === "GBP"
                    ? "bg-[#002f57] text-white"
                    : "bg-transparent text-[#333] hover:bg-[#002f57]/10"
                }`}
              >
                GBP
              </button>
            </div>
          </div>
          <p className="font-manrope text-[#333] opacity-70 text-[14px] sm:text-[16px] mb-8 sm:mb-10">
            Flexible pathways designed for both local and international clients. Prices displayed in XAF with optional USD/GBP toggle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)]">
              <h3 className="font-crimson font-semibold text-[#002f57] text-[20px] sm:text-[24px] mb-4 sm:mb-6">Payment Channels</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• Mobile Money</li>
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• Orange Money</li>
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• MoneyGram</li>
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• International bank transfers (USD/GBP)</li>
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• Escrow-protected reservation process</li>
              </ul>
            </div>
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)]">
              <h3 className="font-crimson font-semibold text-[#002f57] text-[20px] sm:text-[24px] mb-4 sm:mb-6">Reservation</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">
                  • Secure your unit from{" "}
                  {selectedCurrency === "XAF" && "500,000 XAF"}
                  {selectedCurrency === "USD" && "833 USD"}
                  {selectedCurrency === "GBP" && "667 GBP"}
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)]">
              <h3 className="font-crimson font-semibold text-[#002f57] text-[20px] sm:text-[24px] mb-4 sm:mb-6">Payment Schedules</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• Milestone-based</li>
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• Monthly plan options</li>
                <li className="font-manrope text-[#333] text-[13px] sm:text-[15px]">• Early-bird incentives (where applicable)</li>
                </ul>
              </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-[30px] md:py-[75px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-crimson text-[#002f57] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight lg:leading-[56px] mb-6 sm:mb-10">
                Resources
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                <li className="hidden">
                  <a href="#" className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] underline">• Project Brochure - [Download PDF]</a>
                </li>
                <li>
                  <a 
                    href="/images/International-Properties/Shopping Centre Buea Cameroon - PDF file (2).pdf" 
                    download="Shopping Centre Buea Cameroon - PDF file (2).pdf"
                    className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] underline hover:text-[#003d70] transition-colors"
                  >
                    • Floor Plans - [Download PDF]
                  </a>
                </li>
                <li className="hidden">
                  <a href="#" className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] underline">• Sales Pack - [Send via Email]</a>
                </li>
                <li className="hidden">
                  <a href="#" className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] underline">• Investment Overview - [Send via Email]</a>
                  </li>
              </ul>
            </div>
            <div className="w-full lg:w-[480px] h-[250px] sm:h-[300px] lg:h-[320px] min-h-[250px] min-w-0 rounded-[16px] overflow-hidden flex-shrink-0 relative">
              <Image
                src="/images/International-Properties/Resources.png"
                alt="Resources"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 480px"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Register Your Interest Section */}
      <section id="enquiry" className="bg-[#fafafa] py-[30px] md:py-[75px]">
        <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="font-crimson text-[#002f57] text-[28px] sm:text-[36px] md:text-[42px] lg:text-[46px] leading-tight lg:leading-[56px] mb-4">
                Register Your Interest
              </h2>
              <p className="font-manrope text-[#333] opacity-70 text-[14px] sm:text-[16px]">
                Get in touch with us early and you can lock your spot in the property. We're currently in the early commercial phase.
              </p>
            </div>
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)]">
              <h3 className="font-crimson font-semibold text-[#002f57] text-[24px] sm:text-[28px] mb-4 sm:mb-6">
                Enquiry Form
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Full Name</label>
                  <input type="text" name="name" required className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white" placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Email Address</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Phone Number</label>
                  <input type="tel" name="phone" required className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white" placeholder="+237" />
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Budget</label>
                  <select name="budget" className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white">
                    <option>Select budget range</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white resize-none"
                    placeholder="Tell us about your interest..."
                  />
                </div>
                {submitStatus === "success" && (
                  <div className="p-3 bg-green-50 border border-green-200 rounded-[8px] text-green-700 text-sm font-manrope">
                    Thank you! We'll be in touch soon.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-[8px] text-red-700 text-sm font-manrope">
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}
                <button type="submit" disabled={isSubmitting} className="w-full bg-[#002f57] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[8px] font-manrope font-semibold text-[14px] sm:text-[16px] hover:bg-[#003d70] transition disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? "Submitting..." : "Register Interest"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function BulletPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 sm:gap-3">
      <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-2 sm:mt-3 flex-shrink-0" />
      <p className="font-manrope text-[#333] opacity-80 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px]">{text}</p>
    </div>
  );
}

function KeyFeatureBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 sm:gap-4">
      <div className="w-[7px] h-[7px] rounded-full bg-[#002f57] mt-2 sm:mt-3 flex-shrink-0" />
      <p className="font-manrope text-[#333] opacity-80 text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px]">{text}</p>
    </div>
  );
}
