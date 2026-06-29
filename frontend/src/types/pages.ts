// ─── Industries ────────────────────────────────────────────────────────────

export interface IndustryProfile {
  name: string;
  description: string;
  icon: string;
}

export interface IndustryStat {
  value: string;
  label: string;
}

export interface IndustryDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  icon: string;
  color: string; // Tailwind bg class for accent
  profiles: IndustryProfile[];
  stats: IndustryStat[];
  challenges: string[];
  solutions: string[];
  metaTitle: string;
  metaDescription: string;
}

// ─── Capabilities ──────────────────────────────────────────────────────────

export interface CapabilitySpec {
  label: string;
  value: string;
}

export interface CapabilityDetail {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  heroImage: string;
  heroImageAlt: string;
  icon: string;
  specs: CapabilitySpec[];
  features: string[];
  outcomes: string[];
  metaTitle: string;
  metaDescription: string;
}

// ─── Gallery ───────────────────────────────────────────────────────────────

export type GalleryCategory =
  | "all"
  | "solid-dies"
  | "hollow-dies"
  | "semi-hollow"
  | "facility"
  | "inspection";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  width: number;
  height: number;
}

// ─── Quality ───────────────────────────────────────────────────────────────

export interface QualityStandard {
  code: string;
  title: string;
  description: string;
  icon: string;
}

export interface QualityProcess {
  step: number;
  title: string;
  description: string;
  equipment?: string;
}

export interface QualityEquipment {
  name: string;
  specification: string;
  purpose: string;
  icon: string;
}