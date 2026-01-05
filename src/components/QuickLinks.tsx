'use client';

import {
    Newspaper,
    Leaf,
    Award,
    MessageSquare,
    FileText,
    AlertCircle
} from 'lucide-react';

const links = [
    {
        title: 'News Cutting',
        icon: Newspaper,
        href: '#news'
    },
    {
        title: 'NIH Wellness Centre',
        icon: Leaf,
        href: 'https://www.youtube.com/watch?v=ByJ96pjq168'
    },
    {
        title: 'NIH Pride',
        icon: Award,
        href: '#pride'
    },
    {
        title: 'Advisory',
        icon: MessageSquare,
        href: '#advisory'
    },
    {
        title: 'Press Release',
        icon: FileText,
        href: '#press'
    },
    {
        title: 'Important Circular',
        icon: AlertCircle,
        href: '#circulars'
    }
];

const QuickLinks = () => {
    return (
        <section className="sm:py-16 py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">
                    {links.map((link) => (
                        <a
                            key={link.title}
                            href={link.href}
                            className="flex flex-col items-center group cursor-pointer"
                        >
                            {/* Icon Circle */}
                            <div
                                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white shadow-md flex items-center justify-center mb-6 group-hover:shadow-lg transition-shadow duration-300"
                            >
                                <link.icon className="w-8 h-8 md:w-10 md:h-10 text-secondary transition-colors duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-bold text-secondary text-center transition-colors duration-300">
                                {link.title}
                            </h3>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
