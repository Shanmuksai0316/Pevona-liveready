import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pevona - Property Management & Investment",
  description: "Expert management, lettings, and investment opportunities across the UK - powered by transparency and modern compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}






