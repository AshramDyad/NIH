"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  LayoutDashboard,
  Settings,
  Users,
  Calendar,
  BarChart3,
  Image as ImageIcon,
  Video,
  Building2,
  UserPlus,
} from "lucide-react";

interface AdminSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  isMobileOpen?: boolean;
  onMobileClose?: () => void;
}

const menuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/hero-banner", icon: ImageIcon, label: "Hero Banner" },
  {
    href: "/admin/ypm-applications",
    icon: UserPlus,
    label: "YPM Applications",
  },
  {
    href: "/admin/video-testimonials",
    icon: Video,
    label: "Video Testimonials",
  },
  { href: "/admin/lifetime-members", icon: Users, label: "Lifetime Members" },
  {
    href: "/admin/members-institutions",
    icon: Building2,
    label: "Institution Members",
  },
  { href: "/admin/events", icon: Calendar, label: "Events" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export default function AdminSidebar({
  isCollapsed,
  setIsCollapsed,
  isMobileOpen = false,
  onMobileClose,
}: AdminSidebarProps) {
  const pathname = usePathname();

  const handleNavClick = () => {
    // Close mobile sidebar when navigating
    if (onMobileClose) {
      onMobileClose();
    }
  };

  return (
    <>
      {/* Desktop Sidebar - visible on md and above */}
      <aside
        className={`
          hidden lg:flex flex-col h-screen bg-white border-r border-gray-200
          transition-all duration-300
          ${isCollapsed ? "w-16" : "w-64"}
        `}
      >
        <div className="flex h-20 items-center justify-between px-4 gap-2 border-b border-gray-200">
          {!isCollapsed && (
            <div className="relative w-[190px] h-[50px]">
              <Image
                src="/logo.png"
                alt="NIH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 rounded-lg hover:bg-primary hover:text-white transition-colors cursor-pointer"
          >
            {isCollapsed ? (
              <ChevronRight className="size-5" />
            ) : (
              <ChevronLeft className="size-5" />
            )}
          </button>
        </div>

        <nav
          className={`flex-1 p-2 space-y-2 ${
            isCollapsed ? "flex flex-col items-center" : ""
          }`}
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  flex items-center rounded-lg transition-colors
                  ${
                    isCollapsed
                      ? "justify-center w-10 h-10 p-2"
                      : "gap-3 px-4 py-3 w-full"
                  }
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:bg-primary/10"
                  }
                `}
                title={isCollapsed ? item.label : undefined}
              >
                <item.icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Mobile Sidebar Overlay - visible below md */}
      <div
        className={`
          fixed inset-0 z-50 lg:hidden
          transition-opacity duration-300
          ${
            isMobileOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={onMobileClose} />

        {/* Sidebar Panel */}
        <aside
          className={`
            absolute top-0 left-0 h-full w-72 bg-white shadow-xl
            transition-transform duration-300 ease-out
            ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Mobile Sidebar Header */}
          <div className="flex h-20 items-center justify-between px-4 border-b border-gray-200">
            <div className="relative w-[160px] h-[45px]">
              <Image
                src="/logo.png"
                alt="NIH Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <button
              onClick={onMobileClose}
              className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 p-2 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }
                  `}
                >
                  <item.icon className="w-5 h-5 shrink-0" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
}
