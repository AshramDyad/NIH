'use client';

import { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { usePathname } from 'next/navigation';

interface AdminLayoutWrapperProps {
  children: React.ReactNode;
  userEmail: string;
}

export default function AdminLayoutWrapper({
  children,
  userEmail,
}: AdminLayoutWrapperProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const pathname = usePathname();
  const isAuthRoute = pathname === '/admin/login';

  if (isAuthRoute) {
    return <div className="min-h-screen bg-gray-100">{children}</div>;
  }

  return (
    <div
      className={`
        grid min-h-screen bg-gray-100 transition-all duration-300
        ${isSidebarCollapsed ? 'lg:grid-cols-[64px_1fr]' : 'lg:grid-cols-[256px_1fr]'}
      `}
    >
      <AdminSidebar
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        onMobileClose={() => setIsMobileSidebarOpen(false)}
      />

      <div className="flex h-screen min-w-0 flex-col bg-white">
        <AdminHeader
          user={{ email: userEmail }}
          onMenuToggle={() => setIsMobileSidebarOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">
          <div className="lg:p-6 p-4">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
