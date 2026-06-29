import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import IndustriesGrid from "@/components/industries/IndustriesGrid";
import { ServiceCTAInline } from "@/components/services/ServiceCTA";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Industries Served — Construction, Automotive, Solar, Rail & More",
  description:
    "Aluminium extrusion dies for construction, automotive, electrical, solar, transportation, and industrial equipment industries. Vadodara, Gujarat.",
  alternates: { canonical: "/industries" },
  openGraph: {
    title: "Industries Served | PrecisionDie Engineering",
    description:
      "Six industry sectors. One die manufacturer. Explore profile types and technical solutions for your industry.",
    url: "/industries",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Industries Served — PrecisionDie Engineering",
  description:
    "Aluminium extrusion die manufacturer serving construction, automotive, solar, electrical, transportation, and industrial sectors.",
  url: "https://precisiondieeng.com/industries",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://precisiondieeng.com" },
      { "@type": "ListItem", position: 2, name: "Industries", item: "https://precisiondieeng.com/industries" },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function IndustriesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main-content">
        <PageHero
          eyebrow="Industries We Serve"
          title="Profiles for Every"
          titleAccent="Industry Sector"
          description="From curtain wall systems to EV battery trays and solar module frames — we manufacture the dies that produce the profiles your industry depends on."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Industries" },
          ]}
        />
        <IndustriesGrid />
        <ServiceCTAInline title="Dies for Your Industry" />
      </main>
      <Footer />
    </>
  );
}
