import Image from "next/image";
import Link from "next/link";

const serviceLevels = [
  {
    title: "Tenant Introduction Only",
    body:
      "We take reasonable steps to introduce prospective tenants to the Landlord. All subsequent arrangements, including compliance, tenancy documentation, and deposit handling, remain the responsibility of the Landlord.",
  },
  {
    title: "Tenant Find Only",
    body:
      "In addition to introductions, we take reasonable steps to market the property, conduct accompanied viewings, process applications and referencing, carry out Right to Rent checks, and prepare tenancy documentation in line with current statutory requirements. Ongoing management and compliance remain the Landlord’s responsibility unless otherwise agreed.",
  },
  {
    title: "Rent Collection",
    body:
      "We take reasonable steps to collect rent and provide regular statements. While we exercise reasonable care and skill, rental payments and arrears recovery cannot be guaranteed.",
  },
  {
    title: "Full Management",
    body:
      "We take reasonable steps to manage the day-to-day operation of the tenancy, including coordinating maintenance and repairs, liaising with tenants on routine matters, conducting periodic inspections, and supporting the Landlord in meeting statutory obligations. Where required, we may act without prior instruction in genuine emergencies to protect the Property, subject to reasonable cost controls.",
  },
];

export default function LandlordServicesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden rounded-b-[26px]">
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
              <Image
                src="/images/Landlord/landlord-services-bg-mbl.png"
                alt="Landlord services background mobile"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>

          <div className="hidden lg:block absolute inset-0 z-0 -mx-[60px] lg:-mx-[80px] 1300:-mx-[80px] 1400:-mx-[80px] 1500:-mx-[100px] 1600:-mx-[130px]">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Landlord/landlord-services-bg-mbl.png"
                alt="Landlord services background"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>

          <div className="lg:hidden relative flex items-end justify-center h-[850px] pb-[50px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <p className="font-crimson text-[20px] leading-[30px] tracking-[-0.6px]">Landlord Services</p>
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
                Landlord Services
              </h1>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
                At Pevona Ltd, we provide a structured range of landlord services designed to support compliance, maximise rental performance, and deliver efficient property management. Our services are delivered in accordance with current legislation, including the Renters&apos; Rights Act 2025, and are tailored to the selected level of service.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
              >
                Request a Consultation
              </Link>
            </div>
          </div>

          <div className="hidden lg:block relative max-w-[780px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] space-y-4 sm:space-y-6 text-white">
            <p className="font-crimson text-[20px] leading-[30px] tracking-[-0.6px]">Landlord Services</p>
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Landlord Services
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              At Pevona Ltd, we provide a structured range of landlord services designed to support compliance, maximise rental performance, and deliver efficient property management. Our services are delivered in accordance with current legislation, including the Renters&apos; Rights Act 2025, and are tailored to the selected level of service.
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

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[42px] lg:text-[48px]">Service Levels</h2>
            <p className="mt-4 font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">A structured range of landlord services tailored to the selected level of service.</p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-2">
            {serviceLevels.map((level) => (
              <article key={level.title} className="rounded-[24px] border border-[#e5e9ef] bg-[#f9fafb] p-7 shadow-sm transition hover:shadow-md">
                <h3 className="font-crimson text-[28px] leading-tight text-[#061e38]">{level.title}</h3>
                <p className="mt-4 font-manrope text-[15px] leading-[27px] text-[#52606d] sm:text-[16px] sm:leading-[29px]">{level.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#061e38] py-16 text-white sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1440px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[100px]">
          <div className="rounded-[30px] border border-white/10 bg-white/6 p-7 backdrop-blur-sm sm:p-8">
            <h2 className="font-crimson text-[32px] leading-tight sm:text-[42px] lg:text-[48px]">Important Notice</h2>
            <p className="mt-5 max-w-4xl font-manrope text-[15px] leading-[27px] text-white/82 sm:text-[16px] sm:leading-[29px]">
              Pevona Ltd supports landlords in meeting their legal obligations; however, ultimate responsibility for compliance remains with the Landlord.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center 650:px-[60px] lg:px-[40px]">
          <h2 className="font-crimson text-[32px] leading-tight text-[#061e38] sm:text-[40px]">Speak to Our Team</h2>
          <p className="mt-4 font-manrope text-[15px] leading-[26px] text-[#6b7280] sm:text-[16px] sm:leading-[28px]">Speak to our team to discuss the right landlord service level for your property.</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/contact" className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#061e38] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#031224]">Contact Us Today</Link>
            <Link href="/terms#cmp" className="inline-flex min-h-[54px] items-center justify-center rounded-full border border-[#d7dde6] bg-white px-8 py-3 text-[14px] font-semibold text-[#061e38] transition hover:bg-[#f7f8fa]">Compliance &amp; CMP</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
