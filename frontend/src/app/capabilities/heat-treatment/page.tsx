import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CapabilityDetailView from "@/components/capabilities/CapabilityDetailView";
import { CAPABILITY_MAP } from "@/constants/pages";

const capability = CAPABILITY_MAP["heat-treatment"];

export const metadata: Metadata = {
  title: capability.metaTitle,
  description: capability.metaDescription,
  keywords: [
    "die heat treatment",
    "extrusion die hardening",
    "vacuum heat treatment",
    "nitriding extrusion dies",
    "tool steel heat treatment",
    "die durability enhancement",
  ],
  alternates: {
    canonical: "/capabilities/heat-treatment",
  },
  openGraph: {
    title: capability.metaTitle,
    description: capability.metaDescription,
    url: "/capabilities/heat-treatment",
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
  url: "https://precisiondieeng.com/capabilities/heat-treatment",
  image: `https://precisiondieeng.com${capability.heroImage}`,
  serviceType: "Die Heat Treatment & Hardening",
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  areaServed: ["India", "Middle East", "East Africa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Heat Treatment Deliverables",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vacuum Heat Treatment",
          description: "Controlled heat treatment for dimensional stability",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Hardness Verification",
          description: "Material hardness testing and certification",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tool Life Enhancement",
          description: "Processes that improve wear resistance and die longevity",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://precisiondieeng.com" },
      { "@type": "ListItem", position: 2, name: "Capabilities", item: "https://precisiondieeng.com/capabilities" },
      { "@type": "ListItem", position: 3, name: capability.shortTitle, item: "https://precisiondieeng.com/capabilities/heat-treatment" },
    ],
  },
};

export default function HeatTreatmentCapabilityPage() {
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