-- Fix: Restore public INSERT for YPM Applications
-- Purpose: Allow anonymous users to submit membership applications

-- Ensure Row Level Security is enabled
ALTER TABLE public.ypm_applications ENABLE ROW LEVEL SECURITY;

-- 1. Explicitly allow public users to INSERT into ypm_applications
-- We don't allow SELECT/UPDATE/DELETE for public users.
-- SELECT 'id' is still needed for the .returning() clause in some clients, 
-- but using createAdminClient (Service Role) bypasses this requirement.
-- Adding this as a robust fallback.

DROP POLICY IF EXISTS "Allow public insert" ON public.ypm_applications;
CREATE POLICY "Allow public insert"
  ON public.ypm_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

COMMENT ON POLICY "Allow public insert" ON public.ypm_applications IS 'Allows anonymous public users to submit applications.';
