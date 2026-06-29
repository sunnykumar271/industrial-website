import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/constants";

// ─── Props ────────────────────────────────────────────────────────────────────
interface ServiceCTAProps {
  serviceTitle: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ServiceCTA({ serviceTitle }: ServiceCTAProps) {
  return (
    <section
      className="relative overflow-hidden bg-[#1E293B] py-16 md:py-20"
      aria-labelledby="service-cta-heading"
    >
      {/* Subtle gradient accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(37,99,235,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          {/* Left: text */}
          <AnimatedSection delay={0} direction="left" className="max-w-xl">
            <p className="eyebrow mb-3 text-[#60a5fa]">Get Started</p>
            <h2
              id="service-cta-heading"
              className="display-heading text-2xl text-white md:text-3xl"
            >
              Ready to Order {serviceTitle}?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#94a3b8]">
              Send us your profile drawing and we will quote within 24 hours.
              No obligation — just a clear, itemised price.
            </p>
          </AnimatedSection>

          {/* Right: buttons + contact strip */}
          <AnimatedSection
            delay={0.15}
            direction="right"
            className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col lg:flex-row"
          >
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

            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-outline-white whitespace-nowrap"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {COMPANY.phone}
            </a>
          </AnimatedSection>
        </div>

        {/* Trust micro-strip */}
        <AnimatedSection delay={0.25}>
          <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-xs text-[#475569]">
            {[
              "24-hour quote turnaround",
              "Fixed price — no hidden costs",
              "8-day standard lead time",
              "Performance warranty included",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <svg
                  className="h-3.5 w-3.5 text-[#2563EB]"
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
                {item}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

/*
 * ServiceCTAInline — a lighter CTA strip used inside industry and capability
 * pages where the full-width navy section would be too heavy.
 */
export function ServiceCTAInline({ title }: { title: string }) {
  return (
    <section className="section-padding bg-[#F8FAFC]" aria-label="Call to action">
      <div className="container-custom">
        <div className="flex flex-col items-center gap-6 rounded-sm border border-[#CBD5E1] bg-white p-8 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="eyebrow mb-2">Get Started</p>
            <h2 className="display-heading text-2xl text-[#0F172A]">
              Ready to order {title}?
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              Send us your profile drawing — quote within 24 hours.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href="/contact" className="btn-primary whitespace-nowrap">Request a Quote</a>
            <a href="tel:+919876543210" className="btn-outline whitespace-nowrap">Call Now</a>
          </div>
        </div>
      </div>
    </section>
  );
}
