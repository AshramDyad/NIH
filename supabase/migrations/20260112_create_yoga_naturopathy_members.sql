-- Create yoga_naturopathy_members table for storing approved YPM members
-- Members are added here when admin approves their application

CREATE TABLE IF NOT EXISTS yoga_naturopathy_members (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  member_number TEXT NOT NULL UNIQUE,
  image_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add table comment
COMMENT ON TABLE yoga_naturopathy_members IS 'Stores approved Yoga/Naturopathy professional members';

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_yoga_naturopathy_members_member_number ON yoga_naturopathy_members(member_number);
CREATE INDEX IF NOT EXISTS idx_yoga_naturopathy_members_created_at ON yoga_naturopathy_members(created_at);

-- Enable Row Level Security
ALTER TABLE yoga_naturopathy_members ENABLE ROW LEVEL SECURITY;

-- Policy: Allow public to read members (for public page display)
CREATE POLICY "Allow public select" ON yoga_naturopathy_members
  FOR SELECT
  TO public
  USING (true);

-- Policy: Allow authenticated users to insert members
CREATE POLICY "Allow authenticated insert" ON yoga_naturopathy_members
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Policy: Allow authenticated users to update members
CREATE POLICY "Allow authenticated update" ON yoga_naturopathy_members
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to delete members
CREATE POLICY "Allow authenticated delete" ON yoga_naturopathy_members
  FOR DELETE
  TO authenticated
  USING (true);
