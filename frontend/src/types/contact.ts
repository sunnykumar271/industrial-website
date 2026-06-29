// ─── File Attachment ───────────────────────────────────────────────────────
/*
 * FileAttachment represents a file uploaded via the contact form.
 * The file is converted to Base64 on the client before being sent
 * in the JSON body of the POST request — avoids multipart/form-data
 * complexity and works cleanly with Next.js API routes.
 */
export interface FileAttachment {
  /** Original filename with extension — e.g. "profile-drawing.pdf" */
  name: string;
  /** MIME type — "application/pdf" | "image/vnd.dwg" | "image/vnd.dxf" */
  type: string;
  /** File size in bytes — validated against MAX_FILE_SIZE on both ends */
  size: number;
  /**
   * Base64-encoded file content (without the data: URI prefix).
   * Stripped of the "data:application/pdf;base64," prefix before sending.
   * Nodemailer accepts this directly in the `attachments` array.
   */
  base64: string;
}

// ─── Contact Form Data ─────────────────────────────────────────────────────
/*
 * ContactFormData is the shape of the form state managed by React Hook Form.
 * It is also the shape of the validated body in the API route.
 *
 * Every field here maps 1-to-1 with:
 *   - A registered input in ContactForm.tsx
 *   - A field in the Zod schema in validations.ts
 *   - A rendered row in the email template in email.ts
 */
export interface ContactFormData {
  /** Full name of the person submitting the enquiry */
  name: string;
  /** Company or organisation name — required for B2B context */
  companyName: string;
  /** Business email address — validated with Zod email() */
  email: string;
  /**
   * Phone number including country code.
   * Stored as string (not number) to preserve leading zeros
   * and handle international formats like +91 98765 43210.
   */
  phone: string;
  /** Country of operation — selected from a dropdown list */
  country: string;
  /**
   * Free-text description of the project / profile requirement.
   * Minimum 20 characters enforced by Zod to prevent spam one-liners.
   */
  projectDescription: string;
  /**
   * Optional file attachment.
   * undefined when no file is selected.
   * Populated with a FileAttachment object after the user selects a file
   * and the FileUpload component converts it to Base64.
   */
  attachment?: FileAttachment;
}

// ─── API Response ──────────────────────────────────────────────────────────
/*
 * ContactApiResponse is what the POST /api/contact route returns.
 * The client (ContactForm.tsx) reads this to decide which toast to show.
 */
export interface ContactApiSuccess {
  success: true;
  message: string;
}

export interface ContactApiError {
  success: false;
  error: string;
  /** fieldErrors is populated when Zod server-side validation fails */
  fieldErrors?: Partial<Record<keyof ContactFormData, string>>;
}

export type ContactApiResponse = ContactApiSuccess | ContactApiError;

// ─── Country List Item ─────────────────────────────────────────────────────
export interface CountryOption {
  code: string;
  name: string;
}

// ─── Allowed File Types ────────────────────────────────────────────────────
/*
 * ALLOWED_FILE_TYPES is used in both FileUpload.tsx (accept attribute)
 * and validations.ts (Zod refinement).
 * Defining it here (in types) rather than in constants prevents a
 * circular dependency between the two lib files.
 */
export const ALLOWED_FILE_TYPES = [
  "application/pdf",
  "image/vnd.dwg",
  "image/vnd.dxf",
  "application/acad",
  "application/x-acad",
  "application/autocad_dwg",
  "image/x-dwg",
  "application/dwg",
  "application/dxf",
] as const;

export const ALLOWED_FILE_EXTENSIONS = [".pdf", ".dwg", ".dxf"] as const;

/** 5 MB in bytes */
export const MAX_FILE_SIZE_BYTES = 4 * 1024 * 1024;

// ─── Country Options ───────────────────────────────────────────────────────
/*
 * Focused list — countries most relevant to PrecisionDie's market.
 * Add more as needed. The dropdown uses this array directly.
 */
export const COUNTRY_OPTIONS: CountryOption[] = [
  { code: "IN", name: "India" },
  { code: "AE", name: "United Arab Emirates" },
  { code: "SA", name: "Saudi Arabia" },
  { code: "QA", name: "Qatar" },
  { code: "KW", name: "Kuwait" },
  { code: "BH", name: "Bahrain" },
  { code: "OM", name: "Oman" },
  { code: "EG", name: "Egypt" },
  { code: "KE", name: "Kenya" },
  { code: "TZ", name: "Tanzania" },
  { code: "NG", name: "Nigeria" },
  { code: "ZA", name: "South Africa" },
  { code: "GB", name: "United Kingdom" },
  { code: "DE", name: "Germany" },
  { code: "US", name: "United States" },
  { code: "AU", name: "Australia" },
  { code: "SG", name: "Singapore" },
  { code: "MY", name: "Malaysia" },
  { code: "BD", name: "Bangladesh" },
  { code: "PK", name: "Pakistan" },
  { code: "OTHER", name: "Other" },
];