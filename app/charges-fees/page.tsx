import Image from "next/image";
import Link from "next/link";

export default function ChargesFeesPage() {
  return (
    <main className="bg-white text-[#002f57] min-h-screen">
      {/* ================= HERO ================= */}
      <section className="relative h-[520px] w-full rounded-b-[28px] overflow-hidden pt-[100px] lg:pt-[120px]">
        <div className="absolute inset-0 bg-[#002f57]">
          <Image
            src="/images/charges-fees-hero.jpg"
            alt="Charges & Fees"
            fill
            priority
            className="object-cover opacity-30"
            unoptimized
          />
        </div>

        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/95 to-[#002f57]/40" />

        <div className="relative z-10 h-full flex items-center px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
          <div>
            <h1 className="font-crimson text-white text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-4">
              Charges & Fees
            </h1>
            <p className="max-w-[520px] font-manrope text-white/90 text-[16px] lg:text-[18px] leading-[26px] sm:leading-[28px]">
              Clear, transparent and compliant — our fees explained for tenants
              and landlords.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-[100px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] text-center">
        <h2 className="font-crimson text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] mb-4">
          Transparent & Competitive Estate Agency Fees
        </h2>
        <p className="max-w-[820px] mx-auto font-manrope text-[#5F6F7F] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px]">
          Our fees are fully inclusive, clearly structured, and designed to offer
          excellent value with complete transparency and compliance.
        </p>
      </section>

      {/* ================= SALES DEPARTMENT ================= */}
      <Section title="Sales Department">
        <Grid cols={4}>
          <FeeCard title="Sole Agency" value="1.2% – 1.8% of Sale Price incl. VAT" />
          <FeeCard title="Multi-Agency" value="2.5% – 3.5% incl. VAT" />
          <FeeCard title="Premium Concierge" value="1.8% – 2.5% incl. VAT" />
          <FeeCard title="Fixed-Fee Alternative" value="£3,500 – £5,000 (No Sale, No Fee)" />
        </Grid>
      </Section>

      {/* ================= VALUATION / MARKETING ================= */}
      <Section>
        <Grid cols={3}>
          <ListCard
            title="Valuation Services"
            items={[
              "Market Appraisal: Free of charge",
              "Formal Written Valuation: £250",
              "RICS-Compliant Valuation: £750 – £1,500",
            ]}
          />
          <ListCard
            title="Marketing Packages"
            items={[
              "Standard Listing: Included",
              "Premium Package: £350",
              "Luxury Package: £1,000",
              "Global Exposure Add-On: £500 – £1,500",
            ]}
          />
          <ListCard
            title="Transaction Support"
            items={[
              "Standard Sales Progression: Included",
              "Premium Support: £250 – £500",
              "Fast-Track Completion: £750",
            ]}
          />
        </Grid>
      </Section>

      {/* ================= SALES AGENCY FEES ================= */}
      <Section title="Sales Agency Fees">
        <Grid cols={2}>
          <InfoCard
            title="Vendor – Sales Agency Fee"
            price="£1,250 + VAT"
            desc="Comprehensive marketing, valuation, viewings, and sales progression through to completion."
          />
          <InfoCard
            title="Buyer – Representation Fee"
            price="£750 + VAT"
            desc="Dedicated property search, negotiation, and conveyancing support for buyers."
          />
        </Grid>
      </Section>

      {/* ================= SOURCING & INVESTMENT ================= */}
      <Section title="Sourcing & Investment">
        <Grid cols={3}>
          <FeeCard title="Sourcing Fee" value="£1,000 + VAT" />
          <FeeCard title="Purchase Representation" value="0.75% + VAT (of purchase price)" />
          <FeeCard title="Portfolio Setup" value="£500 + VAT" />
          <FeeCard title="Suitability Screening" value="£150 + VAT" />
          <FeeCard title="Annual Management" value="0.50% + VAT" />
        </Grid>
      </Section>

      {/* ================= COMPLIANCE TABLE ================= */}
      <Section title="Compliance">
        <div className="max-w-[900px] mx-auto border border-[rgba(0,0,0,0.12)] rounded-xl overflow-hidden">
          {[
            ["Onboarding", "£250"],
            ["EICR", "£120 – £180"],
            ["Gas Safety", "£75 – £95"],
            ["HMO Licensing", "£250 – £350"],
            ["Safety Pack", "£250 + VAT"],
          ].map(([label, value], i) => (
            <div
              key={i}
              className="flex justify-between px-8 py-5 border-b border-[rgba(0,0,0,0.12)] last:border-none text-[15px] font-manrope"
            >
              <span>{label}</span>
              <span className="font-semibold">{value}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ================= TENANT PAYMENTS ================= */}
      <Section title="Tenant Payments">
        <Grid cols={4}>
          <FeeCard title="Holding Deposit" value="Capped at 1 week's rent" />
          <FeeCard title="Tenancy Deposit" value="Capped at 5 weeks' rent" />
          <FeeCard title="Late Rent Interest" value="3% above BoE base rate" />
          <FeeCard title="Lost Keys" value="Replacement cost" />
        </Grid>
      </Section>

      {/* ================= LETTINGS ================= */}
      <Section title="Lettings Department">
        <Grid cols={4}>
          <FeeCard title="Tenant Introduction Only" value="£1,000 per letting" />
          <FeeCard title="Tenant Find Only" value="6 weeks' rent" />
          <FeeCard title="Letting & Rent Collection" value="13% of rent received" />
          <FeeCard title="Full Management" value="15% of rent received" />
        </Grid>
      </Section>

      {/* ================= PROPERTY MANAGEMENT ================= */}
      <Section title="Property Management Department">
        <Grid cols={5}>
          <MiniCard title="Core Services" />
          <MiniCard title="Compliance & Licensing" />
          <MiniCard title="HMO Support" />
          <MiniCard title="Cost Approval Threshold" desc="£250 per item" />
          <MiniCard title="Emergency Works" desc="Immediate action permitted" />
        </Grid>
      </Section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="py-[90px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      {title && (
        <h3 className="font-crimson text-[24px] sm:text-[28px] text-center mb-12">
          {title}
        </h3>
      )}
      {children}
    </section>
  );
}

function Grid({ cols, children }: { cols: number; children: React.ReactNode }) {
  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    5: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5",
  }[cols] || "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${gridCols} gap-6`}>
      {children}
    </div>
  );
}

function FeeCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl px-6 py-8 text-center hover:shadow-md transition">
      <p className="font-manrope font-semibold mb-2 text-[#002f57]">{title}</p>
      <p className="font-manrope text-[14px] text-[#5F6F7F]">{value}</p>
    </div>
  );
}

function InfoCard({
  title,
  price,
  desc,
}: {
  title: string;
  price: string;
  desc: string;
}) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl px-8 py-8">
      <h4 className="font-manrope font-semibold mb-2 text-[#002f57]">{title}</h4>
      <p className="font-manrope font-semibold mb-3 text-[#002f57]">{price}</p>
      <p className="font-manrope text-[14px] text-[#5F6F7F]">{desc}</p>
    </div>
  );
}

function ListCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl px-8 py-8">
      <h4 className="font-manrope font-semibold mb-4 text-[#002f57]">{title}</h4>
      <ul className="space-y-2 font-manrope text-[14px] text-[#5F6F7F]">
        {items.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({ title, desc }: { title: string; desc?: string }) {
  return (
    <div className="border border-[rgba(0,0,0,0.12)] rounded-xl p-4 text-center text-[14px]">
      <p className="font-manrope font-semibold text-[#002f57]">{title}</p>
      {desc && <p className="font-manrope text-[#5F6F7F] mt-1">{desc}</p>}
    </div>
  );
}

