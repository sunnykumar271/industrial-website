import { NextResponse } from "next/server";

import { contactSchema } from "@/lib/validations";
import { sendContactEmail } from "@/lib/email";

import type {
  ContactApiResponse,
  ContactFormData,
} from "@/types/contact";

/*
 * POST /api/contact
 *
 * Flow:
 * 1. Parse JSON body
 * 2. Validate with Zod
 * 3. Send email
 * 4. Return typed API response
 */
export async function POST(
  request: Request
): Promise<NextResponse<ContactApiResponse>> {
  try {
    const body = await request.json();

    /*
     * Server-side validation.
     * Never trust client validation alone.
     */
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      const fieldErrors: Partial<
        Record<keyof ContactFormData, string>
      > = {};

      const flattened = result.error.flatten();

      Object.entries(flattened.fieldErrors).forEach(
        ([key, value]) => {
          if (value?.[0]) {
            fieldErrors[key as keyof ContactFormData] =
              value[0];
          }
        }
      );

      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          fieldErrors,
        },
        {
          status: 400,
        }
      );
    }

    const data = result.data;

    /*
     * Send email.
     */
    await sendContactEmail(data);

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you for your enquiry. We will contact you shortly.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(
      "[CONTACT_FORM_ERROR]",
      error
    );

    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to process your request at this time. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}

/*
 * Optional:
 * Explicitly reject other HTTP methods.
 */

export async function GET() {
  return NextResponse.json(
    {
      success: false,
      error: "Method not allowed",
    },
    {
      status: 405,
    }
  );
}