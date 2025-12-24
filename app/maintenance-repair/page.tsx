import Image from "next/image";

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
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[100px] lg:pt-[120px] pb-[260px] flex items-center justify-center text-center">
          {/* Background image with layered look */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/maintenance & repair/main_bg_img.png"
                alt="Property maintenance and repairs background"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          <div className="relative max-w-[880px] space-y-4 text-white mt-[120px]">
            <h1 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] xl:text-[66px] leading-tight lg:leading-[66px] tracking-tight lg:tracking-[-1.98px]">
              Property Care That Never Stops
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              We manage every maintenance request with speed, care, and compliance. From preventive
              inspections to urgent repairs, Pevona ensures your property stays safe, efficient, and well
              looked after — 365 days a year.
            </p>
          </div>
        </div>
      </section>

      {/* Proactive. Transparent. Reliable. */}
      <section className="max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row items-center gap-[80px]">
        <div className="flex-1 relative w-full max-w-[720px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/maintenance & repair/main_2nd_sec_img.png"
            alt="Property maintenance team at work"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-6">
          <div className="space-y-4">
            <h2 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57]">
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
      <section className="max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[160px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-3">
          <h2 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57]">
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
      <section className="max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[160px] flex flex-col gap-[80px]">
        <div className="space-y-9">
          <h2 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57]">
            How We Handle Maintenance Requests
          </h2>

          <div className="flex flex-col lg:flex-row items-center gap-[60px]">
            {/* Image stack */}
            <div className="flex-1 relative w-full max-w-[720px] h-[480px] rounded-[26px] overflow-hidden">
              <Image
                src="/images/maintenance & repair/4th_main_Requestssec_img.png"
                alt="Maintenance request management"
                fill
                className="object-cover"
                unoptimized
              />
            </div>

            {/* Steps */}
            <div className="flex-1 max-w-[660px] space-y-6">
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
        <div className="flex flex-col lg:flex-row items-center gap-[80px]">
          <div className="flex-1 max-w-[609px] space-y-4">
            <h2 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57]">
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

          <div className="flex-1 relative w-full max-w-[640px] h-[460px] rounded-[26px] overflow-hidden">
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
      <section className="max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[160px]">
        <div className="relative h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/maintenance & repair/6th_Properties_Safe.png"
            alt="Safe, well-maintained homes"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002f57] via-[#002f57]/85 to-transparent" />

          <div className="absolute right-[98px] left-[98px] lg:left-auto lg:w-[620px] top-1/2 -translate-y-1/2 text-white space-y-4">
            <h2 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px]">
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
      <section className="max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[160px] mb-[140px] flex flex-col lg:flex-row items-center gap-[80px]">
        <div className="flex-1 relative w-full max-w-[640px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/maintenance & repair/7th_Full_Transparency.png"
            alt="Transparent maintenance process"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[609px] space-y-4">
          <h2 className="font-crimson text-[22px] sm:text-[32px] md:text-[40px] lg:text-[56px] leading-tight lg:leading-[56px] tracking-tight lg:tracking-[-1.68px] text-[#002f57]">
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
