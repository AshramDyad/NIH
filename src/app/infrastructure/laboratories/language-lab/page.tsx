import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import LanguageLabContent from '@/components/infrastructure/laboratories/language-lab/LanguageLabContent';

export const metadata: Metadata = {
  title: 'Language Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Language Lab at DPS Gurgaon with Language Avenue and Words A-Maze in Primary Wing, plus Drama and Movement Room in Infant Wing for foreign language training.',
};

export default function LanguageLabPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'Laboratories', href: '/infrastructure/laboratories/science-labs' },
    { label: 'Language Lab', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <LanguageLabContent />
    </>
  );
}
