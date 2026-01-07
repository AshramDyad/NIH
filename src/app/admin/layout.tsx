import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import AdminHeader from '@/components/admin/AdminHeader';
import AdminSidebar from '@/components/admin/AdminSidebar';
import AdminLayoutWrapper from './AdminLayoutWrapper';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  // Verify admin role
  const { data: roleData } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (!roleData || roleData.role !== 'admin') {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <AdminLayoutWrapper userEmail={user.email || ''}>
        {children}
      </AdminLayoutWrapper>
    </div>
  );
}
