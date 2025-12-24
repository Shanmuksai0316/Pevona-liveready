import Image from "next/image";
import Link from "next/link";

export default function InvestmentOpportunitiesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[628px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Investment Opportunities/Investment_Opportunities_banner.png"
                alt="Modern house with wooden deck and lights at night"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative max-w-[606px] mt-[305px] space-y-4 text-white">
            <h1 className="font-crimson text-[66px] leading-[66px] tracking-[-1.98px]">
              Curated Investment{" "}
              <br />
              Opportunities
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              We source and vet property investments across London and the UK with a focus on
              transparency, compliance and sustainability. Each opportunity includes a full
              investment pack so you can assess commercial metrics, legal structure and exit
              strategy before you commit.
            </p>
          </div>
        </div>
      </section>

      {/* Why invest with us */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          Why invest with us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left side - Large card with image */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] h-[384px] relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/Investment Opportunities/2nd_Why_invest_with_us.png"
                alt="Managed execution"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-[30px] bg-gradient-to-t from-black/60 to-transparent">
              <div className="space-y-[10px]">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-white">
                  Managed execution
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-white/90">
                  From purchase and refurbishment to tenancy and exit, we coordinate the project
                  for you.
                </p>
              </div>
            </div>
          </div>

          {/* Right side - Three smaller cards */}
          <div className="flex flex-col gap-4">
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-[30px] h-[150px] flex flex-col justify-center">
              <div className="space-y-[10px]">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                  Full due diligence
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  Every listing is accompanied by independent valuation, planning checks and legal
                  documentation.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-[30px] h-[150px] flex flex-col justify-center">
              <div className="space-y-[10px]">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                  Curated deals
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  We screen opportunities to match risk profile, location fundamentals and ESG
                  considerations.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-[30px] h-[150px] flex flex-col justify-center">
              <div className="space-y-[10px]">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                  Ethical focus
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  We prioritise investments that deliver community value and environmental
                  responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Investment Opportunities */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[26px] items-center">
        <div className="max-w-[1035px] text-center space-y-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Current Investment Opportunities
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Explore high-potential residential and buy-to-let opportunities across key growth
            cities in the UK. These investments have been identified for strong rental demand,
            long-term stability, and yield performance - ideal for both first-time and
            portfolio-building investors.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full max-w-[1420px]">
          {/* Property Card 1 */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col h-[320px]">
            <div className="relative w-full h-[220px] flex-shrink-0">
              <Image
                src="/images/Investment Opportunities/3rd_Current_Investment_Opportunities_img_-_1.png"
                alt="London SE1 Riverside Apartments"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-[10px] flex flex-col gap-1 flex-1">
              <h3 className="font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57]">
                London SE1 – Riverside Apartments
              </h3>
              <p className="font-manrope text-[14px] leading-[24px] text-[#333]">
                From £420,000 · Est. Yield 5.6–6.1%. High rental demand and excellent long-term
                capital retention.
              </p>
            </div>
          </div>

          {/* Property Card 2 */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col h-[320px]">
            <div className="relative w-full h-[220px] flex-shrink-0">
              <Image
                src="/images/Investment Opportunities/3rd_Current_Investment_Opportunities_img_-_2.png"
                alt="Manchester M3 City Tower Units"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-[10px] flex flex-col gap-1 flex-1">
              <h3 className="font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57]">
                Manchester M3 – City Tower Units
              </h3>
              <p className="font-manrope text-[14px] leading-[24px] text-[#333]">
                From £310,000 · Est. Yield 6.8–7.4%. Strong yield performance in a rapidly
                developing northern hub.
              </p>
            </div>
          </div>

          {/* Property Card 3 */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col h-[320px]">
            <div className="relative w-full h-[220px] flex-shrink-0">
              <Image
                src="/images/Investment Opportunities/3rd_Current_Investment_Opportunities_img_-_3.png"
                alt="Birmingham B1 Jewellery Quarter Lofts"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-[10px] flex flex-col gap-1 flex-1">
              <h3 className="font-crimson font-semibold text-[18px] leading-[28px] text-[#002f57]">
                Birmingham B1 – Jewellery Quarter Lofts
              </h3>
              <p className="font-manrope text-[14px] leading-[24px] text-[#333]">
                From £255,000 · Est. Yield 6.2–6.7%. Emerging rental hotspot with rising tenant
                demand.
              </p>
            </div>
          </div>
        </div>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#29902E] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] transition-colors mt-4"
        >
          Request Current Opportunities
        </Link>
      </section>

      {/* Investment process */}
      <section className="bg-white w-full mt-[150px] py-[60px]">
        <div className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center mb-[60px]">
            Investment process
          </h2>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 relative">
            {/* Single connecting line behind all steps on desktop */}
            <div className="hidden lg:block absolute left-[10px] right-[10px] top-[20px] h-px bg-[#002f57]/20" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[280px]">
              <div className="bg-[#002f57] rounded-[20px] size-[40px] flex items-center justify-center mb-4">
                <span className="font-crimson font-semibold text-[20px] leading-[30px] text-white">
                  01
                </span>
              </div>
              <div className="space-y-[10px] px-[10px]">
                <h3 className="font-crimson font-semibold text-[22px] leading-[32px] text-[#002f57]">
                  Express interest
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  request the investment pack and initial summary
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[280px]">
              <div className="bg-[#002f57] rounded-[20px] size-[40px] flex items-center justify-center mb-4">
                <span className="font-crimson font-semibold text-[20px] leading-[30px] text-white">
                  02
                </span>
              </div>
              <div className="space-y-[10px] px-[10px]">
                <h3 className="font-crimson font-semibold text-[22px] leading-[32px] text-[#002f57]">
                  Review &amp; Q&amp;A
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  receive full financial model, planning, and risk documents; book a one-to-one
                  call.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[280px]">
              <div className="bg-[#002f57] rounded-[20px] size-[40px] flex items-center justify-center mb-4">
                <span className="font-crimson font-semibold text-[20px] leading-[30px] text-white">
                  03
                </span>
              </div>
              <div className="space-y-[10px] px-[10px]">
                <h3 className="font-crimson font-semibold text-[22px] leading-[32px] text-[#002f57]">
                  Due diligence
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  independent surveys, legal review and AML / investor verification.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[280px]">
              <div className="bg-[#002f57] rounded-[20px] size-[40px] flex items-center justify-center mb-4">
                <span className="font-crimson font-semibold text-[20px] leading-[30px] text-white">
                  04
                </span>
              </div>
              <div className="space-y-[10px] px-[10px]">
                <h3 className="font-crimson font-semibold text-[22px] leading-[32px] text-[#002f57]">
                  Commitment &amp; onboarding
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  sign heads of terms; funds held under secure client-money arrangements.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-[280px]">
              <div className="bg-[#002f57] rounded-[20px] size-[40px] flex items-center justify-center mb-4">
                <span className="font-crimson font-semibold text-[20px] leading-[30px] text-white">
                  05
                </span>
              </div>
              <div className="space-y-[10px] px-[10px]">
                <h3 className="font-crimson font-semibold text-[22px] leading-[32px] text-[#002f57]">
                  Execution &amp; reporting
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                  project management, monthly investor updates and exit delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Due diligence & investor protections */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[144px] items-center mb-[120px]">
        <div className="flex-1 max-w-[543px] space-y-[10px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Due diligence &amp; investor protections
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Every opportunity is supported by independent valuation, planning review, and legal
            due diligence. We perform AML and investor ID checks in line with UK regulations and
            hold client funds under an approved Client Money Protection scheme. All materials
            include clear risk explanations and a legal disclaimer.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[636px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Investment Opportunities/5th_Due_diligence__investor_protections.png"
            alt="Business team analyzing investment documents"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Fees & legal note */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px] flex flex-col lg:flex-row gap-[144px] items-center">
        <div className="flex-1 relative w-full max-w-[636px] h-[450px] rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/Investment Opportunities/6th_Fees__legal_note.png"
            alt="Real estate agent showing house model"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[543px] space-y-[10px] order-1 lg:order-2">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Fees &amp; legal note
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Fees, charges and legal terms are disclosed in every investment pack and discussed
            prior to commitment. Investment opportunities are not guaranteed - capital and returns
            can rise or fall. Please consult your financial adviser for regulated tax or investment
            advice.
          </p>
        </div>
      </section>
    </div>
  );
}
