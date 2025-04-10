# System Requirements for Jacob Chademwiri Portfolio

## Overview

This document outlines the system requirements for the **Jacob Chademwiri Personal Portfolio Website**, built with **Next.js**, **Drizzle ORM**, **PostgreSQL**, and **Supabase/Neon** for the database. The portfolio will feature a **public-facing website** and an **admin dashboard** for managing blog posts, work experience, skills, projects, contact messages, and a subscriber list.

---

## 1. User Stories

### 1.1 Public Website

- **User Story 1: Home Page**

  - **As a visitor**, I want to see an introduction with a summary of **Jacob Chademwiri**'s skills, projects, and blog highlights on the homepage.
  - **Acceptance Criteria**:
    - Hero section with Jacob Chademwiri's name, profession, and a short intro.
    - Featured projects with images and links to detailed project pages.
    - Latest blog posts with preview text.

- **User Story 2: About Me**

  - **As a visitor**, I want to read a bio that blends professional background with personal details.
  - **Acceptance Criteria**:
    - Display professional summary pulled from LinkedIn.
    - Include a section about personal interests and goals (e.g., giraffes).

- **User Story 3: Work Experience**

  - **As a visitor**, I want to see a detailed timeline or card-based view of **Jacob Chademwiri**'s work experience.
  - **Acceptance Criteria**:
    - Display company name, job title, dates, location, and detailed description.
    - Use a design similar to LinkedIn’s "Experience" section.

- **User Story 4: Skills & Projects**

  - **As a visitor**, I want to see a categorized list of skills and key projects, each with details and images.
  - **Acceptance Criteria**:
    - Skills grouped by category (e.g., Tendering, Web Development).
    - Projects with title, description, and links to the project page.

- **User Story 5: Blog Section**

  - **As a visitor**, I want to read blog posts written by **Jacob Chademwiri** on topics related to career development and web development.
  - **Acceptance Criteria**:
    - Display a list of blog posts with titles, excerpts, and publish dates.
    - Full blog post pages with the rich text content (using Novel).
    - **Comment Section/Guestbook**: Allow users to post comments or leave messages on blog posts.
      - Each blog post will have its own comment section, where visitors can add comments.
      - **Acceptance Criteria**:
        - Comment form with fields: name, email, and comment text.
        - Admin can moderate comments from the dashboard (approve, delete).
        - Display comments below the blog post, sorted by date.

- **User Story 6: Contact Page**

  - **As a visitor**, I want to contact **Jacob Chademwiri** directly via a contact form.
  - **Acceptance Criteria**:
    - A contact form with fields: name, email, message.
    - Submit button to send the message directly to the admin (CMS).

- **User Story 7: Subscriber List**
  - **As a visitor**, I want to subscribe to the newsletter to get blog updates.
  - **Acceptance Criteria**:
    - A subscription form to collect name and email.
    - Confirmation email for new subscribers (using Resend).

---

### 1.2 Admin Dashboard

- **User Story 1: Admin Login**

  - **As an admin**, I want to securely log into the dashboard to manage content.
  - **Acceptance Criteria**:
    - Login system integrated with **Supabase** for authentication.
    - Admin role-based access to manage various sections.

- **User Story 2: Manage Work Experience**

  - **As an admin**, I want to manage the work experience section, including adding, editing, and deleting entries.
  - **Acceptance Criteria**:
    - Form to add/edit job titles, descriptions, dates, company name, and location.
    - Display the experience data on the public site automatically.

- **User Story 3: Manage Skills & Projects**

  - **As an admin**, I want to manage my skills and projects, including adding, editing, and removing them.
  - **Acceptance Criteria**:
    - Ability to categorize skills and projects.
    - CRUD functionality for skills and projects.

- **User Story 4: Manage Blog Posts**

  - **As an admin**, I want to write and manage blog posts using a rich text editor (Novel).
  - **Acceptance Criteria**:
    - Create, edit, delete blog posts.
    - Option to publish/unpublish posts.
    - Option to add images, links, and formatted content.

- **User Story 5: Manage Contact Messages**

  - **As an admin**, I want to view and reply to customer inquiries sent through the contact form.
  - **Acceptance Criteria**:
    - Admin should be able to view incoming contact form messages.
    - Admin can reply directly from the dashboard.

- **User Story 6: Manage Subscriber List**

  - **As an admin**, I want to view a list of all subscribers and manage their email addresses.
  - **Acceptance Criteria**:
    - List of email addresses with the option to export them.
    - Ability to send newsletters (integration with Resend).

- **User Story 7: Manage Comments**
  - **As an admin**, I want to manage the comments/guestbook section on blog posts.
  - **Acceptance Criteria**:
    - View all comments submitted on blog posts.
    - Ability to approve, delete, or mark comments as spam.
    - Ability to respond to comments directly.

---

## 2. Functional Requirements

1. **Frontend (Public Website)**:

   - **Responsive Design**: Ensure the website is optimized for mobile, tablet, and desktop.
   - **SEO**: Use dynamic routing and meta tags for each page (e.g., work experience, blog).
   - **Static Site Generation (SSG)**: Pages like Home, About Me, and Contact should use SSG for better performance.
   - **Comment Section**: Implement a comment section at the end of each blog post where visitors can submit comments.

