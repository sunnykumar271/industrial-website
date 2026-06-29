"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { PROCESS_STEPS } from "@/constants";

// ─── Component ────────────────────────────────────────────────────────────────
export default function ProcessTimeline() {
  const prefersReducedMotion = useReducedMotion();
  const lineRef = useRef<HTMLDivElement>(null);
  const lineInView = useInView(lineRef, { once: true, amount: 0.1 });

  return (
    <section
      className="section-padding bg-[#F8FAFC]"
      aria-labelledby="process-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="How We Work"
          title="From Drawing to Delivery in 8 Days"
          description="A disciplined 6-stage process ensures every die we ship performs to specification on the first trial."
          id="process-heading"
        />

        {/* Timeline wrapper */}
        <div className="relative mx-auto max-w-3xl">
          {/*
           * Vertical connector line — animates its height from 0% to 100%
           * as the section enters the viewport. This creates a "drawing"
           * effect that reinforces the sequential process narrative.
           *
           * The line is purely decorative; aria-hidden prevents screen readers
           * from announcing it.
           */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 bottom-0 w-px bg-[#CBD5E1] md:left-1/2"
            aria-hidden="true"
          >
            {!prefersReducedMotion && (
              <motion.div
                className="absolute inset-x-0 top-0 bg-[#2563EB]"
                initial={{ height: "0%" }}
                animate={lineInView ? { height: "100%" } : { height: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              />
            )}
          </div>

          {/* Steps */}
          <div className="space-y-10 md:space-y-0">
            {PROCESS_STEPS.map((step, index) => {
              /*
               * Alternate sides on desktop (zig-zag layout).
               * On mobile all cards are left-aligned with the line on the left.
               *
               * even index → content on the right of the line
               * odd index → content on the left of the line
               */
              const isEven = index % 2 === 0;

              return (
                <AnimatedSection
                  key={step.step}
                  delay={index * 0.1}
                  direction={isEven ? "left" : "right"}
                >
                  <div
                    className={`relative flex gap-6 md:items-center md:gap-0 ${
                      isEven
                        ? "md:flex-row"
                        : "md:flex-row-reverse"
                    }`}
                  >
                    {/*
                     * Step number node — sits on the centre line.
                     * z-10 ensures it appears above the line div.
                     */}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#2563EB] font-barlow text-lg font-700 text-white shadow-md shadow-[#2563EB]/30 md:absolute md:left-1/2 md:-translate-x-1/2">
                      {String(step.step).padStart(2, "0")}
                    </div>

                    {/* Content card */}
                    <div
                      className={`flex-1 card md:mx-4 ${
                        isEven ? "md:mr-[calc(50%+1.5rem)] md:ml-0" : "md:ml-[calc(50%+1.5rem)] md:mr-0"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <h3 className="font-barlow text-lg font-600 text-[#0F172A] md:text-xl">
                          {step.title}
                        </h3>
                        {/* Duration badge */}
                        <span className="shrink-0 rounded-sm bg-[#EFF6FF] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#2563EB]">
                          {step.duration}
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-[#64748B]">
                        {step.description}
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
  );
}
