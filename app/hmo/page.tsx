import Image from "next/image";
import Link from "next/link";

export default function HMOPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden shadow-sm">
        <div className="relative w-full h-full rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden z-0">
              <Image
                src="/images/House%20Of%20Multiple%20Occupations%20(HMO)/House%20of%20multiple%20occupations%20-%20banner-bg-dsk.webp"
            alt="HMO property management background"
                fill
                className="object-cover"
                unoptimized
                priority
              />
        </div>

        {/* Dark blue overlay at bottom */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end">
          <div className="w-full bg-gradient-to-t from-[#002f57] via-[#002f57]/90 to-transparent pb-[80px] pt-[200px]">
            <div className="max-w-[1000px] mx-auto px-5 650:px-[60px] lg:px-[80px] text-white text-center">
              <h1 className="font-crimson text-[40px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
                House Of Multiple Occupations (HMO)
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
            <Image
              src="/images/House%20Of%20Multiple%20Occupations%20(HMO)/House%20of%20multiple%20occupations%20-%20banner-bg-mbl.webp"
            alt="HMO property management background"
              fill
              className="object-cover"
              unoptimized
              priority
            />
          </div>

        {/* Dark blue overlay at bottom */}
        <div className="absolute inset-0 flex flex-col items-end justify-end">
          <div className="w-full bg-gradient-to-t from-[#002f57] via-[#002f57]/90 to-transparent pb-[50px] pt-[300px]">
            <div className="flex flex-col items-center px-5 sm:px-8 text-white text-center">
            <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
                House Of Multiple Occupations (HMO)
            </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Pevona Ltd for HMO Management? */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[78px] items-center">
        {/* Image on left */}
        <div className="w-full lg:flex-1 relative max-w-[675px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[16px] sm:rounded-[20px] lg:rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/House Of Multiple Occupations (HMO)/2nd_HMO_Management_.png"
            alt="Why Choose Pevona Ltd for HMO Management"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Text on right */}
        <div className="w-full lg:flex-1 max-w-[589px] space-y-3 sm:space-y-4 order-1 lg:order-2">
          <h2 className="font-crimson text-[22px] sm:text-[28px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Why Choose Pevona Ltd for HMO Management?
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
            Managing a House in Multiple Occupation (HMO) comes with complex legal requirements, 
            safety standards, and tenant coordination challenges. Pevona Ltd provides end-to-end 
            HMO management services that protect your investment, ensure tenant safety, and maximize 
            your returns while keeping you fully compliant with all regulations.
          </p>
        </div>
      </section>

      {/* Our HMO Services */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[140px]">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-[78px] items-start">
          {/* Service list on left */}
          <div className="flex-1 w-full space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* HMO Licensing & Compliance Consultation */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
                HMO Licensing & Compliance Consultation
              </h3>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                Expert guidance on HMO licensing requirements, safety standards, and documentation 
                to ensure your property meets all legal obligations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-[#003d70] transition-colors"
              >
                Book a Compliance Consultation
              </Link>
            </div>

      {/* HMO Services */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
                HMO Services
              </h3>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                Comprehensive management for multi-tenant properties, including tenant coordination, 
                rent collection, maintenance scheduling, and day-to-day operations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-[#003d70] transition-colors"
              >
                Request a Management Quote
              </Link>
            </div>

            {/* HMO Safety & Fire Risk Assessment */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
                HMO Safety & Fire Risk Assessment
              </h3>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                Professional safety inspections covering smoke alarms, emergency lighting, escape 
                routes, and full compliance with fire safety regulations for HMO properties.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-[#003d70] transition-colors"
              >
                Request a Management Quote
              </Link>
            </div>

            {/* HMO Conversion Advisory */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
                HMO Conversion Advisory
              </h3>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                Expert guidance on converting your property into an HMO, including planning 
                requirements, layout optimization, and compliance considerations.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-[#003d70] transition-colors"
              >
                Book a Conversion Consultation
              </Link>
            </div>

            {/* HMO Maintenance & Repairs Coordination */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
                HMO Maintenance & Repairs Coordination
              </h3>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                Dedicated maintenance solutions for HMO properties, covering communal areas, 
                individual rooms, and ensuring all repairs meet safety and compliance standards.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[44px] sm:h-[48px] px-5 sm:px-6 rounded-[8px] bg-[#002f57] text-white font-manrope font-semibold text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] hover:bg-[#003d70] transition-colors"
              >
                Report a Repair
              </Link>
            </div>
        </div>

          {/* Heading and image on right */}
          <div className="flex-1 w-full space-y-4 sm:space-y-6 order-1 lg:order-2">
            <h2 className="font-crimson text-[22px] sm:text-[28px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
              Our HMO Services
            </h2>
            <div className="relative w-full max-w-[675px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[16px] sm:rounded-[20px] lg:rounded-[26px] overflow-hidden">
          <Image
            src="/images/House Of Multiple Occupations (HMO)/3rd_Our_HMO_Services.png"
                alt="Our HMO Services"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
          </div>
        </div>
      </section>

      {/* Benefits of Our HMO Services */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[140px] mb-[60px] lg:mb-[120px]">
        {/* Heading at top center */}
        <h2 className="font-crimson text-[22px] sm:text-[28px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-center mb-8 sm:mb-10 lg:mb-12">
          Benefits of Our HMO Services
          </h2>

        {/* 4 benefit cards horizontally arranged */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[12px] sm:rounded-[16px] px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
            <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
              Compliance First
            </h3>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[22px] sm:leading-[28px] text-[#333] opacity-80">
              Avoid fines and legal issues with expert guidance.
            </p>
          </div>

          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[12px] sm:rounded-[16px] px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
            <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
              Safety Guaranteed
            </h3>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[22px] sm:leading-[28px] text-[#333] opacity-80">
              Full adherence to fire and health standards.
            </p>
          </div>

          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[12px] sm:rounded-[16px] px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
            <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
              Cost Efficiency
            </h3>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[22px] sm:leading-[28px] text-[#333] opacity-80">
              Trusted contractors and transparent pricing.
            </p>
          </div>

          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[12px] sm:rounded-[16px] px-4 sm:px-6 py-6 sm:py-8 space-y-2 sm:space-y-3">
            <h3 className="font-crimson text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57]">
              Peace of Mind
            </h3>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[22px] sm:leading-[28px] text-[#333] opacity-80">
              End-to-end management for hassle-free operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
