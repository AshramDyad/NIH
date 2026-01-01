import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import DiscoveryLabContent from '@/components/infrastructure/laboratories/discovery-lab/DiscoveryLabContent';

export const metadata: Metadata = {
  title: 'Discovery Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Discovery Lab at DPS Gurgaon - A hands-on learning space for junior students (Classes III, IV, and V) to explore Science, Social Studies, and Math concepts through experiments, specimens, models, and engaging activities.',
};

export default function DiscoveryLabPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'Laboratories', href: '#' },
    { label: 'Discovery Lab', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <DiscoveryLabContent />
    </>
  );
}
