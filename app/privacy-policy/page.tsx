export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="font-crimson text-5xl font-bold text-pevona-dark mb-8">
        Privacy Policy
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section className="mb-8">
          <h2 className="font-crimson text-3xl font-semibold text-pevona-dark mb-4">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pevona Ltd ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard 
            your information when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-crimson text-3xl font-semibold text-pevona-dark mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We may collect information about you in a variety of ways:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Personal information you provide (name, email, phone number)</li>
            <li>Property inquiry information</li>
            <li>Usage data and analytics</li>
            <li>Cookies and tracking technologies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-crimson text-3xl font-semibold text-pevona-dark mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Provide and maintain our services</li>
            <li>Process property inquiries and valuations</li>
            <li>Send you marketing communications (with consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-crimson text-3xl font-semibold text-pevona-dark mb-4">
            Data Protection
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect 
            your personal information. However, no method of transmission over the 
            Internet is 100% secure.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-crimson text-3xl font-semibold text-pevona-dark mb-4">
            Your Rights
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Under GDPR, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Access your personal data</li>
            <li>Rectify inaccurate data</li>
            <li>Request erasure of your data</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="font-crimson text-3xl font-semibold text-pevona-dark mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 mt-2">
            Email: privacy@pevona.com<br />
            Address: [Your Company Address]
          </p>
        </section>
      </div>
    </div>
  );
}






