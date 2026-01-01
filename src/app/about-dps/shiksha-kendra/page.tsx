import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ShikshaKendraContent from '@/components/about-dps/shiksha-kendra/ShikshaKendraContent';

export const metadata: Metadata = {
  title: 'Shiksha Kendra | NIH Health - A School for Non-formal Education',
  description: 'Learn about Shiksha Kendra - A school for nonformal education established on 6th May 2003, providing free education to children from economically weaker sections of society.',
};

export default function ShikshaKendraPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About DPS', href: '/about-dps/about-the-school' },
    { label: 'Shiksha Kendra', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={aboutDPSConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <ShikshaKendraContent />
    </>
  );
}
