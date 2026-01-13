-- Make qualification_url nullable in ypm_applications table
-- This allows applications to be submitted without a qualification document

ALTER TABLE ypm_applications 
  ALTER COLUMN qualification_url DROP NOT NULL;

-- Add comment explaining the change
COMMENT ON COLUMN ypm_applications.qualification_url IS 'Optional: URL to qualification document stored in R2. Can be NULL if not provided.';
