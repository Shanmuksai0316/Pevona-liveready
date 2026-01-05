export default function ResultsSection() {
  return (

    <div className="flex flex-col gap-[36px] items-center justify-center w-full mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] overflow-hidden px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      <div className="flex flex-col gap-[10px] items-center text-center w-full max-w-[800px]">
        <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] text-[#002f57] tracking-tight md:tracking-[-1.68px] w-full">
          Proven Results Backed by Experience
        </h2>
        <p className="font-manrope font-normal text-[14px] sm:text-[16px] lg:text-[18px] leading-[20px] sm:leading-[26px] lg:leading-[28px] text-[#333333] w-full">
          With decades of industry expertise and hundreds of successful sales, we deliver trusted property guidance rooted in performance and reliability.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-[26px] items-center justify-center w-full max-w-[1100px]">
        <div className="flex-1 w-full border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center py-8 lg:p-[26px] text-center">
          <p className="font-crimson font-bold text-[30px] md:text-[42px] text-[#002f57] w-full">500+</p>
          <p className="font-manrope font-light text-[16px] md:text-[22px] text-[#333333] w-full">properties sold</p>
        </div>
        <div className="flex-1 w-full border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center py-8 lg:p-[26px] text-center">
          <p className="font-crimson font-bold text-[30px] md:text-[42px] text-[#002f57] w-full">20</p>
          <p className="font-manrope font-light text-[16px] md:text-[22px] text-[#333333] w-full">years of experience</p>
        </div>
        <div className="flex-1 w-full border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center py-8 lg:p-[26px] text-center">
          <p className="font-crimson font-bold text-[30px] md:text-[42px] text-[#002f57] w-full">50+</p>
          <p className="font-manrope font-light text-[16px] md:text-[22px] text-[#333333] w-full">Awards & Recognitions</p>
        </div>
      </div>
    </div>
  );
}






