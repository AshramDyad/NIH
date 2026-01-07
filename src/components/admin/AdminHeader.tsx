'use client';

import { logout } from '@/app/actions/auth';
import { LogOut, User } from 'lucide-react';

interface AdminHeaderProps {
  user: {
    email: string;
  };
}

export default function AdminHeader({ user }: AdminHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900">
          NIH Admin
        </h1>
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
