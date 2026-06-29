import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CapabilityDetailView from "@/components/capabilities/CapabilityDetailView";
import { CAPABILITY_MAP } from "@/constants/pages";

/*
 * ─── Data ──────────────────────────────────────────────────────────────────
 * Pull the vmc-machining capability object from CAPABILITY_MAP.
 * CAPABILITY_MAP is built in constants/pages.ts as:
 *   Object.fromEntries(CAPABILITIES.map(c => [c.slug, c]))
 *
 * This is a build-time constant — Next.js SSG evaluates it once
 * and bakes the result into the static HTML. Zero runtime cost.
 
 */

const capability = CAPABILITY_MAP["vmc-machining"];

export const metadata: Metadata = {
  title: capability.metaTitle,
  description: capability.metaDescription,
  keywords: [
     "VMC machining",
  "vertical machining center",
  "extrusion die machining",
  "precision die manufacturing",
  "aluminium extrusion die machining",
  "VMC machining service Vadodara",
  ],
  alternates: {
    canonical: "/capabilities/vmc-machining",
  },
  openGraph: {
    title: capability.metaTitle,
    description: capability.metaDescription,
    url: "/capabilities/vmc-machining",
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: capability.title,
  description: capability.description,
  url: "https://precisiondieeng.com/capabilities/vmc-machining",
  image: `https://precisiondieeng.com${capability.heroImage}`,
  serviceType: "Precision VMC Die Machining",
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
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "VMC Machining Deliverables",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pocket Machining",
          description: "High-precision VMC machining of die pockets and bearing areas",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Porthole Machining",
          description: "Accurate porthole and bridge geometry machining for hollow dies",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Final Tolerance Verification",
          description: "Precision inspection of machined die dimensions before EDM and heat treatment",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://precisiondieeng.com" },
      { "@type": "ListItem", position: 2, name: "Capabilities", item: "https://precisiondieeng.com/capabilities" },
      { "@type": "ListItem", position: 3, name: capability.shortTitle, item: "https://precisiondieeng.com/capabilities/vmc-machining" },
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
export default function VMCMachiningCapabilityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">
        <CapabilityDetailView capability={capability} />
      </main>
      <Footer />
    </>
  );
}