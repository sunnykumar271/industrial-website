import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { USPS } from "@/constants";
import type { USP } from "@/types";

// ─── USP Icons ────────────────────────────────────────────────────────────────
function USPIcon({ icon }: { icon: string }) {
  const icons: Record<string, React.ReactNode> = {
    crosshair: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    users: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    badge: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
      </svg>
    ),
  };
  return <>{icons[icon] ?? null}</>;
}

// ─── USP Card ─────────────────────────────────────────────────────────────────
function USPCard({ usp, index }: { usp: USP; index: number }) {
  return (
    <AnimatedSection delay={index * 0.08}>
      <div className="group relative h-full rounded-sm border border-[#CBD5E1] bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/40 hover:shadow-md">
        {/*
         * Accent bar — 2px blue line at top that expands on hover.
         * Pure CSS transition — no Framer needed for micro-interactions.
         */}
        <div
          className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 rounded-t-sm bg-[#2563EB] transition-transform duration-300 group-hover:scale-x-100"
          aria-hidden="true"
        />

        {/* Icon */}
        <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-sm bg-[#EFF6FF] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
          <USPIcon icon={usp.icon} />
        </div>

        <h3 className="font-barlow text-xl font-600 leading-snug text-[#0F172A]">
          {usp.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#64748B]">
          {usp.description}
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function WhyChooseUs() {
  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="why-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Why Choose Us"
          title="What Separates a Good Die from a Great One"
          description="The difference shows at the press — in fewer corrections, longer die life, and tighter profile tolerances every run."
          id="why-heading"
        />

        {/* 2-col on mobile, 3-col on lg */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {USPS.map((usp, i) => (
            <USPCard key={usp.id} usp={usp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
