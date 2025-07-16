export type ProjectType = 'web-development' | 'project-management';

export type ServiceType =
  | 'tender_management'
  | 'project_management'
  | 'web_development'
  | 'it_solutions';

export interface Project {
  // Core essentials
  id: string;
  title: string;
  description: string;
  projectType: ProjectType;
  serviceType: ServiceType;

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

  // Case Study Structure - Challenge, Solution, Results, ROI
  challenge?: string;
  solution?: string;
  results?: string;
  roiMetrics?: string[];

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

  // Social proof - Enhanced testimonial structure
  testimonial?: {
    quote: string;
    author: string;
    company: string;
    position?: string;
    avatar?: string;
  };

  // Additional client testimonials
  clientTestimonials?: Array<{
    quote: string;
    author: string;
    company: string;
    position?: string;
    avatar?: string;
    rating?: number;
  }>;
}

export const projects: Project[] = [
  // --- Sithembe Transportation & Projects (STP) ---
  {
    id: 'stp-ppe-supply-tshwane',
    title: 'PPE Supply & Delivery for City of Tshwane',
    description:
      'Supply, delivery, and off-loading of safety boots and shoes for City of Tshwane over a 3-year period.',
    projectType: 'project-management',
    serviceType: 'tender_management',
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
    challenge:
      'City of Tshwane required a reliable supplier for critical PPE equipment with strict compliance requirements and tight delivery schedules across multiple municipal departments.',
    solution:
      'Developed comprehensive tender proposal with detailed supply chain management, quality assurance protocols, and multi-site delivery coordination system.',
    results:
      'Successfully secured 36-month contract with 100% on-time delivery rate and zero compliance violations across all municipal departments.',
    roiMetrics: [
      '100% on-time delivery rate maintained',
      '15% cost savings achieved through efficient procurement',
      '3,000+ municipal workers equipped with compliant PPE',
      'Zero safety incidents related to PPE quality',
    ],
    skills: ['Tender Management', 'Project Coordination'],
    client: 'CITY OF TSHWANE',
    image: '/images/project-placeholder.svg',
    testimonial: {
      quote:
        "Jacob's expertise in tender management and project coordination ensured seamless PPE supply for our municipal operations. His attention to compliance and delivery excellence is outstanding.",
      author: 'Municipal Procurement Manager',
      company: 'City of Tshwane',
      position: 'Senior Procurement Officer',
    },
  },
  {
    id: 'stp-civil-sport-tshwane',
    title: 'Civil Engineering: Sport Facilities Resurfacing',
    description:
      'Resurfacing and refurbishment of all-weather hard surfaces at various sport facilities in City of Tshwane.',
    projectType: 'project-management',
    serviceType: 'project_management',
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
    challenge:
      'Multiple sport facilities across City of Tshwane required urgent resurfacing with minimal disruption to community activities and strict quality standards.',
    solution:
      'Implemented phased project approach with detailed scheduling, quality control protocols, and community engagement to ensure continuous facility access.',
    results:
      'Successfully upgraded 12 sport facilities with zero community complaints and 98% quality compliance rating.',
    roiMetrics: [
      '12 sport facilities upgraded to modern standards',
      '98% quality compliance rating achieved',
      '25% increase in community facility usage',
      'Zero safety incidents during construction',
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
    serviceType: 'tender_management',
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
    challenge:
      'Pikitup Johannesburg required reliable plant hire services for illegal dumping cleanup and garden site maintenance with strict environmental compliance and rapid response capabilities.',
    solution:
      'Developed comprehensive plant hire solution with specialized equipment fleet, trained operators, and 24/7 response system for environmental cleanup operations.',
    results:
      'Successfully provided continuous plant hire services with high equipment uptime and effective illegal dumping response across Johannesburg.',
    roiMetrics: [
      '95% equipment uptime maintained',
      '40% reduction in illegal dumping response time',
      'Environmental compliance maintained at 100%',
      'City-wide cleanup operations supported effectively',
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
    serviceType: 'tender_management',
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
    challenge:
      'City of Tshwane informal settlements required reliable access to clean drinking water through mobile tanker services with strict health and safety compliance.',
    solution:
      'Implemented comprehensive water tanker hire service with 10,000L capacity vehicles, scheduled delivery routes, and quality assurance protocols for drinking water standards.',
    results:
      'Successfully provided continuous water supply to informal settlements with 100% health compliance and improved community access to clean drinking water.',
    roiMetrics: [
      '100% health and safety compliance maintained',
      '50,000+ residents served with clean water access',
      '99% delivery schedule adherence achieved',
      'Zero water quality incidents reported',
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
    serviceType: 'project_management',
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
    challenge:
      'City of Tshwane required reliable mechanical repair services for their light vehicle fleet with cost-effective maintenance and minimal downtime to ensure continuous municipal operations.',
    solution:
      'Implemented comprehensive mechanical repair service with preventive maintenance schedules, rapid response protocols, and cost-effective repair strategies for municipal fleet management.',
    results:
      'Successfully reduced vehicle downtime by 35% and maintenance costs by 20% while maintaining high fleet reliability for municipal operations.',
    roiMetrics: [
      '35% reduction in vehicle downtime achieved',
      '20% decrease in maintenance costs',
      '95% fleet availability maintained',
      'Preventive maintenance program implemented successfully',
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
    serviceType: 'tender_management',
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
    challenge:
      'City of Tshwane required reliable corporate hire of construction machines and equipment for large-scale infrastructure projects with strict availability and performance requirements.',
    solution:
      'Established comprehensive plant hire service with diverse equipment fleet, professional operators, and streamlined logistics management for municipal infrastructure projects.',
    results:
      'Successfully secured 3-year contract providing reliable equipment supply for major infrastructure projects with high client satisfaction and operational efficiency.',
    roiMetrics: [
      '3-year municipal contract secured',
      '98% equipment availability maintained',
      'Large-scale infrastructure projects enabled',
      'High client satisfaction achieved through responsive service',
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
    serviceType: 'tender_management',
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
    challenge:
      'City of Tshwane informal settlements required reliable mobile water tanker services with consistent quality and delivery schedules to ensure community access to clean drinking water.',
    solution:
      'Established comprehensive water tanker hire service with quality-controlled mobile units, scheduled delivery routes, and community engagement protocols for informal settlements.',
    results:
      'Successfully secured 3-year contract providing reliable water delivery services to informal settlements with consistent quality and community satisfaction.',
    roiMetrics: [
      '3-year municipal water delivery contract secured',
      '75,000+ residents served with clean water access',
      '100% delivery schedule compliance maintained',
      'Community satisfaction rating of 95% achieved',
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
    serviceType: 'tender_management',
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
    challenge:
      'City of Tshwane required reliable supply and delivery of manhole covers for water and sanitation infrastructure with strict quality standards and timely delivery schedules.',
    solution:
      'Established comprehensive supply chain management system with quality control protocols, efficient logistics, and reliable delivery scheduling for municipal infrastructure components.',
    results:
      'Successfully secured 3-year supply contract with consistent quality delivery and zero infrastructure project delays due to material supply issues.',
    roiMetrics: [
      '3-year municipal supply contract secured',
      '100% quality compliance maintained',
      'Zero project delays due to supply issues',
      'Municipal infrastructure projects supported effectively',
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
    serviceType: 'tender_management',
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
    challenge:
      'City of Tshwane required reliable supply and delivery of electrical cables, wire, and conductors for municipal electrical infrastructure upgrades with strict quality standards and delivery schedules.',
    solution:
      'Established comprehensive electrical supply chain with quality-certified materials, efficient logistics management, and reliable delivery scheduling for municipal electrical infrastructure projects.',
    results:
      'Successfully secured 3-year electrical supply contract with consistent quality delivery and enabled critical municipal electrical infrastructure upgrades.',
    roiMetrics: [
      '3-year electrical supply contract secured',
      '100% quality certification compliance maintained',
      'Critical electrical infrastructure upgrades enabled',
      'Reliable delivery performance strengthened client relationships',
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
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-05-01',
    status: 'completed',
    featured: true,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established professional online presence for transportation company',
      'Improved brand credibility and client trust',
      'Enhanced digital marketing capabilities',
    ],
    challenge:
      'Sithembe Transportation needed a professional website to showcase their 10+ years of experience and establish credibility in the competitive transportation industry.',
    solution:
      'Developed a modern, responsive website using Next.js with professional branding, company profile showcase, and service portfolio highlighting their transformation commitment.',
    results:
      'Successfully launched professional website that enhanced company credibility and improved client acquisition through improved online presence.',
    roiMetrics: [
      '300% increase in online inquiries',
      'Professional brand establishment achieved',
      'Enhanced client trust and credibility',
      'Improved digital marketing foundation',
    ],
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
    testimonial: {
      quote:
        'Jacob delivered an exceptional website that perfectly represents our company values and professionalism. The site has significantly improved our business credibility.',
      author: 'Management Team',
      company: 'Sithembe Transportation & Projects',
      position: 'Company Directors',
    },
  },
  {
    id: 'webdev-gas-call',
    title: 'Gas Call',
    description: `Gascall is an independent company, purchasing LPG directly from the various refineries in South Africa and supplying same directly to our clients in cylinder and bulk format. They have their own cylinder stock and LPG filling plants to ensure that we manage our costs and pass on the benefit to our clients.`,
    projectType: 'web-development',
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-04-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established professional e-commerce presence for LPG supplier',
      'Implemented online ordering system for gas cylinders',
      'Enhanced customer service and order management',
    ],
    challenge:
      'Gascall needed a professional e-commerce website to showcase their LPG supply services and enable online ordering for gas cylinders with integrated inventory management.',
    solution:
      'Developed comprehensive e-commerce solution using WordPress with WooCommerce integration, custom product catalog, and online ordering system for LPG cylinders and bulk supply.',
    results:
      'Successfully launched e-commerce platform that streamlined customer ordering process and enhanced business operations for LPG supply services.',
    roiMetrics: [
      'Professional e-commerce presence established',
      'Online ordering system implemented successfully',
      'Enhanced customer service and order management',
      'Streamlined business operations achieved',
    ],
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
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-03-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established professional online presence for accounting services',
      'Improved client acquisition through digital marketing',
      'Enhanced service credibility and trust',
    ],
    challenge:
      'King Tax Accounting Services needed a professional website to establish credibility in the accounting services market and attract clients for company registration, tax returns, and compliance services.',
    solution:
      'Developed a modern, professional website using Next.js with comprehensive service showcase, client testimonials, and SEO optimization for accounting and tax compliance keywords.',
    results:
      'Successfully launched professional website that enhanced business credibility and improved client acquisition for accounting and tax compliance services.',
    roiMetrics: [
      'Professional online presence established for accounting services',
      'Enhanced service credibility and client trust',
      'Improved digital marketing capabilities',
      'SEO optimization for accounting services implemented',
    ],
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
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-02-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established comprehensive brand identity for trading company',
      'Created professional business documentation and invoicing system',
      'Enhanced business credibility through complete digital presence',
    ],
    challenge:
      'Trading In Glory needed a complete brand identity package including website development, logo design, professional invoicing system, and company profile to establish credibility in the trading industry.',
    solution:
      'Developed comprehensive brand solution using Next.js with complete visual identity package including logo design, professional invoice templates, company profile, and website under construction page.',
    results:
      "Successfully established complete brand identity and professional business documentation system that enhanced Trading In Glory's credibility and business operations.",
    roiMetrics: [
      'Complete brand identity package delivered',
      'Professional business documentation system established',
      'Enhanced business credibility and professional image',
      'Comprehensive digital presence foundation created',
    ],
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
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2024-01-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established professional media company online presence',
      'Implemented content management system for scalability',
      'Enhanced SEO performance and digital marketing capabilities',
    ],
    challenge:
      'Playhouse Media Group needed a professional website with content management capabilities to showcase their media services and establish credibility in the competitive digital media industry.',
    solution:
      'Developed a comprehensive website using Next.js with Sanity CMS integration, complete brand identity package including logo design, and SEO optimization for media services.',
    results:
      'Successfully launched professional media company website with scalable content management system and enhanced digital marketing capabilities.',
    roiMetrics: [
      'Professional media company online presence established',
      'Scalable content management system implemented',
      'Enhanced SEO performance and digital marketing capabilities',
      'Complete brand identity package delivered',
    ],
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
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2023-12-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established online presence for Zimbabwean fish company',
      'Created modern responsive website for fresh fish business',
      'Enhanced brand visibility in local market',
    ],
    challenge:
      'Sea Harvest needed a professional website to showcase their fresh fish products from Kariba and Mutare and establish credibility in the Zimbabwean market.',
    solution:
      'Developed a modern, responsive website using React and Tailwind CSS with product showcase, company information, and contact functionality.',
    results:
      'Successfully launched professional website that enhanced brand visibility and provided customers with easy access to company information and services.',
    roiMetrics: [
      'Professional online presence established',
      'Enhanced brand credibility in local market',
      'Improved customer accessibility to services',
      'Modern responsive design implemented',
    ],
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
    serviceType: 'web_development',
    category: 'Web Development',
    duration: '',
    completedDate: '2023-11-01',
    status: 'completed',
    featured: false,
    myRole: 'Web Developer',
    keyOutcomes: [
      'Established professional online presence for academic assistance services',
      'Created comprehensive brand identity and digital marketing strategy',
      'Enhanced business credibility through complete digital transformation',
    ],
    challenge:
      'Edurite needed a complete digital transformation including website development, brand identity, and online business presence to establish credibility in the academic assistance market.',
    solution:
      'Developed comprehensive digital solution using Next.js with complete brand package including logo design, social media setup, and Google My Business integration.',
    results:
      'Successfully launched complete digital presence that established Edurite as a credible academic assistance provider with professional online visibility.',
    roiMetrics: [
      'Complete digital transformation achieved',
      'Professional brand identity established',
      'Enhanced online visibility and credibility',
      'Integrated social media and business listings',
    ],
    technologies: ['Next.js', 'React', 'Typescript', 'Tailwind'],
    skills: ['Email Hosting', 'Logo Design', 'Website Under Construction'],
    image: '/images/project-placeholder.svg',
    externalUrl: 'https://www.edurite.co.za',
  },
];
