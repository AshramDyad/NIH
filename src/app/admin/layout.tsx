import { createClient } from '@/lib/supabase/server';
import AdminLayoutWrapper from './AdminLayoutWrapper';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Authentication and role checking are handled by middleware (src/proxy.ts)
  // This layout only handles rendering UI (header, sidebar, content)

  // Get the actual logged-in user's email
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  const userEmail = user?.email || 'Unknown';

  return (
    <AdminLayoutWrapper userEmail={userEmail}>
      {children}
    </AdminLayoutWrapper>
  );
}
