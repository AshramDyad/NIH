'use client';

/**
 * Contact Form Component
 * Modern, accessible contact form with validation
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/validation/contactSchema';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        mode: 'onBlur',
    });

    const onSubmit = async (data: ContactFormData) => {
        setFormStatus('loading');
        setErrorMessage('');

        try {
            // Simulate form submission
            // TODO: Replace with actual API call or server action
            await new Promise((resolve) => setTimeout(resolve, 2000));

            // Success
            setFormStatus('success');
            reset();

            // Reset status after 5 seconds
            setTimeout(() => setFormStatus('idle'), 50000);
        } catch (error) {
            setFormStatus('error');
            setErrorMessage('Failed to submit form. Please try again.');
            console.error('Form submission error:', error);
        }
    };

    return (
        <div className="bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100">
            {formStatus === 'success' ? (
                <SuccessMessage onDismiss={() => setFormStatus('idle')} />
            ) : (
                <>
                    <div className="mb-4 space-y-2">
                        <h3 className="text-2xl font-black text-secondary">
                            Get in Touch
                        </h3>
                        <p className="text-zinc-600">
                            Fill out the form below and we&apos;ll get back to you as soon as possible.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                        {/* Name Field */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-semibold text-zinc-700 mb-2"
                            >
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your full name"
                                {...register('name')}
                                className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                                    errors.name
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300'
                                }`}
                                aria-invalid={errors.name ? 'true' : 'false'}
                                aria-describedby={errors.name ? 'name-error' : undefined}
                            />
                            {errors.name && (
                                <p
                                    id="name-error"
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                    role="alert"
                                >
                                    <AlertCircle size={14} />
                                    {errors.name.message}
                                </p>
                            )}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-semibold text-zinc-700 mb-2"
                            >
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your.email@example.com"
                                {...register('email')}
                                className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                                    errors.email
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300'
                                }`}
                                aria-invalid={errors.email ? 'true' : 'false'}
                                aria-describedby={errors.email ? 'email-error' : undefined}
                            />
                            {errors.email && (
                                <p
                                    id="email-error"
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                    role="alert"
                                >
                                    <AlertCircle size={14} />
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Phone Field */}
                        <div>
                            <label
                                htmlFor="phone"
                                className="block text-sm font-semibold text-zinc-700 mb-2"
                            >
                                Phone <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="+91 9953882605"
                                {...register('phone')}
                                className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                                    errors.phone
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300'
                                }`}
                                aria-invalid={errors.phone ? 'true' : 'false'}
                                aria-describedby={errors.phone ? 'phone-error' : undefined}
                            />
                            {errors.phone && (
                                <p
                                    id="phone-error"
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                    role="alert"
                                >
                                    <AlertCircle size={14} />
                                    {errors.phone.message}
                                </p>
                            )}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label
                                htmlFor="message"
                                className="block text-sm font-semibold text-zinc-700 mb-2"
                            >
                                Message <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Write your message here..."
                                {...register('message')}
                                className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
                                    errors.message
                                        ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
                                        : 'border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300'
                                }`}
                                aria-invalid={errors.message ? 'true' : 'false'}
                                aria-describedby={errors.message ? 'message-error' : undefined}
                            />
                            {errors.message && (
                                <p
                                    id="message-error"
                                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                                    role="alert"
                                >
                                    <AlertCircle size={14} />
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-full shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[56px]"
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : (
                                <>
                                    <Mail size={20} />
                                    <span>Send Message</span>
                                    <Send size={20} />
                                </>
                            )}
                        </button>

                        {/* Error Message */}
                        {formStatus === 'error' && errorMessage && (
                            <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" role="alert">
                                {errorMessage}
                            </div>
                        )}
                    </form>
                </>
            )}
        </div>
    );
}

/**
 * Success Message Component
 * Displays success state after form submission
 */
function SuccessMessage({ onDismiss }: { onDismiss: () => void }) {
    return (
        <div className="text-center py-10">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={48} className="text-green-600" />
            </div>
            <h3 className="text-2xl font-black text-secondary mb-4">
                Message Sent Successfully!
            </h3>
            <p className="text-zinc-600 mb-4 max-w-md mx-auto">
                Thank you for reaching out. We&apos;ve received your message and will get back to you as soon as possible.
            </p>
            <button
                onClick={onDismiss}
                className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
            >
                Send Another Message
            </button>
        </div>
    );
}
