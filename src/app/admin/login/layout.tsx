// This layout overrides the parent admin layout for the login page
// It does not include header, sidebar, or authentication checks
// allowing unauthenticated users to access the login form

export default function AdminLoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}
