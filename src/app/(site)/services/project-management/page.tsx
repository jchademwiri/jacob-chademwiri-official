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
import { ConsultationCTA } from '@/components/services';
import { CheckCircle, Clock, Award } from 'lucide-react';
import { projectAchievements, projectMethodologies } from '@/data';
import ProjectManagementLifecycle from '@/sites/services/project-management/project-management-lifecycle';
import { projectServices } from '@/data/project-services';

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

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-gray-900 dark:to-green-950/20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="bg-green-600 text-white hover:bg-green-700"
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
      <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {projectServices.map((service, index) => {
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
      <ProjectManagementLifecycle />

      {/* Methodologies */}
      <section className="py-16">
        <div className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {projectMethodologies.map((methodology, index) => {
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
      <section className="py-16  bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {projectAchievements.map((achievement, index) => (
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
      {/* <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTestimonials
            serviceType="project-management"
            showMetrics={true}
          />
        </div>
      </section> */}

      {/* Project Types */}
      <section className="py-16  bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Project Types & Industries
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Experience managing diverse project types across multiple industries
            and sectors.
          </p>

          <div className="flex flex-wrap place-content-center gap-4 mb-8">
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
