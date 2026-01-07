'use server';

import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

// Validation schema
const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

export async function login(formData: FormData) {
  // Validate input
  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    redirect('/login?error=Invalid+credentials');
  }

  const { email, password } = validatedFields.data;

  const supabase = await createClient();

  // Sign in user
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect('/login?error=' + encodeURIComponent(error.message));
  }

  // Check if user has admin role
  const { data: roleData, error: roleError } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', data.user.id)
    .single();

  if (roleError || !roleData || roleData.role !== 'admin') {
    await supabase.auth.signOut();
    redirect('/login?error=Access+denied.+Admin+only.');
  }

  revalidatePath('/admin');
  redirect('/admin');
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath('/admin');
  redirect('/login');
}
