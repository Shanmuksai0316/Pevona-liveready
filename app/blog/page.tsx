import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import { getImageUrl } from "@/lib/images";
import type { StrapiBlog } from "@/types/strapi";

export default async function BlogPage() {
  const blogs = await fetchStrapi<StrapiBlog[]>("/api/blogs?populate=*&sort=publishedAt:desc");
  const blogList = blogs?.data || [];

  // Get the latest blog for the featured section
  const latestBlog = blogList[0];
  
  // Get remaining blogs for the grid (skip the first one)
  const gridBlogs = blogList.slice(1);

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[150px] pb-[60px] sm:pb-[80px] md:pb-[100px]">
        <div className="text-center space-y-4">
          <h1 className="font-crimson text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-tight tracking-tight text-[#002f57]">
            Blogs
      </h1>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80 max-w-[800px] mx-auto">
            Explore high-return real estate opportunities designed for modern lifestyles.
          </p>
        </div>
      </section>

      {/* Main Article Section - Latest Blog */}
      {latestBlog && (
        <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] sm:mb-[80px]">
          <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col lg:flex-row">
            {/* Left: Content */}
            <div className="flex-1 p-6 sm:p-8 lg:p-[40px] flex flex-col justify-between min-w-0 relative">
              <div className="space-y-4 sm:space-y-6">
                <div className="absolute top-[10px] left-[10px] bg-[#002f57] px-3 py-1 rounded-[8px]">
                  <p className="font-manrope text-[12px] sm:text-[14px] leading-[20px] text-white">Latest update</p>
                </div>
                <div className="pt-8 lg:pt-0 space-y-4 sm:space-y-6">
                  <h2 className="font-crimson text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] leading-tight tracking-tight text-[#002f57]">
                    {latestBlog.attributes.title}
                  </h2>
                  <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
                    {latestBlog.attributes.excerpt || "Explore high-return real estate opportunities designed for modern lifestyles."}
                  </p>
                </div>
              </div>
              <Link
                href={`/blog/${latestBlog.attributes.slug}`}
                className="inline-flex items-center gap-2 font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#002f57] hover:text-[#0073B5] transition-colors mt-4 sm:mt-6"
              >
                Read More →
              </Link>
            </div>

            {/* Right: Image */}
            {latestBlog.attributes.featured_image?.data ? (
              <div className="w-full lg:w-[50%] lg:max-w-[600px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative min-w-0 flex-shrink-0">
                <Image
                  src={getImageUrl(latestBlog.attributes.featured_image)}
                  alt={latestBlog.attributes.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            ) : (
              <div className="w-full lg:w-[50%] lg:max-w-[600px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] relative min-w-0 flex-shrink-0 bg-gray-200">
                <Image
                  src="/images/blog_sec_img.png"
                  alt={latestBlog.attributes.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>
            )}
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      {gridBlogs.length > 0 && (
        <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] sm:mb-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {gridBlogs.map((blog) => {
              const imageUrl = blog.attributes.featured_image?.data
                ? getImageUrl(blog.attributes.featured_image)
                : "/placeholder.jpg";

              return (
                <article
                  key={blog.id}
                  className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col h-[425px]"
                >
                  <div className="relative w-full h-[300px] min-h-[300px] min-w-0 flex-shrink-0">
                    <Image
                      src={imageUrl}
                      alt={blog.attributes.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                    <div className="absolute top-[10px] left-[10px] bg-[#002f57] px-2 py-1 rounded-[6px]">
                      <p className="font-crimson text-[18px] leading-[28px] text-white">
                        {blog.attributes.category || "Insights"}
                      </p>
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-4 flex-1">
                    <h3 className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">
                      {blog.attributes.title}
                    </h3>
                    <Link
                      href={`/blog/${blog.attributes.slug}`}
                      className="inline-flex items-center gap-2 font-manrope text-[14px] sm:text-[16px] leading-[24px] text-[#002f57] hover:text-[#0073B5] transition-colors mt-auto"
                    >
                      Read More →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Empty State */}
      {blogList.length === 0 && (
        <section className="max-w-[1336px] 1920:max-w-[1600px] 1600:max-w-[1330px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[60px] sm:mb-[80px]">
          <div className="text-center py-16">
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              No blog posts found. Please add blog posts in Strapi admin.
            </p>
          </div>
        </section>
        )}
    </div>
  );
}
