// Type definitions for Shiksha Kendra page components

/**
 * Image item for gallery section
 */
export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

/**
 * Link item for resources section
 */
export interface ResourceLink {
  href: string;
  label: string;
  icon?: string;
  external?: boolean;
}

/**
 * Video link for YouTube videos
 */
export interface VideoLink {
  href: string;
  label: string;
  platform?: 'youtube';
}
