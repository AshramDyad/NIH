-- Create active_members table
-- Stores active member details with references to images stored in Cloudflare R2

CREATE TABLE IF NOT EXISTS public.active_members (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    member_number TEXT NOT NULL UNIQUE,
    date_of_birth DATE,
    image_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_active_members_name ON public.active_members(name);
CREATE INDEX IF NOT EXISTS idx_active_members_member_number ON public.active_members(member_number);
CREATE INDEX IF NOT EXISTS idx_active_members_created_at ON public.active_members(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.active_members ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Public can view active members
DROP POLICY IF EXISTS "Public can view active members" ON public.active_members;
CREATE POLICY "Public can view active members"
ON public.active_members
FOR SELECT
TO public
USING (true);

-- RLS Policy: Admin can manage active members
-- Using the is_admin() security definer function for efficiency
DROP POLICY IF EXISTS "Admin can manage active members" ON public.active_members;
CREATE POLICY "Admin can manage active members"
ON public.active_members
FOR ALL
TO authenticated
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Automated updated_at trigger
-- Using the moddatetime extension enabled in previous migration
DROP TRIGGER IF EXISTS handle_updated_at_active_members ON public.active_members;
CREATE TRIGGER handle_updated_at_active_members
  BEFORE UPDATE ON public.active_members
  FOR EACH ROW
  EXECUTE PROCEDURE extensions.moddatetime (updated_at);

COMMENT ON TABLE public.active_members IS 'Stores the NIH Active Members details.';
