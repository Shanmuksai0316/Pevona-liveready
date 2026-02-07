export default function AMLCompliancePage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] pt-[100px] sm:pt-[120px] md:pt-[150px]">
        <h1 className="font-crimson text-[28px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#002f57] mb-4">
          Pevona Ltd — AML &amp; Compliance
        </h1>
        <p className="font-manrope text-[14px] sm:text-[16px] text-gray-600 mb-8 sm:mb-10 md:mb-12">The Pevona Ltd website presents property services including lettings, property management, investment services and buyer/seller information. While HMRC AML supervision registration is pending, the company applies temporary controls to avoid undertaking regulated estate agency transactional activity.</p>

        <div className="prose prose-lg max-w-none">
        
  <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6" style={{ lineHeight: "55px" }}>
              Website references used
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li>About page confirms service scope: lettings, property management, investment services and buyer/seller journey content.</li>
              <li>Privacy Policy references AML/KYC databases and retention of AML/ID checks for 5 years.</li>
              <li>Terms mention AML/KYC checks as part of compliance services.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6" style={{ lineHeight: "55px" }}>
              Controls implemented (to be evidenced by screenshots/change log)
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li>Publish AML &amp; Compliance page and upload the public AML &amp; Compliance Statement PDF.</li>
              <li>Disable sales transactional CTAs (e.g., &quot;Make an offer&quot;, sales negotiations, booking sales viewings) until HMRC approval is confirmed.</li>
              <li>Add &quot;AML registration pending&quot; notice on sales pages where sales listings remain visible for preview.</li>
              <li>Do not claim &quot;HMRC registered/supervised&quot; until the HMRC AML supervision number is issued.</li>
              <li>Retain evidence: dated screenshots of pages, sitemap/menu entries, and files uploaded.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
