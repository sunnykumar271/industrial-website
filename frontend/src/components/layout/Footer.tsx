import Link from "next/link";
import { COMPANY, NAV_LINKS } from "@/constants";

// ─── Footer columns ──────────────────────────────────────────────────────────
const footerServices = [
  { label: "Solid Extrusion Dies", href: "/products/solid-dies" },
  { label: "Hollow Extrusion Dies", href: "/products/hollow-dies" },
  { label: "Semi-Hollow Dies", href: "/products/semi-hollow-dies" },
  { label: "Die Design", href: "/services/die-design" },
  { label: "Die Correction", href: "/services/die-correction" },
  { label: "Die Refurbishment", href: "/services/die-refurbishment" },
];

const footerCompany = [
  { label: "About Us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

// ─── Social icons ─────────────────────────────────────────────────────────────
const socials = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: `https://wa.me/${COMPANY.phone.replace(/[^0-9]/g, "")}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.122.553 4.113 1.517 5.845L0 24l6.335-1.506C8.04 23.447 9.982 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.029 21.818c-1.877 0-3.624-.504-5.123-1.381l-.367-.217-3.761.894.946-3.663-.24-.376A9.818 9.818 0 012.182 12c0-5.432 4.415-9.847 9.847-9.847 5.432 0 9.847 4.415 9.847 9.847 0 5.432-4.415 9.818-9.847 9.818z" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A]" role="contentinfo" aria-label="Site footer">
      {/* ─── Main footer body ────────────────────────────────────────────── */}
      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            {/* Logo/wordmark */}
            <Link href="/" className="inline-flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              <span className="font-barlow text-xl font-800 text-white">
                {COMPANY.name}
              </span>
              <span className="font-inter text-[10px] uppercase tracking-[0.15em] text-[#64748B]">
                Extrusion Die Specialists
              </span>
            </Link>

            <p className="mt-5 text-sm leading-relaxed text-[#64748B]">
              Manufacturer of precision aluminium extrusion dies since{" "}
              {COMPANY.established}. Solid, hollow, semi-hollow dies and as per requirements with
              8-day delivery and CMM-verified quality.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socials.map(({ name, href, icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${COMPANY.name} on ${name}`}
                  className="flex h-9 w-9 items-center justify-center rounded-sm border border-white/10 text-[#64748B] transition-colors hover:border-white/30 hover:text-white"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Products & Services */}
          <div>
            <h3 className="mb-5 font-inter text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
              Products & Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#64748B] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="mb-5 font-inter text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerCompany.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-[#64748B] transition-colors hover:text-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="mb-5 font-inter text-xs font-semibold uppercase tracking-[0.12em] text-[#94a3b8]">
              Get in Touch
            </h3>
            <address className="not-italic">
              <ul className="space-y-4">
                <li>
                  <p className="text-xs uppercase tracking-wider text-[#64748B]">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#94a3b8]">
                    {COMPANY.address}
                  </p>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-[#64748B]">
                    Phone
                  </p>
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="mt-1 block text-sm text-[#94a3b8] transition-colors hover:text-white"
                  >
                    {COMPANY.phone}
                  </a>
                </li>
                <li>
                  <p className="text-xs uppercase tracking-wider text-[#64748B]">
                    Email
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-1 block text-sm text-[#94a3b8] transition-colors hover:text-white"
                  >
                    {COMPANY.email}
                  </a>
                </li>
              </ul>
            </address>
          </div>
        </div>
      </div>

      {/* ─── Legal bar ─────────────────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-[#475569] sm:flex-row">
          <p>
            © {currentYear} {COMPANY.name}. All rights reserved.
          </p>
          <p>
            GST:{" "}
            <span className="font-mono tracking-wider">{COMPANY.gst}</span>
          </p>
          <div className="flex gap-5">
          </div>
        </div>
      </div>
    </footer>
  );
}
