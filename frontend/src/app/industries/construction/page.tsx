import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import IndustryDetailView from "@/components/industries/IndustryDetailView";
import { INDUSTRY_MAP } from "@/constants/industries";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the construction industry object from the central data map.
 * This is a module-level constant — evaluated once at build time (SSG).
 * No async fetch, no runtime cost.
 */
const industry = INDUSTRY_MAP["construction"];

/*
 * ─── Metadata ──────────────────────────────────────────────────────────────
 * Next.js 15 App Router reads this exported const at build time and injects
 * the values into the <head> of the page.
 *
 * title uses the template from layout.tsx:
 *   "Aluminium Extrusion Dies for Construction Industry... | PrecisionDie Engineering"
 *
 * alternates.canonical prevents duplicate-content penalties if the page is
 * ever accessible via multiple URLs (e.g. with trailing slash).
 */
export const metadata: Metadata = {
  title: industry.metaTitle,
  description: industry.metaDescription,
  keywords: [
    "extrusion die for construction",
    "window frame die manufacturer",
    "curtain wall extrusion die",
    "structural aluminium die India",
    "construction profile die Gujarat",
  ],
  alternates: {
    canonical: `/industries/construction`,
  },
  openGraph: {
    title: industry.metaTitle,
    description: industry.metaDescription,
    url: `/industries/construction`,
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
 * WebPage schema with BreadcrumbList for this specific industry page.
 *
 * BreadcrumbList tells Google the navigation path:
 *   Home → Industries → Construction & Architecture
 * This can render as breadcrumb rich results below the search listing.
 *
 * Defined as a plain object here (not imported) because the schema content
 * is specific to this page — not reusable across all industry pages.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: industry.title,
  description: industry.description,
  url: "https://precisiondieeng.com/industries/construction",
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
        item: "https://precisiondieeng.com/industries/construction",
      },
    ],
  },
  /*
   * mainEntity links this page to the actual business offering.
   * "Service" here describes the die manufacturing service provided
   * specifically for the construction sector.
   */
  mainEntity: {
    "@type": "Service",
    name: "Aluminium Extrusion Dies for Construction Industry",
    description:
      "Design and manufacture of solid, hollow, and semi-hollow extrusion dies for construction profiles — window frames, curtain wall mullions, structural sections, and cladding profiles.",
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
 *
 * This is a React Server Component (no "use client").
 * It renders on the server at build time (SSG) — zero client JavaScript
 * for the page shell itself.
 *
 * The JSON-LD <script> is injected directly into the HTML at build time.
 * dangerouslySetInnerHTML is safe here because jsonLd is a hardcoded
 * object — not user input. JSON.stringify produces valid JSON text.
 *
 * IndustryDetailView receives the typed industry object and renders
 * all sections: Hero, Overview, Profile Cards, Challenges & Solutions, CTA.
 * Navbar and Footer wrap everything consistently.
 */
export default function ConstructionIndustryPage() {
  return (
    <>
      {/* JSON-LD injected into <head> via Next.js script hoisting */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/*
       * id="main-content" enables a "Skip to content" anchor link
       * for keyboard and screen reader users (WCAG 2.4.1).
       * Add <a href="#main-content" className="sr-only focus:not-sr-only">
       * Skip to content</a> in layout.tsx to activate it.
       */}
      <main id="main-content">
        <IndustryDetailView industry={industry} />
      </main>

      <Footer />
    </>
  );
}