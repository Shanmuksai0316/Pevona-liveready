"use client";

import Image from "next/image";
import { getImageUrl } from "@/lib/images";
import type { StrapiBlog } from "@/types/strapi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface BlogDetailProps {
  blog: StrapiBlog;
}

export default function BlogDetail({ blog }: BlogDetailProps) {
  const { attributes } = blog;
  const pathname = usePathname();
  const [currentUrl, setCurrentUrl] = useState("");
  
  const imageUrl = attributes.featured_image?.data
    ? getImageUrl(attributes.featured_image.data)
    : "/placeholder.jpg";

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareTitle = attributes.title;
  const shareText = attributes.excerpt || attributes.title;

  // Social share URLs
  const getShareUrl = (platform: string) => {
    if (!currentUrl) return "#";
    
    switch (platform) {
      case "facebook":
        return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;
      case "instagram":
        return "https://www.instagram.com/"; // Instagram doesn't support direct sharing
      default:
        return "#";
    }
  };

  const handleShare = (platform: string) => {
    const url = getShareUrl(platform);
    if (url && url !== "#") {
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const socialIcons = [
    { name: "facebook", label: "Share on Facebook", icon: "/images/blog-icons/facebook.png", fallback: "f" },
    { name: "instagram", label: "Share on Instagram", icon: "/images/blog-icons/instagram.png", fallback: "📷" },
    { name: "linkedin", label: "Share on LinkedIn", icon: "/images/blog-icons/linkedin.png", fallback: "in" },
    { name: "twitter", label: "Share on Twitter/X", icon: "/images/blog-icons/twitter.png", fallback: "X" },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 max-w-7xl">
      {/* Header */}
      <header className="mb-6 sm:mb-8">
        {attributes.category && (
          <span className="inline-block bg-pevona-dark text-white text-sm font-manrope px-3 py-1 rounded-full mb-4">
            {attributes.category}
          </span>
        )}
        <h1 className="font-crimson text-3xl sm:text-4xl md:text-5xl font-bold text-pevona-dark mb-4">
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
      
      {/* Featured Image - Wider, extends to container edges */}
      {attributes.featured_image?.data && (
        <div className="relative w-[calc(100%+2rem)] sm:w-[calc(100%+3rem)] lg:w-[calc(100%+4rem)] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden mb-6 sm:mb-8 -mx-4 sm:-mx-6 lg:-mx-8">
          <Image
            src={imageUrl}
            alt={attributes.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}
      
      {/* Excerpt */}
      {attributes.excerpt && (
        <p className="font-manrope text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 italic">
          {attributes.excerpt}
        </p>
      )}
      
      {/* Content with Icons on Left (Desktop) / Below (Mobile) */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Left Sidebar - Social Share Icons (Desktop) */}
        <aside className="hidden lg:flex flex-col items-center gap-4 pt-2 sticky top-24 h-fit w-16 flex-shrink-0">
          <div className="text-[#002f57] font-manrope text-sm font-medium mb-2 writing-vertical-rl whitespace-nowrap">
            Share
          </div>
          <div className="flex flex-col gap-3">
            {socialIcons.map((social) => (
              <button
                key={social.name}
                onClick={() => handleShare(social.name)}
                className="w-12 h-12 rounded-full bg-[#002f57] flex items-center justify-center hover:bg-[#003d6b] transition-colors"
                aria-label={social.label}
              >
                {imageErrors[social.name] ? (
                  <span className="text-white font-bold text-sm">
                    {social.fallback}
                  </span>
                ) : (
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={20}
                    height={20}
                    className="filter brightness-0 invert"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [social.name]: true }));
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content */}
        <article className="flex-1 max-w-4xl">
          {attributes.content && (
            <div className="prose prose-lg max-w-none blog-content">
              <div dangerouslySetInnerHTML={{ __html: attributes.content }} />
            </div>
          )}
        </article>
      </div>

      {/* Mobile Share Icons - Horizontal at bottom */}
      <div className="lg:hidden mt-8 pt-6 border-t border-gray-200">
        <div className="flex items-center gap-4">
          <span className="text-[#002f57] font-manrope text-sm font-medium">Share:</span>
          <div className="flex gap-3">
            {socialIcons.map((social) => (
              <button
                key={social.name}
                onClick={() => handleShare(social.name)}
                className="w-10 h-10 rounded-full bg-[#002f57] flex items-center justify-center hover:bg-[#003d6b] transition-colors"
                aria-label={social.label}
              >
                {imageErrors[social.name] ? (
                  <span className="text-white font-bold text-xs">
                    {social.fallback}
                  </span>
                ) : (
                  <Image
                    src={social.icon}
                    alt={social.label}
                    width={18}
                    height={18}
                    className="filter brightness-0 invert"
                    onError={() => {
                      setImageErrors((prev) => ({ ...prev, [social.name]: true }));
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}






