// Desktop navigation link
export interface NavLink {
  name: string;
  href: string;
}

// Dropdown item for CTA buttons
export interface DropdownItem {
  name: string;
  href: string;
  isExternal?: boolean;
}

// CTA Button with optional dropdown
export interface CTAButton {
  name: string;
  href: string;
  icon: React.ReactNode;
  hasDropdown?: boolean;
  dropdownItems?: DropdownItem[];
  isExternal?: boolean;
}

// Mobile menu item child (can have nested children)
export interface MobileMenuChild {
  name: string;
  href?: string;
  hasChildren?: true;
  children?: readonly { name: string; href: string }[];
}

// Mobile menu item (supports nesting)
export interface MobileMenuItem {
  id: string;
  name: string;
  href?: string;
  hasChildren?: true;
  children?: readonly MobileMenuChild[];
}

// Complete header configuration
export interface HeaderConfig {
  navLinks?: NavLink[];
  ctaButtons?: CTAButton[];
  mobileMenuItems?: MobileMenuItem[];
}
