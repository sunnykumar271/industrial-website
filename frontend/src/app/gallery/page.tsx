import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import GalleryGrid from "@/components/gallery/GalleryGrid";

import Link from "next/dist/client/link";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Gallery — Die Manufacturing Photos & Facility Images",
  description:
    "Photo gallery of PrecisionDie Engineering's aluminium extrusion dies — solid, hollow, semi-hollow dies, CNC machining facility, and CMM inspection. Vadodara, Gujarat.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Gallery | PrecisionDie Engineering",
    description:
      "See our solid, hollow, and semi-hollow extrusion dies, CNC machining floor, wire EDM department, and quality inspection equipment.",
    url: "/gallery",
    type: "website",
    images: [
      {
        url: "/images/gallery/facility-01.jpg",
        alt: "PrecisionDie Engineering CNC machining facility",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | PrecisionDie Engineering",
    description:
      "Photos of our extrusion die manufacturing facility — CNC machining, wire EDM, vacuum nitriding, and CMM inspection.",
    images: ["/images/gallery/facility-01.jpg"],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
/*
 * ImageGallery schema tells Google this page is a collection of images
 * related to a manufacturing business. The about field links it back
 * to the LocalBusiness defined on the homepage JSON-LD, helping Google
 * connect both pages to the same entity in the knowledge graph.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "PrecisionDie Engineering — Manufacturing Photo Gallery",
  description:
    "Photos of solid, hollow, and semi-hollow aluminium extrusion dies, CNC machining, wire EDM, vacuum nitriding, and CMM quality inspection at PrecisionDie Engineering.",
  url: "https://precisiondieeng.com/gallery",
  about: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://precisiondieeng.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Gallery",
        item: "https://precisiondieeng.com/gallery",
      },
    ],
  },
};

// ─── Page ─────────────────────────────────────────────────────────────────────
/*
 * This is a React Server Component shell.
 * GalleryGrid is "use client" because it uses useState for the active
 * filter category and lightbox open/close state, and AnimatePresence
 * for the filter transition animation.
 *
 * The page shell itself stays as an RSC — only the interactive grid
 * is a client component. This is the correct Next.js 15 pattern:
 * push "use client" as far down the tree as possible.
 */
export default function GalleryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">
        {/* Hero */}
        <PageHero
          eyebrow="Photo Gallery"
          title="Our Work,"
          titleAccent="Up Close"
          description="Browse our die manufacturing portfolio — solid, hollow, and semi-hollow dies fresh off the machining floor, plus our facility, equipment, and inspection department."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Gallery" },
          ]}
        />

        {/* Gallery section */}
        <section
          className="section-padding bg-[#F8FAFC]"
          aria-labelledby="gallery-section-heading"
        >
          <div className="container-custom">
            {/*
             * Visually hidden heading for screen readers.
             * The page hero already has the visible h1 ("Our Work, Up Close").
             * This h2 gives the gallery grid a named landmark for assistive
             * technology without adding redundant visual text.
             */}
            <h2
              id="gallery-section-heading"
              className="sr-only"
            >
              Die manufacturing photo gallery
            </h2>

            {/*
             * GalleryGrid is a client component.
             * It handles:
             *   - Category filter tab state (useState)
             *   - Filtered image array (derived from activeCategory)
             *   - Lightbox open/close state (useState)
             *   - next/image for each grid item (lazy loaded)
             *   - AnimatePresence for filter transitions
             *   - Keyboard navigation (prev/next) inside lightbox
             */}
            <GalleryGrid />
          </div>
        </section>

        {/* Bottom CTA strip */}
        <section
          className="bg-[#0F172A] py-14"
          aria-label="Gallery call to action"
        >
          <div className="container-custom">
            <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
              <div>
                <p className="eyebrow mb-2 text-[#60a5fa]">Seen Enough?</p>
                <h2 className="display-heading text-2xl text-white md:text-3xl">
                  Ready to Discuss Your Die?
                </h2>
                <p className="mt-2 max-w-md text-sm text-[#94a3b8]">
                  Send us your profile drawing — we will assess feasibility
                  and quote within 24 hours.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <Link href="/contact" className="btn-primary whitespace-nowrap">
                  Request a Quote
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link
                  href="tel:+919876543210"
                  className="btn-outline-white whitespace-nowrap"
                >
                  Call Us Now
                </Link>
              </div>
              </div>
            </div>
            </section>

        
        </main>
        <Footer />
      </>
  );
}

