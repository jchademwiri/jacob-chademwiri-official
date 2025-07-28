'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Quote,
  Target,
  Users,
  Lightbulb,
  TrendingUp,
  Heart,
} from 'lucide-react';

interface PhilosophyPrinciple {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

interface WorkingStyle {
  title: string;
  description: string;
  color: string;
}

const philosophyPrinciples: PhilosophyPrinciple[] = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Results-Driven Excellence',
    description:
      'Every project should deliver measurable value and exceed expectations.',
    examples: [
      'Focus on ROI and business impact',
      'Set clear, achievable milestones',
      'Measure success with concrete metrics',
    ],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Collaborative Leadership',
    description:
      'Great solutions emerge from diverse perspectives and open communication.',
    examples: [
      'Foster inclusive team environments',
      'Listen actively to all stakeholders',
      'Build consensus through transparency',
    ],
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Continuous Innovation',
    description:
      'Embrace new technologies and methodologies to stay ahead of the curve.',
    examples: [
      'Stay current with industry trends',
      'Experiment with emerging technologies',
      'Challenge conventional approaches',
    ],
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Growth Mindset',
    description: 'View challenges as opportunities to learn and improve.',
    examples: [
      'Learn from failures and setbacks',
      'Seek feedback and act on it',
      'Invest in continuous skill development',
    ],
  },
];

const workingStyles: WorkingStyle[] = [
  {
    title: 'Strategic Thinking',
    description:
      'I approach problems holistically, considering long-term implications and business context.',
    color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  },
  {
    title: 'Detail-Oriented',
    description:
      'Quality is in the details. I ensure thorough planning and meticulous execution.',
    color:
      'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  },
  {
    title: 'Adaptable',
    description:
      'I thrive in dynamic environments and quickly adjust to changing requirements.',
    color:
      'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  },
  {
    title: 'Client-Focused',
    description:
      'Understanding client needs and delivering value is at the heart of everything I do.',
    color:
      'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  },
];

const coreValues = [
  'Integrity & Transparency',
  'Quality & Excellence',
  'Innovation & Creativity',
  'Collaboration & Respect',
  'Continuous Learning',
  'Client Success',
];

export function PersonalPhilosophy() {
  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      {/* Main Philosophy Quote */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Quote className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Personal Philosophy</h2>
        </div>
        <Card className="bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20">
          <CardContent className="p-8">
            <blockquote className="text-2xl md:text-3xl font-semibold text-center leading-relaxed">
              "Success is built on curiosity, resilience, and collaboration."
            </blockquote>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              I believe that the best solutions emerge when we combine technical
              expertise with genuine curiosity about problems, the resilience to
              overcome challenges, and the wisdom to collaborate effectively
              with others.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Core Principles */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8">Core Principles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {philosophyPrinciples.map((principle, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">{principle.icon}</div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-muted-foreground mb-4">
                      {principle.description}
                    </p>
                    <div className="space-y-2">
                      {principle.examples.map((example, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">•</span>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Working Style */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8">Working Style</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workingStyles.map((style, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Badge
                    className={`${style.color} px-3 py-1 text-sm font-medium`}
                  >
                    {style.title}
                  </Badge>
                </div>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {style.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8">Core Values</h3>
        <Card>
          <CardContent className="p-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <p className="text-lg text-muted-foreground text-center">
                These values guide every decision I make and every project I
                undertake.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {coreValues.map((value, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {value}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Approach to Problem Solving */}
      <div>
        <h3 className="text-2xl font-bold text-center mb-8">
          Problem-Solving Approach
        </h3>
        <Card className="bg-muted/50">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Understand</h4>
                <p className="text-sm text-muted-foreground">
                  Deep dive into the problem context, stakeholder needs, and
                  business objectives.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Strategize</h4>
                <p className="text-sm text-muted-foreground">
                  Develop multiple solution approaches, considering trade-offs
                  and long-term implications.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="text-lg font-semibold mb-2">Execute</h4>
                <p className="text-sm text-muted-foreground">
                  Implement solutions iteratively, gathering feedback and
                  refining along the way.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Personal Mission */}
      <div className="text-center">
        <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-primary/20">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Personal Mission</h3>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              To bridge the gap between technical innovation and business value
              by creating solutions that not only solve immediate problems but
              also enable long-term growth and success. I'm committed to helping
              organizations and individuals achieve their goals through
              thoughtful technology implementation and strategic project
              management.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
