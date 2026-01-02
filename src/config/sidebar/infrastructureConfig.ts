/**
 * Sidebar configuration for Infrastructure pages
 */

import type { SidebarConfig } from '@/types/sidebar';

export const infrastructureConfig: SidebarConfig = {
  sections: [
        {
            type: 'links',
            title: 'Infrastructure',
            items: [
                { name: 'School Building', href: '/infrastructure/school-building', icon: '' },
                { name: 'Smart Class', href: '/infrastructure/smart-class', icon: '' },
                { name: 'School Library', href: '/infrastructure/school-library', icon: '' },
                { name: 'Art & Music Department', href: '/infrastructure/art-music-department', icon: '' },
                {
                    name: 'Laboratories',
                    href: '#',
                    icon: '',
                    children: [
                        { name: 'Science Labs', href: '/infrastructure/laboratories/science-labs' },
                        { name: 'Psychology Lab', href: '/infrastructure/laboratories/psychology-lab' },
                        { name: 'Fashion Technology Lab', href: '/infrastructure/laboratories/fashion-technology-lab' },
                        { name: 'Language Lab', href: '/infrastructure/laboratories/language-lab' },
                        { name: 'IT Lab', href: '/infrastructure/laboratories/it-lab' },
                        { name: 'Math Lab', href: '/infrastructure/laboratories/math-lab' },
                        { name: 'Fine Art Lab', href: '/infrastructure/laboratories/fine-art-lab' },
                        { name: 'Discovery Lab', href: '/infrastructure/laboratories/discovery-lab' },
                        { name: 'Atal Tinkering Lab', href: '/infrastructure/laboratories/atal-tinkering-lab' },
                        { name: 'Scrap Lab', href: '/infrastructure/laboratories/scrap-lab' },
                        { name: 'Lab Incharges', href: '/infrastructure/laboratories/lab-incharges' }
                    ]
                },
                { name: 'Facilities', href: '/infrastructure/facilities', icon: '' },
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
