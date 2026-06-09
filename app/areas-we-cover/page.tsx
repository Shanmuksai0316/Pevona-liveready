import type { Metadata } from "next";
import Link from "next/link";
import AreasWeCoverLeadForm from "./AreasWeCoverLeadForm";

export const metadata: Metadata = {
  title:
    "Estate Agents, Letting Agents & Property Management Across London & Essex | Pevona Ltd",
  description:
    "Professional estate agency, lettings, and property management services across London, Essex, and surrounding regions. Book your free property valuation today.",
};

const servicePathways = [
  {
    label: "Landlords",
    title: "Property management, lettings, rent collection, compliance, maintenance.",
    body: "",
    cta: "Get a Rental Valuation",
    href: "/landlord-services",
    accent: "from-[#0d375f] to-[#0b2745]",
  },
  {
    label: "Sellers",
    title: "Sales services, valuation, market positioning.",
    body: "",
    cta: "Book a Sales Valuation",
    href: "/sell",
    accent: "from-[#123a63] to-[#1b4f73]",
  },
  {
    label: "Investors",
    title: "ROI analysis, sourcing, strategy.",
    body: "",
    cta: "Request an Investment Consultation",
    href: "/investments",
    accent: "from-[#123f4a] to-[#0a2834]",
  },
];

const seoPages = [
  {
    name: "Estate Agents Redbridge",
    href: "/estate-agents-redbridge",
    tag: "London",
    note: "Redbridge",
  },
  {
    name: "Estate Agents London",
    href: "/estate-agents-london",
    tag: "London",
    note: "London (East, West, North and South)",
  },
  {
    name: "Property Management Essex",
    href: "/property-management-essex",
    tag: "Essex",
    note: "Essex regions",
  },
  {
    name: "Letting Agents Luton",
    href: "/letting-agents-luton",
    tag: "Expansion",
    note: "Luton",
  },
  {
    name: "Estate Agents Leicester",
    href: "/estate-agents-leicester",
    tag: "Expansion",
    note: "Leicester",
  },
];

const valuePoints = [
  "Structured service delivery",
  "Compliance-first operational approach",
  "Transparent pricing and communication",
  "Lifecycle management from valuation to long-term oversight",
  "Focus on long-term value, not short-term noise",
];

const governanceLinks = [
  { name: "AML Compliance", href: "/policies/aml-compliance" },
  { name: "Client Money Protection", href: "/terms#cmp" },
  { name: "Complaints Handling", href: "/policies/complaints-handling" },
  { name: "Data Protection & GDPR", href: "/policies/data-protection" },
  { name: "Environmental Statement", href: "/policies/environmental-statement" },
  { name: "Equality, Diversity & Inclusion", href: "/policies/equality-diversity-inclusion" },
  { name: "Anti-Bribery & Anti-Corruption", href: "/policies/anti-bribery-corruption" },
];

const relatedLinks = [
  { name: "Finding Property", href: "/finding-property" },
  { name: "Buy Guide & Area Guide", href: "/buy-guide" },
  { name: "ROI Calculator", href: "/roi-calculator" },
  { name: "Investments", href: "/investments" },
  { name: "Market Insights", href: "/market-insights" },
  { name: "Portfolio Management", href: "/portfolio-management" },
  { name: "Property Management", href: "/property-management" },
  { name: "Our Management Services", href: "/our-management-services" },
  { name: "Compliance & Licensing", href: "/compliance-licensing" },
  { name: "Tenant Services", href: "/tenant-services" },
];

