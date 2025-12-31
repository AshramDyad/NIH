"use client";

import Link from "next/link";
import Image from "next/image";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Youtube,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import type { FooterLink } from "@/types/footer";
import { useFooterConfig } from "./FooterProvider";

/**
 * Default Footer Content
 * Used when no custom config is provided by the page
 */
const defaultQuickLinks: FooterLink[] = [
    { href: "/about", label: "About NIH" },
    { href: "/gallery", label: "Photo/Video Gallery" },
    { href: "/magazine", label: "E-magazine" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact Us" },
    { href: "/projects", label: "Projects" },
    { href: "https://forms.gle/gyXBhDGFnFX9vkmS7", label: "Membership" },
    { href: "/internship", label: "Internship" },
    { href: "/franchise", label: "Franchise" },
];

const defaultAdmissions: FooterLink[] = [
    { label: "Certificate Course in Holistic Health (CCH)" },
    { label: "Certificate Course in Yoga Mudra" },
    { label: "Certificate Course in Meditation" },
];

const defaultContact = {
    address: "Laxmi Nagar, Delhi-92, India",
    phone: ["+91 9953882605", "+91 9311817707"],
    email: "delhinih@gmail.com",
};

/**
 * Footer Component
 * Refined with white background and primary brand colors.
 * Uses FooterContext for dynamic content per page.
 */
export default function Footer() {
    const currentYear = new Date().getFullYear();
    const footerConfig = useFooterConfig();

    const quickLinks = footerConfig?.quickLinks?.links || defaultQuickLinks;
    const admissions = footerConfig?.admissions?.links || defaultAdmissions;
    const contact = footerConfig?.contact || defaultContact;

    return (
        <footer className="bg-white text-secondary sm:py-16 py-12 relative border-t border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.80fr_1.2fr_0.80fr] gap-8 lg:gap-10">
                    {/* Column 1: Brand & Socials */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            {/* Logo Image */}
                            <div className="relative w-full">
                                <Image
                                    src="/logo.png"
                                    alt="NIH Logo"
                                    width={500}
                                    height={200}
                                    className="h-auto"
                                />
                            </div>
                        </div>
                        <p className="text-secondary/80 leading-relaxed font-medium">
                            Empowering lives through holistic health education and wellness practices since 2025.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <SocialLink href="#" icon={<Facebook size={18} />} label="Facebook" />
                            <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
                            <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
                            <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
                            <SocialLink href="#" icon={<Youtube size={18} />} label="YouTube" />
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 relative inline-block text-secondary">
                            Quick Links
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <FooterLinkItem key={link.label} href={link.href} label={link.label} />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 relative inline-block text-secondary">
                            Admissions
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4">
                            {admissions.map((course) => (
                                <CourseLink key={course.label} label={course.label} />
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 relative inline-block text-secondary">
                            Contact Us
                            <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h4>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3 text-secondary/90">
                                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                                    <MapPin className="text-primary" size={18} />
                                </div>
                                <span className="mt-1 font-medium">{contact.address}</span>
                            </li>
                            <li className="flex items-center gap-3 text-secondary/90">
                                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                                    <Phone className="text-primary" size={18} />
                                </div>
                                <span className="font-medium">{contact.phone.join(", ")}</span>
                            </li>
                            <li className="flex items-center gap-3 text-secondary/90">
                                <div className="p-2 bg-primary/10 rounded-full shrink-0">
                                    <Mail className="text-primary" size={18} />
                                </div>
                                <Link href={`mailto:${contact.email}`} className="hover:text-primary transition-colors font-medium">
                                    {contact.email}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-4 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary/70 font-medium">
                    <p>© Copyright {currentYear}, All Rights Reserved with NIH | India</p>
                    <div className="flex items-center gap-6">
                        {/* <Link href="/privacy" className="hover:text-primary transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-primary transition-colors">
                            Terms of Service
                        </Link> */}
                        <span>
                            Designed & Developed By : <span className="text-primary font-bold">Apexture Pvt. Ltd.</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Helper Components

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            aria-label={label}
            className="w-9 h-9 rounded-full bg-secondary text-white flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 shadow-md shrink-0"
        >
            {icon}
        </Link>
    );
}

function FooterLinkItem({ href, label }: { href?: string; label: string }) {
    return (
        <li>
            {href ? (
                <Link
                    href={href}
                    className="text-secondary/80 hover:text-primary hover:translate-x-1 transition-all duration-300 flex items-center gap-2 font-medium"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary hover:opacity-100 transition-opacity" />
                    {label}
                </Link>
            ) : (
                <span className="text-secondary/80 flex items-center gap-2 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary hover:opacity-100 transition-opacity" />
                    {label}
                </span>
            )}
        </li>
    );
}

function CourseLink({ label }: { label: string }) {
    return (
        <li className="flex gap-3 text-secondary/80 group cursor-pointer hover:text-primary transition-colors font-medium">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
            <span className="leading-snug group-hover:underline decoration-primary/50 underline-offset-4">
                {label}
            </span>
        </li>
    );
}
