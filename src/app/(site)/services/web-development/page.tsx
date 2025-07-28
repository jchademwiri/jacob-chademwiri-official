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
  Code,
  Zap,
  Search,
  ShoppingCart,
  Globe,
  Palette,
  Shield,
  CheckCircle,
  Clock,
  Award,
  Database,
  Rocket,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Web Development Services - Modern, Fast & SEO-Optimized Websites',
  description:
    'Professional web development services using Next.js, React, and WordPress. 7+ years experience building fast, modern websites with 98% uptime and excellent performance.',
  keywords: [
    'web development',
    'Next.js development',
    'React development',
    'WordPress development',
    'e-commerce development',
    'SEO optimization',
    'responsive design',
    'web performance',
  ],
};

const services = [
  {
    title: 'Next.js & React Development',
    description:
      'Modern, fast, and scalable web applications built with cutting-edge technologies.',
    icon: Code,
    features: [
      'Server-side rendering (SSR)',
      'Static site generation (SSG)',
      'API development and integration',
      'Performance optimization',
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'WordPress Solutions',
    description:
      'Custom WordPress websites and applications with modern design and functionality.',
    icon: Globe,
    features: [
      'Custom theme development',
      'Plugin development and customization',
      'WooCommerce integration',
      'Performance optimization',
    ],
    technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce'],
  },
  {
    title: 'E-commerce Development',
    description:
      'Complete e-commerce solutions that drive sales and provide excellent user experience.',
    icon: ShoppingCart,
    features: [
      'Online store development',
      'Payment gateway integration',
      'Inventory management systems',
      'Order processing automation',
    ],
    technologies: ['WooCommerce', 'Shopify', 'Stripe', 'PayPal'],
  },
  {
    title: 'SEO & Performance',
    description:
      'Comprehensive optimization for search engines and superior website performance.',
    icon: Search,
    features: [
      'Technical SEO optimization',
      'Core Web Vitals improvement',
      'Site speed optimization',
      'Mobile responsiveness',
    ],
    technologies: [
      'Google Analytics',
      'Search Console',
      'PageSpeed',
      'Lighthouse',
    ],
  },
];

const technologies = [
  { name: 'Next.js', category: 'Frontend Framework', icon: Rocket },
  { name: 'React', category: 'JavaScript Library', icon: Code },
  { name: 'TypeScript', category: 'Programming Language', icon: Shield },
  { name: 'Tailwind CSS', category: 'CSS Framework', icon: Palette },
  { name: 'WordPress', category: 'CMS Platform', icon: Globe },
  { name: 'Node.js', category: 'Backend Runtime', icon: Database },
];

const achievements = [
  {
    metric: '200+',
    label: 'Websites Built',
    description: 'Across various industries',
  },
  {
    metric: '98%',
    label: 'Uptime Rate',
    description: 'Reliable hosting and maintenance',
  },
  {
    metric: '7+',
    label: 'Years Experience',
    description: 'In web development',
  },
  {
    metric: '90+',
    label: 'Performance Score',
    description: 'Average Lighthouse score',
  },
];

const developmentProcess = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'Understanding your requirements, goals, and target audience to create a comprehensive project plan.',
    deliverables: [
      'Project scope document',
      'Technical specifications',
      'Timeline and milestones',
    ],
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    description:
      'Creating wireframes, mockups, and interactive prototypes to visualize the final product.',
    deliverables: [
      'Wireframes and mockups',
      'Interactive prototypes',
      'Design system',
    ],
  },
  {
    step: '03',
    title: 'Development & Testing',
    description:
      'Building the website with clean, maintainable code and thorough testing across devices.',
    deliverables: [
      'Responsive website',
      'Cross-browser testing',
      'Performance optimization',
    ],
  },
  {
    step: '04',
    title: 'Launch & Optimization',
    description:
      'Deploying the website and optimizing for search engines and performance.',
    deliverables: [
      'Live website deployment',
      'SEO optimization',
      'Performance monitoring',
    ],
  },
  {
    step: '05',
    title: 'Maintenance & Support',
    description:
      'Ongoing maintenance, updates, and support to ensure optimal performance.',
    deliverables: [
      'Regular updates',
      'Security monitoring',
      'Performance reports',
    ],
  },
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-950/20 dark:via-gray-900 dark:to-purple-950/20" />

        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="h-6 w-6 text-purple-600" />
                <span className="text-sm uppercase tracking-wider font-medium text-purple-600">
                  Web Development
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Build <span className="text-purple-600">Modern, Fast</span>
                <br />& Scalable Websites
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Professional web development services using cutting-edge
                technologies. From simple websites to complex web applications,
                I deliver solutions that perform exceptionally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">View Case Studies</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24-48hr Response
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  7+ Years Experience
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Development Expertise
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 justify-center">
                      Next.js
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 justify-center">
                      React
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 justify-center">
                      WordPress
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200 justify-center">
                      TypeScript
                    </Badge>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        200+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Websites
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        98%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Uptime
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
              Web Development Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From modern web applications to e-commerce solutions, I provide
              comprehensive web development services tailored to your business
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <IconComponent className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">
                        Technologies:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies & Tools
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Using modern, proven technologies to build robust and scalable web
              solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                    </div>
                    <CardTitle className="text-lg">{tech.name}</CardTitle>
                    <CardDescription>{tech.category}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development Process
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A structured approach to web development ensuring quality,
              performance, and client satisfaction.
            </p>
          </div>

          <div className="space-y-8">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {phase.description}
                  </p>
                  <div>
                    <h4 className="text-sm font-semibold mb-2">
                      Key Deliverables:
                    </h4>
                    <ul className="space-y-1">
                      {phase.deliverables.map((deliverable, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Development Excellence
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Consistent delivery of high-quality web solutions with exceptional
              performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">
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
            serviceType="web-development"
            showMetrics={true}
          />
        </div>
      </section>

      {/* Website Types */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Website Types & Solutions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Specialized in building various types of websites and web
            applications for different business needs.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              'Business Websites',
              'E-commerce Stores',
              'Portfolio Sites',
              'Blog Platforms',
              'Landing Pages',
              'Web Applications',
              'API Development',
              'CMS Solutions',
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

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Why Choose My Web Development?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Modern, responsive design
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                SEO-optimized from the start
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Fast loading and performance
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Secure and maintainable code
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Ongoing support and maintenance
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                Mobile-first approach
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <ConsultationCTA
        serviceType="web-development"
        showBenefits={true}
        showContactInfo={true}
      />
    </div>
  );
}
