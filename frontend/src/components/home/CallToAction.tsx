import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/constants";

export default function CallToAction() {
  return (
    <section
      className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28"
      aria-labelledby="cta-heading"
    >
      {/*
       * Background accent — large diagonal stripe using clip-path.
       * Creates visual interest without an image dependency.
       * aria-hidden so assistive tech ignores it.
       */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Grid dot texture (same as hero, tied together visually) */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100,116,139,0.2) 1px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <AnimatedSection delay={0}>
            <p className="eyebrow mb-6 text-[#60a5fa]">
              Start a Project
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h2
              id="cta-heading"
              className="display-heading text-[clamp(2rem,5vw,3.5rem)] text-white"
            >
              Ready to Run a Better Profile?
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="mt-6 text-base leading-relaxed text-[#94a3b8] md:text-lg">
              Send us your profile drawing and alloy specification. We will
              assess feasibility, propose a die design approach, and give you
              a fixed quote — usually within 24 hours.
            </p>
          </AnimatedSection>

          {/* CTA buttons */}
          <AnimatedSection delay={0.3}>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                Request a Quote
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href={`tel:${COMPANY.phone}`}
                className="btn-outline-white px-8 py-4 text-base"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now
              </a>
            </div>
          </AnimatedSection>

          {/* Trust signals below CTAs */}
          <AnimatedSection delay={0.45}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-[#475569]">
              {[
                "24-hour quote turnaround",
                "8-day standard lead time",
                "Performance warranty",
              ].map((signal) => (
                <span key={signal} className="flex items-center gap-2 text-sm">
                  <svg
                    className="h-4 w-4 text-[#2563EB]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {signal}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
