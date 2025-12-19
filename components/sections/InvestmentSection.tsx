import Image from "next/image";

export default function InvestmentSection() {
  return (
    <div
      className="
        relative w-full flex flex-col gap-[10px] items-center overflow-hidden
        py-[120px] sm:py-[160px] lg:py-[204px]
        mt-[100px] sm:mt-[120px] lg:mt-[150px]
      "
    >
      {/* BACKGROUND IMAGE + STRIP */}
      <div className="absolute left-1/2 top-0 w-full transform -translate-x-1/2">
        <Image
          src="/images/investment_opportunities.webp"
          alt="Investment Background"
          width={1336}
          height={711}
          className="
            absolute left-1/2 top-0 object-cover transform -translate-x-1/2
            w-full max-w-[1336px]
          "
          style={{
            borderBottomRightRadius: '16px !important',
            borderBottomLeftRadius: '16px !important',
            overflow: 'hidden',
          }}
          unoptimized
        />

        <div
          className="
            absolute left-1/2 transform -translate-x-1/2
            w-full max-w-[1336px]
            h-[64px] sm:h-[72px] lg:h-[80px]
            bg-[#29902E] flex items-center justify-center
            top-[560px] sm:top-[600px] lg:top-[631px]
            px-4
          "
          style={{
            borderBottomRightRadius: '16px !important',
            borderBottomLeftRadius: '16px !important',
            overflow: 'hidden',
          }}
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

      {/* CONTENT */}
      <div
        className="
          relative z-10 flex flex-col gap-[10px] items-center justify-center
          text-center text-white w-full
          pt-[140px] sm:pt-[160px] lg:pt-[180px]
          px-4
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
