/**
 * Type definitions for sidebar components
 */

// Icon names (strings) instead of component references for Next.js serialization
export type IconName = string;

// Navigation link with icon name
export interface SidebarLink {
    name: string;
    href: string;
    icon: IconName;
    children?: { name: string; href: string; }[];
}

// Quick link with custom styling
export interface QuickLink {
    name: string;
    href: string;
    icon: IconName;
    bgColor: string;
    iconColor: string;
}

// Activity item with custom color styling
export interface ActivityItem {
    name: string;
    href: string;
    color: string;
}

// Section types for discriminated union
export type SidebarSection =
    | {
          type: 'nav';
          title: string;
      }
    | {
          type: 'quickLinks';
          title: string;
      }
    | {
          type: 'activities';
          title: string;
      }
    | {
          type: 'links';
          title: string;
          items: SidebarLink[];
      }
    | {
          type: 'quickLinksList';
          title: string;
          items: QuickLink[];
      }
    | {
          type: 'activitiesList';
          title: string;
          items: ActivityItem[];
      };

// Full sidebar configuration
export interface SidebarConfig {
    sections: SidebarSection[];
}
