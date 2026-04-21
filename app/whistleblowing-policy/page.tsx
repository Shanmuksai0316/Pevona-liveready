export default function WhistleblowingPolicyPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-8 lg:px-[60px] xl:px-[80px] pt-[100px] sm:pt-[120px] md:pt-[150px]">
        <h1 className="font-crimson text-[28px] sm:text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#002f57] mb-4">
          Pevona Ltd - Whistleblowing Policy
        </h1>
        <p className="font-manrope text-[14px] sm:text-[16px] text-gray-600 mb-8 sm:mb-10 md:mb-12">
          Last Updated: 2026
        </p>

        <div className="prose prose-lg max-w-none">
          <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-12">
            This Whistleblowing Policy explains how Pevona Ltd encourages the reporting of genuine concerns about wrongdoing and how such concerns are handled with confidentiality, fairness, and protection from retaliation.
          </p>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              1. Policy Statement
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              Pevona Ltd is committed to integrity, transparency, and ethical conduct and encourages individuals to raise genuine concerns about wrongdoing.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              2. Scope
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              This policy applies to employees, contractors, consultants, and anyone acting on behalf of Pevona Ltd.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              3. Reportable Concerns
            </h2>
            <ul className="list-disc pl-6 space-y-2 font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              <li>Fraud, financial mismanagement, or dishonesty.</li>
              <li>Breaches of law or regulatory obligations.</li>
              <li>Money laundering or sanctions breaches.</li>
              <li>Data protection or cybersecurity failures.</li>
              <li>Health and safety risks or serious misconduct.</li>
            </ul>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              4. How to Raise a Concern
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              Concerns should be raised confidentially with the Managing Director &amp; MLRO, Mr Peter Banyong, via{" "}
              <a href="mailto:pebans@pevonaltd.co.uk" className="text-[#0073B5] hover:underline">
                pebans@pevonaltd.co.uk
              </a>.
            </p>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              All concerns are handled sensitively and without retaliation.
            </p>
          </section>

          <section className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="font-crimson text-[22px] sm:text-[24px] md:text-[28px] lg:text-3xl font-semibold text-[#002f57] mb-4 sm:mb-5 md:mb-6">
              5. Protection and Investigation
            </h2>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700 mb-4">
              Individuals raising concerns in good faith are protected from retaliation.
            </p>
            <p className="font-manrope text-[16px] md:text-[18px] leading-[26px] md:leading-[28px] text-gray-700">
              Reports are investigated promptly and may result in remedial action or referral to authorities.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
