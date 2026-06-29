import nodemailer from "nodemailer";

import type { ContactFormData } from "@/types/contact";

/*
 * SMTP transporter.
 *
 * Environment variables:
 *
 * SMTP_HOST=
 * SMTP_PORT=
 * SMTP_USER=
 * SMTP_PASS=
 * CONTACT_TO_EMAIL=
 */
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: Number(process.env.SMTP_PORT) === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

/*
 * Optional startup verification.
 * Useful during deployment.
 */
export async function verifyEmailConnection() {
  await transporter.verify();
}

/*
 * Generates clean HTML email.
 */
function generateEmailHtml(
  data: ContactFormData
) {
  return `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111827;">
      <h2 style="margin-bottom:20px;">
        New Website Enquiry
      </h2>

      <table
        cellpadding="8"
        cellspacing="0"
        border="1"
        style="border-collapse:collapse;width:100%;"
      >
        <tr>
          <td><strong>Name</strong></td>
          <td>${data.name}</td>
        </tr>

        <tr>
          <td><strong>Company</strong></td>
          <td>${data.companyName}</td>
        </tr>

        <tr>
          <td><strong>Email</strong></td>
          <td>${data.email}</td>
        </tr>

        <tr>
          <td><strong>Phone</strong></td>
          <td>${data.phone}</td>
        </tr>

        <tr>
          <td><strong>Country</strong></td>
          <td>${data.country}</td>
        </tr>

        <tr>
          <td><strong>Project Description</strong></td>
          <td>${data.projectDescription.replace(
            /\n/g,
            "<br />"
          )}</td>
        </tr>
      </table>
    </div>
  `;
}

/*
 * Sends enquiry email.
 */
export async function sendContactEmail(
  data: ContactFormData
) {
  const attachments = data.attachment
    ? [
        {
          filename: data.attachment.name,
          content: data.attachment.base64,
          encoding: "base64" as const,
          contentType: data.attachment.type,
        },
      ]
    : [];

  await transporter.sendMail({
    from: `"PrecisionDie Website" <${process.env.SMTP_USER}>`,

    to: process.env.CONTACT_TO_EMAIL,

    replyTo: data.email,

    subject: `New Enquiry from ${data.companyName}`,

    html: generateEmailHtml(data),

    attachments,
  });
}