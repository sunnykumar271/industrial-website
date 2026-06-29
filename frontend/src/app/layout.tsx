import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";
import "./globals.css";

// ─── Fonts ──────────────────────────────────────────────────────────────────
// Inter: clean, industrial body font — excellent legibility at small sizes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Barlow: condensed display font — gives the industrial, mechanical character
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

// ─── Site-wide Metadata ─────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://precisiondieeng.com"
  ),
  title: {
    default: "PrecisionDie Engineering | Aluminium Extrusion Die Manufacturer",
    template: "%s | PrecisionDie Engineering",
  },
  description:
    "Leading manufacturer of solid, hollow, and semi-hollow aluminium extrusion dies. Die design, correction, and refurbishment services. Based in Vadodara, Gujarat.",
  keywords: [
    "aluminium extrusion die manufacturer",
    "solid extrusion die",
    "hollow extrusion die",
    "semi hollow die",
    "die correction",
    "die refurbishment",
    "die design",
    "Vadodara",
    "Gujarat",
    "India",
  ],
  authors: [{ name: "PrecisionDie Engineering" }],
  creator: "PrecisionDie Engineering",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://precisiondieeng.com",
    siteName: "PrecisionDie Engineering",
    title: "PrecisionDie Engineering | Aluminium Extrusion Die Manufacturer",
    description:
      "Leading manufacturer of aluminium extrusion dies. Solid, hollow, and semi-hollow dies with 8-day lead time.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PrecisionDie Engineering — Aluminium Extrusion Die Manufacturer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrecisionDie Engineering | Aluminium Extrusion Die Manufacturer",
    description:
      "Solid, hollow, and semi-hollow extrusion dies. 8-day lead time. Based in Vadodara, India.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// ─── Root Layout ────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${barlow.variable}`}>
      {/*
       * Applying font CSS variables at <html> level makes them available
       * globally via Tailwind's font-family utilities and CSS var references.
       */}
      <body className="bg-[#F8FAFC] text-[#0F172A] antialiased">
        {children}
      </body>
    </html>
  );
}
