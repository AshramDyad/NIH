-- Create associate_center_applications table for storing Associate Center form submissions
-- Admin can approve/reject applications from the admin panel
-- Approved applications are copied to institution_members table

CREATE TABLE IF NOT EXISTS associate_center_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  
  -- Form fields matching the uploaded image
  hospital_name TEXT NOT NULL,
  full_address TEXT NOT NULL,
  district TEXT NOT NULL,
  state TEXT NOT NULL,
  phone_number TEXT NOT NULL,
  email TEXT NOT NULL,
  website TEXT,
  administrator_name TEXT NOT NULL,
  doctor_name TEXT NOT NULL,
  phone_no TEXT NOT NULL,
  hospital_opening_hour TEXT NOT NULL,
  weekly_holidays JSONB, -- Array of selected days: ["Monday", "Wednesday"]
  special_features TEXT,
  other_information TEXT,
  
  -- Logo file
  logo_url TEXT NOT NULL,
  
  -- Workflow fields
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  institution_id INTEGER, -- FK to institution_members.id when approved
  rejection_reason TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Add table comment
COMMENT ON TABLE associate_center_applications IS 'Stores Associate Center applications submitted from public form';

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_associate_center_apps_status ON associate_center_applications(status);
CREATE INDEX IF NOT EXISTS idx_associate_center_apps_created_at ON associate_center_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_associate_center_apps_institution_id ON associate_center_applications(institution_id);

-- Enable Row Level Security
ALTER TABLE associate_center_applications ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert new applications (public forms)
CREATE POLICY "Allow public insert" ON associate_center_applications
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Policy: Allow authenticated users to select all applications
CREATE POLICY "Allow authenticated select" ON associate_center_applications
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to update applications
CREATE POLICY "Allow authenticated update" ON associate_center_applications
  FOR UPDATE
  TO authenticated
  USING (true);

-- Policy: Allow authenticated users to delete applications
CREATE POLICY "Allow authenticated delete" ON associate_center_applications
  FOR DELETE
  TO authenticated
  USING (true);
