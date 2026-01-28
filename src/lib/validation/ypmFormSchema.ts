/**
 * YPM (Yoga Professional Member) Form Validation Schema
 * Zod schema for type-safe form validation
 * Compatible with Zod 4.x
 */

import { z } from 'zod';

/**
 * YPM Application Form Validation Rules
 */
export const ypmFormSchema = z.object({
    firstName: z
        .string()
        .min(2, 'First name must be at least 2 characters')
        .max(100, 'First name must not exceed 100 characters')
        .trim(),

    lastName: z
        .string()
        .min(1, 'Last name is required')
        .max(50, 'Last name must not exceed 50 characters')
        .trim(),

    email: z
        .string()
        .email('Please enter a valid email address')
        .trim(),

    mobile: z
        .string()
        .min(10, 'Mobile number must be at least 10 digits')
        .max(10, 'Mobile number must not exceed 10 digits')
        .regex(/^[0-9]+$/, 'Please enter a valid mobile number')
        .trim(),

    gender: z.enum(['Male', 'Female']),

    country: z
        .string()
        .min(2, 'Country is required')
        .max(100, 'Country must not exceed 100 characters')
        .trim(),

    state: z
        .string()
        .min(2, 'State is required')
        .max(100, 'State must not exceed 100 characters')
        .trim(),

    city: z
        .string()
        .min(2, 'City is required')
        .max(100, 'City must not exceed 100 characters')
        .trim(),

    address: z
        .string()
        .min(10, 'Address must be at least 10 characters')
        .max(500, 'Address must not exceed 500 characters')
        .trim(),

    pincode: z
        .string()
        .min(4, 'Pincode must be at least 4 characters')
        .max(10, 'Pincode must not exceed 10 characters')
        .regex(/^[0-9]+$/, 'Please enter a valid pincode')
        .trim(),

    referredByName: z
        .string()
        .max(100, 'Referral name must not exceed 100 characters')
        .trim()
        .optional()
        .or(z.literal('')),

    referredByMobile: z
        .string()
        .max(10, 'Referral mobile must not exceed 10 digits')
        .regex(/^[0-9]*$/, 'Please enter a valid mobile number')
        .trim()
        .optional()
        .or(z.literal('')),

    confirmationChecked: z.literal(true, 'You must confirm that the information is accurate'),
});

/**
 * Infer TypeScript types from Zod schema
 */
export type YPMFormData = z.infer<typeof ypmFormSchema>;
