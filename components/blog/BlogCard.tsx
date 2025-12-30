import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/images";
import type { StrapiBlog } from "@/types/strapi";

interface BlogCardProps {
  blog: StrapiBlog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const { attributes } = blog;
  const imageUrl = attributes.featured_image?.data
    ? getImageUrl(attributes.featured_image.data)
    : "/placeholder.jpg";

  return (
    <Link href={`/blog/${attributes.slug}`}>
      <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
        {attributes.featured_image?.data && (
          <div className="relative h-64 w-full">
            <Image
              src={imageUrl}
              alt={attributes.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}
        <div className="p-6">
          {attributes.category && (
            <span className="inline-block bg-pevona-dark text-white text-sm font-manrope px-3 py-1 rounded-full mb-3">
              {attributes.category}
            </span>
          )}
          <h3 className="font-crimson text-2xl font-semibold text-pevona-dark mb-3">
            {attributes.title}
          </h3>
          {attributes.excerpt && (
            <p className="font-manrope text-base text-gray-600 mb-4 line-clamp-3">
              {attributes.excerpt}
            </p>
          )}
          {attributes.publishedAt && (
            <p className="font-manrope text-sm text-gray-400">
              {new Date(attributes.publishedAt).toLocaleDateString()}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}






