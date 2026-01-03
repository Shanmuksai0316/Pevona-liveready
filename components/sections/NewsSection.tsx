import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import { getImageUrl } from "@/lib/images";
import type { StrapiBlog } from "@/types/strapi";

export default async function NewsSection() {
  const blogs = await fetchStrapi<StrapiBlog[]>("/api/blogs?populate=*&sort=publishedAt:desc");
  const blogList = blogs?.data || [];
  
  // Get the first blog for the large card
  const firstBlog = blogList[0];
  
  // Get the next 3 blogs for the smaller cards
  const smallBlogs = blogList.slice(1, 4);

  return (
    <div className="flex flex-col gap-[26px] items-start px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] w-full mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px]">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 lg:gap-[110px] items-start sm:items-center justify-between w-full">
        <div className="flex-1 flex flex-col gap-[5px] items-start">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] text-[#002f57] tracking-tight md:tracking-[-1.68px] w-full">
            Explore, Invest, and Live Smarter
          </h2>
          <p className="font-manrope font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#333333] w-full">
            Discover market insights, smart investments, and modern living ideas shaping the future of real estate.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[26px] items-stretch lg:items-center justify-center w-full">
        {/* Left: Large card with image */}
        {firstBlog && (
          <div className={`w-full lg:flex-1 bg-white border border-[rgba(0,0,0,0.12)] flex flex-col gap-4 sm:gap-6 lg:gap-[26px] items-center p-3 sm:p-4 lg:p-[5px] rounded-[12px] sm:rounded-[16px] overflow-hidden ${blogList.length === 1 ? 'max-w-[600px] mx-auto' : ''}`}>
            <Link href={`/blog/${firstBlog.attributes.slug}`} className="relative w-full h-[250px] sm:h-[350px] md:h-[400px] lg:h-[465px] rounded-[10px] sm:rounded-[12px] overflow-hidden flex-shrink-0">
              <Image
                src={getImageUrl(firstBlog.attributes.featured_image)}
                alt={firstBlog.attributes.title}
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute top-[8px] sm:top-[10px] left-[8px] sm:left-[9px] bg-[#002f57] px-[6px] py-0 rounded-[12px] sm:rounded-[16px]">
                <p className="font-manrope font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-white">Latest update</p>
              </div>
            </Link>
            <div className="flex flex-col gap-4 sm:gap-6 lg:gap-[26px] items-center w-full px-2 sm:px-0">
              <div className="flex flex-col items-center text-center">
                <Link href={`/blog/${firstBlog.attributes.slug}`}>
                  <h4 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[26px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#002f57] hover:opacity-80 transition-opacity md:whitespace-nowrap text-center px-2">{firstBlog.attributes.title}</h4>
                </Link>
                <p className="font-manrope font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[20px] sm:leading-[24px] md:leading-[28px] text-[#333333] w-full break-words mt-2">
                  {firstBlog.attributes.excerpt || "Explore high-return real estate opportunities designed for modern lifestyles"}
                </p>
              </div>
              <Link href={`/blog/${firstBlog.attributes.slug}`} className="w-full sm:w-auto">
                <button className="bg-[#29902e] px-[10px] py-[10px] rounded-[8px] w-full sm:w-[229px] h-[48px]">
                  <span className="font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white">Read More</span>
                </button>
              </Link>
            </div>
          </div>
        )}
        {/* Right: Three smaller cards */}
        {smallBlogs.length > 0 && (
          <div className="w-full lg:flex-1 flex flex-col min-w-0">
            {smallBlogs.map((blog, i) => (
              <Link key={blog.id} href={`/blog/${blog.attributes.slug}`} className={`border-b border-[rgba(51,51,51,0.6)] flex flex-col sm:flex-row gap-3 sm:gap-[16px] items-start sm:items-center hover:opacity-80 transition-opacity min-w-0 ${i === 0 ? 'pb-4 sm:pb-[26px]' : 'py-4 sm:py-[26px]'}`}>
                <div className="w-full sm:w-[150px] h-[120px] sm:h-[120px] rounded-[10px] overflow-hidden flex-shrink-0">
                  <Image
                    src={getImageUrl(blog.attributes.featured_image)}
                    alt={blog.attributes.title}
                    width={150}
                    height={120}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <h4 className="flex-1 font-crimson font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[22px] sm:leading-[26px] md:leading-[30px] text-[#333333] min-w-0 break-words">{blog.attributes.title}</h4>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}






