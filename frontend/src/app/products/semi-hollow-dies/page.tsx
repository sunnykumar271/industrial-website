import type { Metadata } from "next";
import ServiceDetailLayout from "@/components/services/ServiceDetailLayout";
import { SERVICE_MAP } from "@/constants/services";

const service = SERVICE_MAP["semi-hollow-dies"];

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

export default function SemiHollowDiesPage() {
  return <ServiceDetailLayout service={service} jsonLd={jsonLd} />;
}
