"use client";

import Link from "next/link";
import { ArrowRight, Calendar, BookOpen, Newspaper, Users, Info, Activity } from "lucide-react";
import { motion } from "framer-motion";

const sidebarLinks = [
    { name: "About Us", href: "#", icon: Info },
    { name: "NIH Profile", href: "#", icon: Activity },
    { name: "NIH Members", href: "#", icon: Users },
    { name: "Latest News", href: "#", icon: Newspaper },
];

const quickLinks = [
    { name: "Upcoming Events", href: "#", icon: Calendar, bgColor: "bg-blue-50", iconColor: "text-blue-600" },
    { name: "E-Magazine", href: "#", icon: BookOpen, bgColor: "bg-teal-50", iconColor: "text-teal-600" },
    { name: "Press Release", href: "#", icon: Newspaper, bgColor: "bg-emerald-50", iconColor: "text-emerald-600" },
];

const activities = [
    { name: "International Conference", href: "#", color: "bg-rose-100 text-rose-600 border-rose-200" },
    { name: "Health Check-up Camps", href: "#", color: "bg-lime-100 text-lime-700 border-lime-200" },
    { name: "Health Retreat", href: "#", color: "bg-purple-100 text-purple-700 border-purple-200" },
    { name: "Courses", href: "#", color: "bg-sky-100 text-sky-700 border-sky-200" },
];

export default function AboutSidebar() {
    return (
        <div className="space-y-8">

            {/* About NIH Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                <div className="bg-primary px-6 py-4 relative overflow-hidden">
                    <h3 className="text-white font-bold text-lg relative z-10">About NIH</h3>
                </div>
                <div>
                    <nav className="flex flex-col">
                        {sidebarLinks.map((link, index) => (
                            <Link
                                key={index}
                                href={link.href}
                                className={`group flex items-center justify-between p-5 text-zinc-700 hover:text-primary hover:bg-zinc-50 transition-all duration-300 ${index !== sidebarLinks.length - 1 ? 'border-b border-zinc-100' : ''
                                    }`}
                            >
                                <span className="flex items-center gap-4">
                                    <link.icon className="w-5 h-5 text-zinc-700 group-hover:text-primary transition-colors" />
                                    <span className="font-semibold text-lg">{link.name}</span>
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>

            {/* Quick Links Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                <div className="bg-secondary px-6 py-4 relative overflow-hidden">
                    <h3 className="text-white font-bold text-lg relative z-10">Quick Links</h3>
                </div>

                <div className="p-4 bg-zinc-50/50 space-y-4">
                    {quickLinks.map((link, index) => (
                        <Link
                            key={index}
                            href={link.href}
                            className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-zinc-100 shadow-sm hover:border-transparent transition-all duration-300 "
                        >
                            <span className="flex items-center gap-4">
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 ${link.bgColor}`}>
                                    <link.icon className={`w-6 h-6 ${link.iconColor}`} />
                                </div>
                                <span className="font-bold text-zinc-600 text-lg group-hover:text-zinc-800 transition-colors">
                                    {link.name}
                                </span>
                            </span>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Activities Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-zinc-100 overflow-hidden">
                <div className="bg-zinc-800 px-6 py-4 relative overflow-hidden">
                    <h3 className="text-white font-bold text-lg relative z-10">Activities</h3>
                </div>
                <div className="p-4 space-y-3">
                    {activities.map((activity, index) => (
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

        </div>
    );
}
