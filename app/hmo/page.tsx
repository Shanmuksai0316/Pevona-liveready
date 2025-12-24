import Image from "next/image";
import Link from "next/link";

export default function HMOPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1560px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[260px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/House Of Multiple Occupations (HMO)/HMO_Bg_img.png"
                alt="HMO property management"
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
              House of Multiple Occupation (HMO) Management
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Specialized management services for HMO properties. We handle licensing,
              compliance, tenant management, and all regulatory requirements for Houses
              in Multiple Occupation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Get HMO Management Support
            </Link>
          </div>
        </div>
      </section>

      {/* What is an HMO */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            What is an HMO?
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            A House in Multiple Occupation (HMO) is a property rented to three or more
            tenants who are not from the same household, sharing facilities like kitchens
            or bathrooms. HMO properties require specific licensing and compliance with
            stricter safety and management standards.
          </p>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Properties with five or more tenants from different households typically require
            mandatory HMO licensing, while some local authorities require additional licensing
            for smaller HMOs.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/House Of Multiple Occupations (HMO)/2nd_HMO_Management_.png"
            alt="HMO property"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* HMO Services */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px]">
        <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] mb-12">
          Our HMO Management Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "HMO Licensing",
              body: "Application, renewal, and compliance with mandatory and additional HMO licensing requirements.",
            },
            {
              title: "Safety Compliance",
              body: "Fire safety assessments, smoke alarms, emergency lighting, and compliance with HMO safety standards.",
            },
            {
              title: "Tenant Management",
              body: "Individual tenancy agreements, rent collection, and coordination for multiple tenants.",
            },
            {
              title: "Property Standards",
              body: "Ensuring adequate facilities, room sizes, and amenities meet HMO regulations.",
            },
            {
              title: "Regular Inspections",
              body: "Scheduled property inspections to maintain standards and identify issues early.",
            },
            {
              title: "Documentation",
              body: "Maintaining all required records, certificates, and compliance documentation for HMO properties.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-6 py-8 space-y-3"
            >
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                {item.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* HMO Requirements */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[140px] mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px]">
        <div className="flex-1 relative w-full max-w-[680px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/House Of Multiple Occupations (HMO)/3rd_Our_HMO_Services.png"
            alt="HMO compliance requirements"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            HMO Requirements &amp; Standards
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            HMO properties must meet specific legal requirements, including:
          </p>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-2 mt-2">
            <li>• Valid HMO license from the local authority</li>
            <li>• Fire safety measures (alarms, extinguishers, escape routes)</li>
            <li>• Adequate kitchen and bathroom facilities</li>
            <li>• Minimum room sizes and space standards</li>
            <li>• Gas and electrical safety certificates</li>
            <li>• Annual fire risk assessments</li>
            <li>• Regular property inspections</li>
            <li>• Proper waste management and refuse storage</li>
          </ul>
        </div>
      </section>
    </div>
  );
}







