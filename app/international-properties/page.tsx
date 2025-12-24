import Image from "next/image";
import Link from "next/link";

export default function InternationalPropertiesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto mt-[100px] lg:mt-[120px] mb-[60px] 650:mb-[80px] lg:mb-[100px] 1500:mb-[130px] 1600:mb-[150px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[450px] lg:min-h-[520px] rounded-[24px] overflow-hidden bg-[#002f57]">
          <div className="p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-center">
            <h1 className="font-crimson text-[28px] sm:text-[36px] md:text-[42px] leading-tight mb-4">
              Your Gateway to <br /> International Property Investments
            </h1>
            <p className="font-manrope text-[14px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-white/80 max-w-md mb-6">
              Explore high-growth markets, diversify your portfolio, and access
              exclusive development opportunities across Africa, Europe, and emerging global regions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-[#002f57] px-6 py-3 rounded-[8px] text-sm sm:text-base font-manrope font-semibold w-fit hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Explore Projects
            </Link>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full min-h-[300px]">
            <Image
              src="/images/International-Properties/hero.jpg"
              alt="International property investment"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1400px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px] text-center">
        <h2 className="font-crimson text-[26px] sm:text-[30px] md:text-[36px] lg:text-[40px] mb-3 text-[#002f57]">
          Featured International Projects
        </h2>
        <p className="font-manrope text-[14px] sm:text-[16px] text-gray-500 mb-12">
          Discover curated developments across global destinations
        </p>

        {/* Project Card */}
        <Link
          href="/international-properties/buea-cameroon"
          className="block max-w-sm mx-auto bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative w-full h-[240px]">
            <Image
              src="/images/International-Properties/buea-cameroon.jpg"
              className="object-cover"
              alt="Shopping Centre – Buea, Cameroon"
              fill
              unoptimized
            />
          </div>
          <p className="font-manrope text-sm p-4 text-gray-700">
            Shopping Centre – Buea, Cameroon
          </p>
        </Link>
      </section>
    </div>
  );
}




