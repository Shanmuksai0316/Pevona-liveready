import { fetchStrapi } from "@/lib/strapi";
import BlogCard from "@/components/blog/BlogCard";
import type { StrapiBlog } from "@/types/strapi";

export default async function BlogPage() {
  const blogs = await fetchStrapi<StrapiBlog[]>("/api/blogs?populate=*&sort=publishedAt:desc");

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="font-crimson text-5xl font-bold text-pevona-dark mb-8">
        News & Insights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.data?.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}






