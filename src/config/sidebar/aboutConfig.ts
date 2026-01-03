/**
 * Sidebar configuration for About page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const aboutConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'About NIH',
            items: [
                { name: 'About Us', href: '/about', icon: '' },
                { name: 'NIH Profile', href: '#', icon: '' },
                {
                    name: 'NIH Members',
                    href: '#',
                    icon: '',
                    children: [
                        { name: 'Active Members', href: '#' },
                        { name: 'Central Council Board', href: '/about/central-council-board' }
                    ]
                },
                { name: 'Latest News', href: '#', icon: '' },
            ],
        },
        {
            type: 'quickLinksList',
            title: 'Quick Links',
            items: [
                {
                    name: 'Upcoming Events',
                    href: '#',
                    icon: 'Calendar',
                    bgColor: 'bg-blue-50',
                    iconColor: 'text-blue-600',
                },
                {
                    name: 'E-Magazine',
                    href: '#',
                    icon: 'BookOpen',
                    bgColor: 'bg-teal-50',
                    iconColor: 'text-teal-600',
                },
                {
                    name: 'Press Release',
                    href: '#',
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
                { name: 'International Conference', href: '#', color: 'bg-rose-100 text-rose-600 border-rose-200' },
                { name: 'Health Check-up Camps', href: '#', color: 'bg-lime-100 text-lime-700 border-lime-200' },
                { name: 'Health Retreat', href: '#', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { name: 'Courses', href: '#', color: 'bg-sky-100 text-sky-700 border-sky-200' },
            ],
        },
    ],
};
