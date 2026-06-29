import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { COMPANY } from "@/constants";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "About Us — Aluminium Extrusion Die Manufacturer Since 2003",
  description:
    "PrecisionDie Engineering — established 2003 in Vadodara, Gujarat. 21+ years manufacturing solid, hollow, and semi-hollow aluminium extrusion dies. ISO 9001:2015 certified.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PrecisionDie Engineering",
    description:
      "21+ years of aluminium extrusion die manufacturing. ISO 9001:2015 certified. 15,000+ dies delivered. Vadodara, Gujarat.",
    url: "/about",
    type: "website",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About PrecisionDie Engineering",
  url: "https://precisiondieeng.com/about",
  description:
    "History, mission, values, and team of PrecisionDie Engineering — aluminium extrusion die manufacturer since 2003.",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://precisiondieeng.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://precisiondieeng.com/about",
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: COMPANY.name,
    foundingDate: String(COMPANY.established),
    foundingLocation: {
      "@type": "Place",
      name: "Vadodara, Gujarat, India",
    },
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 75,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 14, GIDC Industrial Estate",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
    url: "https://precisiondieeng.com",
    sameAs: ["https://linkedin.com/company/precisiondieeng"],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "ISO 9001:2015",
        recognizedBy: {
          "@type": "Organization",
          name: "Bureau Veritas",
        },
      },
    ],
  },
};

// ─── Page Data ────────────────────────────────────────────────────────────────
/*
 * All data defined here as constants — not in a separate constants file
 * because this content is specific to this page and not reused elsewhere.
 */

const milestones = [
  {
    year: "2023",
    title: "Company Founded",
    description:
      "Established with a single milling machine and a commitment to delivering high-quality aluminium extrusion dies with precision and reliability.",
  },
  {
    year: "2024",
    title: "Capacity Expansion",
    description:
      "Invested in a second milling machine with DRO technology, increasing production capacity and improving machining accuracy.",
  },
  {
    year: "2025",
    title: "Surface Grinding Added",
    description:
      "Integrated an in-house surface grinding facility, enabling superior surface finish quality and tighter dimensional control.",
  },
  {
    year: "2026",
    title: "Trusted Across India",
    description:
      "Proudly serving 10+ clients across India and having successfully manufactured and delivered over 1,500 aluminium extrusion dies since inception.",
  },
];

const values = [
  {
    title: "Precision First",
    description:
      "Every decision — from steel procurement to bearing polish sequence — is evaluated on one criterion: does it improve dimensional accuracy? Shortcuts that risk tolerance are never taken.",
    icon: "crosshair",
  },
  {
    title: "Documented Accountability",
    description:
      "Every die has a paper trail from billet certificate to dispatch inspection report. If something goes wrong, we can trace exactly when, where, and why — and fix it permanently.",
    icon: "document",
  },
  {
    title: "Client Press Performance",
    description:
      "Our goal is not to deliver a die — it is to deliver a die that runs clean at your press on the first trial. We judge ourselves by your trial result, not by our dispatch note.",
    icon: "target",
  },
  {
    title: "Continuous Investment",
    description:
      "Every profitable year we reinvest in equipment. Our facility today would be unrecognisable to our 2003 selves — that gap between past and present is intentional.",
    icon: "trending",
  },
];

const team = [
  {
    name: "Kamlesh Prasad",
    role: "Founder",
    bio: "Started the business in 2023 after 12 years as a die correction specialist at a major Vadodara extruder. Still personally reviews every new die design before machining begins.",
    image: "/images/team/kamlesh.jpeg",
  },
  {
    name: "Rohit Chaudhary",
    role: "Managing & Head of Design",
    bio: "with 14 years of die design experience. Leads the CAD and simulation team — responsible for our 85%+ first-trial success rate.",
    image: "/images/team/rohit.jpeg",
  },
  {
    name: "Sunny Kumar",
    role: "Production Manager",
    bio: "Oversees CNC machining, EDM, and heat treatment scheduling. Implemented the in-process inspection system that reduced our correction rate by 60%.",
    image: "/images/team/sunny.jpeg",
  },
 
];

