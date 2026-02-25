-- Create photo_gallery table
CREATE TABLE IF NOT EXISTS public.photo_gallery (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    image_url TEXT NOT NULL,
    image_key TEXT NOT NULL,
    title TEXT,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.photo_gallery ENABLE ROW LEVEL SECURITY;

-- Create policies

-- Allow public read access for active gallery images
CREATE POLICY "Allow public read access for active photo gallery images"
ON public.photo_gallery
FOR SELECT
USING (is_active = true);

-- Allow authenticated users (admins) full access
CREATE POLICY "Allow admin full access to photo_gallery"
ON public.photo_gallery
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Create updated_at trigger
CREATE TRIGGER set_updated_at
BEFORE UPDATE ON public.photo_gallery
FOR EACH ROW
EXECUTE FUNCTION public.handle_updated_at();
