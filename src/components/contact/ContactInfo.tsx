/**
 * Contact Info Component
 * Displays contact information with icons
 */

import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactInfo() {
    const contactDetails = [
        {
            icon: <MapPin size={20} />,
            title: 'Address',
            content: 'Laxmi Nagar, Delhi-110092, India',
            action: null,
        },
        {
            icon: <Phone size={20} />,
            title: 'Phone',
            content: '+91 9953882605, +91 9311817707',
            action: { href: 'tel:+919953882605', label: 'Call Now' },
        },
        {
            icon: <Mail size={20} />,
            title: 'Email',
            content: 'delhinih@gmail.com',
            action: { href: 'mailto:delhinih@gmail.com', label: 'Send Email' },
        },
        {
            icon: <Clock size={20} />,
            title: 'Business Hours',
            content: 'Mon - Sat: 10:00 AM - 7:00 PM',
            action: null,
        },
    ] as const;

    return (
        <div className="space-y-4">
            {/* Header */}
            <div className="mb-4">
                <h3 className="text-2xl font-black text-secondary mb-2">
                    Contact Information
                </h3>
                <p className="text-zinc-600">
                    Feel free to reach out to us using any of the following methods.
                </p>
            </div>

            {/* Contact Details */}
            {contactDetails.map((detail) => (
                <div
                    key={detail.title}
                    className="bg-white rounded-2xl lg:p-6 p-4 shadow-sm border border-zinc-100 transition-shadow duration-300"
                >
                    <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                            <div className="text-primary">{detail.icon}</div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-wider mb-1">
                                {detail.title}
                            </h4>
                            <p className="text-lg font-semibold text-secondary break-words">
                                {detail.content}
                            </p>
                            {detail.action && (
                                <Link
                                    href={detail.action.href}
                                    className="inline-flex items-center gap-2 mt-3 text-primary font-semibold hover:text-primary/80 transition-colors"
                                >
                                    {detail.action.label}
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
