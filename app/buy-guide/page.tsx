"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BuyGuidePage() {
  const [activeCity, setActiveCity] = useState<"London" | "Manchester" | "Birmingham" | "Leeds">(
    "London",
  );

  const cityContent = {
    London: {
      title: "London Area Guide",
      image: "/images/buy-guide/london.png",
      body: `London offers unmatched connectivity, diverse neighbourhoods, and a strong property
market with year-round activity. Whether you're buying or renting, the area provides
options for every lifestyle — from modern apartments to family homes. High tenant and
buyer demand make it a stable and future-ready location.`,
    },
    Manchester: {
      title: "Manchester Area Guide",
      image: "/images/buy-guide/manchester.png",
      body: `Manchester combines a strong jobs market, growing regeneration zones and excellent
transport links across the North. It offers a mix of city-centre apartments and family
homes, making it attractive for both owner-occupiers and long-term investors.`,
    },
    Birmingham: {
      title: "Birmingham Area Guide",
      image: "/images/buy-guide/birmingham.png",
      body: `Birmingham is a major UK hub with a diverse economy, strong student population and
ongoing infrastructure investment. From new-build schemes to traditional suburbs, it
provides a wide spread of options and strong rental demand.`,
    },
    Leeds: {
      title: "Leeds Area Guide",
      image: "/images/buy-guide/leeds.png",
      body: `Leeds offers a balance of city-centre living, leafy suburbs and strong regional
employment. Its mix of professional tenants and families supports a stable sales and
rental market with good long-term fundamentals.`,
    },
  } as const;

  const active = cityContent[activeCity];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero */}
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
              <Image
                src="/images/buy-guide/Buy%20Guide-%20for%20homebuyer-bg-mbl.webp"
                alt="Buy guide background mobile"
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
                src="/images/buy-guide/Buy%20Guide-%20banner-bg-dsk.webp"
                alt="Buy guide background desktop"
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
              Buy with Clarity – Guidance, Areas &amp; Property Search in One Place
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Your complete buying hub — a simple step-by-step guide, quick area insights and an easy
              way to find the right property across the UK.
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
              Buy with Clarity – Guidance, Areas &amp; Property Search in One Place
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Your complete buying hub — a simple step-by-step guide, quick area insights and an easy
              way to find the right property across the UK.
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

      {/* Quick Buying Guide – steps */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-4 lg:px-0 lg:pl-[80px] lg:pr-[80px] 1300:pl-[80px] 1300:pr-[80px] 1400:pl-[80px] 1400:pr-[80px] 1500:pl-[100px] 1500:pr-[100px] 1600:pl-[130px] 1600:pr-[130px] mt-[60px] lg:mt-[120px] flex flex-col lg:flex-row gap-[48px] items-start">
        {/* Left: intro + image */}
        <div className="lg:w-[40%] flex flex-col gap-8">
          <div className="space-y-4 text-center lg:text-left">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-0.06em] text-[#002f57]">
              Quick Buying Guide
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333333]/80">
              Buying a property becomes easier when the steps are clear. Below is the short version of
              the UK buying process — simple, practical and easy to follow.
            </p>
          </div>

          <div className="relative w-full max-w-[520px] h-[220px] rounded-[16px] overflow-hidden mx-auto lg:mx-0">
            <Image
              src="/images/buy-guide/quick-guide.png"
              alt="Aerial view of UK homes"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right: steps list */}
        <div className="lg:w-[60%] space-y-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="space-y-2 pb-4 border-b border-[rgba(0,0,0,0.12)]"
            >
              <span className="inline-flex items-center rounded-full bg-[#FCE6E9] px-[10px] py-[4px] font-manrope text-[12px] leading-[16px] text-[#333]">
                STEP {step.number}
              </span>
              <h3 className="font-crimson text-[26px] leading-[30px] text-[#002f57]">
                {step.title}
              </h3>
              {step.content}
            </div>
          ))}
        </div>
      </section>

      {/* How we help section */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[140px] flex flex-col lg:flex-row items-center gap-[70px]">
        <div className="w-full lg:w-[50%] space-y-8">
          <div className="space-y-4">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-0.06em] text-[#002f57]">
              How We Help You Find the Right Property
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333333]/80">
              Buying is easier with the right support. Our approach keeps the process clear,
              structured and aligned with UK market standards.
            </p>
            <p className="font-manrope font-semibold text-[18px] leading-[28px] text-[#333333]">
              What we do:
            </p>
          </div>

          <ul className="space-y-2 font-manrope text-[18px] leading-[28px] text-[#333333]/80 list-disc list-inside">
            <li>Tailored shortlists based on your goals</li>
            <li>Area-led recommendations</li>
            <li>Viewings arranged and feedback captured</li>
            <li>Offer guidance &amp; negotiation support</li>
            <li>Coordination through conveyancing</li>
            <li>Regular updates from a single point of contact</li>
          </ul>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#003d70] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="w-full lg:w-[50%] flex justify-center">
          <div className="relative w-full max-w-[520px] h-[420px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/buy-guide/help.png"
              alt="Advisor supporting home buyers"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Area Insights section */}
      <section className="mt-[60px] lg:mt-[160px] w-full bg-[#002f57] py-[80px]">
        <div className="max-w-[1320px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] text-white space-y-10">
          <div className="text-center space-y-3">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-0.06em]">
              Area Insights
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] opacity-80 max-w-[720px] mx-auto">
              The right area shapes your lifestyle, rental return and long-term value. Below are
              short descriptions of key UK areas. Explore full guides for deeper detail.
            </p>
          </div>

          {/* Area tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {(["London", "Manchester", "Birmingham", "Leeds"] as const).map((city) => (
              <button
                key={city}
                type="button"
                className={`px-4 py-2 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] ${activeCity === city
                    ? "bg-white text-[#002f57]"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
                onClick={() => setActiveCity(city)}
              >
                {city.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col lg:flex-row items-center gap-10">
            <div className="w-full lg:w-1/2 space-y-6">
              <h3 className="font-crimson text-[26px] leading-[30px] text-white">
                {active.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] opacity-80">
                {active.body}
              </p>
              <ul className="font-manrope text-[18px] leading-[28px] opacity-80 list-disc list-inside space-y-1">
                <li>Excellent transport and year-round demand</li>
                <li>Mix of modern flats and family homes</li>
                <li>Strong rental and resale movement</li>
                <li>Suits professionals, families, investors</li>
              </ul>
            </div>

            <div className="w-full lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[520px] h-[360px] rounded-[24px] overflow-hidden">
                <Image
                  src={active.image}
                  alt={`${activeCity} area`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For homebuyers / investors cards */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1 min-h-[360px] rounded-[24px] overflow-hidden">
          <Image
            src="/images/buy-guide/Buy%20Guide-%20for%20homebuyer-bg-dsk.webp"
            alt="Home for buyers"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 space-y-3 text-white">
            <h3 className="font-crimson text-[32px] md:text-[40px] leading-[40px]">
              For Homebuyers
            </h3>
            <p className="font-manrope text-[18px] leading-[28px]">
              Area guidance, viewing support and help coordinating surveys and conveyancing.
            </p>
            <Link href="/finding-property" className="font-crimson text-[18px] leading-[28px] underline hover:no-underline">
              Start Home Search
            </Link>
          </div>
        </div>

        <div className="relative flex-1 min-h-[360px] rounded-[24px] overflow-hidden">
          <Image
            src="/images/buy-guide/Buy%20Guide-%20for%20investors-bg-dsk.webp"
            alt="Homes for investors"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 space-y-3 text-white">
            <h3 className="font-crimson text-[32px] md:text-[40px] leading-[40px]">
              For Investors
            </h3>
            <p className="font-manrope text-[18px] leading-[28px]">
              Yield insights, tenancy notes and suitability checks for buy-to-let and HMO options.
            </p>
            <Link href="/investments" className="font-crimson text-[18px] leading-[28px] underline hover:no-underline">
              Explore Investment Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Preparing to Buy checklist */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[140px] mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row items-center gap-[70px]">
        <div className="w-full lg:w-[50%] relative h-[320px] rounded-[24px] overflow-hidden">
          <Image
            src="/images/buy-guide/checklist.png"
            alt="Couple reviewing documents"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="w-full lg:w-[50%] space-y-6">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-0.06em] text-[#002f57]">
            Preparing to Buy – Quick Checklist
          </h2>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333333]/80 space-y-2">
            <li>Confirm your budget &amp; mortgage position</li>
            <li>Prepare ID and financial proofs</li>
            <li>List must-have property features</li>
            <li>Research 2–3 potential areas</li>
            <li>Arrange viewing times in advance</li>
          </ul>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#003d70] transition-colors"
          >
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}

