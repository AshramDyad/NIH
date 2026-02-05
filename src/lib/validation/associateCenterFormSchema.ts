/**
 * Associate Center Form Validation Schema
 * Zod schema for type-safe form validation
 */

import { z } from 'zod';

/**
 * Associate Center Application Form Validation Rules
 */
export const associateCenterFormSchema = z.object({
    hospitalName: z
        .string()
        .min(2, 'Hospital/Centre name must be at least 2 characters')
        .max(200, 'Hospital/Centre name must not exceed 200 characters')
        .trim(),

    fullAddress: z
        .string()
        .min(10, 'Address must be at least 10 characters')
        .max(500, 'Address must not exceed 500 characters')
        .trim(),

    district: z
        .string()
        .min(2, 'District is required')
        .max(100, 'District must not exceed 100 characters')
        .trim(),

    state: z
        .string()
        .min(2, 'State is required')
        .max(100, 'State must not exceed 100 characters')
        .trim(),

    phoneNumber: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must not exceed 15 digits')
        .regex(/^[0-9+\-() ]+$/, 'Please enter a valid phone number')
        .trim(),

    email: z
        .string()
        .email('Please enter a valid email address')
        .trim(),

    website: z
        .string()
        .url('Please enter a valid website URL')
        .trim()
        .optional()
        .or(z.literal('')),

    administratorName: z
        .string()
        .min(2, 'Administrator name must be at least 2 characters')
        .max(100, 'Administrator name must not exceed 100 characters')
        .trim(),

    doctorName: z
        .string()
        .min(2, 'Doctor/CMD/MD name must be at least 2 characters')
        .max(100, 'Doctor/CMD/MD name must not exceed 100 characters')
        .trim(),

    phoneNo: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .max(15, 'Phone number must not exceed 15 digits')
        .regex(/^[0-9+\-() ]+$/, 'Please enter a valid phone number')
        .trim(),

    hospitalOpeningHour: z
        .string()
        .min(2, 'Hospital opening hours are required')
        .max(100, 'Opening hours must not exceed 100 characters')
        .trim(),

    weeklyHolidays: z
        .array(z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'])),

    specialFeatures: z
        .string()
        .max(500, 'Special features must not exceed 500 characters')
        .trim()
        .optional()
        .or(z.literal('')),

    otherInformation: z
        .string()
        .max(500, 'Other information must not exceed 500 characters')
        .trim()
        .optional()
        .or(z.literal('')),
});

/**
 * Infer TypeScript types from Zod schema
 */
export type AssociateCenterFormData = z.infer<typeof associateCenterFormSchema>;
