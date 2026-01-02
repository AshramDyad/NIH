import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import MathLabContent from '@/components/infrastructure/laboratories/math-lab/MathLabContent';

export const metadata: Metadata = {
  title: 'Math Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Math Lab at DPS Gurgaon - Three separate labs for primary, junior, and senior students with hands-on learning experiences and real object demonstrations.',
};

export default function MathLabPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'Laboratories', href: '/infrastructure/laboratories/science-labs' },
    { label: 'Math Lab', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <MathLabContent />
    </>
  );
}
