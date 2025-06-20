import React from 'react';
import { Target, Lightbulb, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Types
interface Challenge {
  challenge: string;
  solution: string;
}

interface ChallengeSolutionsProps {
  challenges: string[];
  solutions: string[];
}

interface KeyLearningsProps {
  learnings: string[];
}

// Challenge-Solution Pair Component
const ChallengeSolutionPair = ({ challenge, solution }: Challenge) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
    <CardContent className="p-6">
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Target className="h-4 w-4 text-destructive" />
            <h4 className="font-semibold text-sm text-destructive">
              Challenge
            </h4>
          </div>
          <p className="text-sm text-muted-foreground">{challenge}</p>
        </div>

        <Separator />

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <h4 className="font-semibold text-sm text-primary">Solution</h4>
          </div>
          <p className="text-sm text-muted-foreground">{solution}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Challenges & Solutions Section Component
export const ChallengesSolutions: React.FC<ChallengeSolutionsProps> = ({
  challenges,
  solutions,
}) => {
  if (!challenges || challenges.length === 0) return null;

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <div className="w-1 h-6 bg-primary rounded-full"></div>
        Challenges & Solutions
      </h2>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
        {challenges.map((challenge, index) => (
          <ChallengeSolutionPair
            key={index}
            challenge={challenge}
            solution={solutions[index] || 'Solution details not available'}
          />
        ))}
      </div>
    </section>
  );
};

// Key Learnings Section Component
export const KeyLearnings: React.FC<KeyLearningsProps> = ({ learnings }) => {
  if (!learnings || learnings.length === 0) return null;

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
        <div className="w-1 h-6 bg-primary rounded-full"></div>
        Key Learnings
      </h2>
      <div className="grid gap-3">
        {learnings.map((learning, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200"
          >
            <Zap className="h-5 w-5 text-yellow-500 mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{learning}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
