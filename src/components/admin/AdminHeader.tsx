'use client';

import { logout } from '@/app/actions/auth';
import { LogOut, User } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface AdminHeaderProps {
  user: {
    email: string;
  };
}

const pageTitles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/upload': 'Upload Files',
  '/admin/lifetime-members': 'Lifetime Members',
  '/admin/events': 'Events',
  '/admin/analytics': 'Analytics',
  '/admin/settings': 'Settings',
};

export default function AdminHeader({ user }: AdminHeaderProps) {
  const pathname = usePathname();
  const pageTitle = pageTitles[pathname] || 'Dashboard';

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-gray-200 px-4 shadow-sm lg:h-24 lg:px-8 bg-white">
      <div className="w-full flex-1">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-gray-900">
            NIH Admin - {pageTitle}
          </h1>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-gray-600">
          <User className="w-5 h-5" />
          <span className="text-sm">{user.email}</span>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </form>
      </div>
    </header>
  );
}
