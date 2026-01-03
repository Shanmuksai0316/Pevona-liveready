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
      <body className="bg-[#FAFAFA]">
        <div className="fixed top-0 left-0 right-0 z-[9999] flex justify-center px-4">
          <Navbar />
        </div>
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
