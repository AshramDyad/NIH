import type { Metadata } from 'next';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';
import Breadcrumb from '@/components/shared/Breadcrumb';
import ArtMusicDepartmentContent from '@/components/infrastructure/art-music-department/ArtMusicDepartmentContent';

export const metadata: Metadata = {
  title: 'Art & Music Department | NIH Health - DPS Gurgaon Infrastructure',
  description: 'Learn about the Art & Music Department at DPS Gurgaon - featuring dedicated art rooms, pottery and sculpture areas, music and dance rooms with training in various classical and western streams.',
};

export default function ArtMusicDepartmentPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />
      <ArtMusicDepartmentContent />
    </>
  );
}
