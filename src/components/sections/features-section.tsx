import { FeatureCard } from '@/components/feature-card';

const features = [
  {
    title: 'Tender Management',
    description:
      'Manage your tenders efficiently with our comprehensive tools.',
  },
  {
    title: 'Project Coordination & Management',
    description:
      'Streamline your project coordination and management with our intuitive interface.',
  },
  {
    title: 'Website Design & Development',
    description:
      'Create stunning websites with our design and development tools.',
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
