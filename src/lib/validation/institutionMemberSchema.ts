import { z } from 'zod';

/**
 * Institution Member Form Validation Schema
 */
export const institutionMemberSchema = z.object({
    name: z
        .string()
        .min(2, 'Center name must be at least 2 characters')
        .max(150, 'Center name must not exceed 150 characters')
        .trim(),

    address: z
        .string()
        .min(5, 'Address must be at least 5 characters')
        .max(255, 'Address must not exceed 255 characters')
        .trim(),

    url: z
        .string()
        .min(1, 'URL is required')
        .url('Please enter a valid URL')
        .trim(),

    imageUrl: z
        .string()
        .min(1, 'Image is required')
        .url('Image must be a valid URL')
        .trim(),
});

/**
 * Infer TypeScript types from Zod schema
 */
export type InstitutionMemberFormData = z.infer<typeof institutionMemberSchema>;
