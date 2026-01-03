import Image from "next/image";
import Link from "next/link";

export default function MaintenanceRepairPage() {
  const comprehensiveCards = [
    {
      title: "General Repairs",
      body: "Everyday fixes including plumbing, electrical, and joinery work.",
    },
    {
      title: "Safety & Compliance",
      body: "Gas, electrical, and fire-safety inspections (HHSRS standards).",
    },
    {
      title: "Preventive Maintenance",
      body: "Scheduled checks to reduce costly breakdowns.",
    },
    {
      title: "Refurbishment & Upgrades",
      body: "Cosmetic and structural improvements coordinated with specialists.",
    },
    {
      title: "Emergency Response",
      body: "24-hour rapid service for urgent maintenance issues.",
    },
  ] as const;

  const keyHighlights = [
    "24/7 emergency support",
    "Routine safety checks and inspections",
    "Certified tradespeople and service partners",
    "Transparent reporting and digital updates",
    "Preventive maintenance scheduling",
  ] as const;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero – Property Care That Never Stops */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/maintenance & repair/main_bg_img.png"
                alt="Property maintenance and repairs background"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10">

          {/* Content positioned bottom, center-aligned */}
          <div className="relative flex items-end justify-center pb-[80px] h-[760px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Property Care That Never Stops
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              We manage every maintenance request with speed, care, and compliance. From preventive
              inspections to urgent repairs, Pevona ensures your property stays safe, efficient, and well
              looked after — 365 days a year.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-8 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Consultation
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
          <Image
            src="/images/maintenance & repair/maintenance-repair-bg-mbl.png"
            alt="Property maintenance and repairs background"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content positioned 50px from bottom, center-aligned */}
        <div className="absolute bottom-[50px] left-0 right-0 flex flex-col items-center px-5 sm:px-8 py-8 space-y-4 sm:space-y-6 text-white text-center">
          <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
            Property Care That Never Stops
          </h1>
          <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] max-w-[600px]">
            We manage every maintenance request with speed, care, and compliance. From preventive
            inspections to urgent repairs, Pevona ensures your property stays safe, efficient, and well
            looked after — 365 days a year.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors mt-2"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Proactive. Transparent. Reliable. */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[80px]">
        <div className="w-full lg:flex-1 relative max-w-[720px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/maintenance & repair/main_2nd_sec_img.png"
            alt="Property maintenance team at work"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[589px] space-y-6">
          <div className="space-y-4">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
              Proactive. Transparent. Reliable.
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              Our maintenance process is built on regular inspections, verified contractors, and clear
              communication. Every issue — from a minor leak to full-scale refurbishment — is managed
              through our trusted network of qualified professionals.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-manrope font-semibold text-[18px] leading-[28px] text-[#333]">
              Key highlights:
            </p>
            <ul className="space-y-2">
              {keyHighlights.map((item) => (
                <li key={item} className="flex items-start gap-3 font-manrope text-[18px] leading-[28px] text-[#333]">
                  <span className="mt-[10px] inline-block h-2 w-2 rounded-full bg-[#FCC9D0]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Comprehensive Property Care */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-[37px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[160px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-3 w-full">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Comprehensive Property Care
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            We handle all aspects of property maintenance to protect both tenants and landlords.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {comprehensiveCards.map((card) => (
            <article
              key={card.title}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-5 py-9 space-y-3 h-full"
            >
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                {card.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* How We Handle Maintenance Requests */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-[37px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[160px] flex flex-col gap-[30px] lg:gap-[80px]">
        <div className="space-y-9 w-full">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            How We Handle Maintenance Requests
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-[60px] w-full">
            {/* Image stack */}
            <div className="w-full lg:flex-1 relative max-w-[720px] h-[480px] rounded-[26px] overflow-hidden">
              <Image
                src="/images/maintenance & repair/4th_main_Requestssec_img.png"
                alt="Maintenance request management"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Steps */}
            <div className="w-full lg:flex-1 max-w-[660px] space-y-6">
              <div className="space-y-6">
                {[
                  {
                    step: "STEP 1",
                    title: "Issue Reported",
                    body: "Tenants can log maintenance requests online or by phone, with photo uploads for accuracy.",
                  },
                  {
                    step: "STEP 2",
                    title: "Assessment & Allocation",
                    body: "Our property manager reviews the issue and assigns it to an approved contractor.",
                  },
                  {
                    step: "STEP 3",
                    title: "Repair & Confirmation",
                    body: "Works are completed by certified professionals, with safety and quality checks.",
                  },
                  {
                    step: "STEP 4",
                    title: "Feedback & Recordkeeping",
                    body: "Tenants confirm completion; landlords receive a digital summary for full transparency.",
                  },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-full border border-[#FCC9D0] flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-[#FCC9D0]" />
                    </div>
                    <div className="space-y-2">
                      <span className="inline-flex rounded-full bg-[#FCE6E9] px-3 py-1 text-[12px] font-manrope font-medium text-[#333]">
                        {item.step}
                      </span>
                      <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                        {item.title}
                      </h3>
                      <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                Every job is tracked and archived through our internal system to maintain an audit-ready
                record.
              </p>
            </div>
          </div>
        </div>

        {/* Maintenance That Meets UK Standards */}
        <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[80px]">
          <div className="w-full lg:flex-1 max-w-[609px] space-y-4">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
              Maintenance That Meets UK Standards
            </h2>
            <div className="space-y-3 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              <p>
                All repairs and maintenance adhere to the Landlord and Tenant Act 1985, the Homes (Fitness
                for Human Habitation) Act 2018, and Health &amp; Safety Executive (HSE) standards.
              </p>
              <p>
                We only work with insured, accredited contractors registered under recognised UK bodies (Gas
                Safe, NICEIC, CHAS).
              </p>
              <p className="font-semibold opacity-80">
                Compliance and safety are built into every service we provide.
              </p>
            </div>
          </div>

          <div className="w-full lg:flex-1 relative max-w-[640px] h-[460px] rounded-[26px] overflow-hidden">
            <Image
              src="/images/maintenance & repair/5th_Maintenance.png"
              alt="Maintenance meeting UK standards"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Working Together to Keep Properties Safe */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-[37px] lg:mx-auto lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[160px]">
        <div className="relative w-full h-[600px] lg:h-[450px] rounded-[26px] overflow-hidden">
          {/* Mobile Image */}
          <div className="relative w-full h-full lg:hidden">
            <Image
              src="/images/maintenance%20%26%20repair/Maintainence-working%20together%20to%20keep%20properties%20safe-sec-bg-mbl.webp"
              alt="Safe, well-maintained homes mobile"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>
          {/* Desktop Image */}
          <div className="relative w-full h-full hidden lg:block">
            <Image
              src="/images/maintenance%20%26%20repair/Maintainence-working%20together%20to%20keep%20properties%20safe-sec-bg-dsk.webp"
              alt="Safe, well-maintained homes desktop"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>

          <div className="absolute right-0 left-0 lg:left-auto lg:right-[80px] lg:w-[620px] bottom-[20px] lg:top-1/2 lg:-translate-y-1/2 lg:bottom-auto text-white space-y-4 px-[15px] lg:px-0">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
              Working Together to Keep Properties Safe
            </h2>
            <p className="font-manrope text-[18px] leading-[28px]">
              Tenants are responsible for reporting maintenance issues promptly and allowing reasonable
              access for inspections or repairs. We also encourage proactive care — keeping homes
              ventilated, clean, and damage-free between visits.
            </p>
            <p className="font-manrope font-semibold text-[18px] leading-[28px]">
              Together, we maintain homes that are safe, efficient, and comfortable for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Full Transparency, Every Step of the Way */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[160px] mb-[60px] lg:mb-[140px] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[80px]">
        <div className="w-full lg:flex-1 relative max-w-[640px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/maintenance & repair/7th_Full_Transparency.png"
            alt="Transparent maintenance process"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[609px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Full Transparency, Every Step of the Way
          </h2>
          <div className="space-y-3 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            <p>
              All maintenance updates are shared through our secure digital portal, giving landlords and
              tenants instant visibility of work orders, costs, and completion notes.
            </p>
            <p className="font-semibold opacity-80">
              No delays. No uncertainty. Just clear, professional updates from start to finish.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
