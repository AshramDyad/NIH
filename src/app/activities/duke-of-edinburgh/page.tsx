import { Metadata } from "next";
import FloatingSidebar from "@/components/shared/FloatingSidebar";
import SidebarContent from "@/components/shared/SidebarContent";
import { activitiesConfig } from "@/config/sidebar/activitiesConfig";
import Breadcrumb from "@/components/shared/Breadcrumb";
import DukeOfEdinburghContent from "@/components/activities/DukeOfEdinburghContent";

export const metadata: Metadata = {
  title: "Duke of Edinburgh | NIH Health",
  description: "Learn about the internationally recognized Duke of Edinburgh award programme at NIH Health.",
};

export default function DukeOfEdinburghPage() {
  return (
    <>
      <FloatingSidebar>
        <SidebarContent sections={activitiesConfig.sections} />
      </FloatingSidebar>

      <Breadcrumb />

      <section className="sm:py-16 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-black text-zinc-900">
              Duke of <span className="text-primary italic">Edinburgh</span>
            </h1>
          </div>
          <DukeOfEdinburghContent />
        </div>
      </section>
    </>
  );
}
