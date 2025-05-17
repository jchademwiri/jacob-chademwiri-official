import Link from 'next/link';

interface FeatureCardProps {
  title: string;
  link: string;
  description: string;
}

export function FeatureCard({ title, link, description }: FeatureCardProps) {
  return (
    <div className="dark:bg-background bg-primary-foreground rounded-lg p-6 shadow-sm border border-muted/50 hover:shadow-lg transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={link ? link : '#'} className="text-primary hover:underline">
          {title}
        </Link>
      </h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
