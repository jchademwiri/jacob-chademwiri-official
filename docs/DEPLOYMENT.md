# Deployment Guide

## 🚀 Deployment Overview

This guide covers deployment strategies for the Jacob Chademwiri portfolio website, with primary focus on Vercel deployment and alternative hosting options.

## 🎯 Pre-Deployment Checklist

### Code Quality

- [ ] All TypeScript errors resolved
- [ ] ESLint warnings addressed
- [ ] Build completes successfully (`pnpm build`)
- [ ] No console errors in production build
- [ ] All imports and exports are correct

### Performance

- [ ] Lighthouse score > 90 for Performance
- [ ] Core Web Vitals within acceptable ranges
- [ ] Images optimized and properly sized
- [ ] Unused dependencies removed
- [ ] Bundle size analyzed and optimized

### Content

- [ ] All content reviewed and updated
- [ ] Project information current
- [ ] Contact information accurate
- [ ] Resume/CV updated
- [ ] Social media links working

### SEO & Meta

- [ ] Meta tags configured
- [ ] Open Graph images present
- [ ] Sitemap generated
- [ ] Robots.txt configured
- [ ] Structured data implemented

### Security

- [ ] Environment variables secured
- [ ] No sensitive data in client-side code
- [ ] HTTPS enforced
- [ ] Security headers configured

## 🌟 Vercel Deployment (Recommended)

### Initial Setup

1. **Connect Repository**

   ```bash
   # Push your code to GitHub
   git add .
   git commit -m "feat: ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**

   - Visit [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Select the repository: `jacob-chademwiri-official`

3. **Configure Build Settings**
   ```
   Framework Preset: Next.js
   Build Command: pnpm build
   Output Directory: .next
   Install Command: pnpm install
   Development Command: pnpm dev
   ```

### Environment Variables

Set up environment variables in Vercel dashboard:

```env
# Production Environment Variables
NEXT_PUBLIC_SITE_URL=https://jacobc.co.za
NEXT_PUBLIC_VERCEL_URL=jacobc.co.za

# Analytics (if using custom analytics)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Form (if using external service)
CONTACT_FORM_ENDPOINT=https://api.example.com/contact
CONTACT_FORM_API_KEY=your-api-key

# Database (if using database)
DATABASE_URL=your-database-url

# Authentication (if implemented)
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=https://jacobc.co.za
```

### Custom Domain Setup

1. **Add Domain in Vercel**

   - Go to Project Settings → Domains
   - Add your custom domain: `jacobc.co.za`
   - Add www subdomain: `www.jacobc.co.za`

2. **Configure DNS Records**

   ```
   Type: A
   Name: @
   Value: 76.76.19.61

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

3. **SSL Certificate**
   - Vercel automatically provisions SSL certificates
   - Verify HTTPS is working: `https://jacobc.co.za`

### Deployment Configuration

Create `vercel.json` for advanced configuration:

```json
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "regions": ["cpt1", "jnb1"],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "origin-when-cross-origin"
        }
      ]
    }
  ],
  "redirects": [
    {
      "source": "/resume",
      "destination": "/resumes/jacob-chademwiri-resume.pdf",
      "permanent": false
    }
  ],
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/api/sitemap"
    }
  ]
}
```

## 🔄 Continuous Deployment

### Automatic Deployments

Vercel automatically deploys when you push to your main branch:

```bash
# Deploy to production
git add .
git commit -m "feat: update project showcase"
git push origin main
```

### Preview Deployments

Every pull request gets a preview deployment:

```bash
# Create feature branch
git checkout -b feature/new-project
git add .
git commit -m "feat: add new project case study"
git push origin feature/new-project

# Create pull request on GitHub
# Vercel will automatically create preview deployment
```

### Branch Deployments

Configure different branches for different environments:

```json
{
  "git": {
    "deploymentEnabled": {
      "main": true,
      "staging": true
    }
  }
}
```

## 🏗️ Alternative Hosting Options

### Netlify

1. **Build Settings**

   ```
   Build command: pnpm build && pnpm export
   Publish directory: out
   ```

2. **netlify.toml Configuration**

   ```toml
   [build]
     command = "pnpm build && pnpm export"
     publish = "out"

   [build.environment]
     NODE_VERSION = "18"

   [[redirects]]
     from = "/resume"
     to = "/resumes/jacob-chademwiri-resume.pdf"
     status = 302

   [[headers]]
     for = "/*"
     [headers.values]
       X-Frame-Options = "DENY"
       X-XSS-Protection = "1; mode=block"
   ```

### GitHub Pages

1. **Enable Static Export**

   ```typescript
   // next.config.ts
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true,
     },
   };
   ```

2. **GitHub Actions Workflow**

   ```yaml
   # .github/workflows/deploy.yml
   name: Deploy to GitHub Pages

   on:
     push:
       branches: [main]

   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3

         - name: Setup Node.js
           uses: actions/setup-node@v3
           with:
             node-version: '18'

         - name: Install pnpm
           uses: pnpm/action-setup@v2
           with:
             version: 8

         - name: Install dependencies
           run: pnpm install

         - name: Build
           run: pnpm build

         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

### AWS S3 + CloudFront

1. **Build for Static Export**

   ```bash
   pnpm build
   pnpm export
   ```

2. **S3 Bucket Configuration**

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::jacobc.co.za/*"
       }
     ]
   }
   ```

