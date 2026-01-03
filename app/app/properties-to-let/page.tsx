import Image from "next/image";
import { fetchStrapi } from "@/lib/strapi";
import type { StrapiProperty } from "@/types/strapi";
import PropertiesFilterSection from "@/components/finding-property/PropertiesFilterSection";

export default async function PropertiesToLetPage() {
  const res = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");
  const properties = res?.data ?? [];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-6 lg:px-[160px] pt-[39px] pb-[120px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-b-[36px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/798b6d9e831a2c3a18a31353aa2cdff991516061.png"
                alt="Modern rental property exterior"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          {/* Hero copy */}
          <div className="relative max-w-[660px] mt-16 space-y-4 text-white">
            <h1 className="font-crimson text-[40px] md:text-[56px] lg:text-[66px] leading-[1.05] tracking-[-0.06em]">
              Find Your Next Home with Pevona
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Explore our range of verified rental properties across the UK. Every listing is
              managed with transparency, care, and full compliance with UK housing standards.
            </p>
          </div>
        </div>
      </section>

      {/* Property Search + grid */}
      <section className="max-w-[1440px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-[94px] mt-[120px] flex flex-col items-center gap-9">
        <div className="max-w-[861px] text-center space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Property Search
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Search available properties or browse our featured listings below. Each property
            includes key details such as rent, location, availability, and EPC rating –
            helping you make an informed choice.
          </p>
        </div>

        {/* Filters + grid, reusing the same component as finding-property */}
        <PropertiesFilterSection properties={properties} />
      </section>

      {/* How we maintain quality standards */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] flex flex-col lg:flex-row items-center gap-[78px] bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-10 lg:py-0 lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-[10px]">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            How We Maintain Quality Standards
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Every property listed with Pevona undergoes thorough checks to ensure safety,
            compliance, and quality. We verify ownership, conduct routine inspections, and
            ensure all documentation – from gas safety to tenancy agreements – meets UK
            standards.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[816px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/8c635a6811cac99f508d3af65acc70648e8d9e5c.png"
            alt="Real estate growth visual"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Renting with Pevona */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[80px] flex flex-col lg:flex-row items-center gap-[78px] bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-10 lg:py-0 lg:pr-[60px]">
        <div className="flex-1 relative w-full max-w-[696px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/3b0e902a9715bc47e3da3ff2995315a3ebfaff98.png"
            alt="Agent explaining rental details"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-[10px]">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Renting with Pevona (Educational Touchpoint)
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Renting with Pevona is simple, secure, and transparent. From your first viewing
            to signing your tenancy agreement, our team ensures every step follows clear
            guidelines and UK compliance laws.
          </p>
        </div>
      </section>

      {/* Key Tenant Information */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[120px] flex flex-col lg:flex-row gap-[80px] items-start mb-[60px] lg:mb-[120px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Key Tenant Information (Mandatory Transparency)
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            All properties listed by Pevona adhere to the Tenant Fees Act 2019. Any holding
            deposits, rent, or refundable tenancy deposits are protected under an authorised
            UK scheme.
          </p>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            We also provide every tenant with required documentation, including:
          </p>
        </div>

        <div className="flex-1 space-y-6">
          {tenantDocs.map((item) => (
            <div key={item.label} className="flex items-center gap-4">
              <div className="w-[46px] h-[46px] rounded-[10px] bg-[#002f57] flex items-center justify-center">
                <div className="relative w-[28px] h-[28px]">
                  <Image
                    src={item.icon}
                    alt=""
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
              </div>
              <span className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA: Ready to find your next home? */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mb-[60px] lg:mb-[120px]">
        <div className="relative h-[450px] rounded-[26px] overflow-hidden bg-[#002f57] px-[40px] lg:px-[119px] py-[56px] flex items-center">
          <Image
            src="http://localhost:3845/assets/0999bd2d031064a0aae1ce805d457c481f69951f.png"
            alt="Modern apartments at night"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002f57] to-transparent" />

          <div className="relative max-w-[520px] space-y-6 text-white">
            <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px]">
              Ready to Find Your Next Home?
            </h2>
            <p className="font-manrope text-[18px] leading-[28px]">
              Whether you're moving locally or relocating across the UK, Pevona helps you
              find a home that fits your lifestyle.
            </p>
            <button className="bg-white text-[#002f57] px-6 py-3 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors">
              Contact Lettings Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

const tenantDocs = [
  {
    label: "Energy Performance Certificate (EPC)",
    icon: "http://localhost:3845/assets/5d87a8950134c3dd62c1ee669cb7e73596029008.svg",
  },
  {
    label: "Gas Safety Certificate (where applicable)",
    icon: "http://localhost:3845/assets/1ddf2b027b8357baf80c5e4b273bd6715fdce594.svg",
  },
  {
    label: "“How to Rent” government checklist",
    icon: "http://localhost:3845/assets/9774ab80bac854fc0f47f97dd636eac105c42043.svg",
  },
  {
    label: "Tenancy agreement and inventory before move-in",
    icon: "http://localhost:3845/assets/76e7bc088ef898f2d5ea55c168be9bad9abb1bf4.svg",
  },
] as const;
