"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ServiceDetail } from "@/types/services";

// ─── Props ────────────────────────────────────────────────────────────────────
interface ServiceHeroProps {
  service: ServiceDetail;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ServiceHero({ service }: ServiceHeroProps) {
  const prefersReducedMotion = useReducedMotion();

  const animate = !prefersReducedMotion;

  return (
    <section
      className="relative overflow-hidden bg-[#0F172A] pb-16 pt-28 md:pb-24 md:pt-36"
      aria-labelledby="service-hero-heading"
    >
      {/* Dot-grid texture — consistent with home hero */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(100,116,139,0.15) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blue glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/4 translate-x-1/4"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* ── Breadcrumb ──────────────────────────────────────────────── */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={animate ? { opacity: 0, y: -10 } : false}
          animate={animate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.4 }}
        >
          <ol className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/services"
                className="transition-colors hover:text-white"
              >
                {service.category === "product" ? "Products" : "Services"}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#CBD5E1]" aria-current="page">
              {service.shortTitle}
            </li>
          </ol>
        </motion.nav>

        {/* ── Category badge ───────────────────────────────────────────── */}
        <motion.div
          initial={animate ? { opacity: 0, y: 20 } : false}
          animate={animate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <span className="eyebrow mb-4 inline-flex items-center gap-2">
            <span
              className="h-px w-8 bg-[#2563EB]"
              aria-hidden="true"
            />
            {service.category === "product"
              ? "Die Products"
              : "Value-Add Services"}
          </span>
        </motion.div>

        {/* ── Headline ─────────────────────────────────────────────────── */}
        <motion.h1
          id="service-hero-heading"
          className="display-heading max-w-3xl text-[clamp(2.25rem,5vw,3.75rem)] text-white"
          initial={animate ? { opacity: 0, y: 30 } : false}
          animate={animate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          {service.title}
        </motion.h1>

        {/* ── Tagline ──────────────────────────────────────────────────── */}
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#94a3b8] md:text-lg"
          initial={animate ? { opacity: 0, y: 20 } : false}
          animate={animate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {service.tagline}
        </motion.p>

        {/* ── Key points strip ─────────────────────────────────────────── */}
        {/*
         * Rendered as a 2-col or 3-col grid of tick-items.
         * These are the most scannable elements on the page — people
         * read these before the body text.
         */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
          initial={animate ? { opacity: 0 } : false}
          animate={animate ? { opacity: 1 } : false}
          transition={{ duration: 0.5, delay: 0.35 }}
        >
          {service.keyPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
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
              <span className="text-sm text-[#CBD5E1]">{point}</span>
            </div>
          ))}
        </motion.div>

        {/* ── CTA row ──────────────────────────────────────────────────── */}
        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial={animate ? { opacity: 0, y: 10 } : false}
          animate={animate ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.4, delay: 0.45 }}
        >
          <Link href="/contact" className="btn-primary">
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
          <a href="tel:+919876543210" className="btn-outline-white">
            Call for Quick Query
          </a>
        </motion.div>
      </div>
    </section>
  );
}
