"use client";

import Link from "next/link";

interface EventCardProps {
    date: string;
    title: string;
    link?: string;
}

export default function EventCard({ date, title, link }: EventCardProps) {
    const CardContent = (
        <div className="flex flex-col gap-2">
            <div className="text-sm font-medium uppercase text-zinc-500">
                {date}
            </div>

            <h4 className="text-base font-bold text-zinc-900 leading-snug group-hover:text-primary transition-colors">
                {title}
            </h4>
        </div>
    );

    return (
        <div className="bg-white p-4 rounded-2xl  group transition-all duration-300 cursor-pointer border border-zinc-100 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary hover:border-opacity-30">
            {link ? (
                <Link href={link} target="_blank" rel="noopener noreferrer" className="block">
                    {CardContent}
                </Link>
            ) : (
                CardContent
            )}
        </div>
    );
}
