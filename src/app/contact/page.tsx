/**
 * Contact Page
 * Main layout for Contact Us page
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { UserPlus, ArrowRight } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import GoogleMap from '@/components/contact/GoogleMap';

export const metadata: Metadata = {
    title: 'Contact Us | NIH Health - National Institute of Holistic Health',
    description: 'Get in touch with the National Institute of Holistic Health. Contact us for inquiries, membership, courses, and wellness programs.',
};

export default function ContactPage() {
    return (
        <>
            {/* Hero Section */}
            {/* <section className="bg-gradient-to-br from-secondary to-secondary/90 py-16 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-white/90 font-semibold text-sm uppercase tracking-widest mb-6 border border-white/20">
                            Contact Us
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            We&apos;d Love to{' '}
                            <span className="text-primary italic">Hear From You</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                            Have questions about our programs, membership, or holistic health practices? Reach out to us and our team will get back to you promptly.
                        </p>
                    </div>
                </div>
            </section> */}

            {/* Main Content Section */}
            <section className="sm:py16 py-12 bg-zinc-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                        {/* Left Column: Contact Form */}
                        <div className="grid grid-cols-1 items-center">
                            <ContactForm />
                        </div>

                        {/* Right Column: Contact Info + Map */}
                        <div className="space-y-8">
                            <ContactInfo />
                        </div>
                    </div>
                    <GoogleMap />
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-secondary py-16 md:py-20 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
                            Ready to Start Your{' '}
                            <span className="text-primary italic">Holistic Journey</span>?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Join thousands of individuals who have transformed their lives through our comprehensive health and wellness programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://forms.gle/DEajoyPQMDhhh1tC9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-3 group"
                            >
                                <UserPlus size={22} />
                                <span>Join Us Today</span>
                                <ArrowRight
                                    size={22}
                                    className="group-hover:translate-x-1 transition-transform duration-300"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
