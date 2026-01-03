import Image from "next/image";
import Link from "next/link";

export default function LandlordServicesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-6 lg:px-[180px] pt-[39px] pb-[260px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-b-[36px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/004383cea898d0efea0672f87411884ea1e5aa43.png"
                alt="Business meeting with landlords"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          {/* Hero copy */}
          <div className="relative max-w-[780px] mt-10 space-y-6 text-white">
            <h1 className="font-crimson text-[40px] md:text-[56px] lg:text-[66px] leading-[1.05] tracking-[-0.06em]">
              Professional Lettings and Management for UK Landlords
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              End-to-end property management that saves time, reduces risk, and ensures
              full legal compliance. Trusted by landlords who value clear communication and
              consistent results.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Why Landlords Choose Us */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-[132px] mt-[150px]">
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
      <section className="max-w-[1316px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[140px] flex flex-col lg:flex-row gap-[70px] items-center">
        <div className="flex-1 max-w-[526px] space-y-9">
          <div className="space-y-4">
            <p className="font-crimson text-[20px] leading-[30px] tracking-[-0.6px] text-[#002f57]">
              How It Works
            </p>
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Our Letting Process
            </h2>
          </div>
          <div className="relative w-full max-w-[528px] h-[352px] rounded-[24px] overflow-hidden">
            <Image
              src="http://localhost:3845/assets/84097465aea34d1f67a47f28366329599e75eb49.png"
              alt="Landlord signing documents"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        <div className="flex-1 relative">
          {/* Vertical line */}
          <div className="absolute left-[20px] top-[10px] bottom-0 w-px bg-[#002f57]/15 hidden lg:block" style={{ height: "360px" }} />

          <div className="space-y-[70px] pl-[70px]">
            {[
              {
                title: "Property Valuation",
                body: "We assess your property’s market potential and rental value.",
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
                  <div className="w-[20px] h-[20px] relative">
                    <Image
                      src="http://localhost:3845/assets/7f7da36ee475d28dd8dbb567ff75903658ba4b9b.svg"
                      alt=""
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>\n                </div>
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
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[140px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-4">
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

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/5c14f55dce9ed1c3ec33221f94b438ef883c65b3.png"
            alt="Tenant and landlord agreement"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Smart Management. Seamless Support. */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-6 lg:px-0 mt-[80px] mb-[60px] lg:mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pr-[60px]">
        <div className="flex-1 relative w-full max-w-[680px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/fc486cbdbbc44791e24b3f8acd6f22744c533934.png"
            alt="Property management team"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-4">
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
  );
}

