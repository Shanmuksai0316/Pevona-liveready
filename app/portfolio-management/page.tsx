import Image from "next/image";
import Link from "next/link";

export default function PortfolioManagementPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Portfolio page/Portfolio_page_banne.png"
                alt="House investments elements"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Build, Optimise &amp; Scale Your Property Portfolio
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Whether you own a single rental home or a multi-property portfolio, effective
              management is essential for long-term value and sustained returns. Our approach is
              structured around financial performance, compliance, tenant reliability, and ongoing
              asset growth - helping investors increase yield, minimise void periods, and maintain
              market stability.
            </p>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              We manage portfolios with complete transparency, regular reporting, and hands-on
              operational support across the UK's rental landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
            <Image
              src="/images/Portfolio page/portfolio-management-bg-mbl.png"
              alt="House investments elements"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          </div>

        <div className="relative w-full h-full flex flex-col justify-end items-center px-5 pb-[50px] z-10">
          <div className="max-w-[600px] space-y-4 text-white text-center">
            <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight">
              Build, Optimise &amp; Scale Your Property Portfolio
            </h1>
            <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              Whether you own a single rental home or a multi-property portfolio, effective
              management is essential for long-term value and sustained returns. Our approach is
              structured around financial performance, compliance, tenant reliability, and ongoing
              asset growth - helping investors increase yield, minimise void periods, and maintain
              market stability.
            </p>
            <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              We manage portfolios with complete transparency, regular reporting, and hands-on
              operational support across the UK's rental landscape.
            </p>
          </div>
        </div>
      </section>

      {/* What Our Portfolio Management Covers */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          What Our Portfolio Management Covers
        </h2>

        <div className="w-full space-y-[26px]">
          {/* Top row - 2 cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Portfolio Structuring & Planning */}
            <div className="flex flex-col">
              <div className="relative h-[300px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/Portfolio page/2nd_Our_Portfolio_img_-_1.png"
                  alt="Real estate agent team analysis"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
                <div className="absolute bottom-0 left-0 right-0 px-[26px] py-[20px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white text-center">
                    Portfolio Structuring &amp; Planning
                  </h3>
                </div>
              </div>
              <div className="px-5 py-0 mt-4">
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                  We review your current assets, income performance, area risk, and long-term
                  objectives to create a data-driven growth strategy.
                </p>
              </div>
            </div>

            {/* Yield & Performance Monitoring */}
            <div className="flex flex-col">
              <div className="relative h-[300px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/Portfolio page/2nd_Our_Portfolio_img_-_2.png"
                  alt="Finances elements wooden cubes"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
                <div className="absolute bottom-0 left-0 right-0 px-[26px] py-[20px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white text-center">
                    Yield &amp; Performance Monitoring
                  </h3>
                </div>
              </div>
              <div className="px-5 py-0 mt-4">
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                  Ongoing tracking of rental income, expenses, occupancy rates, and value movement
                  - with periodic reporting to keep you informed.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Risk Management & Compliance */}
            <div className="flex flex-col">
              <div className="relative h-[300px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/Portfolio page/2nd_Our_Portfolio_img_-_3.png"
                  alt="Business hand typing tablet with checklist"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
                <div className="absolute bottom-0 left-0 right-0 px-[26px] py-[20px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white text-center">
                    Risk Management &amp; Compliance
                  </h3>
                </div>
              </div>
              <div className="px-5 py-0 mt-4">
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                  End-to-end compliance oversight including documentation, rental legislation, HMO
                  standards, tenancy laws and safety certification.
                </p>
              </div>
            </div>

            {/* Tenant & Operational Oversight */}
            <div className="flex flex-col">
              <div className="relative h-[300px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/Portfolio page/2nd_Our_Portfolio_img_-_4.png"
                  alt="Jurist passing taking documents"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
                <div className="absolute bottom-0 left-0 right-0 px-[26px] py-[20px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white text-center">
                    Tenant &amp; Operational Oversight
                  </h3>
                </div>
              </div>
              <div className="px-5 py-0 mt-4">
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                  Full coordination of tenant sourcing, referencing, property maintenance, renewals,
                  and periodic inspections
                </p>
              </div>
            </div>

            {/* Growth Strategy & Expansion Support */}
            <div className="flex flex-col">
              <div className="relative h-[300px] rounded-[16px] overflow-hidden">
                <Image
                  src="/images/Portfolio page/2nd_Our_Portfolio_img_-_5.png"
                  alt="Composite image manager presenting whiteboard"
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
                <div className="absolute bottom-0 left-0 right-0 px-[26px] py-[20px]">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white text-center">
                    Growth Strategy &amp; Expansion Support
                  </h3>
                </div>
              </div>
              <div className="px-5 py-0 mt-4">
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                  Guidance on where, when and how to acquire next - aligned to yield goals, capital
                  appreciation areas and market timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Investors Choose Managed Portfolios */}
      <section className="max-w-[1053px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[26px]">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          Why Investors Choose Managed Portfolios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "Reduced administrative burden and improved efficiency",
            "Data-based reporting, not guesswork",
            "Better rental continuity and reduced void periods",
            "Consistent long-term asset appreciation",
            "One partner, one point of contact, fully accountable",
            "Stress-free portfolio scaling with expert oversight",
          ].map((benefit) => (
            <div
              key={benefit}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-5 h-[160px] flex items-center justify-center"
            >
              <p className="font-manrope text-[22px] leading-[24px] text-[#002f57] text-center">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Review & Onboarding */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center max-w-[750px]">
          Portfolio Review &amp; Onboarding
        </h2>

        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center w-full">
          {[
            {
              title: "Initial Assessment",
              description: "We review yield, income, tenancy status and compliance.",
              image: "/images/Portfolio page/4th_Portfolio_Review__Onboarding_img_-_1.png",
            },
            {
              title: "Strategy Setup",
              description: "Clear plan for performance improvement and growth.",
              image: "/images/Portfolio page/4th_Portfolio_Review__Onboarding_img_-_2.png",
            },
            {
              title: "Ongoing Management",
              description: "Hands-on oversight with reports and scheduled reviews.",
              image: "/images/Portfolio page/4th_Portfolio_Review__Onboarding_img_-_3.png",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-[5px] flex flex-col gap-5 h-[310px] w-full max-w-[460px]"
            >
              <div className="relative w-full h-[200px] rounded-[16px] overflow-hidden flex-shrink-0">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="px-[10px] py-0 flex flex-col gap-1">
                <h3 className="font-crimson font-semibold text-[20px] leading-[30px] text-[#002f57]">
                  {step.title}
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#003d70] transition-colors mt-8"
        >
          Book a Portfolio Assessment
        </Link>
      </section>

      {/* Suitable For */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-5 lg:mx-auto mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
        <div className="w-full lg:flex-1 relative max-w-[675px] h-[450px] rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/Portfolio page/5th_Suitable_For.png"
            alt="Team inspecting house model"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[589px] space-y-[12px] order-1 lg:order-2 p-[5%] lg:p-0">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Suitable For
          </h2>
          <div className="space-y-2">
            {[
              "First-time landlords building a foundation",
              "Growing investors scaling into multiple units",
              "Overseas or remote investors needing reliable oversight",
              "Established landlords wanting improved ROI & time-free management",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-[11px] flex-shrink-0" />
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
