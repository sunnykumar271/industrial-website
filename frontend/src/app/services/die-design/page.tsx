import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { SERVICE_MAP } from "@/constants/services";

const service = SERVICE_MAP["die-design"];

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

/*
 * Service pages use schema.org/Service instead of Product.
 * serviceType maps to the specific engineering service being offered.
 * provider ties it back to the LocalBusiness defined in the home page JSON-LD.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  serviceType: "Extrusion Die Design",
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  areaServed: ["India", "Middle East", "East Africa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Die Design Service",
  },
};

export default function DieDesignPage() {
  return <ServiceDetailLayout service={service} jsonLd={jsonLd} />;
}
