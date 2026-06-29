import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceHero from "@/components/services/ServiceHero";
import SpecificationsTable from "@/components/services/SpecificationsTable";
import ApplicationsSection from "@/components/services/ApplicationsSection";
import ServiceProcess from "@/components/services/ServiceProcess";
import FAQSection from "@/components/services/FAQSection";
import RelatedServices from "@/components/services/RelatedServices";
import ServiceCTA from "@/components/services/ServiceCTA";
import type { ServiceDetail } from "@/types/services";

// ─── Props ────────────────────────────────────────────────────────────────────
interface ServiceDetailLayoutProps {
  service: ServiceDetail;
  jsonLd: object;
}

// ─── Component ────────────────────────────────────────────────────────────────
/*
 * ServiceDetailLayout is the SINGLE layout used by all 6 detail pages.
 * This is the key architectural decision for this module:
 *
 * - Each page (solid-dies/page.tsx etc.) imports this layout
 * - Passes its service data object and JSON-LD schema
 * - The layout renders all sections in the correct order
 *
 * Benefits:
 * 1. Section order is consistent across all 6 pages
 * 2. Adding a new section (e.g. "Video Tour") only requires editing this file
 * 3. Individual pages are 20 lines each — easy to maintain
 * 4. TypeScript ensures every page has valid data
 *
 * The processSteps section is conditionally rendered —
 * product pages (dies) don't have a process; service pages (design/correction/
 * refurbishment) do. The data file controls this, not the layout.
 */
export default function ServiceDetailLayout({
  service,
  jsonLd,
}: ServiceDetailLayoutProps) {
  return (
    <>
      {/* JSON-LD injected per page — Product or Service schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">
        {/* 1. Hero — title, tagline, key points, breadcrumb */}
        <ServiceHero service={service} />

        {/* 2. Description block — long-form intro paragraph */}
        <section className="section-padding bg-white" aria-label="Service overview">
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <p className="text-base leading-relaxed text-[#64748B] md:text-lg">
                {service.description}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Technical Specifications Table */}
        <SpecificationsTable specs={service.specs} />

        {/* 4. Applications — industry use-case cards */}
        <ApplicationsSection applications={service.applications} />

        {/*
         * 5. Process Steps — only shown for service pages (not product pages).
         * service.processSteps is optional in the type; checking for it
         * here keeps the data file in control of what renders.
         */}
        {service.processSteps && service.processSteps.length > 0 && (
          <ServiceProcess steps={service.processSteps} />
        )}

        {/* 6. FAQ accordion */}
        <FAQSection faqs={service.faqs} />

        {/* 7. Related services / products */}
        <RelatedServices slugs={service.relatedSlugs} currentSlug={service.slug} />

        {/* 8. CTA */}
        <ServiceCTA serviceTitle={service.shortTitle} />
      </main>

      <Footer />
    </>
  );
}
