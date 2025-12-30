import Link from "next/link";
import Image from "next/image";
import { getImageUrl } from "@/lib/images";
import { formatNumber } from "@/lib/format";
import { getPropertyImages } from "@/lib/property-image-mapping";
import type { StrapiProperty } from "@/types/strapi";

interface PropertyCardProps {
  property: StrapiProperty;
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const { attributes } = property;

  // Use gallery image when available, otherwise try property-specific images, then fallback
  const fallbackImages = [
    "/images/prop_card_image-1.png",
    "/images/prop_card_image-2.png",
    "/images/prop_card_image-3.png",
    "/images/prop_card_image-4.png",
    "/images/prop_card_image-5.png",
    "/images/prop_card_image-6.png",
  ];

  let imageUrl: string;
  
  if (attributes.gallery?.data?.[0]) {
    // Use Strapi gallery image
    imageUrl = getImageUrl(attributes.gallery.data[0]);
  } else {
    // Try to get property-specific images
    const propertyImages = getPropertyImages(attributes.slug, attributes.title);
    if (propertyImages.length > 0) {
      imageUrl = propertyImages[0];
    } else {
      // Fallback to rotating static images
      imageUrl = fallbackImages[(property.id || 0) % fallbackImages.length];
    }
  }

  return (
    <Link href={`/properties/${attributes.slug}`}>
      <div className="bg-white border border-[rgba(0,0,0,0.12)] flex flex-col gap-[26px] pb-[31px] pt-[5px] px-[5px] rounded-[16px] h-full">
        {/* Image wrapper with fixed aspect ratio to avoid vertical stretching */}
        <div className="relative w-full aspect-[4/3] min-h-[200px] min-w-0 rounded-[12px] overflow-hidden">
          <Image
            src={imageUrl}
            alt={attributes.title}
            fill
            className="object-cover rounded-[12px]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-[16px] items-start justify-end px-[16px]">
          <div className="flex items-center justify-between w-full text-[#333333]">
            <p className="font-manrope font-normal text-[22px] leading-[24px]">{attributes.title}</p>
            <p className="font-crimson font-semibold text-[26px] leading-[36px]">
              {attributes.currency || '$'}{formatNumber(attributes.price)}
            </p>
          </div>
          <div className="flex gap-[26px] items-center justify-end w-full">
            <div className="flex items-center gap-[8px]">
              <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="font-manrope font-medium text-[16px] leading-[26px] text-[#333333]">{attributes.bedrooms || 0}</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="font-manrope font-medium text-[16px] leading-[26px] text-[#333333]">{attributes.bathrooms || 0}</span>
            </div>
            <div className="flex items-center gap-[8px]">
              <svg className="w-5 h-5 text-[#333333]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path>
              </svg>
              <span className="font-manrope font-medium text-[16px] leading-[26px] text-[#333333]">{attributes.area || 0} sq.ft</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
