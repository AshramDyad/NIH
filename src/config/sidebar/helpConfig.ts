/**
 * Sidebar configuration for Help page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const helpConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'Help Center',
            items: [
                { name: 'News', href: '/news', icon: '' },
                { name: 'Alumni', href: '/alumni', icon: ' ' },
                { name: 'Career and higher education', href: '/career-and-higher-education', icon: ' ' },
                { name: 'Contact Us', href: '/contact', icon: '' },
                { name: 'Transfer Certificates', href: '/transfer-certificates', icon: '' },
                { name: 'Important Circulars', href: '/important-circulars', icon: '' },
                { name: 'Help', href: '/help', icon: '' },
            ],
        },
        {
            type: 'quickLinksList',
            title: 'Quick Links',
            items: [
                {
                    name: 'Upcoming Events',
                    href: '/events',
                    icon: 'Calendar',
                    bgColor: 'bg-blue-50',
                    iconColor: 'text-blue-600',
                },
                {
                    name: 'School-Video',
                    href: '/school-video',
                    icon: 'BookOpen',
                    bgColor: 'bg-teal-50',
                    iconColor: 'text-teal-600',
                },
                {
                    name: 'Press Release',
                    href: '/press-release',
                    icon: 'Newspaper',
                    bgColor: 'bg-emerald-50',
                    iconColor: 'text-emerald-600',
                },
            ],
        },
        {
            type: 'activitiesList',
            title: 'Schools',
            items: [
                { name: 'Primary School', href: '/primary-school', color: 'bg-rose-100 text-rose-600 border-rose-200' },
                { name: 'Junior School', href: '/junior-school', color: 'bg-lime-100 text-lime-700 border-lime-200' },
                { name: 'Middle School', href: '/middle-school', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { name: 'Senior School', href: '/senior-school', color: 'bg-sky-100 text-sky-700 border-sky-200' },
            ],
        },
    ],
};


