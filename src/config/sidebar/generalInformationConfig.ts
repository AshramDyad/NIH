/**
 * Sidebar configuration for General Information page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const generalInformationConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'General Information',
            items: [
                { name: 'School Rules', href: '/general-information/school-rules', icon: '' },
                { name: 'Recommendations', href: '/general-information/recommendations', icon: '' },
                { name: 'Withdrawals', href: '/general-information/withdrawals', icon: '' },
                { name: 'Bus Information', href: '/general-information/bus-information', icon: '' },
                { name: 'School Bus Rules', href: '#', icon: '' },
                { name: 'Elected Parents Representatives', href: '#', icon: '' },
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
                    name: 'School Video',
                    href: '#',
                    icon: 'Video',
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
            title: 'Schools',
            items: [
                { name: 'Primary School', href: '#', color: 'bg-rose-100 text-rose-600 border-rose-200' },
                { name: 'Junior School', href: '#', color: 'bg-lime-100 text-lime-700 border-lime-200' },
                { name: 'Middle School', href: '#', color: 'bg-purple-100 text-purple-700 border-purple-200' },
                { name: 'Senior School', href: '#', color: 'bg-sky-100 text-sky-700 border-sky-200' },
            ],
        },
    ],
};
