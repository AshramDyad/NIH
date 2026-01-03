"use client";

const TopTicker = () => {
  const newsItems = [
    "Registered with Ministry of Micro, Small & Medium Enterprises(MSME) and NITI Aayog, Government of India",
    "International Conference on YOGA & Holistic Health-2026",
    "Join us Now - Admission Open for Certificate in Holistic Health(CCH)",
  ];
  return (
    <div className="bg-secondary overflow-hidden py-2 text-white">
      <div className="flex animate-marquee whitespace-nowrap">
        {newsItems.map((item, index) => (
          <span key={index} className="mx-8 text-sm font-medium">
            {item}
          </span>
        ))}
        {/* Duplicate for seamless looping */}
        {newsItems.map((item, index) => (
          <span key={`dup-${index}`} className="mx-8 text-sm font-medium">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
export default TopTicker;