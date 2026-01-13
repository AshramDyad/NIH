'use client';

/**
 * YPM Application Form Component
 * Membership form for Yoga Professional Members
 */

import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ypmFormSchema, type YPMFormData } from '@/lib/validation/ypmFormSchema';
import { Send, CheckCircle, AlertCircle, Upload, X } from 'lucide-react';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// Max file sizes in bytes
const MAX_QUALIFICATION_SIZE = 200 * 1024; // 200KB
const MAX_PHOTO_SIZE = 10 * 1024 * 1024; // 10MB

export default function YPMApplicationForm() {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState<string>('');

    // File state
    const [qualificationFile, setQualificationFile] = useState<File | null>(null);
    const [photoFile, setPhotoFile] = useState<File | null>(null);
    const [qualificationError, setQualificationError] = useState<string>('');
    const [photoError, setPhotoError] = useState<string>('');

    const qualificationInputRef = useRef<HTMLInputElement>(null);
    const photoInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<YPMFormData>({
        resolver: zodResolver(ypmFormSchema),
        mode: 'onSubmit',
    });

    // Handle qualification file selection
    const handleQualificationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setQualificationError('');

        if (!file) {
            setQualificationFile(null);
            return;
        }

        if (file.size > MAX_QUALIFICATION_SIZE) {
            setQualificationError('File must be less than 200KB');
            setQualificationFile(null);
            if (qualificationInputRef.current) qualificationInputRef.current.value = '';
            return;
        }

        setQualificationFile(file);
    };

    // Handle photo file selection
    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setPhotoError('');

        if (!file) {
            setPhotoFile(null);
            return;
        }

        if (file.size > MAX_PHOTO_SIZE) {
            setPhotoError('File must be less than 10MB');
            setPhotoFile(null);
            if (photoInputRef.current) photoInputRef.current.value = '';
            return;
        }

        setPhotoFile(file);
    };

    // Clear file
    const clearQualificationFile = () => {
        setQualificationFile(null);
        setQualificationError('');
        if (qualificationInputRef.current) qualificationInputRef.current.value = '';
    };

    const clearPhotoFile = () => {
        setPhotoFile(null);
        setPhotoError('');
        if (photoInputRef.current) photoInputRef.current.value = '';
    };

    const onSubmit = async (data: YPMFormData) => {
        // Validate photo file (required)
        if (!photoFile) {
            setPhotoError('Profile photo is required');
            return;
        }

        setFormStatus('loading');
        setErrorMessage('');

        try {
            // Create FormData for submission
            const formData = new FormData();

            // Add text fields
            formData.append('fullName', data.fullName);
            formData.append('lastName', data.lastName);
            formData.append('email', data.email);
            formData.append('mobile', data.mobile);
            formData.append('gender', data.gender);
            formData.append('country', data.country);
            formData.append('state', data.state);
            formData.append('city', data.city);
            formData.append('address', data.address);
            formData.append('pincode', data.pincode);
            formData.append('referredBy', data.referredBy || '');
            formData.append('confirmationChecked', String(data.confirmationChecked));

            // Add files
            if (qualificationFile) {
                formData.append('qualificationFile', qualificationFile);
            }
            formData.append('photoFile', photoFile);

            // Submit to API
            const response = await fetch('/api/ypm-application', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(result.error || result.message || 'Submission failed');
            }

            setFormStatus('success');
            reset();
            clearQualificationFile();
            clearPhotoFile();
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
                    Thank you for applying for Yoga Professional Membership. We will review your application and contact you soon.
                </p>
                <button
                    onClick={() => setFormStatus('idle')}
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
                    Membership Application Form
                </h3>
                <p className="text-zinc-600">
                    Fill out the form below to apply for Yoga Professional Membership.
                </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* Row 1: Full Name, Last Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fullName" className="block text-sm font-semibold text-zinc-700 mb-2">
                            Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter your full name"
                            {...register('fullName')}
                            className={getInputClasses(!!errors.fullName)}
                            aria-invalid={errors.fullName ? 'true' : 'false'}
                        />
                        {errors.fullName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-semibold text-zinc-700 mb-2">
                            Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            placeholder="Enter your last name"
                            {...register('lastName')}
                            className={getInputClasses(!!errors.lastName)}
                            aria-invalid={errors.lastName ? 'true' : 'false'}
                        />
                        {errors.lastName && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.lastName.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 2: Email, Mobile */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-zinc-700 mb-2">
                            Your Email <span className="text-red-500">*</span>
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

                    <div>
                        <label htmlFor="mobile" className="block text-sm font-semibold text-zinc-700 mb-2">
                            Mobile <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="tel"
                            id="mobile"
                            placeholder="10 digit mobile number"
                            maxLength={10}
                            {...register('mobile')}
                            className={getInputClasses(!!errors.mobile)}
                            aria-invalid={errors.mobile ? 'true' : 'false'}
                        />
                        {errors.mobile && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.mobile.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 3: Gender, Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="gender" className="block text-sm font-semibold text-zinc-700 mb-2">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                            id="gender"
                            {...register('gender')}
                            className={`${getInputClasses(!!errors.gender)} appearance-none bg-white cursor-pointer`}
                            aria-invalid={errors.gender ? 'true' : 'false'}
                        >
                            <option value="">Select gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        {errors.gender && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.gender.message}
                            </p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="country" className="block text-sm font-semibold text-zinc-700 mb-2">
                            Country <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="country"
                            placeholder="Your country"
                            {...register('country')}
                            className={getInputClasses(!!errors.country)}
                            aria-invalid={errors.country ? 'true' : 'false'}
                        />
                        {errors.country && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.country.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 4: State, City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="state" className="block text-sm font-semibold text-zinc-700 mb-2">
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

                    <div>
                        <label htmlFor="city" className="block text-sm font-semibold text-zinc-700 mb-2">
                            City <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="city"
                            placeholder="Your city"
                            {...register('city')}
                            className={getInputClasses(!!errors.city)}
                            aria-invalid={errors.city ? 'true' : 'false'}
                        />
                        {errors.city && (
                            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                                <AlertCircle size={14} />
                                {errors.city.message}
                            </p>
                        )}
                    </div>
                </div>

                {/* Row 5: Communication Address */}
                <div>
                    <label htmlFor="address" className="block text-sm font-semibold text-zinc-700 mb-2">
                        Communication Address <span className="text-red-500">*</span>
                    </label>
                    <textarea
                        id="address"
                        rows={3}
                        placeholder="Enter your full address"
                        {...register('address')}
                        className={`${getInputClasses(!!errors.address)} resize-none`}
                        aria-invalid={errors.address ? 'true' : 'false'}
                    />
                    {errors.address && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.address.message}
                        </p>
                    )}
                </div>

                {/* Row 6: Pincode */}
                <div className="max-w-xs">
                    <label htmlFor="pincode" className="block text-sm font-semibold text-zinc-700 mb-2">
                        Pincode <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        id="pincode"
                        placeholder="Your pincode"
                        maxLength={10}
                        {...register('pincode')}
                        className={getInputClasses(!!errors.pincode)}
                        aria-invalid={errors.pincode ? 'true' : 'false'}
                    />
                    {errors.pincode && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.pincode.message}
                        </p>
                    )}
                </div>



                {/* Qualification File Upload (Optional) */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Attach Completed Professional Qualification <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <div
                        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${qualificationError
                            ? 'border-red-300 bg-red-50'
                            : qualificationFile
                                ? 'border-green-300 bg-green-50'
                                : 'border-zinc-200 hover:border-primary/50'
                            }`}
                    >
                        {qualificationFile ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-green-600" />
                                    <span className="text-sm text-zinc-700">{qualificationFile.name}</span>
                                    <span className="text-xs text-zinc-500">
                                        ({(qualificationFile.size / 1024).toFixed(1)} KB)
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={clearQualificationFile}
                                    className="p-1 hover:bg-zinc-100 rounded"
                                >
                                    <X className="w-4 h-4 text-zinc-500" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <input
                                    ref={qualificationInputRef}
                                    type="file"
                                    accept="image/*,.pdf"
                                    onChange={handleQualificationChange}
                                    className="hidden"
                                    id="qualificationFile"
                                />
                                <label
                                    htmlFor="qualificationFile"
                                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm font-medium text-zinc-700 transition-colors"
                                >
                                    <Upload className="w-4 h-4" />
                                    Choose File
                                </label>
                            </div>
                        )}
                    </div>
                    <p className="mt-2 text-xs text-zinc-500 italic">
                        Certificate / Diploma / Degree / Master Degree / PhD in Yoga, Max-200KB
                    </p>
                    {qualificationError && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {qualificationError}
                        </p>
                    )}
                </div>

                {/* Photo File Upload */}
                <div>
                    <label className="block text-sm font-semibold text-zinc-700 mb-2">
                        Your Profile Photo <span className="text-red-500">*</span>
                    </label>
                    <div
                        className={`border-2 border-dashed rounded-lg p-4 transition-colors ${photoError
                            ? 'border-red-300 bg-red-50'
                            : photoFile
                                ? 'border-green-300 bg-green-50'
                                : 'border-zinc-200 hover:border-primary/50'
                            }`}
                    >
                        {photoFile ? (
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Upload className="w-5 h-5 text-green-600" />
                                    <span className="text-sm text-zinc-700">{photoFile.name}</span>
                                    <span className="text-xs text-zinc-500">
                                        ({(photoFile.size / 1024).toFixed(1)} KB)
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={clearPhotoFile}
                                    className="p-1 hover:bg-zinc-100 rounded"
                                >
                                    <X className="w-4 h-4 text-zinc-500" />
                                </button>
                            </div>
                        ) : (
                            <div className="text-center">
                                <input
                                    ref={photoInputRef}
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                    id="photoFile"
                                />
                                <label
                                    htmlFor="photoFile"
                                    className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-zinc-100 hover:bg-zinc-200 rounded-lg text-sm font-medium text-zinc-700 transition-colors"
                                >
                                    <Upload className="w-4 h-4" />
                                    Choose File
                                </label>
                            </div>
                        )}
                    </div>
                    <p className="mt-2 text-xs text-zinc-500 italic">
                        Please attach your passport photo
                    </p>
                    {photoError && (
                        <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {photoError}
                        </p>
                    )}
                </div>

                {/* Referred By (Optional) */}
                <div>
                    <label htmlFor="referredBy" className="block text-sm font-semibold text-zinc-700 mb-2">
                        Referred by <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <input
                        type="text"
                        id="referredBy"
                        placeholder="Name of the person who referred you"
                        {...register('referredBy')}
                        className={getInputClasses(!!errors.referredBy)}
                    />
                </div>

                {/* Confirmation Checkbox */}
                <div className="p-4 bg-zinc-50 rounded-lg border border-zinc-200">
                    <label className="flex items-start gap-3 cursor-pointer">
                        <input
                            type="checkbox"
                            {...register('confirmationChecked')}
                            className="mt-1 w-5 h-5 rounded border-zinc-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm text-zinc-700">
                            I confirm that the information given in this form is true, complete, and accurate.
                            <span className="text-red-500"> *</span>
                        </span>
                    </label>
                    {errors.confirmationChecked && (
                        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                            <AlertCircle size={14} />
                            {errors.confirmationChecked.message}
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
