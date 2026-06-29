"use client";

import { useState, useCallback } from "react";

import {
  ALLOWED_FILE_EXTENSIONS,
  MAX_FILE_SIZE_BYTES,
} from "@/types/contact";

interface FileUploadFieldProps {
  value?: {
    name: string;
    size: number;
  };
  onChange: (
    file:
      | {
          name: string;
          type: string;
          size: number;
          base64: string;
        }
      | undefined
  ) => void;
  onClear: () => void;
  error?: string;
}

export default function FileUploadField({
  value,
  onChange,
  onClear,
  error,
}: FileUploadFieldProps) {
  const [dragging, setDragging] = useState(false);

  const processFile = useCallback(
    (file: File) => {
      if (file.size > MAX_FILE_SIZE_BYTES) {
        alert("Maximum file size is 5 MB.");
        return;
      }

      const extension =
        "." + file.name.split(".").pop()?.toLowerCase();

      if (
        !ALLOWED_FILE_EXTENSIONS.includes(
          extension as (typeof ALLOWED_FILE_EXTENSIONS)[number]
        )
      ) {
        alert("Only PDF, DWG and DXF files are allowed.");
        return;
      }

      const reader = new FileReader();

      reader.onload = () => {
        const result = reader.result as string;

        const base64 =
          result.split(",")[1] ?? "";

        onChange({
          name: file.name,
          type: file.type,
          size: file.size,
          base64,
        });
      };

      reader.readAsDataURL(file);
    },
    [onChange]
  );

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    processFile(file);
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>
  ) => {
    event.preventDefault();
    setDragging(false);

    const file = event.dataTransfer.files?.[0];

    if (!file) return;

    processFile(file);
  };

  return (
    <div>
      <label
        htmlFor="attachment"
        className="mb-2 block text-sm font-medium text-[#0F172A]"
      >
        Profile Drawing (Optional)
      </label>

      {!value ? (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`rounded-xl border-2 border-dashed p-6 text-center transition ${
            dragging
              ? "border-[#2563EB] bg-blue-50"
              : "border-slate-300 bg-white"
          }`}
        >
          <input
            id="attachment"
            type="file"
            accept=".pdf,.dwg,.dxf"
            onChange={handleInputChange}
            className="hidden"
          />

          <label
            htmlFor="attachment"
            className="cursor-pointer"
          >
            <p className="font-medium text-[#0F172A]">
              Upload Profile Drawing
            </p>

            <p className="mt-2 text-sm text-slate-500">
              PDF, DWG or DXF
            </p>

            <p className="text-sm text-slate-500">
              Maximum 5 MB
            </p>
          </label>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-4">
          <div>
            <p className="font-medium text-[#0F172A]">
              {value.name}
            </p>

            <p className="text-sm text-slate-500">
              {(value.size / 1024).toFixed(1)} KB
            </p>
          </div>

          <button
            type="button"
            onClick={onClear}
            className="text-sm font-medium text-red-600 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      )}

      {error && (
        <p
          role="alert"
          className="mt-2 text-sm text-red-600"
        >
          {error}
        </p>
      )}
    </div>
  );
}