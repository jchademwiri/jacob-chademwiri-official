import { TrendingUp } from 'lucide-react';

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
export const ProfessionalDevelopment = ({
  positionId,
}: EmploymentDetailsPageProps) => {
  const position = currentPositions.find(
    (pos: Position) => pos.id === positionId
  );

  if (!position || !position.roles || position.roles.length === 0) return null;
  return (
    <div>
      {' '}
      {position.development && position.development.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <TrendingUp className="h-6 w-6 mr-3 text-primary" />
                Professional Development
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Continuous growth and improvement initiatives undertaken in this
                role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {position.development.map((dev, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 space-y-4"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {dev.area}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {dev.description}
                  </p>
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <p className="text-sm font-medium text-foreground">
                      {dev.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
