import { NextResponse } from 'next/server';
import { type NextRequest } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow /admin/login to pass through without authentication checks
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const supabase = await createClient();
    
    // Use getUser() for secure authentication verification (recommended by Supabase)
    const { data: { user }, error } = await supabase.auth.getUser();
    
    if (error || !user) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // Check admin role
    const { data: roleData } = await supabase
      .from('user_roles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    if (!roleData || roleData.role !== 'admin') {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  // Match all routes except static files and images
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
