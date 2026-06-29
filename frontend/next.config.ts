import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ─── Image Optimization ──────────────────────────────────────────────────
  images: {
    /*
     * Modern formats — Next.js will serve AVIF first, then WebP, then the
     * original format based on browser Accept headers.
     * This reduces image payload by 30-50% with zero quality loss.
     */
    formats: ["image/avif", "image/webp"],
    /*
     * deviceSizes — the srcset breakpoints Next.js generates.
     * Matches our Tailwind breakpoints (640, 768, 1024, 1280, 1536)
     * plus mobile-first steps.
     */
    deviceSizes: [375, 640, 768, 1024, 1280, 1536],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    /*
     * minimumCacheTTL — how long optimised images are cached (seconds).
     * 60 days is appropriate for product/facility photography that rarely changes.
     */
    minimumCacheTTL: 60 * 60 * 24 * 60,
  },

  // ─── Compiler Options ────────────────────────────────────────────────────
  reactStrictMode: true,
  compress: true,

  // ─── Security Headers ────────────────────────────────────────────────────
  /*
   * These headers are applied at the Next.js layer, before any CDN.
   * On Vercel they are forwarded to the Edge Network.
   *
   * X-Frame-Options: DENY — prevents clickjacking via iframes
   * X-Content-Type-Options: nosniff — prevents MIME-type sniffing
   * Referrer-Policy: strict-origin-when-cross-origin — leaks minimal referrer info
   * Permissions-Policy: locks unused browser APIs
   */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },

  // ─── Redirects ───────────────────────────────────────────────────────────
  async redirects() {
    return [
      // Redirect legacy URLs if migrating from an old site
      // { source: "/die-products", destination: "/products", permanent: true },
    ];
  },
};

export default nextConfig;
