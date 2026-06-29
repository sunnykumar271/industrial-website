import AnimatedSection from "@/components/ui/AnimatedSection";
import type { SpecRow } from "@/types/services";

// ─── Props ────────────────────────────────────────────────────────────────────
interface SpecificationsTableProps {
  specs: SpecRow[];
  title?: string;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function SpecificationsTable({
  specs,
  title = "Technical Specifications",
}: SpecificationsTableProps) {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="specs-heading"
    >
      <div className="container-custom">
        <AnimatedSection delay={0}>
          <div className="mb-8">
            <p className="eyebrow mb-3">Specifications</p>
            <h2
              id="specs-heading"
              className="display-heading text-3xl text-[#0F172A] md:text-4xl"
            >
              {title}
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          {/*
           * overflow-x-auto ensures the table scrolls horizontally on small
           * screens instead of breaking the layout. The table itself is
           * never narrower than 500px so all columns remain readable.
           *
           * Using a real <table> element (not divs) is critical here:
           * screen readers announce "table with N rows and 3 columns",
           * and keyboard users can navigate cell by cell.
           */}
          <div className="overflow-x-auto rounded-sm border border-[#CBD5E1]">
            <table
              className="w-full min-w-[500px] border-collapse text-sm"
              aria-label={title}
            >
              <thead>
                <tr className="bg-[#0F172A] text-left">
                  <th
                    scope="col"
                    className="px-5 py-3.5 font-inter text-xs font-semibold uppercase tracking-wider text-[#94a3b8]"
                  >
                    Parameter
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3.5 font-inter text-xs font-semibold uppercase tracking-wider text-[#94a3b8]"
                  >
                    Value
                  </th>
                  <th
                    scope="col"
                    className="hidden px-5 py-3.5 font-inter text-xs font-semibold uppercase tracking-wider text-[#94a3b8] md:table-cell"
                  >
                    Notes
                  </th>
                </tr>
              </thead>

              <tbody>
                {specs.map((row, index) => (
                  <tr
                    key={row.parameter}
                    className={
                      /*
                       * Zebra striping — every alternate row gets a very
                       * light grey background. Helps the eye track across
                       * wide rows without gridlines cluttering the layout.
                       */
                      index % 2 === 0
                        ? "bg-white"
                        : "bg-[#F8FAFC]"
                    }
                  >
                    <td className="border-t border-[#CBD5E1] px-5 py-3.5 font-medium text-[#0F172A]">
                      {row.parameter}
                    </td>
                    <td className="border-t border-[#CBD5E1] px-5 py-3.5 font-mono text-sm text-[#1E293B]">
                      {/*
                       * font-mono for values — keeps numeric data aligned
                       * and gives a precision/technical feel appropriate
                       * for engineering specifications.
                       */}
                      {row.value}
                    </td>
                    <td className="hidden border-t border-[#CBD5E1] px-5 py-3.5 text-[#64748B] md:table-cell">
                      {row.notes ?? "—"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </AnimatedSection>

        {/* Mobile notes disclosure — shown only on small screens */}
        <AnimatedSection delay={0.2}>
          <p className="mt-4 text-xs text-[#64748B] md:hidden">
            Scroll right to view notes column, or view on a larger screen.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
