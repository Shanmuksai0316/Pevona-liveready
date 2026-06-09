import Image from "next/image";
import Link from "next/link";
import { fetchStrapi } from "@/lib/strapi";
import type { StrapiProperty } from "@/types/strapi";
import PropertiesFilterSection from "@/components/finding-property/PropertiesFilterSection";
import SellingOverwhelmingSection from "@/components/sell/SellingOverwhelmingSection";

function Card({
  image,
  text,
  large = false,
  small = false,
}: {
  image: string;
  text: string;
  large?: boolean;
  small?: boolean;
}) {
  return (
    <div
      className={`relative w-full min-w-0 rounded-[22px] overflow-hidden ${large
        ? "h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[527px]"
        : small
          ? "h-[200px] sm:h-[240px]"
          : "h-[240px] sm:h-[255px]"
        }`}
    >
      {/* Image */}
      <Image src={image} alt={text} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" unoptimized />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002f57]/90 via-[#002f57]/40 to-transparent" />

      {/* Text */}
      <div className="absolute bottom-0 left-0 p-4 sm:p-6 lg:p-8">
        <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white max-w-full sm:max-w-[320px]">
          {text}
        </p>
      </div>
    </div>
  );
}

export default async function SellPage() {
  const res = await fetchStrapi<StrapiProperty[]>("/api/properties?populate=*");
  const properties = res?.data ?? [];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full h-[850px] lg:h-[760px] overflow-hidden">
        <div className="relative max-w-[1920px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] z-10 h-full">
          {/* Mobile Background */}
          <div className="lg:hidden absolute inset-0 z-0 -mx-5 350:-mx-5 480:-mx-5 650:-mx-[60px]">
            <div className="relative w-full h-[850px] rounded-b-[24px] sm:rounded-b-[30px] overflow-hidden">
              <Image
                src="/images/Sell/Sell-banner-bg-mbl.webp"
                alt="Sell property background mobile"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Desktop Background */}
          <div className="hidden lg:block absolute inset-0 z-0 -mx-[60px] lg:-mx-[80px] 1300:-mx-[80px] 1400:-mx-[80px] 1500:-mx-[100px] 1600:-mx-[130px]">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="/images/Sell/Sell-banner-bg-dsk.webp"
                alt="Sell property background desktop"
                fill
                className="object-cover"
                sizes="100vw"
                unoptimized
                priority
              />
            </div>
          </div>

          {/* Mobile Content - Center Aligned, Bottom 50px */}
          <div className="lg:hidden relative flex items-end justify-center h-[850px] pb-[50px]">
            <div className="max-w-[780px] w-full text-center space-y-4 sm:space-y-6 text-white">
              <h1 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
                Sales Services
              </h1>
              <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
                At Pevona Ltd, we provide structured residential sales services designed to support sellers through each stage of the transaction process, from initial valuation to completion. All services are delivered using reasonable care and skill, supported by a transparent and process-driven approach.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
              >
                Book a Seller Consultation
              </Link>
            </div>
          </div>

          {/* Desktop Content - Original Layout */}
          <div className="hidden lg:block relative max-w-[780px] pt-[200px] sm:pt-[250px] md:pt-[300px] pb-[80px] sm:pb-[120px] md:pb-[150px] space-y-4 sm:space-y-6 text-white">
            <h1 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em]">
              Sales Services
            </h1>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white/90">
              At Pevona Ltd, we provide structured residential sales services designed to support sellers through each stage of the transaction process, from initial valuation to completion. All services are delivered using reasonable care and skill, supported by a transparent and process-driven approach.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[48px] sm:h-[56px] px-4 sm:px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Seller Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Properties List Section */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] 650:mt-[80px] lg:mt-[100px] 1500:mt-[130px] 1600:mt-[150px] mb-[60px] lg:mb-[120px]">
        <div className="max-w-[861px] mx-auto text-center space-y-4 mb-9">
          <h2 className="font-crimson text-[32px] md:text-[66px] leading-tight md:leading-[66px] tracking-tight md:tracking-[-1.98px] text-[#002f57]">
            Featured Properties
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Explore our current listings and find your perfect property.
          </p>
        </div>
        <PropertiesFilterSection properties={properties} limit={6} removePadding removeMarginTop />
      </section>


      {/* Selling Overwhelming Section */}
      <SellingOverwhelmingSection />

      {/* Our Selling Process */}
      <section className="bg-white mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] mb-[60px] sm:mb-0 py-[40px] sm:py-[60px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] flex flex-col lg:flex-row gap-[40px] sm:gap-[60px] lg:gap-[80px] items-start">
          {/* Left Section */}
          <div className="flex-1 w-full max-w-[600px] space-y-6 sm:space-y-8">
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#0073B5]">
              Our Sales Approach
            </p>
            <h2 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.06em] text-[#002F57]">
              Our Sales Approach
            </h2>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333333]">
              We take reasonable steps to assess your property, provide market guidance, develop a
              tailored marketing strategy, promote your property across major platforms, manage
              enquiries and viewings, support negotiation, and liaise with solicitors through to
              completion.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#002f57] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[8px] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#003d70] transition-colors"
            >
              Start Your Sale
            </Link>
          </div>

          {/* Right Section - Timeline */}
          <div className="flex-1 w-full relative">
            {/* Vertical line */}
            <div className="absolute left-[14px] top-[20px] bottom-0 w-[2px] bg-[#002F57] hidden lg:block" />

            <div className="space-y-[40px] sm:space-y-[50px] pl-[40px] sm:pl-[50px] lg:pl-[60px]">
              {[
                {
                  title: "Assess property, provide market guidance, develop tailored strategy",
                },
                {
                  title: "Promote across major platforms",
                },
                {
                  title: "Manage enquiries, viewings, support negotiation",
                },
                {
                  title: "Liaise with solicitors through to completion",

                },
              ].map((step, index) => (
                <div key={index} className="relative flex gap-4 sm:gap-6">
                  {/* Circular bullet point */}
                  <div className="flex-shrink-0 absolute left-[-35px] sm:left-[-45px] lg:left-[-55px] top-[6px]">
                    <div className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px] rounded-full bg-[#002F57] border-2 sm:border-4 border-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-crimson text-[22px] sm:text-[24px] md:text-[26px] leading-[28px] sm:leading-[30px] text-[#002F57]">
                      {step.title}
                    </h3>
                    {/* <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333333]">
                      {step.body}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[120px]">
        <div className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          {/* Title */}
          <h2 className="font-crimson text-[22px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.04em] text-[#002F57] text-center mb-[40px] sm:mb-[60px] md:mb-[80px]">
            What's Included
          </h2>

          {/* Custom Grid - match Figma layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[minmax(220px,auto)] gap-4">
            {/* Left column - top */}
            <div className="lg:row-start-1 lg:col-start-1">
              <Card
                image="/images/5th_What_s_Included_image_-_1.png"
                text="Professional photography and floorplans"
              />
            </div>

            {/* Centre column - tall card spanning both rows */}
            <div className="lg:row-span-2 lg:col-start-2 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[527px]">
              <Card
                image="/images/5th_What_s_Included_image_-_2.png"
                text="Support from offer acceptance through to completion"
                large
              />
            </div>

            {/* Right column - top */}
            <div className="lg:row-start-1 lg:col-start-3">
              <Card
                image="/images/5th_What_s_Included_image_-_3.png"
                text="Regular updates and a single point of contact"
              />
            </div>

            {/* Left column - bottom */}
            <div className="lg:row-start-2 lg:col-start-1">
              <Card
                image="/images/5th_What_s_Included_image_-_4.png"
                text="Listing on major UK property platforms"
              />
            </div>

            {/* Right column - bottom: two cards side by side (40% / 60%) */}
            <div className="lg:row-start-2 lg:col-start-3 grid grid-cols-1 md:[grid-template-columns:0.4fr_0.6fr] gap-4">
              <Card
                image="/images/5th_What_s_Included_image_-_5.png"
                text="Buyer vetting & identity checks"
              />
              <Card
                image="/images/5th_What_s_Included_image_-_6.png"
                text="Viewing coordination and feedback"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Strategy */}
      <section className="max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] flex flex-col lg:flex-row gap-[40px] sm:gap-[60px] lg:gap-[78px] items-center shadow-none">
        <div className="w-full lg:flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Marketing Strategy
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
            Every property is different. We tailor marketing to your audience - whether that's
            buyers looking for a home or investors seeking a long-term asset.
          </p>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
            This may include:
          </p>
          <ul className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80 space-y-2 mt-2">
            <li>• Portal listings with enhanced visibility</li>
            <li>• Social and email outreach to active buyers</li>
            <li>• Highlighting key features and area benefits</li>
            <li>• Focused messaging based on property type and buyer profile</li>
          </ul>
        </div>

        <div className="w-full lg:flex-1 relative max-w-[675px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] min-w-0 rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-none">
          <Image
            src="/images/Sell/Marketing Strategy img.png"
            alt="Marketing strategy"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Legal & Compliance Support */}
      <section className="max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] flex flex-col lg:flex-row gap-[40px] sm:gap-[60px] lg:gap-[78px] items-center shadow-none">
        <div className="w-full lg:flex-1 relative max-w-[675px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-none order-2 lg:order-1">
          <Image
            src="/images/Sell/Legal & Compliance Support image.png"
            alt="Legal and compliance support"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="w-full lg:flex-1 max-w-[589px] space-y-4 order-1 lg:order-2">
          <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
            Legal &amp; Compliance Support
          </h2>
          <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
            Selling a property in the UK requires accurate documentation and regulated checks. We
            assist with:
          </p>
          <ul className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80 space-y-2 mt-2">
            <li>• EPC requirements</li>
            <li>• ID checks and AML compliance</li>
            <li>• Liaison with solicitors during conveyancing</li>
            <li>• Reviewing key documents during the process</li>
          </ul>
        </div>
      </section>

      {/* Property Valuation */}
      <section className="max-w-[1600px] 1920:max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px] flex flex-col lg:flex-row gap-[40px] sm:gap-[60px] lg:gap-[78px] items-center shadow-none">
        <div className="w-full lg:flex-1 max-w-[589px] space-y-6">
          <div className="space-y-4">
            <h2 className="font-crimson text-[22px] md:text-[56px] leading-tight md:leading-[56px] tracking-tight md:tracking-[-1.68px] text-[#002f57]">
              Property Valuation — Understanding your property&apos;s potential market value
            </h2>
            <p className="font-manrope text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-[#333] opacity-80">
              Understanding your property&apos;s potential market value is the first step in the sales process.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#002f57]">
              Our Valuation Approach
            </h3>
            <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333] opacity-80">
              We take reasonable steps to assess your property by considering local market conditions,
              comparable data, property condition, and buyer demand.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#002f57]">
              Important Notice
            </h3>
            <p className="font-manrope text-[14px] sm:text-[15px] leading-[22px] text-[#333] opacity-60 italic">
              Valuations are professional opinions based on information available at the time and do not
              constitute a guaranteed sale price. Market conditions may affect the final outcome.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block mt-2 bg-[#002f57] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[8px] font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] hover:bg-[#003d70] transition-colors"
          >
            Request Valuation
          </Link>
        </div>

        <div className="w-full lg:flex-1 relative max-w-[675px] h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px] min-w-0 rounded-[20px] sm:rounded-[26px] overflow-hidden shadow-none">
          <Image
            src="/images/Sell/Valuation sec image.png"
            alt="Market valuation"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Charges & Fees Section */}
      <section className="bg-white py-[40px] sm:py-[60px] md:py-[80px] lg:py-[120px] mt-[60px] sm:mt-[80px] md:mt-[100px] lg:mt-[140px]">
        <div className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <h2 className="font-crimson text-[32px] md:text-[56px] lg:text-[66px] leading-tight md:leading-[1.05] tracking-tight md:tracking-[-0.04em] text-[#002F57] text-center mb-[40px] sm:mb-[60px] md:mb-[80px]">
            Charges & Fees
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-3">
              <h3 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#002f57]">
                Charges & Fees
              </h3>
              <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                Our sales fees are transparent, fair, and aligned with industry standards. Fees reflect the work undertaken and are confirmed in writing at the point of instruction.
              </p>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-3">
              <h3 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#002f57]">
                Commission Structure
              </h3>
              <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                Sales fees are typically charged as a percentage of the final agreed sale price and are payable upon successful completion of the transaction.
              </p>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-3">
              <h3 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#002f57]">
                Withdrawal & Cancellation
              </h3>
              <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                If the property is withdrawn prior to completion, reasonable and evidenced costs incurred may apply, including marketing, advertising, and administrative costs. All charges will be fair, proportionate, and transparently itemised upon request.
              </p>
            </div>
            <div className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-6 lg:p-8 space-y-3">
              <h3 className="font-crimson font-semibold text-[20px] sm:text-[22px] md:text-[24px] text-[#002f57]">
                Agency Terms
              </h3>
              <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-80">
                The agency arrangement will be defined as either sole agency or multi-agency and confirmed in writing at the point of instruction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="max-w-[1600px] mx-auto px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[40px] 1100:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-8 mb-12">
        <div className="bg-[#f7f7f3] border-l-4 border-[#002f57] p-6 rounded-r-[12px]">
          <p className="font-manrope font-semibold text-[16px] sm:text-[18px] text-[#002f57] mb-2">Important Notice:</p>
          <p className="font-manrope text-[15px] sm:text-[16px] leading-[24px] text-[#333333] opacity-90">
            Pevona Ltd provides professional guidance throughout the sales process; however, market conditions, buyer behaviour, and transaction timelines are outside our control and cannot be guaranteed.
          </p>
        </div>
      </section>
    </div>
  );
}


