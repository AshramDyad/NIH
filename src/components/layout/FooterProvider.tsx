"use client";

import { createContext, useContext, ReactNode, useMemo } from "react";
import { usePathname } from "next/navigation";
import type { FooterConfig } from "@/types/footer";

const FooterContext = createContext<FooterConfig | null>(null);

/**
 * Named Footer Configurations
 * Define reusable footer configurations here, then map multiple routes to them
 */

// About Section Footer - reused for all /about/* pages
const aboutSectionFooter: FooterConfig = {
    quickLinks: {
        links: [
            { href: '/about-dps/about-the-school', label: 'About DPS' },
            { href: '#', label: 'Photo Gallery' },
            { href: '#', label: 'Alumni' },
            { href: '#', label: 'News' },
            { href: '/contact', label: 'Contact Us' },
            { href: '#', label: 'Infrastructure' },
            { href: '#', label: 'Video Gallery' },
            { href: '#', label: 'Alumni Placement' },
            { href: '#', label: 'Careers' },
        ]
    },
    admissions: {
        links: [
            { label: 'Class Pre-Nursery/Nursery' },
            { label: 'Class XI' },
            { label: 'Other Classes' },
            { label: 'Fee Structure' },
        ]
    },
    contact: {
        address: 'Site No. I, Sector-45 Urban Estate, Gurugram - 122003, India',
        phone: ['0124 4125800-801'],
        email: 'dpsgurgaon1@gmail.com'
    }
};

// Define other named footers here as needed
// const contactSectionFooter: FooterConfig = { ... };
// const coursesSectionFooter: FooterConfig = { ... };

/**
 * Page-Specific Route Mappings
 * Map routes to their footer configurations (either named or inline)
 */
const pageFooterConfigs: Record<string, FooterConfig> = {
    // Reuse aboutSectionFooter for multiple routes
    '/about-dps/principal-message': aboutSectionFooter,
    '/about-dps/about-the-school': aboutSectionFooter,
    '/about-dps/school-profile': aboutSectionFooter,
    '/about-dps/dps-family/dps-society': aboutSectionFooter,
    '/about-dps/dps-family/managing-committee': aboutSectionFooter,
    '/about-dps/shiksha-kendra': aboutSectionFooter,
    '/about-dps/pravah': aboutSectionFooter,
    '/about-dps/muskaan': aboutSectionFooter,

    // General Information page gets custom footer
    '/general-information': aboutSectionFooter,
    '/general-information/school-rules': aboutSectionFooter,
    '/general-information/recommendations': aboutSectionFooter,
    '/general-information/withdrawls': aboutSectionFooter,
    '/general-information/bus-information': aboutSectionFooter,
    '/general-information/school-bus-rules': aboutSectionFooter,
    '/general-information/elected-parents': aboutSectionFooter,
    '/general-information/school-video': aboutSectionFooter,
    '/general-information/press-release': aboutSectionFooter,
    
    // Infrastructure page gets custom footer
    '/infrastructure/school-building': aboutSectionFooter,
    '/infrastructure/smart-class': aboutSectionFooter,
    '/infrastructure/school-library': aboutSectionFooter,
    '/infrastructure/art-music-department': aboutSectionFooter,
    '/infrastructure/laboratories/science-labs': aboutSectionFooter,
    '/infrastructure/laboratories/psychology-lab': aboutSectionFooter,
    '/infrastructure/laboratories/fashion-technology-lab': aboutSectionFooter,
    '/infrastructure/laboratories/language-lab': aboutSectionFooter,
    '/infrastructure/laboratories/it-lab': aboutSectionFooter,
    '/infrastructure/laboratories/math-lab': aboutSectionFooter,
    '/infrastructure/laboratories/fine-art-lab': aboutSectionFooter,
    '/infrastructure/laboratories/discovery-lab': aboutSectionFooter,
    '/infrastructure/laboratories/atal-tinkering-lab': aboutSectionFooter,
    '/infrastructure/laboratories/scrap-lab': aboutSectionFooter,
    '/infrastructure/laboratories/lab-incharges': aboutSectionFooter,

    // Add more mappings here as needed
    // '/about/aims': aboutSectionFooter,

    '/academics': aboutSectionFooter,
    '/academics/leadership-team': aboutSectionFooter,

    // Add more mappings here as needed
    // '/contact': contactSectionFooter,
    // '/courses': coursesSectionFooter,

    // Or define inline configs for single-use cases
    // '/special-page': {
    //     quickLinks: { links: [...] },
    //     contact: { ... }
    // },
};

export function FooterProvider({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    const footerConfig = useMemo(() => {
        // Priority 1: Exact route match
        if (pageFooterConfigs[pathname]) {
            return pageFooterConfigs[pathname];
        }

        // Priority 2: No custom footer, return null (uses defaults)
        return null;
    }, [pathname]);

    return (
        <FooterContext.Provider value={footerConfig}>
            {children}
        </FooterContext.Provider>
    );
}

export function useFooterConfig(): FooterConfig | null {
    return useContext(FooterContext);
}
