"use client";

/**
 * Contact Form Component
 * Modern, accessible contact form with validation
 */

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validation/contactSchema";
import { submitContactForm } from "@/app/actions/contact";
import { Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
  });

  const onSubmit = async (data: ContactFormData) => {
    setFormStatus("loading");
    setErrorMessage("");

    try {
      const result = await submitContactForm(data);

      if (result.success) {
        setFormStatus("success");
        reset();
      } else {
        setFormStatus("error");
        setErrorMessage(result.message);
      }
    } catch {
      setFormStatus("error");
      setErrorMessage("Failed to submit form. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl sm:p-6 p-4 shadow-sm border border-zinc-100">
      {formStatus === "success" ? (
        <SuccessMessage onDismiss={() => setFormStatus("idle")} />
      ) : (
        <>
          <div className="mb-4 space-y-2">
            <h3 className="text-2xl font-black text-secondary">Get in Touch</h3>
            <p className="text-zinc-600">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6"
            noValidate
          >
            {/* Row 1: Name, Gender */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  {...register("name")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.name
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
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

              {/* Gender Field */}
              <div>
                <label
                  htmlFor="gender"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  {...register("gender")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 appearance-none bg-white cursor-pointer ${
                    errors.gender
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.gender ? "true" : "false"}
                  aria-describedby={errors.gender ? "gender-error" : undefined}
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && (
                  <p
                    id="gender-error"
                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={14} />
                    {errors.gender.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2: Email, Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  {...register("email")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.email
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
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
                  maxLength={10}
                  {...register("phone")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
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
            </div>

            {/* Row 3: DOB, Qualification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* DOB Field */}
              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  {...register("dob")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.dob
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.dob ? "true" : "false"}
                  aria-describedby={errors.dob ? "dob-error" : undefined}
                />
                {errors.dob && (
                  <p
                    id="dob-error"
                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={14} />
                    {errors.dob.message}
                  </p>
                )}
              </div>

              {/* Qualification Field */}
              <div>
                <label
                  htmlFor="qualification"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  Qualification
                </label>
                <input
                  type="text"
                  id="qualification"
                  placeholder="Your qualification"
                  {...register("qualification")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.qualification
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.qualification ? "true" : "false"}
                  aria-describedby={
                    errors.qualification ? "qualification-error" : undefined
                  }
                />
                {errors.qualification && (
                  <p
                    id="qualification-error"
                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={14} />
                    {errors.qualification.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 4: City, State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* City Field */}
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  placeholder="Your city"
                  {...register("city")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.city
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.city ? "true" : "false"}
                  aria-describedby={errors.city ? "city-error" : undefined}
                />
                {errors.city && (
                  <p
                    id="city-error"
                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={14} />
                    {errors.city.message}
                  </p>
                )}
              </div>

              {/* State Field */}
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-semibold text-zinc-700 mb-2"
                >
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="Your state"
                  {...register("state")}
                  className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 ${
                    errors.state
                      ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                      : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                  }`}
                  aria-invalid={errors.state ? "true" : "false"}
                  aria-describedby={errors.state ? "state-error" : undefined}
                />
                {errors.state && (
                  <p
                    id="state-error"
                    className="mt-1 text-sm text-red-600 flex items-center gap-1"
                    role="alert"
                  >
                    <AlertCircle size={14} />
                    {errors.state.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 5: Message (Full Width) */}
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
                {...register("message")}
                className={`w-full text-zinc-700 px-4 py-3 rounded-lg border-2 transition-all duration-200 focus:outline-none focus:ring-2 resize-none ${
                  errors.message
                    ? "border-red-300 focus:border-red-500 focus:ring-red-500/20"
                    : "border-zinc-200 focus:border-primary focus:ring-primary/20 hover:border-zinc-300"
                }`}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
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
              className="w-full bg-primary hover:bg-primary/90 cursor-pointer text-white font-bold py-4 rounded-full shadow-md transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 min-h-[56px]"
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
            {formStatus === "error" && errorMessage && (
              <div
                className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
                role="alert"
              >
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
        Thank you for reaching out. We&apos;ve received your message and will
        get back to you as soon as possible.
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
