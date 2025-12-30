/**
 * Footer Configuration Types
 * Type-safe interfaces for dynamic footer content across different pages
 */

export interface FooterLink {
  href?: string;
  label: string;
}

export interface FooterSection {
  links: FooterLink[];
}

export interface ContactInfo {
  address: string;
  phone: string[];
  email: string;
}

export interface FooterConfig {
  quickLinks?: FooterSection;
  admissions?: FooterSection;
  contact?: ContactInfo;
}