const stats = [
  { value: "3+", label: "Years in Operation", note: "Since 2003" },
  { value: "1,500+", label: "Dies Manufactured", note: "Solid, hollow & semi-hollow" },
  { value: "10+", label: "Active Clients", note: "across India" },
  { value: "5+", label: "Team Members", note: "Design to dispatch" },
];

// ─── Icon helper ──────────────────────────────────────────────────────────────
function ValueIcon({ icon }: { icon: string }) {
  const paths: Record<string, React.ReactNode> = {
    crosshair: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </>
    ),
    document: (
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </>
    ),
    trending: (
      <path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6" />
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-6 w-6"
      aria-hidden="true"
    >
      {paths[icon]}
    </svg>
  );
}

// ─── Page Component ───────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <PageHero
          eyebrow="Our Story"
          title="Built on Two Decades of"
          titleAccent="Die Making Discipline"
          description="From a single-machine workshop in 2003 to a 12,000 sq ft facility with 5-axis CNC, in-house nitriding, and a Zeiss CMM — the investment has always gone in one direction."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About" },
          ]}
        />

        {/* ── Company Story ─────────────────────────────────────────────── */}
        <section
          className="section-padding bg-white"
          aria-labelledby="story-heading"
        >
          <div className="container-custom">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              {/* Text */}
              <div>
                <AnimatedSection delay={0}>
                  <p className="eyebrow mb-3">Who We Are</p>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                  <h2
                    id="story-heading"
                    className="display-heading text-3xl text-[#0F172A] md:text-4xl"
                  >
                    A Die Maker Built by
                    <br />
                    <span className="text-[#2563EB]">Die Makers</span>
                  </h2>
                </AnimatedSection>

                <AnimatedSection delay={0.2}>
                  <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                    Shyam Engineering was founded in {COMPANY.established}
                    {" "}by Kamlesh Prasad and Rohit Chaudhary — a die correction specialist who had spent
                    12 years watching dies fail because of poor design and
                    inconsistent nitriding. He started the business with one
                    machine, one conviction, and one rule: never dispatch a die
                    you would not put on your own press.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.3}>
                  <p className="mt-4 text-base leading-relaxed text-[#64748B]">
                    That rule has not changed. What has changed is everything else
                    — the facility, the equipment, the team, and the clients. Today
                    we serve 320+ extruders across India. Every die still gets the same scrutiny Rohit applied
                    to the first one.
                  </p>
                </AnimatedSection>

                <AnimatedSection delay={0.4}>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {[
                      "ISO 9001:2015 Certified",
                      "H13 Certified Steel",
                      "Zeiss CMM Verified",
                    ].map((badge) => (
                      <span
                        key={badge}
                        className="flex items-center gap-2 rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2 text-xs font-semibold text-[#0F172A]"
                      >
                        <svg
                          className="h-3.5 w-3.5 text-[#2563EB]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {badge}
                      </span>
                    ))}
                  </div>
                </AnimatedSection>
              </div>

              {/* Facility image */}
              <AnimatedSection direction="right" delay={0.15}>
                <div className="relative">
                  {/* Decorative offset border */}
                  <div
                    className="absolute -bottom-4 -right-4 h-full w-full rounded-sm border border-[#2563EB]/20"
                    aria-hidden="true"
                  />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1E293B]">
                    <Image
                      src="/images/facility/Die_workshop.jpg"
                      alt="PrecisionDie Engineering manufacturing facility — CNC machining floor, Vadodara"
                      fill
                      sizes="(max-width:1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    {/* Overlay caption */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/90 to-transparent px-6 py-5">
                      <p className="font-barlow text-xl font-700 text-white">
                        Est. {COMPANY.established}
                      </p>
                      <p className="text-xs text-[#94a3b8]">
                        GIDC Industrial Estate, Vadodara, Gujarat
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── Stats Strip ──────────────────────────────────────────────── */}
        <section
          className="bg-[#0F172A] py-14"
          aria-label="Company statistics"
        >
          <div className="container-custom">
            <div className="grid grid-cols-2 gap-px bg-white/10 md:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center bg-[#0F172A] px-6 py-10 text-center"
                >
                  <span className="font-barlow text-[clamp(2rem,4vw,3rem)] font-800 leading-none text-white">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-sm font-600 text-white">
                    {stat.label}
                  </span>
                  <span className="mt-1 text-xs text-[#64748B]">
                    {stat.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Timeline ─────────────────────────────────────────────────── */}
        <section
          className="section-padding bg-[#F8FAFC]"
          aria-labelledby="timeline-heading"
        >
          <div className="container-custom">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <p className="eyebrow mb-3">Our Journey</p>
                <h2
                  id="timeline-heading"
                  className="display-heading text-3xl text-[#0F172A] md:text-4xl"
                >
                  21 Years of Milestones
                </h2>
              </div>
            </AnimatedSection>

            {/*
             * Vertical timeline — same alternating left/right pattern
             * as the home ProcessTimeline.
             * On mobile: single column with step node on the left.
             * On desktop: alternating sides with a centre connector line.
             */}
            <div className="relative mx-auto max-w-3xl">
              {/* Centre connector line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-px bg-[#CBD5E1] md:left-1/2"
                aria-hidden="true"
              />

              <div className="space-y-10">
                {milestones.map((milestone, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <AnimatedSection
                      key={milestone.year}
                      delay={index * 0.08}
                      direction={isEven ? "left" : "right"}
                    >
                      <div
                        className={`relative flex gap-6 md:items-center md:gap-0 ${
                          isEven ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                      >
                        {/* Year node */}
                        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#0F172A] font-barlow text-xs font-700 text-white md:absolute md:left-1/2 md:-translate-x-1/2">
                          <span className="sr-only">Year: </span>
                          {milestone.year.slice(2)}
                        </div>

                        {/* Card */}
                        <div
                          className={`flex-1 rounded-sm border border-[#CBD5E1] bg-white p-5 md:mx-4 ${
                            isEven
                              ? "md:mr-[calc(50%+1.5rem)] md:ml-0"
                              : "md:ml-[calc(50%+1.5rem)] md:mr-0"
                          }`}
                        >
                          <div className="mb-2 flex items-center gap-3">
                            <span className="font-mono text-xs font-semibold text-[#2563EB]">
                              {milestone.year}
                            </span>
                            <h3 className="font-barlow text-lg font-600 text-[#0F172A]">
                              {milestone.title}
                            </h3>
                          </div>
                          <p className="text-sm leading-relaxed text-[#64748B]">
                            {milestone.description}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────────────────── */}
        <section
          className="section-padding bg-[#0F172A]"
          aria-labelledby="values-heading"
        >
          <div className="container-custom">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <p className="eyebrow mb-3 text-[#60a5fa]">What We Stand For</p>
                <h2
                  id="values-heading"
                  className="display-heading text-3xl text-white md:text-4xl"
                >
                  Our Core Values
                </h2>
              </div>
            </AnimatedSection>

            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((value, i) => (
                <AnimatedSection key={value.title} delay={i * 0.09}>
                  <div className="flex h-full gap-5 rounded-sm border border-white/10 bg-white/5 p-6">
                    {/* Icon */}
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm bg-[#2563EB]/10 text-[#2563EB]">
                      <ValueIcon icon={value.icon} />
                    </div>
                    <div>
                      <h3 className="font-barlow text-lg font-600 text-white">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────────────────── */}
       <section
          className="section-padding bg-white"
          aria-labelledby="team-heading"
        >
          <div className="container-custom">
            <AnimatedSection>
              <div className="mb-12 text-center">
                <p className="eyebrow mb-3">The People</p>
                <h2
                  id="team-heading"
                  className="display-heading text-3xl text-[#0F172A] md:text-4xl"
                >
                  Leadership Team
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-base text-[#64748B]">
                  The people responsible for the quality of every die that
                  leaves our facility.
                </p>
              </div>
            </AnimatedSection>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member, i) => (
                <AnimatedSection key={member.name} delay={i * 0.09}>
                  <div className="flex flex-col rounded-sm border border-[#CBD5E1] bg-[#F8FAFC] overflow-hidden">
                    {/*
                     * Team member photo.
                     * aspect-[3/4] gives a portrait ratio — appropriate for
                     * headshots. Replace src with actual photos.
                     * placeholder="blur" requires a blurDataURL for external
                     * images — for local images Next.js generates it automatically.
                     */}
                   <div className="relative aspect-[3/4] bg-[#1E293B]">
                      <Image
                        src={member.image}
                        alt={`${member.name} — ${member.role} at ${COMPANY.name}`}
                        fill
                        sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-5">
                      <h3 className="font-barlow text-lg font-600 text-[#0F172A]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#2563EB]">
                        {member.role}
                      </p>
                      <p className="mt-3 text-xs leading-relaxed text-[#64748B]">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section> 

        {/* ── Facility quick facts ──────────────────────────────────────── */}
        <section
          className="section-padding bg-[#F8FAFC]"
          aria-labelledby="facility-heading"
        >
          <div className="container-custom">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

              <AnimatedSection direction="left">
                <p className="eyebrow mb-3">Our Facility</p>
                <h2
                  id="facility-heading"
                  className="display-heading text-3xl text-[#0F172A] md:text-4xl"
                >
                  1,200 sq ft.
                  <br />
                  <span className="text-[#2563EB]">In-House Machining Capabilities.</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#64748B]">
                Today, we operate a 1,200 sq ft facility
                equipped with two DRO machines and a dedicated die surfacing machine.
                To ensure complete die manufacturing capability, we collaborate with
                qualified external partners for VMC machining, wire-cut EDM, sinker EDM,
                and vacuum nitriding processes. Every outsourced operation is carried
                out according to our engineering drawings, inspection requirements, and
                quality standards before final approval.
                </p>

                {/* Facility specs list */}
                <ul className="mt-8 space-y-3">
                  {[
                    "Conventional milling machines for precision die machining",
                    "DRO-equipped milling machine for improved dimensional accuracy",
                    "Surface grinding machine for superior surface finish and flatness",
                    "Precision measuring instruments for dimensional inspection",
                    "Dedicated tooling and fixturing for die manufacturing",
                    "Experienced machinists ensuring consistent quality standards",
                  ].map((spec) => (
                    <li
                      key={spec}
                      className="flex items-start gap-3 text-sm text-[#64748B]"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              {/* Second facility image */}
              <AnimatedSection direction="right" delay={0.1}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-[#1E293B]">
                  <Image
                    src="/images/facility/cnc-floor.jpg"
                    alt="5-axis CNC machining centre at PrecisionDie Engineering facility"
                    fill
                    sizes="(max-width:1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────── */}
        <section
          className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28"
          aria-labelledby="about-cta-heading"
        >
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px,rgba(100,116,139,0.12) 1px,transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="container-custom relative text-center">
            <AnimatedSection>
              <p className="eyebrow mb-4 text-[#60a5fa]">Work With Us</p>
              <h2
                id="about-cta-heading"
                className="display-heading text-[clamp(2rem,5vw,3.5rem)] text-white"
              >
                Let&apos;s Build Your Next Die Together
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base text-[#94a3b8]">
                Send us your profile drawing. We will quote within 24 hours
                — fixed price, no hidden costs.
              </p>
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <Link href="/contact" className="btn-primary px-8 py-4 text-base">
                  Request a Quote
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Link>
                <Link href="/services" className="btn-outline-white px-8 py-4 text-base">
                  View Our Dies
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}