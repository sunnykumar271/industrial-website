import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { SERVICE_MAP } from "@/constants/services";

// ─── Props ────────────────────────────────────────────────────────────────────
interface RelatedServicesProps {
  slugs: string[];
  currentSlug: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function RelatedServices({
  slugs,
  currentSlug,
}: RelatedServicesProps) {
  /*
   * Filter out the current page's slug in case it was accidentally included,
   * then resolve each slug to its ServiceDetail object from the data map.
   * We filter out undefined to keep TypeScript happy — shouldn't happen
   * with valid data, but defensive coding is good practice.
   */
  const related = slugs
    .filter((s) => s !== currentSlug)
    .map((s) => SERVICE_MAP[s])
    .filter(Boolean)
    .slice(0, 3); // Never show more than 3 related items

  if (related.length === 0) return null;

  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="related-heading"
    >
      <div className="container-custom">
        <AnimatedSection delay={0}>
          <div className="mb-10">
            <p className="eyebrow mb-3">Also From PrecisionDie</p>
            <h2
              id="related-heading"
              className="display-heading text-3xl text-[#0F172A] md:text-4xl"
            >
              Related Products & Services
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((service, index) => (
            <AnimatedSection key={service.slug} delay={index * 0.1}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col rounded-sm border border-[#CBD5E1] bg-white p-6 transition-all duration-300 hover:border-[#2563EB]/50 hover:shadow-md"
                aria-label={`Learn more about ${service.title}`}
              >
                {/* Category label */}
                <span
                  className={`mb-4 inline-flex w-fit rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
                    service.category === "product"
                      ? "bg-[#EFF6FF] text-[#2563EB]"
                      : "bg-[#F0FDF4] text-[#16a34a]"
                  }`}
                >
                  {service.category === "product" ? "Die Product" : "Service"}
                </span>

                <h3 className="font-barlow text-xl font-600 text-[#0F172A] transition-colors group-hover:text-[#2563EB]">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B]">
                  {service.tagline}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] transition-colors group-hover:text-[#2563EB]">
                  Learn more
                  <svg
                    className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
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
          ))}
        </div>
      </div>
    </section>
  );
}
