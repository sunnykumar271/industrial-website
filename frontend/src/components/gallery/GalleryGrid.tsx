"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/constants/pages";
import type { GalleryImage, GalleryCategory } from "@/types/pages";

// ─── Lightbox ─────────────────────────────────────────────────────────────────
function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
}: {
  image: GalleryImage;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Image: ${image.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      /*
       * Clicking the backdrop closes the lightbox.
       * The inner content div stops propagation so clicking
       * the image itself doesn't close.
       */
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close image viewer"
          className="absolute -top-10 right-0 text-white/70 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="90vw"
            className="object-contain"
            /*
             * priority here because the lightbox is shown on user interaction
             * — the image must load immediately. Lazy loading would feel broken.
             */
            priority
          />
        </div>

        {/* Caption */}
        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-white/80">{image.title}</p>
          <div className="flex gap-2">
            <button
              onClick={onPrev}
              aria-label="Previous image"
              className="rounded-sm border border-white/20 p-2 text-white/70 hover:border-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={onNext}
              aria-label="Next image"
              className="rounded-sm border border-white/20 p-2 text-white/70 hover:border-white/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Grid Item ────────────────────────────────────────────────────────────────
function GridItem({
  image,
  index,
  onClick,
  reduced,
}: {
  image: GalleryImage;
  index: number;
  onClick: () => void;
  reduced: boolean;
}) {
  return (
    <motion.div
      layout
      initial={reduced ? undefined : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.3, delay: reduced ? 0 : index * 0.04 }}
    >
      <button
        onClick={onClick}
        className="group relative block w-full overflow-hidden rounded-sm bg-[#1E293B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2"
        aria-label={`View: ${image.title}`}
      >
        {/*
         * aspect-[4/3] enforces a consistent card height.
         * For a masonry feel, we could use varying aspect ratios per image —
         * see the width/height values in the data. For now, uniform grid.
         */}
        <div className="relative aspect-[4/3]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            /*
             * No priority — gallery images are below the fold.
             * Lazy loading is correct here. The hero image on the page
             * gets priority; everything else loads as user scrolls.
             */
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0F172A]/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
            <div className="p-4">
              <p className="font-barlow text-sm font-600 text-white">{image.title}</p>
            </div>
          </div>
        </div>
      </button>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);
  const reduced = useReducedMotion() ?? false;

  /*
   * Filtering is derived state — no need for useEffect.
   * Computing filtered on every render is fast (≤16 images).
   */
  const filtered =
    activeCategory === "all"
      ? GALLERY_IMAGES
      : GALLERY_IMAGES.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((image: GalleryImage) => {
    setLightboxImage(image);
    // Prevent background scroll while lightbox is open
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxImage(null);
    document.body.style.overflow = "";
  }, []);

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (!lightboxImage) return;
      const currentIndex = filtered.findIndex((img) => img.id === lightboxImage.id);
      const nextIndex =
        direction === "next"
          ? (currentIndex + 1) % filtered.length
          : (currentIndex - 1 + filtered.length) % filtered.length;
      setLightboxImage(filtered[nextIndex]);
    },
    [lightboxImage, filtered]
  );

  return (
    <>
      {/* Filter tabs */}
      <div
        className="mb-8 flex flex-wrap gap-2"
        role="group"
        aria-label="Filter gallery by category"
      >
        {GALLERY_CATEGORIES.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as GalleryCategory)}
            aria-pressed={activeCategory === key}
            className={`rounded-sm px-4 py-2 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
              activeCategory === key
                ? "bg-[#2563EB] text-white"
                : "border border-[#CBD5E1] bg-white text-[#64748B] hover:border-[#2563EB] hover:text-[#2563EB]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Image count */}
      <p className="mb-6 text-sm text-[#64748B]" aria-live="polite" aria-atomic="true">
        Showing {filtered.length} of {GALLERY_IMAGES.length} images
      </p>

      {/* Grid */}
      <motion.div
        layout
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((image, index) => (
            <GridItem
              key={image.id}
              image={image}
              index={index}
              onClick={() => openLightbox(image)}
              reduced={reduced}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            onClose={closeLightbox}
            onPrev={() => navigateLightbox("prev")}
            onNext={() => navigateLightbox("next")}
          />
        )}
      </AnimatePresence>
    </>
  );
}
