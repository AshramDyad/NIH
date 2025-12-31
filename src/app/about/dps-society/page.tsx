import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import DpsSocietyContent from '@/components/about/dps-society/DpsSocietyContent';

export const metadata: Metadata = {
    title: 'DPS Society | NIH Health - National Institute of Holistic Health',
    description: 'Learn about the DPS Society (DPSS), a non-profit educational body committed to excellence in education. Meet our Chairman and Vice Chairman.',
};

export default function DpsSocietyPage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About NIH', href: '/about' },
        { label: 'NIH Members', href: '/about' },
        { label: 'DPS Society', href: undefined },
    ];

    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={aboutDPSConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb items={breadcrumbItems} />
            {/* Main Content */}
            <DpsSocietyContent />
        </>
    );
}
