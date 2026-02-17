-- Create international_gallery table
CREATE TABLE IF NOT EXISTS public.international_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    image_url TEXT NOT NULL,
    image_key TEXT NOT NULL,
    caption TEXT,
    display_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.international_gallery ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public access for viewing active images
CREATE POLICY "Allow public read access for active gallery images"
ON public.international_gallery
FOR SELECT
USING (is_active = true);

-- Allow authenticated users (admins) full access
CREATE POLICY "Allow admin full access to international_gallery"
ON public.international_gallery
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.international_gallery
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
