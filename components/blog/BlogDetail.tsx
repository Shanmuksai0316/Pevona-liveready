import Image from "next/image";
import { getImageUrl } from "@/lib/images";
import type { StrapiBlog } from "@/types/strapi";

interface BlogDetailProps {
  blog: StrapiBlog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const { attributes } = blog;
  const imageUrl = attributes.featured_image?.data
    ? getImageUrl(attributes.featured_image.data)
    : "/placeholder.jpg";

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {attributes.featured_image?.data && (
        <div className="relative h-96 w-full rounded-2xl overflow-hidden mb-8">
          <Image
            src={imageUrl}
            alt={attributes.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      
      <header className="mb-8">
        {attributes.category && (
          <span className="inline-block bg-pevona-dark text-white text-sm font-manrope px-3 py-1 rounded-full mb-4">
            {attributes.category}
          </span>
        )}
        <h1 className="font-crimson text-4xl md:text-5xl font-bold text-pevona-dark mb-4">
          {attributes.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-600">
          {attributes.author && (
            <span className="font-manrope">By {attributes.author}</span>
          )}
          {attributes.publishedAt && (
            <span className="font-manrope">
              {new Date(attributes.publishedAt).toLocaleDateString()}
            </span>
          )}
        </div>
      </header>
      
      {attributes.excerpt && (
        <p className="font-manrope text-xl text-gray-700 mb-8 italic">
          {attributes.excerpt}
        </p>
      )}
      
      {attributes.content && (
        <div className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: attributes.content }} />
        </div>
      )}
    </article>
  );
}






