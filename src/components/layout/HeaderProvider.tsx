"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import { IdCard, Orbit, LogIn, HelpCircle } from "lucide-react";
import type { HeaderConfig } from "@/types/header";

const HeaderContext = createContext<HeaderConfig | null>(null);

/**
 * Named Header Configurations
 * Define reusable header configurations here, then map multiple routes to them
 */

// Principal Message page header
const principalMessageHeader: HeaderConfig = {
  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Aims", href: "/about/aims" },
    { name: "Careers", href: "/careers" },
  ],
  ctaButtons: [
    {
      name: "Admission Info",
      href: "/admission-info",
      icon: <IdCard size={18} />,
      hasDropdown: true,
      dropdownItems: [
        { name: "Class Pre-Nursery / Nursery", href: "/admission/pre-nursery" },
        { name: "Class XI", href: "/admission/class-xi" },
        { name: "Other Classes", href: "/admission/other-classes" },
        { name: "Fee Structure", href: "/admission/fee-structure" },
      ],
    },
    {
      name: "360° View",
      href: "https://iviewd.com/dps45ggn1/",
      icon: <Orbit size={18} />,
      isExternal: true,
    },
    {
      name: "Login",
      href: "https://www.dpsggncampuscare.org/",
      icon: <LogIn size={18} />,
      isExternal: true,
    },
    {
      name: "Help",
      href: "/help",
      icon: <HelpCircle size={18} />,
    },
  ],
  mobileMenuItems: [
    { id: "home", name: "HOME", href: "/" },
    {
      id: "about-dps",
      name: "ABOUT DPS",
      hasChildren: true,
      children: [
        { name: "About The School", href: "/about/school" },
        { name: "School Profile", href: "/about/profile" },
        {
          name: "DPS Family",
          hasChildren: true,
          children: [
            { name: "DPS Society", href: "/about/dps-family/dps-society" },
            { name: "Board of Management", href: "/about/dps-family/board-of-management" },
          ]
        },
        { name: "Shiksha Kendra - A School For Nonformal Education", href: "/about/shiksha-kendra" },
      ]
    },
    {
      id: "general-info",
      name: "GENERAL INFORMATION",
      hasChildren: true,
      children: [
        { name: "School Rules", href: "/general-information/school-rules" },
        { name: "Recommendations", href: "/general-information/recommendations" },
        { name: "Withdrawls", href: "/general-information/withdrawls" },
        { name: "Bus Information", href: "/general-information/bus-information" },
        { name: "School Bus Rules", href: "/general-information/school-bus-rules" },
        { name: "Elected Parents Representatives", href: "/general-information/elected-parents" },
      ]
    },
    {
      id: "infrastructure",
      name: "INFRASTRUCTURE",
      hasChildren: true,
      children: [
        { name: "School Building", href: "/infrastructure/school-building" },
        { name: "Smart Class", href: "/infrastructure/smart-class" },
        { name: "School Library", href: "/infrastructure/school-library" },
        { name: "Art & Music Department", href: "/infrastructure/art-music-department" },
        {
          name: "Laboratories",
          hasChildren: true,
          children: [
            { name: "Science Labs", href: "/infrastructure/laboratories/science-labs" },
            { name: "Psychology Lab", href: "/infrastructure/laboratories/psychology-lab" },
            { name: "Fashion Technology Lab", href: "/infrastructure/laboratories/fashion-technology-lab" },
            { name: "Language Lab", href: "/infrastructure/laboratories/language-lab" },
            { name: "IT Lab", href: "/infrastructure/laboratories/it-lab" },
            { name: "Math Lab", href: "/infrastructure/laboratories/math-lab" },
            { name: "Fine Art Lab", href: "/infrastructure/laboratories/fine-art-lab" },
            { name: "Discovery Lab", href: "/infrastructure/laboratories/discovery-lab" },
            { name: "Atal Tinkering Lab", href: "/infrastructure/laboratories/atal-tinkering-lab" },
            { name: "Scrap Lab", href: "/infrastructure/laboratories/scrap-lab" },
            { name: "Lab Incharges", href: "/infrastructure/laboratories/lab-incharges" },
          ]
        },
        { name: "Facilities", href: "/infrastructure/facilities" },
      ]
    },
    {
      id: "academics",
      name: "ACADEMICS",
      hasChildren: true,
      children: [
        { name: "Leadership Team", href: "/academics/leadership-team" },
        { name: "Academic Team", href: "/academics/academic-team" },
        { name: "Class Representatives", href: "/academics/class-representatives" },
        { name: "Co-ordinators", href: "/academics/co-ordinators" },
        { name: "Extra Duty List", href: "/academics/extra-duty-list" },
        { name: "Hall of Fame", href: "/academics/hall-of-fame" },
        { name: "Inclusion Programme", href: "/academics/inclusion-programme" },
      ]
    },
    {
      id: "activities",
      name: "ACTIVITIES",
      hasChildren: true,
      children: [
        { name: "Duke of Edinburgh", href: "/activities/duke-of-edinburgh" },
        { name: "House System", href: "/activities/house-system" },
        { name: "Sports", href: "/activities/sports" },
        { name: "Programmes & Clubs", href: "/activities/programmes-and-clubs" },
        { name: "Programmes and Club Incharges", href: "/activities/club-incharges" },
        { name: "Health Council", href: "/activities/health-council" },
        { name: "House Appointees/Vice House Appointees", href: "/activities/house-appointees" },
        { name: "School Appointees", href: "/activities/school-appointees" },
      ]
    },
    {
      id: "global-links",
      name: "GLOBAL LINKS",
      hasChildren: true,
      children: [
        {
          name: "Danish Immersive Exchange",
          hasChildren: true,
          children: [
            { name: "Danish Immersive Exchange Programme - 2024", href: "/global-links/danish-immersive-exchange/2024" },
            { name: "Danish Immersive Exchange Programme - 2023", href: "/global-links/danish-immersive-exchange/2023" },
            { name: "Danish Immersive Exchange Programme - Stage 1", href: "/global-links/danish-immersive-exchange/stage-1" },
            { name: "Danish Immersive Exchange Programme", href: "/global-links/danish-immersive-exchange" },
          ]
        },
        { name: "Estodma +90 - International Drawing Exhibition", href: "/global-links/estodma-90" },
        { name: "Goncourt Award Ceremony at French Ambassador's Residence", href: "/global-links/goncourt-award" },
        {
          name: "Anthology of Poems",
          hasChildren: true,
          children: [
            { name: "International Collaborative Project hosted by Delhi Public School Gurgaon", href: "/global-links/anthology-of-poems/collaborative-project" },
            { name: "International Media shows interest", href: "/global-links/anthology-of-poems/media-interest" },
          ]
        },
        { name: "Swiss Italian Exchange Program 1", href: "/global-links/swiss-italian-exchange-1" },
        { name: "Italy Dance Festival", href: "/global-links/italy-dance-festival" },
        {
          name: "Indo Spanish Online Exchange",
          hasChildren: true,
          children: [
            { name: "Indo Spanish Online Exchange Programme", href: "/global-links/indo-spanish-exchange" },
            { name: "Indo Spanish Online Exchange Programme 2023", href: "/global-links/indo-spanish-exchange/2023" },
            { name: "Indo Spanish Online Exchange Programme 2022", href: "/global-links/indo-spanish-exchange/2022" },
            { name: "Indo Spanish Online Exchange Programme 2021-22", href: "/global-links/indo-spanish-exchange/2021-22" },
            { name: "Indo Spanish Online Exchange Programme 2020-21", href: "/global-links/indo-spanish-exchange/2020-21" },
            { name: "Indo Spanish Online Exchange Programme 2019-20", href: "/global-links/indo-spanish-exchange/2019-20" },
            { name: "Indo Spanish Online Exchange Programme 2018-19", href: "/global-links/indo-spanish-exchange/2018-19" },
            { name: "Indo Spanish Online Exchange Programme 2017-18", href: "/global-links/indo-spanish-exchange/2017-18" },
          ]
        },
        { name: "Geneva Mun Conference 2018", href: "/global-links/geneva-mun-conference-2018" },
        { name: "DWF Environment Base camp, Denmark", href: "/global-links/dwf-environmental-eco-game" },
        {
          name: "NASA Space School Programme",
          hasChildren: true,
          children: [
            { name: "Nasa Space school programme 2019", href: "/global-links/nasa-space-school/2019" },
            { name: "Swiss Indian Classroom Program 2018-19 leg 1", href: "/global-links/nasa-space-school/swiss-indian-classroom-2018-19" },
          ]
        },
        {
          name: "Indo German Exchange Programme",
          hasChildren: true,
          children: [
            { name: "German Teachers' Conference - IDT 2022", href: "/global-links/indo-german-exchange/teachers-conference-2022" },
            { name: "Indo German Exchange Programme 2019-20", href: "/global-links/indo-german-exchange/2019-20" },
            { name: "Indo German Exchange Programme 2018-19", href: "/global-links/indo-german-exchange/2018-19" },
            { name: "Indo German Exchange Programme 2017-18", href: "/global-links/indo-german-exchange/2017-18" },
          ]
        },
        {
          name: "Indo-French Exchange Programme",
          hasChildren: true,
          children: [
            { name: "Indo-French Cultural Exchange 2023-24", href: "/global-links/indo-french-exchange/2023-24" },
            { name: "Indo-French Cultural Exchange 2019-20", href: "/global-links/indo-french-exchange/2019-20" },
            { name: "Indo-French Cultural Exchange 2018-19", href: "/global-links/indo-french-exchange/2018-19" },
            { name: "Indo French Exchange Programme 2018", href: "/global-links/indo-french-exchange/2018" },
            { name: "Indo French Exchange Programme 2016", href: "/global-links/indo-french-exchange/2016" },
          ]
        },
        {
          name: "Indo-Polish Exchange Programme",
          hasChildren: true,
          children: [
            { name: "Indo-Polish Exchange Programme 2023-24", href: "/global-links/indo-polish-exchange/2023-24" },
            { name: "Indo-Polish Exchange Programme 2022-23", href: "/global-links/indo-polish-exchange/2022-23" },
            { name: "Indo-Polish Exchange Programme 2020-21", href: "/global-links/indo-polish-exchange/2020-21" },
            { name: "Indo-Polish Exchange Programme", href: "/global-links/indo-polish-exchange" },
            { name: "Indo-Polish Exchange Programme 2018-19", href: "/global-links/indo-polish-exchange/2018-19" },
            { name: "Indo-Polish Exchange Programme", href: "/global-links/indo-polish-exchange/main" },
          ]
        },
        { name: "Model United Nations (MUN)", href: "/global-links/model-united-nations" },
        { name: "International Art Festival", href: "/global-links/international-art-festival" },
        { name: "US West Coast Education Programme", href: "/global-links/us-west-coast-education" },
        { name: "Summer Dance at The Arts Centre, University of Reading", href: "/global-links/summer-dance-reading" },
        { name: "UNESCO International Festival", href: "/global-links/unesco-international-festival" },
        { name: "Pedagogical Exchange Scholorship to Denmark", href: "/global-links/pedagogical-exchange-denmark" },
        { name: "Environment Suse Camp 2018-19 Helsinki Finland", href: "/global-links/environment-suse-camp" },
        { name: "Exchange in News", href: "/global-links/exchange-in-news" },
        { name: "Poland Exchange", href: "/global-links/poland-exchange" },
        { name: "French Concert at Alliance Francaise", href: "/global-links/french-concert-alliance" },
        { name: "DELP Junior Examination July 2022", href: "/global-links/delp-junior-exam-2022" },
        {
          name: "International Scholarship",
          hasChildren: true,
          children: [
            { name: "Students", href: "/global-links/international-scholarship/students" },
            { name: "Teachers", href: "/global-links/international-scholarship/teachers" },
          ]
        },
        { name: "Reconnection with Your Culture (RWYC)", href: "/global-links/reconnection-culture" },
        { name: "Archive", href: "/global-links/archive" },
      ]
    },
    { id: "news", name: "NEWS", href: "/news" },
    {
      id: "alumni",
      name: "ALUMNI",
      hasChildren: true,
      children: [
        { name: "Alumni Guidance", href: "/alumni/alumni-guidance" },
        { name: "Success Stories", href: "/alumni/success-stories" },
      ]
    },
    { id: "alumni-placement", name: "ALUMNI PLACEMENT", href: "/alumni/placement" },
    { id: "careers", name: "CAREERS", href: "/careers" },
    { id: "contact", name: "CONTACT US", href: "/contact" },
    { id: "transfer-certificate", name: "TRANSFER CERTIFICATE", href: "/transfer-certificate" },
    { id: "important-circulars", name: "IMPORTANT CIRCULARS", href: "/important-circulars" },
  ],
};

