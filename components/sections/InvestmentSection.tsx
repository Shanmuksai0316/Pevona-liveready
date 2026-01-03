import Image from "next/image";

export default function InvestmentSection() {
  return (
    <div
      className="
        relative w-full flex flex-col gap-[10px] items-center overflow-hidden
        py-[120px] sm:py-[160px] lg:py-[204px]
        mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]
        px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]
      "
    >
      {/* BACKGROUND IMAGE + STRIP */}
      <div className="absolute top-0 bottom-0 left-5 350:left-5 480:left-5 650:left-[60px] lg:left-[80px] 1300:left-[80px] 1400:left-[80px] 1500:left-[100px] 1600:left-[130px] right-5 350:right-5 480:right-5 650:right-[60px] lg:right-[80px] 1300:right-[80px] 1400:right-[80px] 1500:right-[100px] 1600:right-[130px] flex justify-center items-center">
        <div className="relative w-full max-w-[1336px] h-full">
          {/* Mobile Background Image */}
          <div className="relative w-full h-full lg:hidden">
            <Image
              src="/images/Home%20page/home-investment%20opportunities-sec-bg-mbl.webp"
              alt="Investment Background Mobile"
              fill
              className="object-cover rounded-[16px]"
              unoptimized
              priority
            />
          </div>
          {/* Desktop Background Image */}
          <div className="relative w-full h-full hidden lg:block">
        <Image
              src="/images/Home%20page/home-investment%20opportunities-sec-bg-dsk.webp"
              alt="Investment Background Desktop"
            fill
            className="object-cover rounded-[16px]"
          unoptimized
              priority
        />
          </div>

        <div
          className="
              absolute bottom-0 left-0 right-0
              h-[100px] sm:h-[72px] lg:h-[80px]
            bg-[#29902E] flex items-center justify-center
              rounded-b-[16px]
            px-4
          "
        >
          <p
            className="
              font-manrope font-semibold text-white text-center
              text-[14px] leading-[20px]
              sm:text-[18px] sm:leading-[24px]
              lg:text-[22px] lg:leading-[26px]
              whitespace-normal sm:whitespace-nowrap
            "
          >
            Market Research & Sourcing   -   Return on Investment & Financial Modelling   -   Legal Due Diligence   -   Portfolio Management
          </p>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10 flex flex-col gap-[10px] items-center justify-center
          text-center text-white w-full
          pt-[140px] sm:pt-[160px] lg:pt-[180px]
        "
      >
        <h2
          className="
            font-crimson tracking-[-1.68px]
            text-[32px] leading-[38px]
            sm:text-[44px] sm:leading-[48px]
            lg:text-[56px] lg:leading-[56px]
            whitespace-normal sm:whitespace-nowrap
          "
        >
          Investment Opportunities
        </h2>

        <p
          className="
            font-manrope font-normal
            text-[16px] leading-[24px]
            sm:text-[18px] sm:leading-[28px]
            max-w-[670px]
          "
        >
          Pevona identifies high-yield UK properties through detailed research and financial analysis to maximise returns and safeguard your portfolio.
        </p>
      </div>
    </div>
  );
}
