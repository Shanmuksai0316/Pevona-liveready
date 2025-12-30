import Image from "next/image";
import Link from "next/link";

export default function ClientPortalPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/client-portal-banner.png"
            alt="Client Portal"
            fill
            className="object-cover"
            priority
            unoptimized
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[820px] text-center text-white">
            <h1 className="font-crimson text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold mb-5 leading-tight">
              Secure Your Client Portal
            </h1>
            <p className="font-manrope text-base sm:text-lg md:text-xl leading-[1.7] opacity-90 max-w-[720px] mx-auto">
              Access all your property information in one secure place.
              Track progress, view documents, manage updates, and stay connected anytime, anywhere.
            </p>
            <span className="inline-block mt-7 text-sm font-semibold tracking-wider uppercase text-white opacity-85">
              Coming Soon
            </span>
          </div>
        </div>
      </section>

      {/* What you can do in the portal */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            What You Can Do
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            The Pevona Client Portal brings together everything you need to manage your tenancy or
            portfolio – from documents and payments to communication with the management team.
          </p>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-2 mt-2">
            <li>• View tenancy documents and signed agreements anytime.</li>
            <li>• See upcoming payments, rent status and statements.</li>
            <li>• Track maintenance requests and their progress.</li>
            <li>• Receive updates and notifications in one secure space.</li>
          </ul>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Application process/2nd_What_to_Expect.png"
            alt="Clients viewing portal on laptop"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Key features cards */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] flex flex-col gap-[26px]">
        <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
          Designed Around Your Needs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Real-time Visibility",
              body: "Access key information on your properties or tenancy at any time.",
            },
            {
              title: "Secure Document Storage",
              body: "Safely download statements, contracts, and compliance documents.",
            },
            {
              title: "Simple Communication",
              body: "Send and receive updates without email chains getting lost.",
            },
            {
              title: "On-the-Go Access",
              body: "Use the portal from desktop, tablet, or mobile, wherever you are.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[30px] py-[24px] space-y-3"
            >
              <h3 className="font-crimson text-[22px] md:text-[26px] leading-[30px] text-[#002f57]">
                {card.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* Security & compliance */}
      <section className="max-w-[1336px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] lg:mt-[120px] mb-[60px] lg:mb-[140px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="basis-0 grow min-w-px min-h-px space-y-4 max-w-[640px]">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Secure &amp; Fully Compliant
          </h2>
          <div className="space-y-3 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            <ul className="space-y-2">
              {[
                "Encrypted access and role-based permissions.",
                "Data handling aligned with UK GDPR and data protection standards.",
                "Automatic logs of key events for clear audit trails.",
                "Regular reviews to keep your information safe and up to date.",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 inline-block size-[6px] rounded-full bg-[#002f57]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p>
              The portal is built to protect your information while making it easy to stay on top of
              everything that matters.
            </p>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[706px] h-[470px] rounded-[26px] overflow-hidden">
          <Image
            src="/images/Application process/5th_Compliance__Tenant_Protection.png"
            alt="People reviewing portal information"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>
    </div>
  );
}





