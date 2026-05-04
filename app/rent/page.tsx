import Link from "next/link";

const services = [
  {
    title: "Lettings & Tenant Sourcing",
    description:
      "Finding the right occupants for your property through targeted marketing and stringent referencing.",
    image: "/images/estate-agents-london/lettings-tenant-sourcing.png",
  },
  {
    title: "Full Property Management",
    description:
      "A completely hands-off solution, managing day-to-day tenant requests, repairs, and administration.",
    image: "/images/estate-agents-london/full-property-management.png",
  },
  {
    title: "Compliance & Onboarding",
    description:
      "Support in navigating complex housing legislation to ensure full legal protection for landlords.",
    image: "/images/estate-agents-london/compliance-onboarding.png",
  },
  {
    title: "Rental Valuation Guidance",
    description:
      "Data-driven appraisals to help you achieve maximum rental yield in the current market.",
    image: "/images/estate-agents-london/rental-valuation-guidance.png",
  },
  {
    title: "Ongoing Tenancy Management",
    description:
      "Handling renewals, rent collection, and regular property condition reports.",
    image: "/images/estate-agents-london/ongoing-tenancy-management.png",
  },
];

const reasons = [
  {
    title: "Clear & Transparent Processes",
    description:
      "Structured workflows that keep you informed without overwhelming you.",
  },
  {
    title: "Compliance & Regulation",
    description:
      "A strong focus on meeting legal requirements to protect your investment.",
  },
  {
    title: "Reliable Communication",
    description:
      "Consistent, clear updates throughout the lifecycle of the tenancy.",
  },
  {
    title: "London Experience",
    description:
      "Extensive operational experience working across multiple London boroughs.",
  },
];

const coveredAreas = ["East London", "Central London", "North London", "South London"];

const transportLinks = [
  "London Underground & Overground",
  "Elizabeth Line",
  "National Rail Services",
  "Major Bus & Road Networks",
];

export default function RentPage() {
  return (
    <main className="bg-white text-[#374151]">
      <section className="relative min-h-[500px] sm:min-h-[560px] lg:min-h-[680px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/images/estate-agents-london/hero-section-estate-agents-in-london.png')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#061e38]/50 via-[#061e38]/60 to-[#061e38]/85" />

        <div className="relative mx-auto flex min-h-[500px] sm:min-h-[560px] lg:min-h-[680px] max-w-[1440px] items-center justify-center px-5 text-center 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="mt-10 max-w-3xl">
            <h1 className="font-crimson text-[40px] leading-tight text-white sm:text-[52px] lg:text-[68px]">
              Estate Agents in London
            </h1>
            <p className="mx-auto mt-6 max-w-2xl font-manrope text-[15px] leading-[26px] text-white/85 sm:text-[16px] sm:leading-[28px]">
              Pevona provides professional estate agency and property management services
              across London. We support landlords with a structured, transparent, and
              compliance-focused approach to managing residential property.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full bg-white px-8 py-3 text-[14px] font-semibold text-[#061e38] transition hover:bg-[#f3f4f6]"
            >
              Speak to Our Team
            </Link>
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
              We offer a range of services tailored to landlords across London. Our
              services are designed to ensure properties are managed efficiently while
              meeting current regulatory requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="overflow-hidden rounded-[24px] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="h-56 w-full bg-cover bg-center"
                  style={{ backgroundImage: `url('${service.image}')` }}
                />
                <div className="p-6">
                  <h3 className="font-crimson text-[26px] leading-[32px] text-[#061e38]">
                    {service.title}
                  </h3>
                  <p className="mt-3 font-manrope text-[15px] leading-[26px] text-[#6b7280]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1440px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <h2 className="text-center font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[42px] lg:text-[48px]">
            Why Choose Pevona
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
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
                  backgroundImage: "url('/images/estate-agents-london/areas-we-cover.png')",
                }}
              />
            </div>

            <div className="order-1 space-y-10 lg:order-2">
              <div>
                <h3 className="font-crimson text-[30px] leading-tight text-white">
                  Areas We Cover
                </h3>
                <p className="mt-4 font-manrope text-[15px] leading-[26px] text-white/75">
                  We support landlords across the entire capital, maintaining a strong
                  operational presence in:
                </p>
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
                <p className="mt-4 font-manrope text-[15px] leading-[26px] text-white/75">
                  London offers extensive transport connectivity, heavily influencing
                  property value and tenant interest. Areas covered are serviced by:
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-3 text-[15px] text-white/90 sm:grid-cols-2">
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
                  Rental Demand
                </h3>
                <p className="mt-4 rounded-[18px] border border-white/10 bg-white/5 p-5 font-manrope text-[15px] leading-[26px] text-white/80">
                  London continues to see strong rental demand driven by unmatched
                  employment opportunities, comprehensive transport access, and consistent
                  long-term tenant demand across all boroughs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#e5e7eb] bg-[#f9fafb] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center 650:px-[60px] lg:px-[40px]">
          <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[40px]">
            Speak to Our Team
          </h2>
          <p className="mt-4 font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">
            If you are looking for estate agency or property management services in
            London, contact our team to discuss your requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#061e38] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#031224]"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </main>
  );
}
