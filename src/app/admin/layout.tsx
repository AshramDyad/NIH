import AdminLayoutWrapper from './AdminLayoutWrapper';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Authentication and role checking are handled by middleware (src/proxy.ts)
  // This layout only handles rendering UI (header, sidebar, content)

  return (
    <AdminLayoutWrapper userEmail="admin@example.com">
      {children}
    </AdminLayoutWrapper>
  );
}
