# Jacob Chademwiri Portfolio Website Documentation

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Getting Started](#getting-started)
3. [Project Structure](#project-structure)
4. [Technology Stack](#technology-stack)
5. [Development Guide](#development-guide)
6. [Deployment](#deployment)
7. [Content Management](#content-management)
8. [Performance & SEO](#performance--seo)
9. [Contributing](#contributing)
10. [Troubleshooting](#troubleshooting)

## 🎯 Project Overview

This is a modern, responsive portfolio website for Jacob Chademwiri, a Full-Stack Web Developer and Project Manager based in Centurion, South Africa. The website showcases professional experience, projects, skills, and provides a platform for potential clients and employers to connect.

### Key Features

- **Modern Design**: Clean, professional interface with dark/light theme support
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Performance Optimized**: Built with Next.js 15 for optimal loading speeds
- **SEO Friendly**: Comprehensive meta tags and structured data
- **Interactive Components**: Smooth animations and user-friendly interactions
- **Content Management**: Easy-to-update data structure for projects and information
- **Authentication System**: Admin panel for content management
- **Analytics Integration**: Vercel Analytics and Speed Insights

### Target Audience

- **Primary**: Business owners and startups seeking web development services
- **Secondary**: Hiring managers and recruiters looking for full-stack developers
- **Tertiary**: Fellow developers and professional network connections

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- pnpm (recommended) or npm
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/jacob-chademwiri-official.git
   cd jacob-chademwiri-official
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.local.example .env.local
   ```

   Configure the following variables in `.env.local`:

   ```env
   # Add your environment variables here
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. **Run the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production version
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint for code quality

## 📁 Project Structure

```
jacob-chademwiri-official/
├── docs/                          # Documentation files
│   ├── README.md                  # Main documentation
│   ├── 00 Index.md               # Content strategy
│   ├── 01 plan.md                # Development plan
│   └── 02 linkedin.md            # LinkedIn strategy
├── public/                        # Static assets
│   ├── images/                    # Image assets
│   ├── resumes/                   # Downloadable resumes
│   └── *.png, *.jpg, *.svg       # Icons and images
├── src/                           # Source code
│   ├── app/                       # Next.js App Router
│   │   ├── (admin)/              # Admin routes
│   │   ├── (auth)/               # Authentication routes
│   │   ├── (site)/               # Main site routes
│   │   ├── globals.css           # Global styles
│   │   └── layout.tsx            # Root layout
│   ├── components/                # React components
│   │   ├── ui/                   # Reusable UI components
│   │   ├── sections/             # Page sections
│   │   ├── projects/             # Project-related components
│   │   └── *.tsx                 # Individual components
│   ├── data/                      # Static data and content
│   │   ├── projects.ts           # Project information
│   │   ├── about.ts              # About page content
│   │   └── *.ts                  # Other data files
│   ├── hooks/                     # Custom React hooks
│   ├── lib/                       # Utility functions
│   └── middleware.ts              # Next.js middleware
├── .env.local                     # Environment variables
├── components.json                # shadcn/ui configuration
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies and scripts
├── tsconfig.json                  # TypeScript configuration
└── README.md                      # Basic project info
```

## 🛠️ Technology Stack

### Core Technologies

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Reusable component library
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library

### Additional Libraries

- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Theme**: next-themes for dark/light mode
- **Animations**: CSS transitions and transforms
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner for toast notifications
- **Analytics**: Vercel Analytics and Speed Insights

### Development Tools

- **Package Manager**: pnpm
- **Linting**: ESLint with Next.js configuration
- **Code Formatting**: Prettier (configured via .prettierrc.json)
- **Version Control**: Git with conventional commits

## 💻 Development Guide

### Component Architecture

The project follows a modular component architecture:

#### UI Components (`src/components/ui/`)

Reusable, unstyled components from shadcn/ui:

- Button, Card, Dialog, Input, etc.
- Consistent styling and behavior
- Accessible by default

#### Section Components (`src/components/sections/`)

Page-specific sections:

- Hero, About, Projects, Contact
- Composed of UI components
- Contains business logic

#### Feature Components (`src/components/`)

Specialized functionality:

- Navigation, Footer, Theme Toggle
- Interactive elements
- Complex state management

### Data Management

Content is managed through TypeScript files in `src/data/`:

```typescript
// Example: src/data/projects.ts
export const projects = [
  {
    id: 'project-1',
    title: 'Project Title',
    description: 'Project description...',
    technologies: ['Next.js', 'TypeScript'],
    // ... other properties
  },
];
```

### Styling Guidelines

- Use Tailwind CSS utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and typography
- Use CSS custom properties for theme colors

### Adding New Content

1. **Projects**: Update `src/data/projects.ts`
2. **About Information**: Modify `src/data/about.ts`
3. **Skills**: Update relevant data files
4. **Images**: Add to `public/images/` directory

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository**

   - Import project to Vercel
   - Connect GitHub repository

2. **Configure Environment Variables**

   - Add production environment variables
   - Set up domain configuration

3. **Deploy**
   - Automatic deployments on push to main branch
   - Preview deployments for pull requests

### Manual Deployment

1. **Build the project**

   ```bash
   pnpm build
   ```

2. **Start production server**
   ```bash
   pnpm start
   ```

### Environment Variables

Production environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://jacobc.co.za
# Add other production variables
```

## 📝 Content Management

### Updating Projects

Edit `src/data/projects.ts`:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  description: 'Brief description',
  longDescription: 'Detailed description...',
  technologies: ['Next.js', 'TypeScript'],
  category: 'web-development',
  featured: true,
  images: ['/images/project-screenshot.jpg'],
  liveUrl: 'https://project-url.com',
  githubUrl: 'https://github.com/username/repo',
  challenges: 'What challenges were solved...',
  results: 'What results were achieved...'
}
```

### Adding Images

1. Add images to `public/images/`
2. Use optimized formats (WebP, AVIF)
3. Include alt text for accessibility
4. Reference in data files: `/images/filename.jpg`

### Updating Personal Information

Modify relevant files in `src/data/`:

- `about.ts` - Personal story and background
- `currentPositions.ts` - Current employment
- `constraints.ts` - Skills and technologies

## ⚡ Performance & SEO

### Performance Optimizations

- **Next.js Image Optimization**: Automatic image optimization
- **Code Splitting**: Automatic route-based code splitting
- **Turbopack**: Fast development builds
- **Static Generation**: Pre-rendered pages where possible

### SEO Features

- **Meta Tags**: Comprehensive meta tag configuration
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic sitemap generation

### Monitoring

- **Vercel Analytics**: User behavior tracking
- **Speed Insights**: Performance monitoring
- **Lighthouse**: Regular performance audits

## 🤝 Contributing

### Development Workflow

1. **Create Feature Branch**

   ```bash
   git checkout -b feature/new-feature
   ```

2. **Make Changes**

   - Follow coding standards
   - Add tests if applicable
   - Update documentation

3. **Commit Changes**

   ```bash
   git commit -m "feat: add new feature"
   ```

4. **Push and Create PR**
   ```bash
   git push origin feature/new-feature
   ```

### Code Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Use Prettier for code formatting
- Write descriptive commit messages
- Add comments for complex logic

## 🔧 Troubleshooting

### Common Issues

#### Build Errors

```bash
# Clear Next.js cache
rm -rf .next
pnpm dev
```

#### Type Errors

```bash
# Check TypeScript configuration
npx tsc --noEmit
```

#### Styling Issues

```bash
# Rebuild Tailwind CSS
pnpm dev
```

### Getting Help

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Search existing issues in the repository
- Create a new issue with detailed description

## 📞 Support

For questions or support:

- **Email**: jacob@jacobc.co.za
- **LinkedIn**: [Jacob Chademwiri](https://linkedin.com/in/jacob-chademwiri)
- **Website**: [jacobc.co.za](https://jacobc.co.za)

---

**Last Updated**: January 2025
**Version**: 1.0.0
