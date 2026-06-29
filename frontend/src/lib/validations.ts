import { z } from "zod";

import {
  ALLOWED_FILE_TYPES,
  MAX_FILE_SIZE_BYTES,
} from "@/types/contact";

/*
 * File attachment validation.
 * Shared between:
 *   - React Hook Form client validation
 *   - API route server validation
 */
export const fileAttachmentSchema = z.object({
  name: z
    .string()
    .min(1, "Filename is required")
    .max(255, "Filename is too long"),

  type: z
    .string()
    .refine(
      (type) =>
        ALLOWED_FILE_TYPES.includes(
          type as (typeof ALLOWED_FILE_TYPES)[number]
        ),
      "Only PDF, DWG and DXF files are allowed"
    ),

  size: z
    .number()
    .max(
      MAX_FILE_SIZE_BYTES,
      "Maximum file size is 5 MB"
    ),

  base64: z
    .string()
    .min(1, "Invalid file content"),
});

/*
 * Main contact form schema.
 */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),

  companyName: z
    .string()
    .trim()
    .min(2, "Company name is required")
    .max(150, "Company name is too long"),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short")
    .max(25, "Phone number is too long")
    .regex(
      /^[+\d\s\-()]+$/,
      "Please enter a valid phone number"
    ),

  country: z
    .string()
    .trim()
    .min(1, "Country is required"),

  projectDescription: z
    .string()
    .trim()
    .min(
      20,
      "Please provide at least 20 characters describing your project"
    )
    .max(
      5000,
      "Project description is too long"
    ),

  attachment: fileAttachmentSchema.optional(),
});

export type ContactFormSchema = z.infer<
  typeof contactSchema
>;