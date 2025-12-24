"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BueaCameroonProject() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

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
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section with Video Background */}
      <section className="relative h-[600px] sm:h-[700px] lg:h-[760px] mx-5 mb-20 rounded-b-[36px] overflow-hidden pt-[100px] lg:pt-[120px]">
        <div className="absolute inset-0">
          <Image
            src="/images/International-Properties/Group 7614.png"
            alt="Shopping Centre Buea Cameroon"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] max-w-[1070px] mx-auto">
          <h1 className="font-crimson text-white text-[36px] sm:text-[48px] md:text-[56px] lg:text-[66px] leading-tight sm:leading-[56px] md:leading-[66px] lg:leading-[72px] tracking-[-1.1px] md:tracking-[-1.68px] mb-4">
            Shopping Centre - Buea, Cameroon
          </h1>
          <p className="font-manrope text-white text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] mb-8 max-w-[1070px]">
            A contemporary shopping centre designed to support retail, dining, and lifestyle experiences for a fast‑growing urban community. Positioned along the Molyko corridor, this development offers strategic visibility, modern infrastructure, and strong long‑term commercial demand.
          </p>
          <Link
            href="#enquiry"
            className="bg-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-manrope font-semibold text-[#002f57] text-[16px] sm:text-[18px] hover:bg-white/90 transition-colors"
          >
            Register Your Interest
          </Link>
        </div>
      </section>

      {/* Project Highlights Section */}
      <section className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[139px] items-center">
          <div className="w-full lg:w-[638px] h-[400px] sm:h-[450px] lg:h-[512px] rounded-[36px] overflow-hidden relative flex-shrink-0">
            <Image
              src="/images/International-Properties/Mask group (4).png"
              alt="Shopping Centre exterior"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1">
            <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57] mb-8">
              Project highlights
            </h2>
            <div className="space-y-7">
              {[
                { icon: "📍", text: "Buea, Cameroon" },
                { icon: "🏢", text: "Retail & Mixed‑Use Commercial" },
                { icon: "📐", text: "Proposed Development (Conceptual Design)" },
                { icon: "📏", text: "~1,930 sqm" },
                { icon: "🏗️", text: "Multi‑level retail structure" },
                { icon: "💰", text: "Available on request" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 items-center">
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-[#002f57] text-xl">
                    {item.icon}
                  </div>
                  <p className="font-crimson font-semibold text-[#002f57] text-[20px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[30px]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A New Standard Section */}
      <section className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          <div className="flex-1">
            <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57] mb-4">
              A New Standard of Place‑Making
            </h2>
            <p className="font-manrope text-[#333] opacity-80 text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
              Situated in Buea's thriving Molyko corridor, the Shopping Centre reimagines local commerce and everyday convenience with a refined retail boulevard, modern commercial spaces, and flexible units for tenants of all categories. The masterplan blends functionality with contemporary design creating a dynamic retail destination built for strong long‑term returns.
            </p>
          </div>
          <div className="w-full lg:w-[609px] h-[350px] sm:h-[400px] lg:h-[450px] rounded-[26px] overflow-hidden border border-[rgba(0,0,0,0.12)] relative flex-shrink-0">
            <Image
              src="/images/International-Properties/Mask group (5).png"
              alt="Modern restaurant interior"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Masterplan Overview Section */}
      <section className="max-w-[1296px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[100px] items-start">
          <div className="w-full lg:w-[650px] h-[400px] sm:h-[500px] lg:h-[656px] rounded-[36px] overflow-hidden relative flex-shrink-0">
            <Image
              src="/images/International-Properties/Mask group (3).png"
              alt="Masterplan overview"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex-1 pt-0 lg:pt-8">
            <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[66px] tracking-tight lg:tracking-[-1.68px] text-[#002f57] mb-8">
              Masterplan Overview
            </h2>

            <div className="space-y-9">
              <div>
                <h3 className="font-crimson font-semibold text-[#1e1e1e] text-[22px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-3">
                  Site Characteristics
                </h3>
                <div className="space-y-2">
                  {[
                    "Located in a growing commercial node within Buea",
                    "Proximity to the University of Buea",
                    "Surrounded by dense residential clusters",
                    "High pedestrian and vehicular flow",
                    "Accessible via adjacent road networks",
                  ].map((text, i) => (
                    <BulletPoint key={i} text={text} />
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-crimson font-semibold text-[#1e1e1e] text-[22px] sm:text-[24px] lg:text-[26px] leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-3">
                  Design Intent
                </h3>
                <div className="space-y-2">
                  {[
                    "Clear functional zoning across multiple levels",
                    "Optimised circulation for visitors and tenants",
                    "Flexible retail bay layouts supporting diverse business types",
                    "Strong back‑of‑house service pathways",
                    "Structural grid designed for efficient construction",
                  ].map((text, i) => (
                    <BulletPoint key={i} text={text} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafted for Elegance Section */}
      <section className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-start">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-[638px] flex-shrink-0">
            <div className="mb-8">
              <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57] mb-4">
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
                {[
                  "Multiple access points",
                  "Prominent façade visibility",
                  "Optimised natural lighting",
                  "Efficient internal circulation",
                  "Retail-friendly layouts",
                ].map((text, i) => (
                  <KeyFeatureBullet key={i} text={text} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-[26px]">
            <div className="w-full h-[200px] sm:h-[226px] rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Mask group (4).png"
                alt="Architectural detail 1"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="w-full h-[200px] sm:h-[226px] rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Mask group (5).png"
                alt="Architectural detail 2"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="w-full h-[200px] sm:h-[226px] rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Mask group (6).png"
                alt="Architectural detail 3"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="w-full h-[200px] sm:h-[226px] rounded-[24px] overflow-hidden relative">
              <Image
                src="/images/International-Properties/Mask group (3).png"
                alt="Architectural detail 4"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Discover the Layout Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[46px] leading-tight lg:leading-[56px] text-center text-[#002f57] mb-12">
            Discover the Layout
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ground Floor Plan */}
            <div className="relative rounded-[16px] overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[350px]">
                <Image
                  src="/images/International-Properties/Mask group (4).png"
                  alt="Ground Floor - Retail Plan"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#002f57] to-transparent">
                <h3 className="font-crimson font-semibold text-white text-[24px] sm:text-[28px] lg:text-[32px] mb-3">
                  Ground Floor - Retail Plan
                </h3>
                <ul className="space-y-1.5">
                  <li className="font-manrope text-white text-[14px]">• On-site pedestrian movement</li>
                  <li className="font-manrope text-white text-[14px]">• Rental-optimised lot arrangement</li>
                  <li className="font-manrope text-white text-[14px]">• Rear corridors for operations</li>
                </ul>
              </div>
            </div>
            {/* First Floor Plan */}
            <div className="relative rounded-[16px] overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[350px]">
                <Image
                  src="/images/International-Properties/Mask group (5).png"
                  alt="First Floor - Retail & Commercial"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#002f57] to-transparent">
                <h3 className="font-crimson font-semibold text-white text-[24px] sm:text-[28px] lg:text-[32px] mb-3">
                  First Floor - Retail & Commercial
                </h3>
                <ul className="space-y-1.5">
                  <li className="font-manrope text-white text-[14px]">• Scalable offices, services, retail, and restaurants</li>
                  <li className="font-manrope text-white text-[14px]">• Open walkways and spatial variety</li>
                  <li className="font-manrope text-white text-[14px]">• Suitable for multiple tenant types</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore the Collection Section */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-[1100px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <div className="text-center mb-8">
            <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[46px] leading-tight lg:leading-[56px] mb-3 text-[#002f57]">
              Explore the Collection
            </h2>
            <p className="font-manrope text-[#333] opacity-70 text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              Build your modern lifestyle or invest in the design, retail, and commercial anchors that bring the destination to life.
            </p>
          </div>

          <div className="bg-white rounded-[8px] overflow-hidden border border-[rgba(0,0,0,0.08)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[600px]">
                <thead>
                  <tr className="bg-[#002f57]">
                    <th className="font-crimson font-semibold text-white text-[16px] sm:text-[18px] px-4 sm:px-6 py-4 text-left">
                      Type
                    </th>
                    <th className="font-crimson font-semibold text-white text-[16px] sm:text-[18px] px-4 sm:px-6 py-4 text-left">
                      Level
                    </th>
                    <th className="font-crimson font-semibold text-white text-[16px] sm:text-[18px] px-4 sm:px-6 py-4 text-left">
                      Size
                    </th>
                    <th className="font-crimson font-semibold text-white text-[16px] sm:text-[18px] px-4 sm:px-6 py-4 text-left">
                      Starting At
                    </th>
                    <th className="font-crimson font-semibold text-white text-[16px] sm:text-[18px] px-4 sm:px-6 py-4 text-left">
                      Availability
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Retail Unit", level: "Ground Floor", size: "25 m²", price: "AVAILABLE ASP", availability: "Available" },
                    { type: "Small Office Space", level: "1st Floor", size: "30 m²", price: "AVAILABLE ASP", availability: "Available" },
                    { type: "Office Space", level: "1st Floor", size: "45 m²", price: "AVAILABLE ASP", availability: "Sold" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[rgba(0,0,0,0.08)]">
                      <td className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] px-4 sm:px-6 py-4">{row.type}</td>
                      <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-4 sm:px-6 py-4">{row.level}</td>
                      <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-4 sm:px-6 py-4">{row.size}</td>
                      <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-4 sm:px-6 py-4">{row.price}</td>
                      <td className="font-manrope text-[#333] text-[14px] sm:text-[16px] px-4 sm:px-6 py-4">{row.availability}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Why Invest Here Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1">
              <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[46px] leading-tight lg:leading-[56px] mb-6 text-[#002f57]">
                Why Invest Here
              </h2>
              <ul className="space-y-3">
                {[
                  "Strong demand from students, families, and local businesses",
                  "High footfall stemming from strategic location",
                  "Diverse tenant opportunities",
                  "Positioned adjacent to a high-density residential",
                ].map((item, i) => (
                  <li key={i} className="font-manrope text-[#333] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[520px] h-[300px] sm:h-[350px] rounded-[16px] overflow-hidden flex-shrink-0 relative">
              <Image
                src="/images/International-Properties/Mask group (6).png"
                alt="Investment opportunity"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Payment Plans Section */}
      <section className="bg-[#FAFAFA] py-20">
        <div className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <div className="flex flex-col sm:flex-row items-start justify-between mb-3 gap-4">
            <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[46px] leading-tight lg:leading-[56px] text-[#002f57]">
              Payment Plans & Ownership Options
            </h2>
            <div className="flex items-center gap-4 font-manrope text-[#333] text-[14px] sm:text-[16px]">
              <span>•</span>
              <span>XAF</span>
              <span>USD</span>
              <span>GBP</span>
            </div>
          </div>
          <p className="font-manrope text-[#333] opacity-70 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px] mb-10">
            Flexible pathways designed for both local and international clients. Prices displayed in XAF with optional USD/GBP toggle.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Payment Channels",
                items: [
                  "Mobile Money",
                  "Orange Money",
                  "MoneyGram",
                  "International bank transfers (USD/GBP)",
                  "Escrow-protected reservation process",
                ],
              },
              {
                title: "Reservation",
                items: ["Secure your unit from 500,000 XAF"],
              },
              {
                title: "Payment Schedules",
                items: [
                  "Milestone-based",
                  "Monthly plan options",
                  "Early-bird incentives (where applicable)",
                ],
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[16px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)]">
                <h3 className="font-crimson font-semibold text-[#002f57] text-[20px] sm:text-[24px] mb-6">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="font-manrope text-[#333] text-[13px] sm:text-[15px] leading-[20px] sm:leading-[22px]">
                      • {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-20">
        <div className="max-w-[1280px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[46px] leading-tight lg:leading-[56px] mb-10 text-[#002f57]">
            Resources
          </h2>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            <div className="flex-1">
              <ul className="space-y-4">
                {[
                  "Project Brochure - [Download PDF]",
                  "Floor Plans - [Download PDF]",
                  "Sales Pack - [Send via Email]",
                  "Investment Overview - [Send via Email]",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="font-manrope text-[#002f57] text-[14px] sm:text-[16px] underline hover:text-[#29902e] transition-colors"
                    >
                      • {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-[480px] h-[250px] sm:h-[320px] rounded-[16px] overflow-hidden flex-shrink-0">
              <Image
                src="/images/International-Properties/Mask group (6).png"
                alt="Resources"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Register Your Interest Section */}
      <section id="enquiry" className="bg-[#FAFAFA] py-20">
        <div className="max-w-[1100px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            <div>
              <h2 className="font-crimson text-[36px] sm:text-[42px] md:text-[46px] leading-tight lg:leading-[56px] mb-4 text-[#002f57]">
                Register Your Interest
              </h2>
              <p className="font-manrope text-[#333] opacity-70 text-[14px] sm:text-[16px] leading-[22px] sm:leading-[24px]">
                Get in touch with us early and you can lock your spot in the property. We're currently in the early commercial phase.
              </p>
            </div>
            <div className="bg-white rounded-[16px] p-6 sm:p-8 border border-[rgba(0,0,0,0.08)]">
              <h3 className="font-crimson font-semibold text-[#002f57] text-[24px] sm:text-[28px] mb-6">
                Enquiry Form
              </h3>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white focus:outline-none focus:border-[#002f57]"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white focus:outline-none focus:border-[#002f57]"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white focus:outline-none focus:border-[#002f57]"
                    placeholder="+237"
                  />
                </div>
                <div>
                  <label className="block font-manrope text-[#333] text-[14px] mb-2">Budget</label>
                  <select
                    name="budget"
                    className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white focus:outline-none focus:border-[#002f57]"
                  >
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
                    className="w-full px-4 py-3 border border-[rgba(0,0,0,0.12)] rounded-[8px] font-manrope text-[14px] sm:text-[16px] bg-white focus:outline-none focus:border-[#002f57] resize-none"
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
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#002f57] text-white px-8 py-4 rounded-[8px] font-manrope font-semibold text-[14px] sm:text-[16px] hover:bg-[#003d70] transition disabled:opacity-50 disabled:cursor-not-allowed"
                >
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
    <div className="flex items-start gap-3">
      <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-3 flex-shrink-0" />
      <p className="font-manrope text-[#333] opacity-80 text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
        {text}
      </p>
    </div>
  );
}

function KeyFeatureBullet({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-[7px] h-[7px] rounded-full bg-[#002f57] mt-3 flex-shrink-0" />
      <p className="font-manrope text-[#333] opacity-80 text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px]">
        {text}
      </p>
    </div>
  );
}
