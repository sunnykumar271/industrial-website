import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICES } from "@/constants";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

// ─── Service Icon Map ────────────────────────────────────────────────────────
/*
 * Each service has an SVG icon rendered inline — no icon library dependency.
 * Using a map (id → JSX) keeps the data file clean and icons colocated here.
 */
function ServiceIcon({ id }: { id: string }) {
  const icons: Record<string, React.ReactNode> = {
    solid: (
      // Solid rectangle — represents a solid cross-section
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="1" />
      </svg>
    ),
    hollow: (
      // Rectangle with inner cut-out — represents a hollow profile
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="2" />
        <rect x="7" y="7" width="10" height="10" rx="1" />
      </svg>
    ),
    semi: (
      // C-shape — represents a semi-hollow / partially enclosed profile
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" className="h-6 w-6" aria-hidden="true">
        <path d="M18 5H8a6 6 0 000 12h10" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    correction: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    refurbish: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M23 4v6h-6M1 20v-6h6" />
        <path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
  };
  return <>{icons[id] ?? null}</>;
}

// ─── Service Card ────────────────────────────────────────────────────────────
function ServiceCard({ service, index }: { service: Service; index: number }) {
  /*
   * First 3 services are die PRODUCTS (darker card treatment).
   * Last 3 are operational SERVICES (lighter treatment).
   * We differentiate visually so users intuitively group them.
   */
  const isProduct = index < 3;

  return (
    <AnimatedSection delay={index * 0.08} direction="up">
      <Link
        href={service.href}
        className={cn(
          "group flex h-full flex-col rounded-sm border p-6 transition-all duration-300",
          isProduct
            ? "border-[#1E293B] bg-[#0F172A] hover:border-[#2563EB]"
            : "border-[#CBD5E1] bg-white hover:border-[#2563EB] hover:shadow-md"
        )}
        aria-label={`Learn more about ${service.title}`}
      >
        {/*
         * Icon container — contrasting circle to make the icon pop
         * against the card background.
         */}
        <div
          className={cn(
            "mb-5 flex h-11 w-11 items-center justify-center rounded-sm transition-colors duration-300",
            isProduct
              ? "bg-[#2563EB]/10 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
              : "bg-[#EFF6FF] text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
          )}
        >
          <ServiceIcon id={service.icon} />
        </div>

        <h3
          className={cn(
            "font-barlow text-xl font-600 leading-snug",
            isProduct ? "text-white" : "text-[#0F172A]"
          )}
        >
          {service.title}
        </h3>

        <p
          className={cn(
            "mt-3 flex-1 text-sm leading-relaxed",
            isProduct ? "text-[#94a3b8]" : "text-[#64748B]"
          )}
        >
          {service.description}
        </p>

        {/* "Learn more" arrow link at the bottom — flush left for industrial feel */}
        <div
          className={cn(
            "mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider transition-colors duration-200",
            isProduct
              ? "text-[#64748B] group-hover:text-[#2563EB]"
              : "text-[#64748B] group-hover:text-[#2563EB]"
          )}
          aria-hidden="true"
        >
          Learn more
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </AnimatedSection>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ServicesOverview() {
  const products = SERVICES.slice(0, 3);   // solid, hollow, semi-hollow
  const services = SERVICES.slice(3, 6);   // design, correction, refurbishment

  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="Die Products & Services"
          title="Everything Your Extrusion Line Needs"
          description="From first-run die design to end-of-life refurbishment, we cover the full die lifecycle — so you have one trusted partner at every stage."
          id="services-heading"
        />

        {/*
         * ─── Die Products block (dark) ──────────────────────────────────
         * Rendered on a dark background to visually separate products from services.
         */}
        <div className="mb-4">
          <p className="eyebrow mb-6">Die Products</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* Divider with label */}
        <div className="my-10 flex items-center gap-4" aria-hidden="true">
          <div className="h-px flex-1 bg-[#CBD5E1]" />
          <p className="eyebrow">Value-Add Services</p>
          <div className="h-px flex-1 bg-[#CBD5E1]" />
        </div>

        {/* ─── Services block (light) ──────────────────────────────────── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
