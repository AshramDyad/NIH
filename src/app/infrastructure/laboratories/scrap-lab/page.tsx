import Breadcrumb from '@/components/shared/Breadcrumb';
import ScrapLabContent from '@/components/infrastructure/laboratories/scrap-lab/ScrapLabContent';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';

export const metadata = {
  title: 'Scrap Lab - DPS Gurgaon',
  description: 'The school has been successfully running an afterschool program, Scraplabs, which is a venture of Scrapbotics Laboratories. Students learn by doing during these hands-on learning sessions.',
};

export default function ScrapLabPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />
      <ScrapLabContent />
    </>
  );
}
