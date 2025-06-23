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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
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
    keyOutcomes: [],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
  },
];
