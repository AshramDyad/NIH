import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { schoolProfileConfig } from '@/config/sidebar/schoolProfileConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SchoolProfileContent from '@/components/about/school-profile/SchoolProfileContent';

export const metadata: Metadata = {
    title: 'NIH Profile | NIH Health - National Institute of Holistic Health',
    description: 'View the complete NIH School Profile document. Access comprehensive information about the National Institute of Holistic Health.',
};

export default function SchoolProfilePage() {
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'About NIH', href: '/about' },
        { label: 'NIH Profile', href: undefined },
    ];

    return (
        <>
            <FloatingSidebar>
                <SidebarContent sections={schoolProfileConfig.sections} />
            </FloatingSidebar>

            <Breadcrumb items={breadcrumbItems} />

            {/* Page Header */}
            <section className="bg-gradient-to-r from-primary to-secondary py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
                            NIH <span className="italic">Profile</span>
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
                            Comprehensive overview of the National Institute of Holistic Health
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <SchoolProfileContent />
        </>
    );
}
