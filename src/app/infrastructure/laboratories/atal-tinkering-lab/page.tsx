import Breadcrumb from '@/components/shared/Breadcrumb';
import AtalTinkeringLabContent from '@/components/infrastructure/laboratories/atal-tinkering-lab/AtalTinkeringLabContent';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';

export const metadata = {
  title: 'Atal Tinkering Lab - DPS Gurgaon',
  description: 'Our school has been selected to collaborate under Atal Innovation Mission (AIM) to establish, operate and support Atal Tinkering Lab (ATL), a work space where students can give shape to their ideas through hands on - Do it yourself mode and develop innovation skills.',
};

export default function AtalTinkeringLabPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={infrastructureConfig.sections} />
      </FloatingSidebar>
      
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Infrastructure', href: '/infrastructure' },
          { label: 'Laboratories', href: '/infrastructure/laboratories/science-labs' },
          { label: 'Atal Tinkering Lab', href: undefined },
        ]}
      />
      <AtalTinkeringLabContent />
    </>
  );
}
