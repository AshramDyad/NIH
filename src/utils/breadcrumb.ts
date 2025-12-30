import { BreadcrumbItem, BreadcrumbLabelMap } from '@/types/breadcrumb';
import { usePathname } from 'next/navigation';

/**
 * Default mapping of URL segments to human-readable labels
 */
export const defaultLabelMap: BreadcrumbLabelMap = {
    'about': 'About Us',
    'aims': 'Aims & Objectives',
    'chairman': 'Chairman',
    'central-council-board': 'Central Control Board',
    'secretary': 'National Secretary',
    'principal-message': "Principal's Message",
    'contact': 'Contact Us',
    'members': 'Members',
    'news': 'News',
    'events': 'Events',
    'magazine': 'E-Magazine',
    'press': 'Press Release',
    'conference': 'International Conference',
    'camps': 'Health Check-up Camps',
    'retreat': 'Health Retreat',
    'courses': 'Courses',
};

/**
 * Generates breadcrumb items from a pathname
 * @param pathname - The current URL pathname
 * @param labelMap - Optional custom label mapping
 * @returns Array of breadcrumb items
 */
export function generateBreadcrumbItems(
    pathname: string,
    labelMap: BreadcrumbLabelMap = defaultLabelMap
): BreadcrumbItem[] {
    const items: BreadcrumbItem[] = [];

    // Always add Home
    items.push({ label: 'Home', href: '/' });

    if (pathname === '/') {
        return items;
    }

    // Split pathname into segments, filter empty strings
    const segments = pathname.split('/').filter(Boolean);

    // Build breadcrumb items incrementally
    let currentPath = '';
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        currentPath += `/${segment}`;

        const isLast = i === segments.length - 1;
        const label = labelMap[segment] || formatLabel(segment);

        if (isLast) {
            // Current page - no href
            items.push({ label });
        } else {
            // Parent page - include href
            items.push({ label, href: currentPath });
        }
    }

    return items;
}

/**
 * Formats a URL segment into a human-readable label
 * @param segment - URL segment string
 * @returns Formatted label
 */
export function formatLabel(segment: string): string {
    return segment
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

/**
 * Hook to get breadcrumb items for the current page
 * @param labelMap - Optional custom label mapping
 * @returns Array of breadcrumb items
 */
export function useBreadcrumbItems(labelMap?: BreadcrumbLabelMap): BreadcrumbItem[] {
    const pathname = usePathname();
    return generateBreadcrumbItems(pathname, labelMap);
}
