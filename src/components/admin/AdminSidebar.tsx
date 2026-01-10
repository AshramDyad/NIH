"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  LayoutDashboard,
  Settings,
  Users,
  Calendar,
  BarChart3,
  Image as ImageIcon,
} from "lucide-react";

interface AdminSidebarProps {
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
}

const menuItems = [
  { href: "/admin", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/admin/hero-banner", icon: ImageIcon, label: "Hero Banner" },
  { href: "/admin/lifetime-members", icon: Users, label: "Lifetime Members" },
  { href: "/admin/events", icon: Calendar, label: "Events" },
  { href: "/admin/analytics", icon: BarChart3, label: "Analytics" },
  { href: "/admin/settings", icon: Settings, label: "Settings" },
];

export default function AdminSidebar({
  isCollapsed,
  setIsCollapsed,
}: AdminSidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`
        hidden md:flex flex-col h-screen bg-white border-r border-gray-200
        transition-all duration-300
        ${isCollapsed ? "w-16" : "w-64"}
      `}
    >
      <div className="flex h-20  items-center justify-between px-4 gap-2 border-b border-gray-200">
        {!isCollapsed && (
          <Image
            src="/logo.png"
            alt="NIH Logo"
            width={190}
            height={100}
            className="object-cover"
          />
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded hover:bg-gray-100 transition-colors cursor-pointer"
        >
          {isCollapsed ? (
            <ChevronRight className="w-5 h-5" />
          ) : (
            <ChevronLeft className="w-5 h-5" />
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
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
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
  );
}
