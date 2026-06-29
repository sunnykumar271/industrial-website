import AnimatedSection from "@/components/ui/AnimatedSection";
import type { ApplicationItem } from "@/types/services";

// ─── Icon map ─────────────────────────────────────────────────────────────────
function AppIcon({ icon }: { icon: string }) {
  const map: Record<string, React.ReactNode> = {
    building: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="2" y="3" width="20" height="20" rx="1" /><path d="M8 21V10M16 21V10M2 10h20" />
      </svg>
    ),
    car: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1l3-3h8l3 3h1a2 2 0 012 2v6a2 2 0 01-2 2h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" />
      </svg>
    ),
    sun: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
    train: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="4" y="2" width="16" height="16" rx="2" /><path d="M4 10h16M12 2v8M7 18l-2 4M17 18l2 4" />
      </svg>
    ),
    factory: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M2 20V8l6-4v4l6-4v4l6-4v16H2z" />
      </svg>
    ),
    cpu: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <rect x="7" y="7" width="10" height="10" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
      </svg>
    ),
    home: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path d="M9 22V12h6v10" />
      </svg>
    ),
    zap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    wind: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M9.59 4.59A2 2 0 1111 8H2m10.59 11.41A2 2 0 1014 16H2m15.73-8.27A2.5 2.5 0 1119.5 12H2" />
      </svg>
    ),
    design: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    crosshair: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="3" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    chart: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    correction: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    refurbish: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M23 4v6h-6M1 20v-6h6" /><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
      </svg>
    ),
    shield: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" />
      </svg>
    ),
    clock: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
      </svg>
    ),
    globe: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  };

  return <>{map[icon] ?? map["factory"]}</>;
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface ApplicationsSectionProps {
  applications: ApplicationItem[];
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ApplicationsSection({
  applications,
}: ApplicationsSectionProps) {
  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="applications-heading"
    >
      <div className="container-custom">
        <AnimatedSection delay={0}>
          <div className="mb-10">
            <p className="eyebrow mb-3">Applications</p>
            <h2
              id="applications-heading"
              className="display-heading text-3xl text-[#0F172A] md:text-4xl"
            >
              Industries & Profile Types
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#64748B]">
              Common industries and typical profile types where this die
              category is used.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((app, index) => (
            <AnimatedSection key={app.industry} delay={index * 0.08}>
              <div className="h-full rounded-sm border border-[#CBD5E1] bg-white p-6 transition-shadow duration-300 hover:shadow-md">
                {/* Icon + industry name */}
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#EFF6FF] text-[#2563EB]">
                    <AppIcon icon={app.icon} />
                  </div>
                  <h3 className="font-barlow text-lg font-600 text-[#0F172A]">
                    {app.industry}
                  </h3>
                </div>

                {/* Profile list */}
                <ul className="space-y-2" aria-label={`${app.industry} profile types`}>
                  {app.profiles.map((profile) => (
                    <li
                      key={profile}
                      className="flex items-center gap-2 text-sm text-[#64748B]"
                    >
                      <span
                        className="h-1 w-1 shrink-0 rounded-full bg-[#2563EB]"
                        aria-hidden="true"
                      />
                      {profile}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
