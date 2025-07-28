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
import { CheckCircle, ArrowRight, Target, Zap, LucideIcon } from 'lucide-react';

interface ServiceFeature {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  stats: Record<string, string>;
  color: string;
}

interface ServicesGridProps {
  services?: ServiceFeature[];
  showStats?: boolean;
  showFeatures?: boolean;
  className?: string;
}

const defaultServices: ServiceFeature[] = [
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

export function ServicesGrid({
  services = defaultServices,
  showStats = true,
  showFeatures = true,
  className = '',
}: ServicesGridProps) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-3 gap-4 ${className}`}>
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
                <div className={`p-2 rounded-lg ${service.color} text-white`}>
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
              {showFeatures && (
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
              )}

              {/* Stats */}
              {showStats && (
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
              )}

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
  );
}

export type { ServiceFeature, ServicesGridProps };
