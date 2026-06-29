import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { CapabilityDetail } from "@/types/pages";

// ─── Icon ─────────────────────────────────────────────────────────────────────
function CapIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    design: <path strokeLinecap="round" strokeLinejoin="round" d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />,
    cpu: <><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>,
    zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    flame: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />,
    crosshair: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
      {paths[icon] ?? paths["cpu"]}
    </svg>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface CapabilityCardProps {
  capability: CapabilityDetail;
  index: number;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CapabilityCard({ capability, index }: CapabilityCardProps) {
  return (
    <AnimatedSection delay={index * 0.09}>
      <Link
        href={`/capabilities/${capability.slug}`}
        className="group flex h-full flex-col rounded-sm border border-[#CBD5E1] bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/50 hover:shadow-md"
        aria-label={`Learn about ${capability.title}`}
      >
        {/* Icon */}
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-[#EFF6FF] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
          <CapIcon icon={capability.icon} />
        </div>

        <h3 className="font-barlow text-xl font-600 text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
          {capability.title}
        </h3>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B]">
          {capability.tagline}
        </p>

        {/* Key spec chips — first 2 specs shown as badges */}
        <div className="mt-5 flex flex-wrap gap-2">
          {capability.specs.slice(0, 2).map((spec) => (
            <span
              key={spec.label}
              className="rounded-sm bg-[#F8FAFC] px-2.5 py-1 font-mono text-[10px] font-medium text-[#0F172A] ring-1 ring-[#CBD5E1]"
            >
              {spec.value}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] transition-colors group-hover:text-[#2563EB]">
          Full details
          <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </Link>
    </AnimatedSection>
  );
}
