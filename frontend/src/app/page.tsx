import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import CompanyIntroduction from "@/components/home/CompanyIntroduction";
import ServicesOverview from "@/components/home/ServicesOverview";
import IndustriesServed from "@/components/home/IndustriesServed";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import StatsCounter from "@/components/home/StatsCounter";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CallToAction from "@/components/home/CallToAction";
import { COMPANY } from "@/constants";

// ─── Page-level Metadata ──────────────────────────────────────────────────────
/*
 * generateMetadata() is the Next.js 15 App Router way to export per-page
 * metadata. The root layout.tsx sets the `template` string so the title
 * becomes "PrecisionDie Engineering | Aluminium Extrusion Die Manufacturer".
 *
 * Exported as a const here (not a function) because the home page has no
 * dynamic segments. Use the async function form for [slug] pages.
 */
export const metadata: Metadata = {
  title: "Aluminium Extrusion Die Manufacturer — Solid, Hollow & Semi-Hollow Dies",
  description:
    "PrecisionDie Engineering manufactures solid, hollow, and semi-hollow aluminium extrusion dies to ±0.005mm accuracy. Die design, correction, and refurbishment. 8-day lead time. Vadodara, Gujarat.",
  alternates: {
    canonical: "/",
  },
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
/*
 * LocalBusiness schema signals to Google that this is a real manufacturing
 * company with a physical address. It can trigger a Knowledge Panel and
 * improves local SEO for "extrusion die manufacturer vadodara" searches.
 *
 * Rendered as a <script> tag in the Server Component — no client bundle cost.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ManufacturingBusiness"],
  name: COMPANY.name,
  description:
    "Manufacturer of precision aluminium extrusion dies — solid, hollow, and semi-hollow. In-house die design, CNC machining, and vacuum nitriding.",
  url: "https://precisiondieeng.com",
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Plot 14, GIDC Industrial Estate",
    addressLocality: "Vadodara",
    addressRegion: "Gujarat",
    postalCode: "390010",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.3072,
    longitude: 73.1812,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  sameAs: ["https://linkedin.com/company/precisiondieeng"],
  foundingDate: String(COMPANY.established),
  numberOfEmployees: { "@type": "QuantitativeValue", value: 75 },
  areaServed: ["India", "Middle East", "East Africa"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Aluminium Extrusion Die Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Solid Extrusion Dies" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Hollow Extrusion Dies" } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Semi-Hollow Extrusion Dies" } },
    ],
  },
};

// ─── Page Component ───────────────────────────────────────────────────────────
/*
 * This is a React Server Component (RSC) by default — no "use client" directive.
 * All the heavy lifting (Navbar, Footer, section compositions) runs on the server.
 * Only components that use useState/useEffect/Framer are "use client" at their
 * own file level — this page stays as a lightweight server shell.
 */
export default function HomePage() {
  return (
    <>
      {/* JSON-LD schema — injected into <head> at server-render time */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/*
       * Navbar sits outside <main> so it is not announced as page content
       * by screen readers. It has its own role="banner" internally.
       */}
      <Navbar />

      {/*
       * <main> wraps all page content.
       * id="main-content" allows a "Skip to content" link (add one in layout.tsx
       * for full WCAG 2.4.1 compliance) to jump here.
       */}
      <main id="main-content">
        {/* 1. Hero — full viewport, navy background, staggered animation */}
        <HeroSection />

        {/* 2. Company Introduction — split layout, white bg */}
        <CompanyIntroduction />

        {/* 3. Services Overview — 6 cards (3 products + 3 services) */}
        <ServicesOverview />

        {/* 4. Industries Served — 6-column grid, dark navy bg */}
        <IndustriesServed />

        {/* 5. Manufacturing Process — alternating timeline, light grey bg */}
        <ProcessTimeline />

        {/* 6. Company Statistics — animated counters, mid-navy bg */}
        <StatsCounter />

        {/* 7. Why Choose Us — 6 USP cards, light bg */}
        <WhyChooseUs />

        {/* 8. Call to Action — full-width, dark navy bg with gradient */}
        <CallToAction />
      </main>

      {/* Footer — sits outside <main>, has role="contentinfo" internally */}
      <Footer />
    </>
  );
}
