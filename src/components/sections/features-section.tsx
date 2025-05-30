import { FeatureCard } from '@/components/feature-card';

interface FeatureCardProps {
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    title: 'Tender Management',
    description:
      'I manage the entire tendering process - from identifying opportunities to preparing compliant, compelling submissions that win contracts.',
  },
  {
    title: 'Project Management',
    description:
      'I lead end-to-end project delivery - overseeing timelines, resource coordination, and accurate invoicing to ensure seamless execution.',
  },
  {
    title: 'Website Development',
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
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
