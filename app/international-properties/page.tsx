import Image from "next/image";
import Link from "next/link";

export default function InternationalPropertiesPage() {
  return (
    <main className="bg-white min-h-screen text-[#002f57]">
      {/* ================= HERO ================= */}
      <section className="relative h-[400px] sm:h-[500px] md:h-[600px] bg-[#002f57] pt-[100px] lg:pt-[120px]">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/International-Properties/Group 7614.png"
            alt="International property background"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-[#002f57] opacity-70" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="font-crimson text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-tight sm:leading-[48px] md:leading-[56px] tracking-[-1.1px] md:tracking-[-1.68px] text-white mb-6">
              Your Gateway to International Property Investments
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] md:text-[20px] text-white/90 mb-8 leading-[26px] sm:leading-[28px]">
              Explore high-growth markets, diversify your portfolio, and access
              exclusive development opportunities across Africa and Europe.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#002f57] px-8 py-3 rounded-[8px] font-manrope font-semibold text-[16px] sm:text-[18px] hover:bg-white/90 transition-colors"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="py-16 bg-white mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] mb-6">
              Why Invest Internationally?
            </h2>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#333] opacity-80">
              Global investments unlock access to high-growth markets, strong
              rental demand, and currency diversification. Pevona ensures full
              compliance and seamless cross-border support.
            </p>
          </div>

          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/images/International-Properties/Mask group (3).png"
              alt="Business meeting discussion"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="py-16 bg-[#FAFAFA] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-center text-[#002f57] mb-4">
            Featured International Projects
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] text-[#666] text-center mb-12 max-w-3xl mx-auto leading-[26px] sm:leading-[28px]">
            Discover curated international developments from retail hubs to
            luxury residential projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Link
              href="/international-properties/buea-cameroon"
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-[400px]">
                <Image
                  src="/images/International-Properties/Mask group (4).png"
                  alt="Shopping Centre – Buea, Cameroon"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="mt-4 p-4 text-center font-manrope text-[16px] sm:text-[18px] font-semibold text-[#002f57] group-hover:text-[#29902e] transition-colors">
                Shopping Centre – Buea, Cameroon
              </p>
            </Link>

            <Link
              href="/international-properties/luxury-residential-lagos"
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <div className="relative h-[400px]">
                <Image
                  src="/images/International-Properties/Mask group (5).png"
                  alt="Luxury Residential – Lagos, Nigeria"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
              </div>
              <p className="mt-4 p-4 text-center font-manrope text-[16px] sm:text-[18px] font-semibold text-[#002f57] group-hover:text-[#29902e] transition-colors">
                Luxury Residential – Lagos, Nigeria
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ================= HOW PEVONA SUPPORTS ================= */}
      <section className="py-16 bg-[#002f57] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[550px] overflow-hidden md:rounded-r-3xl order-2 md:order-1">
            <Image
              src="/images/International-Properties/Mask group (6).png"
              alt="Global investment support"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-white mb-10">
              How Pevona Supports Your Global Investment Journey
            </h2>

            <div className="space-y-8">
              {[
                ["1", "Consultation", "Understand goals, budget & markets"],
                ["2", "Property Selection", "Vetted global opportunities"],
                ["3", "Compliance & Legal", "Cross-border legal navigation"],
                ["4", "Transaction & Management", "End-to-end secure support"],
              ].map(([n, title, desc]) => (
                <div key={n}>
                  <span className="inline-block bg-white/20 px-3 py-1 rounded text-sm font-manrope font-semibold text-white mb-2">
                    STEP {n}
                  </span>
                  <h3 className="font-crimson text-[24px] sm:text-[28px] md:text-[32px] text-white mt-2 mb-1">
                    {title}
                  </h3>
                  <p className="font-manrope text-[16px] sm:text-[18px] text-white/80">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERNATIONAL SERVICES ================= */}
      <section className="py-16 bg-[#FAFAFA] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-center text-[#002f57] mb-12">
            International Property Services
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Global Reach Highlights",
                items: [
                  "Africa's fastest-growing cities",
                  "UK & Europe partnerships",
                  "Market intelligence & due diligence",
                  "Commercial & residential projects",
                ],
                image: "/images/International-Properties/Mask group (3).png",
              },
              {
                title: "Services Offered",
                items: [
                  "Property sourcing & advisory",
                  "Legal & compliance support",
                  "Cross-border financing",
                  "Developer partnerships",
                ],
                image: "/images/International-Properties/Mask group (4).png",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-crimson text-[24px] sm:text-[28px] md:text-[32px] text-[#002f57] mb-4">
                    {card.title}
                  </h3>
                  <ul className="space-y-2 font-manrope text-[16px] sm:text-[18px] text-[#333] opacity-80">
                    {card.items.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMPLIANCE ================= */}
      <section className="py-16 bg-white mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/International-Properties/Mask group (5).png"
              alt="Compliance and transparency"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div>
            <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] mb-6">
              Compliance & Transparency
            </h2>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#333] opacity-80">
              Every project adheres to local regulations, due-diligence
              standards, and transparent documentation—giving you confidence at
              every stage.
            </p>
          </div>
        </div>
      </section>

      {/* ================= EXPERT SUPPORT ================= */}
      <section className="py-16 bg-[#FAFAFA] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] mb-[60px] 650:mb-[80px] lg:mb-[100px] 1500:mb-[130px] 1600:mb-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57] mb-6">
              Expert Support, Wherever You Are
            </h2>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] text-[#333] opacity-80 mb-8">
              Our multilingual advisors assist with legal, financial, and
              project-specific queries worldwide.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#22C55E] text-white px-8 py-3 rounded-[8px] font-manrope font-semibold text-[16px] sm:text-[18px] hover:bg-[#16A34A] transition-colors"
            >
              Speak to Our Experts
            </Link>
          </div>

          <div className="relative h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/International-Properties/Mask group (6).png"
              alt="Expert support"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>
    </main>
  );
}
