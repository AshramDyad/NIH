import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import FineArtLabContent from '@/components/infrastructure/laboratories/fine-art-lab/FineArtLabContent';

export const metadata: Metadata = {
  title: 'Fine Art Lab | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Discover the Fine Art Lab at DPS Gurgaon - A productive working environment for senior students with still life corner, proper lighting, and guided experimentation under expert faculty supervision.',
};

export default function FineArtLabPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Infrastructure', href: '/infrastructure/school-building' },
    { label: 'Laboratories', href: '#' },
    { label: 'Fine Art Lab', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <FineArtLabContent />
    </>
  );
}
