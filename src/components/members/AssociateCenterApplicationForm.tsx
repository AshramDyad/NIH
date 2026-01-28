'use client';

/**
 * Associate Center Application Form Component
 * Public form for OPD/IPD Hospital/Centre registration
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
    associateCenterFormSchema,
    type AssociateCenterFormData,
} from '@/lib/validation/associateCenterFormSchema';
import { Send, CheckCircle, AlertCircle, Upload, X } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Max file size for logo
const MAX_LOGO_SIZE = 5 * 1024 * 1024; // 5MB

// Days of the week for checkboxes
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] as const;

export default function AssociateCenterApplicationForm() {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    // File state
    const [logoFile, setLogoFile] = useState<File | null>(null);
    const [logoError, setLogoError] = useState<string>('');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        watch,
    } = useForm<AssociateCenterFormData>({
        resolver: zodResolver(associateCenterFormSchema),
        mode: 'onSubmit',
        defaultValues: {
            weeklyHolidays: [],
        },
    });

    const selectedHolidays = watch('weeklyHolidays') || [];

    // Handle logo file selection
    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setLogoError('');

        if (!file) {
            setLogoFile(null);
            return;
        }

        if (file.size > MAX_LOGO_SIZE) {
            setLogoError('File must be less than 5MB');
            setLogoFile(null);
            e.target.value = '';
            return;
        }

        if (!file.type.startsWith('image/')) {
            setLogoError('Only image files are allowed');
            setLogoFile(null);
            e.target.value = '';
            return;
        }

        setLogoFile(file);
    };

    // Clear logo file
    const clearLogoFile = () => {
        setLogoFile(null);
        setLogoError('');
    };

    // Handle checkbox change for weekly holidays
    const handleHolidayChange = (day: typeof WEEK_DAYS[number]) => {
        const current = selectedHolidays;
        const updated = current.includes(day)
            ? current.filter(d => d !== day)
            : [...current, day];
        setValue('weeklyHolidays', updated);
    };

    const onSubmit = async (data: AssociateCenterFormData) => {
        // Validate logo file (required)
        if (!logoFile) {
            setLogoError('Logo is required');
            return;
        }

        setFormStatus('loading');
        setErrorMessage('');

        try {
            // Create FormData for submission
            const formData = new FormData();

            // Add text fields
            formData.append('hospitalName', data.hospitalName);
            formData.append('fullAddress', data.fullAddress);
            formData.append('district', data.district);
            formData.append('state', data.state);
            formData.append('phoneNumber', data.phoneNumber);
            formData.append('email', data.email);
            formData.append('website', data.website || '');
            formData.append('administratorName', data.administratorName);
            formData.append('doctorName', data.doctorName);
            formData.append('phoneNo', data.phoneNo);
            formData.append('hospitalOpeningHour', data.hospitalOpeningHour);
            formData.append('weeklyHolidays', JSON.stringify(data.weeklyHolidays || []));
            formData.append('specialFeatures', data.specialFeatures || '');
            formData.append('otherInformation', data.otherInformation || '');

            // Add file
            formData.append('logoFile', logoFile);

            // Submit to API
            const response = await fetch('/api/associate-center-application', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || result.message || 'Submission failed');
            }

            setFormStatus('success');
            reset();
            clearLogoFile();
            setValue('weeklyHolidays', []);
        } catch (error) {
            setFormStatus('error');
            setErrorMessage(
                error instanceof Error ? error.message : 'Failed to submit application'
            );
        }
    };

    // Input classes helper
    const getInputClasses = (hasError: boolean) =>
        `w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${hasError
            ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20'
            : 'border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300'
        }`;

    if (formStatus === 'success') {
        return (
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-zinc-100 text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={48} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-black text-secondary mb-4">
                    Application Submitted Successfully!
                </h3>
                <p className="text-zinc-600 mb-6 max-w-md mx-auto">
                    Thank you for submitting your Associate Center application. We will review your
                    application and contact you soon.
                </p>
                <button
                    onClick={() => { setFormStatus('idle'); setValue('weeklyHolidays', []); }}
                    className="bg-secondary hover:bg-secondary/90 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300"
                >
                    Submit Another Application
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100">
            <div className="mb-6 space-y-2">
                <h3 className="text-2xl font-black text-secondary">
                    Associate Center Application Form
                </h3>
                <p className="text-zinc-600">
                    Fill out the form below to apply for Associate Centre registration.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Hospital Name */}
                <div>
                    <label
                        htmlFor="hospitalName"
                        className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                        Name of the Hospital/Centre: <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="hospitalName"
                        placeholder="Enter hospital/centre name"
                        {...register('hospitalName')}
                        className={getInputClasses(!!errors.hospitalName)}
                        aria-invalid={errors.hospitalName ? 'true' : 'false'}
                    />
                    {errors.hospitalName && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.hospitalName.message}
                        </p>
                    )}
                </div>

                {/* Full Address */}
                <div>
                    <label
                        htmlFor="fullAddress"
                        className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                        Full Address (including Pincode): <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="fullAddress"
                        rows={3}
                        placeholder="Enter complete address with pincode"
                        {...register('fullAddress')}
                        className={`${getInputClasses(!!errors.fullAddress)} resize-none`}
                        aria-invalid={errors.fullAddress ? 'true' : 'false'}
                    />
                    {errors.fullAddress && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.fullAddress.message}
                        </p>
                    )}
                </div>

                {/* District and State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="district"
                            className="block text-sm font-semibold text-zinc-700 mb-2"
                        >
                            District <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="district"
                            placeholder="Your district"
                            {...register('district')}
                            className={getInputClasses(!!errors.district)}
                            aria-invalid={errors.district ? 'true' : 'false'}
                        />
                        {errors.district && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.district.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="state"
                            className="block text-sm font-semibold text-zinc-700 mb-2"
                        >
                            State <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="state"
                            placeholder="Your state"
                            {...register('state')}
                            className={getInputClasses(!!errors.state)}
                            aria-invalid={errors.state ? 'true' : 'false'}
                        />
                        {errors.state && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.state.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Phone Number */}
                <div>
                    <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                        Phone number <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        placeholder="Phone number"
                        {...register('phoneNumber')}
                        className={getInputClasses(!!errors.phoneNumber)}
                        aria-invalid={errors.phoneNumber ? 'true' : 'false'}
                    />
                    {errors.phoneNumber && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.phoneNumber.message}
                        </p>
                    )}
                </div>

                {/* Email */}
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
                        className={getInputClasses(!!errors.email)}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* Website */}
                <div>
                    <label
                        htmlFor="website"
                        className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                        Website
                    </label>
                    <input
                        type="url"
                        id="website"
                        placeholder="https://example.com"
                        {...register('website')}
                        className={getInputClasses(!!errors.website)}
                    />
                    {errors.website && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.website.message}
                        </p>
                    )}
                </div>

                {/* Administrator and Doctor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="administratorName"
                            className="block text-sm font-semibold text-zinc-700 mb-2"
                        >
                            Administrator Name/Phone No.: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="administratorName"
                            placeholder="Administrator name/phone"
                            {...register('administratorName')}
                            className={getInputClasses(!!errors.administratorName)}
                            aria-invalid={errors.administratorName ? 'true' : 'false'}
                        />
                        {errors.administratorName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.administratorName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="doctorName"
                            className="block text-sm font-semibold text-zinc-700 mb-2"
                        >
                            Name of the Doctor/CMO/RMO: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="doctorName"
                            placeholder="Doctor/CMO/RMO name"
                            {...register('doctorName')}
                            className={getInputClasses(!!errors.doctorName)}
                            aria-invalid={errors.doctorName ? 'true' : 'false'}
                        />
                        {errors.doctorName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.doctorName.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Phone No and Opening Hours */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label
                            htmlFor="phoneNo"
                            className="block text-sm font-semibold text-zinc-700 mb-2"
                        >
                            Phone No.: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="phoneNo"
                            placeholder="Phone number"
                            {...register('phoneNo')}
                            className={getInputClasses(!!errors.phoneNo)}
                            aria-invalid={errors.phoneNo ? 'true' : 'false'}
                        />
                        {errors.phoneNo && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.phoneNo.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label
                            htmlFor="hospitalOpeningHour"
                            className="block text-sm font-semibold text-zinc-700 mb-2"
                        >
                            Hospital/Centre opening and closing hours: <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="hospitalOpeningHour"
                            placeholder="e.g., 9:00 AM - 5:00 PM"
                            {...register('hospitalOpeningHour')}
                            className={getInputClasses(!!errors.hospitalOpeningHour)}
                            aria-invalid={errors.hospitalOpeningHour ? 'true' : 'false'}
                        />
                        {errors.hospitalOpeningHour && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.hospitalOpeningHour.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Weekly Holidays - Checkboxes */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-3">
                        Weekly Holidays:
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {WEEK_DAYS.map((day) => (
                            <label
                                key={day}
                                className="flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-colors hover:bg-zinc-50"
                                style={{
                                    borderColor: selectedHolidays.includes(day) ? '#3b82f6' : '#e5e7eb',
                                    backgroundColor: selectedHolidays.includes(day) ? '#eff6ff' : 'white',
                                }}
                            >
                                <input
                                    type="checkbox"
                                    checked={selectedHolidays.includes(day)}
                                    onChange={() => handleHolidayChange(day)}
                                    className="w-4 h-4 text-primary rounded focus:ring-2 focus:ring-primary"
                                />
                                <span className="text-sm font-medium text-zinc-700">{day}</span>
                            </label>
                        ))}
                    </div>
                </div>

                {/* Special Features */}
                <div>
                    <label
                        htmlFor="specialFeatures"
                        className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                        Special Features:
                    </label>
                    <textarea
                        id="specialFeatures"
                        rows={3}
                        placeholder="Describe any special features"
                        {...register('specialFeatures')}
                        className={`${getInputClasses(!!errors.specialFeatures)} resize-none`}
                    />
                    {errors.specialFeatures && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.specialFeatures.message}
                        </p>
                    )}
                </div>

                {/* Other Information */}
                <div>
                    <label
                        htmlFor="otherInformation"
                        className="block text-sm font-semibold text-zinc-700 mb-2"
                    >
                        Other Information:
                    </label>
                    <textarea
                        id="otherInformation"
                        rows={3}
                        placeholder="Any additional information"
                        {...register('otherInformation')}
                        className={`${getInputClasses(!!errors.otherInformation)} resize-none`}
                    />
                    {errors.otherInformation && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.otherInformation.message}
                        </p>
                    )}
                </div>

                {/* Logo Upload */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Upload Logo of Associate <span className="text-red-500">*</span>
                    </label>
                    <div
                        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${logoError
                            ? 'border-red-300 bg-red-50'
                            : logoFile
                                ? 'border-green-300 bg-green-50'
                                : 'border-zinc-200 hover:border-primary/50'
                            }`}
                    >
                        {logoFile ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-green-600" />
                                    <span className="text-sm text-zinc-700">{logoFile.name}</span>
                                    <span className="text-xs text-zinc-500">
                                        ({(logoFile.size / 1024).toFixed(1)} KB)
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={clearLogoFile}
                                    className="p-1 hover:bg-zinc-100 rounded"
                                >
                                    <X className="w-4 h-4 text-zinc-500" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoChange}
                                    className="hidden"
                                    id="logoFile"
                                />
                                <label
                                    htmlFor="logoFile"
                                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm font-medium text-zinc-700 transition-colors"
                                >
                                    <Upload className="w-4 h-4" />
                                    Choose File
                                </label>
                            </div>
                        )}
                    </div>
                    <p className="mt-2 text-xs text-zinc-500 italic">
                        Upload logo (Image format, Max-5MB)
                    </p>
                    {logoError && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {logoError}
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
                            <span>Submitting...</span>
                        </>
                    ) : (
                        <>
                            <span>Submit Application</span>
                            <Send size={20} />
                        </>
                    )}
                </button>

                {/* Error Message */}
                {formStatus === 'error' && errorMessage && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm flex items-start gap-2">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                        <span>{errorMessage}</span>
                    </div>
                )}
            </form>
        </div>
    );
}
