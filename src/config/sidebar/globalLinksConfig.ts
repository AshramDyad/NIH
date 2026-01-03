/**
 * Sidebar configuration for Global Links page
 */

import type { SidebarConfig } from '@/types/sidebar';

export const globalLinksConfig: SidebarConfig = {
    sections: [
        {
            type: 'links',
            title: 'Global Links',
            items: [
                {
                    name: 'Danish Immersive Exchange',
                    href: '/global-links/danish-immersive-exchange',
                    icon: '',
                    children: [
                        { name: 'Danish Immersive Exchange Programme - 2024', href: '/global-links/danish-immersive-exchange/2024' },
                        { name: 'Danish Immersive Exchange Programme - 2023', href: '/global-links/danish-immersive-exchange/2023' },
                        { name: 'Danish Immersive Exchange Programme - Stage 1', href: '/global-links/danish-immersive-exchange/stage-1' },
                        { name: 'Danish Immersive Exchange Programme', href: '/global-links/danish-immersive-exchange' },
                    ],
                },
                { name: 'Estodma +90 - International Drawing Exhibition', href: '/global-links/estodma-90', icon: '' },
                { name: "Goncourt Award Ceremony at French Ambassador's Residence", href: '/global-links/goncourt-award', icon: '' },
                {
                    name: 'Anthology of Poems',
                    href: '/global-links/anthology-of-poems',
                    icon: '',
                    children: [
                        { name: 'International Collaborative Project hosted by Delhi Public School Gurgaon', href: '/global-links/anthology-of-poems/collaborative-project' },
                        { name: 'International Media shows interest', href: '/global-links/anthology-of-poems/media-interest' },
                    ],
                },
                { name: 'Swiss Italian Exchange Program 1', href: '/global-links/swiss-italian-exchange-1', icon: '' },
                { name: 'Italy Dance Festival', href: '/global-links/italy-dance-festival', icon: '' },
                {
                    name: 'Indo Spanish Online Exchange',
                    href: '/global-links/indo-spanish-exchange',
                    icon: '',
                    children: [
                        { name: 'Indo Spanish Online Exchange Programme', href: '/global-links/indo-spanish-exchange' },
                        { name: 'Indo Spanish Online Exchange Programme 2023', href: '/global-links/indo-spanish-exchange/2023' },
                        { name: 'Indo Spanish Online Exchange Programme 2022', href: '/global-links/indo-spanish-exchange/2022' },
                        { name: 'Indo Spanish Online Exchange Programme 2021-22', href: '/global-links/indo-spanish-exchange/2021-22' },
                        { name: 'Indo Spanish Online Exchange Programme 2020-21', href: '/global-links/indo-spanish-exchange/2020-21' },
                        { name: 'Indo Spanish Online Exchange Programme 2019-20', href: '/global-links/indo-spanish-exchange/2019-20' },
                        { name: 'Indo Spanish Online Exchange Programme 2018-19', href: '/global-links/indo-spanish-exchange/2018-19' },
                        { name: 'Indo Spanish Online Exchange Programme 2017-18', href: '/global-links/indo-spanish-exchange/2017-18' },
                    ],
                },
                { name: 'Geneva Mun Conference 2018', href: '/global-links/geneva-mun-conference-2018', icon: '' },
                { name: 'DWF Environment Base camp, Denmark', href: '/global-links/dwf-environmental-eco-game', icon: '' },
                {
                    name: 'NASA Space School Programme',
                    href: '/global-links/nasa-space-school',
                    icon: '',
                    children: [
                        { name: 'Nasa Space school programme 2019', href: '/global-links/nasa-space-school/2019' },
                        { name: 'Swiss Indian Classroom Program 2018-19 leg 1', href: '/global-links/nasa-space-school/swiss-indian-classroom-2018-19' },
                    ],
                },
                {
                    name: 'Indo German Exchange Programme',
                    href: '/global-links/indo-german-exchange',
                    icon: '',
                    children: [
                        { name: "German Teachers' Conference - IDT 2022", href: '/global-links/indo-german-exchange/teachers-conference-2022' },
                        { name: 'Indo German Exchange Programme 2019-20', href: '/global-links/indo-german-exchange/2019-20' },
                        { name: 'Indo German Exchange Programme 2018-19', href: '/global-links/indo-german-exchange/2018-19' },
                        { name: 'Indo German Exchange Programme 2017-18', href: '/global-links/indo-german-exchange/2017-18' },
                    ],
                },
                {
                    name: 'Indo-French Exchange Programme',
                    href: '/global-links/indo-french-exchange',
                    icon: '',
                    children: [
                        { name: 'Indo-French Cultural Exchange 2023-24', href: '/global-links/indo-french-exchange/2023-24' },
                        { name: 'Indo-French Cultural Exchange 2019-20', href: '/global-links/indo-french-exchange/2019-20' },
                        { name: 'Indo-French Cultural Exchange 2018-19', href: '/global-links/indo-french-exchange/2018-19' },
                        { name: 'Indo French Exchange Programme 2018', href: '/global-links/indo-french-exchange/2018' },
                        { name: 'Indo French Exchange Programme 2016', href: '/global-links/indo-french-exchange/2016' },
                    ],
                },
                {
                    name: 'Indo-Polish Exchange Programme',
                    href: '/global-links/indo-polish-exchange',
                    icon: '',
                    children: [
                        { name: 'Indo-Polish Exchange Programme 2023-24', href: '/global-links/indo-polish-exchange/2023-24' },
                        { name: 'Indo-Polish Exchange Programme 2022-23', href: '/global-links/indo-polish-exchange/2022-23' },
                        { name: 'Indo-Polish Exchange Programme 2020-21', href: '/global-links/indo-polish-exchange/2020-21' },
                        { name: 'Indo-Polish Exchange Programme', href: '/global-links/indo-polish-exchange' },
                        { name: 'Indo-Polish Exchange Programme 2018-19', href: '/global-links/indo-polish-exchange/2018-19' },
                    ],
                },
                { name: 'Model United Nations (MUN)', href: '/global-links/model-united-nations', icon: '' },
                { name: 'International Art Festival', href: '/global-links/international-art-festival', icon: '' },
                { name: 'US West Coast Education Programme', href: '/global-links/us-west-coast-education', icon: '' },
                { name: 'Summer Dance at The Arts Centre, University of Reading', href: '/global-links/summer-dance-reading', icon: '' },
                { name: 'UNESCO International Festival', href: '/global-links/unesco-international-festival', icon: '' },
                { name: 'Pedagogical Exchange Scholorship to Denmark', href: '/global-links/pedagogical-exchange-denmark', icon: '' },
                { name: 'Environment Suse Camp 2018-19 Helsinki Finland', href: '/global-links/environment-suse-camp', icon: '' },
                { name: 'Exchange in News', href: '/global-links/exchange-in-news', icon: '' },
                { name: 'Poland Exchange', href: '/global-links/poland-exchange', icon: '' },
                { name: 'French Concert at Alliance Francaise', href: '/global-links/french-concert-alliance', icon: '' },
                { name: 'DELP Junior Examination July 2022', href: '/global-links/delp-junior-exam-2022', icon: '' },
                {
                    name: 'International Scholarship',
                    href: '/global-links/international-scholarship',
                    icon: '',
                    children: [
                        { name: 'Students', href: '/global-links/international-scholarship/students' },
                        { name: 'Teachers', href: '/global-links/international-scholarship/teachers' },
                    ],
                },
                { name: 'Reconnection with Your Culture (RWYC)', href: '/global-links/reconnection-culture', icon: '' },
                { name: 'Archive', href: '/global-links/archive', icon: '' },
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
