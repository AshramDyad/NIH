import Breadcrumb from '@/components/shared/Breadcrumb';
import LabInchargesContent from '@/components/infrastructure/laboratories/lab-incharges/LabInchargesContent';
import FloatingSidebar from '@/components/shared/FloatingSidebar';
import SidebarContent from '@/components/shared/SidebarContent';
import { infrastructureConfig } from '@/config/sidebar/infrastructureConfig';

export const metadata = {
  title: 'Lab Incharges - DPS Gurgaon',
  description: 'Complete list of lab incharges for all laboratories including Chemistry, Physics, Biology, Atal Tinkering Lab, Discovery Lab, Language Lab, Fashion Technology, Computer Lab, Maths Lab, Gymnasium, Library, Activity Rooms, and Smart Class.',
};

export default function LabInchargesPage() {
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
          { label: 'Lab Incharges', href: '/infrastructure/laboratories/lab-incharges' },
        ]}
      />
      <LabInchargesContent />
    </>
  );
}
