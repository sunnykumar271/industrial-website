import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CapabilityDetailView from "@/components/capabilities/CapabilityDetailView";
import { CAPABILITY_MAP } from "@/constants/pages";

const capability = CAPABILITY_MAP["quality-inspection"];

export const metadata: Metadata = {
  title: capability.metaTitle,
  description: capability.metaDescription,
  keywords: [
    "die quality inspection",
    "extrusion die quality control",
    "CMM inspection dies",
    "die dimensional verification",
    "precision inspection services",
    "quality assurance extrusion tooling",
  ],
  alternates: {
    canonical: "/capabilities/quality-inspection",
  },
  openGraph: {
    title: capability.metaTitle,
    description: capability.metaDescription,
    url: "/capabilities/quality-inspection",
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
  url: "https://precisiondieeng.com/capabilities/quality-inspection",
  image: `https://precisiondieeng.com${capability.heroImage}`,
  serviceType: "Quality Inspection & Verification",
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  areaServed: ["India", "Middle East", "East Africa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Inspection Deliverables",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dimensional Inspection",
          description: "Verification of critical die dimensions and tolerances",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Quality Reports",
          description: "Comprehensive inspection and measurement documentation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Final Approval Verification",
          description: "Pre-dispatch quality assurance and compliance checks",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://precisiondieeng.com" },
      { "@type": "ListItem", position: 2, name: "Capabilities", item: "https://precisiondieeng.com/capabilities" },
      { "@type": "ListItem", position: 3, name: capability.shortTitle, item: "https://precisiondieeng.com/capabilities/quality-inspection" },
    ],
  },
};

export default function QualityInspectionCapabilityPage() {
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

