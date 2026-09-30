import type { Metadata } from "next";

import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import Whatsapp from "@/component/whatsapp";
import GoBackButton from "@/component/goBackButton";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});
export const metadata: Metadata = {
  title: "Kochhar's Media Planners",
  description: `Kochhar's Media Planners is a full-service branding and marketing agency delivering high-impact cinema, radio, airport, mall, and print advertising. We help brands build trust, visibility, and long-term growth through strategic media placements.`,
  icons: {
    icon: "/imgs/favicon.svg",
    apple: "/imgs/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${poppins.variable}`}>
        <p className="w-full text-center bg-red-600  z-120">
          Site under maintainance
        </p>
        <Navbar />
        <GoBackButton />
        {children}
        <Whatsapp />
        <Footer />
      </body>
    </html>
  );
}
