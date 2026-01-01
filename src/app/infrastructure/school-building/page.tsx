import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SchoolBuildingContent from '@/components/infrastructure/school-building/SchoolBuildingContent';

export const metadata: Metadata = {
  title: 'School Building | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Learn about the School Building at DPS Gurgaon - designed with a safety-first approach, interconnected air-conditioned blocks, and dedicated wings for different grade levels.',
};

export default function SchoolBuildingPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'School Building', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <SchoolBuildingContent />
    </>
  );
}
