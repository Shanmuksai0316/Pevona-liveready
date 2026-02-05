export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] pt-[100px] sm:pt-[120px] md:pt-[150px] pb-8 sm:pb-12 md:pb-16">
        <h1 className="font-crimson text-[28px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#002f57] mb-4">
          Pevona Ltd — Privacy Policy
        </h1>
        <p className="font-manrope text-[14px] sm:text-[16px] text-gray-600 mb-8 sm:mb-10 md:mb-12">Last Updated: 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-12">
          Pevona Ltd (trading as Pevona) is committed to protecting your personal data. This Privacy Policy explains what data we collect, how we use it, your rights under UK GDPR, and how to contact us regarding any data concerns
          </p>
          
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              1. Who We Are
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              Pevona Ltd is the Data Controller for your information.
            </p>
            <div className="space-y-3 mb-6">
              <div>
                <p className="font-manrope font-semibold text-[16px] md:text-[18px] text-gray-900 mb-2">Registered Address</p>
                <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                  Pevona Ltd<br />
                  Flat 14, Burgundy House<br />
                  25 Liberty Bridge Road<br />
                  London, E20 1AQ
                </p>
              </div>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                ICO Registration Number: ZA123456
              </p>
            </div>
            <div>
              <p className="font-manrope font-semibold text-[16px] md:text-[18px] text-gray-900 mb-2">Data Protection Officer (DPO)</p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Peter Banyong<br />
                Email: <a href="mailto:Pebans@pevonaltd.co.uk" className="text-[#0073B5] hover:underline">Pebans@pevonaltd.co.uk</a><br />
                Phone: <a href="tel:+442036329485" className="text-[#0073B5] hover:underline">+44-203-632-9485</a>
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              2. Scope of Services
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              This policy covers personal data processed across all our service lines, including:
            </p>
              <ol className="list-decimal pl-4 sm:pl-5 md:pl-6 space-y-2 font-manrope text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] text-gray-700">
              <li>Sales & Lettings Agency (Let-Only, Rent Collection, Full Management)</li>
              <li>Property Management</li>
              <li>Investment & Portfolio Management</li>
              <li>Compliance Services (EPC, EICR, Gas Safety, Licensing, AML/KYC)</li>
              <li>Franchise & Branch Operations</li>
            </ol>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              3. Data We Collect
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-6">
              We collect personal data through the following methods:
            </p>
            
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                A. Data You Provide
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                Information you voluntarily submit to us via forms, emails, or phone:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li><strong>Identity Data:</strong> Passport, Driving License.</li>
                <li><strong>Contact Data:</strong> Name, Email, Phone Number, Current Address.</li>
                <li><strong>Financial Data:</strong> Bank details, Proof of funds.</li>
                <li><strong>Property Data:</strong> Title deeds, proof of ownership.</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                B. Data From Third Parties
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                Information we receive from external verification sources:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>Credit Reference Agencies (for tenant referencing).</li>
                <li>Anti-Money Laundering (AML) Databases.</li>
                <li>Solicitors & Developers.</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                C. Technical Data
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                Automated data collection from website interactions:
              </p>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>IP Address & Browser Type.</li>
                <li>Analytics & Usage Data.</li>
                <li>Cookies.</li>
              </ul>
            </div>

            <div className="bg-[#FCE6E9] border-l-4 border-[#002f57] p-4 rounded">
              <p className="font-manrope font-semibold text-[16px] md:text-[18px] text-gray-900 mb-2">Notice: Special Category Data</p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                We process sensitive data (such as criminal record checks or Politically Exposed
                Person status) strictly for AML/KYC compliance and fraud prevention purposes
                under the lawful basis of substantial public interest.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              4. Lawful Bases for Processing
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              We only process your data when we have a legal ground to do so.
            </p>
            <ul className="list-disc pl-6 space-y-3 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li><strong>Performance of Contract:</strong> Necessary to fulfill a contract with you (e.g., Tenancy
                Agreements, processing rent payments, arranging viewings).</li>
              <li><strong>Legal Obligation:</strong> Necessary for compliance with the law (e.g., Right to Rent checks,
                AML checks, HMRC tax reporting).</li>
              <li><strong>Legitimate Interest:</strong> Necessary for running our business (e.g., debt recovery, website
                security, B2B marketing), provided your rights do not override these interests.</li>
              <li><strong>Consent:</strong> Where you have given explicit permission (e.g., third-party marketing, optional
                tracking cookies).</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              5. How We Use Your Data
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              We use your data for specific business purposes depending on the service you use:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li><strong>Lettings Services:</strong> Referencing tenants, drafting agreements, collecting rent, registering
                deposits, and coordinating maintenance.</li>
              <li><strong>Sales Agency:</strong> Verifying ownership, marketing properties, arranging viewings,
                negotiating offers, and sales progression.</li>
              <li><strong>Compliance Services:</strong> Issuing EPC/EICR certificates, Gas Safety checks, and managing
                licensing applications.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              6. Sharing Your Data
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              We may share your data with the following categories of third parties:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-6">
              <li><strong>Professional Advisers:</strong> Solicitors, Surveyors, Bankers, Insurers.</li>
              <li><strong>Service Providers:</strong> IT/System Administrators, CRM providers, Maintenance contractors.</li>
              <li><strong>Regulators:</strong> HMRC, The Property Ombudsman, Local Authorities, Police (upon valid
                request).</li>
              <li><strong>Internal Group:</strong> Franchise branches and Pevona group companies.</li>
            </ul>
            <div>
              <p className="font-manrope font-semibold text-[16px] md:text-[18px] text-gray-900 mb-2">International Transfers:</p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Given our base of international investors, data may be transferred outside the UK. These
                transfers are protected by Standard Contractual Clauses (SCCs) or Adequacy Decisions.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              7. Data Retention
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-6">
              We retain your data only as long as necessary to fulfill the purposes we collected it for.
            </p>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full border-collapse border border-gray-300 mb-4 sm:mb-6 min-w-[600px]">
                <thead>
                  <tr className="bg-[#002f57] text-white">
                    <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Data Type</th>
                    <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Retention Period</th>
                    <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Transaction Records</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">7 Years</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Tax (HMRC) & Legal Claims</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">AML / ID Checks</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">5 Years</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Money Laundering Regulations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Tenancy Agreements</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">6 Years</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Limitation Act 1980</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Marketing Data</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Until Opt-out</td>
                    <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Consent / Legitimate Interest</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              8. Your Rights Under UK GDPR
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li><strong>Right of Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> Ask us to delete your data where there is no good reason for us to
                continue processing it (also known as the "Right to be Forgotten").</li>
              <li><strong>Right to Object:</strong> Object to processing for direct marketing or where we rely on legitimate interest.</li>
              <li><strong>Right to Restrict Processing:</strong> Ask us to suspend the processing of your data.</li>
              <li><strong>Right to Data Portability:</strong> Request the transfer of your data to you or a third party.</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time where we are relying on it to process your data.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12" id="aml">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              9. Anti‑Money Laundering &amp; Compliance
            </h2>
            <div className="mb-4 sm:mb-5 md:mb-6">
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-2">
                <strong>Supervision:</strong> Pevona Ltd (trading as Pevona) is supervised under the Money Laundering Regulations 2017. We conduct identity checks, source‑of‑funds reviews, sanctions screening, and maintain full internal AML controls</p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <strong>MLRO:</strong> Peter Banyong (Nominated Officer) — responsible for AML governance, SAR decisions, and effectiveness reviews.
              </p>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Our Risk‑Based Approach
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                We apply documented Customer Due Diligence (CDD) and Enhanced Due Diligence
                (EDD) proportional to risk, supported by a Firm‑Wide Risk Assessment (FWRA).
                Controls include identity &amp; address verification, beneficial ownership checks
                (corporate/trust clients), and right‑to‑rent (where applicable).
              </p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                We conduct sanctions and PEP screening at onboarding and periodically using the
                HM Treasury consolidated list and electronic tools (e.g., SmartSearch).
              </p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                We maintain ongoing monitoring of active relationships and retain AML records for
                a minimum of 5 years after the relationship/transaction ends.
              </p>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Suspicious Activity Reporting (SAR)
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                We operate robust SAR procedures: staff report suspicions to the MLRO; the
                MLRO evaluates and, where required, submits SARs to the National Crime Agency
                (NCA).
              </p>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Client Money Controls
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                We operate designated client accounts under UKALA Client Money Protection (CMP)
                requirements.
              </p>
            </div>

            <div>
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Downloads
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>
                  <strong>AML Policies, Controls &amp; Procedures (PCP)</strong> —{" "}
                  <a href="/images/Completed - Website Compliance Note (1).pdf" target="_blank" rel="noopener" className="text-[#0073B5] hover:underline">
                  Website Compliance Note.pdf
                  </a>
                </li>
                <li>
                  <strong>Firm‑Wide Risk Assessment (FWRA)</strong> —{" "}
                  <a href="/images/Firm Wide Risk Assessment (FWRA).pdf" target="_blank" rel="noopener" className="text-[#0073B5] hover:underline">
                  Firm‑Wide Risk Assessment (FWRA)
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12" id="accessibility">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              10. Accessibility (Site‑Wide Statement)
            </h2>
            <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
            Commitment:
              </h3>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-6">
              We aim to align with WCAG 2.1 AA across our website.
            </p>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Features
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Keyboard navigation, descriptive alt text, colour contrast, and ARIA
                landmarks to improve screen‑reader navigation.
              </p>
            </div>

            <div>
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Support &amp; Adjustments
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                If you require reasonable adjustments or assistance to
                access our website or services, please contact us and we will help.
              </p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <strong>Contact for accessibility support:</strong>{" "}
                <a href="mailto:admin-pev@pevonaltd.co.uk" className="text-[#0073B5] hover:underline">admin-pev@pevonaltd.co.uk</a> |{" "}
                <a href="tel:+442036329485" className="text-[#0073B5] hover:underline">+44-203-632-9485</a>
              </p>
            </div>
          </section>


          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              11. Contact Us
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact our
              Data Protection Team.
            </p>
            <div className="space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-6">
              <p>
                Address: Flat 14, Burgundy House, 25 Liberty Bridge Road, London, E20 1AQ.
              </p>
              <p>
                Email: <a href="mailto:admin-pev@pevonaltd.co.uk" className="text-[#0073B5] hover:underline">admin-pev@pevonaltd.co.uk</a>
              </p>
              <p>
                Phone: <a href="tel:+442036329485" className="text-[#0073B5] hover:underline">+44-203-632-9485</a> | <a href="tel:+447944228811" className="text-[#0073B5] hover:underline">+447944-228811</a>
              </p>
            </div>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              You also have the right to lodge a complaint with the Information Commissioner's Office (ICO) if you believe your data protection rights have been breached. Visit <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-[#0073B5] hover:underline">ico.org.uk</a> for more information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}






