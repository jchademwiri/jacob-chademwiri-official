import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ServiceTestimonials, ConsultationCTA } from '@/components/services';
import {
  CheckCircle,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  Shield,
  Target,
  Clock,
  Award,
  BarChart3,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Project Management Services - Expert Project Coordination & Delivery',
  description:
    'Professional project management and coordination services. 5+ years experience with 95% on-time delivery rate. Specializing in stakeholder management, budget control, and quality assurance.',
  keywords: [
    'project management',
    'project coordination',
    'stakeholder management',
    'budget control',
    'project planning',
    'risk management',
    'quality assurance',
    'project delivery',
  ],
};

const services = [
  {
    title: 'Project Planning & Coordination',
    description:
      'Comprehensive project planning from initiation to closure with detailed coordination.',
    icon: Calendar,
    features: [
      'Project scope definition',
      'Work breakdown structure',
      'Timeline and milestone planning',
      'Resource allocation and scheduling',
    ],
  },
  {
    title: 'Stakeholder Management',
    description:
      'Effective communication and relationship management with all project stakeholders.',
    icon: Users,
    features: [
      'Stakeholder identification and analysis',
      'Communication planning',
      'Regular progress reporting',
      'Conflict resolution and mediation',
    ],
  },
  {
    title: 'Budget Tracking & Control',
    description:
      'Comprehensive financial management and cost control throughout project lifecycle.',
    icon: DollarSign,
    features: [
      'Budget planning and forecasting',
      'Cost tracking and monitoring',
      'Financial reporting and analysis',
      'Change order management',
    ],
  },
  {
    title: 'Risk & Quality Management',
    description:
      'Proactive risk identification and quality assurance to ensure successful delivery.',
    icon: Shield,
    features: [
      'Risk assessment and mitigation',
      'Quality control processes',
      'Issue tracking and resolution',
      'Compliance monitoring',
    ],
  },
];

const methodologies = [
  {
    name: 'Agile/Scrum',
    description:
      'Iterative approach for flexible and adaptive project delivery',
    icon: Target,
  },
  {
    name: 'Waterfall',
    description: 'Traditional sequential approach for well-defined projects',
    icon: BarChart3,
  },
  {
    name: 'Hybrid',
    description: 'Combined approach tailored to specific project requirements',
    icon: TrendingUp,
  },
];

const achievements = [
  {
    metric: '95%',
    label: 'On-Time Delivery',
    description: 'Projects completed on schedule',
  },
  {
    metric: '100+',
    label: 'Projects Managed',
    description: 'Across various industries',
  },
  {
    metric: '5+',
    label: 'Years Experience',
    description: 'In project management',
  },
  {
    metric: '98%',
    label: 'Client Satisfaction',
    description: 'Positive feedback rate',
  },
];

const projectPhases = [
  {
    phase: 'Initiation',
    description:
      'Project charter, stakeholder identification, and initial planning',
    activities: [
      'Project charter development',
      'Stakeholder analysis',
      'Initial risk assessment',
    ],
  },
  {
    phase: 'Planning',
    description:
      'Detailed project planning, resource allocation, and timeline development',
    activities: [
      'Work breakdown structure',
      'Resource planning',
      'Risk management plan',
    ],
  },
  {
    phase: 'Execution',
    description:
      'Project implementation, team coordination, and progress monitoring',
    activities: ['Team coordination', 'Progress tracking', 'Quality assurance'],
  },
  {
    phase: 'Monitoring',
    description:
      'Performance tracking, issue resolution, and stakeholder communication',
    activities: [
      'Performance monitoring',
      'Issue management',
      'Status reporting',
    ],
  },
  {
    phase: 'Closure',
    description: 'Project completion, documentation, and lessons learned',
    activities: [
      'Final deliverables',
      'Project documentation',
      'Post-project review',
    ],
  },
];

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-gray-900 dark:to-green-950/20" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <CheckCircle className="h-6 w-6 text-green-600" />
                <span className="text-sm uppercase tracking-wider font-medium text-green-600">
                  Project Management
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Deliver Projects{' '}
                <span className="text-green-600">On Time, On Budget</span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Expert project coordination and management services that ensure
                successful delivery. From planning to closure, I handle every
                aspect of your project with precision and care.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">View Project Success</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24-48hr Response
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  Projects Coordinator
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Current Role</h3>
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      Projects Coordinator
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      SITHEMBE TRANSPORTATION & PROJECTS
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Coordinating multiple projects simultaneously, managing
                      stakeholders, and ensuring successful delivery across
                      various project types.
                    </p>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        95%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        On-Time Rate
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        100+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Comprehensive Project Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From initial planning to final delivery, I provide end-to-end
              project management services that ensure your projects are
              completed successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <IconComponent className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Management Lifecycle
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A structured approach to project management ensuring comprehensive
              coverage of all project phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {projectPhases.map((phase, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <CardDescription className="text-sm">
                    {phase.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1 text-sm">
                    {phase.activities.map((activity, idx) => (
                      <li
                        key={idx}
                        className="text-gray-600 dark:text-gray-400"
                      >
                        • {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Management Methodologies
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Flexible approach using the right methodology for your specific
              project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {methodologies.map((methodology, index) => {
              const IconComponent = methodology.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-green-600 dark:text-green-400" />
                    </div>
                    <CardTitle className="text-xl">
                      {methodology.name}
                    </CardTitle>
                    <CardDescription>{methodology.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Project Success Metrics
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Consistent delivery excellence across all project management
              engagements.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {achievement.metric}
                </div>
                <div className="text-lg font-semibold mb-1">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ServiceTestimonials
            serviceType="project-management"
            showMetrics={true}
          />
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Project Types & Industries
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Experience managing diverse project types across multiple industries
            and sectors.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              'Infrastructure',
              'Transportation',
              'Construction',
              'IT Projects',
              'Process Improvement',
              'Digital Transformation',
              'Compliance Projects',
              'System Implementation',
            ].map((type, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="p-3 text-center"
              >
                {type}
              </Badge>
            ))}
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Why Choose My Project Management?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Proven track record of success
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Flexible methodology approach
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Strong stakeholder management
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Comprehensive risk management
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Detailed progress reporting
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Budget and timeline control
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <ConsultationCTA
        serviceType="project-management"
        showBenefits={true}
        showContactInfo={true}
      />
    </div>
  );
}
