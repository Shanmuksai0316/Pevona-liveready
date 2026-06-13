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
              alt="Charges &amp; Fees"
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
              Charges &amp; Fees
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Clear, transparent and compliant — our fees explained for tenants and landlords.
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
              alt="Charges &amp; Fees"
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
              Charges &amp; Fees
            </h1>
            <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              Clear, transparent and compliant — our fees explained for tenants and landlords.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LETTINGS DEPARTMENT ================= */}
      <section className="bg-white py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px]">
        <div className="max-w-[1410px] 1920:max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-[40px] sm:mb-[60px]">
            <h2 className="font-crimson text-[36px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[-1.08px] md:tracking-[-1.68px] mb-4 text-[#002f57]">
              Lettings Department
            </h2>
            <p className="max-w-[840px] mx-auto font-manrope text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#333]">
              Our fees are transparent, fair, and aligned with current legislation and regulatory guidance.
              All fees reflect the level of service provided and the work undertaken.
            </p>
          </div>

          {/* Cards for Lettings */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-[40px]">
            {/* Service Fees */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-4 hover:shadow-md transition duration-300">
              <h3 className="font-crimson font-semibold text-[22px] md:text-[26px] leading-tight text-[#002f57]">
                Service Fees
              </h3>
              <div className="space-y-4 font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                <p>
                  <strong className="text-[#002f57] font-semibold block mb-1">Tenant Find Only Service:</strong> A one-off fee payable upon successful tenant introduction. Full details are provided at the point of instruction and confirmed in writing.
                </p>
                <p>
                  <strong className="text-[#002f57] font-semibold block mb-1">Rent Collection and Full Management:</strong> Ongoing management fees apply based on the agreed service level and are confirmed at the point of instruction.
                </p>
              </div>
            </div>

            {/* Cancellation & Termination Fees */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-4 hover:shadow-md transition duration-300">
              <h3 className="font-crimson font-semibold text-[22px] md:text-[26px] leading-tight text-[#002f57]">
                Cancellation &amp; Termination Fees
              </h3>
              <div className="space-y-3 font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                <p>
                  Where a &ldquo;Service Agreement&rdquo; is terminated prior to tenancy creation, reasonable and evidenced costs incurred may apply.
                </p>
                <p>
                  Where termination occurs during an active tenancy, a Termination Fee may apply. The Termination Fee reflects the services provided up to the date of termination and may include a proportionate share of fees and reasonable and evidenced costs incurred.
                </p>
                <p>
                  All charges are fair and proportionate, will be transparently itemised upon request, and will not exceed agreed caps unless expressly agreed in writing.
                </p>
              </div>
            </div>

            {/* Tenant Fees Act Compliance */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-4 hover:shadow-md transition duration-300">
              <h3 className="font-crimson font-semibold text-[22px] md:text-[26px] leading-tight text-[#002f57]">
                Tenant Fees Act Compliance
              </h3>
              <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                In accordance with the Tenant Fees Act 2019, only permitted payments are charged in connection with residential tenancies under the current statutory framework, including Assured Periodic Tenancies.
              </p>
            </div>
          </div>

          {/* Lettings Fees Grid (Reverted Section) */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden mb-[40px] hover:shadow-md transition duration-300">
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
                  <p className="mb-0">6 weeks&apos; rent</p>
                  <p className="text-[16px]">(e.g., £1,500/month ≈ £2,077)</p>
                </div>
              </div>
              
              {/* Letting &amp; Rent Collection */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[150px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Letting &amp; Rent Collection</p>
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

      {/* ================= SALES DEPARTMENT ================= */}
      <section className="bg-[#FAFAFA] py-[50px] lg:py-[90px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1410px] 1920:max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="text-center mb-[40px] sm:mb-[60px]">
            <h2 className="font-crimson text-[36px] md:text-[56px] leading-[40px] md:leading-[56px] tracking-[-1.08px] md:tracking-[-1.68px] mb-4 text-[#002f57]">
              Sales Department
            </h2>
            <p className="max-w-[840px] mx-auto font-manrope text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] text-[#333]">
              Our sales fees are transparent, fair, and aligned with industry standards. Fees reflect the work undertaken and are confirmed in writing at the point of instruction.
            </p>
          </div>

          {/* Cards for Sales Department */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Commission Structure */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-4 hover:shadow-md transition duration-300">
              <h3 className="font-crimson font-semibold text-[22px] md:text-[26px] leading-tight text-[#002f57]">
                Commission Structure
              </h3>
              <ul className="space-y-3 font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                <li className="flex gap-[10px] items-start">
                  <span className="text-[#002f57] font-bold">•</span>
                  <span>Fees charged as percentage of final agreed sale price</span>
                </li>
                <li className="flex gap-[10px] items-start">
                  <span className="text-[#002f57] font-bold">•</span>
                  <span>Payable on successful completion only</span>
                </li>
              </ul>
            </div>

            {/* Withdrawal & Cancellation */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-4 hover:shadow-md transition duration-300">
              <h3 className="font-crimson font-semibold text-[22px] md:text-[26px] leading-tight text-[#002f57]">
                Withdrawal &amp; Cancellation
              </h3>
              <ul className="space-y-3 font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                <li className="flex gap-[10px] items-start">
                  <span className="text-[#002f57] font-bold">•</span>
                  <span>If withdrawn pre-completion → reasonable and evidenced costs incurred may apply (marketing, advertising, admin)</span>
                </li>
                <li className="flex gap-[10px] items-start">
                  <span className="text-[#002f57] font-bold">•</span>
                  <span>All charges fair, proportionate, itemised on request</span>
                </li>
              </ul>
            </div>

            {/* Agency Terms */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-4 hover:shadow-md transition duration-300">
              <h3 className="font-crimson font-semibold text-[22px] md:text-[26px] leading-tight text-[#002f57]">
                Agency Terms
              </h3>
              <ul className="space-y-3 font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                <li className="flex gap-[10px] items-start">
                  <span className="text-[#002f57] font-bold">•</span>
                  <span>Define arrangement as sole agency or multi-agency</span>
                </li>
                <li className="flex gap-[10px] items-start">
                  <span className="text-[#002f57] font-bold">•</span>
                  <span>Confirmed in writing at point of instruction</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Sales Main Fee Structure (Reverted Section) */}
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden mb-[26px] hover:shadow-md transition duration-300">
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

          {/* Three Service Boxes (Reverted Section) */}
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Valuation Services */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
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
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
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
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
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

      {/* ================= SALES AGENCY FEES (Reverted Section) ================= */}
      <section className="bg-white py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1410px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sales Agency Fees
          </h3>
          <div className="flex flex-col md:flex-row gap-[24px] md:gap-[45px]">
            {/* Vendor Card */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[24px] md:px-[36px] py-[26px] min-h-[220px] hover:shadow-md transition duration-300">
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
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[24px] md:px-[36px] py-[26px] min-h-[220px] hover:shadow-md transition duration-300">
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

      {/* ================= SOURCING & INVESTMENT (Reverted Section) ================= */}
      <section className="bg-[#FAFAFA] py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1410px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sourcing &amp; Investment
          </h3>
          
          {/* Top Row - Two Cards */}
          <div className="flex flex-col md:flex-row gap-[16px] mb-[16px]">
            {/* Sourcing Fee */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Sourcing Fee</h4>
              <p className="font-manrope font-normal text-[18px] leading-[28px] mb-[8px] text-[#333]">Payable upon successful deal packaging.</p>
              <div className="flex gap-[3px] items-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£1,000</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
            </div>
            
            {/* Purchase Representation */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Purchase Representation</h4>
              <p className="font-manrope font-normal text-[18px] leading-[28px] mb-[8px] text-[#333]">Full negotiation &amp; conveyance support.</p>
              <div className="flex gap-[3px] items-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">0.75%</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT (of Purchase Price)</p>
              </div>
            </div>
          </div>
          
          {/* Bottom Row - Three Cards */}
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Portfolio Setup */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Portfolio Setup</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£500</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Initial structure &amp; strategy planning.</p>
            </div>
            
            {/* Suitability Screening */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Suitability Screening</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">£150</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Risk profile &amp; AML assessment.</p>
            </div>
            
            {/* Annual Management */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[26px] hover:shadow-md transition duration-300">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] mb-[10px] text-[#002f57]">Annual Management</h4>
              <div className="flex gap-[3px] items-center mb-[8px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">0.50%</p>
                <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">+ VAT</p>
              </div>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333]">Yearly review &amp; yield optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE (Reverted Section) ================= */}
      <section className="bg-white py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1316px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Compliance
          </h3>
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden hover:shadow-md transition duration-300">
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
      <section className="bg-white py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1316px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[30px] text-[#002f57] capitalize">
            Tenant Payments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Holding Deposit */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Holding Deposit</p>
              <p className="font-manrope font-normal text-[16px] leading-[26px] text-[#333]">Capped at 1 week&apos;s rent.</p>
            </div>
            
            {/* Tenancy Deposit */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenancy Deposit</p>
              <p className="font-manrope font-normal text-[16px] leading-[26px] text-[#333]">Capped at 5 weeks&apos; rent (annual rent &lt; £50k).</p>
            </div>
            
            {/* Late Rent Interest */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Late Rent Interest</p>
              <p className="font-manrope font-normal text-[16px] leading-[26px] text-[#333]">3% above Bank of England base rate.</p>
            </div>
            
            {/* Lost Keys */}
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[26px] py-[20px] text-center min-h-[94px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Lost Keys</p>
              <p className="font-manrope font-normal text-[16px] leading-[26px] text-[#333]">Reasonable cost of replacement (receipt provided).</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ADDITIONAL SERVICES ================= */}
      <section className="bg-[#FAFAFA] py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1412px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Additional Services
          </h3>
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] overflow-hidden hover:shadow-md transition duration-300">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row border-b border-[rgba(0,0,0,0.12)]">
              {/* Tenant Check-In */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center rounded-tl-[26px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenant Check-In</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Tenant Check-Out */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenant Check-Out</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Inventory Report */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Inventory Report</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Tenancy Agreement */}
              <div className="flex-1 px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center rounded-tr-[26px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenancy Agreement</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
            </div>
            
            {/* Row 2 */}
            <div className="flex flex-col md:flex-row border-b border-[rgba(0,0,0,0.12)]">
              {/* Duplicate Account Statement */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Duplicate Account Statement</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Insurance Claim Assistance */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Insurance Claim Assistance</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Section 20 Consultation */}
              <div className="flex-1 border-r-0 md:border-r border-b md:border-b-0 border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Section 20 Consultation</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Periodic Compliance Visit */}
              <div className="flex-1 px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Periodic Compliance Visit</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
            </div>
            
            {/* Row 3 */}
            <div className="flex flex-col md:flex-row">
              {/* Tenancy Renewal */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center rounded-bl-[26px]">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tenancy Renewal</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Empty Property Inspection */}
              <div className="flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)] px-[26px] py-[20px] text-center min-h-[135px] flex flex-col justify-center">
                <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Empty Property Inspection</p>
                <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#5F6F7F]">Confirmed at point of instruction</p>
              </div>
              
              {/* Empty spaces for 3rd and 4th columns */}
              <div className="hidden md:block flex-1 border-r-0 md:border-r border-[rgba(0,0,0,0.12)]"></div>
              <div className="hidden md:block flex-1 rounded-br-[26px]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROPERTY MANAGEMENT DEPARTMENT (Reverted Section) ================= */}
      <section className="bg-white py-[40px] lg:py-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1410px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Property Management Department
          </h3>
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Core Services */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Core Services</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Rent Collection, Maintenance, Inspections, Compliance</p>
            </div>
            
            {/* Compliance &amp; Licensing Support */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Compliance &amp; Licensing Support</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Included</p>
            </div>
            
            {/* HMO Licensing Support */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">HMO Licensing Support</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Included</p>
            </div>
            
            {/* Cost Approval Threshold */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Cost Approval Threshold</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£250 per item/service incl. VAT</p>
            </div>
            
            {/* Emergency Works */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[20px] py-[20px] text-center min-h-[140px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Emergency Works</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">Immediate action permitted</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SOURCING & PURCHASING DEPARTMENT (Reverted Section) ================= */}
      <section className="bg-[#FAFAFA] pt-[40px] lg:pt-[80px] pb-[40px] lg:pb-[80px] px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] border-t border-[rgba(0,0,0,0.06)]">
        <div className="max-w-[1296px] 1920:max-w-[1600px] mx-auto">
          <h3 className="font-crimson font-semibold text-[clamp(1.75rem,1.5625rem+0.9375vw,2.5rem)] leading-[40px] text-center mb-[26px] text-[#002f57] capitalize">
            Sourcing &amp; Purchasing Department
          </h3>
          
          {/* Top Row - Three Cards */}
          <div className="flex flex-col md:flex-row gap-[16px] mb-[16px]">
            {/* Tailored Property Sourcing */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Tailored Property Sourcing</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£3,995 incl. VAT</p>
            </div>
            
            {/* Retainer Fee */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Retainer Fee</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£750 incl. VAT</p>
            </div>
            
            {/* Interim Inspections */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Interim Inspections</p>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">£250 incl. VAT</p>
            </div>
          </div>
          
          {/* Bottom Row - Three Cards */}
          <div className="flex flex-col md:flex-row gap-[16px]">
            {/* Buyer Representation */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Buyer Representation</p>
              <div className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                <p className="mb-0">1% – 2% of purchase price or</p>
                <p>£2,500 – £5,000 incl. VAT</p>
              </div>
            </div>
            
            {/* Investment Advisory */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center hover:shadow-md transition duration-300">
              <p className="font-crimson font-semibold text-[26px] leading-[30px] mb-[8px] text-[#002f57]">Investment Advisory</p>
              <div className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                <p className="mb-0">£150 – £250/hr or project-based from</p>
                <p>£5,000 incl. VAT</p>
              </div>
            </div>
            
            {/* Percentage Fee Option */}
            <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[36px] py-[40px] text-center min-h-[150px] flex flex-col justify-center hover:shadow-md transition duration-300">
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
