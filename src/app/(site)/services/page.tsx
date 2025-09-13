import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { ServicesGrid, ConsultationCTA } from '@/components/services';
import { Target, CheckCircle, Zap } from 'lucide-react';

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
            From winning tenders and managing projects to building powerful
            digital solutions, I provide end-to-end business services that drive
            growth and success.
          </p>

          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <Badge variant="secondary" className="px-4 py-2">
              Tender Managment
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Project Management
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Website Development
            </Badge>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl">
        <ServicesGrid />
      </section>

      {/* Why Choose My Services */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto text-center  px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Work With Me?
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-12">
            With extensive experience across tender management, project
            management, and web development, I bring a unique combination of
            business acumen and technical expertise to every project.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

      {/* Client Testimonials */}
      {/* <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center  px-4 sm:px-6 lg:px-8">
          <ServiceTestimonials serviceType="all" showMetrics={true} />
        </div>
      </section> */}

      {/* Consultation CTA */}
      <ConsultationCTA
        serviceType="general"
        showBenefits={true}
        showContactInfo={true}
        className="bg-primary/5"
      />
    </div>
  );
}
