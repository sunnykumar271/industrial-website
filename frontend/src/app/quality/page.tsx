import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import {
  QualityStandardsGrid,
  QualityProcessTimeline,
  QualityEquipmentGrid,
} from "@/components/quality/QualityComponents";
import { ServiceCTAInline } from "@/components/services/ServiceCTA";
import {
  QUALITY_STANDARDS,
  QUALITY_PROCESSES,
  QUALITY_EQUIPMENT,
} from "@/constants/pages";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Quality Assurance — ISO 9001, CMM Inspection & Nitriding Verification",
  description:
    "PrecisionDie Engineering's quality assurance process — ISO 9001:2015 certified, Zeiss CMM inspection, Vickers hardness testing, and 100% dimensional reporting on every die. Vadodara, Gujarat.",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: "Quality Assurance | PrecisionDie Engineering",
    description:
      "ISO 9001:2015 quality management. 100% CMM-inspected dies. Dimensional report issued with every die. Zeiss Contura, Mitutoyo profilometer, Vickers HV10.",
    url: "/quality",
    type: "website",
    images: [
      {
        url: "/images/capabilities/quality-inspection.jpg",
        alt: "CMM quality inspection of aluminium extrusion die at PrecisionDie Engineering",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quality Assurance | PrecisionDie Engineering",
    description:
      "ISO 9001:2015 certified. 100% CMM inspection. Dimensional report with every die. Vadodara, Gujarat.",
    images: ["/images/capabilities/quality-inspection.jpg"],
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
/*
 * Two schema types combined on this page:
 *
 * 1. WebPage — the page itself, with breadcrumbs
 * 2. QualityControlConsideration — signals to Google that this page
 *    describes quality standards applied to products/services.
 *    Linked via the "about" field of the WebPage.
 *
 * The certification array uses schema.org/Certification to list
 * each standard (ISO 9001, H13, GD&T) as a machine-readable item.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quality Assurance — PrecisionDie Engineering",
  description:
    "ISO 9001:2015 certified quality management system for aluminium extrusion die manufacturing. 100% CMM inspection, hardness testing, and dimensional reporting on every die.",
  url: "https://precisiondieeng.com/quality",
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
        name: "Quality Assurance",
        item: "https://precisiondieeng.com/quality",
      },
    ],
  },
  about: {
    "@type": "Organization",
    name: "PrecisionDie Engineering",
    url: "https://precisiondieeng.com",
    /*
     * hasCredential lists formal certifications.
     * This is the correct schema.org property for ISO certifications
     * on an Organization node — not "award" or "recognition".
     */
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "ISO 9001:2015",
        description: "Quality Management System — certified by Bureau Veritas",
        recognizedBy: {
          "@type": "Organization",
          name: "Bureau Veritas",
        },
      },
    ],
  },
};

// ─── Commitment Strip Data ────────────────────────────────────────────────────
/*
 * Four top-line quality commitments shown as a stat strip inside the hero.
 * Kept here (not in constants/pages.ts) because they are presentation-only
 * — no business logic or reuse needed.
 */
