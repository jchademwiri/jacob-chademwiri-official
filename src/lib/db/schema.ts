import {
  pgTable,
  text,
  timestamp,
  boolean,
  integer,
  jsonb,
  uuid,
  varchar,
  pgEnum,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Enums
export const userRoleEnum = pgEnum('user_role', ['admin', 'user']);
export const contentStatusEnum = pgEnum('content_status', [
  'draft',
  'published',
]);
export const serviceTypeEnum = pgEnum('service_type', [
  'tender_management',
  'project_coordination',
  'web_development',
  'it_solutions',
]);

// Users table
export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  role: userRoleEnum('role').notNull().default('user'),
  metadata: jsonb('metadata'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Case Studies table
export const caseStudies = pgTable('case_studies', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  serviceType: serviceTypeEnum('service_type').notNull(),
  clientName: varchar('client_name', { length: 255 }),
  projectScope: text('project_scope').notNull(),
  description: text('description').notNull(),
  content: jsonb('content').notNull(), // TipTap JSON content
  excerpt: text('excerpt').notNull(),
  featuredImage: varchar('featured_image', { length: 500 }),
  challenge: text('challenge').notNull(),
  solution: text('solution').notNull(),
  results: text('results').notNull(),
  roiMetrics: jsonb('roi_metrics'), // Array of strings
  technologies: jsonb('technologies'), // Array of strings
  projectDuration: varchar('project_duration', { length: 100 }),
  budgetRange: varchar('budget_range', { length: 100 }),
  projectUrl: varchar('project_url', { length: 500 }),
  isFeatured: boolean('is_featured').notNull().default(false),
  status: contentStatusEnum('status').notNull().default('draft'),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Insights (Blog Posts) table
export const insights = pgTable('insights', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: varchar('title', { length: 255 }).notNull(),
  slug: varchar('slug', { length: 255 }).notNull().unique(),
  content: jsonb('content').notNull(), // TipTap JSON content
  excerpt: text('excerpt').notNull(),
  featuredImage: varchar('featured_image', { length: 500 }),
  authorId: uuid('author_id')
    .notNull()
    .references(() => users.id),
  readingTime: integer('reading_time').notNull(), // in minutes
  isFeatured: boolean('is_featured').notNull().default(false),
  status: contentStatusEnum('status').notNull().default('draft'),
  publishedAt: timestamp('published_at'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
});

// Tags table
export const tags = pgTable('tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: varchar('name', { length: 100 }).notNull().unique(),
  slug: varchar('slug', { length: 100 }).notNull().unique(),
  description: text('description'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Media table
export const media = pgTable('media', {
  id: uuid('id').primaryKey().defaultRandom(),
  fileName: varchar('file_name', { length: 255 }).notNull(),
  filePath: varchar('file_path', { length: 500 }).notNull(),
  fileSize: integer('file_size').notNull(),
  fileType: varchar('file_type', { length: 100 }).notNull(),
  altText: text('alt_text'),
  caption: text('caption'),
  uploadedBy: uuid('uploaded_by')
    .notNull()
    .references(() => users.id),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Junction tables for many-to-many relationships
export const caseStudyTags = pgTable('case_study_tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  caseStudyId: uuid('case_study_id')
    .notNull()
    .references(() => caseStudies.id, { onDelete: 'cascade' }),
  tagId: uuid('tag_id')
    .notNull()
    .references(() => tags.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

export const insightTags = pgTable('insight_tags', {
  id: uuid('id').primaryKey().defaultRandom(),
  insightId: uuid('insight_id')
    .notNull()
    .references(() => insights.id, { onDelete: 'cascade' }),
  tagId: uuid('tag_id')
    .notNull()
    .references(() => tags.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at').notNull().defaultNow(),
});

// Relations
export const usersRelations = relations(users, ({ many }) => ({
  insights: many(insights),
  media: many(media),
}));

export const caseStudiesRelations = relations(caseStudies, ({ many }) => ({
  tags: many(caseStudyTags),
}));

export const insightsRelations = relations(insights, ({ one, many }) => ({
  author: one(users, {
    fields: [insights.authorId],
    references: [users.id],
  }),
  tags: many(insightTags),
}));

export const tagsRelations = relations(tags, ({ many }) => ({
  caseStudies: many(caseStudyTags),
  insights: many(insightTags),
}));

export const mediaRelations = relations(media, ({ one }) => ({
  uploadedBy: one(users, {
    fields: [media.uploadedBy],
    references: [users.id],
  }),
}));

export const caseStudyTagsRelations = relations(caseStudyTags, ({ one }) => ({
  caseStudy: one(caseStudies, {
    fields: [caseStudyTags.caseStudyId],
    references: [caseStudies.id],
  }),
  tag: one(tags, {
    fields: [caseStudyTags.tagId],
    references: [tags.id],
  }),
}));

export const insightTagsRelations = relations(insightTags, ({ one }) => ({
  insight: one(insights, {
    fields: [insightTags.insightId],
    references: [insights.id],
  }),
  tag: one(tags, {
    fields: [insightTags.tagId],
    references: [tags.id],
  }),
}));
