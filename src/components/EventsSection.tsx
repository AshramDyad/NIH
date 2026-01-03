'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight } from 'lucide-react';

interface Event {
    id: number;
    day: string;
    month: string;
    year: string;
    title: string;
    category: string;
}

const events: Event[] = [
    {
        id: 1,
        day: "07-08",
        month: "Feb",
        year: "2026",
        title: "International Conference on Yoga & Holistic Health",
        category: "Conference"
    }
];

const EventCard = ({ event }: { event: Event }) => {
    return (
        <div className="group bg-white rounded-xl border border-gray-200 md:p-6 p-4 shadow-sm transition-all duration-200 hover:shadow-md flex flex-col h-full">
            {/* Date and Title Section */}
            <div className="flex gap-4 mb-6">
                <div className="flex flex-col items-center justify-center min-w-[60px] h-[60px] bg-secondary rounded-lg text-white">
                    <span className="text-lg font-semibold leading-none">{event.day}</span>
                    <span className="text-xs font-semibold uppercase tracking-wide mt-1">{event.month}</span>
                </div>
                <div className="flex-1 flex items-center">
                    <h3 className="text-lg font-semibold text-zinc-800 group-hover:text-primary transition-colors duration-200 leading-[1.4]">
                        {event.title}
                    </h3>
                </div>
            </div>

            {/* Action Section */}
            <div className="pt-4 border-t border-gray-200 mt-auto">
                <Link
                    href={`/events/${event.id}`}
                    className="flex items-center justify-between text-secondary font-semibold text-sm transition-colors hover:underline"
                >
                    Register Now
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white transition-all duration-200 group-hover:scale-105">
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Link>
            </div>
        </div>
    );
};

const EventsSection = () => {
    return (
        <section className="bg-white py-12 sm:py-16">
            <div className="container mx-auto px-6">
                {/* Simplified Premium Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                            Upcoming <span className="text-primary">Events</span>
                        </h2>
                    </div>
                    <div>
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 text-zinc-900 font-semibold hover:text-secondary transition-colors"
                        >
                            View All Events
                            <Calendar className="w-5 h-5 text-primary transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Uniform Grid - 3 Columns on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard key={event.id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventsSection;
