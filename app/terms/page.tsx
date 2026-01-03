export default function TermsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] pt-[100px] sm:pt-[120px] md:pt-[150px] pb-8 sm:pb-12 md:pb-16">
        <h1 className="font-crimson text-[28px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#002f57] mb-4">
          Pevona Ltd — Terms & Conditions
        </h1>
        <p className="font-manrope text-[14px] sm:text-[16px] text-gray-600 mb-8 sm:mb-10 md:mb-12">Last Updated: 2025</p>
        
        <div className="prose prose-lg max-w-none">
          <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-12">
            Important information about using Pevona Ltd's services. Please read these terms
            carefully before instructing us.
          </p>
          
          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              1. Introduction
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              These Terms & Conditions constitute a legally binding agreement between Pevona Ltd ("We",
              "Us", "The Agent") and you ("The Client", "You"). By instructing us, accessing our platform, or
              using any of our property services, you explicitly agree to these terms.
            </p>
            <div>
              <p className="font-manrope font-semibold text-[16px] md:text-[18px] text-gray-900 mb-2">Applicable To:</p>
              <ul className="list-disc pl-6 space-y-1 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>Landlords</li>
                <li>Tenants</li>
                <li>Buyers</li>
                <li>Sellers</li>
                <li>Investors</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              2. The Company
            </h2>
            <div className="space-y-3 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <p className="font-semibold text-gray-900">Pevona Ltd</p>
              <p>
                Flat 14, Burgundy House<br />
                25 Liberty Bridge Road<br />
                London, E20 1AQ
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Company Registration: 12345678</li>
                <li>ICO Registration: ZA123456</li>
                <li>PRS Membership: Verified</li>
                <li>UKALA CMP: Verified</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              3. Scope of Services
            </h2>
            
            <div className="mb-6 sm:mb-7 md:mb-8">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Lettings Service Tiers
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
                A comparison of our standard lettings service levels:
              </p>
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <table className="w-full border-collapse border border-gray-300 mb-4 sm:mb-6 min-w-[600px]">
                  <thead>
                    <tr className="bg-[#002f57] text-white">
                      <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Service Inclusion</th>
                      <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Let-Only</th>
                      <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Rent Collection</th>
                      <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-center font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Full Management</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Marketing & Tenant Find</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Referencing & Agreements</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Rent Collection & Arrears</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Maintenance Management</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Inspections & Checkouts</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">No</td>
                      <td className="border border-gray-300 px-4 py-3 text-center font-manrope text-[14px] md:text-[16px] text-gray-700">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Additional Services
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li><strong>Sales Agency:</strong> Applies to vendors and buyers. Includes valuation, marketing, viewings
                  management, offer negotiation, and sales progression.</li>
                <li><strong>Sourcing & Purchasing:</strong> Deal packaging and sourcing services. Fees are payable upon
                  reservation or completion. Non-circumvention clauses strictly apply.</li>
                <li><strong>Compliance Services:</strong> Arrangement of EPC, EICR, Gas Safety, Licensing applications,
                  and AML/KYC checks. These are chargeable services distinct from management fees.</li>
              </ul>
            </div>

            <div className="bg-[#FCE6E9] border-l-4 border-[#002f57] p-4 rounded">
              <p className="font-manrope font-semibold text-[16px] md:text-[18px] text-gray-900 mb-2">Franchise Delivery Notice:</p>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Many services are delivered by independent local
                franchise branches. While all branches adhere to central compliance standards,
                local operational procedures may vary slightly.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              4. Fees & Payments
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              Our Schedule of Fees is the authoritative source for all charges, commissions, and deposit
              information.
            </p>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li><strong>Invoicing:</strong> Fees are due within 14 days of the invoice date.</li>
              <li><strong>Interest:</strong> We charge 3% above the Bank of England base rate on late payments.</li>
              <li><strong>Deposits:</strong> All security deposits are held in government-approved schemes.</li>
              <li><strong>Third-Party Costs:</strong> Costs for certifications (EPC, etc.) are charged in addition to
                management fees.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              5. Maintenance
            </h2>
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Routine Repairs
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Tenants report issues via our maintenance portal. We will obtain authorization for works
                exceeding your agreed limit (typically £250). We may charge an administration fee on works
                arranged.
              </p>
            </div>
            <div>
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Emergency Authority
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                In genuine emergencies where there is a risk to life or significant damage to the property, we
                reserve the right to act immediately to authorize necessary works if we cannot reach you.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              6. Responsibilities
            </h2>
            
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Landlord Obligations
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>Ensure property meets all statutory safety standards (Gas, Electric, Fire).</li>
                <li>Obtain consent to let from mortgage lenders and superior landlords.</li>
                <li>Maintain adequate buildings and contents insurance.</li>
                <li>Inform us if the property requires an HMO or Selective License.</li>
              </ul>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Tenant Obligations
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>Pay rent in full and on the agreed dates.</li>
                <li>Maintain the property in a good, clean condition.</li>
                <li>Allow access for inspections and safety checks (with notice).</li>
              </ul>
            </div>

            <div>
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Buyer & Seller Obligations
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li>Provide accurate Material Information regarding the property.</li>
                <li>Provide valid proof of funds / ownership.</li>
                <li>Cooperate fully with mandatory AML identity checks.</li>
              </ul>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              7. Compliance
            </h2>
            
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Statutory Requirements
              </h3>
              <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                <li><strong>Right to Rent:</strong> Mandatory immigration checks for all adult occupants.</li>
                <li><strong>AML / KYC:</strong> Strict identity and source of funds verification required by law.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Material Information (Transparency)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#002f57] text-white">
                      <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Information Type</th>
                      <th className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 text-left font-manrope font-semibold text-[12px] sm:text-[14px] md:text-[16px]">Requirement</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Tenure</td>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Freehold / Leasehold / Commonhold</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Costs</td>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Council Tax, Service Charges, Ground Rent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Condition</td>
                      <td className="border border-gray-300 px-2 sm:px-3 md:px-4 py-2 sm:py-3 font-manrope text-[12px] sm:text-[14px] md:text-[16px] text-gray-700">Known Physical Defects, Safety Risks</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              8. Legal Terms
            </h2>
            
            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Limitation of Liability
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Our liability for any loss suffered by you is limited to the fees paid by you to us in the
                preceding 12 months. We are not liable for indirect or consequential loss, loss of profit, or
                failure of third-party contractors. Nothing in these terms excludes liability for death or
                personal injury caused by our negligence.
              </p>
            </div>

            <div className="mb-4 sm:mb-5 md:mb-6">
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Termination of Services
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                Agreements may be terminated by written notice (typically 3 months). Upon termination, all
                outstanding fees must be settled immediately.
              </p>
            </div>

            <div>
              <h3 className="font-crimson text-[18px] sm:text-[20px] md:text-[22px] lg:text-2xl font-semibold text-[#002f57] mb-3 sm:mb-4">
                Governing Law
              </h3>
              <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
                These terms are governed by the laws of England & Wales.
              </p>
            </div>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              9. Contact Us
            </h2>
            <div className="space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <p>
                Address: Flat 14, Burgundy House, 25 Liberty Bridge Road, London, E20 1AQ.
              </p>
              <p>
                Email: <a href="mailto:admin-pev@pevonaltd.co.uk" className="text-[#0073B5] hover:underline">admin-pev@pevonaltd.co.uk</a>
              </p>
              <p>
                Phone: <a href="tel:+442036329485" className="text-[#0073B5] hover:underline">+44-203-632-9485</a> | <a href="tel:+447944228811" className="text-[#0073B5] hover:underline">+447944-228811</a>
              </p>
              <p className="mt-4">
                Formal notices should be sent to the registered address above.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}


