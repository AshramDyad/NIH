import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import FacilitiesContent from '@/components/infrastructure/facilities/FacilitiesContent';

export const metadata: Metadata = {
  title: 'Facilities | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the facilities at DPS Gurgaon including Tuckshop, Cafeteria, Toy Room, Playground, Gymnasium, Staff Room, Auditorium, and Medical Room.',
};

export default function FacilitiesPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '#' },
    { label: 'Facilities', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <FacilitiesContent />
    </>
  );
}
