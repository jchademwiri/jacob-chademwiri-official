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
import { ArrowRight, CheckCircle, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title:
    'Professional Services - Tender Management, Project Management & Web Development',
  description:
    'Expert services in tender management, project coordination, and web development. Helping businesses win contracts, manage projects efficiently, and build powerful digital solutions.',
  keywords: [
    'tender management',
    'project management',
    'web development',
    'business services',
    'contract bidding',
    'project coordination',
    'digital solutions',
    'CIDB',
    'South Africa',
  ],
};

const services = [
  {
    title: 'Tender Management',
    href: '/services/tender-management',
    description:
      'Expert tender preparation, bid management, and compliance support to help your business win more contracts.',
    icon: Target,
    features: [
      'CIDB Registration & Grading',
      'Bid Preparation & Submission',
      'Compliance Management',
      'Proposal Writing',
      'Tender Documentation',
      'Risk Assessment',
    ],
    stats: {
      experience: '3+ Years',
      successRate: '85%',
      contracts: '50+ Tenders',
    },
    color: 'bg-blue-500',
  },
  {
    title: 'Project Management',
    href: '/services/project-management',
    description:
      'Comprehensive project coordination, stakeholder management, and delivery optimization for successful outcomes.',
    icon: CheckCircle,
    features: [
      'Project Planning & Coordination',
      'Stakeholder Management',
      'Budget Tracking & Control',
      'Risk Management',
      'Quality Assurance',
      'Progress Reporting',
    ],
    stats: {
      experience: '5+ Years',
      projects: '100+ Projects',
      onTime: '95%',
    },
    color: 'bg-green-500',
  },
  {
    title: 'Web Development',
    href: '/services/web-development',
    description:
      'Modern, scalable web solutions built with cutting-edge technologies for optimal performance and user experience.',
    icon: Zap,
    features: [
      'Next.js & React Development',
      'WordPress Solutions',
      'E-commerce Platforms',
      'SEO Optimization',
      'Performance Optimization',
      'Maintenance & Support',
    ],
    stats: {
      experience: '7+ Years',
      websites: '200+ Sites',
      performance: '98% Uptime',
    },
    color: 'bg-purple-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
            <span className="text-sm uppercase tracking-wider font-medium text-green-600 dark:text-green-400">
              Professional Services
            </span>
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Comprehensive Business{' '}
            <span className="text-green-600 dark:text-green-400">
              Solutions
            </span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
            From winning tenders and managing complex projects to building
            powerful digital solutions, I provide end-to-end business services
            that drive growth and success.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              SITHEMBE Transportation & Projects
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Tendering & Accounts Receivable Manager
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Projects Coordinator
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={index}
                  className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 ${service.color}`}
                  />

                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`p-2 rounded-lg ${service.color} text-white`}
                      >
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Key Features */}
                    <div>
                      <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">
                        Key Services
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                      {Object.entries(service.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="font-bold text-lg text-green-600 dark:text-green-400">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 dark:text-gray-400 capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button
                      asChild
                      className="w-full group-hover:bg-green-600 transition-colors"
                    >
                      <Link
                        href={service.href}
                        className="flex items-center justify-center"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose My Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Choose My Services?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-12">
            With extensive experience across tender management, project
            coordination, and web development, I bring a unique combination of
            business acumen and technical expertise to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Track record of successful tender wins, on-time project
                delivery, and high-performance websites.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                End-to-End Solutions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                From initial planning to final delivery, I handle every aspect
                of your project with attention to detail.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Approach</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Leveraging the latest tools, technologies, and methodologies for
                optimal efficiency and results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Let's discuss how my services can help your business achieve its
            goals. Schedule a consultation to explore the best solutions for
            your needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/case-studies">View Case Studies</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
