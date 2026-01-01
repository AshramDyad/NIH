import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ManagingCommitteeContent from '@/components/about-dps/dps-family/managing-committee/ManagingCommitteeContent';

export const metadata: Metadata = {
    title: 'Managing Committee | NIH Health - National Institute of Holistic Health',
    description: 'Meet the Board of Management members at DPS Gurgaon. View our managing committee including Chairman, Vice Chairperson, members, and representatives.',
};

export default function ManagingCommitteePage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About DPS', href: '/about-dps/principal-message' },
        { label: 'DPS Family', href: '#' },
        { label: 'Managing Committee', href: undefined },
    ];

    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutDPSConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb items={breadcrumbItems} />

            <main>
                <ManagingCommitteeContent />
            </main>
        </>
    );
}
