import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SchoolProfileContent from '@/components/about-dps/school-profile/SchoolProfileContent';

export const metadata: Metadata = {
    title: 'NIH Profile | NIH Health - National Institute of Holistic Health',
    description: 'View the complete NIH School Profile document. Access comprehensive information about the National Institute of Holistic Health.',
};

export default function SchoolProfilePage() {
    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutDPSConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb />
            <SchoolProfileContent />
        </>
    );
}
