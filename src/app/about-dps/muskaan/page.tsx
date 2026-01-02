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
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={aboutDPSConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />
      <MuskaanContent />
    </>
  );
}
