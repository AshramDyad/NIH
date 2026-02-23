-- Create nih_gallery table
CREATE TABLE IF NOT EXISTS public.nih_gallery (
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
ALTER TABLE public.nih_gallery ENABLE ROW LEVEL SECURITY;

-- Create policies
-- Allow public access for viewing active images
CREATE POLICY "Allow public read access for active gallery images"
ON public.nih_gallery
FOR SELECT
USING (is_active = true);

-- Allow authenticated users (admins) full access
CREATE POLICY "Allow admin full access to nih_gallery"
ON public.nih_gallery
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create updated_at trigger (assuming handle_updated_at function exists as per other migrations)
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.nih_gallery
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
