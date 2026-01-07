-- Create lifetime_members table
-- Stores lifetime member details with references to images stored in Cloudflare R2
-- Only stores image URLs, not actual image data

CREATE TABLE IF NOT EXISTS public.lifetime_members (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    member_number TEXT NOT NULL UNIQUE,
    date_of_birth DATE NOT NULL,
    image_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_lifetime_members_name ON public.lifetime_members(name);
CREATE INDEX IF NOT EXISTS idx_lifetime_members_member_number ON public.lifetime_members(member_number);
CREATE INDEX IF NOT EXISTS idx_lifetime_members_created_at ON public.lifetime_members(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.lifetime_members ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Anonymous users can view lifetime members (for public page)
CREATE POLICY "Public can view lifetime members"
ON public.lifetime_members
FOR SELECT
TO anon
USING (true);

-- RLS Policy: Authenticated users can view lifetime members
CREATE POLICY "Authenticated users can view lifetime members"
ON public.lifetime_members
FOR SELECT
TO authenticated
USING (true);

-- RLS Policy: Admin users can insert lifetime members
CREATE POLICY "Admin users can insert lifetime members"
ON public.lifetime_members
FOR INSERT
TO authenticated
WITH CHECK (
    EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = auth.uid()
        AND role = 'admin'
    )
);

-- RLS Policy: Admin users can update lifetime members
CREATE POLICY "Admin users can update lifetime members"
ON public.lifetime_members
FOR UPDATE
TO authenticated
USING (
    EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = auth.uid()
        AND role = 'admin'
    )
);

-- RLS Policy: Admin users can delete lifetime members
CREATE POLICY "Admin users can delete lifetime members"
ON public.lifetime_members
FOR DELETE
TO authenticated
USING (
    EXISTS (
        SELECT 1
        FROM public.user_roles
        WHERE user_id = auth.uid()
        AND role = 'admin'
    )
);
