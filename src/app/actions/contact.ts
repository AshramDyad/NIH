"use server";

/**
 * Contact Form Server Action
 * Validates form data and sends notification email to admin
 */

import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validation/contactSchema";
import { sendContactEmail } from "@/lib/email";

/**
 * Server action response type
 */
interface ActionResponse {
  success: boolean;
  message: string;
}

/**
 * Handles contact form submission
 * 1. Re-validates data on the server (defense in depth)
 * 2. Sends email via Nodemailer
 * 3. Returns success/error result
 */
export async function submitContactForm(
  data: ContactFormData,
): Promise<ActionResponse> {
  // Server-side validation using existing Zod schema
  const parsed = contactFormSchema.safeParse(data);

  if (!parsed.success) {
    const firstError = parsed.error.issues[0]?.message ?? "Invalid form data";
    return { success: false, message: firstError };
  }

  // Send the email
  const emailResult = await sendContactEmail(parsed.data);

  if (!emailResult.success) {
    return {
      success: false,
      message:
        emailResult.error ?? "Failed to send your message. Please try again.",
    };
  }

  return {
    success: true,
    message:
      "Your message has been sent successfully! We will get back to you soon.",
  };
}
