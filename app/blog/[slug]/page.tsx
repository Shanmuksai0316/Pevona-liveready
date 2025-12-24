import { fetchStrapi } from "@/lib/strapi";
import BlogDetail from "@/components/blog/BlogDetail";
import type { StrapiBlog } from "@/types/strapi";
import { notFound } from "next/navigation";

export default async function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const blogs = await fetchStrapi<StrapiBlog[]>(
    `/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
  );

  if (!blogs?.data || blogs.data.length === 0) {
    notFound();
  }

  const blog = blogs.data[0];

  return <BlogDetail blog={blog} />;
}






