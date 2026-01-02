/**
 * Sidebar configuration for Activities page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const activitiesConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'Activities',
            items: [
                { name: 'Duke of Edinburgh', href: '/activities/duke-of-edinburgh', icon: '' },
                { name: 'House System', href: '/activities/house-system', icon: '' },
                { name: 'Sports', href: '/activities/sports', icon: '' },
                { name: 'Programmes & Clubs', href: '/activities/programmes-clubs', icon: '' },
                { name: 'Health Council', href: '/activities/health-council', icon: '' },
                { name: 'House Appointees', href: '/activities/house-appointees', icon: '' },
                { name: 'School Appointees', href: '/activities/school-appointees', icon: '' },
                { name: 'Programmes and Club Incharges', href: '/activities/programmes-club-incharges', icon: '' },
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
                    name: 'School Video',
                    href: '/videos',
                    icon: 'Video',
                    bgColor: 'bg-teal-50',
                    iconColor: 'text-teal-600',
                },
                {
                    name: 'Press Release',
                    href: '/press',
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
