import { currentPositions } from '@/data';
import { Briefcase, CheckCircle, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

interface EmploymentDetailsPageProps {
  positionId: string;
}

export const RoleBreakdown = ({ positionId }: EmploymentDetailsPageProps) => {
  const position = currentPositions.find((pos) => pos.id === positionId);
  if (!position) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Position Not Found</h1>
          <Link href="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div>
      {' '}
      {position.roles && position.roles.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Briefcase className="h-6 w-6 mr-3 text-primary" />
                Role Breakdown
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Exploring the diverse responsibilities and specialized functions
                within this position.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {position.roles.map((role, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-lg ${position.iconBg} flex-shrink-0`}
                    >
                      <Users className={`h-5 w-5 ${position.iconColor}`} />
                    </div>
                    <div className="space-y-3 flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {role.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {role.description}
                      </p>

                      {/* Role Responsibilities */}
                      <div className="space-y-2">
                        <h4 className="text-sm font-medium text-foreground">
                          Key Responsibilities:
                        </h4>
                        <div className="space-y-2">
                          {role.responsibilities.map(
                            (responsibility, respIndex) => (
                              <div
                                key={respIndex}
                                className="flex items-start space-x-2"
                              >
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                  {responsibility}
                                </p>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
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
