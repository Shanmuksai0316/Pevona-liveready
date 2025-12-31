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
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-6 lg:px-[180px] pt-[39px] pb-[628px]">
          {/* Background image with gradient overlay */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[760px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/9d24c0e64da73bf5744de0123e483c65b1174932.png"
                alt="Modern real estate house"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57] via-[#002f57]/80 to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative max-w-[600px] space-y-9 text-white">
            <h1 className="font-crimson text-[66px] leading-[72px] tracking-[-1.98px]">
              Find the Right Property With Confidence
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Buying a home or investing in UK property should feel simple, transparent, and well-supported. We help you navigate every stage with market insight, verified information, and guidance tailored to your goal
            </p>
            <button className="bg-white text-[#002f57] px-6 py-3 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-white/90 transition-colors">
              Book a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Your Property Search, Simplified */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] flex flex-col lg:flex-row items-center gap-[221px]">
        <div className="max-w-[526px] space-y-9">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Your Property Search, Simplified
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Whether you're a first-time buyer, a seasoned investor, or expanding your rental portfolio, our structured approach removes uncertainty. We focus on clarity, due diligence, and informed decision-making, giving you confidence at every step.
          </p>
          <button className="bg-white border border-[rgba(0,0,0,0.12)] px-6 py-3 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] text-[#002f57] hover:bg-[#0073B5] hover:text-white transition-colors">
            View All Properties
          </button>
        </div>

        <div className="relative w-full max-w-[650px] flex-shrink-0">
          <div className="relative h-[732px]">
            <Image
              src="http://localhost:3845/assets/455714d876605fc98963b905bf6608251d09285b.png"
              alt="Property search visual"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0">
              <Image
                src="http://localhost:3845/assets/51a911f94cc7b909bdad26169d709fb270d13eb4.png"
                alt="Real estate analysis"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* What We Help You Buy */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] flex flex-col items-center gap-9">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          What We Help You Buy
        </h2>
        <div className="flex flex-wrap gap-4 justify-center max-w-[1520px]">
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
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] h-[200px] flex flex-col justify-center px-[30px] py-[20px] w-full md:w-[371px]"
            >
              <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] mb-2">
                {card.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How We Support Your Purchase */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] flex flex-col items-center gap-9">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          How We Support Your Purchase
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          {[
            {
              number: "1",
              icon: "http://localhost:3845/assets/7ae5ad68dd7ad8af53a1c99fb72fd1f1f225deec.svg",
              title: "Tailored Property Search",
              body: "We shortlist suitable homes or investments based on your criteria, location preferences, and long-term plans.",
            },
            {
              number: "2",
              icon: "http://localhost:3845/assets/6f4f4c25ce5828f305f9525195092627aa6ee25a.svg",
              title: "Completion Guidance",
              body: "We guide you through surveys, contracts, legal checks, and final handover steps to ensure a smooth completion.",
            },
            {
              number: "3",
              icon: "http://localhost:3845/assets/4c289062e42110ed22aae0f240ca306a5b50e778.svg",
              title: "Financial & Rental Assessment",
              body: "We provide realistic estimates for returns, running costs, and occupancy trends to support informed choices.",
            },
            {
              number: "4",
              icon: "http://localhost:3845/assets/25d54aa3c9dc1529ad1560cf159e695a55d0505d.svg",
              title: "Full Due Diligence",
              body: "Each shortlisted property is reviewed for condition, market alignment, compliance considerations, and rental performance (where applicable).",
            },
            {
              number: "5",
              icon: "http://localhost:3845/assets/70c863e747e3333c6a472a18c707fae8ee319cfd.svg",
              title: "Offer & Negotiation Support",
              body: "Clear communication, structured offers, and transparent expectations help you move forward confidently.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className={`bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[28px] flex flex-col gap-[60px] relative ${
                index < 3 ? "w-full md:w-[426px]" : "w-full md:w-[650px]"
              } min-h-[308px]`}
            >
              <span className="absolute right-[71px] top-[31px] font-crimson font-bold text-[137px] leading-[71px] text-[#002f57] opacity-[0.02] tracking-[-4.12px]">
                {card.number}
              </span>
              <div className="relative z-10 flex flex-col gap-[60px]">
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
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] flex gap-4">
        <div className="relative flex-1 min-h-[422px] rounded-[24px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/bb003c73853fb7801928d36d0fa470b9f7cf72cd.png"
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
            src="http://localhost:3845/assets/6271a7d00ed6ac50b236623f908417de9ef70cc1.png"
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
      <section className="max-w-[1269px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[150px] flex flex-col lg:flex-row gap-[70px] items-end">
        <div className="flex flex-col items-center gap-[46px] w-[419px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
            Our Buying Process
          </h2>
          <div className="relative w-full max-w-[433px] h-[650px]">
            <Image
              src="http://localhost:3845/assets/51a911f94cc7b909bdad26169d709fb270d13eb4.png"
              alt="Buying process visual"
              fill
              className="object-cover rounded-[24px]"
              unoptimized
            />
          </div>
        </div>

        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-[10px] bottom-[10px] w-px bg-[#002f57]/15 hidden lg:block" />
          
          <div className="space-y-[82px] pl-[76px]">
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
      </section>

      {/* Properties Section with Filter (client-side, Strapi-backed) */}
      <PropertiesFilterSection properties={properties} />
    </div>
  );
}
