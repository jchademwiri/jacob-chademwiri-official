-- Enable Row Level Security on all tables
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;
ALTER TABLE insights ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE media ENABLE ROW LEVEL SECURITY;
ALTER TABLE case_study_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE insight_tags ENABLE ROW LEVEL SECURITY;

-- Users table policies
-- Allow users to read their own data
CREATE POLICY "Users can view own profile" ON users
  FOR SELECT USING (auth.uid()::text = id::text);

-- Allow users to update their own data
CREATE POLICY "Users can update own profile" ON users
  FOR UPDATE USING (auth.uid()::text = id::text);

-- Allow admins to view all users
CREATE POLICY "Admins can view all users" ON users
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Case Studies policies
-- Allow public read access to published case studies
CREATE POLICY "Public can view published case studies" ON case_studies
  FOR SELECT USING (status = 'published');

-- Allow admins to manage all case studies
CREATE POLICY "Admins can manage case studies" ON case_studies
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Insights policies
-- Allow public read access to published insights
CREATE POLICY "Public can view published insights" ON insights
  FOR SELECT USING (status = 'published');

-- Allow admins to manage all insights
CREATE POLICY "Admins can manage insights" ON insights
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Tags policies
-- Allow public read access to tags
CREATE POLICY "Public can view tags" ON tags
  FOR SELECT USING (true);

-- Allow admins to manage tags
CREATE POLICY "Admins can manage tags" ON tags
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Media policies
-- Allow public read access to media
CREATE POLICY "Public can view media" ON media
  FOR SELECT USING (true);

-- Allow admins to manage media
CREATE POLICY "Admins can manage media" ON media
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Junction table policies
-- Case Study Tags
CREATE POLICY "Public can view case study tags" ON case_study_tags
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage case study tags" ON case_study_tags
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Insight Tags
CREATE POLICY "Public can view insight tags" ON insight_tags
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage insight tags" ON insight_tags
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id::text = auth.uid()::text 
      AND role = 'admin'
    )
  );

-- Create a function to automatically set updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at columns
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_case_studies_updated_at BEFORE UPDATE ON case_studies
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_insights_updated_at BEFORE UPDATE ON insights
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();