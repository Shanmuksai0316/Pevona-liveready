import Link from "next/link";

const services = [
  { title: "Lettings and Tenant Sourcing", href: "/rent" },
  { title: "Property Management", href: "/property-management" },
  { title: "Compliance and Onboarding Support", href: "/compliance-licensing" },
  { title: "Rental Valuation Guidance", href: "/contact" },
  { title: "Ongoing Tenancy Management", href: "/property-management" },
];

const reasons = [
  {
    title: "Structured Landlord Support",
    description:
      "Clear service processes that help landlords stay organised from instruction through to tenancy management.",
  },
  {
    title: "Compliance-Led Delivery",
    description:
      "A careful approach to checks, documentation, and landlord obligations across the tenancy lifecycle.",
  },
  {
    title: "Consistent Communication",
    description:
      "Practical updates and reliable coordination so landlords know what is happening at each stage.",
  },
];

const coveredAreas = [
  "Central London",
  "North London",
  "East London",
  "South London",
  "West London",
  "Greater London",
];

const transportLinks = [
  "Underground and Overground access",
  "Elizabeth line and National Rail",
  "Main road corridors across the capital",
  "Well-connected bus and night routes",
];

const trustLinks = [
  { name: "AML Compliance", href: "/policies/aml-compliance" },
  { name: "Client Money Protection", href: "/terms#cmp" },
  { name: "Complaints Handling", href: "/policies/complaints-handling" },
  { name: "Data Protection & GDPR", href: "/policies/data-protection" },
];

const relatedLinks = [
  { name: "Areas We Cover", href: "/areas-we-cover" },
  { name: "Property Management", href: "/property-management" },
  { name: "Our Management Services", href: "/our-management-services" },
  { name: "Compliance & Licensing", href: "/compliance-licensing" },
  { name: "Estate Agents Redbridge", href: "/estate-agents-redbridge" },
  { name: "Property Management Essex", href: "/property-management-essex" },
  { name: "Letting Agents Luton", href: "/letting-agents-luton" },
  { name: "Estate Agents Leicester", href: "/estate-agents-leicester" },
];

export const metadata = {
  title: "Estate Agents in London | Pevona",
  description:
    "Pevona provides estate agency, lettings, management, and compliance-led support for landlords across London.",
};

export default function EstateAgentsLondonPage() {
  return (
    <main className="bg-white text-[#374151]">
      <section className="relative min-h-[500px] overflow-hidden sm:min-h-[560px] lg:min-h-[680px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/estate-agents-london/hero-section-estate-agents-in-london.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061e38]/50 via-[#061e38]/60 to-[#061e38]/85" />

        <div className="relative mx-auto flex min-h-[500px] max-w-[1440px] items-center justify-center px-5 text-center sm:min-h-[560px] 650:px-[60px] lg:min-h-[680px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="mt-10 max-w-3xl">
            <h1 className="font-crimson text-[40px] leading-tight text-white sm:text-[52px] lg:text-[68px]">
              Estate Agents in London
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-manrope text-[15px] leading-[26px] text-white/85 sm:text-[16px] sm:leading-[28px]">
              Pevona supports landlords across London with lettings, management, and
              valuation guidance shaped around clarity, consistency, and practical delivery.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-8 py-3 text-[14px] font-semibold text-[#061e38] transition hover:bg-[#f3f4f6]"
              >
                Book a Free Valuation
              </Link>
              <Link
                href="/areas-we-cover"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/16 bg-white/8 px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-white/12"
              >
                View All Areas
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9fafb] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[42px] lg:text-[48px]">
              Our Services in London
            </h2>
            <p className="mt-4 font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">
              We help London landlords manage property responsibilities through structured
              management, compliance support, and ongoing tenant coordination.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="block rounded-[24px] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="font-crimson text-[26px] leading-[32px] text-[#061e38]">
                  {service.title}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#061e38] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#031224]"
            >
              Speak to Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <h2 className="text-center font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[42px] lg:text-[48px]">
            Why Choose Pevona
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="rounded-[24px] border border-[#eef2f7] bg-[#f9fafb] p-7 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <span className="font-manrope text-[15px] font-semibold text-[#061e38]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="font-crimson text-[24px] leading-[30px] text-[#061e38]">
                  {reason.title}
                </h3>
                <p className="mt-3 font-manrope text-[15px] leading-[26px] text-[#6b7280]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061e38] py-16 text-white sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 overflow-hidden rounded-[24px] shadow-2xl lg:order-1">
              <div
                className="h-[420px] w-full bg-cover bg-center sm:h-[500px] lg:h-[560px]"
                style={{
                  backgroundImage: "url('/images/estate-agents-london/areas-we-cover-v2.png')",
                }}
              />
            </div>

            <div className="order-1 space-y-10 lg:order-2">
              <div>
                <h3 className="font-crimson text-[30px] leading-tight text-white">
                  Areas We Cover
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 text-[15px] text-white/90 sm:grid-cols-2">
                  {coveredAreas.map((area) => (
                    <li key={area} className="flex items-center gap-3">
                      <span className="h-[7px] w-[7px] rounded-full bg-[#2dd4bf]" />
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-crimson text-[30px] leading-tight text-white">
                  Transport Links
                </h3>
                <ul className="mt-5 grid grid-cols-1 gap-3 text-[15px] text-white/90">
                  {transportLinks.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="text-[#2dd4bf]">+</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-crimson text-[30px] leading-tight text-white">
                  Local Insight
                </h3>
                <p className="mt-4 rounded-[18px] border border-white/10 bg-white/5 p-5 font-manrope text-[15px] leading-[26px] text-white/80">
                  London presents strong tenant demand, broad transport connectivity, and
                  neighbourhood variation that shapes pricing, compliance planning, and management decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[30px] border border-[#e5e9ef] bg-[#f9fafb] p-7 sm:p-8">
              <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[42px] lg:text-[48px]">
                Trust Signals
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {trustLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-[18px] border border-[#dbe2ea] bg-white px-4 py-4 font-manrope text-[14px] font-medium text-[#1f2937] transition hover:border-[#cfd8e3]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-[#e5e9ef] bg-[#f9fafb] p-7 sm:p-8">
              <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[42px] lg:text-[48px]">
                Area Index &amp; Internal Links
              </h2>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-[18px] border border-[#dbe2ea] bg-white px-4 py-4 font-manrope text-[14px] font-medium text-[#1f2937] transition hover:border-[#cfd8e3]"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5e7eb] bg-[#f9fafb] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center 650:px-[60px] lg:px-[40px]">
          <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[40px]">
            Book your free valuation today.
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#061e38] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#031224]"
            >
              Book a Free Valuation
            </Link>
            <Link
              href="/areas-we-cover"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#d7dde6] bg-white px-8 py-3 text-[14px] font-semibold text-[#061e38] transition hover:bg-[#f7f8fa]"
            >
              View All Areas
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
