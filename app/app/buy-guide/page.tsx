import Image from "next/image";
import Link from "next/link";

export default function BuyGuidePage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-6 lg:px-[180px] pt-10 pb-[80px]">
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-b-[40px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/9d24c0e64da73bf5744de0123e483c65b1174932.png"
                alt="Modern UK homes from above"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          <div className="relative max-w-[700px] mt-10 space-y-6 text-white">
            <h1 className="font-crimson text-[40px] md:text-[56px] lg:text-[66px] leading-[1.05] tracking-[-0.06em]">
              Buy with Clarity – Guidance, Areas &amp; Property Search in One Place
            </h1>
            <p className="font-manrope text-[18px] leading-[28px]">
              Your complete buying hub — a simple step-by-step guide, quick area insights and an easy
              way to find the right property across the UK.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Buying Guide – steps */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[120px] flex flex-col lg:flex-row gap-[60px]">
        {/* Left: intro + image */}
        <div className="lg:w-[40%] flex flex-col gap-8">
          <div className="space-y-4">
            <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-0.06em] text-[#002f57]">
              Quick Buying Guide
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333333]/80">
              Buying a property becomes easier when the steps are clear. Below is the short version of
              the UK buying process — simple, practical and easy to follow.
            </p>
          </div>

          <div className="relative w-full max-w-[420px] h-[260px] rounded-[16px] overflow-hidden">
            <Image
              src="http://localhost:3845/assets/3865a44cbb33d780a42f6755d57e061d5d256cd0.png"
              alt="Aerial view of UK homes"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right: steps list */}
        <div className="lg:w-[60%] space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="space-y-2">
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
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[140px] flex flex-col lg:flex-row items-center gap-[70px]">
        <div className="lg:w-[50%] space-y-8">
          <div className="space-y-4">
            <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-0.06em] text-[#002f57]">
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

          <ul className="space-y-2 font-manrope text-[18px] leading-[28px] text-[#333333]/80">
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

        <div className="lg:w-[50%] flex justify-center">
          <div className="relative w-full max-w-[520px] h-[420px] rounded-[24px] overflow-hidden">
            <Image
              src="http://localhost:3845/assets/aee9c819752b5d297f250f2146b72494c0bfdc28.png"
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
        <div className="max-w-[1320px] mx-auto px-6 lg:px-0 text-white space-y-10">
          <div className="text-center space-y-3">
            <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-0.06em]">
              Area Insights
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] opacity-80 max-w-[720px] mx-auto">
              The right area shapes your lifestyle, rental return and long-term value. Below are
              short descriptions of key UK areas. Explore full guides for deeper detail.
            </p>
          </div>

          {/* Area tabs (static for now) */}
          <div className="flex flex-wrap justify-center gap-3">
            {["London", "Manchester", "Birmingham", "Leeds"].map((city, idx) => (
              <button
                key={city}
                type="button"
                className={`px-4 py-2 rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] ${idx === 0
                  ? "bg-white text-[#002f57]"
                  : "bg-white/20 text-white hover:bg-white/30"
                  }`}
              >
                {city.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-col lg:flex-row items-center gap-10">
            <div className="lg:w-1/2 space-y-6">
              <h3 className="font-crimson text-[26px] leading-[30px] text-white">
                London Area Guide
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] opacity-80">
                London offers unmatched connectivity, diverse neighbourhoods, and a strong property
                market with year-round activity. Whether you’re buying or renting, the area provides
                options for every lifestyle — from modern apartments to family homes. High tenant and
                buyer demand make it a stable and future-ready location.
              </p>
              <ul className="font-manrope text-[18px] leading-[28px] opacity-80 list-disc list-inside space-y-1">
                <li>Excellent transport and year-round demand</li>
                <li>Mix of modern flats and family homes</li>
                <li>Strong rental and resale movement</li>
                <li>Suits professionals, families, investors</li>
              </ul>
            </div>

            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-[520px] h-[360px] rounded-[24px] overflow-hidden">
                <Image
                  src="http://localhost:3845/assets/8bd4e2bf21083a0d1a6024543f926e9019e629a2.png"
                  alt="Modern London home"
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
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[120px] flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1 min-h-[260px] rounded-[24px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/bb003c73853fb7801928d36d0fa470b9f7cf72cd.png"
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
            <button className="font-crimson text-[18px] leading-[28px] underline">
              Start Home Search
            </button>
          </div>
        </div>

        <div className="relative flex-1 min-h-[260px] rounded-[24px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/c5fb7f61034c4eaddb6b883df25ce18352a1c096.png"
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
            <button className="font-crimson text-[18px] leading-[28px] underline">
              Explore Investment Properties
            </button>
          </div>
        </div>
      </section>

      {/* Preparing to Buy checklist */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[140px] mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row items-center gap-[70px]">
        <div className="lg:w-[50%] relative h-[320px] rounded-[24px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/1926b3a51a628be90e643875382fc48acb98c3b8.png"
            alt="Couple reviewing documents"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="lg:w-[50%] space-y-6">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-0.06em] text-[#002f57]">
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

