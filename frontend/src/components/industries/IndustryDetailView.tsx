import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import PageHero from "@/components/ui/PageHero";
import type { IndustryDetail } from "@/types/pages";
import { ServiceCTAInline } from "@/components/services/ServiceCTA";

// ─── Props ────────────────────────────────────────────────────────────────────
interface IndustryDetailViewProps {
  industry: IndustryDetail;
}

// ─── Sub-section: Profile Cards ───────────────────────────────────────────────
function ProfileCard({ name, description }: { name: string; description: string }) {
  return (
    <div className="rounded-sm border border-[#CBD5E1] bg-white p-5 transition-shadow hover:shadow-sm">
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-sm bg-[#EFF6FF]">
        <span className="h-2 w-2 rounded-full bg-[#2563EB]" aria-hidden="true" />
      </div>
      <h3 className="font-barlow text-base font-600 text-[#0F172A]">{name}</h3>
      <p className="mt-1 text-sm leading-relaxed text-[#64748B]">{description}</p>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function IndustryDetailView({ industry }: IndustryDetailViewProps) {
  return (
    <>
      {/* Hero */}
      <PageHero
        eyebrow={`Industry — ${industry.title}`}
        title={industry.title}
        description={industry.tagline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      >
        {/* Stat strip inside hero */}
        <div className="mt-10 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4">
          {industry.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center bg-[#0F172A] px-5 py-6 text-center">
              <span className="font-barlow text-2xl font-700 text-white">{stat.value}</span>
              <span className="mt-1 text-[10px] uppercase tracking-widest text-[#64748B]">{stat.label}</span>
            </div>
          ))}
        </div>
      </PageHero>

      {/* Description + image */}
      <section className="section-padding bg-white" aria-label={`About ${industry.title}`}>
        <div className="container-custom">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <AnimatedSection direction="left">
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="display-heading text-3xl text-[#0F172A] md:text-4xl">
                Why the {industry.title}
                <br />
                <span className="text-[#2563EB]">Sector Chooses Us</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                {industry.description}
              </p>
              <Link href="/contact" className="btn-primary mt-8">
                Discuss Your Profile
              </Link>
            </AnimatedSection>

            {/*
             * next/image with fill requires a sized parent.
             * aspect-[4/3] + relative + overflow-hidden is the pattern.
             * sizes prop gives the browser correct srcset hints for this
             * 50vw column layout on large screens.
             */}
            <AnimatedSection direction="right" delay={0.1}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1E293B]">
                <Image
                  src={industry.heroImage}
                  alt={industry.heroImageAlt}
                  fill
                  sizes="(max-width:1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Profile types grid */}
      <section className="section-padding bg-[#F8FAFC]" aria-labelledby="profiles-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-10">
              <p className="eyebrow mb-3">Profile Types</p>
              <h2 id="profiles-heading" className="display-heading text-3xl text-[#0F172A] md:text-4xl">
                Common Profiles We Die For
              </h2>
              <p className="mt-3 max-w-xl text-base text-[#64748B]">
                Typical profile categories we design and manufacture dies for in the{" "}
                {industry.title.toLowerCase()} sector.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.profiles.map((profile, i) => (
              <AnimatedSection key={profile.name} delay={i * 0.07}>
                <ProfileCard name={profile.name} description={profile.description} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges & Solutions — 2-col on lg */}
      <section className="section-padding bg-[#0F172A]" aria-labelledby="challenges-heading">
        <div className="container-custom">
          <AnimatedSection>
            <div className="mb-10">
              <p className="eyebrow mb-3 text-[#60a5fa]">Technical Deep Dive</p>
              <h2 id="challenges-heading" className="display-heading text-3xl text-white md:text-4xl">
                Challenges & Solutions
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Challenges */}
            <AnimatedSection direction="left" delay={0.1}>
              <div className="rounded-sm border border-white/10 bg-white/5 p-8">
                <h3 className="mb-6 font-barlow text-xl font-600 text-white">
                  Industry Challenges
                </h3>
                <ul className="space-y-4">
                  {industry.challenges.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#94a3b8]">
                      {/* Warning dot */}
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-amber-400" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Solutions */}
            <AnimatedSection direction="right" delay={0.15}>
              <div className="rounded-sm border border-[#2563EB]/30 bg-[#2563EB]/5 p-8">
                <h3 className="mb-6 font-barlow text-xl font-600 text-white">
                  How We Solve Them
                </h3>
                <ul className="space-y-4">
                  {industry.solutions.map((s, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#94a3b8]">
                      {/* Tick dot */}
                      <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Inline CTA */}
      <ServiceCTAInline title={`Dies for ${industry.title}`} />
    </>
  );
}
