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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] overflow-hidden">
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
              
              {/* Section 20 Major Works Consultation */}
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
    </main>
  );
}
