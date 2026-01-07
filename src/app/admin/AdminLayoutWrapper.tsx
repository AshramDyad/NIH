'use client';

import { useState } from 'react';
import { Menu } from 'lucide-react';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';

interface AdminLayoutWrapperProps {
  children: React.ReactNode;
  userEmail: string;
}

export default function AdminLayoutWrapper({
  children,
  userEmail,
}: AdminLayoutWrapperProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <AdminHeader user={{ email: userEmail }} />

      <div className="flex">
        {/* Mobile menu button - only visible on small screens */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="lg:hidden fixed bottom-6 left-6 z-50 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

        {/* Mobile sidebar overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <main className="flex-1 p-6 lg:pl-[272px]">
          {children}
        </main>
      </div>
    </>
  );
}
