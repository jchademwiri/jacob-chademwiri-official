'use client';
import {
  ArrowRight,
  Building2,
  Calendar,
  MapPin,
  Briefcase,
  Globe,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const positions = [
  {
    id: 'sithembe',
    company: 'SITHEMBE TRANSPORTATION & PROJECTS',
    title: 'Tendering & Accounts Receivable Manager | Projects Coordinator',
    type: 'Full-time',
    location: 'Centurion, Gauteng, South Africa',
    duration: 'Sep 2024 - Present · 9 mos',
    description:
      'I oversee accounts receivable operations, tender processes, project coordination & administration, & digital solutions, ensuring financial accuracy, operational efficiency, and compliance.',
    keyResponsibilities: [
      'Manage full accounts receivable cycle using Sage',
      'Lead tendering processes with high win rates',
      'Coordinate strategic project meetings and risk management',
      'Implement digital solutions and process automation',
    ],
    skills: [
      'Tender Management',
      'Project Management',
      'Sage Accounting',
      'Accounts Receivable',
    ],
    gradient: 'from-blue-600/20 to-cyan-600/20',
    iconBg: 'bg-blue-100 dark:bg-blue-900/30',
    iconColor: 'text-blue-600 dark:text-blue-400',
  },
  {
    id: 'playhouse',
    company: 'PLAYHOUSE MEDIA GROUP',
    title: 'Website Developer',
    type: 'Freelance',
    location: 'Gauteng, South Africa',
    duration: 'Jan 2020 - Present · 5 yrs 5 mos',
    description:
      'I create custom web solutions using modern technologies, focusing on SEO optimization, user experience, and sustainable digital presence for businesses.',
    keyResponsibilities: [
      'Develop responsive websites using WordPress & React',
      'Convert designs to functional web applications',
      'Implement SEO strategies and analytics',
      'Maintain consistency in design and user experience',
    ],
    skills: ['React.js', 'Next.js', 'WordPress', 'SEO', 'Tailwind CSS'],
    gradient: 'from-green-600/20 to-emerald-600/20',
    iconBg: 'bg-green-100 dark:bg-green-900/30',
    iconColor: 'text-green-600 dark:text-green-400',
  },
];

export function CurrentEmployment() {
  const router = useRouter();
  const handleViewDetails = (positionId: string) => {
    // Navigate to detailed page - you can implement routing here
    // For example, using Next.js router:

    router.push(`/${positionId}`);
    console.log(`Navigate to ${positionId} details`);
  };

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
            <span className="text-sm uppercase tracking-wider font-medium text-green-600 dark:text-green-400">
              Current Positions
            </span>
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Where I'm Making an Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Currently contributing expertise across tender management, project
            coordination, and web development in both corporate and freelance
            environments.
          </p>
        </div>

        {/* Position Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {positions.map((position) => (
            <div
              key={position.id}
              className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => handleViewDetails(position.id)}
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${position.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${position.iconBg}`}>
                    {position.type === 'Full-time' ? (
                      <Building2 className={`h-6 w-6 ${position.iconColor}`} />
                    ) : (
                      <Globe className={`h-6 w-6 ${position.iconColor}`} />
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      position.type === 'Full-time'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    }`}
                  >
                    {position.type}
                  </span>
                </div>

                {/* Company & Title */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {position.company}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {position.title}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground w-full">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{position.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {position.description}
                </p>

                {/* Key Responsibilities */}
                {/* <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">Key Responsibilities:</h4>
                  <ul className="space-y-1">
                    {position.keyResponsibilities.map((resp, index) => (
                      <li key={index} className="text-xs text-muted-foreground flex items-start space-x-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">
                    Core Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md ${position.iconBg} ${position.iconColor}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                {/* <div className="pt-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-background/80 transition-colors"
                  >
                    <span>View Detailed Experience</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
