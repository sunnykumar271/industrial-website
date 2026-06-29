import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CapabilityDetailView from "@/components/capabilities/CapabilityDetailView";
import { CAPABILITY_MAP } from "@/constants/pages";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the cad-design capability object from CAPABILITY_MAP.
 * CAPABILITY_MAP is built in constants/pages.ts as:
 *   Object.fromEntries(CAPABILITIES.map(c => [c.slug, c]))
 *
 * This is a build-time constant — Next.js SSG evaluates it once
 * and bakes the result into the static HTML. Zero runtime cost.
 */
const capability = CAPABILITY_MAP["cad-design"];

/*
 * ─── Metadata ──────────────────────────────────────────────────────────────
 * App Router reads this exported const at build time.
 * It generates all <head> tags — title, description, canonical,
 * OpenGraph, and Twitter card — without any client-side code.
 *
 * title will render as:
 * "Aluminium Extrusion Die CAD Design — Siemens NX & Metal Flow Simulation
 *  | PrecisionDie Engineering"
 * because layout.tsx sets template: "%s | PrecisionDie Engineering"
 */
export const metadata: Metadata = {
  title: capability.metaTitle,
  description: capability.metaDescription,
  keywords: [
    "extrusion die CAD design",
    "die design Siemens NX",
    "metal flow simulation die",
    "aluminium extrusion die design India",
    "die design service Vadodara",
    "bearing length calculation extrusion",
  ],
  alternates: {
    /*
     * canonical tells search engines this is the authoritative URL.
     * Prevents duplicate-content issues if the page is ever crawled
     * with query strings (e.g. /capabilities/cad-design?ref=nav).
     */
    canonical: "/capabilities/cad-design",
  },
  openGraph: {
    title: capability.metaTitle,
    description: capability.metaDescription,
    url: "/capabilities/cad-design",
    type: "website",
    images: [
      {
        url: capability.heroImage,
        alt: capability.heroImageAlt,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: capability.metaTitle,
    description: capability.metaDescription,
    images: [capability.heroImage],
  },
};

/*
 * ─── JSON-LD Structured Data ───────────────────────────────────────────────
 * Using schema.org/Service because CAD Die Design is a professional
 * engineering service — not a physical product.
 *
 * hasOfferCatalog lists the specific deliverables of the service,
 * which helps Google understand what the page is actually offering
 * beyond just the title and description.
 *
 * BreadcrumbList schema:
 *   Home → Capabilities → CAD & Die Design
 * This can render as clickable breadcrumbs directly in Google results.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: capability.title,
  description: capability.description,
  url: "https://precisiondieeng.com/capabilities/cad-design",
  image: `https://precisiondieeng.com${capability.heroImage}`,
  serviceType: "Extrusion Die CAD Design & Metal Flow Simulation",
  /*
   * provider ties this service back to the LocalBusiness defined
   * in the home page JSON-LD — Google uses this to connect the two
   * into a single entity in its knowledge graph.
   */
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
  },
  areaServed: ["India", "Middle East", "East Africa"],
  /*
   * hasOfferCatalog lists specific deliverables.
   * Each Offer maps to a tangible output the customer receives.
   */
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "CAD Die Design Deliverables",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "3D Die Model",
          description: "Full 3D die model in Siemens NX — pocket, bearings, relief angles, porthole geometry",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Metal Flow Simulation Report",
          description: "Velocity and pressure field maps across profile cross-section — identifies imbalances before machining",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "2D Customer Approval Drawing",
          description: "AutoCAD 2D drawing with all key dimensions for customer review and sign-off",
        },
      },
    ],
  },
  /*
   * aggregateRating can appear as star rating in search results.
   * Use real values once you have customer reviews.
   * Remove this block entirely if you don't have verified ratings —
   * fake ratings violate Google's structured data guidelines.
   */
  // aggregateRating: {
  //   "@type": "AggregateRating",
  //   ratingValue: "4.9",
  //   reviewCount: "47",
  // },
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
        name: "Capabilities",
        item: "https://precisiondieeng.com/capabilities",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: capability.shortTitle,
        item: "https://precisiondieeng.com/capabilities/cad-design",
      },
    ],
  },
};

/*
 * ─── Page Component ────────────────────────────────────────────────────────
 * React Server Component — no "use client" directive.
 *
 * Renders on the server at build time (SSG).
 * CapabilityDetailView is also a Server Component — it imports
 * AnimatedSection and PageHero which are both server-safe wrappers.
 * Only the Framer Motion internals inside AnimatedSection
 * use "use client" — contained and minimal.
 *
 * Section order rendered by CapabilityDetailView:
 *   1. PageHero        — title, tagline, breadcrumb (dark navy)
 *   2. Overview        — description + hero image split layout
 *   3. Specs + Features — spec table left, feature list right
 *   4. Outcomes        — numbered benefit cards (dark navy)
 *   5. ServiceCTAInline — quote prompt strip (light grey)
 */
export default function CADDesignCapabilityPage() {
  return (
    <>
      {/*
       * JSON-LD script tag.
       * Next.js hoists <script> tags found in the RSC tree into <head>.
       * dangerouslySetInnerHTML is safe here — jsonLd is a hardcoded
       * object, never user-supplied input.
       */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      {/*
       * id="main-content" is the skip-link target.
       * Pair with <a href="#main-content" className="sr-only focus:not-sr-only">
       * Skip to content</a> in layout.tsx for full WCAG 2.4.1 compliance.
       */}
      <main id="main-content">
        {/*
         * CapabilityDetailView receives the full typed CapabilityDetail object.
         * It renders all sections internally — this page stays thin and
         * focused only on data and metadata concerns.
         *
         * To change the layout of ALL capability pages simultaneously,
         * edit CapabilityDetailView.tsx — not the individual page files.
         */}
        <CapabilityDetailView capability={capability} />
      </main>

      <Footer />
    </>
  );
}