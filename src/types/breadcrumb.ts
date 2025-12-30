/**
 * Breadcrumb type definitions
 */

/**
 * Breadcrumb item representing a single level in the navigation path
 */
export interface BreadcrumbItem {
    /** Human-readable label for the breadcrumb item */
    label: string;
    /** URL path for navigation (undefined for current page) */
    href?: string;
}

/**
 * Props for the Breadcrumb component
 */
export interface BreadcrumbProps {
    /** Override the default breadcrumb items */
    items?: BreadcrumbItem[];
    /** Custom separator component (default: ">") */
    separator?: React.ReactNode;
}

/**
 * Configuration for URL segment to label mapping
 */
export type BreadcrumbLabelMap = Record<string, string>;
