'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star, TrendingUp, Users, Award } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar?: string;
  serviceType: 'tender-management' | 'project-management' | 'web-development';
  projectOutcome?: string;
  metrics?: {
    label: string;
    value: string;
  }[];
}

interface ServiceTestimonialsProps {
  testimonials?: Testimonial[];
  serviceType?:
    | 'tender-management'
    | 'project-management'
    | 'web-development'
    | 'all';
  showMetrics?: boolean;
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'Operations Manager',
    company: 'Infrastructure Solutions Ltd',
    content:
      "Jacob's expertise in tender management helped us secure three major contracts worth over R2.5 million. His attention to detail and understanding of CIDB requirements is exceptional.",
    rating: 5,
    serviceType: 'tender-management',
    projectOutcome: 'Won 3 major contracts',
    metrics: [
      { label: 'Contract Value', value: 'R2.5M+' },
      { label: 'Success Rate', value: '100%' },
      { label: 'Timeline', value: 'On Schedule' },
    ],
  },
  {
    id: '2',
    name: 'Michael Thompson',
    role: 'Project Director',
    company: 'Urban Development Corp',
    content:
      'Outstanding project coordination skills. Jacob managed our complex infrastructure project with multiple stakeholders, delivering on time and under budget.',
    rating: 5,
    serviceType: 'project-management',
    projectOutcome: 'Delivered under budget',
    metrics: [
      { label: 'Budget Savings', value: '15%' },
      { label: 'Timeline', value: '2 weeks early' },
      { label: 'Stakeholders', value: '12 managed' },
    ],
  },
  {
    id: '3',
    name: 'Lisa Chen',
    role: 'Marketing Director',
    company: 'Digital Innovations',
    content:
      'The website Jacob built for us increased our online conversions by 40%. Fast, modern, and exactly what we needed to grow our business.',
    rating: 5,
    serviceType: 'web-development',
    projectOutcome: '40% conversion increase',
    metrics: [
      { label: 'Conversion Rate', value: '+40%' },
      { label: 'Page Speed', value: '95/100' },
      { label: 'Uptime', value: '99.9%' },
    ],
  },
];

const serviceColors = {
  'tender-management': 'bg-blue-500',
  'project-management': 'bg-green-500',
  'web-development': 'bg-purple-500',
};

const serviceLabels = {
  'tender-management': 'Tender Management',
  'project-management': 'Project Management',
  'web-development': 'Web Development',
};

export function ServiceTestimonials({
  testimonials = defaultTestimonials,
  serviceType = 'all',
  showMetrics = true,
  className = '',
}: ServiceTestimonialsProps) {
  const filteredTestimonials =
    serviceType === 'all'
      ? testimonials
      : testimonials.filter((t) => t.serviceType === serviceType);

  if (filteredTestimonials.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Section Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <Quote className="h-6 w-6 text-green-600 dark:text-green-400" />
          <h2 className="text-3xl md:text-4xl font-bold">
            Client Success Stories
          </h2>
        </div>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Real results from businesses that have benefited from professional
          {serviceType !== 'all' ? ` ${serviceLabels[serviceType]}` : ''}{' '}
          services.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTestimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="relative overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div
              className={`absolute top-0 left-0 w-full h-1 ${
                serviceColors[testimonial.serviceType]
              }`}
            />

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription>
                      {testimonial.role} at {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="text-xs">
                  {serviceLabels[testimonial.serviceType]}
                </Badge>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Testimonial Content */}
              <blockquote className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </blockquote>

              {/* Project Outcome */}
              {testimonial.projectOutcome && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span className="text-sm font-medium text-green-800 dark:text-green-200">
                    {testimonial.projectOutcome}
                  </span>
                </div>
              )}

              {/* Success Metrics */}
              {showMetrics && testimonial.metrics && (
                <div className="grid grid-cols-3 gap-2 pt-3 border-t">
                  {testimonial.metrics.map((metric, index) => (
                    <div key={index} className="text-center">
                      <div className="font-bold text-sm text-green-600 dark:text-green-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Overall Success Metrics */}
      {showMetrics && serviceType === 'all' && (
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Overall Success Metrics</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Consistent results across all service areas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">85%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Tender Success Rate
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                On-Time Delivery
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Client Satisfaction
              </div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-8 w-8 text-orange-600 dark:text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-1">4.9</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Average Rating
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export type { Testimonial, ServiceTestimonialsProps };