const qualityCommitments = [
  { value: "100%", label: "Dies CMM Inspected" },
  { value: "ISO 9001", label: "Certified QMS" },
  { value: "±0.001mm", label: "CMM Accuracy" },
  { value: "Every Die", label: "Dimensional Report" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────
/*
 * Fully static React Server Component.
 *
 * All three quality sub-components (Standards, Process, Equipment) are
 * also Server Components — they receive plain data arrays as props and
 * render static HTML. AnimatedSection handles scroll-reveal on the
 * client side via its own "use client" boundary.
 *
 * Section order:
 *   1. PageHero           — title, commitments stat strip
 *   2. Intro paragraph    — quality philosophy statement
 *   3. QualityStandardsGrid  — ISO 9001, H13, GD&T, EN ISO 14923 cards
 *   4. QualityProcessTimeline — 6-step in-process inspection flow
 *   5. QualityEquipmentGrid  — CMM, profilometer, hardness tester cards
 *   6. ServiceCTAInline   — quote prompt
 */
export default function QualityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <PageHero
          eyebrow="Quality Assurance"
          title="Verified at Every"
          titleAccent="Stage of Production"
          description="ISO 9001:2015 certified. Every die we produce is measured, documented, and dispatched with a full dimensional report. Quality is not a final check — it runs in parallel with every machining operation."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Quality Assurance" },
          ]}
        >
          {/*
           * Commitment strip passed as children to PageHero.
           * PageHero renders children inside a motion.div that fades
           * in after the description — keeps the animation sequence clean.
           */}
          <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
            {qualityCommitments.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center bg-[#0F172A] px-5 py-6 text-center"
              >
                <span className="font-barlow text-2xl font-700 text-white md:text-3xl">
                  {item.value}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-widest text-[#64748B]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </PageHero>

        {/* ── Quality philosophy paragraph ─────────────────────────────── */}
        <section
          className="section-padding bg-white"
          aria-label="Quality philosophy"
        >
          <div className="container-custom">
            <div className="mx-auto max-w-3xl">
              <AnimatedSection delay={0}>
                <p className="eyebrow mb-4">Our Philosophy</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <h2 className="display-heading text-3xl text-[#0F172A] md:text-4xl">
                  Quality Built In,{" "}
                  <span className="text-[#2563EB]">Not Inspected In</span>
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <p className="mt-5 text-base leading-relaxed text-[#64748B] md:text-lg">
                  Inspection at the end of a process catches defects — it does
                  not prevent them. Our quality system is structured so that
                  every machining operation produces measurable, recorded output
                  before the next operation begins. A die with a dimensional
                  error is corrected at the rough-machining stage, not after
                  nitriding. This is how we achieve a first-trial success rate
                  above 85% and why our correction turnaround is measured in
                  hours, not days.
                </p>
              </AnimatedSection>

              {/*
               * Three philosophy pillars — brief, scannable.
               * Positioned here (after the paragraph) rather than in the
               * hero so they appear in context with the explanation above.
               */}
              <AnimatedSection delay={0.3}>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      title: "Prevent",
                      description:
                        "Design and simulation eliminate defects before machining begins.",
                    },
                    {
                      title: "Detect",
                      description:
                        "In-process CMM catches deviations before they compound.",
                    },
                    {
                      title: "Document",
                      description:
                        "Every result is recorded — traceable for the life of the die.",
                    },
                  ].map((pillar, i) => (
                    <div
                      key={pillar.title}
                      className="rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] p-5"
                    >
                      {/*
                       * Step number as large faded background character —
                       * purely decorative, aria-hidden so screen readers skip it.
                       */}
                      <span
                        className="font-barlow text-4xl font-800 text-[#2563EB]/20 leading-none"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-2 font-barlow text-lg font-600 text-[#0F172A]">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#64748B]">
                        {pillar.description}
                      </p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Standards Grid ───────────────────────────────────────────── */}
        {/*
         * QualityStandardsGrid receives the QUALITY_STANDARDS array.
         * Renders 4 standard cards: ISO 9001, H13, GD&T, EN ISO 14923.
         * Each card shows the standard code in font-mono, title, and description.
         */}
        <QualityStandardsGrid standards={QUALITY_STANDARDS} />

        {/* ── Process Timeline ─────────────────────────────────────────── */}
        {/*
         * QualityProcessTimeline receives the QUALITY_PROCESSES array.
         * Renders a 6-step alternating timeline on dark navy background.
         * Each step shows: step number, title, description, equipment used.
         * The alternating left/right layout mirrors the home ProcessTimeline.
         */}
        <QualityProcessTimeline processes={QUALITY_PROCESSES} />

        {/* ── Equipment Grid ───────────────────────────────────────────── */}
        {/*
         * QualityEquipmentGrid receives the QUALITY_EQUIPMENT array.
         * Renders 6 equipment cards: Zeiss CMM, Mitutoyo profilometer,
         * Vickers tester, ultrasonic tester, profile projector, spectrometer.
         * Each card shows icon, name, specification, and purpose.
         */}
        <QualityEquipmentGrid equipment={QUALITY_EQUIPMENT} />

        {/* ── Performance figures ──────────────────────────────────────── */}
        <section
          className="section-padding bg-white"
          aria-labelledby="quality-results-heading"
        >
          <div className="container-custom">
            <AnimatedSection>
              <div className="mb-10 text-center">
                <p className="eyebrow mb-3">Measured Results</p>
                <h2
                  id="quality-results-heading"
                  className="display-heading text-3xl text-[#0F172A] md:text-4xl"
                >
                  Quality in Numbers
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                {
                  value: ">85%",
                  label: "First-Trial Success Rate",
                  note: "On standard profile dies",
                },
                {
                  value: "100%",
                  label: "Dies CMM Inspected",
                  note: "No sampling — every single die",
                },
                {
                  value: "0",
                  label: "Undetected Non-Conformances",
                  note: "Dispatched in the last 24 months",
                },
                {
                  value: "±0.001mm",
                  label: "CMM Machine Accuracy",
                  note: "Zeiss Contura — NABL traceable",
                },
              ].map((item, i) => (
                <AnimatedSection key={item.label} delay={i * 0.08}>
                  <div className="rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] p-6 text-center">
                    <span className="font-barlow text-3xl font-800 text-[#0F172A] md:text-4xl">
                      {item.value}
                    </span>
                    <p className="mt-2 text-sm font-600 text-[#0F172A]">
                      {item.label}
                    </p>
                    <p className="mt-1 text-xs text-[#64748B]">{item.note}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <ServiceCTAInline title="Quality-Verified Dies" />

      </main>

      <Footer />
    </>
  );
}