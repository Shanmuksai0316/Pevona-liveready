import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import type { StrapiProperty } from "@/types/strapi";
import PropertiesFilterSection from "@/components/finding-property/PropertiesFilterSection";
import AreaInsights from "@/components/sections/AreaInsights";

const tenantDocs = [
  "Energy Performance Certificate (EPC)",
  "Gas Safety Certificate (where applicable)",
  '"How to Rent" government checklist',
  "Tenancy agreement and inventory before move-in",
] as const;

export default async function PropertiesToLetPage() {
  const res = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");
  const properties = res?.data ?? [];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero – Find Your Next Home with Pevona */}
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
              <Image
                src="/images/properties-to-let.png"
                alt="Properties to let background mobile"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0 -mx-[60px] lg:-mx-[80px] 1300:-mx-[80px] 1400:-mx-[80px] 1500:-mx-[100px] 1600:-mx-[130px]">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Properties to let/LET_bg_img.png"
                alt="Modern rental property exterior"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>

          {/* Mobile Content - Center Aligned, Bottom 50px */}
          <div className="lg:hidden relative flex items-end justify-center h-[850px] pb-[50px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
                Find Your Next Home with Pevona
              </h1>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
                Explore our range of verified rental properties across the UK. Every listing is managed with
                transparency, care, and full compliance with UK housing standards.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* Desktop Content - Original Layout */}
          <div className="hidden lg:block relative max-w-[780px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Find Your Next Home with Pevona
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Explore our range of verified rental properties across the UK. Every listing is managed with
              transparency, care, and full compliance with UK housing standards.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Property Search + filter grid */}
      <section className="max-w-[1440px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col items-center gap-9">
        <div className="max-w-[861px] text-center space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Property Search
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Search available properties or browse our featured listings below. Each property includes key
            details such as rent, location, availability, and EPC rating – helping you make an informed
            choice.
          </p>
        </div>

        {/* Filters + dynamic grid from Strapi */}
        <PropertiesFilterSection properties={properties} limit={6} />
      </section>

      {/* How We Maintain Quality Standards */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row items-center gap-[78px] bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-10 lg:py-0 mx-5 lg:mx-auto">
        <div className="flex-1 max-w-[589px] space-y-[10px]">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            How We Maintain Quality Standards
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Every property listed with Pevona undergoes thorough checks to ensure safety, compliance, and
            quality. We verify ownership, conduct routine inspections, and ensure all documentation – from
            gas safety to tenancy agreements – meets UK standards.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[816px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Properties to let/3rd_How_We_Maintain_Quality_Standards.png"
            alt="How we maintain quality standards"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 816px"
            unoptimized
          />
        </div>
      </section>

      {/* Renting with Pevona */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px] flex flex-col lg:flex-row items-center gap-[78px] bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-10 lg:py-0 mx-5 lg:mx-auto">
        <div className="flex-1 relative w-full max-w-[696px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Properties to let/4rd_Renting_with_Pevona.png"
            alt="Renting with Pevona"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 696px"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-[10px]">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Renting with Pevona (Educational Touchpoint)
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Renting with Pevona is simple, secure, and transparent. From your first viewing to signing your
            tenancy agreement, our team ensures every step follows clear guidelines and UK compliance laws.
          </p>
        </div>
      </section>

      {/* Key Tenant Information */}
      <section className="max-w-[1320px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] flex flex-col lg:flex-row gap-[80px] items-start mb-[120px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Key Tenant Information (Mandatory Transparency)
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            All properties listed by Pevona adhere to the Tenant Fees Act 2019. Any holding deposits, rent,
            or refundable tenancy deposits are protected under an authorised UK scheme.
          </p>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            We also provide every tenant with required documentation, including:
          </p>
        </div>

        <div className="flex-1 space-y-6">
          {tenantDocs.map((label) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-[46px] h-[46px] rounded-[10px] bg-[#002f57] flex items-center justify-center">
                <span className="w-[28px] h-[28px] rounded-full border border-white/60" />
              </div>
              <span className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Area Insights Section */}
      <AreaInsights />

      {/* CTA: Ready to Find Your Next Home? */}
      <section className="max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[150px] mb-[120px]">
        {/* Mobile Layout */}
        <div className="lg:hidden relative w-full min-h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Ready to Find Your Next Home-mbl-bg.png"
            alt="Ready to find your next home mobile"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 flex items-end justify-center pb-[50px]">
            <div className="max-w-[519px] w-full px-5 text-center space-y-6 text-white">
              <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
                Ready to Find Your Next Home?
              </h2>
              <p className="font-manrope text-[18px] leading-[28px]">
                Whether you&apos;re moving locally or relocating across the UK, Pevona helps you find a home
                that fits your lifestyle.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#002f57] px-6 py-3 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors">
                Contact Lettings Team
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block relative w-full h-[450px] min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Properties to let/6th_Ready_to_Find_Your_Next_Home_.png"
            alt="Ready to find your next home"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002f57] via-[#002f57]/85 to-transparent" />

          <div className="relative max-w-[519px] ml-[119px] mt-[80px] space-y-6 text-white">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
              Ready to Find Your Next Home?
            </h2>
            <p className="font-manrope text-[18px] leading-[28px]">
              Whether you&apos;re moving locally or relocating across the UK, Pevona helps you find a home
              that fits your lifestyle.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-[#002f57] px-6 py-3 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors">
              Contact Lettings Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

