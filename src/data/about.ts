export interface Achievement {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  challenge: string;
  results: string;
  skills: string[];
}

export interface AboutPageData {
  hero: {
    name: string;
    title: string;
    tagline: string;
    profileImage: string;
    badges: string[];
  };
  story: {
    content: string[];
    quote: string;
  };
  achievements: Achievement[];
  skills: Skill[];
  experiences: Experience[];
  featuredProjects: Project[];
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
  }>;
  personalInterests: string[];
  contact: {
    description: string;
    email: string;
    cvLink: string;
  };
}

export const aboutData: AboutPageData = {
  hero: {
    name: 'Jacob Chademwiri',
    title: 'Full-Stack Web Developer & Project Manager',
    tagline: 'Delivering business results, not just code.',
    profileImage: '/jacobc.jpg',
    badges: [
      'Web Development',
      'Project Management',
      'SEO',
      'Tender Management',
      'IT Support',
    ],
  },
  story: {
    content: [
      "I didn't start out planning to be both a developer and a project manager—but every project taught me that great technology without great execution is just expensive code.",
      "Over the past 5+ years, I've written thousands of lines of code and led cross-functional teams. I've debugged complex issues at 2 AM and explained project delays in boardrooms. These experiences taught me that the best solutions aren't just technically elegant—they're business-smart.",
      "That's why I approach every project with two questions: How do we build this right? and How do we build the right thing? Whether I'm architecting a new web application or coordinating a digital transformation, I bring that dual perspective to everything I do.",
    ],
    quote:
      "Code is communication. Whether I'm writing JavaScript or leading a project meeting, everything I do is about clear, effective communication—between systems, teams, and business goals.",
  },
  achievements: [
    { value: '50+', label: 'Projects Delivered' },
    { value: '92%', label: 'Tender Success Rate' },
    { value: 'R15M+', label: 'Contracts Secured' },
    { value: '100%', label: 'On-Time Delivery (3 Years)' },
  ],
  skills: [
    {
      name: 'Technical Skills',
      items: [
        'React.js, Next.js, TypeScript',
        'WordPress, WooCommerce',
        'HTML5, CSS3, Tailwind CSS',
        'Node.js, MongoDB',
        'Google Cloud, Vercel, Netlify',
        'Figma, Adobe XD',
      ],
    },
    {
      name: 'Project & Business Skills',
      items: [
        'Project Management (Agile, Microsoft Project)',
        'Stakeholder & Team Leadership',
        'Budget & Risk Management',
        'Quality Assurance & Compliance',
        'Tender Management & RFPs',
        'Process Optimization & Automation',
      ],
    },
    {
      name: 'Certifications',
      items: [
        'Career Essentials in Project Management (Microsoft & LinkedIn)',
        'Agile Project Management Foundations',
        'Microsoft 365 Administration',
        'Sage Evolution Certified User',
        'Diploma in Information Technology (Mutare Polytechnical College)',
        'Frontend Development Certification (Treehouse)',
      ],
    },
  ],
  experiences: [
    {
      company: 'Sithembe Transportation & Projects',
      role: 'Tendering Manager | Project Manager',
      period: '2021 - Present',
      location: 'Centurion, Gauteng, South Africa',
      type: 'Full-time',
      description: [
        'Lead and manage all tender processes across multiple categories (civil engineering, plant hire, PPE supply, mechanical, horticulture, building, and more)',
        'Oversee and coordinate a diverse portfolio of municipal and private sector projects (20+ active contracts, R15M+ in total value)',
        'Project management including planning, risk management, stakeholder engagement, and invoicing',
        'Implement digital transformation and process automation initiatives',
        'Coordinate cross-functional teams and ensure compliance with regulatory standards',
        'Directly responsible for accounts receivable, financial accuracy, and reporting',
        'Key projects managed include: City of Tshwane PPE Supply, Water Tankers, Plant Hire, Civil Engineering, and more (see full project list below)',
      ],
    },
    {
      company: 'Livhu and Musa Enterprise',
      role: 'Project Manager (Tendering & Operations)',
      period: '2023 - Present',
      location: 'Gauteng, South Africa',
      type: 'Consultant',
      description: [
        'Manage and coordinate tender submissions and project delivery for municipal contracts',
        'Oversee plant hire, water tanker supply, and supply & delivery projects for City of Tshwane and other clients',
        'Responsible for project planning, client communication, and contract compliance',
        'Projects include: Corporate Fleet Management, Water Tanker Hire, Electrical Supply, and more',
      ],
    },
    {
      company: 'Playhouse Media Group',
      role: 'Freelance Web Developer',
      period: '2020 - Present',
      location: 'Gauteng, South Africa',
      type: 'Freelance',
      description: [
        'Design, develop, and maintain custom websites and web applications for SMEs and entrepreneurs',
        'Specialize in WordPress, React, Next.js, and SEO optimization',
        'Deliver end-to-end solutions from UI/UX design to deployment and analytics',
        '40+ successful project deliveries across e-commerce, education, and corporate sectors',
      ],
    },
  ],
  featuredProjects: [
    {
      title: 'Sithembe Transportation Website Redesign',
      period: 'Oct 2022 - Mar 2023',
      description:
        'Led the redesign and development of the company website, focusing on improving user experience and implementing modern design practices.',
      challenge: 'Modernize digital presence for a competitive market.',
      results: '60% faster loading, mobile-optimized, improved search rankings',
      skills: ['Next.js', 'Tailwind CSS', 'Figma', 'SEO'],
    },
    {
      title: 'Edurite Tutors Educational Platform',
      period: 'Jul 2023 - Present',
      description:
        'Built a complete digital presence from scratch for an educational services provider.',
      challenge: 'Build a complete digital presence from scratch.',
      results:
        'Professional brand, strong local presence, easy content management',
      skills: ['WordPress', 'Elementor', 'SEO', 'Google My Business'],
    },
  ],
  testimonials: [
    {
      quote:
        'Jacob is a skilled, dedicated professional with exceptional problem-solving abilities, strong teamwork, and a proven track record of delivering results.',
      author: 'Bright Bhamu',
      role: 'Software Development Project Manager',
    },
  ],
  personalInterests: [
    'Currently learning AI integration for web apps',
    "Passionate about photography and exploring South Africa's landscapes",
    'Enjoy collaborating with diverse teams and mentoring junior developers',
  ],
  contact: {
    description:
      'Ready to start your project or just want to connect? I typically respond within 24 hours.',
    email: 'hello@jacobc.co.za',
    cvLink: '/jchademwiri-cv.pdf',
  },
};
