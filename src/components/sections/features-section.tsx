import { FeatureCard } from '@/components/feature-card';

interface FeatureCardProps {
  title: string;
  description: string;
}

const features: FeatureCardProps[] = [
  {
    title: 'Tender Management',
    description:
      'I handle the full tendering lifecycle — from identifying opportunities and ensuring compliance to crafting compelling submissions that win contracts.',
  },
  {
    title: 'Project Management',
    description:
      'I manage end-to-end project delivery, aligning timelines, teams, and budgets to ensure smooth execution and successful outcomes.',
  },
  {
    title: 'Website Development',
    description:
      'I build fast, accessible websites that reflect your brand, engage your users, and support scalable, long-term growth.',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
