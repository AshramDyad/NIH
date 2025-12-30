'use client';
import React from 'react';
import Link from 'next/link';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';

interface Event {
    id: number;
    day: string;
    month: string;
    year: string;
    time: string;
    title: string;
    location: string;
    category: string;
}

const events: Event[] = [
    {
        id: 1,
        day: "18",
        month: "Nov",
        year: "2025",
        time: "10:00 AM - 04:00 PM",
        title: "8th Naturopathy Day Celebration",
        location: "NIH Campus, Delhi",
        category: "Ceremony"
    },
    {
        id: 2,
        day: "07",
        month: "Feb",
        year: "2026",
        time: "09:00 AM - 06:00 PM",
        title: "International Wellness & Yoga Conference",
        location: "Ganga Resort, Rishikesh",
        category: "Conference"
    },
    {
        id: 3,
        day: "22",
        month: "Dec",
        year: "2025",
        time: "05:00 PM - 07:00 PM",
        title: "Clinical Medical Yoga Webinar",
        location: "Online (Zoom)",
        category: "Education"
    }
];

const EventCard = ({ event }: { event: Event }) => {
    return (
        <div className="group bg-white rounded-2xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-gray-100 hover:border-gray-100 flex flex-col h-full">
            {/* Category Tag */}
            <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-secondary bg-secondary/5 px-3 py-1 rounded-full border border-secondary/10">
                    {event.category}
                </span>
            </div>

            {/* Date and Title Section */}
            <div className="flex gap-5 mb-6">
                <div className="flex flex-col items-center justify-center min-w-[70px] h-[70px] bg-secondary rounded-xl text-white transition-colors duration-300">
                    <span className="text-2xl font-black leading-none">{event.day}</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider mt-1 opacity-80">{event.month}</span>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-secondary group-hover:text-secondary transition-colors duration-300 leading-tight">
                        {event.title}
                    </h3>
                </div>
            </div>

            {/* Details Section */}
            <div className="space-y-3 mb-8 flex-1">
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-500 text-sm">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span className="line-clamp-1">{event.location}</span>
                </div>
            </div>

            {/* Action Section */}
            <div className="pt-6 border-t border-gray-50 mt-auto">
                <Link
                    href={`/events/${event.id}`}
                    className="flex items-center justify-between text-secondary font-bold text-sm transition-colors"
                >
                    Register Now
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white transition-all duration-300">
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
            <div className="max-w-7xl mx-auto px-6">
                {/* Simplified Premium Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="max-w-2xl">
                        {/* <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-tight">
                            Upcoming <span className="text-primary">Events</span>
                        </h2> */}
                        <h3 className="text-4xl md:text-5xl font-black text-zinc-900 mb-6">
                            Upcoming <span className="text-primary">Events</span>
                        </h3>
                    </div>
                    <div>
                        <Link
                            href="/events"
                            className="inline-flex items-center gap-2 text-zinc-900 font-bold hover:text-secondary transition-colors group"
                        >
                            View All Events
                            <Calendar className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform" />
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
