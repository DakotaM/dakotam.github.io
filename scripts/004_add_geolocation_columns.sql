-- Add geolocation columns from IPInfo API
-- These columns store country, continent, and ASN information

DO $$ 
BEGIN
  -- Add country column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'country'
  ) THEN
    ALTER TABLE page_views ADD COLUMN country TEXT;
  END IF;

  -- Add country_code column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'country_code'
  ) THEN
    ALTER TABLE page_views ADD COLUMN country_code TEXT;
  END IF;

  -- Add continent column
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'continent'
  ) THEN
    ALTER TABLE page_views ADD COLUMN continent TEXT;
  END IF;

  -- Add asn column (Autonomous System Number)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'asn'
  ) THEN
    ALTER TABLE page_views ADD COLUMN asn TEXT;
  END IF;

  -- Add as_name column (Organization name)
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'page_views' AND column_name = 'as_name'
  ) THEN
    ALTER TABLE page_views ADD COLUMN as_name TEXT;
  END IF;
END $$;

-- Create indexes for the geolocation columns
CREATE INDEX IF NOT EXISTS idx_page_views_country ON page_views(country);
CREATE INDEX IF NOT EXISTS idx_page_views_country_code ON page_views(country_code);
CREATE INDEX IF NOT EXISTS idx_page_views_continent ON page_views(continent);
