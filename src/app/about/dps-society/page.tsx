import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDSPConfig } from '@/config/sidebar/aboutDSPConfig';
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
                <SidebarContent sections={aboutDSPConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb items={breadcrumbItems} />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-secondary py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                            DPS <span className="italic">Society</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                            A non-profit educational body committed to excellence in education since 1949
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <DpsSocietyContent />
        </>
    );
}