// Define other named headers here as needed
// const aboutSectionHeader: HeaderConfig = { ... };
// const membershipSectionHeader: HeaderConfig = { ... };

/**
 * Page-Specific Route Mappings
 * Map routes to their header configurations (either named or inline)
 */
const pageHeaderConfigs: Record<string, HeaderConfig> = {
  // Principal Message page gets custom header
  '/about/principal-message': principalMessageHeader,

  // General Information page gets custom header
  '/general-information': principalMessageHeader,
  '/general-information/school-rules': principalMessageHeader,
  '/general-information/recommendations': principalMessageHeader,
  '/general-information/withdrawls': principalMessageHeader,
  '/general-information/bus-information': principalMessageHeader,
  '/general-information/school-bus-rules': principalMessageHeader,
  '/general-information/elected-parents': principalMessageHeader,

  // Add more mappings here as needed
  // '/about/chairman': aboutSectionHeader,
  // '/about/secretary': aboutSectionHeader,

  // Or define inline configs for single-use cases
  // '/special-page': {
  //     navLinks: [...],
  //     ctaButtons: [...],
  //     mobileMenuItems: [...]
  // },
};

export function HeaderProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const headerConfig = useMemo(() => {
    // Priority 1: Exact route match
    if (pageHeaderConfigs[pathname]) {
      return pageHeaderConfigs[pathname];
    }

    // Priority 2: No custom header, return null (uses defaults)
    return null;
  }, [pathname]);

  return (
    <HeaderContext.Provider value={headerConfig}>
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeaderConfig(): HeaderConfig | null {
  return useContext(HeaderContext);
}
