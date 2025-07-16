-- Supabase Storage Policies
-- Run these SQL commands in your Supabase SQL Editor to set up storage policies

-- Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Media bucket policies
CREATE POLICY "Public read access for media" ON storage.objects
FOR SELECT USING (bucket_id = 'media');

CREATE POLICY "Authenticated users can upload to media" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'media' 
  AND auth.role() = 'authenticated'
);

CREATE POLICY "Users can update own media files" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'media' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

CREATE POLICY "Users can delete own media files" ON storage.objects
FOR DELETE USING (
  bucket_id = 'media' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Case Studies bucket policies
CREATE POLICY "Public read access for case-studies" ON storage.objects
FOR SELECT USING (bucket_id = 'case-studies');

CREATE POLICY "Admin users can manage case-studies" ON storage.objects
FOR ALL USING (
  bucket_id = 'case-studies' 
  AND EXISTS (
    SELECT 1 FROM public.users 
    WHERE users.id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- Insights bucket policies
CREATE POLICY "Public read access for insights" ON storage.objects
FOR SELECT USING (bucket_id = 'insights');

CREATE POLICY "Admin users can manage insights" ON storage.objects
FOR ALL USING (
  bucket_id = 'insights' 
  AND EXISTS (
    SELECT 1 FROM public.users 
    WHERE users.id = auth.uid() 
    AND users.role = 'admin'
  )
);

-- Avatars bucket policies
CREATE POLICY "Public read access for avatars" ON storage.objects
FOR SELECT USING (bucket_id = 'avatars');

CREATE POLICY "Users can manage own avatars" ON storage.objects
FOR ALL USING (
  bucket_id = 'avatars' 
  AND auth.uid()::text = (storage.foldername(name))[1]
);

-- Storage bucket policies for bucket operations
CREATE POLICY "Allow public bucket listing" ON storage.buckets
FOR SELECT USING (true);

-- Optional: Create a function to help with file organization
CREATE OR REPLACE FUNCTION storage.get_file_folder(file_path text)
RETURNS text
LANGUAGE sql
IMMUTABLE
AS $$
  SELECT CASE 
    WHEN file_path ~ '^[^/]+/' THEN split_part(file_path, '/', 1)
    ELSE ''
  END;
$$;