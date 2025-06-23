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
  appointmentDate?: string;
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
  // --- Sithembe Transportation & Projects (STP) ---
  {
    id: 'stp-ppe-supply-tshwane',
    title: 'PPE Supply & Delivery for City of Tshwane',
    description:
      'Supply, delivery, and off-loading of safety boots and shoes for City of Tshwane over a 3-year period.',
    projectType: 'project-management',
    category: 'PPE Supply & Delivery',
    duration: '36 months',
    completedDate: '2026-04-30',
    status: 'in-progress',
    featured: false,
    myRole: 'Tendering Manager & Project Coordinator',
    keyOutcomes: [
      'Ensured uninterrupted supply of critical PPE for municipal workers',
      'Achieved 100% on-time delivery and compliance with safety standards',
      'Improved procurement efficiency and cost control for the client',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'stp-civil-sport-tshwane',
    title: 'Civil Engineering: Sport Facilities Resurfacing',
    description:
      'Resurfacing and refurbishment of all-weather hard surfaces at various sport facilities in City of Tshwane.',
    projectType: 'project-management',
    category: 'Civil Engineering',
    duration: '36 months',
    completedDate: '2026-10-30',
    status: 'in-progress',
    featured: false,
    myRole: 'Tendering Manager & Project Coordinator',
    keyOutcomes: [
      'Upgraded multiple sports facilities to modern standards',
      'Delivered project phases on schedule and within budget',
      'Enhanced community access to safe, high-quality sports infrastructure',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'stp-plant-hire-pikitup',
    title: 'Plant Hire for Pikitup Johannesburg',
    description:
      'Supply and operation of vehicles, plant, and equipment for illegal dumping and garden site services.',
    projectType: 'project-management',
    category: 'Plant Hire',
    duration: '36 months',
    completedDate: '2026-12-31',
    status: 'in-progress',
    featured: false,
    myRole: 'Tendering Manager & Project Coordinator',
    keyOutcomes: [
      'Supported city-wide waste management and environmental cleanup',
      'Maintained high equipment uptime and service reliability',
      'Reduced illegal dumping incidents through rapid response',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'PIKITUP JOHANNESBURG',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'stp-water-tankers-tshwane',
    title: 'Water Tankers for City of Tshwane',
    description:
      'Hire of 10,000L mobile drinking water tankers for informal settlements in City of Tshwane.',
    projectType: 'project-management',
    category: 'Water Tankers',
    duration: '36 months',
    completedDate: '2025-01-31',
    status: 'in-progress',
    featured: false,
    myRole: 'Tendering Manager & Project Coordinator',
    keyOutcomes: [
      'Ensured continuous water supply to underserved communities',
      'Coordinated logistics for timely delivery during peak demand',
      'Improved public health and sanitation outcomes',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'stp-mechanical-tshwane',
    title: 'Mechanical Repairs for City of Tshwane',
    description:
      'General repairs of City of Tshwane light vehicles for a 3-year period.',
    projectType: 'project-management',
    category: 'Mechanical',
    duration: '36 months',
    completedDate: '2025-11-30',
    status: 'in-progress',
    featured: false,
    myRole: 'Tendering Manager & Project Coordinator',
    keyOutcomes: [
      'Reduced vehicle downtime and maintenance costs',
      'Implemented preventive maintenance schedules',
      'Enhanced fleet reliability for municipal operations',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  // --- Livhu and Musa Enterprise (LME) ---
  {
    id: 'lme-plant-hire-tshwane',
    title: 'Plant Hire for City of Tshwane',
    description:
      'Corporate hire of general construction machines and equipment for City of Tshwane.',
    projectType: 'project-management',
    category: 'Plant Hire',
    duration: '3 YEARS',
    completedDate: '2028-03-31',
    status: 'in-progress',
    featured: false,
    myRole: 'Project Manager',
    keyOutcomes: [
      'Enabled large-scale infrastructure projects with reliable equipment supply',
      'Streamlined plant hire logistics and contract management',
      'Maintained high client satisfaction through responsive service',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'lme-water-tanker-hire-tshwane',
    title: 'Water Tanker Hire for City of Tshwane',
    description:
      'Hire of mobile drinking water tankers for informal settlements in City of Tshwane.',
    projectType: 'project-management',
    category: 'Water Tanker Hire',
    duration: '3 YEARS',
    completedDate: '2028-02-28',
    status: 'in-progress',
    featured: false,
    myRole: 'Project Manager',
    keyOutcomes: [
      'Secured critical water delivery contracts for municipal clients',
      'Coordinated multi-site operations for efficient service delivery',
      'Improved access to clean water for thousands of residents',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'lme-supply-manhole-covers',
    title: 'Supply & Delivery of Manhole Covers',
    description:
      'Supply, delivery, and off-loading of manhole covers for water and sanitation services.',
    projectType: 'project-management',
    category: 'Supply and Delivery',
    duration: '3 YEARS',
    completedDate: '2028-02-28',
    status: 'in-progress',
    featured: false,
    myRole: 'Project Manager',
    keyOutcomes: [
      'Ensured timely supply of essential infrastructure components',
      'Maintained strict quality and safety standards',
      'Supported municipal maintenance and upgrade projects',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  {
    id: 'lme-electrical-cables-tshwane',
    title: 'Supply & Delivery of Electrical Cables',
    description:
      'Supply, delivery, and off-loading of electrical cables, wire, and conductors for City of Tshwane.',
    projectType: 'project-management',
    category: 'Supply and Delivery',
    duration: '3 YEARS',
    completedDate: '2027-01-31',
    status: 'in-progress',
    featured: false,
    myRole: 'Project Manager',
    keyOutcomes: [
      'Enabled critical upgrades to municipal electrical infrastructure',
      'Delivered all materials on schedule and within budget',
      'Strengthened client relationships through reliable performance',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
  // --- Web Development Projects ---
  {
    id: 'webdev-sithembe-transportation-and-projects',
    title: 'Sithembe Transportation and Projects',
    description: `Sithembe Transportation and Projects is a privately owned company in continuous, uninterrupted business since 2013. STP is committed to transformation and believes that it has a responsibility to act on this commitment.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-05-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['Next.js', 'React', 'Typescript', 'Tailwind'],
    skills: [
      'Web Development',
      'SEO',
      'Web Hosting',
      'Email Signature',
      'Letterhead',
      'Company Profile',
    ],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.sithembe.co.za',
  },
  {
    id: 'webdev-gas-call',
    title: 'Gas Call',
    description: `Gascall is an independent company, purchasing LPG directly from the various refineries in South Africa and supplying same directly to our clients in cylinder and bulk format. They have their own cylinder stock and LPG filling plants to ensure that we manage our costs and pass on the benefit to our clients.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-04-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['Wordpress', 'Woo Commerce', 'Elementor'],
    skills: ['Web Development', 'Web & Email Hosting'],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.gascall.co.za',
  },
  {
    id: 'webdev-king-tax-accounting-services',
    title: 'King Tax Accounting Services',
    description: `King Tax Accounting Services is a company that helps to register companies and provide accounting services and tax returns for companies and individuals, they also ensure that your business is tax compliant.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-03-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['Next.js', 'React', 'Typescript', 'Tailwind'],
    skills: ['Web Development', 'SEO', 'Web & Email Hosting'],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.kingtaxaccounting.co.za',
  },
  {
    id: 'webdev-trading-in-glory',
    title: 'Trading In Glory',
    description: `Edurite offers unique, personalized, professional, virtual assistance with academic assignments and research projects in Business Studies. I championed the development of the site from the ground up using wordpress using elementor page builder, I then created social media pages for the site and connected their business to Google my Business.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-02-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['Next.js', 'React', 'Typescript', 'Tailwind'],
    skills: [
      'Web & Email Hosting',
      'Logo Design',
      'Invoice Design',
      'Company Profile',
      'Website Under Construction',
    ],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.tradinginglory.co.za',
  },
  {
    id: 'webdev-playhouse-media-group',
    title: 'Playhouse Media Group',
    description: `Playhouse Media Group is a media company that specializes in the creation responsive websites and applications that are user friendly and easy to use and seo optimized with a focus on speed and performance.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-01-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['Next.js', 'React', 'Typescript', 'Tailwind', 'Sanity CMS'],
    skills: [
      'Web Development',
      'SEO',
      'Web & Email Hosting',
      'Logo',
      'Email Signature',
      'Leterhead',
    ],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.playhousemedia.net',
  },
  {
    id: 'webdev-sea-harvest',
    title: 'Sea Harvest',
    description: `Sea Harvest is a Zimbabwean fish company that specializes in fresh fish from the Kariba and Mutare. I spearheaded the development of the site from the ground up.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2023-12-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['React', 'Javascript', 'Tailwind'],
    skills: ['Web Development', 'Web Hosting'],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://seaharvest.co.zw/',
  },
  {
    id: 'webdev-edurite',
    title: 'Edurite',
    description: `Edurite offers unique, personalized, professional, virtual assistance with academic assignments and research projects in Business Studies. I championed the development of the site from the ground up using wordpress using elementor page builder, I then created social media pages for the site and connected their business to Google my Business.`,
    projectType: 'web-development',
    category: 'Web Development',
    duration: '',
    completedDate: '2023-11-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [],
    technologies: ['Next.js', 'React', 'Typescript', 'Tailwind'],
    skills: ['Email Hosting', 'Logo Design', 'Website Under Construction'],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.edurite.co.za',
  },
];
