/**
 * Sidebar configuration for Contact page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const contactConfig: SidebarConfig = {
    sections: [
        // {
        //     type: 'links',
        //     title: 'Contact Info',
        //     items: [
        //         { name: 'Call Us', href: 'tel:+919953882605', icon: 'Phone' },
        //         { name: 'Email Us', href: 'mailto:delhinih@gmail.com', icon: 'Mail' },
        //         { name: 'Visit Us', href: 'https://maps.app.goo.gl/Ux8nLtFPXk3g3Gee6', icon: 'MapPin' },
        //     ],
        // },
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
        // {
        //     type: 'activitiesList',
        //     title: 'Membership',
        //     items: [
        //         { name: 'Join NIH', href: 'https://forms.gle/DEajoyPQMDhhh1tC9', color: 'bg-primary text-white border-primary' },
        //     ],
        // },
    ],
};
