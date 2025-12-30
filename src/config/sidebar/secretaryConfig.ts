/**
 * Sidebar configuration for Secretary page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const secretaryConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'About NIH',
            items: [
                { name: 'About Us', href: '/about', icon: 'Info' },
                { name: 'NIH Profile', href: '/about#profile', icon: 'Activity' },
                {
                    name: 'NIH Members',
                    href: '#',
                    icon: 'Users',
                    children: [
                        { name: 'Active Members', href: '/members' },
                        { name: 'Central Council Board', href: '/central-council-board' }
                    ]
                },
                { name: 'Latest News', href: '/news', icon: 'Newspaper' },
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
                    name: 'E-Magazine',
                    href: '/magazine',
                    icon: 'BookOpen',
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
            title: 'Activities',
            items: [
                { name: 'International Conference', href: '/conference', color: 'bg-rose-100 text-rose-600 border-rose-200' },
                { name: 'Health Check-up Camps', href: '/camps', color: 'bg-lime-100 text-lime-700 border-lime-200' },
                { name: 'Health Retreat', href: '/retreat', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { name: 'Courses', href: '/courses', color: 'bg-sky-100 text-sky-700 border-sky-200' },
            ],
        },
    ],
};
