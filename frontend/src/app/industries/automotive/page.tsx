import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { INDUSTRY_MAP } from "@/constants/industries";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the automotive industry object from the central data map.
 */
const industry = INDUSTRY_MAP["automotive"];

/*
 * ─── Metadata ──────────────────────────────────────────────────────────────
 */
export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  keywords: [
    "automotive aluminium extrusion die",
    "automotive profile die manufacturer",
    "ev battery tray extrusion die",
    "automotive component extrusion tooling",
    "aluminium extrusion dies for vehicles",
  ],
  alternates: {
    canonical: `/industries/automotive`,
  },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: `/industries/automotive`,
    images: [
      {
        url: industry.heroImage,
        alt: industry.heroImageAlt,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: industry.metaTitle,
    description: industry.metaDescription,
    images: [industry.heroImage],
  },
};

/*
 * ─── JSON-LD Structured Data ───────────────────────────────────────────────
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: industry.title,
  description: industry.description,
  url: "https://precisiondieeng.com/industries/automotive",
  image: `https://precisiondieeng.com${industry.heroImage}`,
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://precisiondieeng.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://precisiondieeng.com/industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.title,
        item: "https://precisiondieeng.com/industries/automotive",
      },
    ],
  },
  mainEntity: {
    "@type": "Service",
    name: "Aluminium Extrusion Dies for Automotive Industry",
    description:
      "Design and manufacture of high-precision aluminium extrusion dies for automotive applications including EV battery enclosures, structural components, heat sinks, roof rails, crash management systems, and lightweight vehicle profiles.",
    provider: {
      "@type": "Organization",
      name: "PrecisionDie Engineering",
      url: "https://precisiondieeng.com",
    },
    areaServed: ["India", "Middle East", "East Africa"],
    serviceType: "Extrusion Die Manufacturing",
  },
};

/*
 * ─── Page Component ────────────────────────────────────────────────────────
 */
export default function AutomotiveIndustryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">
        <IndustryDetailView industry={industry} />
      </main>

      <Footer />
    </>
  );
}