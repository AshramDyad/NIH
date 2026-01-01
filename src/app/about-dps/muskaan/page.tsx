import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import MuskaanContent from '@/components/about-dps/muskaan/MuskaanContent';

export const metadata: Metadata = {
  title: 'Muskaan | NIH Health - The Twinning Project',
  description: 'Learn about Muskaan - The twinning endeavour initiative',
};

export default function MuskaanPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About DPS', href: '/about-dps/about-the-school' },
    { label: 'Muskaan', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={aboutDPSConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <MuskaanContent />
    </>
  );
}
