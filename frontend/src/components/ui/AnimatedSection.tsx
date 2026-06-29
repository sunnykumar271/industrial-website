"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

// ─── Types ──────────────────────────────────────────────────────────────────
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /**
   * delay — seconds before animation begins after the element enters viewport.
   * Use staggered values (0, 0.1, 0.2…) for grid children.
   */
  delay?: number;
  /**
   * direction — which axis the element slides in from.
   * "up" is the default for section reveals; "left"/"right" for side panels.
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /** once — if true, animation only runs the first time element enters view */
  once?: boolean;
  /** amount — fraction of element that must be visible to trigger (0–1) */
  amount?: number;
}

// ─── Variant Factory ────────────────────────────────────────────────────────
/**
 * buildVariants() generates Framer Motion variants from a direction prop.
 * Returning static objects (not inline in JSX) keeps the component clean
 * and makes variants reusable via spread.
 */
function buildVariants(direction: AnimatedSectionProps["direction"]) {
  const offsets: Record<
    NonNullable<AnimatedSectionProps["direction"]>,
    { x: number; y: number }
  > = {
    up: { x: 0, y: 30 },
    down: { x: 0, y: -30 },
    left: { x: -30, y: 0 },
    right: { x: 30, y: 0 },
    none: { x: 0, y: 0 },
  };

  const { x, y } = offsets[direction ?? "up"];

  return {
    hidden: { opacity: 0, x, y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const // custom ease — feels mechanical/precise
      },
    },
  };
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.15,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  /*
   * useReducedMotion() reads the OS/browser prefers-reduced-motion setting.
   * If true, we skip the animation entirely — renders children immediately visible.
   * This is required for WCAG 2.1 Success Criterion 2.3.3 (Animation from Interactions).
   */
  const prefersReducedMotion = useReducedMotion();

  /*
   * useInView() fires when the ref element crosses the viewport threshold.
   * `once: true` ensures the animation only plays on the first entrance —
   * avoids re-animating when users scroll back up, which feels cheap.
   */
  const isInView = useInView(ref, { once, amount });

  const variants = buildVariants(direction);

  // If user prefers no motion, render content statically with no transforms
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      /*
       * transition.delay is set here rather than inside variants
       * so that staggered siblings each receive an independent delay
       * without sharing a single variants object.
       */
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
