import HeroSlider from '@/components/HeroSlider';
import HolisticImpact from '@/components/HolisticImpact';
import NIHNumbers from '@/components/NIHNumbers';
import NewMembers from '@/components/NewMembers';
import LifetimeMembers from '@/components/LifetimeMembers';
import EventsSection from '@/components/EventsSection';
import EventsNews from '@/components/EventsNews';
import QuickLinks from '@/components/QuickLinks';
import EventBannerPopup from '@/components/EventBannerPopup';

function getR2ImageUrl(filename: string): string {
  return `https://pub-81805ff84c1645c1a62c73f691611c86.r2.dev/images/${filename}`;
}

export default function Home() {
  const slides = [
    {
      id: 1,
      image: getR2ImageUrl('VIETNAM1.jpg'),
    },
    {
      id: 2,
      image: getR2ImageUrl('VIETNAM2.jpg'),
    },
    {
      id: 3,
      image: getR2ImageUrl('VIETNAM3.jpg'),
    },
    {
      id: 4,
      image: getR2ImageUrl('ISY1.jpg'),
    },
    {
      id: 5,
      image: getR2ImageUrl('ISY2.jpg'),
    },
    {
      id: 6,
      image: getR2ImageUrl('ISY3.jpg'),
    },
    {
      id: 7,
      image: getR2ImageUrl('ISY4.jpg'),
    },
    {
      id: 8,
      image: getR2ImageUrl('ISY5.jpg'),
    },
    {
      id: 9,
      image: getR2ImageUrl('banner-00011.jpg'),
    },
    {
      id: 10,
      image: getR2ImageUrl('banner-0011.jpg'),
    },
    {
      id: 11,
      image: getR2ImageUrl('banner-0.jpg'),
    },
    {
      id: 12,
      image: getR2ImageUrl('banner-1.jpg'),
    },
    {
      id: 13,
      image: getR2ImageUrl('banner-1-2.jpg'),
    },
    {
      id: 14,
      image: getR2ImageUrl('banner-2.jpg'),
    },
    {
      id: 15,
      image: getR2ImageUrl('banner-3-3.jpg'),
    },
    {
      id: 16,
      image: getR2ImageUrl('banner-333.jpg'),
    },
    {
      id: 17,
      image: getR2ImageUrl('banner-3.jpg'),
    },
    {
      id: 18,
      image: getR2ImageUrl('banner-4.jpg'),
    },
    {
      id: 19,
      image: getR2ImageUrl('banner-5-1.jpg'),
    },
    {
      id: 20,
      image: getR2ImageUrl('banner-6-1.jpg'),
    },
    {
      id: 21,
      image: getR2ImageUrl('banner-7-1.jpg'),
    },
    {
      id: 22,
      image: getR2ImageUrl('banner-8-1.jpg'),
    }
  ];

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

