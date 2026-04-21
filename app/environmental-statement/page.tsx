export default function EnvironmentalStatementPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] pt-[100px] sm:pt-[120px] md:pt-[150px]">
        <h1 className="font-crimson text-[28px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#002f57] mb-4">
          Pevona Ltd - Environmental Statement
        </h1>
        <p className="font-manrope text-[14px] sm:text-[16px] text-gray-600 mb-8 sm:mb-10 md:mb-12">
          Last Updated: 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-12">
            Pevona Ltd operates as a fully online, remote-only property management and lettings business, with one company car used solely for essential operational purposes such as property inspections and compliance visits. The company does not maintain physical branch offices and is structured to minimise environmental impact while maintaining high professional standards.
          </p>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              1. Our Environmental Approach
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li>Remote-first operations significantly reduce commuting-related emissions and office energy consumption.</li>
              <li>The business has a minimal physical footprint with no permanent office premises or on-site utilities.</li>
              <li>A single company vehicle is used only where necessary, with mileage monitored and reviewed regularly.</li>
              <li>All communications and records are handled digitally wherever legally permitted.</li>
              <li>IT equipment is maintained responsibly and disposed of through compliant e-waste channels.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              2. Suppliers &amp; Technology
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li>Pevona prioritises GDPR-compliant cloud and software providers with sustainability commitments.</li>
              <li>Systems are streamlined to avoid duplication and reduce digital waste.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              3. Continuous Improvement
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              Environmental performance is reviewed periodically, including vehicle usage and operational emissions, and this statement is updated as best practice evolves.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
