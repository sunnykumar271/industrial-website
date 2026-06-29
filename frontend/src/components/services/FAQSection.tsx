"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import type { FAQItem } from "@/types/services";

// ─── Single FAQ Item ──────────────────────────────────────────────────────────
function FAQRow({
  item,
  index,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const id = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border-b border-[#CBD5E1] last:border-b-0">
      {/*
       * Using a <button> (not a div) for the toggle ensures:
       * - Keyboard focus and activation (Enter/Space)
       * - Correct ARIA role announcement ("button, collapsed/expanded")
       * - Click activation without JS event delegation hacks
       *
       * aria-expanded and aria-controls link the button to its panel —
       * required for WCAG 4.1.2 (Name, Role, Value).
       */}
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={id}
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
      >
        <span className="font-barlow text-base font-600 text-[#0F172A] md:text-lg">
          {item.question}
        </span>

        {/* Chevron — rotates 180° when open */}
        <svg
          className={`mt-1 h-5 w-5 shrink-0 text-[#2563EB] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/*
       * AnimatePresence + motion.div gives a smooth height animation.
       * The panel has role="region" and is labelled by the button
       * (aria-labelledby) — this creates a proper accordion region
       * in the accessibility tree.
       */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={id}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-[#64748B] md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Props ────────────────────────────────────────────────────────────────────
interface FAQSectionProps {
  faqs: FAQItem[];
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function FAQSection({ faqs }: FAQSectionProps) {
  /*
   * openIndex tracks which FAQ is currently open.
   * null = all closed. Only one can be open at a time (accordion behaviour).
   * This prevents the page from becoming very tall with many open panels.
   */
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="faq-heading"
    >
      <div className="container-custom">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection delay={0}>
            <div className="mb-10">
              <p className="eyebrow mb-3">Frequently Asked Questions</p>
              <h2
                id="faq-heading"
                className="display-heading text-3xl text-[#0F172A] md:text-4xl"
              >
                Common Questions
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div
              className="rounded-sm border border-[#CBD5E1] px-6"
              role="list"
              aria-label="Frequently asked questions"
            >
              {faqs.map((item, index) => (
                <FAQRow
                  key={index}
                  item={item}
                  index={index}
                  isOpen={openIndex === index}
                  onToggle={() => toggle(index)}
                />
              ))}
            </div>
          </AnimatedSection>

          {/* Bottom prompt */}
          <AnimatedSection delay={0.2}>
            <p className="mt-8 text-center text-sm text-[#64748B]">
              Have a question not covered here?{" "}
              <a
                href="/contact"
                className="font-medium text-[#2563EB] underline-offset-2 hover:underline"
              >
                Contact our engineering team →
              </a>
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
