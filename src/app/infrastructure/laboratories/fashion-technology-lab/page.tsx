import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import FashionTechnologyLabContent from '@/components/infrastructure/laboratories/fashion-technology-lab/FashionTechnologyLabContent';

export const metadata: Metadata = {
  title: 'Fashion Technology Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Fashion Technology Lab at DPS Gurgaon - featuring dress forms, specialized equipment, sewing machines, and comprehensive training in fashion design and presentation.',
};

export default function FashionTechnologyLabPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />
      <FashionTechnologyLabContent />
    </>
  );
}
