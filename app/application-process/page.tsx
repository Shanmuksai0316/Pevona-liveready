import Image from "next/image";
import Link from "next/link";

export default function ApplicationProcessPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Application process/Application_process_banner.png"
                alt="Rental application form"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              A Simple, Transparent Rental Application Process
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Brief explanation that applying for a property is straightforward, digital, and
              in line with UK housing standards.
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

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
            <Image
            src="/images/Application process/application-process-bg-mbl.png"
              alt="Rental application form"
              fill
              className="object-cover"
            sizes="100vw"
              unoptimized
            />
          </div>

        {/* Content positioned 50px from bottom, center-aligned */}
        <div className="absolute bottom-[50px] left-0 right-0 flex flex-col items-center px-5 sm:px-8 space-y-4 sm:space-y-6 text-white text-center">
            <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
              A Simple, Transparent Rental Application Process
            </h1>
          <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] max-w-[600px]">
              Brief explanation that applying for a property is straightforward, digital, and
              in line with UK housing standards.
            </p>
            <Link
              href="/properties-to-let"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors mt-2"
            >
              View Available Properties
            </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-5 lg:mx-auto mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
        <div className="w-full lg:flex-1 max-w-[589px] space-y-4 p-[5%] lg:pl-[5%] lg:pr-0 lg:pt-0 lg:pb-0">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            What to Expect
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Once you've found a property you love, our lettings team guides you through every
            stage – from application to moving in. Our process is designed to be quick, secure,
            and fully compliant with UK rental laws.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] aspect-[4/3] lg:aspect-auto lg:h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Application process/2nd_What_to_Expect.png"
            alt="Tenants reviewing documents"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Step-by-step Application Process */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px] flex flex-col lg:flex-row gap-[60px] items-start">
        <div className="w-full lg:flex-1 flex flex-col gap-6 max-w-[526px]">
          <p className="font-crimson text-[20px] leading-[30px] tracking-[-0.6px] text-[#002f57]">
            How It Works
          </p>
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Step-by-Step Application Process
          </h2>
          <div className="relative w-full max-w-[506px] h-[320px] rounded-[26px] overflow-hidden">
            <Image
              src="/images/Application process/3rd_Step-by-Step_Application_Process.png"
              alt="Social worker explaining documents"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="absolute left-[10px] top-0 bottom-0 w-px bg-[#002f57]/20 hidden md:block" />
          <div className="space-y-8 pl-0 ">
            {[
              {
                title: "Book a Viewing",
                body: "Schedule a viewing and explore available properties.",
              },
              {
                title: "Submit Your Application",
                body: "Fill out a simple online form with your details.",
              },
              {
                title: "Tenant Referencing",
                body: "We verify your identity, employment, and rental history.",
              },
              {
                title: "Holding Deposit",
                body: "Once approved, pay a holding deposit (as per UK law) to secure your property.",
              },
              {
                title: "Sign & Pay",
                body: "Sign your tenancy agreement digitally and complete your initial payment (rent + deposit).",
              },
              {
                title: "Move-In",
                body: "Collect your keys, review your inventory, and enjoy your new home.",
              },
            ].map((step) => (
              <div key={step.title} className="relative flex items-start gap-4">
                <div className="hidden md:flex items-center justify-center mt-1">
                  <span className="inline-block size-5 rounded-full bg-[#002f57]" />
                </div>
                <div className="md:ml-4 space-y-2">
                  <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                    {step.title}
                  </h3>
                  <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-90">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="max-w-[1320px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] flex flex-col gap-[26px]">
        <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
          Required Documents
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "Proof of identity (passport or driver's licence)",
            "Proof of income (payslips, employment contract, or bank statements)",
            "Previous address and landlord reference",
            "Right to Rent documentation (as per UK Home Office rules)",
          ].map((text) => (
            <div
              key={text}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[30px] py-[24px] flex items-center"
            >
              <p className="font-manrope font-semibold text-[20px] leading-[30px] text-[#002f57]">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance & Tenant Protection */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-5 lg:mx-auto mt-[60px] lg:mt-[120px] mb-[60px] lg:mb-[140px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
        <div className="basis-0 grow min-w-px space-y-4 max-w-[640px] p-[5%] lg:pl-[5%] lg:pr-0 lg:pt-0 lg:pb-0">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Compliance &amp; Tenant Protection
          </h2>
          <div className="space-y-3 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            <ul className="space-y-2">
              {[
                "Tenant Fees Act 2019",
                "Deposit Protection Schemes (DPS, MyDeposits, TDS)",
                "Right to Rent Checks",
                "Data Protection and Privacy Standards",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-[6px] rounded-full bg-[#002f57]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              Our process ensures full transparency, legal compliance, and protection for every
              tenant and landlord.
            </p>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[706px] aspect-[4/3] lg:aspect-auto lg:h-[470px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Application process/5th_Compliance__Tenant_Protection.png"
            alt="Agent showing property to tenants"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}




