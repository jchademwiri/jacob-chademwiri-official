import type { Metadata } from 'next';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Mail,
  Clock,
  Target,
  CheckCircle,
  Zap,
  Linkedin,
  Building,
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact - Schedule Your Business Consultation',
  description:
    'Get in touch for tender management, project coordination, or web development services. Schedule a consultation to discuss your business needs and project requirements.',
  keywords: [
    'contact',
    'consultation',
    'tender management consultation',
    'project management consultation',
    'web development consultation',
    'business services',
    'SITHEMBE Transportation',
  ],
};

const serviceTypes = [
  {
    value: 'tender-management',
    label: 'Tender Management',
    description: 'CIDB registration, bid preparation, compliance support',
    icon: Target,
  },
  {
    value: 'project-management',
    label: 'Project Management',
    description: 'Project coordination, stakeholder management, delivery',
    icon: CheckCircle,
  },
  {
    value: 'web-development',
    label: 'Web Development',
    description: 'Modern websites, e-commerce, web applications',
    icon: Zap,
  },
  {
    value: 'consultation',
    label: 'General Consultation',
    description: 'Discuss multiple services or general business needs',
    icon: Building,
  },
];

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jacob@jacobchademwiri.com',
    href: 'mailto:jacob@jacobchademwiri.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Jacob Chademwiri',
    href: 'https://linkedin.com/in/jacob-chademwiri',
  },
  {
    icon: Building,
    label: 'Current Role',
    value: 'SITHEMBE TRANSPORTATION & PROJECTS',
    subtitle: 'Tendering & Accounts Receivable Manager | Projects Coordinator',
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: '24-48 hours',
    subtitle: 'For consultation requests',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50 dark:from-green-950/20 dark:via-gray-900 dark:to-green-950/20" />

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
            <span className="text-sm uppercase tracking-wider font-medium text-green-600 dark:text-green-400">
              Get In Touch
            </span>
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6">
            Schedule Your{' '}
            <span className="text-green-600 dark:text-green-400">
              Business Consultation
            </span>
          </h1>

          <p className="text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300 mb-8">
            Ready to discuss your tender management, project coordination, or
            web development needs? Let&apos;s explore how my expertise can help
            your business achieve its goals.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              24-48hr Response Time
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Free Initial Consultation
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Professional Service Focus
            </Badge>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Request a Consultation
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and I&apos;ll get back to you within
                    24-48 hours to discuss your project requirements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <CardDescription>
                    Multiple ways to get in touch for your business needs.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                          <IconComponent className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium">{info.label}</div>
                          {info.href ? (
                            <a
                              href={info.href}
                              className="text-green-600 dark:text-green-400 hover:underline"
                              target={
                                info.href.startsWith('http')
                                  ? '_blank'
                                  : undefined
                              }
                              rel={
                                info.href.startsWith('http')
                                  ? 'noopener noreferrer'
                                  : undefined
                              }
                            >
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-gray-700 dark:text-gray-300">
                              {info.value}
                            </div>
                          )}
                          {info.subtitle && (
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {info.subtitle}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Current Availability */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Current Availability
                  </CardTitle>
                  <CardDescription>
                    Professional service capacity and response times.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <div>
                      <div className="font-medium text-green-800 dark:text-green-200">
                        Accepting New Projects
                      </div>
                      <div className="text-sm text-green-600 dark:text-green-400">
                        Currently available for consultations
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">Available</Badge>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Consultation Response
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        24-48 hours
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Project Start Timeline
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        2-4 weeks
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">
                        Preferred Communication
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Email & LinkedIn
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Service Specializations
                  </CardTitle>
                  <CardDescription>
                    Core areas of expertise for business solutions.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-4">
                    {serviceTypes.slice(0, 3).map((service, index) => {
                      const IconComponent = service.icon;
                      return (
                        <div
                          key={index}
                          className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                            <IconComponent className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                          </div>
                          <div>
                            <div className="font-medium">{service.label}</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              {service.description}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Common questions about my services and consultation process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What&apos;s included in the initial consultation?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  A comprehensive discussion of your project requirements,
                  goals, timeline, and budget. I&apos;ll provide initial
                  recommendations and a clear project proposal.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Do you work with businesses outside South Africa?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Yes, I provide web development and project management services
                  internationally. Tender management services are primarily
                  focused on South African markets.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What&apos;s your typical project timeline?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Project timelines vary based on scope and complexity. Web
                  development projects typically take 2-8 weeks, while tender
                  and project management services depend on specific
                  requirements.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Can you help with ongoing projects?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Absolutely! I can join existing projects to provide
                  specialized expertise in tender management, project
                  coordination, or technical development support.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  What industries do you work with?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  I have experience across transportation, construction,
                  infrastructure, government, municipal, and private sector
                  projects, with specialized knowledge in each area.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">
                  How do you ensure project success?
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Through detailed planning, regular communication, risk
                  management, and proven methodologies. I maintain a 95% on-time
                  delivery rate and 85% tender success rate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
