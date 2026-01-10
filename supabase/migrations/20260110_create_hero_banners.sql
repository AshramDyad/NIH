-- Create hero_banners table
CREATE TABLE IF NOT EXISTS hero_banners (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_url TEXT NOT NULL,
  display_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE hero_banners ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone (public) to read active banners
CREATE POLICY "Allow public read access"
  ON hero_banners FOR SELECT
  USING (true);

-- Policy: Allow authenticated admins to manage (Insert, Update, Delete) banners
CREATE POLICY "Allow admin management"
  ON hero_banners FOR ALL
  USING (auth.role() = 'authenticated');
