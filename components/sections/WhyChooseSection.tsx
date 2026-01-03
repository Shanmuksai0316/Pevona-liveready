import Image from "next/image";

export default function WhyChooseSection() {
  return (
    <div className="w-full mt-[120px] px-5 350:px-5 480:px-5 650:px-[60px] lg:px-[80px] 1300:px-[80px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px]">
      <h2
        className="
          font-crimson text-[#002f57] tracking-[-1.68px]
          text-[32px] leading-[38px]
          sm:text-[40px] sm:leading-[46px]
          lg:text-[56px] lg:leading-[56px]
          text-center mb-[36px]
        "
      >
        Why Choose Pevona?
      </h2>

      {/* MASONRY COLUMNS */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-[16px]">

        {/* 1 */}
        <Card>
          <Icon iconPath="/images/proven expertise 1.svg" />
          <Title>Proven Expertise</Title>
          <Text>
            Decades of combined experience across lettings, management, and UK property investments.
          </Text>
        </Card>

        {/* 2 */}
 <ImageCard
          title="Transparent Process"
          img="/images/Transparent Process.png"
          text="Every step is clear, compliant, and designed to build lasting trust."
        />


        {/* 3 */}
 <Card tall>
          <Icon iconPath="/images/Trusted Partner Network.svg" />
          <Title>Trusted Partner Network</Title>
          <Text>
            Building strong alliances with trusted partners to ensure seamless transactions, transparent dealings, and lasting value in every real estate project.
          </Text>
        </Card>

        {/* 4 */}
    <ImageCard
          title="End-to-End Solutions"
          img="/images/Home%20page/home-End-to-End%20Solutions-sec-dsk.webp"
          text="From tenant placement to portfolio growth - we manage it all seamlessly."
        />


        {/* 5 */}
        <Card>
          <Icon iconPath="/images/complainence 1.svg" />
          <Title>Compliance First</Title>
          <Text>
            We operate with full adherence to UK housing, licensing, & data protection standards.
          </Text>
        </Card>

        {/* 6 */}
  <ImageCard
          title="Best Properties on the Market"
          img="/images/Best Properties on the Market image.png"
          text="Access to premium listings & verified opportunities through Zoopla integration."
        />


        {/* 7 – last text card */}
               <Card>
          <Icon iconPath="/images/workflow_18119733 1.svg" />
          <Title>Streamlined Management Process</Title>
          <Text>
            Digital tools that simplify communication, reporting, and performance tracking.
          </Text>
        </Card>

        {/* 8 */}
              <ImageCard
          title="Client-Focused Approach"
          img="/images/Client-Focused Approach image.png"
          text="Tailored strategies that protect your property and maximise long-term returns."
        />


        {/* 9 – last text card */}
        <Card tall>
          <Icon iconPath="/images/Time & Stress Saving.svg" />
          <Title>Time & Stress Saving</Title>
          <Text>
            Simplifying your real estate journey with efficient processes, expert guidance, and seamless coordination - saving you time, effort, and stress.
          </Text>
        </Card>
      </div>
    </div>
  );
}

/* ================= TEXT CARD ================= */

function Card({
  children,
  tall = false,
}: {
  children: React.ReactNode;
  tall?: boolean;
}) {
  return (
    <div
      className={`
        bg-white border border-[rgba(0,0,0,0.12)]
        rounded-[16px]
        p-[32px]
        mb-[16px]
        break-inside-avoid
        flex flex-col justify-between
        h-auto
        ${tall ? "md:h-[344px]" : "md:h-[234px]"}
      `}
    >
      {children}
    </div>
  );
}

/* ================= IMAGE CARD ================= */

function ImageCard({
  title,
  img,
  text,
}: {
  title: string;
  img: string;
  text: string;
}) {
  return (
    <div
      className="
        bg-white border border-[rgba(0,0,0,0.12)]
        rounded-[16px]
        mb-[16px]
        break-inside-avoid
        h-auto md:h-[344px]
        flex flex-col
      "
    >
      <h4 className="px-[25px] pt-[20px] font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
        {title}
      </h4>

      <div className="relative w-[calc(100%-32px)] h-[200px] min-h-[200px] min-w-0 mx-[16px] my-[12px] rounded-[16px] overflow-hidden">
        <Image src={img} alt={title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" unoptimized />
      </div>

      <p className="px-[25px] pb-[20px] font-manrope font-normal text-[18px] leading-[28px] text-[#333333]">
        {text}
      </p>
    </div>
  );
}

/* ================= SMALL PARTS ================= */


function Icon({ iconPath }: { iconPath: string }) {
  return (
    <div className="mb-[20px]">
      <Image 
        src={iconPath} 
        alt="Card icon" 
        width={36} 
        height={36} 
        className="object-contain"
        unoptimized
      />
    </div>
  );
}

function Title({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] mb-[8px]">
      {children}
    </h4>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-manrope font-normal text-[18px] leading-[28px] text-[#333333]">
      {children}
    </p>
  );
}







// "use client";

// import Image from "next/image";

// type CardProps = {
//   title: string;
//   description: string;
//   image?: string;
// };

// const Card = ({ title, description, image }: CardProps) => {
//   return (
//     <div
//       className="
//         group bg-white rounded-2xl p-6
//         shadow-[0_10px_30px_rgba(0,0,0,0.08)]
//         transition-all duration-300 ease-out
//         hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
//       "
//     >
//       {image && (
//         <div className="relative h-48 mb-5 rounded-xl overflow-hidden">
//           <Image
//             src={image}
//             alt={title}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-105"
//           />
//         </div>
//       )}

//       <h3 className="text-xl font-semibold text-[#0b2a4a] mb-2">
//         {title}
//       </h3>

//       <p className="text-[15px] leading-relaxed text-[#5f6b7a]">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default function WhyChoosePevona() {
//   return (
//     <section className="bg-black py-24 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <h2 className="text-center text-4xl md:text-5xl font-semibold text-[#123b63] mb-20">
//           Why Choose Pevona?
//         </h2>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <Card
//             title="Proven Expertise"
//             description="Decades of combined experience across lettings, management, and UK property investments."
//           />

//           <Card
//             title="End-to-End Solutions"
//             description="From tenant placement to portfolio growth – we manage it all seamlessly."
//             image="/images/property-1.jpg"
//           />

//           <Card
//             title="Streamlined Management Process"
//             description="Digital tools that simplify communication, reporting, and performance tracking."
//           />

//           <Card
//             title="Transparent Process"
//             description="Every step is clear, compliant, and designed to build lasting trust."
//             image="/images/meeting.jpg"
//           />

//           <Card
//             title="Compliance First"
//             description="We operate with full adherence to UK housing, licensing, and data protection standards."
//           />

//           <Card
//             title="Client-Focused Approach"
//             description="Tailored strategies that protect your property and maximise long-term returns."
//             image="/images/handshake.jpg"
//           />

//           <Card
//             title="Trusted Partner Network"
//             description="Building strong alliances with trusted partners to ensure seamless, transparent transactions."
//           />

//           <Card
//             title="Best Properties on the Market"
//             description="Access to premium listings and verified opportunities through Zoopla integration."
//             image="/images/property-2.jpg"
//           />

//           <Card
//             title="Time & Stress Saving"
//             description="Efficient processes, expert guidance, and seamless coordination that saves you time and effort."
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
