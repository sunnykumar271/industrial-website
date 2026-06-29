import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * cn() — merge Tailwind classes safely.
 * clsx handles conditional logic; twMerge resolves conflicts (e.g. p-4 vs p-6).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
