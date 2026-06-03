"use client";

import { useState } from "react";

type SubmitStatus = "idle" | "success" | "error";

export default function AreasWeCoverLeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const formData = new FormData(event.currentTarget);
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const propertyAddress = (formData.get("propertyAddress") as string)?.trim();

    try {
      const response = await fetch("/api/property-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          propertySlug: "",
          propertyTitle: "Areas We Cover - Free Valuation Request",
          subject: "Property Valuation",
          message: `Property Address: ${propertyAddress || "Not provided"}\n\nSource Page: Areas We Cover`,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitStatus("success");
      event.currentTarget.reset();
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Areas we cover valuation form error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-[0_24px_70px_rgba(6,30,56,0.12)]">
      <div className="bg-[#061e38] px-6 py-6 text-white sm:px-8 sm:py-8">
        <h3 className="mt-3 font-crimson text-[30px] leading-tight text-white sm:text-[38px]">
          Request My Free Valuation
        </h3>
      </div>

      <div className="px-6 py-6 sm:px-8 sm:py-8">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] text-[#52606d]">
                Name
              </span>
              <input
                type="text"
                name="name"
                required
                placeholder="Full name"
                className="h-[54px] w-full rounded-[14px] border border-[#dbe2ea] bg-[#fafbfd] px-4 font-manrope text-[15px] text-[#1f2937] outline-none transition focus:border-[#061e38] focus:bg-white"
              />
            </label>

            <label className="block">
              <span className="mb-2 block font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] text-[#52606d]">
                Phone
              </span>
              <input
                type="tel"
                name="phone"
                required
                placeholder="+44"
                className="h-[54px] w-full rounded-[14px] border border-[#dbe2ea] bg-[#fafbfd] px-4 font-manrope text-[15px] text-[#1f2937] outline-none transition focus:border-[#061e38] focus:bg-white"
              />
            </label>
          </div>

          <label className="block">
            <span className="mb-2 block font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] text-[#52606d]">
              Email
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="name@example.com"
              className="h-[54px] w-full rounded-[14px] border border-[#dbe2ea] bg-[#fafbfd] px-4 font-manrope text-[15px] text-[#1f2937] outline-none transition focus:border-[#061e38] focus:bg-white"
            />
          </label>

          <label className="block">
            <span className="mb-2 block font-manrope text-[13px] font-semibold uppercase tracking-[0.08em] text-[#52606d]">
              Property address
            </span>
            <textarea
              name="propertyAddress"
              required
              rows={4}
              placeholder="Property address or postcode"
              className="w-full rounded-[14px] border border-[#dbe2ea] bg-[#fafbfd] px-4 py-4 font-manrope text-[15px] text-[#1f2937] outline-none transition focus:border-[#061e38] focus:bg-white"
            />
          </label>

          {submitStatus === "success" && (
            <div className="rounded-[14px] border border-[#cae7d4] bg-[#eef9f1] px-4 py-3 font-manrope text-[14px] text-[#14532d]">
              Thanks, your valuation request has been sent. Our team will be in touch soon.
            </div>
          )}

          {submitStatus === "error" && (
            <div className="rounded-[14px] border border-[#f3d2d2] bg-[#fff3f3] px-4 py-3 font-manrope text-[14px] text-[#991b1b]">
              Something went wrong while sending your request. Please call us on
              {" "}
              <a href="tel:+442036329485" className="font-semibold underline">
                +44-203-632-9485
              </a>
              .
            </div>
          )}

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-[#061e38] px-8 py-3 font-manrope text-[15px] font-semibold text-white transition hover:bg-[#031224] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Request My Free Valuation"}
            </button>
            <a
              href="tel:+442036329485"
              className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-[#d7dde6] bg-white px-8 py-3 font-manrope text-[15px] font-semibold text-[#061e38] transition hover:bg-[#f7f8fa]"
            >
              Call Now
            </a>
          </div>
        </form>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <a
            href="tel:+442036329485"
            className="rounded-[20px] border border-[#e5e9ef] bg-[#f9fafb] px-5 py-4 transition hover:border-[#cfd8e3] hover:bg-white"
          >
            <p className="font-manrope text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7c8b91]">
              Phone
            </p>
            <p className="mt-2 font-crimson text-[24px] leading-tight text-[#061e38]">
              +44-203-632-9485
            </p>
          </a>
          <a
            href="mailto:admin-pev@pevonaltd.co.uk"
            className="rounded-[20px] border border-[#e5e9ef] bg-[#f9fafb] px-5 py-4 transition hover:border-[#cfd8e3] hover:bg-white"
          >
            <p className="font-manrope text-[12px] font-semibold uppercase tracking-[0.18em] text-[#7c8b91]">
              Callback or email
            </p>
            <p className="mt-2 font-crimson text-[24px] leading-tight text-[#061e38]">
              Speak to a Property Expert
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
