import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import type { StrapiProperty } from "@/types/strapi";
import PropertiesFilterSection from "@/components/finding-property/PropertiesFilterSection";

export default async function FindingPropertyPage() {
  const res = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");
  const properties = res?.data ?? [];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
              <Image
                src="/images/finding-property/Finding%20property-%20banner-bg-mbl.webp"
                alt="Finding property background mobile"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0 -mx-[60px] lg:-mx-[80px] 1300:-mx-[80px] 1400:-mx-[80px] 1500:-mx-[100px] 1600:-mx-[130px]">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
            <Image
              src="/images/finding-property/Finding%20property-%20banner-bg-dsk.webp"
              alt="Finding property background desktop"
              fill
              className="object-cover"
                sizes="100vw"
              unoptimized
              priority
            />
            </div>
          </div>

          {/* Mobile Content - Center Aligned, Bottom 50px */}
          <div className="lg:hidden relative flex items-end justify-center h-[850px] pb-[50px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
                Find the Right Property With Confidence
              </h1>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
                Buying a home or investing in UK property should feel simple, transparent, and well-supported. We help you navigate every stage with market insight, verified information, and guidance tailored to your goal.
              </p>
              <Link href="/contact" className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors">
                Book a Consultation
              </Link>
        </div>
          </div>

          {/* Desktop Content - Original Layout */}
          <div className="hidden lg:block relative max-w-[780px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Find the Right Property With Confidence
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Buying a home or investing in UK property should feel simple, transparent, and well-supported. We help you navigate every stage with market insight, verified information, and guidance tailored to your goal.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Properties Section with Filter (client-side, Strapi-backed) */}
      <div className="mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <PropertiesFilterSection properties={properties} limit={7} />
      </div>

      {/* Your Property Search, Simplified */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[80px]">
        <div className="max-w-[526px] space-y-9">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Your Property Search, Simplified
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Whether you're a first-time buyer, a seasoned investor, or expanding your rental portfolio, our structured approach removes uncertainty. We focus on clarity, due diligence, and informed decision-making, giving you confidence at every step.
          </p>
          <Link href="/properties" className="inline-flex items-center justify-center bg-white border border-[rgba(0,0,0,0.12)] px-6 py-3 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57] hover:bg-[#0073B5] hover:text-white transition-colors">
            View All Properties
          </Link>
        </div>

        <div className="relative w-full max-w-[600px] flex-shrink-0 px-4 lg:px-0">
          <div className="relative h-[520px] lg:h-[620px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/finding-property/section-2-right.png"
              alt="Property search visual"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* What We Help You Buy */}
      <section className="max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col items-center gap-9">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-center">
          What We Help You Buy
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full justify-items-stretch">
          {[
            {
              title: "Residential Homes",
              body: "Comfortable, well-located properties suited for long-term living and stable capital growth.",
            },
            {
              title: "Buy-to-Let Investments",
              body: "Rental-ready homes in high-demand areas, supported by yield estimates and market data.",
            },
            {
              title: "HMOs & Multi-Unit Assets",
              body: "High-performance properties offering strong rental returns with compliance guidance included.",
            },
            {
              title: "Off-Plan & New Builds",
              body: "Modern developments with future-focused design, builder credibility, and clear handover timelines",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] flex flex-col justify-start px-[20px] py-[16px] w-full"
            >
              <h3 className="font-crimson font-semibold text-[18px] md:text-[20px] leading-[24px] text-[#002f57] mb-1 flex items-start">
                {card.title}
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] text-[#333] opacity-80">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Support Your Purchase */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col items-center gap-9">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-center">
          How We Support Your Purchase
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 w-full">
          {[
            {
              number: "1",
              icon: "/images/Tailored Property Search.svg",
              title: "Tailored Property Search",
              body: "We shortlist suitable homes or investments based on your criteria, location preferences, and long-term plans.",
            },
            {
              number: "2",
              icon: "/images/Completion Guidance.svg",
              title: "Completion Guidance",
              body: "We guide you through surveys, contracts, legal checks, and final handover steps to ensure a smooth completion.",
            },
            {
              number: "3",
              icon: "/images/Financial & Rental Assessment.svg",
              title: "Financial & Rental Assessment",
              body: "We provide realistic estimates for returns, running costs, and occupancy trends to support informed choices.",
            },
            {
              number: "4",
              icon: "/images/Full Due Diligence.svg",
              title: "Full Due Diligence",
              body: "Each shortlisted property is reviewed for condition, market alignment, compliance considerations, and rental performance (where applicable).",
            },
            {
              number: "5",
              icon: "/images/Offer & Negotiation Support.svg",
              title: "Offer & Negotiation Support",
              body: "Clear communication, structured offers, and transparent expectations help you move forward confidently.",
            },
          ].map((card, index) => (
            <div
              key={card.number}
              className={`bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[28px] flex flex-col gap-[40px] relative min-h-[220px] md:col-span-1 ${
                index < 3 ? "lg:col-span-2" : "lg:col-span-3"
              }`}
            >
              <span className="absolute right-[32px] top-[24px] font-crimson font-bold text-[120px] leading-[60px] text-[#002f57] opacity-[0.02] tracking-[-4.12px]">
                {card.number}
              </span>
              <div className="relative z-10 flex flex-col gap-[40px]">
                <div className="w-[36px] h-[36px] relative">
                  <Image
                    src={card.icon}
                    alt=""
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                    {card.title}
                  </h3>
                  <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                    {card.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* For Residential Buyers / For Investors Split */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1 min-h-[422px] rounded-[24px] overflow-hidden">
          <Image
            src="/images/finding-property/Finding%20property-%20for%20residential%20buyers-bg-dsk.webp"
            alt="Residential buyer property"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-[38px] left-[38px] right-[38px] space-y-2 text-white">
            <h3 className="font-crimson font-semibold text-[40px] leading-[40px] capitalize">
              For Residential Buyers
            </h3>
            <p className="font-manrope text-[18px] leading-[28px]">
              Buying a home is a significant milestone-our role is to keep the process clear and stress-free. We help you compare neighborhoods, arrange viewings, prepare documentation, and stay informed throughout every stage.
            </p>
          </div>
        </div>

        <div className="relative flex-1 min-h-[422px] rounded-[24px] overflow-hidden">
          <Image
            src="/images/finding-property/Finding%20property-%20for%20investors-bg-dsk.webp"
            alt="Investor-focused property"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-[38px] left-[38px] right-[38px] space-y-2 text-white">
            <h3 className="font-crimson font-semibold text-[40px] leading-[40px] capitalize">
              For Investors
            </h3>
            <p className="font-manrope text-[18px] leading-[28px]">
              A performance-driven approach for landlords and portfolio builders. We support you with rental estimates, HMO considerations, compliance guidance, refurb planning, and long-term portfolio strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Buying Process */}
      <section className="max-w-[1269px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[40px]">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-center">
          Our Buying Process
        </h2>

        <div className="flex flex-col lg:flex-row gap-[40px] items-start">
          <div className="w-full lg:w-[420px] flex justify-center">
            <div className="relative w-full max-w-[420px] h-[320px] rounded-[24px] overflow-hidden">
              <Image
                src="/images/finding-property/buying-process.png"
                alt="Buying process visual"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Vertical line */}
            <div className="absolute left-[19px] top-[10px] bottom-[10px] w-px bg-[#002f57]/15 hidden lg:block" />
          
            <div className="space-y-[48px]">
            {[
              {
                number: "01",
                title: "Consultation & Criteria",
                body: "We understand your goals, budget, and preferred locations.",
              },
              {
                number: "02",
                title: "Property Shortlisting ",
                body: "You receive curated options with key details, notes, & performance indicators. ",
              },
              {
                number: "03",
                title: "Due Diligence",
                body: "Independent checks, compliance review, and rental or resale insight (where relevant).",
              },
              {
                number: "04",
                title: "Offer & Negotiation",
                body: "Guidance on offer strategy, communication, and timelines.",
              },
              {
                number: "05",
                title: "Completion & Handover",
                body: "Support through legal checks, surveys, contracts, and final completion.",
              },
            ].map((step, index) => (
              <div key={index} className="relative flex gap-4">
                <div className="flex-shrink-0">
                  <div className="bg-[#FAFAFA] border border-[rgba(0,0,0,0.12)] rounded-[20px] w-[40px] h-[40px] flex items-center justify-center p-[6px]">
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#002f57]">
                      {step.number}
                    </span>
                  </div>
                </div>
                <div className="space-y-[2px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                    {step.title}
                  </h3>
                  <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}




