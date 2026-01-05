import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import { getImageUrl } from "@/lib/images";
import type { StrapiBlog } from "@/types/strapi";

export default async function MarketInsightsPage() {
  const blogs = await fetchStrapi<StrapiBlog[]>("/api/blogs?populate=*&sort=publishedAt:desc");
  const blogList = blogs?.data || [];
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      {/* Desktop Layout */}
      <section className="hidden lg:block relative w-full h-[760px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="relative w-full h-[760px] min-h-[760px] rounded-b-[24px] sm:rounded-b-[30px] lg:rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Market Insights/Market_Insights_banner.png"
                alt="Examining business documents"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
              />
            </div>
          </div>
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] z-10">

          <div className="relative max-w-[780px] mt-4 sm:mt-6 md:mt-10 space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Market Insights
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              Simple updates and clear snapshots to help you understand today's UK property
              market.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Layout */}
      <section className="lg:hidden relative w-full h-[850px] overflow-hidden">
        <div className="relative w-full h-[850px] rounded-b-[24px] overflow-hidden">
            <Image
            src="/images/Market Insights/market-insights-bg-mbl.png"
              alt="Examining business documents"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

        {/* Content positioned 50px from bottom, center-aligned */}
        <div className="absolute bottom-[50px] left-0 right-0 flex flex-col items-center px-5 sm:px-8 py-8 space-y-4 sm:space-y-6 text-white text-center">
            <h1 className="font-crimson text-[28px] sm:text-[32px] leading-tight tracking-tight max-w-[600px]">
              Market Insights
            </h1>
          <p className="font-manrope text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] max-w-[600px]">
              Simple updates and clear snapshots to help you understand today's UK property
              market.
            </p>
        </div>
      </section>

      {/* Market Overview */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Market Overview
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            The property landscape continues to shift with changing rates, strong tenant demand,
            and region-led growth. Here's a quick look at the key factors shaping investment
            decisions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          {[
            "Strong rental demand across major cities",
            "Regional affordability attracting new buyers",
            "Regeneration areas maintaining steady growth",
            "Energy performance standards influencing choices",
            "Mortgage rates gradually stabilizing",
          ].map((item) => (
            <div
              key={item}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-5 flex items-center justify-center min-h-[100px]"
            >
              <p className="font-manrope font-semibold text-[20px] leading-[30px] text-[#002f57] text-center">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Snapshots */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-4 max-w-[1035px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Regional Snapshots
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Short summaries of how key UK regions are performing:
          </p>
        </div>

        <div className="flex flex-col gap-[26px] w-full">
          {/* Top row - London and Manchester */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* London */}
            <div className="relative w-full h-[300px] min-h-[300px] min-w-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/Market Insights/Regional_Snapshots_img_-_1.png"
                alt="London - Parliament and Big Ben"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  London
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Reliable demand across most boroughs with strong rental movement and long-term
                  growth.
                </p>
              </div>
            </div>

            {/* Manchester */}
            <div className="relative w-full h-[300px] min-h-[300px] min-w-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/Market Insights/Regional_Snapshots_img_-_2.png"
                alt="Manchester cityscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Manchester
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  High tenant interest, strong yields, and ongoing development activity.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row - Birmingham, Leeds, Liverpool */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Birmingham */}
            <div className="relative w-full h-[300px] min-h-[300px] min-w-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/Market Insights/Regional_Snapshots_img_-_3.png"
                alt="Birmingham cityscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Birmingham
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Increasing appeal driven by new transport links and city-wide regeneration.
                </p>
              </div>
            </div>

            {/* Leeds */}
            <div className="relative w-full h-[300px] min-h-[300px] min-w-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/Market Insights/Regional_Snapshots_img_-_4.png"
                alt="Leeds cityscape"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Leeds
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Stable performance supported by business hubs and strong education sectors.
                </p>
              </div>
            </div>

            {/* Liverpool */}
            <div className="relative w-full h-[300px] min-h-[300px] min-w-0 rounded-[16px] overflow-hidden">
              <Image
                src="/images/Market Insights/Regional_Snapshots_img_-_5.png"
                alt="Liverpool street"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Liverpool
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Attractive pricing with steady rental demand and regeneration-led activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-[15px] lg:mx-auto mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
        <div className="flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
        <div className="flex-1 relative w-full max-w-[675px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="/images/Market Insights/Market_Insights_blog_-1.png"
            alt="Business person planning"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 675px"
            unoptimized
          />
        </div>

          <div className="w-full lg:flex-1 max-w-[589px] space-y-[12px] order-1 lg:order-2 p-[5%] lg:pr-[5%] lg:pl-0 lg:pt-0 lg:pb-0">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Key Trends
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              Quick insights into what's shaping investment choices
            </p>
          </div>
          <div className="space-y-2">
            {[
              "Higher-yield northern areas gaining more attention",
              "Regeneration corridors showing long-term potential",
              "Student-friendly markets remaining stable",
              "Energy-efficient homes rising in demand",
            ].map((trend) => (
              <div key={trend} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-[11px] flex-shrink-0" />
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {trend}
                </p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Notes */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-[15px] lg:mx-auto mt-[80px] mb-[60px] lg:mb-[120px]">
        <div className="flex flex-col lg:flex-row gap-[26px] lg:gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px]">
          <div className="w-full lg:flex-1 max-w-[589px] space-y-[12px] p-[5%] lg:pl-[5%] lg:pr-0 lg:pt-0 lg:pb-0">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Regulatory Notes
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              A few essential updates investors should keep in mind:
            </p>
          </div>
          <div className="space-y-2">
            {[
              "EPC requirements are becoming more important for future-proofing",
              "Licensing rules differ by borough and property type",
              "Renting reforms may introduce changes to landlord processes",
            ].map((note) => (
              <div key={note} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-[11px] flex-shrink-0" />
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] min-h-[300px] sm:min-h-[400px] lg:min-h-[450px] min-w-0 rounded-[26px] overflow-hidden">
          <Image
            src="/images/Market Insights/Market_Insights_blog_-2.png"
            alt="Real estate agent showing house model"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 675px"
            unoptimized
          />
          </div>
        </div>
      </section>

      {/* Market Insights Articles */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] lg:mb-[120px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-4 max-w-[1035px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Market Insights
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Smart analysis, trends &amp; investment-ready intelligence for UK property buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {blogList.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col h-[425px]"
            >
              <div className="relative w-full h-[300px] min-w-0 flex-shrink-0">
                <Image
                  src={getImageUrl(blog.attributes.featured_image)}
                  alt={blog.attributes.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-[10px] left-[10px] bg-[#002f57] px-2 py-1 rounded-[6px]">
                  <p className="font-crimson text-[18px] leading-[28px] text-white">Insights</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4 flex-1">
                <h3 className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">
                  {blog.attributes.title}
                </h3>
                <Link
                  href={`/blog/${blog.attributes.slug}`}
                  className="font-manrope text-[18px] leading-[28px] text-[#333] hover:text-[#29902e] transition-colors inline-flex items-center gap-2"
                >
                  Read More
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
