import Image from "next/image";

export default function ClientPortalPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/client-portal-banner.png"
            alt="Client Portal"
            fill
            className="object-cover"
            priority
            unoptimized
            sizes="100vw"
          />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="max-w-[820px] text-center text-white">
            <h1 className="font-crimson text-[2.2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] font-semibold mb-5 leading-tight">
              Secure Your Client Portal
            </h1>
            <p className="font-manrope text-base sm:text-lg md:text-xl leading-[1.7] opacity-90 max-w-[720px] mx-auto">
              Access all your property information in one secure place.
              Track progress, view documents, manage updates, and stay connected anytime, anywhere.
            </p>
            <span className="inline-block mt-7 text-sm font-semibold tracking-wider uppercase text-white opacity-85">
              Coming Soon
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}





