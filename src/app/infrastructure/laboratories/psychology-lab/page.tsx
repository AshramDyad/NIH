import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import PsychologyLabContent from '@/components/infrastructure/laboratories/psychology-lab/PsychologyLabContent';

export const metadata: Metadata = {
  title: 'Psychology Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Psychology Lab at DPS Gurgaon - where students conduct course-related experiments, school counselors provide guidance, and training in life skills is imparted.',
};

export default function PsychologyLabPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />
      <PsychologyLabContent />
    </>
  );
}
