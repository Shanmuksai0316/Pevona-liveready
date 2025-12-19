import Image from "next/image";
import { getImageUrl } from "@/lib/images";
import type { StrapiProperty } from "@/types/strapi";

interface PropertyDetailProps {
  property: StrapiProperty;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  const { attributes } = property;
  const mainImage = attributes.gallery?.data?.[0]
    ? getImageUrl(attributes.gallery.data[0])
    : "/placeholder.jpg";

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden">
          <Image
            src={mainImage}
            alt={attributes.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div>
          <h1 className="font-crimson text-4xl md:text-5xl font-bold text-pevona-dark mb-4">
            {attributes.title}
          </h1>
          <p className="font-crimson text-3xl font-semibold text-pevona-green mb-6">
            {attributes.currency} {attributes.price.toLocaleString()}
          </p>
          <div className="flex gap-6 mb-6">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
              <span className="font-manrope text-lg">{attributes.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span className="font-manrope text-lg">{attributes.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"></path>
              </svg>
              <span className="font-manrope text-lg">{attributes.area} sq.ft</span>
            </div>
          </div>
          <p className="font-manrope text-lg text-gray-600 mb-6">
            {attributes.address}, {attributes.city}, {attributes.state} {attributes.zipcode}
          </p>
          {attributes.short_description && (
            <p className="font-manrope text-base text-gray-700 mb-6">
              {attributes.short_description}
            </p>
          )}
        </div>
      </div>
      
      {attributes.description && (
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="font-crimson text-3xl font-bold text-pevona-dark mb-4">Description</h2>
          <div dangerouslySetInnerHTML={{ __html: attributes.description }} />
        </div>
      )}
      
      {attributes.gallery?.data && attributes.gallery.data.length > 1 && (
        <div className="mb-12">
          <h2 className="font-crimson text-3xl font-bold text-pevona-dark mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {attributes.gallery.data.slice(1).map((image) => (
              <div key={image.id} className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={getImageUrl(image)}
                  alt={attributes.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}






