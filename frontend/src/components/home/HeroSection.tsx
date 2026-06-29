"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useReducedMotion } from "framer-motion";
import {COMPANY} from "@/constants";
// ─── Animation Variants ──────────────────────────────────────────────────────
/*
 * container — orchestrates staggerChildren so each child animates in sequence.
 * delayChildren: 0.3s waits for the page to stabilise before any motion begins.
 */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

/*
 * item — each headline word/line slides up and fades in.
 * The custom ease [0.22, 1, 0.36, 1] gives a mechanical snap — appropriate
 * for an industrial brand. It's faster at the start and settles firmly.
 */
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ─── Hero Stats Strip ────────────────────────────────────────────────────────
const heroStats = [
  { value: "3+", label: "Years in Production" },
  { value: "1,500+", label: "Dies Delivered" },
  { value: "8 Days", label: "Lead Time" },
  { value: "±0.005mm", label: "CNC Accuracy" },
];

// ─── Component ───────────────────────────────────────────────────────────────
export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  /*
   * When the user prefers reduced motion we render without the motion.* wrappers
   * and simply show the content. All classes remain — only transforms are skipped.
   */
  const Wrapper = prefersReducedMotion ? "div" : motion.div;
  const wrapperProps = prefersReducedMotion
    ? {}
    : { variants: containerVariants, initial: "hidden", animate: "visible" };

  const Item = prefersReducedMotion ? "div" : motion.div;
  const itemProps = prefersReducedMotion ? {} : { variants: itemVariants };

  return (
    <section
      className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0F172A]"
      aria-labelledby="hero-heading"
    >
      {/*
       * ─── Background texture ────────────────────────────────────────────
       * Pure CSS dot-grid gives an industrial drafting-paper feel
       * without a heavy image. Sits at z-0; all content is z-10.
       */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(circle at 1px 1px, rgba(100,116,139,0.15) 1px, transparent 0)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/*
       * ─── Accent gradient orb ──────────────────────────────────────────
       * Single blue glow anchored top-right. Creates depth without being
       * decorative. Its position mirrors where hot metal exits the press.
       */}
      <div
        className="pointer-events-none absolute right-0 top-0 z-0 h-[600px] w-[600px] -translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, transparent 70%)",
        }}
      />

      {/* ─── Main content ─────────────────────────────────────────────── */}
      <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
       
        <Wrapper {...wrapperProps} className="max-w-5xl">
          {/* Eyebrow */}
          <Item {...itemProps}>
            <p className="eyebrow mb-6 flex items-center gap-3">
              <span
                className="h-px w-10 bg-[#2563EB]"
                aria-hidden="true"
              />
              Aluminium Extrusion Die Specialists — Since {COMPANY.established}
            </p>
          </Item>

          {/*
           * Headline — split across two lines deliberately.
           * "Engineered to Extrude." is the claim; "Built to Last." is the proof.
           * Barlow Condensed at display scale gives maximum impact at mobile sizes.
           */}
          <Item {...itemProps}>
            <h1
              id="hero-heading"
              className="display-heading text-[clamp(3rem,8vw,6rem)] text-white"
            >
              Engineered
              <br />
              <span className="text-[#2563EB]">to Extrude.</span>
              <br />
              Built to Last.
            </h1>
          </Item>

          {/* Descriptor */}
          <Item {...itemProps}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#94a3b8] md:text-lg">
              We manufacture solid, hollow, and semi-hollow aluminium extrusion
              dies to ±0.005mm accuracy. In-house design, CNC machining,
              vacuum nitriding, and We also design and manufacture dies according to your specific 
              requirements and technical drawings,ensuring customized solutions that meet your exact extrusion needs.
            </p>
          </Item>

          {/* CTA row */}
          <Item {...itemProps}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="btn-primary px-8 py-3.5 text-base">
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
              <Link
                href="/products"
                className="btn-outline-white px-8 py-3.5 text-base"
              >
                View Die Range
              </Link>
            </div>
          </Item>
        </Wrapper>

        {/*
         * ─── Hero stats strip ─────────────────────────────────────────
         * Four key figures rendered as a horizontal band below the headline.
         * On mobile they collapse to a 2×2 grid.
         */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
          animate={prefersReducedMotion ? false : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
          className="mt-16 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-4 md:mt-24"
          aria-label="Key company statistics"
        >
          {heroStats.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center bg-[#0F172A] px-6 py-8 text-center"
            >
              <span className="font-barlow text-3xl font-700 text-white md:text-4xl">
                {value}
              </span>
              <span className="mt-1 text-xs font-medium uppercase tracking-widest text-[#64748B]">
                {label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <svg
          className="h-6 w-6 text-[#64748B]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
