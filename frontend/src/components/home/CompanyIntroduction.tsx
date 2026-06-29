import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/constants";

// ─── Certification badges ─────────────────────────────────────────────────
const certifications = [
  { label: "ISO 9001:2015", description: "Quality Management System" },
  { label: "H13 Certified", description: "Verified Tool Steel Grade" },
  { label: "CMM Inspected", description: "100% Dimensional Verification" },
];

// ─── Component ────────────────────────────────────────────────────────────
export default function CompanyIntroduction() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="intro-heading"
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* ─── Left: Text content ─────────────────────────────────────── */}
          <div>
            <AnimatedSection delay={0}>
              <p className="eyebrow mb-4">Who We Are</p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2
                id="intro-heading"
                className="display-heading text-3xl text-[#0F172A] md:text-4xl lg:text-5xl"
              >
                The Art of Die
                <br />
                <span className="text-[#2563EB]">Manufacturing Precision</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-[#64748B] md:text-lg">
                Founded in {COMPANY.established}, {COMPANY.name} began as a
                single-machine operation. Today, we operate a 1,000 sq ft facility
                equipped with two DRO machines and a dedicated die surfacing machine.
                To ensure complete die manufacturing capability, we collaborate with
                qualified external partners for VMC machining, wire-cut EDM, sinker EDM,
                and vacuum nitriding processes. Every outsourced operation is carried
                out according to our engineering drawings, inspection requirements, and
                quality standards before final approval.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                Every die we make starts with simulation. We supply extruders across
                India — from single-die startups to facilities.
              </p>
            </AnimatedSection>

            {/*
             * Certification row — horizontal chips.
             * These signal credibility without a lengthy paragraph.
             */}
            <AnimatedSection delay={0.4}>
              <div className="mt-8 flex flex-wrap gap-3">
                {certifications.map((cert) => (
                  <div
                    key={cert.label}
                    className="flex items-center gap-2 rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] px-4 py-2.5"
                  >
                    {/* Tick icon */}
                    <svg
                      className="h-4 w-4 shrink-0 text-[#2563EB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <div>
                      <p className="text-xs font-semibold text-[#0F172A]">
                        {cert.label}
                      </p>
                      <p className="text-[10px] text-[#64748B]">
                        {cert.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <Link href="/about" className="btn-outline mt-8">
                Our Story
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
            </AnimatedSection>
          </div>

          {/* ─── Right: Image ─────────────────────────────────────────────
           *
           * next/image handles WebP conversion, srcset generation, and lazy loading.
           * The outer div gives a fixed aspect ratio so there's no layout shift
           * before the image loads (CLS = 0).
           *
           * Replace src with your actual workshop/facility photograph.
           * Recommended: 1200×900px, optimised JPG.
           */}
          <AnimatedSection delay={0.2} direction="left">
            <div className="relative">
              {/* Decorative offset border — gives depth without shadows */}
              <div
                className="absolute -bottom-4 -right-4 h-full w-full border border-[#2563EB]/20 rounded-sm"
                aria-hidden="true"
              />

              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1E293B]">
                <Image
                  src="/images/facility/Die_Workshop.jpg"
                  alt="PrecisionDie Engineering manufacturing facility — CNC machining floor"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  /*
                   * No priority here — this image is below the fold.
                   * Hero image gets priority; everything else loads lazily.
                   */
                />

                {/*
                 * Image overlay badge — "Est. 2003" anchored bottom-left.
                 * Reinforces the establishment year without adding body text.
                 */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent px-6 py-5">
                  <p className="font-barlow text-2xl font-700 text-white">
                    Est. {COMPANY.established}
                  </p>
                  <p className="text-xs text-[#94a3b8]">
                    Vadodara, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
