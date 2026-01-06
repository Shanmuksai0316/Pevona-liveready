import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

export const metadata: Metadata = {
  title: "Pevona - Property Management & Investment",
  description: "Expert management, lettings, and investment opportunities across the UK - powered by transparency and modern compliance.",
  icons: {
    icon: "/images/pevona-fav.webp",
    shortcut: "/images/pevona-fav.webp",
    apple: "/images/pevona-fav.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TRX7XMZZ');`,
          }}
        />
      </head>
      <body className="bg-[#FAFAFA]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TRX7XMZZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center px-4">
          <Navbar />
        </div>
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
