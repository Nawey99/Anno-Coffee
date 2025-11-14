import type { Metadata } from "next";
import { Raleway, Lato } from "next/font/google";
import "./globals.css";
import "../animations.css";
import "../styles/typography.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-secondary",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anno Coffee | Ethiopian Green Coffee Importers",
  description: "Discover authentic Ethiopian green coffee from Anno's highlands. Family-owned, sustainably sourced, and crafted with tradition.",
  keywords: ["Ethiopian coffee", "green coffee", "Anno Coffee", "coffee importers"],
  openGraph: {
    title: "Anno Coffee",
    description: "Authentic Ethiopian green coffee from Anno's highlands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.variable} ${lato.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/img/Secondary_Logo.png" />
        <meta name="theme-color" content="#08775f" />
        <meta name="robots" content="index,follow" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col relative">
          {/* Background layers for glassmorphism effect */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#DEB887]/10 via-white to-[#08775f]/10 pointer-events-none" />
          <div className="fixed inset-0 opacity-40 pointer-events-none bg-pattern" />
          <div className="fixed inset-0 bg-gradient-to-t from-transparent via-transparent to-[#DEB887]/5 pointer-events-none" />

          {/* Navigation */}
          <Navigation />

          {/* Main Content */}
          <main id="main" tabIndex={-1} className="flex-1 relative z-10 pt-20">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}

