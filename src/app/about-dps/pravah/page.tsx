import { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { aboutDPSConfig } from '@/config/sidebar/aboutDSPConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import PravahContent from '@/components/about-dps/pravah/PravahContent';

export const metadata: Metadata = {
  title: 'Pravah | NIH Health - An Initiative of Ms Dhara Jaipuria',
  description: 'Learn about Pravah - An initiative by Ms Dhara Jaipuria aiming at skill development and empowering youth towards economic sustainability through employment opportunities.',
};

export default function PravahPage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'About DPS', href: '/about-dps/about-the-school' },
    { label: 'Pravah', href: undefined },
  ];

  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={aboutDPSConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb items={breadcrumbItems} />
      <PravahContent />
    </>
  );
}
