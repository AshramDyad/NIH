import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import AboutTheSchoolContent from '@/components/about/about-the-school/AboutTheSchoolContent';

export const metadata: Metadata = {
    title: 'About the School | NIH Health - National Institute of Holistic Health',
    description: 'Learn about our mission, vision, and the exceptional leadership team at DPS Gurgaon. Meet our Director Principal, Vice Principals, and distinguished educators.',
};

export default function AboutTheSchoolPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About NIH', href: '/about' },
        { label: 'About The School', href: undefined },
    ];

    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutDPSConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb items={breadcrumbItems} />
            {/* Main Content */}
            <AboutTheSchoolContent />
        </>
    );
}
