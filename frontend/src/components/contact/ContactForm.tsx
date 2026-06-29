"use client";

import { useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema } from "@/lib/validations";
import type { ContactFormData, ContactApiResponse } from "@/types/contact";
import { COUNTRY_OPTIONS, ALLOWED_FILE_EXTENSIONS, MAX_FILE_SIZE_BYTES } from "@/types/contact";

// ─── Toast ────────────────────────────────────────────────────────────────────
/*
 * Lightweight inline toast — no external library needed.
 * State: null = hidden, "success" | "error" = visible with matching style.
 * Auto-dismisses after 6 seconds via setTimeout inside handleSubmit.
 */
type ToastType = "success" | "error" | null;

function Toast({
  type,
  message,
  onClose,
}: {
  type: ToastType;
  message: string;
  onClose: () => void;
}) {
  if (!type) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      /*
       * role="alert" + aria-live="assertive" causes screen readers to
       * announce the message immediately when it appears — critical for
       * form submission feedback accessibility (WCAG 4.1.3).
       */
      className={`fixed bottom-6 right-6 z-50 flex max-w-sm items-start gap-3 rounded-sm border p-4 shadow-xl ${
        type === "success"
          ? "border-emerald-200 bg-emerald-50 text-emerald-900"
          : "border-red-200 bg-red-50 text-red-900"
      }`}
    >
      {/* Icon */}
      <div className="mt-0.5 shrink-0">
        {type === "success" ? (
          <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Message */}
      <div className="flex-1">
        <p className="text-sm font-semibold">
          {type === "success" ? "Message Sent!" : "Submission Failed"}
        </p>
        <p className="mt-0.5 text-xs leading-relaxed opacity-80">{message}</p>
      </div>

      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Dismiss notification"
        className="shrink-0 rounded-sm p-1 opacity-60 hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

// ─── Field Wrapper ────────────────────────────────────────────────────────────
/*
 * FieldWrapper provides consistent label + input + error layout.
 * Centralising this prevents duplicated margin/colour classes across
 * every field and makes the form easy to restyle globally.
 */
function FieldWrapper({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={htmlFor}
        className="font-inter text-xs font-semibold uppercase tracking-wider text-[#0F172A]"
      >
        {label}
        {required && (
          <span className="ml-1 text-[#2563EB]" aria-label="required">
            *
          </span>
        )}
      </label>
      {children}
      {/*
       * Error message is linked to the input via aria-describedby in each
       * input element (id={`${htmlFor}-error`}).
       * This satisfies WCAG 1.3.1 — screen readers announce the error
       * when the field is focused after a failed submission.
       */}
      {error && (
        <p
          id={`${htmlFor}-error`}
          role="alert"
          className="text-xs text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Input class helper ───────────────────────────────────────────────────────
function inputClass(hasError: boolean): string {
  return [
    "w-full rounded-sm border px-4 py-3 font-inter text-sm text-[#0F172A]",
    "placeholder:text-[#94a3b8] outline-none transition-colors duration-200",
    "focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20",
    hasError
      ? "border-red-400 bg-red-50"
      : "border-[#CBD5E1] bg-white hover:border-[#94a3b8]",
  ].join(" ");
}

// ─── File Upload Field ────────────────────────────────────────────────────────
/*
 * Inline file upload — kept inside ContactForm.tsx to avoid prop-drilling
 * the RHF setValue through a separate component.
 *
 * Accepts PDF, DWG, DXF up to 5MB.
 * On selection: reads the file as Base64 and calls setValue("attachment", ...)
 * so React Hook Form tracks it as part of the form state.
 */
function FileUploadField({
  value,
  onChange,
  onClear,
  error,
}: {
  value?: { name: string; size: number };
  onChange: (file: { name: string; type: string; size: number; base64: string } | undefined) => void;
  onClear: () => void;
  error?: string;
}) {
  const [dragging, setDragging] = useState(false);

  const processFile = useCallback(
    (file: File) => {
      /*
       * Client-side validation before reading the file.
       * Mirror of the Zod refinement in validations.ts —
       * catches bad files instantly without a network round-trip.
       */
      const ext = file.name.split(".").pop()?.toLowerCase();
      if (!["pdf", "dwg", "dxf"].includes(ext ?? "")) {
        alert("Only PDF, DWG, and DXF files are accepted.");
        return;
      }
      if (file.size > MAX_FILE_SIZE_BYTES) {
        alert("File must be under 5MB.");
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target?.result as string;
        /*
         * FileReader returns a data URI: "data:application/pdf;base64,XXXX"
         * We strip the prefix so Nodemailer receives raw Base64 content
         * in the attachments array — it handles the encoding itself.
         */
        const base64 = dataUrl.split(",")[1];
        onChange({ name: file.name, type: file.type, size: file.size, base64 });
      };
      reader.readAsDataURL(file);
    },
    [onChange]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
      setDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) processFile(file);
    },
    [processFile]
  );

  const formatBytes = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="font-inter text-xs font-semibold uppercase tracking-wider text-[#0F172A]">
        Drawing Upload{" "}
        <span className="font-normal normal-case tracking-normal text-[#64748B]">
          (PDF, DWG, DXF — max 5MB, optional)
        </span>
      </label>

      {value ? (
        /*
         * File selected state — shows filename, size, and a remove button.
         * Replaces the drop zone so the UI stays compact.
         */
        <div className="flex items-center justify-between gap-4 rounded-sm border border-emerald-200 bg-emerald-50 px-4 py-3">
          <div className="flex items-center gap-3 overflow-hidden">
            <svg className="h-5 w-5 shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <div className="overflow-hidden">
              <p className="truncate text-sm font-medium text-[#0F172A]">{value.name}</p>
              <p className="text-xs text-[#64748B]">{formatBytes(value.size)}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClear}
            aria-label="Remove selected file"
            className="shrink-0 rounded-sm p-1 text-[#64748B] hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ) : (
        /*
         * Drop zone — hidden file input triggered by clicking the label.
         * The div handles drag events visually while the <input> handles
         * the actual browser file picker. Both paths call processFile().
         */
        <div
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`relative cursor-pointer rounded-sm border-2 border-dashed px-6 py-8 text-center transition-colors duration-200 ${
            dragging
              ? "border-[#2563EB] bg-[#EFF6FF]"
              : error
              ? "border-red-300 bg-red-50"
              : "border-[#CBD5E1] bg-[#F8FAFC] hover:border-[#2563EB]/50 hover:bg-[#EFF6FF]/50"
          }`}
        >
          <input
            id="file-upload"
            type="file"
            accept={ALLOWED_FILE_EXTENSIONS.join(",")}
            onChange={handleInputChange}
            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
            aria-label="Upload drawing file — PDF, DWG, or DXF"
          />
          <svg className="mx-auto mb-3 h-8 w-8 text-[#64748B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
          </svg>
          <p className="text-sm font-medium text-[#0F172A]">
            Drop your file here or{" "}
            <span className="text-[#2563EB] underline-offset-2 hover:underline">
              browse
            </span>
          </p>
          <p className="mt-1 text-xs text-[#64748B]">PDF, DWG, DXF up to 5MB</p>
        </div>
      )}

      {error && (
        <p role="alert" className="text-xs text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}

// ─── Main Form Component ──────────────────────────────────────────────────────
export default function ContactForm() {
  const [toast, setToast] = useState<{ type: ToastType; message: string }>({
    type: null,
    message: "",
  });

  /*
   * useForm from React Hook Form.
   *
   * zodResolver(contactSchema) — RHF defers all validation logic to Zod.
   * This means validation rules live in ONE place (validations.ts) and are
   * shared between client and server. No duplicate rule definitions.
   *
   * mode: "onBlur" — validates each field when the user leaves it,
   * giving immediate feedback without triggering errors while typing.
   */
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      companyName: "",
      email: "",
      phone: "",
      country: "",
      projectDescription: "",
      attachment: undefined,
    },
  });

  const attachmentValue = watch("attachment");

  const showToast = useCallback(
    (type: ToastType, message: string) => {
      setToast({ type, message });
      /*
       * Auto-dismiss after 6 seconds.
       * 6s gives enough time to read both the title and the message
       * at a comfortable pace, per Nielsen's visibility heuristic.
       */
      setTimeout(() => setToast({ type: null, message: "" }), 6000);
    },
    []
  );

  /*
   * onSubmit — called by RHF only after client-side Zod validation passes.
   *
   * Flow:
   *   1. Build request body (ContactFormData — attachment already Base64)
   *   2. POST to /api/contact
   *   3. Parse ContactApiResponse
   *   4. Show success toast + reset form, OR show error toast
   *
   * isSubmitting from RHF automatically becomes true during this async
   * function and false when it resolves — used to disable the submit button.
   */
  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: ContactApiResponse = await response.json();

      if (result.success) {
        showToast(
          "success",
          "Thank you — we will review your enquiry and respond within 24 hours."
        );
        reset();
      } else {
        showToast(
          "error",
          result.error ?? "Something went wrong. Please try again or call us directly."
        );
      }
    } catch {
      showToast(
        "error",
        "Network error — please check your connection and try again."
      );
    }
  };

  return (
    <>
      {/*
       * noValidate disables the browser's native HTML5 validation UI.
       * We handle all validation through Zod + RHF — browser validation
       * is inconsistent across browsers and cannot be styled.
       */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        aria-label="Contact enquiry form"
        className="space-y-6"
      >
        {/* Row 1: Name + Company */}
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldWrapper
            label="Full Name"
            htmlFor="name"
            error={errors.name?.message}
            required
          >
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Rajesh Mehta"
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-invalid={!!errors.name}
              className={inputClass(!!errors.name)}
              {...register("name")}
            />
          </FieldWrapper>

          <FieldWrapper
            label="Company Name"
            htmlFor="companyName"
            error={errors.companyName?.message}
            required
          >
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              placeholder="Mehta Extrusions Pvt. Ltd."
              aria-describedby={errors.companyName ? "companyName-error" : undefined}
              aria-invalid={!!errors.companyName}
              className={inputClass(!!errors.companyName)}
              {...register("companyName")}
            />
          </FieldWrapper>
        </div>

        {/* Row 2: Email + Phone */}
        <div className="grid gap-5 sm:grid-cols-2">
          <FieldWrapper
            label="Email Address"
            htmlFor="email"
            error={errors.email?.message}
            required
          >
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="rajesh@mehtaextrusions.com"
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-invalid={!!errors.email}
              className={inputClass(!!errors.email)}
              {...register("email")}
            />
          </FieldWrapper>

          <FieldWrapper
            label="Phone Number"
            htmlFor="phone"
            error={errors.phone?.message}
            required
          >
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+91 98765 43210"
              aria-describedby={errors.phone ? "phone-error" : undefined}
              aria-invalid={!!errors.phone}
              className={inputClass(!!errors.phone)}
              {...register("phone")}
            />
          </FieldWrapper>
        </div>

        {/* Row 3: Country */}
        <FieldWrapper
          label="Country"
          htmlFor="country"
          error={errors.country?.message}
          required
        >
          <select
            id="country"
            aria-describedby={errors.country ? "country-error" : undefined}
            aria-invalid={!!errors.country}
            className={inputClass(!!errors.country)}
            {...register("country")}
          >
            <option value="">Select your country</option>
            {COUNTRY_OPTIONS.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        </FieldWrapper>

        {/* Row 4: Project Description */}
        <FieldWrapper
          label="Project Description"
          htmlFor="projectDescription"
          error={errors.projectDescription?.message}
          required
        >
          <textarea
            id="projectDescription"
            rows={5}
            placeholder="Describe your profile requirements — alloy, dimensions, quantity, application, press size, etc. The more detail you provide, the faster we can quote."
            aria-describedby={
              errors.projectDescription ? "projectDescription-error" : undefined
            }
            aria-invalid={!!errors.projectDescription}
            className={`resize-y ${inputClass(!!errors.projectDescription)}`}
            {...register("projectDescription")}
          />
          {/*
           * Character guidance — helps users write a useful enquiry.
           * Not a hard limit in the UI, enforced as minimum by Zod (20 chars).
           */}
          <p className="text-right text-xs text-[#94a3b8]">Minimum 20 characters</p>
        </FieldWrapper>

        {/* Row 5: File Upload */}
        <FileUploadField
          value={
            attachmentValue
              ? { name: attachmentValue.name, size: attachmentValue.size }
              : undefined
          }
          onChange={(file) => setValue("attachment", file, { shouldValidate: true })}
          onClear={() => setValue("attachment", undefined, { shouldValidate: false })}
          error={errors.attachment?.message as string | undefined}
        />

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full justify-center py-4 text-base disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? (
              <>
                {/*
                 * Spinner SVG — CSS animation, no JS dependency.
                 * animate-spin is a Tailwind utility that applies
                 * a 1-second linear infinite CSS rotation.
                 */}
                <svg
                  className="h-4 w-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send Enquiry
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </>
            )}
          </button>

          <p className="mt-3 text-xs text-[#64748B]">
            We respond to all enquiries within 24 hours on business days.
            Your information is never shared with third parties.
          </p>
        </div>
      </form>

      {/* Toast notification */}
      <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: null, message: "" })}
      />
    </>
  );
}