import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { SERVICE_MAP } from "@/constants/services";

const service = SERVICE_MAP["die-refurbishment"];

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.title,
  description: service.description,
  serviceType: "Extrusion Die Refurbishment",
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  areaServed: ["India", "Middle East", "East Africa"],
  offers: {
    "@type": "Offer",
    description: "Full die refurbishment at 35–50% of new die cost",
  },
};

export default function DieRefurbishmentPage() {
  return <ServiceDetailLayout service={service} jsonLd={jsonLd} />;
}
