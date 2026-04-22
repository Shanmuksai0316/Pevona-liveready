import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Estate Agents in London | Pevona",
  description:
    "Pevona provides estate agency, lettings, management, and compliance-led support for landlords across London.",
};

const assetVersion = "?v=20260422";

const services = [
  {
    title: "Lettings & Tenant Sourcing",
    description:
      "Targeted marketing, careful referencing, and a clear process for placing the right tenants.",
    image: `/images/estate-agents-london/lettings-tenant-sourcing.png${assetVersion}`,
    span: "lg:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    title: "Compliance & Onboarding",
    description:
      "A calmer start to the tenancy journey with documentation, checks, and onboarding handled well.",
    image: `/images/estate-agents-london/compliance-onboarding.png${assetVersion}`,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Full Property Management",
    description:
      "End-to-end support for day-to-day operations, tenant communication, and upkeep.",
    image: `/images/estate-agents-london/full-property-management.png${assetVersion}`,
    span: "lg:col-span-5",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Rental Valuation Guidance",
    description:
      "Practical valuation support informed by property type, location, and current market expectations.",
    image: `/images/estate-agents-london/rental-valuation-guidance.png${assetVersion}`,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
  },
  {
    title: "Ongoing Tenancy Management",
    description:
      "Reliable tenancy coordination, renewals, records, and communication over the long term.",
    image: `/images/estate-agents-london/ongoing-tenancy-management.png${assetVersion}`,
    span: "lg:col-span-4",
    ratio: "aspect-[4/5]",
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

const serviceHighlights = [
  "Transparent landlord communication",
  "Compliance-aware tenancy handling",
  "Clear operational updates at every stage",
];

export default function EstateAgentsLondonPage() {
  return (
    <main className="bg-white text-[#374151]">
      <section className="overflow-hidden bg-[#061e38] text-white">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative flex min-h-[78svh] items-end px-5 py-14 sm:px-10 lg:px-16 lg:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-[#061e38] via-[#061e38] to-[#0e2f57]" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/80">
                London estate agents
              </span>
              <h1 className="mt-6 max-w-xl font-crimson text-[42px] leading-[1.05] sm:text-[56px] lg:text-[72px]">
                Estate agents in London with a calm, compliance-led process.
              </h1>
              <p className="mt-6 max-w-xl font-manrope text-[15px] leading-[26px] text-white/82 sm:text-[16px] sm:leading-[28px]">
                Pevona supports landlords across London with lettings, management, and
                valuation guidance shaped around clarity, consistency, and practical
                delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-7 py-3 text-[14px] font-semibold text-[#061e38] transition hover:bg-[#f3f4f6]"
                >
                  Speak to Our Team
                </Link>
                <Link
                  href="/properties-to-let"
                  className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-white/18 bg-white/8 px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/12"
                >
                  Browse Properties
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {serviceHighlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-[14px] leading-[22px] text-white/84"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative min-h-[78svh]">
            <Image
              src={`/images/estate-agents-london/hero-section-estate-agents-in-london.png${assetVersion}`}
              alt="London residential street with estate agency boards"
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-[#061e38]/20 via-[#061e38]/10 to-[#061e38]/55" />
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-10">
              <div className="max-w-md rounded-[28px] border border-white/10 bg-[#061e38]/52 p-5 text-white backdrop-blur-md sm:p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-white/65">
                  London coverage
                </p>
                <p className="mt-3 font-crimson text-[28px] leading-tight sm:text-[34px]">
                  Responsive support for landlords across the capital.
                </p>
                <p className="mt-3 text-[14px] leading-[24px] text-white/78">
                  From valuation guidance to ongoing tenancy management, we keep the
                  process structured and easy to follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1600px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="max-w-3xl">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7c8b91]">
              Services
            </p>
            <h2 className="mt-3 font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[52px]">
              A clearer way to manage property in London.
            </h2>
            <p className="mt-4 max-w-2xl font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">
              Each service is built to reduce friction: clearer tenancy steps, steadier
              communication, and practical support for landlords who want the work handled
              properly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-12">
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`group relative overflow-hidden rounded-[30px] bg-[#061e38] text-white shadow-[0_18px_50px_rgba(6,30,56,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_65px_rgba(6,30,56,0.18)] ${service.span}`}
              >
                <div className={`relative ${service.ratio}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061e38]/88 via-[#061e38]/35 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-4">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-[13px] font-semibold text-white/85">
                        0{index + 1}
                      </span>
                      <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-white/65">
                        London
                      </span>
                    </div>
                    <h3 className="mt-5 max-w-lg font-crimson text-[28px] leading-tight sm:text-[34px]">
                      {service.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[14px] leading-[24px] text-white/80 sm:text-[15px] sm:leading-[26px]">
                      {service.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f3] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 650:px-[60px] lg:grid-cols-[0.95fr_1.05fr] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="order-2 lg:order-1">
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7c8b91]">
              Areas we cover
            </p>
            <h2 className="mt-3 font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[52px]">
              London knowledge with a practical, local lens.
            </h2>
            <p className="mt-4 max-w-2xl font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">
              We work across the capital and understand how connectivity, demand, and local
              neighbourhood patterns influence landlord decisions.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {coveredAreas.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-[#e5e9e1] bg-white px-4 py-4 text-[15px] font-medium text-[#1f2937] shadow-sm"
                >
                  {area}
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-3 rounded-[28px] bg-[#061e38] p-6 text-white shadow-[0_18px_50px_rgba(6,30,56,0.12)]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-white/60">
                Transport links
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {transportLinks.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[15px] leading-[24px] text-white/84">
                    <span className="mt-[10px] h-[6px] w-[6px] rounded-full bg-[#2dd4bf]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 overflow-hidden rounded-[34px] shadow-[0_24px_70px_rgba(6,30,56,0.12)] lg:order-2">
            <Image
              src={`/images/estate-agents-london/areas-we-cover.png${assetVersion}`}
              alt="Visual map-style illustration for areas we cover"
              width={580}
              height={626}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 650:px-[60px] lg:grid-cols-[1fr_auto] lg:items-end lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#7c8b91]">
              Next step
            </p>
            <h2 className="mt-3 font-crimson text-[34px] leading-tight text-[#061e38] sm:text-[44px] lg:text-[52px]">
              Let’s talk through your London property goals.
            </h2>
            <p className="mt-4 max-w-2xl font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">
              If you want a clearer way to manage lettings, compliance, or day-to-day
              property operations, we can walk you through the next step.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#061e38] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#031224]"
            >
              Contact Us Today
            </Link>
            <Link
              href="/property-management"
              className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#d7dde6] bg-white px-8 py-3 text-[14px] font-semibold text-[#061e38] transition hover:bg-[#f7f8fa]"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
