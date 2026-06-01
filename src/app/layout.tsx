import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { SITE } from "@/lib/constants";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Atelier di micropigmentazione del cuoio capelluto a Livorno, guidato da Luca Sagona. Risultato naturale, non chirurgico, garantito. Consulenza privata su appuntamento.",
  keywords: [
    "micropigmentazione cuoio capelluto",
    "SMP Italia",
    "Luca Sagona",
    "Livorno",
    "tricopigmentazione",
    "calvizie",
    "scalp micropigmentation Italy",
  ],
  authors: [{ name: SITE.fullName }],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Atelier di micropigmentazione del cuoio capelluto. Goodbye Baldness, Hello Confidence.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="bg-ink text-cream antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Salta al contenuto
        </a>
        <Navbar />
        <main id="top">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
