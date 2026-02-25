-- Create media_coverage table
CREATE TABLE public.media_coverage (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url text NOT NULL,
  image_key text NOT NULL DEFAULT '',
  caption text,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at timestamp with time zone DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Set up Row Level Security (RLS)
ALTER TABLE public.media_coverage ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Allow public read access to media_coverage"
  ON public.media_coverage FOR SELECT
  USING (true);

-- Allow authenticated admins full access
CREATE POLICY "Allow authenticated admins full access to media_coverage"
    ON public.media_coverage FOR ALL
    TO authenticated
    USING (true)
    WITH CHECK (true);

-- Create updated_at trigger
CREATE TRIGGER handle_media_coverage_updated_at
    BEFORE UPDATE ON public.media_coverage
    FOR EACH ROW
    EXECUTE PROCEDURE public.handle_updated_at();

-- Notify PostgREST to reload schema
NOTIFY pgrst, 'reload schema';
