/**
 * Sidebar configuration for Academics page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const academicsConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'Academics',
            items: [
                { name: 'Leadership Team', href: '/academics/leadership-team', icon: '' },
                { name: 'Academic Team', href: '/academics/academic-team', icon: '' },
                { name: 'Class Representatives', href: '/academics/class-representatives', icon: '' },
                { name: 'Co-ordinators', href: '/academics/co-ordinators', icon: '' },
                { name: 'Extra Duty List', href: '/academics/extra-duty-list', icon: '' },
                { name: 'Hall of Fame', href: '/academics/hall-of-fame', icon: '' },
                { name: 'Inclusion Programme', href: '/academics/inclusion-programme', icon: '' },
            ],
        },
        {
            type: 'quickLinksList',
            title: 'Quick Links',
            items: [
                {
                    name: 'Upcoming Events',
                    href: 'events',
                    icon: 'Calendar',
                    bgColor: 'bg-blue-50',
                    iconColor: 'text-blue-600',
                },
                {
                    name: 'School Video',
                    href: 'videos',
                    icon: 'Video',
                    bgColor: 'bg-teal-50',
                    iconColor: 'text-teal-600',
                },
                {
                    name: 'Press Release',
                    href: 'press-releases',
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
