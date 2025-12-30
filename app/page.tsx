import Hero from "@/components/sections/Hero";
import FeaturedProperties from "@/components/sections/FeaturedProperties";
import AboutSection from "@/components/sections/AboutSection";
import ResultsSection from "@/components/sections/ResultsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import InvestmentSection from "@/components/sections/InvestmentSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import NewsSection from "@/components/sections/NewsSection";
import { fetchStrapi } from "@/lib/strapi";

type HomePageCMS = {
  hero_title: string;
  hero_subtitle: string;
  hero_button_text: string;
};

export default async function HomePage() {
  // Try to fetch hero content from Strapi single type `home-page`
  let heroTitle: string | undefined;
  let heroSubtitle: string | undefined;
  let heroButtonText: string | undefined;

  const res = await fetchStrapi<HomePageCMS>("/api/home-page");
  const attrs = (res as any)?.data?.attributes as HomePageCMS | undefined;

  if (attrs) {
    // Only override defaults when Strapi actually has non-empty values
    if (attrs.hero_title && attrs.hero_title.trim().length > 0) {
      heroTitle = attrs.hero_title;
    }
    if (attrs.hero_subtitle && attrs.hero_subtitle.trim().length > 0) {
      heroSubtitle = attrs.hero_subtitle;
    }
    if (attrs.hero_button_text && attrs.hero_button_text.trim().length > 0) {
      heroButtonText = attrs.hero_button_text;
    }
  }

  return (
    <>
      <Hero title={heroTitle} subtitle={heroSubtitle} buttonText={heroButtonText} />
      <FeaturedProperties />
      <AboutSection />
      <ResultsSection />
      <SolutionsSection />
      <InvestmentSection />
      <ProcessSection />
      <WhyChooseSection />
      <NewsSection />
    </>
  );
}