export default function AreasWeCoverPage() {
  return (
    <main className="bg-[#fafafa] text-[#374151]">
      <section className="overflow-hidden bg-[#002f57] text-white">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative px-5 pb-16 pt-32 sm:px-10 lg:px-[80px] lg:pb-20 lg:pt-40">
            <div className="absolute inset-0 bg-[#002f57]" />
            <div className="relative z-10 max-w-3xl">
              <h1 className="mt-6 max-w-3xl font-crimson text-[42px] leading-[1.04] text-white sm:text-[58px] lg:text-[74px]">
                Property Services Across London, Essex &amp; Key UK Regions
              </h1>
              <p className="mt-6 max-w-2xl font-manrope text-[15px] leading-[26px] text-white/82 sm:text-[17px] sm:leading-[29px]">
                Sales, lettings, and property management services delivered with a
                structured, compliant, and performance-focused approach.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#valuation-form"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full bg-white px-8 py-3 text-[15px] font-semibold text-[#061e38] transition hover:bg-[#f3f4f6]"
                >
                  Book a Free Valuation
                </Link>
                <a
                  href="tel:+442036329485"
                  className="inline-flex min-h-[56px] items-center justify-center rounded-full border border-white/14 bg-white/8 px-8 py-3 text-[15px] font-semibold text-white transition hover:bg-white/12"
                >
                  Speak to a Property Expert
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                  <p className="mt-3 font-crimson text-[28px] leading-tight text-white">
                    London
                  </p>
                  <p className="mt-2 font-manrope text-[14px] leading-[24px] text-white/76">
                    Redbridge, London (East, West, North and South)
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                  <p className="mt-3 font-crimson text-[28px] leading-tight text-white">
                    Essex
                  </p>
                  <p className="mt-2 font-manrope text-[14px] leading-[24px] text-white/76">
                    Essex regions
                  </p>
                </div>
                <div className="rounded-[24px] border border-white/10 bg-white/6 px-5 py-5 backdrop-blur-sm">
                  <p className="mt-3 font-crimson text-[28px] leading-tight text-white">
                    Luton &amp; Leicester
                  </p>
                  <p className="mt-2 font-manrope text-[14px] leading-[24px] text-white/76">
                    Expansion
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden bg-[#002f57] lg:min-h-[780px]">
            <div className="absolute inset-0 flex items-end justify-end p-6 sm:p-10 lg:p-12">
              <div className="grid w-full max-w-[620px] gap-4 sm:grid-cols-2">
                {seoPages.map((page, index) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className={`group rounded-[28px] border border-white/10 bg-[#061e38]/80 p-5 text-white shadow-[0_24px_65px_rgba(6,30,56,0.22)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-[#08284c] ${
                      index === 0 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#8fe8d7]">
                        {page.tag}
                      </span>
                      <span className="text-[13px] text-white/55 transition group-hover:text-white/78">
                        Explore
                      </span>
                    </div>
                    <p className="mt-4 font-crimson text-[28px] leading-tight text-white">
                      {page.name}
                    </p>
                    <p className="mt-3 font-manrope text-[14px] leading-[24px] text-white/75">
                      {page.note}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr]">
            <div className="lg:pr-6">
              <h2 className="font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[54px]">
                Introduction
              </h2>
            </div>
            <div>
              <p className="font-manrope text-[15px] leading-[26px] text-[#52606d] sm:text-[16px] sm:leading-[28px]">
                At Pevona Ltd, we provide professional estate agency, lettings, and
                property management services across London, Essex, and selected UK regions.
                Our approach is centred on transparency, compliance, structured management,
                and long-term value for clients.
              </p>
            </div>
          </div>
          <div className="mt-8 grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {valuePoints.map((point) => (
              <div
                key={point}
                className="w-full rounded-[20px] border border-[#e6eaef] bg-[#f8fafc] px-5 py-6 font-manrope text-[15px] font-medium text-[#1f2937] shadow-sm flex items-center justify-center text-center"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[54px]">
              Service Pathways
            </h2>
          </div>

          <div className="mt-10 grid gap-[16px] lg:grid-cols-3">
            {servicePathways.map((pathway) => (
              <article
                key={pathway.label}
                className={`group overflow-hidden rounded-[30px] bg-gradient-to-br ${pathway.accent} p-[1px] shadow-[0_20px_60px_rgba(6,30,56,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(6,30,56,0.18)]`}
              >
                <div className="flex min-h-[300px] h-full flex-col rounded-[29px] bg-[#061e38] p-7 text-white">
                  <span className="inline-flex w-fit rounded-full border border-white/10 bg-transparent px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.26em] text-white/88">
                    {pathway.label}
                  </span>
                  <h3 className="mt-7 w-full font-crimson text-[30px] leading-tight text-white">
                    {pathway.title}
                  </h3>
                  <Link
                    href={pathway.href}
                    className="mt-auto inline-flex min-h-[52px] w-fit items-center justify-center rounded-full border border-white/12 bg-white/8 px-6 py-3 font-manrope text-[14px] font-semibold text-white transition hover:bg-white hover:text-[#061e38]"
                  >
                    {pathway.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <h2 className="font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[54px]">
                Areas We Cover
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {seoPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group rounded-[28px] border border-[#e5e9ef] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#cfd8e3] hover:shadow-[0_18px_50px_rgba(6,30,56,0.12)]"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-[#eef4f8] px-3 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#0f3e68]">
                    {page.tag}
                  </span>
                  <span className="font-manrope text-[13px] font-semibold text-[#7c8b91] transition group-hover:text-[#061e38]">
                    Open
                  </span>
                </div>
                <h3 className="mt-5 font-crimson text-[30px] leading-tight text-[#061e38]">
                  {page.name}
                </h3>
                <p className="mt-3 font-manrope text-[15px] leading-[26px] text-[#52606d]">
                  {page.note}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061e38] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 650:px-[60px] lg:grid-cols-[1fr_1fr] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/60">
              Why choose Pevona
            </p>
            <h2 className="mt-3 font-crimson text-[34px] leading-tight text-white sm:text-[44px] lg:text-[52px]">
              Structured service delivery, compliance-first, transparent pricing, lifecycle management, long-term value focus.
            </h2>
            <div className="mt-8 grid gap-3">
              {valuePoints.map((point, index) => (
                <div
                  key={point}
                  className="flex items-start gap-4 rounded-[20px] border border-white/8 bg-white/6 px-4 py-4"
                >
                  <span className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/10 font-manrope text-[13px] font-semibold text-white/84">
                    0{index + 1}
                  </span>
                  <p className="font-manrope text-[15px] leading-[26px] text-white/82">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm sm:p-8">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/60">
              Compliance & governance
            </p>
            <h2 className="mt-3 font-crimson text-[34px] leading-tight text-white sm:text-[44px] lg:text-[52px]">
              AML compliance, CMP, complaints handling, GDPR, ESG transparency.
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {governanceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-[18px] border border-white/8 bg-white/6 px-4 py-4 font-manrope text-[14px] font-medium text-white/84 transition hover:bg-white hover:text-[#061e38]"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="max-w-3xl">
            <h2 className="font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[54px]">
              Internal Linking
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[20px] border border-[#e5e9ef] bg-[#f8fafc] px-4 py-4 font-manrope text-[14px] font-medium text-[#1f2937] transition hover:border-[#cfd8e3] hover:bg-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="valuation-form" className="bg-[#f7f7f3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 650:px-[60px] lg:grid-cols-[0.88fr_1.12fr] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="lg:pr-6">
            <h2 className="font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[54px]">
              Conversion Section
            </h2>
          </div>

          <AreasWeCoverLeadForm />
        </div>
      </section>

      <section className="border-b border-[#dfe5ec] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="max-w-4xl">
            <h2 className="font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[54px]">
              Governance / Policies
            </h2>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {governanceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-[#e5e9ef] bg-[#f8fafc] px-6 py-3 min-h-[56px] flex items-center font-manrope text-[15px] font-medium text-[#1f2937] transition hover:border-[#cfd8e3] hover:bg-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
