"use client";

import EventCard from './EventCard';
import NewsItem from './NewsItem';
import { ChevronRight } from 'lucide-react';

const recentEvents = [
    { date: "1 January 2026", title: "Swasth Bharat Yatra" },
    { date: "17 November 2025", title: "Holistic Health Ride from Major Dhyan Chand Stadium, India Gate to Rajghat, Delhi" },
    { date: "8–9 February 2025", title: "International Conference on Yoga & Holistic Health" },
    { date: "12 November 2022", title: "Health Awareness Bike Ride from Akshardham Mandir, Delhi to Swaminarayan Ashram Rishikesh" }
];

const latestNews = [
    { date: "2026-02-07", title: "International Conference on Yoga & Holistic Health 2026", link: "https://forms.gle/bMJaf6cUczn1ehLF7" },
    { date: "2025-11-18", title: "8th Naturopathy Day Celebration", link: "https://forms.gle/DEajoyPQMDhhh1tC9" },
    { date: "2025-09-14", title: "PM launches 'Swasth Nari, Sashakt Parivar Abhiyaan'", link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2166534" },
    { date: "2025-09-28", title: "India celebrates 10th Ayurveda Day 2025", link: "https://ddnews.gov.in/en/india-celebrates-10th-ayurveda-day-with-theme-ayurve" },
    { date: "2025-06-13", title: "Yoga Connect 2025 Global Summit announced", link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2136137" },
    { date: "2025-06-14", title: "Yoga Connect 2025: One Earth, One Health", link: "https://www.pib.gov.in/PressReleseDetailm.aspx?PRID=2136380" },
    { date: "2025-12-16", title: "2nd WHO Global Summit on Traditional Medicine 2025", link: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2204479" },
    { date: "2025-09-12", title: "Mindfulness reduces pain more than placebo", link: "https://www.nccih.nih.gov/research/research-results/mindfulness-meditation-and-placebo-modulate-different-brain-patterns-to-reduce-pain" },
    { date: "2025-05-14", title: "Telehealth mindfulness helps veterans with chronic pain", link: "https://www.nccih.nih.gov/research/research-results/telehealth-mindfulness-based-interventions-were-helpful-for-veterans-with-chronic-pain-in-a-large-real-world-study" },
];

export default function EventsNews() {
    return (
        <section className="sm:py-16 py-12 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14">

                    {/* LEFT COLUMN - Upcoming Events */}
                    <div>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
                                Recent <span className="text-primary italic">Events</span>
                            </h2>
                        </div>

                        <div className="flex flex-col gap-4">
                            {recentEvents.map((event, index) => (
                                <EventCard key={index} {...event} />
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN - Latest News */}
                    <div className="flex flex-col">
                        <div className="mb-4">
                            <h2 className="text-xl md:text-2xl font-bold text-zinc-900">
                                Latest <span className="text-secondary italic">News</span>
                            </h2>
                        </div>

                        <div className="bg-secondary p-8 rounded-3xl shadow-xl flex-1 max-h-2xl flex flex-col relative overflow-hidden group">
                            {/* View All Button Card */}
                            <div className="bg-secondary/50 backdrop-blur-sm mb-4 rounded-xl flex items-center justify-between">
                                <h3 className="text-white text-sm font-bold uppercase tracking-wider">News Feed</h3>
                                <button className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-1">
                                    View All <ChevronRight className="size-4" />
                                </button>
                            </div>

                            <div className="relative flex-1 overflow-hidden">
                                {/* Gradient Fades */}
                                <div className="absolute inset-x-0 top-0 h-16 bg-linear-to-b from-secondary to-transparent z-10" />
                                <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-secondary to-transparent z-10" />

                                <div className="h-96 overflow-hidden relative">
                                    <div className="flex flex-col animate-scroll-vertical scroll-container">
                                        {[...latestNews, ...latestNews, ...latestNews].map((news, index) => (
                                            <NewsItem key={index} {...news} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

