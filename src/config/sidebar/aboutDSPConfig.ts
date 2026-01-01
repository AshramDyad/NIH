/**
 * Sidebar configuration for Principal-message page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const aboutDPSConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'About DPS',
            items: [
                { name: 'About The School', href: '/about-dps/about-the-school', icon: '' },
                { name: 'School Profile', href: '/about-dps/school-profile', icon: '' },
                {
                    name: 'DPS Family',
                    href: '#',
                    icon: '',
                    children: [
                        { name: 'DPS Society', href: '/about-dps/dps-family/dps-society' },
                        { name: 'Managing Committee', href: '/about-dps/dps-family/managing-committee' }
                    ]
                },
                { name: 'Shiksha Kendra - A School For Non-formal Education', href: '/about-dps/shiksha-kendra', icon: '' },
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
            title: 'Schools',
            items: [
                { name: 'Primary School', href: '/conference', color: 'bg-rose-100 text-rose-600 border-rose-200' },
                { name: 'Junior School', href: '/camps', color: 'bg-lime-100 text-lime-700 border-lime-200' },
                { name: 'Middle School', href: '/retreat', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { name: 'Senior School', href: '/courses', color: 'bg-sky-100 text-sky-700 border-sky-200' },
            ],
        },
    ],
};