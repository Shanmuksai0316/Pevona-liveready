import Image from "next/image";
import Link from "next/link";

export default function ComplianceLicensingPage() {
  const keyAreasTop = [
    {
      title: "Client Money Protection (CMP)",
      body: "All client funds are held in segregated accounts and protected under the UKALA Total Loss Client Money Protection Scheme, ensuring total financial transparency and security.",
    },
    {
      title: "Health & Safety",
      body: "Every managed property holds valid Gas Safety, Electrical (EICR), and Energy Performance Certificates (EPC), maintained and renewed according to UK law and HHSRS guidance.",
    },
    {
      title: "Right to Rent & Tenant Screening",
      body: "All tenants undergo identity verification and Right to Rent checks in line with Home Office regulations, ensuring fair and lawful tenancies.",
    },
    {
      title: "Anti-Money Laundering (AML)",
      body: "We comply with UK Money Laundering Regulations 2017, conducting due diligence and transaction monitoring to prevent and report financial crime.",
    },
  ] as const;

  const keyAreasBottom = [
    {
      title: "Data Protection & Cybersecurity",
      body: "All personal data is processed under UK GDPR and the Data Protection Act 2018. We use secure, encrypted systems with routine audits to protect digital integrity.",
    },
    {
      title: "Equality, Diversity & Inclusion (EDI)",
      body: "Pevona follows the Equality Act 2010, ensuring fairness, accessibility, and equal opportunity for all clients, tenants, and employees.",
    },
    {
      title: "Short-Term Lets & Licensing",
      body: "Short-term and HMO rentals are licensed under local authority schemes and managed in full compliance with planning and safety standards.",
    },
  ] as const;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden shadow-sm">
        <div className="relative w-full h-full rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden z-0">
          <Image
            src="/images/com_bg_img.png"
            alt="Compliance and licensing background"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="absolute inset-0 z-10 flex flex-col items-center justify-end pb-[80px]">
          <div className="max-w-[1000px] px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] space-y-6 text-white text-center">
            <h1 className="font-crimson text-[40px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Protecting Properties Through Full Compliance
            </h1>
            <p className="font-manrope text-[20px] leading-[30px] text-white/90">
              Every property managed by Pevona meets strict UK legal and safety standards. From licensing
              and inspections to data protection and client money safeguarding, we manage every compliance
              detail — protecting landlords, tenants, and investments.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-8 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
          <Image
            src="/images/compliance-licensing-bg-mbl.png"
            alt="Compliance and licensing background"
            fill
            className="object-cover"
            sizes="100vw"
            unoptimized
          />
        </div>

        {/* Content positioned 50px from bottom, center-aligned */}
        <div className="absolute bottom-[50px] left-0 right-0 flex flex-col items-center px-5 sm:px-8 space-y-4 sm:space-y-6 text-white text-center">
          <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
            Protecting Properties Through Full Compliance
          </h1>
          <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] max-w-[600px]">
            Every property managed by Pevona meets strict UK legal and safety standards. From licensing
            and inspections to data protection and client money safeguarding, we manage every compliance
            detail — protecting landlords, tenants, and investments.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors mt-2"
          >
            Book a Consultation
          </Link>
        </div>
      </section>

      {/* Our Commitment to Compliance */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[80px]">
        <div className="w-full lg:flex-1 relative max-w-[720px] h-[460px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/com_2nd_sec_img.png"
            alt="Compliance and property review"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Our Commitment to Compliance
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Compliance isn’t a box-ticking exercise — it’s the foundation of responsible property
            management. We ensure that every service, tenancy, and transaction aligns with UK housing
            law, financial regulations, and ethical standards, giving clients complete confidence in our
            processes.
          </p>
        </div>
      </section>

      {/* Key Compliance Areas */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-[37px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[160px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] text-center w-full">
          Key Compliance Areas
        </h2>

        <div className="w-full space-y-6">
          {/* Top row of 4 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {keyAreasTop.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-6 py-8 space-y-3 h-full"
              >
                <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                  {item.title}
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          {/* Bottom row of 3 wider cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {keyAreasBottom.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-8 py-8 space-y-3 h-full"
              >
                <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                  {item.title}
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Manage Compliance */}
      <section className="mt-[60px] lg:mt-[160px] bg-[#002f57]">
        <div className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] py-[74px] flex flex-col lg:flex-row gap-[48px] items-center text-white">
          <div className="w-full lg:flex-1 max-w-[621px] space-y-[24px]">
            <div className="space-y-4">
              <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px]">
                How We Manage Compliance
              </h2>
              <p className="font-manrope text-[18px] leading-[28px] text-white/80">
                Our internal systems track renewals, certifications, and regulatory deadlines
                automatically. We coordinate with accredited engineers, compliance officers, and
                financial auditors to ensure that no certification lapses — and that every landlord
                remains fully covered.
              </p>
            </div>

            <div className="space-y-3">
              <p className="font-manrope text-[18px] leading-[28px]">Our process:</p>
              <ul className="font-manrope text-[18px] leading-[28px] space-y-2">
                <li>• Onboarding &amp; verification of documentation.</li>
                <li>• Safety and licensing review for each property.</li>
                <li>• Automated compliance tracking and reminders.</li>
                <li>• Regular inspections and certified renewals.</li>
                <li>• Annual policy audits and external reviews.</li>
              </ul>
            </div>
          </div>

          <div className="w-full lg:flex-1 relative max-w-[720px] h-[460px] rounded-[26px] overflow-hidden">
            <Image
              src="/images/Compliance & Licensing/5thn_sec_How_We_Manage_Compliance.png"
              alt="How we manage compliance visually"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Responsibilities – Landlords and Tenants */}
      <section className="max-w-[1560px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-[37px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[160px] mb-[60px] lg:mb-[120px] flex flex-col gap-[36px] items-center">
        <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] w-full">
          Responsibilities
        </h2>

        <div className="flex flex-col lg:flex-row gap-[40px] w-full">
          {/* Landlords card */}
          <article className="relative w-full lg:flex-1 h-[320px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/Compliance & Licensing/4th_secLandlords.png"
              alt="Landlord responsibilities"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f57] via-[#002f57]/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-3 text-white">
              <h3 className="font-crimson text-[32px] md:text-[40px] leading-[40px]">Landlords</h3>
              <p className="font-manrope text-[18px] leading-[28px]">
                We manage legal compliance on your behalf — you simply provide access for inspections
                and supply any existing safety documents during onboarding.
              </p>
            </div>
          </article>

          {/* Tenants card */}
          <article className="relative w-full lg:flex-1 h-[320px] rounded-[24px] overflow-hidden">
            <Image
              src="/images/Compliance & Licensing/4th_secTenants.png"
              alt="Tenant responsibilities"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002f57] via-[#002f57]/70 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-3 text-white">
              <h3 className="font-crimson text-[32px] md:text-[40px] leading-[40px]">Tenants</h3>
              <p className="font-manrope text-[18px] leading-[28px]">
                Tenants must provide accurate identification for Right to Rent checks, report hazards
                promptly, and comply with tenancy agreements to help maintain a safe home environment.
              </p>
            </div>
          </article>
        </div>

        <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 max-w-[1300px] text-center">
          All policies are consolidated within Pevona&apos;s Executive Compliance Manual, reviewed annually
          by our compliance team. We are registered with the Property Redress Scheme (PRS) and the
          Information Commissioner&apos;s Office (ICO) for data protection oversight.
        </p>
      </section>
    </div>
  );
}
