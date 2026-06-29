// ─── Navigation ────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ─── Die / Product ─────────────────────────────────────────────────────────
export interface DieType {
  id: string;
  title: string;
  description: string;
  features: string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
}

// ─── Service ───────────────────────────────────────────────────────────────
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG path or component key
  href: string;
}

// ─── Industry ──────────────────────────────────────────────────────────────
export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// ─── Process Step ──────────────────────────────────────────────────────────
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  duration: string;
}

// ─── Statistic ─────────────────────────────────────────────────────────────
export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

// ─── USP (Why Choose Us) ───────────────────────────────────────────────────
export interface USP {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Contact Form ──────────────────────────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}
