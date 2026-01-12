-- Create institution_members table
CREATE TABLE IF NOT EXISTS public.institution_members (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    url TEXT NOT NULL,
    image_url TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Add updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_institution_members_updated_at
BEFORE UPDATE ON public.institution_members
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS
ALTER TABLE public.institution_members ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public read access
CREATE POLICY "Allow public read access"
ON public.institution_members
FOR SELECT
TO public
USING (true);

-- Allow authenticated users to manage data
CREATE POLICY "Allow authenticated users to manage data"
ON public.institution_members
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);
