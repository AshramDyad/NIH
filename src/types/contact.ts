/**
 * Contact Form Types
 * Type-safe interfaces for contact form data and errors
 */

/**
 * Contact Form Data Structure
 * Contains all fields from the contact submission form
 */
export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

/**
 * Contact Form Errors Structure
 * Contains validation error messages for each field
 */
export interface ContactFormErrors {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
}

/**
 * Form Submission State
 * Tracks the status of form submission
 */
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';
