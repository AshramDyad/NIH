import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SchoolLibraryContent from '@/components/infrastructure/school-library/SchoolLibraryContent';

export const metadata: Metadata = {
  title: 'School Library | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the School Library at DPS Gurgaon - promoting reading culture with four libraries for Junior, Middle, and Senior School, featuring diverse books and reference materials.',
};

export default function SchoolLibraryPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'School Library', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <SchoolLibraryContent />
    </>
  );
}
