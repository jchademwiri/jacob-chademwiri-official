# Drizzle ORM Learning Guide

A comprehensive guide to mastering Drizzle ORM - the TypeScript-first ORM that keeps you close to SQL.

## Table of Contents

1. [Introduction & Philosophy](#introduction--philosophy)
2. [Getting Started](#getting-started)
3. [Schema Definition](#schema-definition)
4. [Database Connection](#database-connection)
5. [Basic CRUD Operations](#basic-crud-operations)
6. [Advanced Querying](#advanced-querying)
7. [Relationships](#relationships)
8. [Migrations](#migrations)
9. [Best Practices](#best-practices)
10. [Real-World Patterns](#real-world-patterns)
11. [Practice Exercises](#practice-exercises)

## Introduction & Philosophy

Drizzle ORM is built on these core principles:

- **SQL-like**: Queries look and feel like SQL
- **TypeScript-first**: Full type safety from schema to queries
- **Lightweight**: Minimal runtime overhead
- **Flexible**: Works with multiple databases (PostgreSQL, MySQL, SQLite)

### Why Drizzle?

- No magic strings - everything is typed
- Predictable SQL generation
- Great developer experience with autocomplete
- Easy to debug (you can see the SQL)

## Getting Started

### Installation

```bash
# Core packages
npm install drizzle-orm
npm install -D drizzle-kit

# Database driver (choose one)
npm install pg @types/pg              # PostgreSQL
npm install mysql2                    # MySQL
npm install better-sqlite3            # SQLite
```

### Project Structure

```
src/
├── db/
│   ├── schema.ts      # Database schema
│   ├── index.ts       # Database connection
│   └── migrations/    # Migration files
├── queries/           # Query functions
└── types/            # TypeScript types
```

## Schema Definition

### Basic Table Schema

```typescript
import {
  pgTable,
  serial,
  varchar,
  timestamp,
  boolean,
} from 'drizzle-orm/pg-core';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  createdAt: timestamp('created_at').defaultNow(),
  isActive: boolean('is_active').default(true),
});
```

### Column Types & Modifiers

```typescript
// Text types
varchar('name', { length: 50 });
text('description');
char('code', { length: 3 });

// Numeric types
integer('count');
serial('id');
decimal('price', { precision: 10, scale: 2 });
real('rating');

// Date/Time
timestamp('created_at');
date('birth_date');
time('start_time');

// Other types
boolean('is_active');
json('metadata');
uuid('uuid')
  // Modifiers
  .notNull()
  .unique()
  .default(value)
  .primaryKey();
```

### Enums

```typescript
import { pgEnum } from 'drizzle-orm/pg-core';

export const roleEnum = pgEnum('role', ['admin', 'user', 'moderator']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  role: roleEnum('role').default('user'),
});
```

## Database Connection

### PostgreSQL Connection

```typescript
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as schema from './schema';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
```

### Environment Configuration

```typescript
// db/config.ts
export const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'myapp',
};
```

## Basic CRUD Operations

### Create (Insert)

```typescript
// Single insert
const newUser = await db
  .insert(users)
  .values({
    name: 'John Doe',
    email: 'john@example.com',
  })
  .returning();

// Multiple insert
const newUsers = await db
  .insert(users)
  .values([
    { name: 'Alice', email: 'alice@example.com' },
    { name: 'Bob', email: 'bob@example.com' },
  ])
  .returning();

// Insert with conflict handling
await db
  .insert(users)
  .values({ name: 'Jane', email: 'jane@example.com' })
  .onConflictDoNothing()
  .returning();
```

### Read (Select)

```typescript
// Select all
const allUsers = await db.select().from(users);

// Select specific columns
const userNames = await db
  .select({ id: users.id, name: users.name })
  .from(users);

// Select with conditions
const activeUsers = await db
  .select()
  .from(users)
  .where(eq(users.isActive, true));

// Select single record
const user = await db.select().from(users).where(eq(users.id, 1)).limit(1);
```

### Update

```typescript
// Update with condition
await db.update(users).set({ name: 'Updated Name' }).where(eq(users.id, 1));

// Update multiple fields
await db
  .update(users)
  .set({
    name: 'New Name',
    isActive: false,
    updatedAt: new Date(),
  })
  .where(eq(users.id, 1))
  .returning();
```

### Delete

```typescript
// Delete with condition
await db.delete(users).where(eq(users.id, 1));

// Delete multiple
await db.delete(users).where(eq(users.isActive, false));
```

## Advanced Querying

### Where Conditions

```typescript
import { eq, ne, gt, gte, lt, lte, like, ilike, and, or, not, isNull, isNotNull, inArray } from 'drizzle-orm';

// Comparison operators
.where(eq(users.id, 1))
.where(gt(users.age, 18))
.where(like(users.name, 'John%'))
.where(ilike(users.email, '%@gmail.com'))

// Logical operators
.where(and(
  eq(users.isActive, true),
  gt(users.age, 18)
))

.where(or(
  eq(users.role, 'admin'),
  eq(users.role, 'moderator')
))

// Null checks
.where(isNull(users.deletedAt))
.where(isNotNull(users.profilePicture))

// Array operations
.where(inArray(users.id, [1, 2, 3]))
```

### Joins

```typescript
// Inner join
const usersWithPosts = await db
  .select()
  .from(users)
  .innerJoin(posts, eq(users.id, posts.authorId));

// Left join
const usersWithOptionalPosts = await db
  .select({
    user: users,
    post: posts,
  })
  .from(users)
  .leftJoin(posts, eq(users.id, posts.authorId));

// Multiple joins
const fullData = await db
  .select()
  .from(users)
  .leftJoin(posts, eq(users.id, posts.authorId))
  .leftJoin(comments, eq(posts.id, comments.postId));
```

### Aggregations

```typescript
import { count, sum, avg, max, min } from 'drizzle-orm';

// Count records
const userCount = await db.select({ count: count() }).from(users);

// Group by with aggregation
const postsByUser = await db
  .select({
    userId: posts.authorId,
    postCount: count(),
    avgViews: avg(posts.views),
  })
  .from(posts)
  .groupBy(posts.authorId);
```

### Sorting and Limiting

```typescript
import { desc, asc } from 'drizzle-orm';

// Order by
const sortedUsers = await db
  .select()
  .from(users)
  .orderBy(desc(users.createdAt));

// Multiple order by
const users = await db
  .select()
  .from(users)
  .orderBy(users.name, desc(users.createdAt));

// Limit and offset
const paginatedUsers = await db.select().from(users).limit(10).offset(20);
```

## Relationships

### One-to-Many

```typescript
// Schema
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }),
});

export const posts = pgTable('posts', {
  id: serial('id').primaryKey(),
  title: varchar('title', { length: 255 }),
  authorId: integer('author_id').references(() => users.id),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  author: one(users, {
    fields: [posts.authorId],
    references: [users.id],
  }),
}));

// Query with relations
const usersWithPosts = await db.query.users.findMany({
  with: {
    posts: true,
  },
});
```

### Many-to-Many

```typescript
// Junction table
export const usersToTags = pgTable('users_to_tags', {
  userId: integer('user_id').references(() => users.id),
  tagId: integer('tag_id').references(() => tags.id),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  usersToTags: many(usersToTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  usersToTags: many(usersToTags),
}));

export const usersToTagsRelations = relations(usersToTags, ({ one }) => ({
  user: one(users, {
    fields: [usersToTags.userId],
    references: [users.id],
  }),
  tag: one(tags, {
    fields: [usersToTags.tagId],
    references: [tags.id],
  }),
}));
```

## Migrations

### Drizzle Kit Configuration

```typescript
// drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
```

### Migration Commands

```bash
# Generate migration
npx drizzle-kit generate:pg

# Push schema to database (development)
npx drizzle-kit push:pg

# Run migrations
npx drizzle-kit migrate:pg

# View schema
npx drizzle-kit introspect:pg
```

### Custom Migration

```sql
-- migrations/0001_add_user_preferences.sql
CREATE TABLE user_preferences (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  theme VARCHAR(50) DEFAULT 'light',
  notifications BOOLEAN DEFAULT true
);
```

## Best Practices

### 1. Schema Organization

```typescript
// Separate schemas by domain
export * from './users';
export * from './posts';
export * from './comments';

// Use consistent naming
export const userProfiles = pgTable('user_profiles', {
  // snake_case for database columns
  userId: integer('user_id'),
  // camelCase for TypeScript properties
});
```

### 2. Query Organization

```typescript
// queries/users.ts
export const getUserById = async (id: number) => {
  return await db.select().from(users).where(eq(users.id, id)).limit(1);
};

export const searchUsers = async (filters?: {
  name?: string;
  email?: string;
  isActive?: boolean;
}) => {
  return await db
    .select()
    .from(users)
    .where(
      and(
        filters?.name ? ilike(users.name, `%${filters.name}%`) : undefined,
        filters?.email ? ilike(users.email, `%${filters.email}%`) : undefined,
        filters?.isActive !== undefined
          ? eq(users.isActive, filters.isActive)
          : undefined
      )
    );
};
```

### 3. Type Safety

```typescript
// Generate types from schema
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

// Use in functions
const createUser = async (userData: NewUser): Promise<User> => {
  const [user] = await db.insert(users).values(userData).returning();
  return user;
};
```

### 4. Error Handling

```typescript
const safeCreateUser = async (userData: NewUser) => {
  try {
    return await db.insert(users).values(userData).returning();
  } catch (error) {
    if (error.code === '23505') {
      // Unique constraint violation
      throw new Error('User with this email already exists');
    }
    throw error;
  }
};
```

## Real-World Patterns

### 1. Repository Pattern

```typescript
export class UserRepository {
  constructor(private db: typeof db) {}

  async findById(id: number): Promise<User | null> {
    const [user] = await this.db
      .select()
      .from(users)
      .where(eq(users.id, id))
      .limit(1);
    return user || null;
  }

  async create(userData: NewUser): Promise<User> {
    const [user] = await this.db.insert(users).values(userData).returning();
    return user;
  }

  async update(id: number, updates: Partial<NewUser>): Promise<User | null> {
    const [user] = await this.db
      .update(users)
      .set(updates)
      .where(eq(users.id, id))
      .returning();
    return user || null;
  }
}
```

### 2. Pagination Helper

```typescript
interface PaginationOptions {
  page: number;
  limit: number;
}

interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
}

export const paginate = async <T>(
  query: any,
  options: PaginationOptions
): Promise<PaginatedResult<T>> => {
  const { page, limit } = options;
  const offset = (page - 1) * limit;

  const [data, totalResult] = await Promise.all([
    query.limit(limit).offset(offset),
    db.select({ count: count() }).from(query),
  ]);

  const total = totalResult[0].count;
  const totalPages = Math.ceil(total / limit);

  return {
    data,
    total,
    page,
    totalPages,
  };
};
```

### 3. Transaction Wrapper

```typescript
export const withTransaction = async <T>(
  callback: (tx: typeof db) => Promise<T>
): Promise<T> => {
  return await db.transaction(async (tx) => {
    return await callback(tx);
  });
};

// Usage
const transferFunds = async (fromId: number, toId: number, amount: number) => {
  return await withTransaction(async (tx) => {
    await tx
      .update(accounts)
      .set({ balance: sql`balance - ${amount}` })
      .where(eq(accounts.id, fromId));

    await tx
      .update(accounts)
      .set({ balance: sql`balance + ${amount}` })
      .where(eq(accounts.id, toId));
  });
};
```

## Practice Exercises

### Exercise 1: Blog System

Create a schema for a blog with users, posts, and comments. Include:

- User authentication fields
- Post content and metadata
- Comment threading (parent/child relationships)
- Tags (many-to-many with posts)

### Exercise 2: E-commerce Queries

Build queries for:

- Product search with filters (price, category, rating)
- Order history with pagination
- Inventory management
- Sales analytics with aggregations

### Exercise 3: Social Media Features

Implement:

- Friend/follower relationships
- Post feed generation
- Like/reaction system
- Notification system

### Exercise 4: Performance Optimization

Practice:

- Using indexes in schema
- Optimizing N+1 query problems
- Implementing caching strategies
- Query performance analysis

## Additional Resources

### Documentation

- [Official Drizzle Docs](https://orm.drizzle.team/)
- [Drizzle Kit CLI](https://orm.drizzle.team/kit-docs/overview)
- [Database Drivers](https://orm.drizzle.team/docs/get-started)

### Community

- [Discord Community](https://discord.gg/drizzle)
- [GitHub Examples](https://github.com/drizzle-team/drizzle-orm/tree/main/examples)
- [Blog Posts & Tutorials](https://orm.drizzle.team/learn)

### Next Steps

1. Build a real project using Drizzle
2. Contribute to open source projects using Drizzle
3. Explore advanced features like custom column types
4. Learn about database optimization and indexing strategies

Remember: The best way to learn Drizzle is to build something real. Start small, iterate, and gradually incorporate more advanced patterns as you become comfortable with the basics.
