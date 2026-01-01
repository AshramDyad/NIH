import type { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import SmartClassContent from '@/components/infrastructure/smart-class/SmartClassContent';

export const metadata: Metadata = {
  title: 'Smart Class | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Learn about Smart Classes at DPS Gurgaon - utilizing technology to make learning fun, captivating, and effective through multi-sensory learning.',
};

export default function SmartClassPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/smart-class' },
    { label: 'Smart Class', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <SmartClassContent />
    </>
  );
}
