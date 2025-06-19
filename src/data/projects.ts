// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category:
    | 'web-development'
    | 'e-commerce'
    | 'dashboard'
    | 'mobile'
    | 'saas'
    | 'cms';
  technologies: string[];
  features: string[];
  challenges: string[];
  solutions: string[];
  image?: string;
  images?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  completedDate: string;
  duration: string;
  client?: string;
  teamSize?: number;
  myRole: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'maintenance';
  metrics?: {
    views?: number;
    likes?: number;
    performance?: {
      loadTime?: number;
      seoScore?: number;
      accessibilityScore?: number;
    };
    businessImpact?: {
      conversionIncrease?: string;
      trafficIncrease?: string;
      userEngagement?: string;
    };
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar?: string;
  };
  learnings: string[];
  nextSteps?: string[];
}

export const projects: Project[] = [
  {
    id: 'ecommerce-platform-local-retailer',
    title: 'E-commerce Platform for Local Retailer',
    description:
      'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
    longDescription:
      'Developed a comprehensive e-commerce platform for a local retailer looking to expand their online presence. The solution includes a customer-facing storefront, admin dashboard, inventory management system, and integrated payment processing.',
    category: 'e-commerce',
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'PostgreSQL',
      'Stripe',
      'Tailwind CSS',
      'Prisma',
    ],
    features: [
      'Responsive product catalog with search and filtering',
      'Shopping cart and wishlist functionality',
      'Secure payment processing with Stripe',
      'Order management and tracking system',
      'Admin dashboard for inventory management',
      'Customer account management',
      'Email notifications and order confirmations',
      'SEO-optimized product pages',
      'Analytics and reporting dashboard',
    ],
    challenges: [
      'Integrating complex payment flows with multiple payment methods',
      'Implementing real-time inventory tracking across multiple sales channels',
      'Optimizing site performance for mobile users',
      'Creating intuitive admin interface for non-technical users',
    ],
    solutions: [
      'Implemented Stripe Connect for flexible payment processing',
      'Built real-time inventory sync using WebSocket connections',
      'Used Next.js Image optimization and lazy loading',
      'Designed user-friendly admin interface with guided workflows',
    ],
    image: '/images/project-placeholder.svg',
    images: [
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
    ],
    liveUrl: 'https://retailer-store.example.com',
    githubUrl: 'https://github.com/jchademwiri/ecommerce-platform',
    completedDate: '2024-03-15',
    duration: '3 months',
    client: 'Local Fashion Retailer',
    teamSize: 1,
    myRole: 'Full-Stack Developer & UI/UX Designer',
    featured: true,
    status: 'completed',
    metrics: {
      views: 2500,
      likes: 180,
      performance: {
        loadTime: 1.2,
        seoScore: 95,
        accessibilityScore: 98,
      },
      businessImpact: {
        conversionIncrease: '300%',
        trafficIncrease: '450%',
        userEngagement: '85% increase in session duration',
      },
    },
    testimonial: {
      quote:
        'Jacob transformed our online presence completely. Sales increased by 300% within 6 months of launch.',
      author: 'Sarah Mitchell',
      role: 'Store Owner',
      company: "Mitchell's Fashion",
      avatar: '/testimonials/sarah-mitchell.jpg',
    },
    learnings: [
      'Advanced state management patterns for complex e-commerce flows',
      'Payment gateway integration best practices',
      'Performance optimization techniques for content-heavy sites',
      'UX design principles for conversion optimization',
    ],
    nextSteps: [
      'Implement AI-powered product recommendations',
      'Add multi-language support',
      'Integrate with social media platforms',
    ],
  },
  {
    id: 'healthcare-dashboard-analytics',
    title: 'Healthcare Analytics Dashboard',
    description:
      'Real-time analytics dashboard for healthcare providers with patient data visualization and reporting tools.',
    longDescription:
      'Built a comprehensive healthcare analytics platform that helps medical professionals track patient outcomes, resource utilization, and operational efficiency. The dashboard provides real-time insights with interactive charts and customizable reporting features.',
    category: 'dashboard',
    technologies: [
      'React',
      'TypeScript',
      'D3.js',
      'Node.js',
      'MongoDB',
      'Express.js',
      'Chart.js',
      'Material-UI',
      'Socket.io',
    ],
    features: [
      'Real-time patient monitoring dashboard',
      'Interactive data visualizations with D3.js',
      'Customizable report generation',
      'Role-based access control',
      'Automated alert system for critical metrics',
      'Export functionality for compliance reporting',
      'Mobile-responsive design',
      'Dark/light theme toggle',
      'Multi-facility data aggregation',
    ],
    challenges: [
      'Handling large datasets with real-time updates',
      'Ensuring HIPAA compliance and data security',
      'Creating intuitive visualizations for complex medical data',
      'Optimizing performance for concurrent users',
    ],
    solutions: [
      'Implemented data virtualization for large datasets',
      'Used end-to-end encryption and secure authentication',
      'Collaborated with medical professionals for UX design',
      'Implemented caching strategies and database optimization',
    ],
    image: '/images/project-placeholder.svg',
    images: [
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
    ],
    liveUrl: 'https://healthanalytics.example.com',
    githubUrl: 'https://github.com/jchademwiri/healthcare-dashboard',
    completedDate: '2024-01-20',
    duration: '4 months',
    client: 'Regional Medical Center',
    teamSize: 3,
    myRole: 'Lead Frontend Developer & Data Visualization Specialist',
    featured: true,
    status: 'completed',
    metrics: {
      views: 1800,
      likes: 145,
      performance: {
        loadTime: 0.9,
        seoScore: 88,
        accessibilityScore: 96,
      },
      businessImpact: {
        conversionIncrease: '40% reduction in report generation time',
        trafficIncrease: '200% increase in dashboard usage',
        userEngagement: '60% improvement in data-driven decisions',
      },
    },
    testimonial: {
      quote:
        'The dashboard has revolutionized how we analyze patient data. Decision-making is now 10x faster.',
      author: 'Dr. Michael Chen',
      role: 'Chief Medical Officer',
      company: 'Regional Medical Center',
      avatar: '/testimonials/dr-michael-chen.jpg',
    },
    learnings: [
      'Advanced data visualization techniques with D3.js',
      'Healthcare industry compliance requirements',
      'Real-time data processing and WebSocket implementation',
      'Performance optimization for data-heavy applications',
    ],
    nextSteps: [
      'Implement predictive analytics features',
      'Add machine learning insights',
      'Integrate with electronic health record systems',
    ],
  },
  {
    id: 'food-delivery-mobile-app',
    title: 'Food Delivery Mobile App',
    description:
      'Cross-platform mobile application for food delivery with real-time tracking and payment integration.',
    longDescription:
      'Developed a comprehensive food delivery mobile application using React Native. The app connects customers with local restaurants, featuring real-time order tracking, multiple payment options, and an intuitive user interface for both customers and delivery drivers.',
    category: 'mobile',
    technologies: [
      'React Native',
      'TypeScript',
      'Firebase',
      'Stripe',
      'Google Maps API',
      'Redux Toolkit',
      'Expo',
      'Node.js',
      'Express.js',
    ],
    features: [
      'Restaurant discovery with search and filters',
      'Real-time order tracking with GPS',
      'Multiple payment methods integration',
      'Push notifications for order updates',
      'Rating and review system',
      'Delivery driver app with route optimization',
      'Restaurant partner dashboard',
      'Favorites and order history',
      'Promotional codes and loyalty program',
    ],
    challenges: [
      'Implementing accurate real-time location tracking',
      'Optimizing app performance for older devices',
      'Managing complex state across multiple user types',
      'Handling offline functionality and data synchronization',
    ],
    solutions: [
      'Used React Native Maps with optimized location updates',
      'Implemented code splitting and lazy loading',
      'Created modular Redux architecture with normalized state',
      'Built offline-first architecture with Redux Persist',
    ],
    image: '/images/project-placeholder.svg',
    images: [
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
    ],
    liveUrl: 'https://apps.apple.com/foodie-express',
    githubUrl: 'https://github.com/jchademwiri/food-delivery-app',
    completedDate: '2023-11-10',
    duration: '5 months',
    client: 'FoodieExpress Startup',
    teamSize: 4,
    myRole: 'Mobile App Developer & Architecture Lead',
    featured: true,
    status: 'completed',
    metrics: {
      views: 3200,
      likes: 280,
      performance: {
        loadTime: 1.5,
        seoScore: 85,
        accessibilityScore: 92,
      },
      businessImpact: {
        conversionIncrease: '250% increase in order completion',
        trafficIncrease: '400% growth in active users',
        userEngagement: '70% daily active user retention',
      },
    },
    testimonial: {
      quote:
        'Jacob delivered an exceptional app that exceeded our expectations. User engagement is through the roof!',
      author: 'Lisa Rodriguez',
      role: 'CEO & Founder',
      company: 'FoodieExpress',
      avatar: '/testimonials/lisa-rodriguez.jpg',
    },
    learnings: [
      'Cross-platform mobile development best practices',
      'Real-time location services and mapping integration',
      'Mobile app performance optimization techniques',
      'User experience design for mobile-first applications',
    ],
    nextSteps: [
      'Implement AI-powered restaurant recommendations',
      'Add group ordering functionality',
      'Integrate with smart home devices',
    ],
  },
  {
    id: 'saas-project-management-tool',
    title: 'SaaS Project Management Platform',
    description:
      'Cloud-based project management tool with team collaboration, time tracking, and advanced reporting features.',
    longDescription:
      'Created a comprehensive SaaS project management platform that helps teams organize tasks, track progress, and collaborate effectively. The platform includes advanced features like time tracking, resource management, and detailed analytics with subscription-based pricing.',
    category: 'saas',
    technologies: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Stripe',
      'NextAuth.js',
      'Tailwind CSS',
      'Framer Motion',
      'Vercel',
    ],
    features: [
      'Multi-project workspace management',
      'Kanban boards with drag-and-drop functionality',
      'Time tracking and reporting',
      'Team collaboration tools and comments',
      'File sharing and document management',
      'Automated workflow and task dependencies',
      'Advanced analytics and project insights',
      'Subscription billing with Stripe',
      'API access for third-party integrations',
    ],
    challenges: [
      'Implementing complex subscription billing logic',
      'Creating scalable multi-tenant architecture',
      'Building real-time collaboration features',
      'Designing intuitive UX for complex workflows',
    ],
    solutions: [
      'Built flexible subscription system with Stripe webhooks',
      'Implemented row-level security with Prisma',
      'Used WebSocket connections for real-time updates',
      'Conducted extensive user testing and iterative design',
    ],
    image: '/images/project-placeholder.svg',
    images: [
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
    ],
    liveUrl: 'https://taskmaster-pro.example.com',
    githubUrl: 'https://github.com/jchademwiri/saas-project-management',
    completedDate: '2024-05-22',
    duration: '6 months',
    teamSize: 2,
    myRole: 'Full-Stack Developer & Product Designer',
    featured: true,
    status: 'completed',
    metrics: {
      views: 4100,
      likes: 320,
      performance: {
        loadTime: 1.1,
        seoScore: 94,
        accessibilityScore: 97,
      },
      businessImpact: {
        conversionIncrease: '180% trial-to-paid conversion',
        trafficIncrease: '350% monthly recurring revenue',
        userEngagement: '90% user retention after 3 months',
      },
    },
    testimonial: {
      quote:
        'TaskMaster Pro has transformed how our team manages projects. The interface is intuitive and the features are exactly what we needed.',
      author: 'David Park',
      role: 'Operations Director',
      company: 'Creative Solutions Agency',
      avatar: '/testimonials/david-park.jpg',
    },
    learnings: [
      'SaaS architecture and multi-tenancy patterns',
      'Subscription billing and payment processing',
      'Real-time collaboration implementation',
      'Product-led growth strategies',
    ],
    nextSteps: [
      'Add AI-powered project insights',
      'Implement advanced automation workflows',
      'Build mobile companion app',
    ],
  },
  {
    id: 'cms-blog-platform',
    title: 'Headless CMS Blog Platform',
    description:
      'Modern headless CMS with rich text editing, SEO optimization, and multi-author support for content creators.',
    longDescription:
      'Built a powerful headless CMS specifically designed for bloggers and content creators. The platform features a modern admin interface, rich text editing capabilities, advanced SEO tools, and flexible content management with support for multiple authors and content types.',
    category: 'cms',
    technologies: [
      'Next.js',
      'TypeScript',
      'Sanity CMS',
      'React',
      'Tailwind CSS',
      'NextAuth.js',
      'Vercel',
      'Cloudinary',
      'Algolia',
    ],
    features: [
      'Drag-and-drop page builder',
      'Rich text editor with custom blocks',
      'Advanced SEO optimization tools',
      'Multi-author content management',
      'Media library with automatic optimization',
      'Content scheduling and publishing workflow',
      'Advanced search with Algolia',
      'Comment system with moderation',
      'Analytics integration and reporting',
    ],
    challenges: [
      'Creating flexible content modeling system',
      'Implementing advanced SEO features',
      'Building intuitive content editing experience',
      'Optimizing site performance for SEO',
    ],
    solutions: [
      "Used Sanity's flexible schema system",
      'Built comprehensive SEO metadata management',
      'Created custom rich text editor components',
      'Implemented static generation with ISR',
    ],
    image: '/images/project-placeholder.svg',
    images: [
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
    ],
    liveUrl: 'https://contentcraft.example.com',
    githubUrl: 'https://github.com/jchademwiri/cms-blog-platform',
    completedDate: '2023-09-18',
    duration: '4 months',
    client: 'Content Creator Network',
    teamSize: 1,
    myRole: 'Full-Stack Developer & UX Designer',
    featured: false,
    status: 'completed',
    metrics: {
      views: 1950,
      likes: 165,
      performance: {
        loadTime: 0.8,
        seoScore: 98,
        accessibilityScore: 95,
      },
      businessImpact: {
        conversionIncrease: '220% increase in content creation',
        trafficIncrease: '300% improvement in organic search traffic',
        userEngagement: '75% increase in average session duration',
      },
    },
    testimonial: {
      quote:
        'This CMS has made content creation a joy. The SEO tools alone have doubled our organic traffic.',
      author: 'Emma Thompson',
      role: 'Content Director',
      company: 'Digital Marketing Hub',
      avatar: '/testimonials/emma-thompson.jpg',
    },
    learnings: [
      'Headless CMS architecture and benefits',
      'Advanced SEO implementation techniques',
      'Content management UX best practices',
      'Static site generation optimization',
    ],
    nextSteps: [
      'Add AI-powered content suggestions',
      'Implement A/B testing for content',
      'Build advanced analytics dashboard',
    ],
  },
  {
    id: 'fintech-expense-tracker',
    title: 'Personal Finance Expense Tracker',
    description:
      'Comprehensive personal finance application with expense tracking, budgeting, and financial insights.',
    longDescription:
      'Developed a secure personal finance application that helps users track expenses, manage budgets, and gain insights into their spending patterns. The app includes bank account integration, automated categorization, and personalized financial recommendations.',
    category: 'web-development',
    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Plaid API',
      'Chart.js',
      'Material-UI',
      'JWT',
    ],
    features: [
      'Bank account integration via Plaid API',
      'Automated expense categorization',
      'Budget creation and tracking',
      'Financial goal setting and monitoring',
      'Interactive spending analytics',
      'Bill reminder notifications',
      'Expense receipt scanning',
      'Multi-currency support',
      'Data export and reporting',
    ],
    challenges: [
      'Ensuring bank-level security for financial data',
      'Implementing accurate expense categorization',
      'Creating intuitive financial visualization',
      'Handling real-time transaction processing',
    ],
    solutions: [
      'Implemented end-to-end encryption and secure authentication',
      'Built machine learning model for expense categorization',
      'Used Chart.js for interactive financial charts',
      'Created real-time webhook system for transaction updates',
    ],
    image: '/images/project-placeholder.svg',
    images: [
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
      '/images/project-placeholder.svg',
    ],
    liveUrl: 'https://budgetwise.example.com',
    githubUrl: 'https://github.com/jchademwiri/fintech-expense-tracker',
    completedDate: '2024-02-14',
    duration: '3.5 months',
    teamSize: 1,
    myRole: 'Full-Stack Developer & Security Implementation',
    featured: false,
    status: 'completed',
    metrics: {
      views: 2800,
      likes: 220,
      performance: {
        loadTime: 1.0,
        seoScore: 92,
        accessibilityScore: 94,
      },
      businessImpact: {
        conversionIncrease: '150% improvement in budget adherence',
        trafficIncrease: '280% increase in user engagement',
        userEngagement: '80% of users achieve their savings goals',
      },
    },
    testimonial: {
      quote:
        "BudgetWise has completely changed how I manage my finances. I've saved more in 6 months than I did all last year.",
      author: 'Marcus Johnson',
      role: 'Software Engineer',
      company: 'Tech Startup',
      avatar: '/testimonials/marcus-johnson.jpg',
    },
    learnings: [
      'Financial API integration and security best practices',
      'Machine learning for data categorization',
      'Data visualization for financial analytics',
      'Privacy-focused application development',
    ],
    nextSteps: [
      'Add investment portfolio tracking',
      'Implement AI-powered financial advice',
      'Create mobile app version',
    ],
  },
];
