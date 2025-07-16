/**
 * Supabase Storage Setup
 * Script to create buckets and configure security policies
 */

import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { STORAGE_BUCKETS } from './config';

// Load environment variables
config({ path: '.env.local' });

// Use service role key for admin operations
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

if (!supabaseUrl) {
  throw new Error('NEXT_PUBLIC_SUPABASE_URL is required');
}

if (!supabaseServiceKey) {
  throw new Error('SUPABASE_SERVICE_ROLE_KEY is required');
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});

/**
 * Create storage buckets
 */
async function createBuckets() {
  console.log('Creating storage buckets...');

  const buckets = [
    {
      id: STORAGE_BUCKETS.MEDIA,
      name: STORAGE_BUCKETS.MEDIA,
      public: true,
      allowedMimeTypes: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/gif',
      ],
      fileSizeLimit: 10485760, // 10MB
    },
    {
      id: STORAGE_BUCKETS.CASE_STUDIES,
      name: STORAGE_BUCKETS.CASE_STUDIES,
      public: true,
      allowedMimeTypes: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/gif',
        'application/pdf',
      ],
      fileSizeLimit: 10485760, // 10MB
    },
    {
      id: STORAGE_BUCKETS.INSIGHTS,
      name: STORAGE_BUCKETS.INSIGHTS,
      public: true,
      allowedMimeTypes: [
        'image/jpeg',
        'image/jpg',
        'image/png',
        'image/webp',
        'image/gif',
      ],
      fileSizeLimit: 10485760, // 10MB
    },
    {
      id: STORAGE_BUCKETS.AVATARS,
      name: STORAGE_BUCKETS.AVATARS,
      public: true,
      allowedMimeTypes: ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'],
      fileSizeLimit: 5242880, // 5MB
    },
  ];

  for (const bucket of buckets) {
    try {
      const { data, error } = await supabase.storage.createBucket(bucket.id, {
        public: bucket.public,
        allowedMimeTypes: bucket.allowedMimeTypes,
        fileSizeLimit: bucket.fileSizeLimit,
      });

      if (error) {
        if (error.message.includes('already exists')) {
          console.log(`✓ Bucket ${bucket.id} already exists`);
        } else {
          console.error(
            `✗ Failed to create bucket ${bucket.id}:`,
            error.message
          );
        }
      } else {
        console.log(`✓ Created bucket ${bucket.id}`);
      }
    } catch (error) {
      console.error(`✗ Error creating bucket ${bucket.id}:`, error);
    }
  }
}

/**
 * Display policy setup instructions
 */
function displayPolicyInstructions() {
  console.log('\n📋 Storage Policy Setup Instructions:');
  console.log('1. Open your Supabase Dashboard');
  console.log('2. Go to SQL Editor');
  console.log('3. Run the SQL commands from: src/lib/storage/policies.sql');
  console.log('4. This will set up the necessary Row Level Security policies');
  console.log(
    '\nAlternatively, you can copy and paste the policies manually from the policies.sql file.'
  );
}

/**
 * Setup storage buckets and display policy instructions
 */
export async function setupStorage() {
  try {
    console.log('🚀 Setting up Supabase Storage...');

    await createBuckets();
    displayPolicyInstructions();

    console.log('\n✅ Storage bucket setup completed successfully!');
    console.log(
      "⚠️  Don't forget to run the SQL policies from policies.sql file"
    );
  } catch (error) {
    console.error('❌ Storage setup failed:', error);
    throw error;
  }
}

// Run setup if called directly
if (require.main === module) {
  setupStorage()
    .then(() => {
      console.log('Storage setup completed');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Storage setup failed:', error);
      process.exit(1);
    });
}
