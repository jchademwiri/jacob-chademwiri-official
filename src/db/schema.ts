import {
  pgTable,
  text,
  uuid,
  timestamp,
  boolean,
  date,
  integer,
  jsonb,
  unique
} from 'drizzle-orm/pg-core';

export const blogPosts = pgTable('blog_posts', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  content: jsonb('content').notNull().default({}),
  slug: text('slug').notNull().unique(),
  excerpt: text('excerpt'),
  featuredImage: text('featured_image'),
  published: boolean('published').default(false),
  userId: uuid('user_id').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  viewCount: integer('view_count').default(0)
});

export const blogPostViews = pgTable('blog_post_views', {
  id: uuid('id').primaryKey().defaultRandom(),
  blogId: uuid('blog_id')
    .notNull()
    .references(() => blogPosts.id, { onDelete: 'cascade' }),
  userId: uuid('user_id'),
  viewedAt: timestamp('viewed_at', { withTimezone: true }).defaultNow(),
  ipAddress: text('ip_address')
});

export const blogSeo = pgTable('blog_seo', {
  id: uuid('id').primaryKey().defaultRandom(),
  blogId: uuid('blog_id')
    .notNull()
    .references(() => blogPosts.id, { onDelete: 'cascade' }),
  metaTitle: text('meta_title'),
  metaDescription: text('meta_description'),
  keywords: text('keywords'),
  ogTitle: text('og_title'),
  ogDescription: text('og_description'),
  ogImage: text('og_image'),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow()
});

export const employmentEntries = pgTable('employment_entries', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').notNull(),
  company: text('company').notNull(),
  position: text('position').notNull(),
  startDate: date('start_date').notNull(),
  endDate: date('end_date'),
  current: boolean('current').default(false),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});

export const pageViews = pgTable('page_views', {
  id: uuid('id').primaryKey().defaultRandom(),
  pagePath: text('page_path').notNull(),
  userId: uuid('user_id'),
  visitedAt: timestamp('visited_at', { withTimezone: true }).defaultNow(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent')
});

export const promotions = pgTable('promotions', {
  id: uuid('id').primaryKey().defaultRandom(),
  employmentId: uuid('employment_id')
    .notNull()
    .references(() => employmentEntries.id),
  title: text('title').notNull(),
  date: date('date').notNull(),
  description: text('description'),
  createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow()
});

export const userRoles = pgTable(
  'user_roles',
  {
    id: uuid('id').primaryKey().defaultRandom(),
    userId: uuid('user_id').notNull(),
    role: text('role').notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow()
  },
  table => ({
    uniqueUserRole: unique().on(table.userId, table.role)
  })
);

// Type inference exports
export type BlogPost = typeof blogPosts.$inferSelect;
export type NewBlogPost = typeof blogPosts.$inferInsert;

export type BlogPostView = typeof blogPostViews.$inferSelect;
export type NewBlogPostView = typeof blogPostViews.$inferInsert;

export type BlogSeo = typeof blogSeo.$inferSelect;
export type NewBlogSeo = typeof blogSeo.$inferInsert;

export type EmploymentEntry = typeof employmentEntries.$inferSelect;
export type NewEmploymentEntry = typeof employmentEntries.$inferInsert;

export type PageView = typeof pageViews.$inferSelect;
export type NewPageView = typeof pageViews.$inferInsert;

export type Promotion = typeof promotions.$inferSelect;
export type NewPromotion = typeof promotions.$inferInsert;

export type UserRole = typeof userRoles.$inferSelect;
export type NewUserRole = typeof userRoles.$inferInsert;
