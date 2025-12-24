import Image from "next/image";
import Link from "next/link";

export default function TenantServicesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[260px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Tenant services/Tenant_BANNER_IMG.png"
                alt="Supportive tenancy consultation"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          {/* Hero copy */}
          <div className="relative max-w-[552px] mt-[120px] space-y-6 text-white">
            <h1 className="font-crimson text-[40px] md:text-[56px] lg:text-[66px] leading-[66px] tracking-[-1.98px]">
              Support You Can Count On
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Renting a home should be simple and stress-free. From your first viewing to
              move-in day, our lettings team ensures every step is transparent, compliant,
              and handled with care.
            </p>
            <Link
              href="/properties-to-let"
              className="inline-flex items-center justify-center h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              View Available Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Renting with Confidence */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[80px] 1300:pl-[80px] 1400:pl-[80px] 1500:pl-[100px] 1600:pl-[130px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Renting with Confidence
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Renting through us means clear communication, fair agreements, and a smooth
            process from start to finish. You'll have guidance at every stage – with a
            focus on clarity, comfort, and compliance with UK housing standards.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Tenant services/2nd_Renting_with_Confidence.png"
            alt="Renting with confidence"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Your Renting Journey */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pr-[80px] 1300:pr-[80px] 1400:pr-[80px] 1500:pr-[100px] 1600:pr-[130px]">
        <div className="flex-1 relative w-full max-w-[696px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Tenant services/3rd_Your_Renting_Journey.png"
            alt="Tenant viewing property"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[600px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Your Renting Journey
          </h2>
          <div className="space-y-[10px] font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            <p>
              Every step of your move is supported – from finding the right home to settling
              in with confidence.
            </p>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Find Your Property – </span>
                Browse verified listings and book a viewing online.
              </li>
              <li>
                <span className="font-semibold">Apply Securely – </span>
                Submit your documents through our trusted system.
              </li>
              <li>
                <span className="font-semibold">Referencing &amp; Approval – </span>
                Checks are completed promptly and fairly.
              </li>
              <li>
                <span className="font-semibold">Tenancy Agreement – </span>
                Review and sign your contract digitally.
              </li>
              <li>
                <span className="font-semibold">Move In – </span>
                Collect your keys and settle in with peace of mind.
              </li>
            </ul>
          </div>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Every stage is managed by professionals who value your time and peace of mind.
          </p>
        </div>
      </section>

      {/* Your Rights and Responsibilities */}
      <section className="max-w-[1320px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[120px] flex flex-col gap-[26px]">
        <div className="max-w-[974px] space-y-4 mx-auto text-left">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Your Rights and Responsibilities
          </h2>
          <div className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-[10px]">
            <p>
              We follow the Tenant Fees Act 2019 and Consumer Rights Act 2015, ensuring
              fairness, clarity, and legal transparency throughout your tenancy.
            </p>
            <p>You'll receive all essential documents before moving in, including:</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {[
            "Your tenancy agreement and inventory",
            "Energy Performance Certificate (EPC)",
            "Gas Safety Certificate (where applicable)",
            '"How to Rent" government checklist',
          ].map((text) => (
            <div
              key={text}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[30px] py-[24px] flex items-center"
            >
              <p className="font-crimson text-[22px] md:text-[26px] leading-[30px] text-[#002f57]">
                {text}
              </p>
            </div>
          ))}
        </div>

        <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 mt-2 max-w-[900px]">
          Tenants are encouraged to maintain their property responsibly and report issues
          promptly – helping keep every home safe and comfortable.
        </p>
      </section>

      {/* Maintenance and Communication */}
      <section className="w-full mt-[140px] mb-[120px]">
        <div className="relative h-[450px] rounded-[26px] overflow-hidden bg-[#002f57] flex items-center px-[40px] lg:px-[60px]">
          <Image
            src="/images/Tenant services/5th_Maintenance_and_Communication.png"
            alt="Maintenance and communication"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#002f57] to-transparent" />

          <div className="relative max-w-[520px] space-y-4 text-white">
            <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px]">
              Maintenance and Communication
            </h2>
            <p className="font-manrope text-[18px] leading-[28px]">
              Stay connected easily through digital tools. Maintenance issues can be reported
              at any time, with progress updates shared directly from our support team. Most
              requests are resolved quickly to ensure a smooth living experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

