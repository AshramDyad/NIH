-- Create ypm_applications table for storing YPM membership form submissions
-- Admin can approve/reject applications from the admin panel

CREATE TABLE IF NOT EXISTS ypm_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  gender TEXT NOT NULL,
  country TEXT NOT NULL,
  state TEXT NOT NULL,
  city TEXT NOT NULL,
  address TEXT NOT NULL,
  pincode TEXT NOT NULL,
  qualification_url TEXT NOT NULL,
  photo_url TEXT NOT NULL,
  referred_by TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  member_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add table comment
COMMENT ON TABLE ypm_applications IS 'Stores YPM membership applications submitted from public form';

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_ypm_applications_status ON ypm_applications(status);
CREATE INDEX IF NOT EXISTS idx_ypm_applications_created_at ON ypm_applications(created_at);

-- Enable Row Level Security
ALTER TABLE ypm_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert new applications (public forms)
-- Using 'public' role which covers both anon and authenticated
CREATE POLICY "Allow public insert" ON ypm_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Allow authenticated users to select all applications
CREATE POLICY "Allow authenticated select" ON ypm_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update applications
CREATE POLICY "Allow authenticated update" ON ypm_applications
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to delete applications
CREATE POLICY "Allow authenticated delete" ON ypm_applications
  FOR DELETE
  TO authenticated
  USING (true);

