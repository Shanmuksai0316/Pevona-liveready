import Image from "next/image";
import Link from "next/link";

export default function OurManagementServicesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Our Management Services/mang_bg_img.png"
                alt="Professional property management"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mx-auto mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white text-center">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Professional Property Management, Made Simple
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Comprehensive management services for landlords across the UK – from tenant
              placement and rent collection to compliance, maintenance, and reporting.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Free Valuation
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
          <Image
            src="/images/Our Management Services/our-management-services-bg-mbl.png"
            alt="Professional property management"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        {/* Content positioned 50px from bottom, center-aligned */}
        <div className="absolute bottom-[50px] left-0 right-0 flex flex-col items-center px-5 sm:px-8 space-y-4 sm:space-y-6 text-white text-center">
          <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
            Professional Property Management, Made Simple
          </h1>
          <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] max-w-[600px]">
            Comprehensive management services for landlords across the UK – from tenant
            placement and rent collection to compliance, maintenance, and reporting.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors mt-2"
          >
            Book a Free Valuation
          </Link>
        </div>
      </section>

      {/* Managing Every Detail */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[26px] lg:gap-[100px] items-center">
        <div className="flex-1 relative w-full max-w-[720px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Our Management Services/2nd_managing_every_details_section_image.png"
            alt="Digital housing market graph"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 720px"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Managing Every Detail, So You Don't Have To
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Our management services are designed to make letting effortless. We handle
            every aspect – from tenant sourcing and compliance to maintenance and
            financial reporting – so you can focus on your investments with complete
            confidence.
          </p>
        </div>
      </section>

      {/* What's Included in Our Management Service */}
      <section className="max-w-[1380px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[140px] flex flex-col gap-[36px] items-center">
        <div className="text-center max-w-[840px] space-y-3">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            What's Included in Our Management Service
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            A complete, compliant, and transparent management solution for UK landlords.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 w-full">
          {/* Card 1 */}
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0">
              <Image
                src="/images/Our Management Services/3rd_Whats_Included_img_-_1.png"
                alt="Lettings marketing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-6 py-5 space-y-2">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Tenant Sourcing &amp; Marketing
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                High-quality listings, professional photography, and digital marketing to
                attract reliable tenants quickly.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0">
              <Image
                src="/images/Our Management Services/3rd_Whats_Included_img_-_2.png"
                alt="Architect reviewing floor plans"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-6 py-5 space-y-2">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Tenant Selection &amp; Referencing
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Comprehensive background, credit, and right-to-rent checks to protect your
                property.
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0">
              <Image
                src="/images/Our Management Services/3nd_Whats_Included_img_-_3.png"
                alt="Maintenance worker repairing"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-6 py-5 space-y-2">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Maintenance &amp; Repairs
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Fast, transparent maintenance coordination with vetted contractors and
                digital tracking.
              </p>
            </div>
          </article>

          {/* Card 4 */}
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0">
              <Image
                src="/images/Our Management Services/3rd_Whats_Included_img_-_4.png"
                alt="Interior inspection"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-6 py-5 space-y-2">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Routine Inspections &amp; Reporting
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Scheduled property checks with condition reports, ensuring compliance and
                upkeep.
              </p>
            </div>
          </article>

          {/* Card 5 */}
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0">
              <Image
                src="/images/Our Management Services/3rd_Whats_Included_img_-_5.png"
                alt="Rent and finance management"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-6 py-5 space-y-2">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Tenancy &amp; Rent Management
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Rent collection, deposit handling, renewals, and prompt communication with
                tenants.
              </p>
            </div>
          </article>

          {/* Card 6 */}
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col">
            <div className="relative w-full h-[220px] min-h-[220px] min-w-0">
              <Image
                src="/images/Our Management Services/3rd_Whats_Included_img_-_6.png"
                alt="Team reviewing portfolio performance"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                unoptimized
              />
            </div>
            <div className="px-6 py-5 space-y-2">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Financial &amp; Compliance Reporting
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Clear monthly statements and access to all key documents through the client
                portal.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Our Process */}
      <section className="max-w-[1360px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[26px]">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-left">
          Our Process – Simple, Transparent, Effective
        </h2>

        <div className="flex flex-col lg:flex-row gap-[60px] items-start">
          <div className="flex-1 relative w-full max-w-[640px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
            <Image
              src="/images/Our Management Services/4th_mang_Our_Process_sec_image.png"
              alt="Property management discussion"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 640px"
              unoptimized
            />
          </div>

          <div className="flex-1 flex gap-6">
            <div className="hidden md:block w-[20px]">
              <div className="h-full w-px bg-[#002f57]/20 mx-auto" />
            </div>
            <div className="space-y-8">
              {[
                {
                  step: "STEP 1",
                  title: "Onboarding",
                  body: "Initial property review, compliance checks, and documentation setup.",
                },
                {
                  step: "STEP 2",
                  title: "Marketing & Viewings",
                  body: "Listing on major portals and coordinated property viewings.",
                },
                {
                  step: "STEP 3",
                  title: "Tenant Placement",
                  body: "Reference verification, contract signing, and deposit registration.",
                },
                {
                  step: "STEP 4",
                  title: "Management & Maintenance",
                  body: "Rent collection, inspections, repairs, and proactive support.",
                },
                {
                  step: "STEP 5",
                  title: "Reporting & Renewal",
                  body: "Regular statements, updates, and tenancy renewals or re-letting.",
                },
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <span className="inline-flex items-center px-[10px] py-[4px] rounded-full bg-[#FCE6E9] font-manrope text-[12px] leading-[16px] font-medium text-[#333]">
                    {item.step}
                  </span>
                  <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fully Compliant, Always Protected */}
      <section className="mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] bg-[#002f57]">
        <div className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-[74px] flex flex-col lg:flex-row gap-[48px] items-center">
          <div className="flex-1 max-w-[590px] space-y-6 text-white">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
              Fully Compliant, Always Protected
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-white/80">
              Every property we manage meets current UK letting standards. Our compliance
              process protects landlords and tenants by handling all required
              certifications and audits.
            </p>

            <div className="space-y-4">
              <div className="flex flex-wrap gap-x-10 gap-y-4">
                {[
                  "Tenant Fees Act 2019",
                  "Energy Performance Certificates (EPC)",
                  "Deposit Protection Schemes (DPS / MyDeposits / TDS)",
                  "Right to Rent Checks",
                  "Gas & Electrical Safety Standards",
                  "GDPR & Data Privacy",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 min-w-[220px]">
                    <div className="relative size-[26px] flex-shrink-0">
                      <Image
                        src="/images/icons/check-mark_5290058 1.png"
                        alt="Checkmark"
                        fill
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                    <p className="font-manrope text-[18px] leading-[28px] text-white">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex-1 relative w-full max-w-[720px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
            <Image
              src="/images/Our Management Services/5th_sec_mang_Fully_Compliant_sec_img.png"
              alt="Homeowner with keys and protection concept"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 720px"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Why Choose Our Management Services */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] mb-[60px] lg:mb-[140px] flex flex-col gap-[46px] items-center">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-center">
          Why Choose Our Management Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-8 py-10 space-y-6">
            <div className="relative size-[36px] flex-shrink-0">
              <Image
                src="/images/icons/time saving efficiency.png"
                alt="Time-Saving Efficiency"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Time-Saving Efficiency
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                We handle every task with speed and precision, freeing you from day-to-day
                management.
              </p>
            </div>
          </article>

          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] py-[19px] px-2 space-y-6">
            <div className="space-y-3">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Compliance Confidence
              </h3>
              <div className="relative w-full h-[185px] min-h-[185px] min-w-0 rounded-[12px] overflow-hidden">
                <Image
                  src="/images/Compliance Confidence.png"
                  alt="Compliance Confidence"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Your property always meets UK legal standards with proactive checks and
                renewals.
              </p>
            </div>
          </article>

          <article className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-8 py-10 space-y-6">
            <div className="relative size-[36px] flex-shrink-0">
              <Image
                src="/images/icons/transparent operations.png"
                alt="Transparent Operations"
                fill
                className="object-contain"
                unoptimized
              />
            </div>
            <div className="space-y-3">
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                Transparent Operations
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                Regular reports and clear communication give you full visibility of your
                portfolio.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}




