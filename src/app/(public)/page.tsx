import HeroSlider from "@/components/HeroSlider";
import HolisticImpact from "@/components/HolisticImpact";
import NIHNumbers from "@/components/NIHNumbers";
import NewMembers from "@/components/NewMembers";
import LifetimeMembers from "@/components/LifetimeMembers";
import EventsSection from "@/components/EventsSection";
import EventsNews from "@/components/EventsNews";
import QuickLinks from "@/components/QuickLinks";
import EventBannerPopup from "@/components/EventBannerPopup";
import { getHeroBanners } from "@/app/actions/hero-banners";

// function getR2ImageUrl(filename: string): string {
//   return `https://pub-81805ff84c1645c1a62c73f691611c86.r2.dev/images/${filename}`;
// }

export default async function Home() {
  const banners = await getHeroBanners();

  const slides = banners.map((banner) => ({
    id: banner.id,
    image: banner.image_url,
  }));

  // Fallback if no banners are uploaded yet
  if (slides.length === 0) {
    return (
      <>
        <EventBannerPopup />
        <div className="h-[40vh] md:h-[60vh] bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">
            Welcome to NIH. Please upload hero banners in admin panel.
          </p>
        </div>
        <NIHNumbers />
        <EventsNews />
        <HolisticImpact />
        <LifetimeMembers />
        <NewMembers />
        <QuickLinks />
        <EventsSection />
      </>
    );
  }

  return (
    <>
      <EventBannerPopup />
      <div id="hero">
        <HeroSlider slides={slides} />
      </div>
      <NIHNumbers />
      <EventsNews />
      <HolisticImpact />
      <LifetimeMembers />
      <NewMembers />
      <QuickLinks />
      <EventsSection />
    </>
  );
}
