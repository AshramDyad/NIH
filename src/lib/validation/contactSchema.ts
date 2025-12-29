/**
 * Contact Form Validation Schema
 * Zod schema for type-safe form validation
 */

import { z } from 'zod';

/**
 * Contact Form Validation Rules
 * Defines validation rules for each form field
 * Compatible with Zod 4.x
 */
export const contactFormSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(50, 'Name must not exceed 50 characters')
        .trim(),

    email: z
        .string()
        .email('Please enter a valid email address')
        .trim(),

    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(10, 'Phone number must not exceed 10 digits')
        .regex(/^[0-9+\-\s]+$/, 'Please enter a valid phone number')
        .trim(),

    message: z
        .string()
        .min(10, 'Message must be at least 10 characters')
        .max(500, 'Message must not exceed 500 characters')
        .trim(),
});

/**
 * Infer TypeScript types from Zod schema
 * This ensures type safety between validation and form data
 */
export type ContactFormData = z.infer<typeof contactFormSchema>;
