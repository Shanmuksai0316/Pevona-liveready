export default function ResultsSection() {
  return (

    <div className="flex flex-col gap-[36px] items-center justify-center w-full mt-[150px] overflow-hidden">
      <div className="flex flex-col gap-[10px] items-center text-center w-full">
        <h2 className="font-crimson text-[56px] leading-[56px] text-[#002f57] tracking-[-1.68px] w-full">
          Proven Results Backed by Experience
        </h2>
        <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333333] w-full">
          With decades of industry expertise and hundreds of successful sales, we deliver trusted property guidance rooted in performance and reliability.
        </p>
      </div>
      <div className="flex gap-[26px] items-center justify-center px-[200px] w-full">
        <div className="flex-1 border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center p-[26px] text-center">
          <p className="font-crimson font-bold text-[42px] leading-[52px] text-[#002f57] w-full">500+</p>
          <p className="font-manrope font-light text-[22px] leading-[32px] text-[#333333] w-full">properties sold</p>
        </div>
        <div className="flex-1 border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center p-[26px] text-center">
          <p className="font-crimson font-bold text-[42px] leading-[52px] text-[#002f57] w-full">20</p>
          <p className="font-manrope font-light text-[22px] leading-[32px] text-[#333333] w-full">years of experience</p>
        </div>
        <div className="flex-1 border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[8px] items-center justify-center p-[26px] text-center">
          <p className="font-crimson font-bold text-[42px] leading-[52px] text-[#002f57] w-full">50+</p>
          <p className="font-manrope font-light text-[22px] leading-[32px] text-[#333333] w-full">Awards & Recognitions</p>
        </div>
      </div>
    </div>
  );
}






