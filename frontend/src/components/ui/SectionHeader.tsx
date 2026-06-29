import { cn } from "@/lib/utils";
import AnimatedSection from "./AnimatedSection";

// ─── Types ──────────────────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  /** align — text alignment of the block. Defaults to "center" */
  align?: "left" | "center";
  /** dark — inverts text colours for use on navy backgrounds */
  dark?: boolean;
  className?: string;
  /** titleClassName — additional classes applied only to the h2 */
  titleClassName?: string;
  id?: string;
}

// ─── Component ──────────────────────────────────────────────────────────────
export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
  titleClassName,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className
      )}
    >
      {/* Eyebrow label */}
      {eyebrow && (
        <AnimatedSection delay={0}>
          <p
            className={cn(
              "eyebrow mb-3",
              /*
               * On dark backgrounds the accent blue eyebrow reads fine;
               * on light backgrounds we keep the default blue from globals.css.
               * No override needed here — CSS custom property handles both.
               */
              dark && "text-[#60a5fa]" // slightly lighter blue for dark bg legibility
            )}
          >
            {eyebrow}
          </p>
        </AnimatedSection>
      )}

      {/* Main heading — uses Barlow condensed for industrial character */}
      <AnimatedSection delay={0.1}>
        <h2
          className={cn(
            "display-heading text-3xl md:text-4xl lg:text-5xl",
            dark ? "text-white" : "text-[#0F172A]",
            titleClassName
          )}
        >
          {title}
        </h2>
      </AnimatedSection>

      {/* Optional description paragraph */}
      {description && (
        <AnimatedSection delay={0.2}>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
              dark ? "text-[#94a3b8]" : "text-[#64748B]",
              align === "left" && "mx-0"
            )}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
    </div>
  );
}
