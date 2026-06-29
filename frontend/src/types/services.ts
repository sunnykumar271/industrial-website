// ─── Technical Specification Row ───────────────────────────────────────────
export interface SpecRow {
  parameter: string;
  value: string;
  notes?: string;
}

// ─── Application Use Case ───────────────────────────────────────────────────
export interface ApplicationItem {
  industry: string;
  profiles: string[];
  icon: string;
}

// ─── FAQ Item ───────────────────────────────────────────────────────────────
export interface FAQItem {
  question: string;
  answer: string;
}

// ─── Full Service Detail Page Data ─────────────────────────────────────────
/*
 * ServiceDetail is the complete data shape for a single service/product page.
 * Every /services/[slug] page receives one of these objects from the data file.
 * Keeping data here (not in the page component) means:
 *   1. Pages are thin — just layout wrappers
 *   2. Data is typed and validated at compile time
 *   3. Easy to swap to a CMS later — just change the data source, not the pages
 */
export interface ServiceDetail {
  slug: string;
  category: "product" | "service"; // "product" = die type; "service" = value-add
  title: string;
  shortTitle: string;         // Used in breadcrumbs and meta title
  tagline: string;            // One-line hero subheading
  description: string;        // Long intro paragraph
  heroImage: string;          // Path under /public/images/
  heroImageAlt: string;
  keyPoints: string[];        // Bullet highlights shown in hero strip
  specs: SpecRow[];           // Technical specifications table
  applications: ApplicationItem[];
  processSteps?: {            // Optional — only for service pages (design/correction/refurbishment)
    step: number;
    title: string;
    description: string;
  }[];
  faqs: FAQItem[];
  relatedSlugs: string[];     // slugs of related services/products
  metaTitle: string;
  metaDescription: string;
  metaKeywords: string[];
}
