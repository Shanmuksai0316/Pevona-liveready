import Image from "next/image";
import Link from "next/link";

export default function TenantServicesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden rounded-b-[26px]">
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
              <Image
                src="/images/tenant-services-bg-mbl.png"
                alt="Tenant services background mobile"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0 -mx-[60px] lg:-mx-[80px] 1300:-mx-[80px] 1400:-mx-[80px] 1500:-mx-[100px] 1600:-mx-[130px]">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Tenant services/Tenant_BANNER_IMG.png"
                alt="Supportive tenancy consultation"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>

          {/* Mobile Content - Center Aligned, Bottom 50px */}
          <div className="lg:hidden relative flex items-end justify-center h-[850px] pb-[50px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Support You Can Count On
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Renting a home should be simple and stress-free. From your first viewing to
              move-in day, our lettings team ensures every step is transparent, compliant,
              and handled with care.
            </p>
            <Link
              href="/properties-to-let"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              View Available Properties
            </Link>
          </div>
        </div>

          {/* Desktop Content - Original Layout */}
          <div className="hidden lg:block relative max-w-[780px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Support You Can Count On
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Renting a home should be simple and stress-free. From your first viewing to
              move-in day, our lettings team ensures every step is transparent, compliant,
              and handled with care.
            </p>
            <Link
              href="/properties-to-let"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              View Available Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Renting with Confidence */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-5 lg:mx-auto mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
        <div className="w-full lg:flex-1 max-w-[589px] space-y-4 p-[5%]">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Renting with Confidence
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Renting through us means clear communication, fair agreements, and a smooth
            process from start to finish. You'll have guidance at every stage – with a
            focus on clarity, comfort, and compliance with UK housing standards.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Tenant services/2nd_Renting_with_Confidence.png"
            alt="Renting with confidence"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 675px"
            unoptimized
          />
        </div>
      </section>

      {/* Your Renting Journey */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-5 lg:mx-auto mt-[80px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
        <div className="flex-1 relative w-full max-w-[696px] h-[460px] min-h-[300px] sm:min-h-[400px] lg:min-h-[460px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Tenant services/3rd_Your_Renting_Journey.png"
            alt="Tenant viewing property"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 696px"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[600px] space-y-4 p-[5%]">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Your Renting Journey
          </h2>
          <ul className="space-y-2 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 list-disc list-inside">
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
      </section>

      {/* Your Rights and Responsibilities */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] flex flex-col gap-[26px]">
        <div className="max-w-[974px] space-y-4 mx-auto text-left">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
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
      <section className="w-[calc(100%-74px)] mx-[37px] mt-[60px] lg:mt-[140px] mb-[60px] lg:mb-[120px]">
        {/* Mobile Layout */}
        <div className="lg:hidden relative w-full min-h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Maintenance and Communication-bg-mbl.png"
            alt="Maintenance and communication mobile"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 flex items-end justify-center pb-[50px]">
            <div className="max-w-[520px] w-full px-5 text-center space-y-4 text-white">
              <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
                Maintenance and Communication
              </h2>
              <p className="font-manrope text-[18px] leading-[28px]">
                Stay connected easily through digital tools. Maintenance issues can be reported
                at any time, with progress updates shared directly from our support team. Most
                requests are resolved quickly to ensure a smooth living experience.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex relative w-full h-[450px] min-h-[450px] min-w-0 rounded-[26px] overflow-hidden bg-[#002f57] items-center justify-start px-[60px]">
          <Image
            src="/images/Tenant services/5th_Maintenance_and_Communication.png"
            alt="Maintenance and communication"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />

          <div className="relative z-10 max-w-[520px] space-y-4 text-white">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
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