2. **Backend (Admin Dashboard)**:

   - **CRUD Operations**: Admin dashboard should allow creating, updating, and deleting content for experience, skills, projects, blog posts, contact messages, subscribers, and comments.
   - **Database**: PostgreSQL via **Supabase** or **Neon** as the database provider.
   - **ORM**: Use **Drizzle ORM** to manage database interactions, ensuring type safety.
   - **Authentication**: Admin login via Supabase Auth.
   - **Real-Time Updates**: Changes made in the admin dashboard should instantly reflect on the public-facing site.

3. **Messaging and Notifications**:

   - **Contact Form Integration**: Submit contact messages to the admin dashboard.
   - **Email Notifications**: Send automatic email notifications for new subscribers or contact form submissions (using **Resend**).

4. **Content Management**:

   - **Rich Text Editor**: Use **Novel** for writing and managing blog posts and work experience descriptions.
   - **Dynamic Routes**: Each blog post should have its own URL with rich content from the CMS.

5. **Comment System**:
   - **Comment Form**: Users can submit their name, email, and comment for each blog post.
   - **Comment Moderation**: Admin can moderate comments and approve or delete them from the dashboard.

---

## 3. Non-Functional Requirements

- **Performance**: The system should load quickly, and static pages should be pre-rendered for faster loading times.
- **Security**: Ensure that the admin panel is protected by **secure authentication** using **Supabase**.
- **Scalability**: As the portfolio grows, the system should be able to scale to support more blog posts, projects, and experiences.
- **Availability**: The site should have 99.9% uptime with **Vercel** for hosting and **Supabase** for database services.

---

## 4. Technology Stack

- **Frontend**: Next.js 15, Tailwind CSS v4
- **Backend**: Drizzle ORM, PostgreSQL (Supabase or Neon)
- **Hosting**: Vercel
- **Authentication**: Supabase Auth
- **Rich Text Editor**: Novel
- **Email Service**: Resend (for contact messages and subscription notifications)
- **Comment System**: Implement comment functionality with a database table to store comments.

---

## 5. SEO & Sitemap Recommendations

### 5.1 SEO Best Practices

- **Title Tags**: Ensure every page has a unique and descriptive title tag. Example:
  - `Home` → "Jacob Chademwiri | Web Developer & Tendering Expert"
  - `Blog Post` → "Blog Post Title | Jacob Chademwiri Portfolio"
- **Meta Descriptions**: Each page should have a meta description that is brief, but includes keywords relevant to the page's content.
- **Image Alt Text**: Add descriptive `alt` tags for all images to improve accessibility and SEO.
- **Canonical URLs**: Add canonical links to blog posts and other pages to avoid duplicate content.
- **Schema Markup**: Implement JSON-LD structured data (e.g., `WebPage`, `Article`, `Person`) to improve how your pages appear in search results.

- **Sitemap Generation**:
  - Generate a sitemap dynamically for the blog posts, projects, and all key pages.
  - Ensure that each URL is included in the sitemap with a change frequency and priority.

### 5.2 Sitemap Implementation

- Use the `next-sitemap` library in Next.js to generate a sitemap for all public pages.

  - Add `next-sitemap` to the `next.config.js` file:

    ```js
    module.exports = {
      siteUrl: 'https://Jacobc.co.za', // replace with your actual domain
      generateRobotsTxt: true,
      sitemapSize: 5000
    };
    ```

- After setting up the sitemap, it will automatically update when new pages are added or existing pages are modified.
- Add the sitemap URL to `robots.txt`:
  - `/public/robots.txt` should include:
    ```
    User-agent: *
    Disallow: /admin
    Sitemap: https://Jacobc.co.za/sitemap.xml
    ```

---

## 6. Instructions for Building the MVP

1. **Setup Project**

   - Initialize a Next.js 15 project and configure Tailwind CSS v4 for styling.
   - Set up **Supabase** or **Neon** as your database provider and **Drizzle ORM** for database interaction.
   - Configure **Supabase Auth** for admin login functionality.

2. **Frontend Development**

   - Build responsive pages for Home, About Me, Work Experience, Skills & Projects, Blog, and Contact.
   - Implement **Static Site Generation (SSG)** for content-heavy pages (e.g., Home, About, Blog).
   - Set up a dynamic blog post system with rich text content powered by **Novel**.
   - Implement comment sections for each blog post with moderation capabilities.

3. **Admin Dashboard**

   - Build a secure admin panel where you can manage Work Experience, Skills & Projects, Blog Posts, and Subscribers.
   - Integrate CRUD functionality for all sections.
   - Set up contact form and subscriber management features with email notifications (using **Resend**).
   - Implement comment management system for the admin.

4. **Database Structure**

   - Design a relational database schema with tables for **work_experience**, **skills**, **projects**, **blog_posts**, **subscribers**, **contact_messages**, and **comments**.

5. **Deploy the Application**
   - Deploy the Next.js frontend on **Vercel**.
   - Set up the backend with **Supabase** (or **Neon**) for hosting and database services.

---

This updated **Markdown (MD)** file now includes the **SEO** and **Sitemap** requirements. It is ready to be imported into **GitHub Copilot** or your GitHub repository for easy access during development.

Let me know if you need further modifications!
