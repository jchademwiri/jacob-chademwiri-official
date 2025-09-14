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
import { Zap, CheckCircle, Clock, Award } from 'lucide-react';
import FeaturedProjects from '@/components/projects/FeaturedProjects';
import { achievements, technologies, webServices } from '@/data';
import DevelopmentProcess from '@/sites/services/web-development/development-process';

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

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 ">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-purple-50 dark:from-purple-950/20 dark:via-gray-900 dark:to-purple-950/20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/#">View Case Studies</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24-48hr Response
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-2" />
                  6+ Years Experience
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Development Expertise
                </h3>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
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
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 justify-center">
                      JavaScript
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 justify-center">
                      Tailwind CSS
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 justify-center">
                      Vercel
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 justify-center">
                      Microsoft 365
                    </Badge>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        10+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Websites Developed
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">
                        10+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Websites Hosted
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
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {webServices.map((service, index) => {
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
      {/* Featured Projects */}
      <FeaturedProjects />
      {/* Technologies */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <DevelopmentProcess />

      {/* Achievements */}
      <section className="py-16  bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
      {/* <section className="py-16 ">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTestimonials
            serviceType="web-development"
            showMetrics={true}
          />
        </div>
      </section> */}

      {/* Website Types */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Website Types & Solutions
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Specialized in building various types of websites and web
            applications for different business needs.
          </p>

          <div className="flex flex-wrap place-content-center gap-4 mb-8">
            {[
              'Business Websites',
              'E-commerce Stores',
              'Portfolio Sites',
              'Blog Platforms',
              'Landing Pages',
              'Web Applications',
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
