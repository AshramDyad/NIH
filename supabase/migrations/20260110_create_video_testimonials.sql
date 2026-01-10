-- Create video_testimonials table for storing YouTube video links
-- Used by the International Conference page to display video testimonials

CREATE TABLE IF NOT EXISTS video_testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  youtube_url TEXT NOT NULL,
  video_id TEXT NOT NULL,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add comment to table
COMMENT ON TABLE video_testimonials IS 'Stores YouTube video testimonials for the International Conference page';

-- Create index on display_order for faster ordering queries
CREATE INDEX IF NOT EXISTS idx_video_testimonials_display_order ON video_testimonials(display_order);

-- Create index on is_active for filtering active videos
CREATE INDEX IF NOT EXISTS idx_video_testimonials_is_active ON video_testimonials(is_active);

-- Enable Row Level Security
ALTER TABLE video_testimonials ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public read access for active videos
CREATE POLICY "Allow public read access" ON video_testimonials
  FOR SELECT
  USING (is_active = true);

-- Policy: Allow authenticated users to insert
CREATE POLICY "Allow authenticated insert" ON video_testimonials
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to update
CREATE POLICY "Allow authenticated update" ON video_testimonials
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to delete
CREATE POLICY "Allow authenticated delete" ON video_testimonials
  FOR DELETE
  TO authenticated
  USING (true);
