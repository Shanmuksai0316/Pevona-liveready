"use client";

import { useState } from "react";
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
    <div className="bg-white min-h-screen">
      {/* Hero / Gallery */}
      <section className="relative w-full">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {hasImages ? (
            <>
              <Image
                src={currentImageSrc}
                alt={attributes.title}
                fill
                className="object-cover"
                unoptimized
              />

              {gallery.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevImage}
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
                    onClick={nextImage}
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

      {/* Top summary bar */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-6xl px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em] mb-1">
              For Sale
            </p>
            <h1 className="font-crimson text-2xl md:text-3xl font-semibold text-pevona-dark leading-snug">
              {attributes.title}
            </h1>
            {fullAddress && (
              <p className="font-manrope text-sm text-gray-600 mt-2">{fullAddress}</p>
            )}
          </div>
          <div className="flex flex-col items-start md:items-end gap-1">
            <span className="font-manrope text-sm text-gray-500">Guide Price</span>
            <span className="font-crimson text-2xl md:text-3xl font-semibold text-pevona-dark">
              {attributes.currency}
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
            {/* Essentials */}
            <div>
              <h2 className="font-crimson text-xl md:text-2xl font-semibold text-pevona-dark mb-4">
                Property Essentials
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
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
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Type
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.property_type ?? "-"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Tenure
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.tenure_information ?? "-"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    Area (sq ft)
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.area ? attributes.area.toLocaleString("en-GB") : "-"}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="font-manrope text-xs text-gray-500 uppercase tracking-[0.18em]">
                    EPC Rating
                  </p>
                  <p className="font-manrope text-base text-gray-900">
                    {attributes.epc_rating ?? "-"}
                  </p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 className="font-crimson text-xl md:text-2xl font-semibold text-pevona-dark mb-4">
                Property Description
              </h2>
              {attributes.description ? (
                <div
                  className="prose prose-sm max-w-none font-manrope text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: attributes.description }}
                />
              ) : (
                <p className="font-manrope text-sm text-gray-500">
                  Full property description will be available soon.
                </p>
              )}
            </div>

            {/* Key Financials */}
            {(attributes.deposit ||
              attributes.service_charge ||
              attributes.ground_rent ||
              attributes.lease_remaining ||
              attributes.review_period ||
              attributes.council_tax_band) && (
              <div>
                <h2 className="font-crimson text-xl md:text-2xl font-semibold text-pevona-dark mb-4">
                  Key Financial Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {attributes.deposit && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-manrope text-sm text-gray-600">Deposit</span>
                      <span className="font-manrope text-sm text-gray-900">
                        {attributes.currency}
                        {attributes.deposit.toLocaleString("en-GB")}
                      </span>
                    </div>
                  )}
                  {attributes.service_charge && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-manrope text-sm text-gray-600">Service Charge</span>
                      <span className="font-manrope text-sm text-gray-900">
                        {attributes.currency}
                        {attributes.service_charge.toLocaleString("en-GB")}
                      </span>
                    </div>
                  )}
                  {attributes.ground_rent && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-manrope text-sm text-gray-600">Ground Rent</span>
                      <span className="font-manrope text-sm text-gray-900">
                        {attributes.currency}
                        {attributes.ground_rent.toLocaleString("en-GB")}
                      </span>
                    </div>
                  )}
                  {attributes.council_tax_band && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-manrope text-sm text-gray-600">Council Tax Band</span>
                      <span className="font-manrope text-sm text-gray-900">
                        {attributes.council_tax_band}
                      </span>
                    </div>
                  )}
                  {attributes.lease_remaining && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-manrope text-sm text-gray-600">Lease Remaining</span>
                      <span className="font-manrope text-sm text-gray-900">
                        {attributes.lease_remaining}
                      </span>
                    </div>
                  )}
                  {attributes.review_period && (
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="font-manrope text-sm text-gray-600">Review Period</span>
                      <span className="font-manrope text-sm text-gray-900">
                        {attributes.review_period}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Additional Information */}
            {(attributes.utilities ||
              attributes.parking ||
              attributes.accessibility ||
              attributes.cladding_building_safety ||
              attributes.rights_restrictions ||
              attributes.flood_risk ||
              attributes.listed_status) && (
              <div>
                <h2 className="font-crimson text-xl md:text-2xl font-semibold text-pevona-dark mb-4">
                  Additional Information
                </h2>
                <div className="space-y-3">
                  {attributes.utilities && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Utilities
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.utilities}
                      </p>
                    </div>
                  )}
                  {attributes.parking && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Parking
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.parking}
                      </p>
                    </div>
                  )}
                  {attributes.accessibility && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Accessibility
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.accessibility}
                      </p>
                    </div>
                  )}
                  {attributes.cladding_building_safety && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Cladding & Building Safety
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.cladding_building_safety}
                      </p>
                    </div>
                  )}
                  {attributes.rights_restrictions && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Rights & Restrictions
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.rights_restrictions}
                      </p>
                    </div>
                  )}
                  {attributes.flood_risk && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Flood Risk
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.flood_risk}
                      </p>
                    </div>
                  )}
                  {attributes.listed_status && (
                    <div>
                      <p className="font-manrope text-sm font-medium text-gray-800 mb-1">
                        Listed Status
                      </p>
                      <p className="font-manrope text-sm text-gray-700 whitespace-pre-line">
                        {attributes.listed_status}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Documents & Certifications */}
            {(attributes.epc_document ||
              attributes.gas_safety_certificate ||
              attributes.electrical_safety_report ||
              attributes.hmo_licence ||
              attributes.documents?.data?.length) && (
              <div>
                <h2 className="font-crimson text-xl md:text-2xl font-semibold text-pevona-dark mb-4">
                  Documents & Certifications
                </h2>
                <div className="space-y-3">
                  {attributes.epc_document?.data && (
                    <a
                      href={getImageUrl(attributes.epc_document.data)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-manrope text-sm text-gray-800">
                        Energy Performance Certificate (EPC)
                      </span>
                      <span className="font-manrope text-sm text-pevona-green">View</span>
                    </a>
                  )}
                  {attributes.gas_safety_certificate?.data && (
                    <a
                      href={getImageUrl(attributes.gas_safety_certificate.data)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-manrope text-sm text-gray-800">
                        Gas Safety Certificate
                      </span>
                      <span className="font-manrope text-sm text-pevona-green">View</span>
                    </a>
                  )}
                  {attributes.electrical_safety_report?.data && (
                    <a
                      href={getImageUrl(attributes.electrical_safety_report.data)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-manrope text-sm text-gray-800">
                        Electrical Safety Report (EICR)
                      </span>
                      <span className="font-manrope text-sm text-pevona-green">View</span>
                    </a>
                  )}
                  {attributes.hmo_licence?.data && (
                    <a
                      href={getImageUrl(attributes.hmo_licence.data)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-manrope text-sm text-gray-800">HMO Licence</span>
                      <span className="font-manrope text-sm text-pevona-green">View</span>
                    </a>
                  )}
                  {attributes.documents?.data?.map((doc) => (
                    <a
                      key={doc.id}
                      href={getImageUrl(doc)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between py-3 border-b border-gray-100"
                    >
                      <span className="font-manrope text-sm text-gray-800">
                        {doc.attributes?.name || doc.attributes?.alternativeText || "Document"}
                      </span>
                      <span className="font-manrope text-sm text-pevona-green">View</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: booking form sidebar (floating) */}
          <aside className="lg:col-span-1">
            <div className="border border-gray-200 rounded-lg shadow-lg sticky top-6 bg-white overflow-hidden">
              <button
                type="button"
                onClick={() => setIsFormOpen((open) => !open)}
                className="w-full px-6 py-4 flex items-center justify-between gap-3 hover:bg-gray-50 transition-colors"
              >
                <div className="text-left">
                  <h3 className="font-crimson text-xl font-semibold text-pevona-dark">
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

      {/* Location */}
      {(attributes.map_embed || fullAddress || (attributes.latitude && attributes.longitude)) && (
        <section className="bg-gray-50 border-t border-gray-100">
          <div className="mx-auto max-w-6xl px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-10 md:py-14">
            <h2 className="font-crimson text-xl md:text-2xl font-semibold text-pevona-dark mb-4">
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


