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
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { contactConfig } from '@/config/sidebar/contactConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';

export const metadata: Metadata = {
    title: 'Contact Us | NIH Health - National Institute of Holistic Health',
    description: 'Get in touch with the National Institute of Holistic Health. Contact us for inquiries, membership, courses, and wellness programs.',
};

export default function ContactPage() {
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={contactConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb />

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
            <section className="bg-secondary sm:py16 py-12  relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-white ">
                            Ready to Start Your{' '}
                            <span className="text-primary italic">Holistic Journey?</span>
                        </h2>
                        <p className="text-xl text-white/90 8 max-w-2xl mx-auto">
                            Join thousands of individuals who have transformed their lives through our comprehensive health and wellness programs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="https://forms.gle/DEajoyPQMDhhh1tC9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-sm flex items-center gap-3 group"
                            >
                                <UserPlus size={22} />
                                <span>Join Us Today</span>
                                <ArrowRight
                                    size={22}
                                    className="transition-transform duration-300"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
