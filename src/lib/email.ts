/**
 * Email Utility
 * Configures Nodemailer transporter for Gmail SMTP
 * and sends contact form notification emails.
 */

import nodemailer from "nodemailer";
import type { ContactFormData } from "@/lib/validation/contactSchema";

/**
 * Gmail SMTP transporter (reused across requests)
 * Uses App Password authentication for security
 */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

/**
 * Result type for email operations
 */
interface EmailResult {
  success: boolean;
  error?: string;
}

/**
 * Builds an HTML email body from contact form data
 */
function buildEmailHtml(data: ContactFormData): string {
  const rows: Array<{ label: string; value: string | undefined }> = [
    { label: "Name", value: data.name },
    { label: "Email", value: data.email },
    { label: "Phone", value: data.phone },
    { label: "Gender", value: data.gender },
    { label: "Date of Birth", value: data.dob },
    { label: "Qualification", value: data.qualification },
    { label: "City", value: data.city },
    { label: "State", value: data.state },
  ];

  const tableRows = rows
    .filter((row) => row.value)
    .map(
      (row) => `
            <tr>
                <td style="padding: 12px 0; font-weight: 500; color: #6b7280; font-size: 14px; width: 140px; border-bottom: 1px solid #f3f4f6; vertical-align: top;">
                    ${row.label}
                </td>
                <td style="padding: 12px 0; font-weight: 500; color: #111827; font-size: 15px; border-bottom: 1px solid #f3f4f6;">
                    ${row.value}
                </td>
            </tr>`,
    )
    .join("");

  return `
    <div style="font-family: 'Inter', 'Segoe UI', Arial, sans-serif; background-color: #f4f4f5; padding: 40px 20px; line-height: 1.5;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
            
            <!-- Header -->
            <tr>
                <td style="background-color: #155b2e; border-top: 4px solid #f3972a; padding: 32px 40px; text-align: left;">
                    <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">
                        New Contact Request
                    </h2>
                    <p style="margin: 8px 0 0; color: #d1fae5; font-size: 15px; opacity: 0.9;">
                        National Institute of Holistic Health (NIH)
                    </p>
                </td>
            </tr>

            <!-- Content Area -->
            <tr>
                <td style="padding: 40px 40px 20px;">
                    <h3 style="margin: 0 0 20px; font-size: 18px; color: #111827; font-weight: 600; padding-bottom: 12px; border-bottom: 2px solid #f3f4f6;">
                        Contact Details
                    </h3>
                    
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 32px;">
                        ${tableRows}
                    </table>

                    <!-- Message Section -->
                    <h3 style="margin: 0 0 16px; font-size: 16px; color: #111827; font-weight: 600;">
                        Message
                    </h3>
                    <div style="background-color: #fafafa; border-left: 4px solid #f3972a; padding: 20px; border-radius: 0 8px 8px 0;">
                        <p style="margin: 0; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                    </div>
                </td>
            </tr>            
        </table>
    </div>`;
}

/**
 * Sends a contact form notification email to the admin
 */
export async function sendContactEmail(
  data: ContactFormData,
): Promise<EmailResult> {
  const recipientEmail = process.env.CONTACT_EMAIL_TO;

  if (!process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.error("[Email] SMTP credentials are not configured");
    return { success: false, error: "Email service is not configured." };
  }

  if (!recipientEmail) {
    console.error("[Email] CONTACT_EMAIL_TO is not configured");
    return { success: false, error: "Recipient email is not configured." };
  }

  try {
    await transporter.sendMail({
      from: `"National Institute of Holistic Health (NIH)" <${process.env.SMTP_USER}>`,
      to: recipientEmail,
      replyTo: data.email,
      subject: `New Inquiry: ${data.name} — NIH Contact Form`,
      html: buildEmailHtml(data),
    });

    return { success: true };
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unknown email error";
    console.error("[Email] Failed to send:", errorMessage);
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    };
  }
}
