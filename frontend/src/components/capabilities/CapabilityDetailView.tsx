import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";
import { ServiceCTAInline } from "@/components/services/ServiceCTA";
import type { CapabilityDetail } from "@/types/pages";

// ─── Props ────────────────────────────────────────────────────────────────────
interface CapabilityDetailViewProps {
  capability: CapabilityDetail;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CapabilityDetailView({ capability }: CapabilityDetailViewProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={`Capability — ${capability.shortTitle}`}
        title={capability.title}
        description={capability.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Capabilities", href: "/capabilities" },
          { label: capability.shortTitle },
        ]}
      />

      {/* Description + Image */}
      <section className="section-padding bg-white" aria-label={`${capability.title} overview`}>
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="display-heading text-3xl text-[#0F172A] md:text-4xl">
                {capability.shortTitle}
                <br />
                <span className="text-[#2563EB]">at PrecisionDie</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                {capability.description}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1E293B]">
                <Image
                  src={capability.heroImage}
                  alt={capability.heroImageAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Specs + Features — 2 column */}
      <section className="section-padding bg-[#F8FAFC]" aria-labelledby="cap-specs-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-10">
              <p className="eyebrow mb-3">Technical Details</p>
              <h2 id="cap-specs-heading" className="display-heading text-3xl text-[#0F172A] md:text-4xl">
                Specifications & Features
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Specs table */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="overflow-hidden rounded-sm border border-[#CBD5E1]">
                <table className="w-full border-collapse text-sm" aria-label={`${capability.shortTitle} specifications`}>
                  <thead>
                    <tr className="bg-[#0F172A]">
                      <th scope="col" className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Parameter</th>
                      <th scope="col" className="px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[#94a3b8]">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {capability.specs.map((spec, i) => (
                      <tr key={spec.label} className={i % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]"}>
                        <td className="border-t border-[#CBD5E1] px-5 py-3 font-medium text-[#0F172A]">{spec.label}</td>
                        <td className="border-t border-[#CBD5E1] px-5 py-3 font-mono text-[#1E293B]">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>

            {/* Features list */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="rounded-sm border border-[#CBD5E1] bg-white p-6 lg:p-8">
                <h3 className="mb-5 font-barlow text-xl font-600 text-[#0F172A]">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {capability.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-[#64748B]">
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Outcomes / Benefits */}
      <section className="section-padding bg-[#0F172A]" aria-labelledby="outcomes-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-10">
              <p className="eyebrow mb-3 text-[#60a5fa]">What You Get</p>
              <h2 id="outcomes-heading" className="display-heading text-3xl text-white md:text-4xl">
                Outcomes for Your Dies
              </h2>
            </div>
          </AnimatedSection>

          {/*
           * 2×2 grid on desktop — each outcome gets a card with a large
           * step number for visual hierarchy. Clean and easy to scan.
           */}
          <div className="grid gap-4 sm:grid-cols-2">
            {capability.outcomes.map((outcome, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex items-start gap-5 rounded-sm border border-white/10 bg-white/5 p-6">
                  <span className="font-barlow text-3xl font-800 text-[#2563EB]/40 leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-relaxed text-[#94a3b8]">{outcome}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <ServiceCTAInline title={capability.shortTitle} />
    </>
  );
}
