import Image from "next/image";
import Link from "next/link";

export default function LandlordServicesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Landlord/Landlord_bg_img.png"
                alt="Business meeting with landlords"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Professional Lettings and Management for UK Landlords
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              End-to-end property management that saves time, reduces risk, and ensures
              full legal compliance. Trusted by landlords who value clear communication and
              consistent results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
            <Image
                src="/images/Landlord/landlord-services-bg-mbl.png"
              alt="Business meeting with landlords"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
            </div>
          </div>

          {/* Mobile Content - Center Aligned, Bottom 50px */}
          <div className="lg:hidden relative flex items-end justify-center pb-[50px] h-[850px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Professional Lettings and Management for UK Landlords
            </h1>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              End-to-end property management that saves time, reduces risk, and ensures
              full legal compliance. Trusted by landlords who value clear communication and
              consistent results.
            </p>
            <Link
              href="/contact"
                className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Request a Consultation
            </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Landlords Choose Us */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] mb-8">
          Why Landlords Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Transparency",
              body: "Clear reporting, no hidden fees, and easy access to property insights.",
            },
            {
              title: "Compliance",
              body: "Every property meets UK standards, from EPC to deposit protection.",
            },
            {
              title: "Efficiency",
              body: "Streamlined systems that save time and minimise stress.",
            },
            {
              title: "Reliability",
              body: "Professional support and proactive communication at every step.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[30px] py-[20px] h-[180px] flex flex-col justify-center"
            >
              <h3 className="font-crimson text-[26px] leading-[30px] text-[#002f57] mb-2">
                {card.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Letting Process */}
      <section className="max-w-[1316px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[140px] flex flex-col lg:flex-row gap-[70px] items-center">
        <div className="flex-1 w-full lg:max-w-[526px] space-y-9">
          <div className="space-y-4">
            <p className="font-crimson text-[20px] leading-[30px] tracking-[-0.6px] text-[#002f57]">
              How It Works
            </p>
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Our Letting Process
            </h2>
          </div>
          <div className="relative w-full max-w-[528px] h-[352px] min-h-[300px] sm:min-h-[350px] lg:min-h-[352px] min-w-0 rounded-[24px] overflow-hidden">
            <Image
              src="/images/Landlord/3rd_Landlord_Our_Letting_Process.png"
              alt="Landlord signing documents"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 528px"
              unoptimized
            />
          </div>
        </div>

        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-0 bottom-0 w-px bg-[#002f57]/15 hidden lg:block" />

          <div className="space-y-[20px] lg:space-y-[70px] pl-[70px]">
            {[
              {
                title: "Property Valuation",
                body: "We assess your property's market potential and rental value.",
              },
              {
                title: "Marketing & Listings",
                body: "Professional photos and listings across trusted UK portals.",
              },
              {
                title: "Tenant Selection",
                body: "Comprehensive referencing, right-to-rent checks, and approval.",
              },
              {
                title: "Tenancy & Management",
                body: "Contracts, inspections, and ongoing maintenance handled efficiently.",
              },
              {
                title: "Reporting & Renewals",
                body: "Regular updates and renewal management for stable returns.",
              },
            ].map((step, index) => (
              <div key={index} className="relative flex gap-4">
                <div className="flex-shrink-0 absolute left-[-60px] top-[6px]">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#002f57] flex items-center justify-center">
                    <span className="w-[12px] h-[12px] rounded-full bg-white" />
                  </div>
                </div>
                <div className="space-y-[2px]">
                  <h3 className="font-crimson text-[26px] leading-[30px] text-[#002f57]">
                    {step.title}
                  </h3>
                  <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Renting with Confidence for Landlords */}
      <div className="lg:px-0 px-5 overflow-x-auto">
        <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto mt-[60px] lg:mt-[140px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] min-w-[calc(100vw-40px)] lg:min-w-0">
          <div className="w-full lg:flex-1 max-w-[589px] space-y-4 pl-[5%]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Renting with Confidence
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Every property we manage adheres to UK government regulations, including:
          </p>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-2 mt-2">
            <li>Tenant Fees Act 2019</li>
            <li>Deposit Protection Scheme registration (DPS / MyDeposits / TDS)</li>
            <li>Energy Performance Certificate (EPC)</li>
            <li>Gas &amp; Electrical Safety checks</li>
            <li>Right to Rent verification</li>
          </ul>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 mt-2">
            We operate with complete transparency, ensuring landlords and tenants are always
            protected.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Landlord/4th_Landlord_Renting_with_Confidence.png"
            alt="Tenant and landlord agreement"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 675px"
            unoptimized
          />
        </div>
      </section>
      </div>

      {/* Smart Management. Seamless Support. */}
      <div className="lg:px-0 px-5 overflow-x-auto">
        <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto mt-[80px] flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] min-w-[calc(100vw-40px)] lg:min-w-0">
        <div className="flex-1 relative w-full max-w-[680px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Landlord/5th_Smart_Management._Seamless_Support..png"
            alt="Property management team"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 680px"
            unoptimized
          />
        </div>

          <div className="w-full lg:flex-1 max-w-[589px] space-y-4 p-[5%] lg:pr-[5%] lg:pl-0 lg:pt-0 lg:pb-0">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Smart Management. Seamless Support.
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            We handle every detail – from rent collection and maintenance to inspection
            reports and renewals – all through a streamlined, fully digital system that
            keeps you informed and in control.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}




