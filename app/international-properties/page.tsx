import Image from "next/image";
import Link from "next/link";

export default function InternationalPropertiesPage() {
  return (
    <main className="bg-white min-h-screen text-[#002f57]">
      {/* ================= HERO ================= */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
          <Image
            src="/images/International-Properties/Group 7614.png"
            alt="International property background"
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
              Your Gateway to International Property Investments
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Explore high-growth markets, diversify your portfolio, and access
              exclusive development opportunities across Africa and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
            <Image
              src="/images/International-Properties/international-properties-bg-mbl.png"
              alt="International property background"
              fill
              className="object-cover"
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>

        <div className="relative w-full h-full flex flex-col justify-end items-center px-5 pb-[50px] z-10">
          <div className="max-w-[600px] space-y-4 text-white text-center">
            <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight">
              Your Gateway to International Property Investments
            </h1>
            <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px]">
              Explore high-growth markets, diversify your portfolio, and access
              exclusive development opportunities across Africa and Europe.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[30px] sm:text-[36px] md:text-[40px] lg:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-center text-[#002f57] mb-4">
            Featured International Projects
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] text-[#666] text-center mb-12 max-w-3xl mx-auto leading-[26px] sm:leading-[28px]">
            Discover curated international developments from retail hubs to
            luxury residential projects.
          </p>

          <div className="flex justify-center max-w-6xl mx-auto">
            <Link
              href="/international-properties/buea-cameroon"
              className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition w-full max-w-[640px]"
            >
              <div className="relative w-full h-[250px]">
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
          </div>
        </div>
      </section>

      {/* ================= WHY INVEST ================= */}
      <section className="bg-white mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
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

      {/* ================= HOW PEVONA SUPPORTS ================= */}
      <section className="bg-white mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-[60px] xl:px-[80px] 2xl:px-[100px] grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Section - Image */}
          <div className="relative w-full h-[400px] md:h-[550px] lg:h-[600px] overflow-hidden rounded-2xl order-2 md:order-1">
            <Image
              src="/images/International-Properties/Mask group (5).png"
              alt="Global investment support"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Right Section - Text Content with Timeline */}
          <div className="order-1 md:order-2">
            <h2 className="font-crimson text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px] leading-tight md:leading-[48px] tracking-tight md:tracking-[-1.2px] text-[#002f57] mb-8 md:mb-10 text-left">
              How Pevona Supports Your Global Investment Journey
            </h2>

            <div className="relative pl-0 md:pl-8">
              <div className="space-y-6 md:space-y-8">
              {[
                ["1", "Consultation", "Understand goals, budget & markets"],
                  ["2", "Property Selection", "Match you with vetted opportunities"],
                  ["3", "Compliance & Legal", "Navigate cross-border requirements"],
                  ["4", "Transaction & Management", "Seamless, secure, end-to-end support"],
                ].map(([n, title, desc], index) => (
                  <div key={n} className="relative flex items-start gap-4 md:gap-6">
                    {/* Pink Circular Marker */}
                    <div className="flex-shrink-0 relative z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#FF69B4] flex items-center justify-center shadow-md">
                      <span className="text-white font-manrope font-bold text-base md:text-lg">{n}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 pt-1">
                      <h3 className="font-crimson text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] text-[#002f57] mb-2 font-semibold">
                    {title}
                  </h3>
                      <p className="font-manrope text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px] text-[#666] leading-[24px] md:leading-[26px]">
                        {desc}
                      </p>
                    </div>
                </div>
              ))}
              </div>
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
                image: "/images/International-Properties/Mask group (6).png",
              },
              {
                title: "Services Offered",
                items: [
                  "Property sourcing & advisory",
                  "Legal & compliance support",
                  "Cross-border financing",
                  "Developer partnerships",
                ],
                image: "/images/International-Properties/Mask group (7).png",
              },
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-[350px]">
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
      <section className="bg-white mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="max-w-7xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/International-Properties/Compliance & Transparency.png"
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
      <section className="pt-16 bg-[#FAFAFA] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
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
              className="inline-block bg-[#002f57] text-white px-8 py-3 rounded-[8px] font-manrope font-semibold text-[16px] sm:text-[18px] hover:bg-[#003d70] transition-colors"
            >
              Speak to Our Experts
            </Link>
          </div>

          <div className="relative h-[450px] rounded-lg overflow-hidden">
            <Image
              src="/images/International-Properties/investment-process.jpg"
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
