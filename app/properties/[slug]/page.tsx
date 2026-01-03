import { fetchStrapi } from "@/lib/strapi";
import PropertyDetail from "@/components/properties/PropertyDetail";
import type { StrapiProperty } from "@/types/strapi";
import { notFound } from "next/navigation";

export default async function PropertyDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const properties = await fetchStrapi<StrapiProperty[]>(
    `/api/properties?filters[slug][$eq]=${params.slug}&populate[gallery]=*&populate[floor_plans]=*&populate[documents]=*&populate[epc_document]=*&populate[gas_safety_certificate]=*&populate[electrical_safety_report]=*&populate[hmo_licence]=*&populate[seo]=*&populate=*`
  );

  if (!properties?.data || properties.data.length === 0) {
    notFound();
  }

  const property = properties.data[0];

  return <PropertyDetail property={property} />;
}






