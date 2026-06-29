import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { SERVICE_MAP } from "@/constants/services";

const service = SERVICE_MAP["die-correction"];

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
  serviceType: "Extrusion Die Correction",
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  areaServed: ["India", "Middle East", "East Africa"],
  offers: {
    "@type": "Offer",
    description: "Die correction with 24–48 hour turnaround",
  },
};

export default function DieCorrectionPage() {
  return <ServiceDetailLayout service={service} jsonLd={jsonLd} />;
}
