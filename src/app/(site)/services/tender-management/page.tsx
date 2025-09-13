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
import { Target, CheckCircle, Users, Clock } from 'lucide-react';
import { tenderAchievements, tenderServices } from '@/data';
import TenderProcessSteps from '@/sites/services/tender-management/tender-process-steps';

export const metadata: Metadata = {
  title: 'Tender Management Services - Expert Bid Preparation & CIDB Support',
  description:
    'Professional tender management services including CIDB registration, bid preparation, compliance management, and proposal writing. 3+ years experience with 85% success rate.',
  keywords: [
    'tender management',
    'bid preparation',
    'CIDB registration',
    'proposal writing',
    'tender compliance',
    'contract bidding',
    'South Africa tenders',
    'government contracts',
  ],
};

export default function TenderManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 dark:from-blue-950/20 dark:via-gray-900 dark:to-blue-950/20" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Target className="h-6 w-6 text-blue-600" />
                <span className="text-sm uppercase tracking-wider font-medium text-blue-600">
                  Tender Management
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Win More Contracts with{' '}
                <span className="text-blue-600">Expert Tender Management</span>
              </h1>

              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
                Professional tender management services that help your business
                secure more contracts. From CIDB registration to winning bid
                submissions, I handle every aspect of the tendering process.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Link href="/contact">Get Tender Support</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/case-studies">View Success Stories</Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24-48hr Response
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  Sithembe Transportation Transportation and Projects
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6">Current Role</h3>
                <div className="space-y-4">
                  <div>
                    <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Tendering & Accounts Receivable Manager
                    </Badge>
                  </div>
                  <div>
                    <h4 className="font-semibold">
                      SITHEMBE TRANSPORTATION & PROJECTS
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Leading tender acquisition, managing bid processes, and
                      ensuring compliance across multiple project categories.
                    </p>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        85%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Success Rate
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        50+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Tenders
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
              Comprehensive Tender Services
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              From initial CIDB registration to final bid submission, I provide
              end-to-end tender management services that maximize your chances
              of winning contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tenderServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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

      {/* Process Section */}
      <TenderProcessSteps />

      {/* Achievements */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Track Record
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Results that speak for themselves in tender management and
              contract acquisition.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tenderAchievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
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
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceTestimonials
            serviceType="tender-management"
            showMetrics={true}
          />
        </div>
      </section> */}

      {/* Industries Served */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Industries & Sectors
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
            Experience across multiple industries with specialized knowledge of
            sector-specific requirements.
          </p>

          <div className="flex flex-wrap place-content-center gap-4 mb-8">
            {[
              'Transportation',
              'Construction',
              'Infrastructure',
              'Government',
              'Municipal',
              'Private Sector',
              'Engineering',
              'Logistics',
            ].map((industry, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="p-3 text-center"
              >
                {industry}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation CTA */}
      <ConsultationCTA
        serviceType="tender-management"
        showBenefits={true}
        showContactInfo={true}
      />
    </div>
  );
}
