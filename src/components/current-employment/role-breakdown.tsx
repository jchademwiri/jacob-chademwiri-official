import { Briefcase, CheckCircle, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';

import { currentPositions } from '@/data';

interface EmploymentDetailsPageProps {
  positionId: string;
}

interface Role {
  title: string;
  description: string;
  responsibilities: string[];
}

interface Position {
  id: string;
  roles?: Role[];
  iconBg?: string;
  iconColor?: string;
}

export const RoleBreakdown = ({ positionId }: EmploymentDetailsPageProps) => {
  const position = currentPositions.find(
    (pos: Position) => pos.id === positionId
  );

  if (!position || !position.roles || position.roles.length === 0) return null;

  return (
    <section
      className="py-12 md:py-16 bg-muted/30"
      aria-labelledby="role-breakdown-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center space-y-4 mb-12">
          <h2
            id="role-breakdown-heading"
            className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3"
          >
            <Briefcase className="h-6 w-6 text-primary" aria-hidden="true" />
            Role Breakdown
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Exploring the diverse responsibilities and specialized functions
            within this position.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {position.roles.map((role, index) => (
            <RoleCard
              key={`${role.title}-${index}`}
              role={role}
              position={position}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Extracted role card component for better organization
const RoleCard = ({ role, position }: { role: Role; position: Position }) => {
  return (
    <article className="bg-card border rounded-xl p-6 space-y-4 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1">
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <div
            className={`p-3 rounded-lg flex-shrink-0 ${
              position.iconBg || 'bg-primary/10'
            }`}
            aria-hidden="true"
          >
            <Users
              className={`h-5 w-5 ${position.iconColor || 'text-primary'}`}
            />
          </div>
          <h3 className="text-lg font-semibold text-foreground">
            {role.title}
          </h3>
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {role.description}
        </p>
      </header>

      <div className="space-y-3">
        <h4 className="text-sm font-medium text-foreground">
          Key Responsibilities:
        </h4>
        <ResponsibilitiesList responsibilities={role.responsibilities} />
      </div>
    </article>
  );
};

// Extracted responsibilities list for better readability
const ResponsibilitiesList = ({
  responsibilities,
}: {
  responsibilities: string[];
}) => {
  if (!responsibilities || responsibilities.length === 0) {
    return (
      <p className="text-xs text-muted-foreground italic">
        No responsibilities listed.
      </p>
    );
  }

  return (
    <ul className="space-y-2" role="list">
      {responsibilities.map((responsibility, index) => (
        <li key={index} className="flex items-start gap-2">
          <CheckCircle
            className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0"
            aria-hidden="true"
          />
          <span className="text-xs text-muted-foreground leading-relaxed">
            {responsibility}
          </span>
        </li>
      ))}
    </ul>
  );
};
