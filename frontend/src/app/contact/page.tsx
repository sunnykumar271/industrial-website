import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import AnimatedSection from "@/components/ui/AnimatedSection";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY } from "@/constants";

import Link from "next/dist/client/link";

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Contact Us — Get a Quote Within 24 Hours",
  description:
    "Contact PrecisionDie Engineering for aluminium extrusion die quotes, die correction, and refurbishment enquiries. Upload your drawing — response within 24 hours. Vadodara, Gujarat.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | PrecisionDie Engineering",
    description:
      "Send your profile drawing and get a fixed die quote within 24 hours. Based in Vadodara, Gujarat — serving India, Middle East, and East Africa.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PrecisionDie Engineering",
    description:
      "Get an extrusion die quote within 24 hours. Upload your DXF, DWG, or PDF drawing.",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
/*
 * ContactPage schema explicitly tells Google this page's purpose.
 * The mainEntity Organization includes:
 *   - contactPoint — marks the page as a contact channel
 *   - address — required for local SEO
 *   - openingHoursSpecification — helps Google show business hours
 *     in the knowledge panel and Maps listing.
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact PrecisionDie Engineering",
  description:
    "Contact form and office details for PrecisionDie Engineering — aluminium extrusion die manufacturer, Vadodara, Gujarat.",
  url: "https://precisiondieeng.com/contact",
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
        name: "Contact",
        item: "https://precisiondieeng.com/contact",
      },
    ],
  },
  mainEntity: {
    "@type": "Organization",
    name: COMPANY.name,
    url: "https://precisiondieeng.com",
    telephone: COMPANY.phone,
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot 14, GIDC Industrial Estate",
      addressLocality: "Vadodara",
      addressRegion: "Gujarat",
      postalCode: "390010",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: COMPANY.phone,
      email: COMPANY.email,
      availableLanguage: ["English", "Hindi", "Gujarati"],
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday","Tuesday","Wednesday",
          "Thursday","Friday","Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday","Tuesday","Wednesday",
        "Thursday","Friday","Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  },
};

// ─── Contact Info Items ───────────────────────────────────────────────────────
/*
 * Defined here (not in a separate ContactInfo component) because
 * the data is simple enough that a separate file adds no value.
 * If this grows (multiple offices, department contacts), extract it.
 */
const contactInfoItems = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Factory Address",
    value: COMPANY.address,
    href: "https://maps.google.com/?q=GIDC+Industrial+Estate+Vadodara+Gujarat",
    external: true,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
    external: false,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    external: false,
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    label: "Working Hours",
    value: "Monday – Saturday, 9:00 AM – 6:00 PM IST",
    href: undefined,
    external: false,
  },
];

// ─── Page Component ───────────────────────────────────────────────────────────
/*
 * contact/page.tsx is a React Server Component.
 *
 * ContactForm is the ONLY client component on this page.
 * It is dynamically imported with ssr: false would be an option, but
 * it renders fine on the server (no window/document usage at module level),
 * so a regular import is correct and faster.
 *
 * Layout:
 *   - Full-width PageHero (dark navy)
 *   - Two-column section below:
 *       Left  (lg:col-span-3) → ContactForm
 *       Right (lg:col-span-2) → Contact info + response time promise
 */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <main id="main-content">

        {/* ── Hero ────────────────────────────────────────────────────── */}
        <PageHero
          eyebrow="Get in Touch"
          title="Request a Quote"
          titleAccent="Within 24 Hours"
          description="Upload your profile drawing (DXF, DWG, or PDF) and tell us your requirements. We will send you a fixed, itemised quote by the next business day."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact" },
          ]}
        />

        {/* ── Main Content ─────────────────────────────────────────────── */}
        <section
          className="section-padding bg-[#F8FAFC]"
          aria-labelledby="contact-form-heading"
        >
          <div className="container-custom">
            <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

              {/* ── Left: Form ───────────────────────────────────────── */}
              <div className="lg:col-span-3">
                <AnimatedSection direction="left" delay={0}>
                  <div className="rounded-sm border border-[#CBD5E1] bg-white p-6 shadow-sm md:p-10">
                    <div className="mb-8">
                      <p className="eyebrow mb-2">Enquiry Form</p>
                      <h2
                        id="contact-form-heading"
                        className="display-heading text-2xl text-[#0F172A] md:text-3xl"
                      >
                        Tell Us About Your Project
                      </h2>
                      <p className="mt-2 text-sm text-[#64748B]">
                        Fields marked with{" "}
                        <span className="text-[#2563EB] font-semibold">*</span>{" "}
                        are required. A drawing upload helps us quote faster.
                      </p>
                    </div>

                    {/*
                     * ContactForm is the "use client" boundary.
                     * Everything above this line renders as static HTML.
                     * React Hook Form, useState, and event handlers
                     * are all contained inside ContactForm.tsx.
                     */}
                    <ContactForm />
                  </div>
                </AnimatedSection>
              </div>

              {/* ── Right: Info panel ───────────────────────────────── */}
              <div className="lg:col-span-2">
                <AnimatedSection direction="right" delay={0.1}>
                  <div className="space-y-6">

                    {/* Contact details card */}
                    <div className="rounded-sm border border-[#CBD5E1] bg-white p-6 shadow-sm">
                      <h3 className="font-barlow text-xl font-600 text-[#0F172A] mb-5">
                        Contact Details
                      </h3>
                      <ul className="space-y-5">
                        {contactInfoItems.map((item) => (
                          <li key={item.label} className="flex items-start gap-4">
                            {/* Icon box */}
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-[#EFF6FF] text-[#2563EB]">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                                {item.label}
                              </p>
                              {item.href ? (
                                 <Link
                                  href={item.href}
                                  target={item.external ? "_blank" : undefined}
                                  rel={item.external ? "noopener noreferrer" : undefined}
                                  className="mt-0.5 block text-sm text-[#0F172A] transition-colors hover:text-[#2563EB]"
                                >   
                                  {item.value}
                                </Link>
                              ) : (
                                <p className="mt-0.5 text-sm text-[#0F172A]">
                                  {item.value}
                                </p>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Response promise card */}
                    <div className="rounded-sm border border-[#2563EB]/20 bg-[#EFF6FF] p-6">
                      <div className="flex items-start gap-3">
                        <svg className="mt-0.5 h-5 w-5 shrink-0 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <div>
                          <p className="font-semibold text-[#0F172A]">
                            24-Hour Response Promise
                          </p>
                          <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
                            Every enquiry received before 5 PM IST on a business
                            day receives a response — including a quote or a
                            feasibility confirmation — by the following business day.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* What to include card */}
                    <div className="rounded-sm border border-[#CBD5E1] bg-white p-6">
                      <h3 className="mb-4 font-barlow text-base font-600 text-[#0F172A]">
                        For a Faster Quote, Include:
                      </h3>
                      <ul className="space-y-2.5">
                        {[
                          "Profile DXF or DWG drawing",
                          "Alloy and temper (e.g. 6063-T5)",
                          "Press circle size and tonnage",
                          "Required tolerances",
                          "Estimated monthly quantity (kg)",
                        ].map((tip) => (
                          <li key={tip} className="flex items-start gap-2.5 text-sm text-[#64748B]">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-[#2563EB]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* GST info */}
                    <p className="text-xs text-[#94a3b8]">
                      GST No.:{" "}
                      <span className="font-mono tracking-wider">
                        {COMPANY.gst}
                      </span>
                    </p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}