import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  return (
    <div className="flex flex-col gap-[26px] items-start px-[135px] w-full mt-[150px]">
      <div className="flex gap-[110px] items-center justify-center w-full">
        <div className="flex-1 flex flex-col gap-[5px] items-start">
          <h2 className="font-crimson text-[56px] leading-[56px] text-[#002f57] tracking-[-1.68px] w-full">
            Explore, Invest, and Live Smarter
          </h2>
          <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333333] w-full">
            Discover market insights, smart investments, and modern living ideas shaping the future of real estate.
          </p>
        </div>
        <Link href="/blog">
          <button className="bg-[#29902e] px-[10px] py-[10px] rounded-[8px] w-[106px] h-[48px]">
            <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">View All</span>
          </button>
        </Link>
      </div>
      <div className="flex gap-[26px] items-center justify-center w-full">
        <div className="flex-1 bg-white border border-[rgba(0,0,0,0.12)] flex flex-col gap-[26px] items-center p-[5px] rounded-[16px]">
          <div className="relative w-full h-[465px] rounded-[12px] overflow-hidden">
            <Image
              src="/images/blog_sec_img.png"
              alt="News 1"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-[10px] left-[9px] bg-[#002f57] px-[6px] py-0 rounded-[16px]">
              <p className="font-manrope font-normal text-[14px] leading-[24px] text-white">Latest update</p>
            </div>
          </div>
          <div className="flex flex-col gap-[26px] items-start w-full">
            <div className="flex flex-col items-start">
              <h4 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] max-w-[322px]">Invest Smart, Live Better</h4>
              <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333333]">
                Explore high-return real estate opportunities designed for modern lifestyles
              </p>
            </div>
            <button className="bg-[#29902e] px-[10px] py-[10px] rounded-[8px] w-[229px] h-[48px]">
              <span className="font-manrope font-semibold text-[18px] leading-[28px] text-white">Book a Consultation</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex flex-col">
          {[
            { image: "/images/Market_Insights_blog_-1.png", title: "Unlock the Future of Modern Real Estate Living" },
            { image: "/images/Market_Insights_blog_-2.png", title: "Smart Investments That Build Lasting Property Value" },
            { image: "/images/Market_Insights_blog_-3.png", title: "Your Complete Guide to Smarter Home Buying Decisions" },
          ].map((item, i) => (
            <div key={i} className={`border-b border-[rgba(51,51,51,0.6)] flex gap-[16px] items-center ${i === 0 ? 'pb-[26px]' : 'py-[26px]'}`}>
              <div className="w-[150px] h-[120px] rounded-[10px] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={120}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h4 className="flex-1 font-crimson font-semibold text-[20px] leading-[30px] text-[#333333]">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}






