import Image from "next/image";

export default function ChargesFeesPage() {
  return (
    <main className="bg-[#FFFFFF] text-[#0B2D4D] min-h-screen">
      {/* ================= HERO ================= */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
        <Image
          src="/images/charges-fees-hero.png"
          alt="Charges & Fees"
          fill
          priority
          className="object-cover"
          unoptimized
        />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Charges & Fees
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Clear, transparent and compliant — our fees explained for tenants
              and landlords.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
            <Image
              src="/images/charges-fees-bnr-bg-mbl.png"
              alt="Charges & Fees"
              fill
              priority
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>

        <div className="relative w-full h-full flex flex-col justify-end items-center px-5 pb-[50px] z-10">
          <div className="max-w-[600px] space-y-4 text-white text-center">
            <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight">
              Charges & Fees
            </h1>
            <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              Clear, transparent and compliant — our fees explained for tenants
              and landlords.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO & SALES DEPARTMENT ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1410px] 1920:max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-[26px]">
            <h2 className="font-crimson text-[36px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[-1.08px] md:tracking-[-1.68px] mb-4 text-[#002f57]">
          Transparent & Competitive Estate Agency Fees
        </h2>
            <p className="max-w-[840px] mx-auto font-manrope text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#333]">
              Our fees are fully inclusive, clearly structured, and designed to offer excellent value with complete transparency and compliance.
            </p>
          </div>

          {/* Sales Department Title */}
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sales Department
          </h3>

          {/* Main Fee Structure - Single Box with 4 Sections */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden mb-[26px]">
            <div className="flex flex-col md:flex-row">
              {/* Sole Agency */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[120px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-2 text-[#002f57]">Sole Agency</p>
                <p className="font-crimson text-[20px] leading-[30px] text-[#333]">1.2% – 1.8% of sale price incl. VAT</p>
              </div>
              
              {/* Multi-Agency */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[120px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-2 text-[#002f57]">Multi-Agency</p>
                <p className="font-crimson text-[20px] leading-[30px] text-[#333]">2.5% – 3.5% incl. VAT</p>
              </div>
              
              {/* Premium Concierge */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[120px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-2 text-[#002f57]">Premium Concierge</p>
                <p className="font-crimson text-[20px] leading-[30px] text-[#333]">1.8% – 2.5% incl. VAT</p>
              </div>
              
              {/* Fixed-Fee Alternative */}
              <div className="flex-1 px-[26px] py-[20px] text-center min-h-[120px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-2 text-[#002f57]">Fixed-Fee Alternative</p>
                <p className="font-crimson text-[20px] leading-[30px] text-[#333]">£3,500 – £5,000 (No Sale, No Fee)</p>
              </div>
            </div>
          </div>

          {/* Three Service Boxes */}
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Valuation Services */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-4 text-[#002f57]">Valuation Services</h4>
              <ul className="space-y-[10px]">
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Market Appraisal: </span>
                    <span className="font-crimson font-bold text-[20px] leading-[30px] text-[#333]">Free of charge</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Formal Written Valuation: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">£250 – £1,000 incl. VAT</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">RICS-Compliant Valuation: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">£750 – £1,500 incl. VAT</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Marketing Packages */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-4 text-[#002f57]">Marketing Packages</h4>
              <ul className="space-y-[10px]">
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Standard Listing: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">Included in commission</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Premium Package: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">from £350 incl. VAT</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Luxury Package: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">from £1,000 incl. VAT</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Global Exposure Add-On: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">£500 – £1,500 incl. VAT</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Transaction Support */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-4 text-[#002f57]">Transaction Support</h4>
              <ul className="space-y-[10px]">
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Standard Sales Progression: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">Included</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Premium Progression Support: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">£250 – £500 incl. VAT</span>
                  </div>
                </li>
                <li className="flex gap-[14px] items-start">
                  <div className="h-[6px] w-[6px] rounded-full bg-[#002f57] mt-[10px] shrink-0"></div>
                  <div className="flex-1">
                    <span className="font-crimson text-[22px] leading-[32px] text-[#002f57]">Fast-Track Completion: </span>
                    <span className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">£750 incl. VAT</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SALES AGENCY FEES ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1336px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sales Agency Fees
          </h3>
          <div className="flex flex-col md:flex-row gap-[24px] md:gap-[45px]">
            {/* Vendor Card */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[24px] md:px-[36px] py-[26px] min-h-[220px]">
              <p className="font-crimson text-[16px] leading-[24px] mb-[4px] text-[#333] capitalize">Vendor</p>
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Sales Agency Fee</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£1,250</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">
                Comprehensive marketing, valuation, viewings, and sales progression through to completion. Fixed fee payable on completion.
              </p>
            </div>
            
            {/* Buyer Card */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[24px] md:px-[36px] py-[26px] min-h-[220px]">
              <p className="font-crimson text-[16px] leading-[24px] mb-[4px] text-[#333] capitalize">Buyer</p>
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Representation Fee</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£750</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">
                Dedicated property search, negotiation, and conveyancing support for buyers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOURCING & INVESTMENT ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1336px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sourcing & Investment
          </h3>
          
          {/* Top Row - Two Cards */}
          <div className="flex flex-col md:flex-row gap-[16px] mb-[16px]">
            {/* Sourcing Fee */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Sourcing Fee</h4>
              <p className="font-manrope font-normal text-[18px] leading-[28px] mb-[8px] text-[#333]">Payable upon successful deal packaging.</p>
              <div className="flex gap-[3px] items-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£1,000</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
            </div>
            
            {/* Purchase Representation */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Purchase Representation</h4>
              <p className="font-manrope font-normal text-[18px] leading-[28px] mb-[8px] text-[#333]">Full negotiation & conveyance support.</p>
              <div className="flex gap-[3px] items-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">0.75%</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT (of Purchase Price)</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Row - Three Cards */}
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Portfolio Setup */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Portfolio Setup</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£500</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Initial structure & strategy planning.</p>
            </div>
            
            {/* Suitability Screening */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Suitability Screening</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£150</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Risk profile & AML assessment.</p>
            </div>
            
            {/* Annual Management */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Annual Management</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">0.50%</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Yearly review & yield optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1316px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Compliance
          </h3>
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden">
            {/* Onboarding */}
            <div className="flex justify-between items-center px-[36px] py-[26px] border-b border-[rgba(0,0,0,0.12)]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">Onboarding</p>
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£250</p>
            </div>
            
            {/* EICR */}
            <div className="flex justify-between items-center px-[36px] py-[26px] border-b border-[rgba(0,0,0,0.12)]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">EICR</p>
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£120 - £180</p>
            </div>
            
            {/* Gas Safety */}
            <div className="flex justify-between items-center px-[36px] py-[26px] border-b border-[rgba(0,0,0,0.12)]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">Gas Safety</p>
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£75 - £95</p>
            </div>
            
            {/* HMO Licensing */}
            <div className="flex justify-between items-center px-[36px] py-[26px] border-b border-[rgba(0,0,0,0.12)]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">HMO Licensing</p>
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£250 - £350</p>
            </div>
            
            {/* Safety Pack - Highlighted */}
            <div className="flex justify-between items-center px-[36px] py-[26px] bg-[#002f57] rounded-b-[16px]">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] text-white">Safety Pack</p>
              <p className="font-crimson text-[26px] leading-[30px] text-white">
                <span className="font-semibold">£250 </span>
                <span className="font-normal">+ VAT</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TENANT PAYMENTS ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1316px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[16px] text-[#002f57] capitalize">
            Tenant Payments
          </h3>
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Holding Deposit */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Holding Deposit</p>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Capped at 1 week's rent.</p>
            </div>
            
            {/* Tenancy Deposit */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenancy Deposit</p>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Capped at 5 weeks' rent (annual rent &lt; £50k).</p>
            </div>
            
            {/* Late Rent Interest */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Late Rent Interest</p>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">3% above Bank of England base rate.</p>
            </div>
            
            {/* Lost Keys */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Lost Keys</p>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Reasonable cost of replacement (receipt provided).</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LETTINGS DEPARTMENT ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1412px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[16px] text-[#002f57] capitalize">
            Lettings Department
          </h3>
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Tenant Introduction Only */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[150px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenant Introduction Only</p>
                <p className="font-crimson text-[20px] leading-[30px] text-[#333]">£1,000 per letting</p>
              </div>
              
              {/* Tenant Find Only */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[150px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenant Find Only</p>
                <div className="font-crimson text-[20px] leading-[30px] text-[#333]">
                  <p className="mb-0">6 weeks' rent</p>
                  <p className="text-[16px]">(e.g., £1,500/month ≈ £2,077)</p>
                </div>
              </div>
              
              {/* Letting & Rent Collection */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[150px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Letting & Rent Collection</p>
                <div className="font-crimson text-[20px] leading-[30px] text-[#333]">
                  <p className="mb-0">13% of rent received</p>
                  <p className="text-[16px]">(e.g., £195/month on £1,500 rent)</p>
                </div>
              </div>
              
              {/* Full Management */}
              <div className="flex-1 px-[26px] py-[20px] text-center min-h-[150px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Full Management</p>
                <div className="font-crimson text-[20px] leading-[30px] text-[#333]">
                  <p className="mb-0">15% of rent received</p>
                  <p className="text-[16px]">(e.g., £225/month on £1,500 rent)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL SERVICES ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1412px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Additional Services
          </h3>
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] overflow-hidden">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-[rgba(0,0,0,0.12)]">
              {/* Tenant Check-In */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center rounded-tl-[26px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenant Check-In</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£150 incl. VAT</p>
              </div>
              
              {/* Tenant Check-Out */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenant Check-Out</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£150 incl. VAT</p>
              </div>
              
              {/* Inventory Report */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Inventory Report</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£100 – £350 incl. VAT</p>
              </div>
              
              {/* Tenancy Agreement */}
              <div className="flex-1 px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center rounded-tr-[26px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenancy Agreement</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£250 incl. VAT</p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-[rgba(0,0,0,0.12)]">
              {/* Duplicate Account Statement */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Duplicate Account Statement</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£25 incl. VAT</p>
              </div>
              
              {/* Insurance Claim Assistance */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Insurance Claim Assistance</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£150/hr incl. VAT</p>
              </div>
              
              {/* Section 20 Major Works Consultation */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Section 20 Major Works Consultation</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£150/hr incl. VAT</p>
              </div>
              
              {/* Periodic Compliance Visit */}
              <div className="flex-1 px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Periodic Compliance Visit</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£250 incl. VAT</p>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col md:flex-row">
              {/* Tenancy Renewal */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center rounded-bl-[26px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenancy Renewal</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">6 weeks' rent or £150/hr incl. VAT</p>
              </div>
              
              {/* Empty Property Inspection */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Empty Property Inspection</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£100 – £350 incl. VAT</p>
              </div>
              
              {/* Empty spaces for 3rd and 4th columns */}
              <div className="hidden md:block flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)]"></div>
              <div className="hidden md:block flex-1 rounded-br-[26px]"></div>
            </div>
          </div>
          
          {/* Onboarding and Maintenance - Side by Side */}
          <div className="flex flex-col md:flex-row gap-[24px] md:gap-[45px] mt-[36px]">
            {/* Onboarding */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[24px] md:px-[36px] py-[26px] min-h-[240px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Onboarding</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£250</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">
                One-off fee for setting up property on our systems, compliance review, and key handover.
              </p>
            </div>
            
            {/* Maintenance */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[24px] md:px-[36px] py-[26px] min-h-[240px]">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[36px] text-[#002f57]">Maintenance</h4>
              <div className="flex flex-col gap-[10px]">
                {/* Routine Inspection */}
                <div className="flex justify-between items-center pb-[16px] border-b border-[rgba(0,0,0,0.12)]">
                  <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">Routine Inspection</p>
                  <p className="font-manrope font-semibold text-[20px] leading-[30px] text-[#333]">£100</p>
                </div>
                {/* Works Markup */}
                <div className="flex justify-between items-center">
                  <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">Works Markup</p>
                  <p className="font-manrope font-semibold text-[20px] leading-[30px] text-[#333]">10.00%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROPERTY MANAGEMENT DEPARTMENT ================= */}
      <section className="bg-white py-[30px] lg:py-[70px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1410px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Property Management Department
          </h3>
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Core Services */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Core Services</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Rent Collection, Maintenance, Inspections, Compliance</p>
            </div>
            
            {/* Compliance & Licensing Support */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Compliance & Licensing Support</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Included</p>
            </div>
            
            {/* HMO Licensing Support */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">HMO Licensing Support</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Included</p>
            </div>
            
            {/* Cost Approval Threshold */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Cost Approval Threshold</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£250 per item/service incl. VAT</p>
            </div>
            
            {/* Emergency Works */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Emergency Works</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Immediate action permitted</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOURCING & PURCHASING DEPARTMENT ================= */}
      <section className="bg-white pt-[30px] lg:pt-[70px] pb-0 px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1296px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sourcing & Purchasing Department
          </h3>
          
          {/* Top Row - Three Cards */}
          <div className="flex flex-col md:flex-row gap-[16px] mb-[16px]">
            {/* Tailored Property Sourcing */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tailored Property Sourcing</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£3,995 incl. VAT</p>
            </div>
            
            {/* Retainer Fee */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Retainer Fee</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£750 incl. VAT</p>
            </div>
            
            {/* Interim Inspections */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Interim Inspections</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£250 incl. VAT</p>
            </div>
          </div>
          
          {/* Bottom Row - Three Cards */}
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Buyer Representation */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Buyer Representation</p>
              <div className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                <p className="mb-0">1% – 2% of purchase price or</p>
                <p>£2,500 – £5,000 incl. VAT</p>
              </div>
            </div>
            
            {/* Investment Advisory */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Investment Advisory</p>
              <div className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                <p className="mb-0">£150 – £250/hr or project-based from</p>
                <p>£5,000 incl. VAT</p>
              </div>
            </div>
            
            {/* Percentage Fee Option */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Percentage Fee Option</p>
              <div className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                <p className="mb-0">1.5% of purchase price</p>
                <p>(minimum £3,950 incl. VAT)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="py-[75px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      {title && (
        <h3 className="font-crimson text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] text-center mb-8 sm:mb-12 text-[#002f57]">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

function Grid({ cols, children }: { cols: number; children: React.ReactNode }) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5",
  }[cols] || "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {children}
    </div>
  );
}

function FeeCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl px-6 py-8 text-center hover:shadow-md transition">
      <p className="font-manrope font-semibold mb-2 text-[#002f57] text-[16px] sm:text-[18px]">{title}</p>
      <p className="font-manrope text-[14px] text-[#5F6F7F]">{value}</p>
    </div>
  );
}

function InfoCard({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: string;
}) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl px-6 sm:px-8 py-8">
      <h4 className="font-manrope font-semibold mb-2 text-[#002f57] text-[16px] sm:text-[18px]">{title}</h4>
      <p className="font-manrope font-semibold mb-3 text-[#002f57] text-[18px] sm:text-[20px]">{price}</p>
      <p className="font-manrope text-[14px] text-[#5F6F7F] leading-[22px]">{desc}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl px-6 sm:px-8 py-8">
      <h4 className="font-manrope font-semibold mb-4 text-[#002f57] text-[16px] sm:text-[18px]">{title}</h4>
      <ul className="space-y-2 font-manrope text-[14px] text-[#5F6F7F]">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl p-4 sm:p-6 text-center text-[14px]">
      <p className="font-manrope font-semibold text-[#002f57]">{title}</p>
      {desc && <p className="font-manrope text-[#5F6F7F] mt-1">{desc}</p>}
    </div>
  );
}
