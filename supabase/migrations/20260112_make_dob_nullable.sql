-- Make date_of_birth column nullable in lifetime_members table
-- This allows adding members without requiring a date of birth

ALTER TABLE lifetime_members 
ALTER COLUMN date_of_birth DROP NOT NULL;
