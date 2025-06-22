// src/components/projects/states-grid.tsx
import { Code, TrendingUp, Target, Star, Users, Calendar } from 'lucide-react';

interface StatesGridProps {
  stats: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
}

const iconMap = {
  TrendingUp,
  Code,
  Target,
  Star,
  Users,
  Calendar,
};

export default function StatesGrid({ stats }: StatesGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mt-12">
      {stats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        return (
          <div
            key={index}
            className="bg-card border rounded-xl p-4 space-y-2 hover:shadow-lg transition-all duration-300 group"
          >
            <Icon className="h-6 w-6 text-primary mx-auto group-hover:scale-110 transition-transform" />
            <div className="text-2xl font-bold text-foreground">
              {stat.value}
            </div>
            <div className="text-xs text-muted-foreground">{stat.label}</div>
          </div>
        );
      })}
    </div>
  );
}
