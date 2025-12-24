import Image from "next/image";

const PAGE_PADDING =
  "w-full px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]";

export default function SellingOverwhelmingSection() {
  return (
    <section className={`${PAGE_PADDING} mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]`}>
      <div className="w-full bg-white rounded-[24px] border border-[rgba(0,0,0,0.08)] flex flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 p-6 sm:p-8 space-y-4">
          <h2 className="font-crimson text-[40px] sm:text-[48px] md:text-[56px] leading-[1.05] tracking-[-1.68px] text-[#002f57]">
            Selling doesn&apos;t have to feel overwhelming
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[26px] text-[#333] opacity-80">
            This section is a placeholder that explains how Pevona simplifies the journey from
            valuation to completion. It can be extended with more detailed copy or dynamic content
            in future iterations.
          </p>
        </div>
        <div className="relative w-full lg:w-[40%] h-[260px] sm:h-[300px] lg:h-auto">
          <Image
            src="/images/Sell/2nd_sec_image_-_1.png"
            alt="Selling overview"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}


