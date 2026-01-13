"use client";

import { logout } from "@/app/actions/auth";
import { Dropdown } from "@/components/ui/Dropdown";
import { LogOut, User, Menu } from "lucide-react";

interface AdminHeaderProps {
  user: {
    email: string;
  };
  onMenuToggle?: () => void;
}



export default function AdminHeader({ user, onMenuToggle }: AdminHeaderProps) {

  return (
    <header className="sticky top-0 z-30 flex h-20 justify-end items-center gap-4 border-b border-gray-200 px-4 lg:px-8 bg-white">
      {/* Hamburger Menu Button - visible on tablet/mobile only */}
      <button
        type="button"
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-lg bg-primary transition-colors cursor-pointer"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-white" />
      </button>

      {/* Page Title */}
      {/* <div className="flex-1">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
          {pageTitle}
        </h1>
      </div> */}

      {/* Profile Avatar with Dropdown */}
      <Dropdown
        align="right"
        trigger={
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
            <User className="w-5 h-5 text-white" />
          </div>
        }
      >
        <div className="py-2">
          {/* User Email */}
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="text-sm font-medium text-gray-900 truncate">
              {user.email}
            </p>
          </div>

          {/* Logout Button */}
          <div className="p-2">
            <form action={logout}>
              <button
                type="submit"
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </form>
          </div>
        </div>
      </Dropdown>
    </header>
  );
}
