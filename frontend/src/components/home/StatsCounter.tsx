"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { STATS } from "@/constants";
import type { Stat } from "@/types";

// ─── useCountUp hook ─────────────────────────────────────────────────────────
/**
 * useCountUp() — animates a number from 0 to `target` over `duration` ms.
 * Only starts when `enabled` is true (i.e. element is in view).
 *
 * Using requestAnimationFrame instead of setInterval gives buttery 60fps
 * and automatically pauses when the tab is hidden.
 */
function useCountUp(target: number, duration: number, enabled: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const start = performance.now();

    function tick(now: number) {
      const progress = Math.min((now - start) / duration, 1);
      /*
       * easeOutExpo curve — fast at start, decelerates near the end.
       * Matches the physical feeling of a counter "settling" on its value.
       */
      const eased =
        progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(eased * target);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, enabled]);

  return count;
}

// ─── StatCard ─────────────────────────────────────────────────────────────────
function StatCard({
  stat,
  index,
  animate,
}: {
  stat: Stat;
  index: number;
  animate: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animate && !prefersReducedMotion;

  /*
   * Special case: accuracy is 0.005 — a decimal that needs 3dp formatting.
   * All other stats are whole numbers.
   */
  const isDecimal = stat.value < 1;
  const rawCount = useCountUp(stat.value, 2000, shouldAnimate);
  const displayValue = isDecimal
    ? rawCount.toFixed(3)
    : Math.round(rawCount).toLocaleString("en-IN");

  return (
    <AnimatedSection delay={index * 0.1}>
      <div className="text-center">
        {/* Stat value */}
        <div
          className="font-barlow text-[clamp(2.5rem,5vw,4rem)] font-800 leading-none text-white tabular-nums"
          aria-live="polite"
          aria-label={`${stat.value}${stat.suffix} ${stat.label}`}
        >
          {/*
           * Show static value for reduced-motion users and before animation starts.
           * tabular-nums prevents layout shift as digits change width.
           */}
          {shouldAnimate ? displayValue : stat.value.toLocaleString("en-IN")}
          <span className="text-[#2563EB]">{stat.suffix}</span>
        </div>

        {/* Label */}
        <p className="mt-2 font-barlow text-base font-600 uppercase tracking-wide text-white">
          {stat.label}
        </p>

        {/* Description */}
        <p className="mt-1 text-xs leading-relaxed text-[#64748B]">
          {stat.description}
        </p>
      </div>
    </AnimatedSection>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  /*
   * useInView with once: true — the counter runs exactly once.
   * amount: 0.3 means 30% of the section must be visible before starting.
   */
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      className="section-padding bg-[#1E293B]"
      aria-labelledby="stats-heading"
    >
      <div className="container-custom">
        <SectionHeader
          eyebrow="By the Numbers"
          title="Two Decades of Measurable Results"
          dark
          id="stats-heading"
        />

        {/* Grid of stats */}
        <div
          ref={ref}
          className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-6"
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} animate={isInView} />
          ))}
        </div>

        {/* Decorative horizontal rule below stats */}
        <div
          className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#2563EB]/40 to-transparent"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
