"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    MapPin,
    Calendar,
    BookOpen,
    Newspaper,
    UserPlus,
    Info,
    Activity,
    Users,
    ChevronDown,
    User,
    Target,
} from 'lucide-react';
import type { SidebarSection } from '@/types/sidebar';

interface SidebarContentProps {
    sections: SidebarSection[];
}

// Icon mapping from names to components
const iconMap: Record<string, React.ElementType> = {
    Phone,
    Mail,
    MapPin,
    Calendar,
    BookOpen,
    Newspaper,
    UserPlus,
    Info,
    Activity,
    Users,
    User,
    Target,
};

export default function SidebarContent({ sections }: SidebarContentProps) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <div className="space-y-8">
            {sections.map((section, sectionIndex) => {
                // Navigation Links Section
                if (section.type === 'links') {
                    return (
                        <div key={sectionIndex} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                            <div className="bg-primary px-6 py-4 relative overflow-hidden">
                                <h3 className="text-white font-bold text-lg relative z-10">{section.title}</h3>
                            </div>
                            <div>
                                <nav className="flex flex-col">
                                    {section.items.map((link, index) => {
                                        const Icon = iconMap[link.icon] as React.ElementType;
                                        const isOpen = openDropdown === link.name;
                                        const hasChildren = link.children && link.children.length > 0;

                                        // Render dropdown if link has children
                                        if (hasChildren) {
                                            return (
                                                <div key={index} className={`border-b border-zinc-100 last:border-b-0`}>
                                                    <button
                                                        type="button"
                                                        onClick={() => setOpenDropdown(isOpen ? null : link.name)}
                                                        className="group flex w-full items-center cursor-pointer justify-between p-5 text-left text-zinc-700 hover:text-primary hover:bg-zinc-50 transition-all duration-300"
                                                        aria-expanded={isOpen}
                                                    >
                                                        <span className="flex items-center gap-4">
                                                            {Icon && <Icon className="w-5 h-5 text-zinc-700 group-hover:text-primary transition-colors" />}
                                                            <span className="font-semibold text-lg">{link.name}</span>
                                                        </span>
                                                        <motion.span
                                                            initial={false}
                                                            animate={{ rotate: isOpen ? 180 : 0 }}
                                                            transition={{ duration: 0.3 }}
                                                            className="text-zinc-400 group-hover:text-primary"
                                                        >
                                                            <ChevronDown className="size-6" />
                                                        </motion.span>
                                                    </button>

                                                    <AnimatePresence initial={false}>
                                                        {isOpen && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.25 }}
                                                                className="bg-zinc-50 border-t border-zinc-100"
                                                            >
                                                                <div className="flex flex-col p-2 space-y-2">
                                                                    {link.children!.map((child, childIndex) => (
                                                                        <Link
                                                                            key={childIndex}
                                                                            href={child.href}
                                                                            onClick={() => setOpenDropdown(null)}
                                                                            className="flex items-center justify-between rounded-lg px-12 py-3 font-medium text-zinc-700 hover:text-primary hover:bg-primary/10 transition-colors"
                                                                        >
                                                                            <span>{child.name}</span>
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        }

                                        // Render regular link if no children
                                        return (
                                            <Link
                                                key={index}
                                                href={link.href}
                                                className={`group flex items-center justify-between p-5 text-zinc-700 hover:text-primary hover:bg-zinc-50 transition-all duration-300 ${index !== section.items.length - 1 ? 'border-b border-zinc-100' : ''
                                                    }`}
                                            >
                                                <span className="flex items-center gap-4">
                                                    {Icon && <Icon className="w-5 h-5 text-zinc-700 group-hover:text-primary transition-colors" />}
                                                    <span className="font-semibold text-lg">{link.name}</span>
                                                </span>
                                            </Link>
                                        );
                                    })}
                                </nav>
                            </div>
                        </div>
                    );
                }

                // Quick Links Section
                if (section.type === 'quickLinksList') {
                    return (
                        <div key={sectionIndex} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                            <div className="bg-secondary px-6 py-4 relative overflow-hidden">
                                <h3 className="text-white font-bold text-lg relative z-10">{section.title}</h3>
                            </div>

                            <div className="p-4 bg-zinc-50/50 space-y-4">
                                {section.items.map((link, index) => {
                                    const Icon = iconMap[link.icon] as React.ElementType;
                                    return (
                                        <Link
                                            key={index}
                                            href={link.href}
                                            className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:border-transparent transition-all duration-300 "
                                        >
                                            <span className="flex items-center gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 ${link.bgColor}`}
                                                >
                                                    {Icon && <Icon className={`w-6 h-6 ${link.iconColor}`} />}
                                                </div>
                                                <span className="font-bold text-zinc-600 text-lg group-hover:text-zinc-800 transition-colors">
                                                    {link.name}
                                                </span>
                                            </span>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    );
                }

                // Activities Section
                if (section.type === 'activitiesList') {
                    return (
                        <div key={sectionIndex} className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                            <div className="bg-zinc-800 px-6 py-4 relative overflow-hidden">
                                <h3 className="text-white font-bold text-lg relative z-10">{section.title}</h3>
                            </div>
                            <div className="p-4 space-y-3">
                                {section.items.map((activity, index) => (
                                    <Link
                                        key={index}
                                        href={activity.href}
                                        className={`block w-full text-center py-3 px-4 rounded-xl font-bold uppercase text-sm tracking-wide border-2 transition-all duration-300 hover:shadow-sm ${activity.color}`}
                                    >
                                        {activity.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    );
                }

                return null;
            })}
        </div>
    );
}
