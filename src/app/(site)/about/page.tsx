import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { InteractiveSkills } from '@/components/interactive-skills';
import { AnimatedTimeline } from '@/components/animated-timeline';
import { EducationCertifications } from '@/components/education-certifications';
import { DownloadableResume } from '@/components/downloadable-resume';
import { PersonalPhilosophy } from '@/components/personal-philosophy';

const aboutData = {
  hero: {
    profileImage: '/jacobc.jpg',
    name: 'Jacob Chademwiri',
    title:
      'Tendering & Accounts Receivable Manager | Projects Coordinator | Freelance Website Developer | Aspiring Project Manager',
    tagline:
      'Driving business growth through optimal efficiency and digital solutions.',
    badges: [
      'Web Development',
      'SEO Specialist',
      'Tender Management',
      'Project Coordination',
      'IT Support',
      'Business Growth',
    ],
  },
  story: {
    content: [
      'I am a result-oriented professional with expertise in Tender Administration/Management, IT Support, Web Development and a growing skillset in Project Management.',
      'With a record of accomplishment of successful tendering, website developments and excellent IT support service delivery, I am committed to driving business growth through optimal efficiency.',
      'My dedication to continuous learning and development has led me to focus on acquiring Project Management skills to complement my existing expertise.',
      "I am committed to providing tailored solutions that meet each client's unique needs and am constantly seeking new and innovative ways to optimize efficiency and improve business performance.",
    ],
    quote: 'Success is built on curiosity, resilience, and collaboration.',
  },
  achievements: [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Delivered', value: '30+' },
    { label: 'Happy Clients', value: '20+' },
    { label: 'Certifications', value: '10+' },
  ],
  skills: [
    {
      category: 'Technical',
      items: [
        'Web Development',
        'SEO',
        'WordPress',
        'IT Support',
        'Microsoft 365',
        'JavaScript',
        'TypeScript',
        'React.js',
        'Next.js',
        'Tailwind CSS',
        'MongoDB',
        'Cloud Platforms',
      ],
    },
    {
      category: 'Business',
      items: [
        'Tender Management',
        'Project Management',
        'Accounts Receivable',
        'Team Leadership',
        'Client Relations',
        'Process Optimization',
        'Strategic Planning',
        'Bid Management',
        'Payroll Administration',
        'Invoicing',
      ],
    },
    {
      category: 'Certifications',
      items: [
        'Explore a Career in Project Management',
        'Agile Foundations',
        'Project Management Foundations',
        'Build Your Project Management Skills',
        'Career Essentials in Project Management',
        'Diploma in Information Technology',
        'Front-End Developer Certificate',
        'Microsoft 365 Essential Training',
        'Introduction to Microsoft 365 for IT Pros',
      ],
    },
  ],
  featuredProjects: [
    {
      title:
        'Sithembe Transportation and Projects Website Redesign and Development',
      period: 'Oct 2022 - Mar 2023',
      challenge:
        'Revamp the existing website to attract more clients and partners, ensuring easy navigation and accessibility.',
      results:
        'Professional online presence, improved user experience, and modern design practices implemented.',
      skills: ['Next.js', 'Tailwind CSS', 'Figma', 'SEO'],
    },
    {
      title: 'Edurite Tutors',
      period: 'Jul 2023 - Present',
      challenge:
        'Develop a site from the ground up using WordPress and Elementor, and connect business to Google My Business.',
      results:
        'Unique, professional virtual assistance platform for academic assignments and research projects.',
      skills: ['WordPress', 'SEO', 'Social Media', 'Google My Business'],
    },
  ],
  testimonials: [
    {
      quote:
        'Jacob is a skilled, dedicated professional with exceptional problem-solving abilities, strong teamwork, and a proven track record of delivering results.',
      author: 'Bright Bhamu',
      role: 'Website Designer | Software Development Project Manager',
    },
    {
      quote:
        "Hie Zuma, it's well that you are linked. Keep it up, nice time on LinkedIn.",
      author: 'Samson Zwaamwe',
      role: 'MOHCC Clinic Health Information Officer',
    },
  ],
  personalInterests: [
    'Mentoring young developers',
    'Cycling and outdoor adventures',
    'Exploring new technologies',
  ],
  contact: {
    description:
      "Ready to collaborate or have a project in mind? Let's connect!",
    email: 'jacob@example.com',
    cvLink: '/jacob-chademwiri-cv.pdf',
  },
  experiences: [
    {
      company: 'SITHEMBE TRANSPORTATION AND PROJECTS',
      role: 'Tendering & Accounts Receivable Manager | Projects Coordinator | IT Support Technician',
      period: 'Sep 2024 - Present',
      location: 'Centurion, Gauteng, South Africa',
      description: [
        'Oversee accounts receivable operations, tender processes, project coordination & administration, & digital solutions.',
        'Manage the full accounts receivable cycle, including invoicing, collections, and cash flow tracking using Sage.',
        'Lead tendering processes from opportunity identification to submission, ensuring compliance and high win rates.',
        'Facilitate strategic project meetings, monitor key performance metrics, and proactively manage risks.',
        'Manage website development and IT solutions, enhancing operational efficiency and digital presence.',
      ],
    },
    {
      company: 'Playhouse Media Group',
      role: 'Website Developer',
      period: 'Jan 2020 - Present',
      location: 'Johannesburg, Gauteng, South Africa',
      description: [
        'Create web pages using WordPress and a combination of markup languages.',
        'Identify usability and develop functional, easy-to-operate and eye-catching web applications.',
        'Writing web pages compatible with SEO.',
        'Convert Adobe XD layouts to web pages using HTML, CSS and JavaScript.',
        'Perform websites maintenance and enhancements.',
      ],
    },
    {
      company: 'Baum Systems Pvt Ltd',
      role: 'Web Developer',
      period: 'Aug 2019 - Jan 2022',
      location: 'Cape Town Area, South Africa',
      description: [
        'Designing and prototyping websites using Adobe XD or Figma.',
        'Create data-driven websites using React JS or Next JS, APIs and Sanity io headless CMS.',
        'Deploy websites to GCP, Vercel, Netlify and Cloudflare.',
        'Analyzing user/customer behaviors using Google Analytics.',
      ],
    },
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-4">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6">
            <Image
              src={aboutData.hero.profileImage}
              alt={aboutData.hero.name}
              fill
              className="rounded-full object-cover border-4 border-green-600 shadow-lg"
              priority
            />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {aboutData.hero.name}
          </h1>
          <h2 className="text-lg md:text-2xl text-green-600 dark:text-green-400 font-semibold mb-2">
            {aboutData.hero.title}
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            {aboutData.hero.tagline}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-6">
            {aboutData.hero.badges.map((badge) => (
              <Badge
                key={badge}
                className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 text-sm font-medium rounded-full"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Quote */}
      <section className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          {aboutData.story.content.map((para, i) => (
            <p
              key={i}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {para}
            </p>
          ))}
          <blockquote className="italic text-green-600 dark:text-green-400 text-xl font-semibold border-l-4 border-green-600 pl-4 mt-6">
            “{aboutData.story.quote}”
          </blockquote>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {aboutData.achievements.map((ach) => (
            <Card key={ach.label} className="flex flex-col items-center py-8">
              <CardTitle className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                {ach.value}
              </CardTitle>
              <CardContent className="text-base text-muted-foreground text-center">
                {ach.label}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Interactive Skills */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Skills & Expertise
          </h2>
          <InteractiveSkills />
        </div>
      </section>

      {/* Animated Experience Timeline */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-12">
            Professional Experience
          </h2>
          <AnimatedTimeline
            items={aboutData.experiences.map((exp, index) => ({
              id: `exp-${index}`,
              company: exp.company,
              role: exp.role,
              period: exp.period,
              location: exp.location,
              description: exp.description,
              skills:
                exp.company === 'SITHEMBE TRANSPORTATION AND PROJECTS'
                  ? [
                      'Sage',
                      'Tender Management',
                      'Project Coordination',
                      'IT Support',
                    ]
                  : exp.company === 'Playhouse Media Group'
                  ? ['WordPress', 'HTML', 'CSS', 'JavaScript', 'SEO']
                  : [
                      'React.js',
                      'Next.js',
                      'Adobe XD',
                      'Figma',
                      'Google Analytics',
                    ],
              achievements:
                exp.company === 'SITHEMBE TRANSPORTATION AND PROJECTS'
                  ? [
                      'Improved cash flow tracking efficiency',
                      'Increased tender win rates',
                      'Enhanced digital presence',
                    ]
                  : exp.company === 'Playhouse Media Group'
                  ? [
                      'Delivered 15+ responsive websites',
                      'Improved SEO rankings for clients',
                      'Maintained 99% uptime',
                    ]
                  : [
                      'Built scalable web applications',
                      'Optimized site performance',
                      'Implemented modern deployment practices',
                    ],
            }))}
          />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.featuredProjects.map((proj) => (
              <Card key={proj.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold mb-2">
                    {proj.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground mb-2">
                    {proj.period}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Challenge:</span>{' '}
                    {proj.challenge}
                  </div>
                  <div className="mb-2">
                    <span className="font-semibold">Results:</span>{' '}
                    {proj.results}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {proj.skills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 px-3 py-1 text-xs font-medium rounded-full"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutData.testimonials.map((testi) => (
              <Card key={testi.author} className="h-full">
                <CardContent>
                  <blockquote className="italic text-lg text-muted-foreground mb-4">
                    “{testi.quote}”
                  </blockquote>
                  <div className="font-semibold text-green-700 dark:text-green-400">
                    {testi.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testi.role}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <EducationCertifications />
        </div>
      </section>

      {/* Personal Philosophy */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="max-w-6xl mx-auto px-4">
          <PersonalPhilosophy />
        </div>
      </section>

      {/* Downloadable Resume */}
      <section className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <DownloadableResume />
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-8">
            Personal Interests
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {aboutData.personalInterests.map((interest) => (
              <Badge
                key={interest}
                className="bg-gray-200/60 dark:bg-gray-800/60 text-sm font-medium px-4 py-2 rounded-full"
              >
                {interest}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 md:py-20 bg-muted/50">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-lg text-muted-foreground mb-6">
            {aboutData.contact.description}
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              href={`mailto:${aboutData.contact.email}`}
              className="text-green-600 dark:text-green-400 text-lg font-semibold underline"
            >
              {aboutData.contact.email}
            </a>
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white border-0 mt-2"
            >
              <Link
                href={aboutData.contact.cvLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
