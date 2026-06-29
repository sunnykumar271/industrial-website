"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, COMPANY } from "@/constants";
import type { NavLink } from "@/types";
import { cn } from "@/lib/utils";

// ─── Sub-components ──────────────────────────────────────────────────────────

/** DesktopDropdown — hover dropdown for nav items with children */
function DesktopDropdown({ link }: { link: NavLink }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close when clicking outside the dropdown container
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="flex items-center gap-1 py-2 text-sm font-medium text-[#CBD5E1] transition-colors hover:text-white"
        aria-expanded={open}
        aria-haspopup="true"
      >
        {link.label}
        {/* Chevron icon rotates when open */}
        <svg
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            open && "rotate-180"
          )}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute left-0 top-full z-50 min-w-[210px] rounded-sm border border-white/10 bg-[#1E293B] py-1 shadow-xl"
          >
            {link.children?.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                className="block px-4 py-2.5 text-sm text-[#CBD5E1] transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {child.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** MobileMenu — full-height slide-in drawer for mobile navigation */
function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  // Lock body scroll while menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <motion.nav
            key="drawer"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-[min(85vw,320px)] flex-col bg-[#0F172A]"
            aria-label="Mobile navigation"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
              <span className="font-barlow text-lg font-700 text-white">
                {COMPANY.name}
              </span>
              <button
                onClick={onClose}
                aria-label="Close navigation menu"
                className="rounded-sm p-2 text-[#94a3b8] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto px-4 py-6">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="mb-1">
                  {link.children ? (
                    /*
                     * For items with children, render a disclosure group.
                     * Uses details/summary for zero-JS accordion behaviour —
                     * Framer motion is reserved for the outer drawer only.
                     */
                    <details className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between rounded-sm px-3 py-3 text-sm font-medium text-[#CBD5E1] hover:bg-white/5 hover:text-white">
                        {link.label}
                        <svg
                          className="h-4 w-4 transition-transform group-open:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </summary>
                      <div className="mt-1 space-y-0.5 pl-3">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              "block rounded-sm px-3 py-2.5 text-sm text-[#94a3b8] hover:bg-white/5 hover:text-white",
                              pathname === child.href && "text-white"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "block rounded-sm px-3 py-3 text-sm font-medium text-[#CBD5E1] hover:bg-white/5 hover:text-white",
                        pathname === link.href && "text-white"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA at bottom of drawer */}
            <div className="border-t border-white/10 p-6">
              <Link
                href="/contact"
                onClick={onClose}
                className="btn-primary w-full justify-center"
              >
                Request a Quote
              </Link>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Navbar ─────────────────────────────────────────────────────────────
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  /*
   * Add a shadow + slightly opaque background when the user scrolls down.
   * The initial state is fully transparent so the Navbar blends into the hero.
   * Threshold of 10px prevents flickering on iOS rubber-band scroll.
   */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-30 transition-all duration-300",
          scrolled
            ? "bg-[#0F172A]/95 shadow-lg shadow-black/20 backdrop-blur-md"
            : "bg-transparent"
        )}
        role="banner"
      >
        <div className="container-custom">
          <div className="flex h-16 items-center justify-between lg:h-20">
            {/* Logo / Brand */}
            <Link
              href="/"
              className="flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label={`${COMPANY.name} — home`}
            >
              <span className="font-barlow text-lg font-800 leading-none tracking-tight text-white md:text-xl">
                {COMPANY.name}
              </span>
              <span className="font-inter text-[10px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
                Extrusion Die Specialists
              </span>
            </Link>

            {/* Desktop navigation */}
            <nav
              className="hidden items-center gap-6 lg:flex xl:gap-8"
              aria-label="Primary navigation"
            >
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <DesktopDropdown key={link.href} link={link} />
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors",
                      pathname === link.href
                        ? "text-white"
                        : "text-[#CBD5E1] hover:text-white"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={`tel:${COMPANY.phone}`}
                className="text-sm text-[#94a3b8] transition-colors hover:text-white"
              >
                {COMPANY.phone}
              </a>
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="rounded-sm p-2 text-[#CBD5E1] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.75}
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — rendered outside header to avoid z-index stacking issues */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
