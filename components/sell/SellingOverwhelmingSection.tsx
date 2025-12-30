import Image from "next/image";

const PAGE_PADDING =
  "w-full px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]";

export default function SellingOverwhelmingSection() {
  return (
    <section className={`${PAGE_PADDING} mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]`}>
      <div className="max-w-[1600px] mx-auto">
        <div className="w-full bg-transparent flex flex-col lg:flex-row gap-[40px] sm:gap-[60px] lg:gap-[80px] items-start shadow-none">
          {/* Left Column - Text and Small Image */}
          <div className="w-full lg:flex-1 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h2 className="font-crimson text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
                Selling a property can feel overwhelming
          </h2>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                The paperwork, the pricing, the viewings and the negotiations. Our approach keeps things simple. With clear guidance, transparent updates and a well-defined sales process, you&apos;ll know exactly what to expect from start to finish.
          </p>
        </div>
            {/* Small Image at Bottom Left */}
            <div className="relative w-full max-w-[400px] h-[250px] sm:h-[280px] md:h-[300px] rounded-[20px] overflow-hidden">
            <Image
              src="/images/Sell/2nd_sec_image_-_1.png"
                alt="Keys on blueprint with model house"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          </div>

          {/* Right Column - Large Image */}
          <div className="w-full lg:flex-1 relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px] rounded-[20px] sm:rounded-[26px] overflow-hidden">
            <Image
              src="/images/Sell/2nd_sec_image_-_2.png"
              alt="People signing contract with keys"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}


