import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CapabilityDetailView from "@/components/capabilities/CapabilityDetailView";
import { CAPABILITY_MAP } from "@/constants/pages";

const capability = CAPABILITY_MAP["wire-edm"];

export const metadata: Metadata = {
  title: capability.metaTitle,
  description: capability.metaDescription,
  keywords: [
    "wire edm die cutting",
    "wire edm extrusion die",
    "high precision edm machining",
    "extrusion die profile cutting",
    "wire cut machining Gujarat",
    "wire edm service India",
  ],
  alternates: {
    canonical: "/capabilities/wire-edm",
  },
  openGraph: {
    title: capability.metaTitle,
    description: capability.metaDescription,
    url: "/capabilities/wire-edm",
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
  url: "https://precisiondieeng.com/capabilities/wire-edm",
  image: `https://precisiondieeng.com${capability.heroImage}`,
  serviceType: "Wire EDM Profile Cutting",
  provider: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  areaServed: ["India", "Middle East", "East Africa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wire EDM Deliverables",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Profile Aperture Cutting",
          description: "Precision wire cutting of extrusion profile openings",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Complex Geometry Machining",
          description: "Accurate EDM machining of intricate profile features",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tolerance Control",
          description: "Micron-level dimensional accuracy for extrusion dies",
        },
      },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://precisiondieeng.com" },
      { "@type": "ListItem", position: 2, name: "Capabilities", item: "https://precisiondieeng.com/capabilities" },
      { "@type": "ListItem", position: 3, name: capability.shortTitle, item: "https://precisiondieeng.com/capabilities/wire-edm" },
    ],
  },
};

export default function WireEDMCapabilityPage() {
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