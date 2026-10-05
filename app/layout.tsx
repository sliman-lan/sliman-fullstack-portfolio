import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BgShapes from "@/components/BgShapes";

export const metadata: Metadata = {
  title: "Glossy Touch - Modern Glass Design Experience",
  description: "Modern Glass Design Experience created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <BgShapes />
        <Navbar />
        <main className="content-wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}