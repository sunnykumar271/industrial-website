import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { SERVICE_MAP } from "@/constants/services";

/*
 * ─── How this page works ──────────────────────────────────────────────────
 * 1. Pull the service data from the central SERVICE_MAP using the slug key
 * 2. Build the Metadata object from the data (no hardcoded strings here)
 * 3. Build the JSON-LD schema from the same data
 * 4. Pass both to ServiceDetailLayout — the layout does all the rendering
 *
 * This pattern means all 6 service pages are structurally identical.
 * The only thing that changes is the slug used on line 12.
 * ─────────────────────────────────────────────────────────────────────────
 */
const service = SERVICE_MAP["solid-dies"];

// ─── SEO Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
  keywords: service.metaKeywords,
  alternates: { canonical: `/services/${service.slug}` },
  openGraph: {
    title: service.metaTitle,
    description: service.metaDescription,
    url: `/services/${service.slug}`,
    images: [{ url: service.heroImage, alt: service.heroImageAlt }],
  },
};

// ─── JSON-LD — Product schema ─────────────────────────────────────────────────
/*
 * Using schema.org/Product for die product pages.
 * This can trigger rich results with product details in Google Search.
 * manufacturer.@type = "Organization" ties the product back to the company.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: service.title,
  description: service.description,
  image: `https://precisiondieeng.com${service.heroImage}`,
  brand: {
    "@type": "Brand",
    name: "PrecisionDie Engineering",
  },
  manufacturer: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  category: "Aluminium Extrusion Tooling",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    businessFunction: "https://schema.org/Sell",
    seller: {
      "@type": "Organization",
      name: "PrecisionDie Engineering",
    },
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function SolidDiesPage() {
  return <ServiceDetailLayout service={service} jsonLd={jsonLd} />;
}
