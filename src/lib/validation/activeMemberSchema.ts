/**
 * Active Member Form Validation Schema
 * Zod schema for type-safe form validation
 */

import { z } from 'zod';

/**
 * Active Member Validation Rules
 */
export const activeMemberSchema = z.object({
    name: z
        .string()
        .min(2, 'Name must be at least 2 characters')
        .max(100, 'Name must not exceed 100 characters')
        .trim(),

    memberNumber: z
        .string()
        .min(1, 'Member number is required')
        .max(50, 'Member number must not exceed 50 characters')
        .regex(/^NIH\/[A-Z]{2}\/\d{4}$/, 'Member number must be in format: NIH/XX/#### (e.g., NIH/DL/1234)')
        .trim(),

    dateOfBirth: z
        .string()
        .regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be in YYYY-MM-DD format (e.g., 1975-10-05)')
        .trim()
        .optional()
        .or(z.literal('')),

    imageUrl: z
        .string()
        .min(1, 'Image is required')
        .url('Image must be a valid URL')
        .trim(),
});

/**
 * Infer TypeScript types from Zod schema
 */
export type ActiveMemberFormData = z.infer<typeof activeMemberSchema>;