3. **CloudFront Distribution**
   ```json
   {
     "Origins": [
       {
         "DomainName": "jacobc.co.za.s3.amazonaws.com",
         "Id": "S3-jacobc.co.za",
         "S3OriginConfig": {
           "OriginAccessIdentity": ""
         }
       }
     ],
     "DefaultCacheBehavior": {
       "TargetOriginId": "S3-jacobc.co.za",
       "ViewerProtocolPolicy": "redirect-to-https"
     }
   }
   ```

## 📊 Performance Monitoring

### Vercel Analytics

Vercel automatically provides:

- **Real User Monitoring**: Actual user performance data
- **Core Web Vitals**: LCP, FID, CLS metrics
- **Speed Insights**: Performance recommendations

### Custom Analytics Setup

```typescript
// lib/analytics.ts
export function trackEvent(
  eventName: string,
  properties?: Record<string, any>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties);
  }
}

// Usage in components
import { trackEvent } from '@/lib/analytics';

const handleContactSubmit = () => {
  trackEvent('contact_form_submit', {
    form_type: 'main_contact',
    page: 'homepage',
  });
};
```

### Performance Monitoring Tools

1. **Lighthouse CI**

   ```yaml
   # .github/workflows/lighthouse.yml
   name: Lighthouse CI
   on: [push]
   jobs:
     lighthouse:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - name: Run Lighthouse CI
           run: |
             npm install -g @lhci/cli@0.12.x
             lhci autorun
   ```

2. **Web Vitals Monitoring**

   ```typescript
   // pages/_app.tsx
   import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

   function sendToAnalytics(metric: any) {
     // Send to your analytics service
     console.log(metric);
   }

   getCLS(sendToAnalytics);
   getFID(sendToAnalytics);
   getFCP(sendToAnalytics);
   getLCP(sendToAnalytics);
   getTTFB(sendToAnalytics);
   ```

## 🔒 Security Configuration

### Security Headers

```typescript
// next.config.ts
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### Content Security Policy

```typescript
const ContentSecurityPolicy = `
  default-src 'self' vercel.live;
  script-src 'self' 'unsafe-eval' 'unsafe-inline' *.vercel-insights.com *.vercel-analytics.com;
  style-src 'self' 'unsafe-inline';
  img-src * blob: data:;
  media-src 'none';
  connect-src *;
  font-src 'self' fonts.gstatic.com;
`;

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },
};
```

## 🔄 Rollback Strategy

### Vercel Rollback

1. **Via Dashboard**

   - Go to Vercel dashboard
   - Select your project
   - Go to "Deployments" tab
   - Click "Promote to Production" on previous deployment

2. **Via CLI**

   ```bash
   # Install Vercel CLI
   npm i -g vercel

   # Login
   vercel login

   # List deployments
   vercel ls

   # Promote specific deployment
   vercel promote <deployment-url>
   ```

### Git-based Rollback

```bash
# Revert to previous commit
git revert HEAD

# Or reset to specific commit
git reset --hard <commit-hash>
git push --force-with-lease origin main
```

## 📋 Post-Deployment Checklist

### Functionality Testing

- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Contact form submits successfully
- [ ] Images display correctly
- [ ] External links work
- [ ] Download links function

### Performance Testing

- [ ] Lighthouse audit score > 90
- [ ] Core Web Vitals within targets
- [ ] Page load times < 3 seconds
- [ ] Mobile performance optimized

### SEO Verification

- [ ] Meta tags display correctly in search results
- [ ] Open Graph images show on social media
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt configured properly
- [ ] Google Search Console verified

### Analytics Setup

- [ ] Google Analytics tracking
- [ ] Vercel Analytics enabled
- [ ] Contact form submissions tracked
- [ ] Error tracking configured

### Security Verification

- [ ] HTTPS enforced
- [ ] Security headers present
- [ ] No sensitive data exposed
- [ ] CSP policy working

## 🚨 Troubleshooting

### Common Deployment Issues

#### Build Failures

```bash
# Clear cache and rebuild
rm -rf .next node_modules
pnpm install
pnpm build
```

#### Environment Variable Issues

```bash
# Check environment variables are set
vercel env ls

# Add missing variables
vercel env add VARIABLE_NAME
```

#### Domain Configuration Issues

```bash
# Verify DNS propagation
nslookup jacobc.co.za

# Check SSL certificate
openssl s_client -connect jacobc.co.za:443
```

### Performance Issues

#### Large Bundle Size

```bash
# Analyze bundle
pnpm build
npx @next/bundle-analyzer
```

#### Slow Loading Images

```typescript
// Optimize images
import Image from 'next/image';

<Image
  src="/images/project.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  priority={isAboveFold}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>;
```

## 📞 Support and Monitoring

### Monitoring Setup

- **Uptime Monitoring**: UptimeRobot or Pingdom
- **Error Tracking**: Sentry or LogRocket
- **Performance Monitoring**: Vercel Analytics
- **User Feedback**: Hotjar or FullStory

### Maintenance Schedule

- **Weekly**: Check analytics and performance metrics
- **Monthly**: Update dependencies and security patches
- **Quarterly**: Full performance audit and optimization
- **Annually**: Complete security review and backup verification

---

This deployment guide ensures a smooth, secure, and performant deployment of the Jacob Chademwiri portfolio website with proper monitoring and maintenance procedures.
