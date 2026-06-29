import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { INDUSTRY_MAP, INDUSTRY_SLUGS } from "@/constants/industries";

// ─── Icon component ───────────────────────────────────────────────────────────
function IndustryIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    building: <><rect x="2" y="3" width="20" height="20" rx="1" /><path d="M8 21V10M16 21V10M2 10h20" /></>,
    car: <><path d="M5 17H3a2 2 0 01-2-2V9a2 2 0 012-2h1l3-3h8l3 3h1a2 2 0 012 2v6a2 2 0 01-2 2h-2" /><circle cx="7.5" cy="17.5" r="2.5" /><circle cx="16.5" cy="17.5" r="2.5" /></>,
    zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />,
    sun: <><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>,
    train: <><rect x="4" y="2" width="16" height="16" rx="2" /><path d="M4 10h16M12 2v8M7 18l-2 4M17 18l2 4" /></>,
    factory: <path d="M2 20V8l6-4v4l6-4v4l6-4v16H2z" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function IndustriesGrid() {
  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="industries-grid-heading"
    >
      <div className="container-custom">
        <div className="mb-12 text-center">
          <AnimatedSection>
            <p className="eyebrow mb-3">All Industries</p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2
              id="industries-grid-heading"
              className="display-heading text-3xl text-[#0F172A] md:text-4xl"
            >
              Select Your Industry
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#64748B]">
              Explore the specific die profiles and technical challenges we
              solve for each sector.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRY_SLUGS.map((slug, index) => {
            const industry = INDUSTRY_MAP[slug];
            return (
              <AnimatedSection key={slug} delay={index * 0.08}>
                <Link
                  href={`/industries/${slug}`}
                  className="group flex h-full flex-col rounded-sm border border-[#CBD5E1] bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/50 hover:shadow-md"
                  aria-label={`${industry.title} — view profiles and solutions`}
                >
                  {/* Icon */}
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-sm bg-[#EFF6FF] text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white">
                    <IndustryIcon icon={industry.icon} />
                  </div>

                  <h3 className="font-barlow text-xl font-600 text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
                    {industry.title}
                  </h3>

                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">
                    {industry.tagline}
                  </p>

                  {/* Profile count chip */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-medium text-[#64748B]">
                      {industry.profiles.length} profile types
                    </span>
                    <svg
                      className="h-4 w-4 text-[#64748B] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#2563EB]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
