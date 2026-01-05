import HeroSlider from '@/components/HeroSlider';
import HolisticImpact from '@/components/HolisticImpact';
import NIHNumbers from '@/components/NIHNumbers';
import NewMembers from '@/components/NewMembers';
import LifetimeMembers from '@/components/LifetimeMembers';
import EventsSection from '@/components/EventsSection';
import EventsNews from '@/components/EventsNews';
import QuickLinks from '@/components/QuickLinks';
import EventBannerPopup from '@/components/EventBannerPopup';

export default function Home() {
  const slides = [
    {
      id: 1,
      image: '/images/VIETNAM1.jpg',
    },
    {
      id: 2,
      image: '/images/VIETNAM2.jpg',
    },
    {
      id: 3,
      image: '/images/VIETNAM3.jpg',
    },
    {
      id: 4,
      image: '/images/ISY1.jpg',
    },
    {
      id: 5,
      image: '/images/ISY2.jpg',
    },
    {
      id: 6,
      image: '/images/ISY3.jpg',
    },
    {
      id: 7,
      image: '/images/ISY4.jpg',
    },
    {
      id: 8,
      image: '/images/ISY5.jpg',
    },
    {
      id: 9,
      image: '/images/banner-00011.jpg',
    },
    {
      id: 10,
      image: '/images/banner-0011.jpg',
    },
    {
      id: 11,
      image: '/images/banner-0.jpg',
    },
    {
      id: 12,
      image: '/images/banner-1.jpg',
    },
    {
      id: 13,
      image: '/images/banner-1-2.jpg',
    },
    {
      id: 14,
      image: '/images/banner-2.jpg',
    },
    {
      id: 15,
      image: '/images/banner-3-3.jpg',
    },
    {
      id: 16,
      image: '/images/banner-333.jpg',
    },
    {
      id: 17,
      image: '/images/banner-3.jpg',
    },
    {
      id: 18,
      image: '/images/banner-4.jpg',
    },

    {
      id: 19,
      image: '/images/banner-5-1.jpg',
    },

    {
      id: 20,
      image: '/images/banner-6-1.jpg',
    },

    {
      id: 21,
      image: '/images/banner-7-1.jpg',
    },

    {
      id: 22,
      image: '/images/banner-8-1.jpg',
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

