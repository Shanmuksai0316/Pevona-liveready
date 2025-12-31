"use client";

import { useState } from "react";
import Image from "next/image";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const subjectLabels: { [key: string]: string } = {
    "property-management": "Property Management",
    "lettings": "Lettings",
    "investments": "Investments",
    "valuation": "Property Valuation",
    "general": "General Inquiry",
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Validate required fields before submission
    if (!name || !email || !phone || !subject || !message) {
      console.error("Validation failed: Missing required fields", { 
        name: !!name, 
        email: !!email, 
        phone: !!phone,
        subject: !!subject,
        message: !!message
      });
      setSubmitStatus("error");
      setIsSubmitting(false);
      return;
    }

    // Format message to include subject
    const subjectLabel = subjectLabels[subject] || subject;
    const fullMessage = `Subject: ${subjectLabel}\n\n${message}`;

    // Use subject as propertyTitle for general enquiries
    const propertyTitle = subjectLabel;

    const data = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: fullMessage,
      propertySlug: "",
      propertyTitle,
      subject: subjectLabel, // Send subject separately for API
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
        const responseData = await response.json().catch(() => ({}));
        console.log("Form submitted successfully:", responseData);
        setSubmitStatus("success");
        (e.target as HTMLFormElement).reset();
        // Reset success message after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        let errorData;
        try {
          errorData = await response.json();
        } catch (e) {
          const text = await response.text().catch(() => "Unable to read error response");
          errorData = { error: "Failed to parse error response", rawResponse: text };
        }
        
        console.error("Form submission error:", response.status, errorData);
        // Log more details for debugging - expanded format for better visibility
        console.group("🔴 Form Submission Error Details");
        console.error("Status:", response.status, response.statusText);
        console.error("Error Message:", errorData.error || errorData.message || "Unknown error");
        console.error("Strapi URL:", errorData.strapiUrl || "Not provided");
        console.error("Has API Token:", errorData.hasToken ? "✅ Yes" : "❌ No");
        console.error("Status Code:", errorData.statusCode || response.status);
        if (errorData.errorDetails) {
          console.error("Error Details:", errorData.errorDetails);
        }
        if (errorData.details) {
          console.error("Full Details:", errorData.details);
        }
        console.error("Submitted Data:", { 
          name: name ? "provided" : "missing", 
          email: email ? "provided" : "missing", 
          phone: phone ? "provided" : "missing", 
          subject: subject ? "provided" : "missing", 
          message: message ? "provided" : "missing" 
        });
        console.error("Full Error Object:", errorData);
        console.groupEnd();
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      // Log network errors
      if (error instanceof Error) {
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
      }
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-[400px] sm:h-[450px] lg:h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#002f57] to-[#001a2e]"></div>
        <div className="relative z-10 flex flex-col items-center gap-[12px] sm:gap-[16px] text-center px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h1 className="font-crimson text-[28px] sm:text-[36px] md:text-[42px] lg:text-[56px] leading-tight lg:leading-[56px] text-white tracking-tight lg:tracking-[-1.68px]">
            Get In Touch
          </h1>
          <p className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-white opacity-90 max-w-[600px]">
            Have questions? We're here to help. Reach out to our team for expert guidance on property management, lettings, and investments.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="flex flex-col lg:flex-row gap-[40px] sm:gap-[50px] lg:gap-[60px] items-start justify-center px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[40px] sm:pt-[60px] lg:pt-[80px] w-full max-w-[1560px]">
        {/* Contact Form */}
        <div className="flex-1 w-full max-w-[600px]">
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-[24px] sm:p-[32px] lg:p-[40px]">
            <h2 className="font-crimson text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-tight lg:leading-[42px] text-[#002f57] tracking-tight lg:tracking-[-1.26px] mb-[24px] sm:mb-[32px]">
              Send Us a Message
            </h2>
            <form className="flex flex-col gap-[20px] sm:gap-[24px]" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <label htmlFor="name" className="font-manrope font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333]">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="border border-[rgba(0,0,0,0.12)] rounded-[8px] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333] focus:outline-none focus:border-[#002f57]"
                  placeholder="John Doe"
                />
              </div>

              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <label htmlFor="email" className="font-manrope font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333]">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-[rgba(0,0,0,0.12)] rounded-[8px] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333] focus:outline-none focus:border-[#002f57]"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <label htmlFor="phone" className="font-manrope font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333]">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="border border-[rgba(0,0,0,0.12)] rounded-[8px] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333] focus:outline-none focus:border-[#002f57]"
                  placeholder="+44 20 1234 5678"
                />
              </div>

              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <label htmlFor="subject" className="font-manrope font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333]">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="border border-[rgba(0,0,0,0.12)] rounded-[8px] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333] focus:outline-none focus:border-[#002f57] bg-white"
                >
                  <option value="">Select a subject</option>
                  <option value="property-management">Property Management</option>
                  <option value="lettings">Lettings</option>
                  <option value="investments">Investments</option>
                  <option value="valuation">Property Valuation</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                <label htmlFor="message" className="font-manrope font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="border border-[rgba(0,0,0,0.12)] rounded-[8px] px-[12px] sm:px-[16px] py-[10px] sm:py-[12px] font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[26px] text-[#333333] focus:outline-none focus:border-[#002f57] resize-none"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === "success" && (
                <div className="bg-green-50 border border-green-200 rounded-[8px] p-4">
                  <p className="font-manrope text-[14px] sm:text-[16px] text-green-800">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="bg-red-50 border border-red-200 rounded-[8px] p-4">
                  <p className="font-manrope text-[14px] sm:text-[16px] text-red-800 mb-2">
                    Sorry, there was an error sending your message. Please try again or contact us directly.
                  </p>
                  <p className="font-manrope text-[12px] sm:text-[14px] text-red-600">
                    If the problem persists, please email us at{" "}
                    <a href="mailto:pebans@pevonaltd.co.uk" className="underline">pebans@pevonaltd.co.uk</a>
                    {" "}or call us at{" "}
                    <a href="tel:+4420386329485" className="underline">+44-203-8632-9485</a>.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#002f57] px-[10px] py-[10px] rounded-[8px] w-full h-[48px] sm:h-[56px] mt-[8px] hover:bg-[#001a2e] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="flex-1 w-full max-w-[500px]">
          <div className="flex flex-col gap-[32px] sm:gap-[40px]">
            <div>
              <h2 className="font-crimson text-[26px] sm:text-[32px] md:text-[36px] lg:text-[42px] leading-tight lg:leading-[42px] text-[#002f57] tracking-tight lg:tracking-[-1.26px] mb-[24px] sm:mb-[32px]">
                Contact Information
              </h2>
              <p className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#333333] mb-[24px] sm:mb-[32px]">
                We're here to help with all your property needs. Reach out through any of the channels below.
              </p>
            </div>

            <div className="flex flex-col gap-[24px] sm:gap-[32px]">
              {/* Email */}
              <div className="flex gap-[16px] sm:gap-[20px] items-start">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#002f57] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-crimson font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#002f57]">
                    Email
                  </h3>
                  <a href="mailto:admin-pev@pevonaltd.co.uk" className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#333333] hover:text-[#002f57] transition-colors">
                    admin-pev@pevonaltd.co.uk
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-[16px] sm:gap-[20px] items-start">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#002f57] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-crimson font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#002f57]">
                    Phone
                  </h3>
                  <a href="tel:+442036329485" className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#333333] hover:text-[#002f57] transition-colors">
                    +44-203-632-9485
                  </a>
                  <a href="tel:+447944228811" className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#333333] hover:text-[#002f57] transition-colors">
                    +447944-228811
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex gap-[16px] sm:gap-[20px] items-start">
                <div className="w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] bg-[#002f57] rounded-[12px] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <h3 className="font-crimson font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#002f57]">
                    Office Address
                  </h3>
                  <p className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[24px] lg:leading-[28px] text-[#333333]">
                    Flat 14, Burgundy House, 25 Liberty Bridge Road<br />
                    London, E20 1AQ
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex flex-col gap-[12px] sm:gap-[16px]">
              <h3 className="font-crimson font-semibold text-[18px] sm:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] lg:leading-[32px] text-[#002f57]">
                Follow Us
              </h3>
              <div className="flex gap-[12px] sm:gap-[16px] items-center">
                {[
                  { 
                    name: "LinkedIn", 
                    icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                    href: "https://www.linkedin.com/in/pevona-ltd-6a3512389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  },
                  { 
                    name: "Instagram", 
                    icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
                    href: "https://www.instagram.com/pevona_pevonaltd?igsh=cDNpb3ZwaXVtMm5t"
                  },
                  { 
                    name: "Facebook", 
                    icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                    href: "https://www.facebook.com/share/1Kma9mu8tr/"
                  },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] bg-[#002f57] rounded-[8px] flex items-center justify-center hover:bg-[#001a2e] transition-colors"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

