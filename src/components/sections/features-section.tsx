import { FeatureCard } from '@/components/feature-card';
import Link from 'next/link';

interface FeatureCardProps {
  title?: string;
  link?: string | undefined;
  description: string;
}

// {
//   title: 'Tender Management',
//   description:
//     'Complete end-to-end service including sourcing opportunities, ensuring compliance, and professionally preparing submissions to maximize contract wins.',
// },
// {
//   title: 'Project Coordination & Management',
//   description:
//     'End-to-end project oversight including resource allocation, timeline management, and accurate invoicing.',
// },
// {
//   title: 'Web Development',
//   description:
//     'Custom, sustainable web solutions tailored to elevate your business presence online.',
// },
const features = [
  {
    title: 'Tender Management',
    description:
      'I manage the entire tendering process - from identifying opportunities to preparing compliant, compelling submissions that win contracts.',
  },
  {
    title: 'Project Coordination & Management',
    description:
      // 'I lead projects from planning through delivery, aligning timelines, teams, and resources to ensure smooth execution and measurable outcomes.',
      'I lead end-to-end project delivery - overseeing timelines, resource coordination, and accurate invoicing to ensure seamless execution.',
  },
  {
    title: 'Web Design & Development',
    description:
      'I design and develop fast, accessible websites that align with your brand, serve your users, and support long-term growth.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature cards */}
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              // link={`/features/${feature.title
              //   .toLowerCase()
              //   .replace(/\s+/g, '-')}`}
              link="#"
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
