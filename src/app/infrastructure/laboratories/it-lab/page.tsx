import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ItLabContent from '@/components/infrastructure/laboratories/it-lab/ItLabContent';

export const metadata: Metadata = {
  title: 'IT Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the seven IT Labs at DPS Gurgaon across all school wings, equipped with modern technology and training for tech-savvy students.',
};

export default function ItLabPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'Laboratories', href: '/infrastructure/laboratories/science-labs' },
    { label: 'IT Lab', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <ItLabContent />
    </>
  );
}
