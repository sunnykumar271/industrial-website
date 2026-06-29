import AnimatedSection from "@/components/ui/AnimatedSection";

// ─── Props ────────────────────────────────────────────────────────────────────
interface Step {
  step: number;
  title: string;
  description: string;
}

interface ServiceProcessProps {
  steps: Step[];
  title?: string;
  description?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ServiceProcess({
  steps,
  title = "How It Works",
  description = "Our structured process ensures consistent results and full traceability on every job.",
}: ServiceProcessProps) {
  return (
    <section
      className="section-padding bg-[#0F172A]"
      aria-labelledby="process-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <AnimatedSection delay={0}>
          <div className="mb-12">
            <p className="eyebrow mb-3 text-[#60a5fa]">Our Process</p>
            <h2
              id="process-heading"
              className="display-heading text-3xl text-white md:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-[#94a3b8]">
              {description}
            </p>
          </div>
        </AnimatedSection>

        {/*
         * Horizontal step flow on desktop, vertical stack on mobile.
         * Steps are connected by a line drawn between them using a
         * pseudo-element approach via inline styles.
         */}
        <div className="relative">
          {/* Desktop connector line */}
          <div
            className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 lg:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 lg:grid-cols-5">
            {steps.map((step, index) => (
              <AnimatedSection key={step.step} delay={index * 0.1} direction="up">
                <div className="relative flex flex-col lg:items-center lg:text-center">
                  {/* Step circle — sits on the connector line on desktop */}
                  <div className="relative z-10 mb-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-[#2563EB] font-barlow text-lg font-700 text-white shadow-lg shadow-[#2563EB]/25">
                    {String(step.step).padStart(2, "0")}
                  </div>

                  <h3 className="mb-2 font-barlow text-lg font-600 text-white">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-[#64748B]">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
