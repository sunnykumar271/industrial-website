import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import { SERVICE_MAP, PRODUCT_SLUGS, SERVICE_SLUGS } from "@/constants/services";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Aluminium Extrusion Dies & Services — Solid, Hollow, Semi-Hollow",
  description:
    "Complete range of aluminium extrusion dies — solid, hollow, and semi-hollow — plus die design, correction, and refurbishment services. Vadodara, Gujarat.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Aluminium Extrusion Dies & Services | PrecisionDie Engineering",
    description:
      "Solid, hollow, and semi-hollow extrusion dies plus die design, correction, and refurbishment. All in-house. 8-day lead time.",
    url: "/services",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
/*
 * ItemList schema lists all six service pages as a structured collection.
 * This can generate a rich result in Google search showing sub-links
 * directly under the site listing — high click-through value for this page.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Aluminium Extrusion Die Products & Services",
  description:
    "PrecisionDie Engineering's complete range of extrusion dies and value-add services.",
  itemListElement: Object.values(SERVICE_MAP).map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.title,
    url: `https://precisiondieeng.com/services/${s.slug}`,
    description: s.tagline,
  })),
};

// ─── Category Card ────────────────────────────────────────────────────────────
function ServiceCard({
  slug,
  index,
  dark = false,
}: {
  slug: string;
  index: number;
  dark?: boolean;
}) {
  const service = SERVICE_MAP[slug];
  if (!service) return null;

  return (
    <AnimatedSection delay={index * 0.08}>
      <Link
        href={`/services/${service.slug}`}
        className={`group flex h-full flex-col rounded-sm border p-6 transition-all duration-300 ${
          dark
            ? "border-white/10 bg-white/5 hover:border-[#2563EB]/50 hover:bg-white/8"
            : "border-[#CBD5E1] bg-white hover:border-[#2563EB]/50 hover:shadow-md"
        }`}
        aria-label={`Learn about ${service.title}`}
      >
        {/* Category pill */}
        <span
          className={`mb-5 inline-flex w-fit rounded-sm px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
            service.category === "product"
              ? "bg-[#2563EB]/10 text-[#2563EB]"
              : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {service.category === "product" ? "Die Product" : "Service"}
        </span>

        <h3
          className={`font-barlow text-xl font-600 leading-snug transition-colors group-hover:text-[#2563EB] ${
            dark ? "text-white" : "text-[#0F172A]"
          }`}
        >
          {service.title}
        </h3>

        <p
          className={`mt-3 flex-1 text-sm leading-relaxed ${
            dark ? "text-[#94a3b8]" : "text-[#64748B]"
          }`}
        >
          {service.tagline}
        </p>

        {/* Key points preview — first 3 */}
        <ul className="mt-4 space-y-1.5">
          {service.keyPoints.slice(0, 3).map((pt) => (
            <li
              key={pt}
              className={`flex items-start gap-2 text-xs ${
                dark ? "text-[#64748B]" : "text-[#64748B]"
              }`}
            >
              <svg
                className="mt-0.5 h-3 w-3 shrink-0 text-[#2563EB]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {pt}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] transition-colors group-hover:text-[#2563EB]">
          Full details
          <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </Link>
    </AnimatedSection>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main id="main-content">

        {/* ── Page Hero ───────────────────────────────────────────────── */}
        <section className="bg-[#0F172A] pb-16 pt-28 md:pb-20 md:pt-36">
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[400px]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(100,116,139,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="container-custom relative">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-[#64748B]">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-[#CBD5E1]" aria-current="page">Products & Services</li>
              </ol>
            </nav>

            <p className="eyebrow mb-4">Complete Offering</p>
            <h1 className="display-heading max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] text-white">
              Die Products
              <br />
              <span className="text-[#2563EB]">& Services</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-[#94a3b8] md:text-lg">
              Three die categories. Three value-add services. Everything your
              extrusion operation needs — from first design to end-of-life
              refurbishment.
            </p>
          </div>
        </section>

        {/* ── Die Products ─────────────────────────────────────────────── */}
        <section className="section-padding bg-[#0F172A]" aria-labelledby="products-section">
          <div className="container-custom">
            <AnimatedSection delay={0}>
              <div className="mb-10 flex items-end justify-between">
                <div>
                  <p className="eyebrow mb-2 text-[#60a5fa]">Die Products</p>
                  <h2 id="products-section" className="display-heading text-2xl text-white md:text-3xl">
                    Solid, Hollow & Semi-Hollow Dies
                  </h2>
                </div>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {PRODUCT_SLUGS.map((slug, i) => (
                <ServiceCard key={slug} slug={slug} index={i} dark />
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="bg-[#0F172A]">
          <div className="container-custom">
            <div className="h-px bg-white/10" aria-hidden="true" />
          </div>
        </div>

        {/* ── Value-Add Services ───────────────────────────────────────── */}
        <section className="section-padding bg-[#F8FAFC]" aria-labelledby="services-section">
          <div className="container-custom">
            <AnimatedSection delay={0}>
              <div className="mb-10">
                <p className="eyebrow mb-2">Value-Add Services</p>
                <h2 id="services-section" className="display-heading text-2xl text-[#0F172A] md:text-3xl">
                  Design, Correction & Refurbishment
                </h2>
                <p className="mt-3 max-w-xl text-base text-[#64748B]">
                  Beyond the die itself — we support the complete lifecycle.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {SERVICE_SLUGS.map((slug, i) => (
                <ServiceCard key={slug} slug={slug} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <ServiceCTA serviceTitle="Our Products & Services" />
      </main>
      <Footer />
    </>
  );
}
