export type ProjectType = 'web-development' | 'project-management';

export interface Project {
  // Core essentials
  id: string;
  title: string;
  description: string;
  projectType: ProjectType;

  // Key details for portfolio display
  category: string;
  duration: string;
  completedDate: string;
  status: 'completed' | 'in-progress';
  featured: boolean;

  // Role & impact
  myRole: string;
  keyOutcomes: string[];

  // Flexible arrays that work for both types
  technologies?: string[];
  skills: string[];

  // Optional expansion fields
  client?: string;
  budget?: string;
  teamSize?: number;

  // Media & links
  image?: string;
  images?: string[];
  externalUrl?: string;

  // Social proof
  testimonial?: {
    quote: string;
    author: string;
    company: string;
  };
}

export const projects: Project[] = [
  // Web Development Project 1
  {
    id: 'ecommerce-fashion-store',
    title: 'Modern Fashion E-commerce Platform',
    description:
      'Full-stack e-commerce solution with advanced filtering, wishlist functionality, and integrated payment processing for a local fashion retailer.',
    projectType: 'web-development',
    category: 'E-commerce',
    duration: '4 months',
    completedDate: '2024-03-15',
    status: 'completed',
    featured: true,
    myRole: 'Full-Stack Developer & UI/UX Designer',
    keyOutcomes: [
      '300% increase in online sales within 6 months',
      '85% improvement in page load speeds',
      'Mobile conversion rate increased by 150%',
    ],
    technologies: [
      'React',
      'Next.js',
      'TypeScript',
      'Stripe API',
      'Tailwind CSS',
      'PostgreSQL',
    ],
    skills: [
      'Frontend Development',
      'Payment Integration',
      'SEO Optimization',
      'User Experience Design',
    ],
    client: 'Trendy Threads Boutique',
    budget: 'R85,000',
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://trendythreads.co.za',
    testimonial: {
      quote:
        'The website exceeded our expectations. Our online sales have tripled, and customers love the smooth shopping experience.',
      author: 'Sarah Mitchell',
      company: 'Trendy Threads Boutique',
    },
  },

  // Web Development Project 2
  {
    id: 'corporate-dashboard',
    title: 'Real-time Analytics Dashboard',
    description:
      'Interactive dashboard application for tracking KPIs, sales metrics, and operational data with real-time updates and advanced data visualization.',
    projectType: 'web-development',
    category: 'SaaS Dashboard',
    duration: '6 months',
    completedDate: '2024-01-20',
    status: 'completed',
    featured: true,
    myRole: 'Lead Frontend Developer',
    keyOutcomes: [
      'Reduced reporting time from 4 hours to 15 minutes',
      'Improved decision-making speed by 60%',
      'Successfully handling 10,000+ daily active users',
    ],
    technologies: [
      'React',
      'TypeScript',
      'Chart.js',
      'WebSocket',
      'Node.js',
      'MongoDB',
    ],
    skills: [
      'Data Visualization',
      'Real-time Systems',
      'API Integration',
      'Performance Optimization',
    ],
    client: 'Corporate Solutions Ltd',
    budget: 'R120,000',
    teamSize: 3,
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://dashboard-demo.example.com',
    testimonial: {
      quote:
        'This dashboard has transformed how we make business decisions. The real-time insights are invaluable.',
      author: 'Michael Chen',
      company: 'Corporate Solutions Ltd',
    },
  },

  // Project Management Project 1
  {
    id: 'municipal-road-infrastructure',
    title: 'Municipal Road Infrastructure Development',
    description:
      'Comprehensive project management for municipal road upgrade initiative, including tender coordination, stakeholder management, and regulatory compliance.',
    projectType: 'project-management',
    category: 'Municipal Infrastructure',
    duration: '10 months',
    completedDate: '2024-05-30',
    status: 'completed',
    featured: true,
    myRole: 'Senior Project Coordinator & Tendering Manager',
    keyOutcomes: [
      'R12.5M contract successfully secured and delivered',
      '100% compliance with municipal regulations maintained',
      'Project completed 2 weeks ahead of schedule',
    ],
    technologies: ['MS Project', 'Sage Evolution', 'eTender Portal', 'AutoCAD'],
    skills: [
      'Tender Management',
      'Stakeholder Coordination',
      'Risk Management',
      'Regulatory Compliance',
    ],
    client: 'Tshwane Metropolitan Municipality',
    budget: 'R12.5M',
    teamSize: 15,
    image: '/images/project-placeholder.svg',
    testimonial: {
      quote:
        'Exceptional project management skills. The project was delivered on time, within budget, and exceeded quality expectations.',
      author: 'David Mokwena',
      company: 'Tshwane Metropolitan Municipality',
    },
  },

  // Project Management Project 2
  {
    id: 'digital-transformation-initiative',
    title: 'Company-wide Digital Process Automation',
    description:
      'Led digital transformation initiative to automate manual processes, implement new systems, and train staff across multiple departments.',
    projectType: 'project-management',
    category: 'Digital Transformation',
    duration: '8 months',
    completedDate: '2024-09-15',
    status: 'completed',
    featured: false,
    myRole: 'Digital Transformation Lead & Change Manager',
    keyOutcomes: [
      '40% reduction in manual processing time',
      '95% staff adoption rate achieved within 3 months',
      'R2.8M annual cost savings projected',
    ],
    technologies: ['Microsoft 365', 'Power Platform', 'SharePoint', 'Power BI'],
    skills: [
      'Change Management',
      'Process Optimization',
      'Staff Training',
      'System Integration',
    ],
    client: 'Sithembe Transportation & Projects',
    budget: 'Internal Project',
    teamSize: 8,
    image: '/images/project-placeholder.svg',
    testimonial: {
      quote:
        'The digital transformation has revolutionized our operations. Processes that took hours now take minutes.',
      author: 'Jennifer Adams',
      company: 'Sithembe Transportation & Projects',
    },
  },
];
