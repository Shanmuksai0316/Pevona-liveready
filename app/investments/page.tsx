import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import type { StrapiProperty } from "@/types/strapi";
import FilteredProperties from "@/components/investments/FilteredProperties";

export default async function InvestmentOpportunitiesPage() {
  // Fetch properties from Strapi
  let featuredProperties: StrapiProperty[] = [];
  try {
    const res = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");
    if (res?.data && Array.isArray(res.data)) {
      featuredProperties = res.data.slice(0, 6);
    }
  } catch (error) {
    console.error("Error fetching properties:", error);
  }
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Investment%20Opportunities/Investment%20Opportunities-banner-bg-dsk.webp"
                alt="Investment Opportunities background desktop"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Curated Investment{" "}
              <br />
              Opportunities
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              We source and vet property investments across London and the UK with a focus on
              transparency, compliance and sustainability. Each opportunity includes a full
              investment pack so you can assess commercial metrics, legal structure and exit
              strategy before you commit.
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

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
          <Image
            src="/images/Investment%20Opportunities/Investment%20Opportunities-banner-bg-mbl.webp"
            alt="Investment Opportunities background mobile"
            fill
            className="object-cover"
            unoptimized
            priority
          />
        </div>

        {/* Content positioned 50px from bottom, center-aligned */}
        <div className="absolute bottom-[50px] left-0 right-0 flex flex-col items-center px-5 sm:px-8 py-8 space-y-4 sm:space-y-6 text-white text-center">
          <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
            Curated Investment{" "}
            <br />
            Opportunities
          </h1>
          <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] max-w-[600px]">
            We source and vet property investments across London and the UK with a focus on
            transparency, compliance and sustainability. Each opportunity includes a full
            investment pack so you can assess commercial metrics, legal structure and exit
            strategy before you commit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors mt-2"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Featured Investment Properties */}
      <section className="max-w-[1440px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-9">
        <div className="max-w-[861px] mx-auto text-center space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Featured Investment Properties
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Discover our curated selection of investment opportunities. Each property has been carefully vetted for potential returns, location fundamentals, and long-term value.
          </p>
        </div>

        {/* Search Filter and Properties - Always show filter */}
        <FilteredProperties properties={featuredProperties} />
      </section>

      {/* Why invest with us */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          Why invest with us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          {/* Left side - Large card with image */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] h-[384px] min-h-[300px] sm:min-h-[350px] lg:min-h-[384px] w-full min-w-0 relative overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="/images/Investment Opportunities/2nd_Why_invest_with_us.png"
                alt="Managed execution"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
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
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[26px] items-center">
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
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0 flex-shrink-0">
              <Image
                src="/images/Investment Opportunities/3rd_Current_Investment_Opportunities_img_-_1.png"
                alt="London SE1 Riverside Apartments"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0 flex-shrink-0">
              <Image
                src="/images/Investment Opportunities/3rd_Current_Investment_Opportunities_img_-_2.png"
                alt="Manchester M3 City Tower Units"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0 flex-shrink-0">
              <Image
                src="/images/Investment Opportunities/3rd_Current_Investment_Opportunities_img_-_3.png"
                alt="Birmingham B1 Jewellery Quarter Lofts"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#003d70] transition-colors mt-4"
        >
          Request Current Opportunities
        </Link>
      </section>

      {/* Investment process */}
      <section className="bg-white w-full mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] py-[60px]">
        <div className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center mb-[60px]">
            Investment process
          </h2>

          <div className="flex flex-col lg:flex-row items-start justify-center gap-8 lg:gap-4 relative">
            {/* Single connecting line behind all steps on desktop */}
            <div className="hidden lg:block absolute left-[10px] right-[10px] top-[20px] h-px bg-[#002f57]/20" />

            {/* Step 1 */}
            <div className="relative z-10 flex flex-col items-center text-center w-full lg:max-w-[280px]">
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
            <div className="relative z-10 flex flex-col items-center text-center w-full lg:max-w-[280px]">
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
            <div className="relative z-10 flex flex-col items-center text-center w-full lg:max-w-[280px]">
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
            <div className="relative z-10 flex flex-col items-center text-center w-full lg:max-w-[280px]">
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
            <div className="relative z-10 flex flex-col items-center text-center w-full lg:max-w-[280px]">
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
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-5 lg:gap-[144px] items-center mb-[60px] lg:mb-[120px]">
        <div className="w-full lg:flex-1 max-w-[543px] space-y-[10px]">
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

        <div className="flex-1 relative w-full max-w-[636px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Investment Opportunities/5th_Due_diligence__investor_protections.png"
            alt="Business team analyzing investment documents"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 636px"
            unoptimized
          />
        </div>
      </section>

      {/* Fees & legal note */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row gap-5 lg:gap-[144px] items-center">
        <div className="flex-1 relative w-full max-w-[636px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/Investment Opportunities/6th_Fees__legal_note.png"
            alt="Real estate agent showing house model"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 636px"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[543px] space-y-[10px] order-1 lg:order-2">
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
