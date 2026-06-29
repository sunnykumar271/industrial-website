// src/app/capabilities/page.tsx

import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHero from "@/components/ui/PageHero";
import CapabilityCard from "@/components/capabilities/CapabilityCard";
import { ServiceCTAInline } from "@/components/services/ServiceCTA";
import { CAPABILITIES } from "@/constants/pages";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities — CAD Design, VMC, Wire EDM, Nitriding",
  description:
    "In-house capabilities at PrecisionDie Engineering — CAD die design, 5-axis CNC machining, wire EDM, vacuum nitriding, and CMM quality inspection. Vadodara, Gujarat.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Manufacturing Capabilities | PrecisionDie Engineering",
    description:
      "Five core in-house capabilities that deliver ±0.005mm die accuracy and 8-day lead time.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero */}
        <PageHero
          eyebrow="What We Do In-House"
          title="Manufacturing"
          titleAccent="Capabilities"
          description="Every process — from CAD design to vacuum nitriding — happens under our roof. No outsourcing, no delays, no quality hand-offs."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Capabilities" },
          ]}
        />

        {/* Capability cards grid */}
        <section
          className="section-padding bg-[#F8FAFC]"
          aria-labelledby="capabilities-grid-heading"
        >
          <div className="container-custom">
            <div className="mb-12 text-center">
              <p className="eyebrow mb-3">All Capabilities</p>
              <h2
                id="capabilities-grid-heading"
                className="display-heading text-3xl text-[#0F172A] md:text-4xl"
              >
                Five Processes. One Facility.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-[#64748B]">
                Click any capability to see full specifications, equipment
                details, and what it means for your die quality.
              </p>
            </div>

            {/*
             * CapabilityCard already contains the <Link> internally.
             * href="/capabilities/cad-design" etc. is built from capability.slug
             * inside the card component — no Link needed here.
             */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CAPABILITIES.map((capability, index) => (
                <CapabilityCard
                  key={capability.slug}
                  capability={capability}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <ServiceCTAInline title="Our Capabilities" />
      </main>
      <Footer />
    </>
  );
}