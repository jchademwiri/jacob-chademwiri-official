import { drizzle } from 'drizzle-orm/postgres-js';

const db = drizzle(process.env.DATABASE_URL!);

// Export types
export type Database = typeof db;
export * from './schema';
