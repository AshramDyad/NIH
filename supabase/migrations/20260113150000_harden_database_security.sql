-- Database Hardening & Automation Migration
-- Created: 2026-01-13
-- Purpose: Tighten RLS security and automate updated_at timestamps

-- 1. Enable moddatetime extension
CREATE EXTENSION IF NOT EXISTS moddatetime SCHEMA extensions;

-- 2. Create a robust is_admin() check function
-- SECURITY DEFINER allows it to check the user_roles table regardless of the caller's RLS
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN AS $$
BEGIN
  RETURN (
    SELECT EXISTS (
      SELECT 1
      FROM public.user_roles
      WHERE user_id = auth.uid()
      AND role = 'admin'
    )
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

COMMENT ON FUNCTION public.is_admin IS 'Checks if the currently authenticated user has the admin role.';

-- 3. Standardize updated_at triggers using moddatetime
-- Apply to tables that track modifications

-- ypm_applications
CREATE TRIGGER handle_updated_at_ypm_applications
  BEFORE UPDATE ON public.ypm_applications
  FOR EACH ROW
  EXECUTE PROCEDURE extensions.moddatetime (updated_at);

-- yoga_naturopathy_members
CREATE TRIGGER handle_updated_at_yoga_naturopathy_members
  BEFORE UPDATE ON public.yoga_naturopathy_members
  FOR EACH ROW
  EXECUTE PROCEDURE extensions.moddatetime (updated_at);

-- institution_members (already has a custom trigger, standardizing to moddatetime)
DROP TRIGGER IF EXISTS update_institution_members_updated_at ON public.institution_members;
CREATE TRIGGER handle_updated_at_institution_members
  BEFORE UPDATE ON public.institution_members
  FOR EACH ROW
  EXECUTE PROCEDURE extensions.moddatetime (updated_at);

-- lifetime_members
CREATE TRIGGER handle_updated_at_lifetime_members
  BEFORE UPDATE ON public.lifetime_members
  FOR EACH ROW
  EXECUTE PROCEDURE extensions.moddatetime (updated_at);

-- 4. Harden RLS Policies

-- Hero Banners: Only Admins can Manage
DROP POLICY IF EXISTS "Allow admin management" ON public.hero_banners;
CREATE POLICY "Admins can manage hero banners"
  ON public.hero_banners
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Video Testimonials: Only Admins can Manage
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.video_testimonials;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.video_testimonials;
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.video_testimonials;
CREATE POLICY "Admins can manage video testimonials"
  ON public.video_testimonials
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Institution Members: Only Admins can Manage
DROP POLICY IF EXISTS "Allow authenticated users to manage data" ON public.institution_members;
CREATE POLICY "Admins can manage institution members"
  ON public.institution_members
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Yoga Naturopathy Members: Only Admins can Manage
DROP POLICY IF EXISTS "Allow authenticated insert" ON public.yoga_naturopathy_members;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.yoga_naturopathy_members;
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.yoga_naturopathy_members;
CREATE POLICY "Admins can manage yoga naturopathy members"
  ON public.yoga_naturopathy_members
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- YPM Applications: Public can Insert, Admins can Manage (Select/Update/Delete)
DROP POLICY IF EXISTS "Allow authenticated select" ON public.ypm_applications;
DROP POLICY IF EXISTS "Allow authenticated update" ON public.ypm_applications;
DROP POLICY IF EXISTS "Allow authenticated delete" ON public.ypm_applications;
CREATE POLICY "Admins can manage ypm applications"
  ON public.ypm_applications
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());

-- Lifetime Members: Standardize to use is_admin()
DROP POLICY IF EXISTS "Admin users can insert lifetime members" ON public.lifetime_members;
DROP POLICY IF EXISTS "Admin users can update lifetime members" ON public.lifetime_members;
DROP POLICY IF EXISTS "Admin users can delete lifetime members" ON public.lifetime_members;
CREATE POLICY "Admins can manage lifetime members"
  ON public.lifetime_members
  FOR ALL
  TO authenticated
  USING (is_admin())
  WITH CHECK (is_admin());
