import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { INDUSTRIES } from "@/constants";
import Link from "next/dist/client/link";

// ─── Industry Icons ──────────────────────────────────────────────────────────
function IndustryIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="2" y="3" width="20" height="20" rx="1" />
        <path d="M8 21V10M16 21V10M2 10h20M2 6h4M18 6h4M8 6h8" />
      </svg>
    ),
    car: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1l3-3h8l3 3h1a2 2 0 012 2v6a2 2 0 01-2 2h-2" />
        <circle cx="7.5" cy="17.5" r="2.5" />
        <circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    cpu: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1" />
        <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
    train: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <rect x="4" y="2" width="16" height="16" rx="2" />
        <path d="M4 10h16M12 2v8M7 18l-2 4M17 18l2 4M8 14v.01M16 14v.01" />
      </svg>
    ),
    factory: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
        <path d="M2 20V8l6-4v4l6-4v4l6-4v16H2z" />
        <rect x="9" y="14" width="6" height="6" />
      </svg>
    ),
  };
  return <>{paths[icon] ?? null}</>;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function IndustriesServed() {
  return (
    <section
      className="section-padding bg-[#0F172A]"
      aria-labelledby="industries-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Industries Served"
          title="Profiles That Power Every Sector"
          description="Our dies produce profiles used in some of the world's most demanding applications — from solar farms to high-speed rail."
          dark
          id="industries-heading"
        />

        {/*
         * 2-col on mobile → 3-col on md → 6-col on xl.
         * gap-px with bg-white/5 creates a subtle grid of dividing lines
         * between cards without borders that would feel heavy on dark bg.
         */}
        <div className="grid grid-cols-2 gap-px bg-white/5 md:grid-cols-3 xl:grid-cols-6">
          {INDUSTRIES.map((industry, index) => (
            <AnimatedSection
              key={industry.id}
              delay={index * 0.07}
              direction="up">
                <Link href={`/industries/${industry.id}`} 
              className="flex flex-col items-center bg-[#0F172A] p-8 text-center transition-colors duration-200 hover:bg-[#1E293B]"
            >
              {/* Icon circle */}
              <div
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-sm bg-[#2563EB]/10 text-[#2563EB]"
                aria-hidden="true"
              >
                <IndustryIcon icon={industry.icon} />
              </div>

              <h3 className="font-barlow text-base font-600 text-white">
                {industry.name}
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#64748B]">
                {industry.description}
              </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Subtle bottom note */}
        <AnimatedSection delay={0.5}>
          <p className="mt-10 text-center text-sm text-[#475569]">
            Supplying extruders across India.{" "}
            <a
              href="/contact"
              className="text-[#2563EB] underline-offset-2 hover:underline"
            >
              Discuss your profile →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
