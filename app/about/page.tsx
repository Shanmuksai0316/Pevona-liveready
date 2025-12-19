import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <WhoWeAreSection />
      <ValuesSection />
      <TeamSection />
    </>
  );
}

function AboutHero() {
  return (
    <section className="w-full bg-[#002f57] text-white py-20 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 flex flex-col lg:flex-row items-center gap-12">
        {/* Image side */}
        <div className="relative w-full max-w-[520px] h-[260px] md:h-[320px] lg:h-[360px] rounded-[16px] overflow-hidden">
          <Image
            src="/images/main_bg_img.png"
            alt="Homes managed by Pevona"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        {/* Content side */}
        <div className="flex-1 space-y-6 max-w-[520px]">
          <h1 className="font-crimson text-[42px] md:text-[56px] leading-[48px] md:leading-[56px] tracking-[-1.68px]">
            Built on Trust.
            <br />
            Driven by Expertise.
          </h1>
          <p className="font-manrope text-[18px] leading-[28px] opacity-90">
            We believe in the personal touch, welcoming clients with familiar voices and
            friendly faces. Our limited portfolio ensures dedicated service and long‑term
            relationships.
          </p>
          <p className="font-manrope text-[18px] leading-[28px] opacity-90">
            We are committed to sustainability, ethical leadership, and environmental
            responsibility, actively supporting animal welfare and reducing waste.
          </p>
          <button className="mt-4 bg-white text-[#002f57] px-[24px] py-[12px] rounded-[8px] font-manrope font-semibold text-[18px] leading-[28px] w-fit">
            Speak To Our Team
          </button>
        </div>
      </div>
    </section>
  );
}

function WhoWeAreSection() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-0 py-20 flex flex-col lg:flex-row gap-12 items-center">
      <div className="flex-1 space-y-6">
        <p className="font-crimson text-[22px] leading-[32px] text-pevona-dark uppercase tracking-[0.12em]">
          Who we are
        </p>
        <h1 className="font-crimson text-[48px] leading-[52px] text-pevona-dark tracking-[-1.44px]">
          A partner in every stage of your property journey.
        </h1>
        <p className="font-manrope text-[18px] leading-[28px] text-[#333333]">
          Pevona combines on‑the‑ground expertise with modern compliance and transparent communication.
          From lettings and full management to tailored investment strategies, we help landlords,
          tenants, and investors make confident decisions in the UK property market.
        </p>
        <p className="font-manrope text-[18px] leading-[28px] text-[#333333]">
          Our team manages the details so you can focus on long‑term value: robust tenant selection,
          proactive maintenance, and clear reporting behind every decision.
        </p>
      </div>
      <div className="flex-1 grid grid-cols-2 gap-4">
        <div className="relative w-full h-[260px] rounded-[16px] overflow-hidden shadow-sm">
          <Image
            src="/images/2nd_sec_who_we_re_left_img.png"
            alt="Pevona team supporting clients"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="relative w-full h-[260px] rounded-[16px] overflow-hidden shadow-sm mt-8">
          <Image
            src="/images/2nd_sec_who_we_re_right_img.png"
            alt="Modern property managed by Pevona"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      title: "Approachability",
      description:
        "Clear communication, honest advice, and a client‑first mindset at every interaction.",
      image: "/images/Our_Values_-_Approachability.png",
    },
    {
      title: "Guardianship",
      description:
        "We treat every property as if it were our own, protecting both value and reputation.",
      image: "/images/Our_Values_-_Guardianship.png",
    },
    {
      title: "Enterprise",
      description:
        "Forward‑thinking strategies that balance risk and reward to unlock new opportunities.",
      image: "/images/Our_Values_-_Enterprise.png",
    },
    {
      title: "Integrity",
      description:
        "Compliance, transparency, and accountability are built into how we operate.",
      image: "/images/Our_Values_-_Integrity.png",
    },
  ];

  return (
    <section className="bg-[#FAFAFA] py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-0 space-y-10">
        <div className="space-y-3 max-w-[720px]">
          <p className="font-crimson text-[22px] leading-[32px] text-pevona-dark">
            Our Values
          </p>
          <h2 className="font-crimson text-[40px] leading-[44px] text-pevona-dark tracking-[-0.8px]">
            Principles that guide every property we manage.
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333333]">
            These are more than words on a page – they shape how we advise clients,
            structure investments, and care for residents day‑to‑day.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value) => (
            <article
              key={value.title}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={value.image}
                  alt={value.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-crimson text-[26px] leading-[30px] text-pevona-dark">
                  {value.title}
                </h3>
                <p className="font-manrope text-[18px] leading-[28px] text-[#333333]">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const team = [
    {
      name: "Emma Williams",
      role: "Head of Property Management",
      image: "/images/our_team_-_Card_1.png",
    },
    {
      name: "Rahul Mehta",
      role: "Investments & Strategy Lead",
      image: "/images/our_team_-_Card_2.png",
    },
    {
      name: "Sophie Clarke",
      role: "Lettings & Resident Relations",
      image: "/images/our_team_-_Card_3.png",
    },
    {
      name: "Daniel Foster",
      role: "Compliance & Governance",
      image: "/images/our_team_-_Card_4.png",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-0 py-20">
      <div className="space-y-6 text-center mb-12">
        <p className="font-crimson text-[22px] leading-[32px] text-pevona-dark">
          Our Team
        </p>
        <h2 className="font-crimson text-[40px] leading-[44px] text-pevona-dark tracking-[-0.8px]">
          People behind the properties.
        </h2>
        <p className="font-manrope text-[18px] leading-[28px] text-[#333333] max-w-[720px] mx-auto">
          A multidisciplinary team combining lettings, legal, compliance and investment
          expertise to give you a single, reliable point of contact.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {team.map((member) => (
          <article
            key={member.name}
            className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col items-center text-center"
          >
            <div className="relative w-full h-[220px]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="font-crimson text-[22px] leading-[26px] text-pevona-dark">
                {member.name}
              </h3>
              <p className="font-manrope text-[16px] leading-[24px] text-[#666666]">
                {member.role}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
