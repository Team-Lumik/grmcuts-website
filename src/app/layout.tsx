import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";


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
  title: "GRMCUTS",
  description: "Book your next haircut with GrmCutz. Expert fades, tapers, and grooming inside JazCutz, Manassas. Sharp cuts, chill atmosphere.",
  keywords: ["Manassas Barber", "DMV Barber", "Barber Shop Manassas", "GrmCutz", "Fades", "Tapers", "Mens Grooming"],
  openGraph: {
    title: "GRMCUTS",
    description: "Sharp cuts. Clean finish. Book your appointment today.",
    url: "https://grmcutz.com",
    siteName: "GRMCUTS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-banner.png",
        width: 1024,
        height: 1024,
        alt: "GRMCUTS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GRMCUTS",
    description: "Sharp cuts. Clean finish. Book now.",
    images: ["/images/og-banner.png"],
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
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