const steps = [
  {
    number: "1",
    title: "Understand Your Goals",
    content: (
      <p className="font-manrope text-[18px] leading-[28px] text-[#333333]/80">
        Define your budget, preferred areas and must-have features.
      </p>
    ),
  },
  {
    number: "2",
    title: "Get Your Finances Ready",
    content: (
      <div className="font-manrope text-[18px] leading-[28px] text-[#333333]/80 space-y-1">
        <p>Whether you&apos;re financing or buying outright, confirm your:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Mortgage AIP (if applicable)</li>
          <li>Proof of funds</li>
          <li>Understanding of additional costs (survey, solicitor, stamp duty)</li>
        </ul>
      </div>
    ),
  },
  {
    number: "3",
    title: "Create a Shortlist",
    content: (
      <div className="font-manrope text-[18px] leading-[28px] text-[#333333]/80 space-y-1">
        <p>We help you refine the market by presenting:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Suitable properties</li>
          <li>Local comparables</li>
          <li>Key notes (EPC, planning, tenancies if relevant)</li>
        </ul>
      </div>
    ),
  },
  {
    number: "4",
    title: "Viewings & Checks",
    content: (
      <div className="font-manrope text-[18px] leading-[28px] text-[#333333]/80 space-y-1">
        <p>During viewings, pay attention to:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Natural light, room flow</li>
          <li>Building condition &amp; heating systems</li>
          <li>Noise levels &amp; parking</li>
          <li>Local amenities &amp; schools</li>
        </ul>
      </div>
    ),
  },
  {
    number: "5",
    title: "Making an Offer",
    content: (
      <div className="font-manrope text-[18px] leading-[28px] text-[#333333]/80 space-y-1">
        <p>We assist with:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Offer strategy</li>
          <li>Negotiations</li>
          <li>Communication with sellers/agents</li>
        </ul>
      </div>
    ),
  },
  {
    number: "6",
    title: "Surveys & Legal Steps",
    content: (
      <p className="font-manrope text-[18px] leading-[28px] text-[#333333]/80">
        Expect ID checks, solicitor work, local searches and a survey report.
      </p>
    ),
  },
  {
    number: "7",
    title: "Exchange & Completion",
    content: (
      <p className="font-manrope text-[18px] leading-[28px] text-[#333333]/80">
        Once contracts are signed and funds transferred, you collect the keys and move in.
      </p>
    ),
  },
] as const;




