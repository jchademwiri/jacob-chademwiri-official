import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema';

// Create the connection with explicit configuration to avoid parsing issues
const client = postgres({
  host: 'aws-0-us-east-1.pooler.supabase.com',
  port: 5432,
  database: 'postgres',
  username: 'postgres.gukqwdcifmegcbeikxis',
  password: 'DGi3u1CEYzQEHuXq',
  ssl: 'require',
  prepare: false,
  max: 1,
  idle_timeout: 20,
  connect_timeout: 10,
});
export const db = drizzle(client, { schema });

// Export types
export type Database = typeof db;
export * from './schema';
