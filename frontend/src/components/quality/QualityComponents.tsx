import AnimatedSection from "@/components/ui/AnimatedSection";
import type { QualityStandard, QualityProcess, QualityEquipment } from "@/types/pages";

// ─── Icon map (shared across all three sub-components) ────────────────────────
function QIcon({ icon, className = "h-6 w-6" }: { icon: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    badge: <><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></>,
    crosshair: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /></>,
    flame: <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />,
    chart: <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />,
    scan: <><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2" /><rect x="7" y="7" width="10" height="10" rx="1" /></>,
    eye: <><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></>,
    cpu: <><rect x="7" y="7" width="10" height="10" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      {paths[icon] ?? paths["shield"]}
    </svg>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// STANDARDS GRID
// ═════════════════════════════════════════════════════════════════════════════
export function QualityStandardsGrid({ standards }: { standards: QualityStandard[] }) {
  return (
    <section className="section-padding bg-white" aria-labelledby="standards-heading">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-10">
            <p className="eyebrow mb-3">Certifications & Standards</p>
            <h2 id="standards-heading" className="display-heading text-3xl text-[#0F172A] md:text-4xl">
              Built to Standard
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#64748B]">
              Every die we produce is manufactured, inspected, and documented in
              compliance with the following standards.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((std, i) => (
            <AnimatedSection key={std.code} delay={i * 0.09}>
              <div className="flex h-full flex-col rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] p-6">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm bg-[#0F172A] text-[#2563EB]">
                  <QIcon icon={std.icon} />
                </div>
                <span className="font-mono text-xs font-semibold text-[#2563EB]">
                  {std.code}
                </span>
                <h3 className="mt-1 font-barlow text-lg font-600 text-[#0F172A]">
                  {std.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">
                  {std.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// PROCESS TIMELINE
// ═════════════════════════════════════════════════════════════════════════════
export function QualityProcessTimeline({ processes }: { processes: QualityProcess[] }) {
  return (
    <section className="section-padding bg-[#0F172A]" aria-labelledby="qprocess-heading">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-12">
            <p className="eyebrow mb-3 text-[#60a5fa]">Inspection Flow</p>
            <h2 id="qprocess-heading" className="display-heading text-3xl text-white md:text-4xl">
              Quality at Every Stage
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#94a3b8]">
              Inspection is not a final gate — it runs in parallel with every
              manufacturing operation.
            </p>
          </div>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical connector on desktop */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 md:left-1/2 hidden md:block" aria-hidden="true" />

          <div className="space-y-8">
            {processes.map((proc, index) => {
              const isEven = index % 2 === 0;
              return (
                <AnimatedSection key={proc.step} delay={index * 0.09} direction={isEven ? "left" : "right"}>
                  <div className={`relative flex gap-5 md:items-center md:gap-0 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Step node */}
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#2563EB] font-barlow text-sm font-700 text-white shadow-md md:absolute md:left-1/2 md:-translate-x-1/2">
                      {proc.step}
                    </div>

                    {/* Card */}
                    <div className={`flex-1 rounded-sm border border-white/10 bg-white/5 p-5 md:mx-4 ${isEven ? "md:mr-[calc(50%+1.5rem)] md:ml-0" : "md:ml-[calc(50%+1.5rem)] md:mr-0"}`}>
                      <h3 className="font-barlow text-lg font-600 text-white">{proc.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">{proc.description}</p>
                      {proc.equipment && (
                        <p className="mt-3 flex items-center gap-2 text-xs font-mono text-[#2563EB]">
                          <span className="h-1 w-1 rounded-full bg-[#2563EB]" aria-hidden="true" />
                          {proc.equipment}
                        </p>
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ═════════════════════════════════════════════════════════════════════════════
// EQUIPMENT GRID
// ═════════════════════════════════════════════════════════════════════════════
export function QualityEquipmentGrid({ equipment }: { equipment: QualityEquipment[] }) {
  return (
    <section className="section-padding bg-[#F8FAFC]" aria-labelledby="equipment-heading">
      <div className="container-custom">
        <AnimatedSection>
          <div className="mb-10">
            <p className="eyebrow mb-3">Test Equipment</p>
            <h2 id="equipment-heading" className="display-heading text-3xl text-[#0F172A] md:text-4xl">
              Our Inspection Equipment
            </h2>
            <p className="mt-3 max-w-xl text-base text-[#64748B]">
              All instruments are calibrated annually to national standards and
              traceable to NABL-accredited laboratories.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((eq, i) => (
            <AnimatedSection key={eq.name} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-sm border border-[#CBD5E1] bg-white p-6 transition-shadow hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#EFF6FF] text-[#2563EB]">
                    <QIcon icon={eq.icon} />
                  </div>
                  {/* Spec as badge */}
                  <span className="rounded-sm bg-[#F8FAFC] px-2.5 py-1 font-mono text-[9px] font-medium leading-tight text-[#64748B] ring-1 ring-[#CBD5E1] text-right">
                    {eq.specification.split("—")[0].trim()}
                  </span>
                </div>

                <div>
                  <h3 className="font-barlow text-base font-600 text-[#0F172A]">{eq.name}</h3>
                  <p className="mt-1 text-xs text-[#64748B]">{eq.specification}</p>
                </div>

                <p className="text-sm leading-relaxed text-[#64748B]">{eq.purpose}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
