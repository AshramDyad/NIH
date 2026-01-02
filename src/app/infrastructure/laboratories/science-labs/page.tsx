import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ScienceLabsContent from '@/components/infrastructure/laboratories/science-labs/ScienceLabsContent';

export const metadata: Metadata = {
  title: 'Science Labs | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Science Labs at DPS Gurgaon - Physics, Chemistry, Biology, and General Science Labs with modern equipment and hands-on learning experiences for students.',
};

export default function ScienceLabsPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />
      <ScienceLabsContent />
    </>
  );
}
