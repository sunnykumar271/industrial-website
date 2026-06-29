"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: string;
  titleAccent?: string; // coloured word(s) appended on a new line
  description: string;
  breadcrumbs: Breadcrumb[];
  children?: React.ReactNode; // optional stat strip or badge row
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function PageHero({
  eyebrow,
  title,
  titleAccent,
  description,
  breadcrumbs,
  children,
}: PageHeroProps) {
  const reduced = useReducedMotion();
  const a = !reduced; // shorthand: animate?

  return (
    <section
      className="relative overflow-hidden bg-[#0F172A] pb-16 pt-28 md:pb-24 md:pt-36"
      aria-labelledby="page-hero-heading"
    >
      {/* Dot-grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px,rgba(100,116,139,0.14) 1px,transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Right glow orb */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] -translate-y-1/4 translate-x-1/3 opacity-70"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at center,rgba(37,99,235,0.18) 0%,transparent 70%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Breadcrumb */}
        <motion.nav
          aria-label="Breadcrumb"
          initial={a ? { opacity: 0, y: -8 } : false}
          animate={a ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.35 }}
        >
          <ol className="mb-8 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
            {breadcrumbs.map((crumb, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-white"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#CBD5E1]" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Eyebrow */}
        <motion.p
          className="eyebrow mb-4 flex items-center gap-3"
          initial={a ? { opacity: 0, y: 16 } : false}
          animate={a ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <span className="h-px w-8 bg-[#2563EB]" aria-hidden="true" />
          {eyebrow}
        </motion.p>

        {/* Heading */}
        <motion.h1
          id="page-hero-heading"
          className="display-heading max-w-4xl text-[clamp(2.25rem,5.5vw,4rem)] text-white"
          initial={a ? { opacity: 0, y: 28 } : false}
          animate={a ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
          {titleAccent && (
            <>
              <br />
              <span className="text-[#2563EB]">{titleAccent}</span>
            </>
          )}
        </motion.h1>

        {/* Description */}
        <motion.p
          className="mt-5 max-w-2xl text-base leading-relaxed text-[#94a3b8] md:text-lg"
          initial={a ? { opacity: 0, y: 16 } : false}
          animate={a ? { opacity: 1, y: 0 } : false}
          transition={{ duration: 0.5, delay: 0.22 }}
        >
          {description}
        </motion.p>

        {/* Optional children (stat row, badges, etc.) */}
        {children && (
          <motion.div
            initial={a ? { opacity: 0, y: 12 } : false}
            animate={a ? { opacity: 1, y: 0 } : false}
            transition={{ duration: 0.45, delay: 0.35 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
