import Image from "next/image";
import Link from "next/link";

export default function BueaCameroonProject() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Project Hero */}
      <section className="max-w-[1400px] mx-auto mt-[100px] lg:mt-[120px] mb-[60px] 650:mb-[80px] lg:mb-[100px] 1500:mb-[130px] 1600:mb-[150px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px] sm:min-h-[450px] lg:min-h-[520px] rounded-[24px] overflow-hidden bg-[#002f57]">
          <div className="p-8 sm:p-12 lg:p-16 text-white flex flex-col justify-center">
            <h1 className="font-crimson text-[28px] sm:text-[36px] md:text-[42px] leading-tight mb-4">
              Shopping Centre – Buea, Cameroon
            </h1>
            <p className="font-manrope text-[14px] sm:text-[15px] leading-[20px] sm:leading-[24px] text-white/80 max-w-md mb-6">
              A modern mixed-use commercial development designed for retail,
              offices, and long-term investment growth.
            </p>
            <Link
              href="#enquiry"
              className="bg-white text-[#002f57] px-6 py-3 rounded-[8px] text-sm sm:text-base font-manrope font-semibold w-fit hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Register Your Interest
            </Link>
          </div>

          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-full min-h-[300px]">
            <Image
              src="/images/International-Properties/buea-cameroon.jpg"
              alt="Shopping Centre – Buea, Cameroon"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Project Highlights */}
      <section className="max-w-6xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] 650:mb-[80px] lg:mb-[100px] 1500:mb-[130px] 1600:mb-[150px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
        <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/International-Properties/buea-cameroon-view.jpg"
            className="object-cover rounded-xl"
            alt="Project view"
            fill
            unoptimized
          />
        </div>

        <div>
          <h2 className="font-crimson text-[24px] sm:text-[28px] mb-6 text-[#002f57]">
            Project Highlights
          </h2>
          <ul className="space-y-4 font-manrope text-sm sm:text-base text-gray-700">
            <li>• Prime location in Buea city</li>
            <li>• Retail & commercial spaces</li>
            <li>• Modern architectural design</li>
            <li>• Flexible unit sizes</li>
            <li>• Secure access & parking</li>
          </ul>
        </div>
      </section>

      {/* Masterplan Overview */}
      <section className="max-w-6xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] 650:mb-[80px] lg:mb-[100px] 1500:mb-[130px] 1600:mb-[150px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <h2 className="font-crimson text-[24px] sm:text-[28px] mb-4 text-[#002f57]">
            Masterplan Overview
          </h2>
          <p className="font-manrope text-gray-600 text-sm sm:text-base leading-relaxed">
            The masterplan prioritizes accessibility, footfall, and tenant visibility,
            ensuring long-term rental income and capital appreciation.
          </p>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/International-Properties/buea-cameroon-masterplan.jpg"
            className="object-cover rounded-xl"
            alt="Masterplan"
            fill
            unoptimized
          />
        </div>
      </section>

      {/* Why Invest */}
      <section className="max-w-6xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] 650:mb-[80px] lg:mb-[100px] 1500:mb-[130px] 1600:mb-[150px] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div>
          <h2 className="font-crimson text-[24px] sm:text-[28px] mb-4 text-[#002f57]">
            Why Invest Here
          </h2>
          <ul className="space-y-3 font-manrope text-sm sm:text-base text-gray-700">
            <li>✔ High demand retail zone</li>
            <li>✔ Growing urban population</li>
            <li>✔ Attractive rental yields</li>
            <li>✔ Long-term capital growth</li>
          </ul>
        </div>

        <div className="relative w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden">
          <Image
            src="/images/International-Properties/buea-cameroon-investment.jpg"
            className="object-cover rounded-xl"
            alt="Investment discussion"
            fill
            unoptimized
          />
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry" className="max-w-4xl mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px]">
        <h2 className="font-crimson text-[26px] sm:text-[30px] md:text-[36px] text-center mb-10 text-[#002f57]">
          Register Your Interest
        </h2>

        <form className="bg-gray-50 p-6 sm:p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <input
            className="p-3 rounded border border-[rgba(0,0,0,0.12)] font-manrope text-sm sm:text-base focus:outline-none focus:border-[#002f57]"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            className="p-3 rounded border border-[rgba(0,0,0,0.12)] font-manrope text-sm sm:text-base focus:outline-none focus:border-[#002f57]"
            placeholder="Email Address"
            required
          />
          <input
            type="tel"
            className="p-3 rounded border border-[rgba(0,0,0,0.12)] font-manrope text-sm sm:text-base focus:outline-none focus:border-[#002f57]"
            placeholder="Phone Number"
          />
          <input
            className="p-3 rounded border border-[rgba(0,0,0,0.12)] font-manrope text-sm sm:text-base focus:outline-none focus:border-[#002f57]"
            placeholder="Country"
          />
          <textarea
            className="p-3 rounded border border-[rgba(0,0,0,0.12)] font-manrope text-sm sm:text-base md:col-span-2 resize-none focus:outline-none focus:border-[#002f57]"
            placeholder="Message"
            rows={4}
          />
          <button
            type="submit"
            className="bg-[#002f57] text-white py-3 rounded-md md:col-span-2 font-manrope font-semibold text-sm sm:text-base hover:bg-[#0073B5] transition-colors"
          >
            Submit Enquiry
          </button>
        </form>
      </section>
    </div>
  );
}

