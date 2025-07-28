'use client';

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
import {
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  Linkedin,
} from 'lucide-react';

interface ConsultationCTAProps {
  title?: string;
  description?: string;
  serviceType?:
    | 'tender-management'
    | 'project-management'
    | 'web-development'
    | 'general';
  primaryButtonText?: string;
  secondaryButtonText?: string;
  showBenefits?: boolean;
  showContactInfo?: boolean;
  className?: string;
}

const serviceSpecificContent = {
  'tender-management': {
    title: 'Ready to Win More Tenders?',
    description:
      "Let's discuss your tender requirements and develop a winning strategy. Schedule a consultation to explore how I can help your business secure more contracts.",
    primaryButtonText: 'Schedule Tender Consultation',
    benefits: [
      'Free initial tender assessment',
      'CIDB registration guidance',
      'Bid strategy development',
      'Compliance checklist review',
    ],
  },
  'project-management': {
    title: 'Ready to Start Your Project?',
    description:
      "Let's discuss your project requirements and develop a comprehensive management plan. Schedule a consultation to explore how I can ensure your project's success.",
    primaryButtonText: 'Schedule Project Consultation',
    benefits: [
      'Free project assessment',
      'Risk analysis and mitigation',
      'Resource planning guidance',
      'Timeline and budget review',
    ],
  },
  'web-development': {
    title: 'Ready to Build Your Website?',
    description:
      "Let's discuss your web development needs and create a solution that drives your business forward. Schedule a consultation to explore the possibilities.",
    primaryButtonText: 'Start Your Web Project',
    benefits: [
      'Free website audit',
      'Technology recommendations',
      'Performance optimization plan',
      'SEO strategy consultation',
    ],
  },
  general: {
    title: 'Ready to Get Started?',
    description:
      "Let's discuss how my services can help your business achieve its goals. Schedule a consultation to explore the best solutions for your needs.",
    primaryButtonText: 'Schedule Consultation',
    benefits: [
      'Free initial consultation',
      'Comprehensive needs assessment',
      'Tailored solution recommendations',
      'Clear project roadmap',
    ],
  },
};

export function ConsultationCTA({
  title,
  description,
  serviceType = 'general',
  primaryButtonText,
  secondaryButtonText = 'View Case Studies',
  showBenefits = true,
  showContactInfo = true,
  className = '',
}: ConsultationCTAProps) {
  const content = serviceSpecificContent[serviceType];
  const finalTitle = title || content.title;
  const finalDescription = description || content.description;
  const finalPrimaryButtonText = primaryButtonText || content.primaryButtonText;

  return (
    <section className={`py-16 px-4  sm:px-6 lg:px-8 ${className}`}>
      <div className="py-16 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main CTA Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {finalTitle}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              {finalDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button asChild size="lg">
                <Link href="/contact" className="flex items-center text-white">
                  {finalPrimaryButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/case-studies">{secondaryButtonText}</Link>
              </Button>
            </div>

            {/* Quick Contact Options */}
            {showContactInfo && (
              <div className="flex text-green-500 flex-wrap gap-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24-48hr Response
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Free Consultation
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Professional Focus
                </div>
              </div>
            )}
          </div>

          {/* Benefits Card */}
          <div>
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                  What You Get
                </CardTitle>
                <CardDescription>
                  Comprehensive consultation and professional guidance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Benefits List */}
                {showBenefits && (
                  <div>
                    <h4 className="font-semibold mb-3">
                      Consultation Includes:
                    </h4>
                    <ul className="space-y-2">
                      {content.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Response Time & Availability */}
                <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-green-800 dark:text-green-200">
                      Current Availability
                    </h4>
                    <Badge className="bg-green-600 text-white">Available</Badge>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Response Time:</span>
                      <span className="font-medium">24-48 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Project Start:</span>
                      <span className="font-medium">2-4 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Consultation:</span>
                      <span className="font-medium text-green-600 dark:text-green-400">
                        Free
                      </span>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm">Preferred Contact:</h4>
                  <div className="flex flex-col space-y-2">
                    <Link
                      href="mailto:hello@jacobc.co.za"
                      className="flex items-center text-sm text-green-600 dark:text-green-400 hover:underline"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      hello@jacobc.co.za
                    </Link>
                    <Link
                      href="https://linkedin.com/in/jchademwiri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-green-600 dark:text-green-400 hover:underline"
                    >
                      <Linkedin className="h-4 w-4 mr-2" />
                      LinkedIn Professional
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export type { ConsultationCTAProps };
