import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GrmCutz | Premium Barber in Manassas, VA",
  description: "Book your next haircut with GrmCutz. Expert fades, tapers, and grooming inside JazCutz, Manassas. Sharp cuts, chill atmosphere.",
  keywords: ["Manassas Barber", "DMV Barber", "Barber Shop Manassas", "GrmCutz", "Fades", "Tapers", "Mens Grooming"],
  openGraph: {
    title: "GrmCutz | Premium Barber in Manassas, VA",
    description: "Sharp cuts. Clean finish. Book your appointment today.",
    url: "https://grmcutz.com",
    siteName: "GrmCutz",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "GrmCutz Barber Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GrmCutz | Premium Barber in Manassas, VA",
    description: "Sharp cuts. Clean finish. Book now.",
    images: ["/images/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} bg-black text-white antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
