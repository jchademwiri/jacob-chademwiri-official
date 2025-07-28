'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Skill {
  name: string;
  level: number;
  category: string;
  description?: string;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
  color: string;
}

const skillsData: SkillCategory[] = [
  {
    name: 'Technical',
    color: 'bg-blue-500',
    skills: [
      {
        name: 'JavaScript',
        level: 90,
        category: 'Programming',
        description: 'Advanced proficiency in modern ES6+ features',
      },
      {
        name: 'TypeScript',
        level: 85,
        category: 'Programming',
        description: 'Strong typing and advanced patterns',
      },
      {
        name: 'React.js',
        level: 88,
        category: 'Frontend',
        description: 'Hooks, Context, and performance optimization',
      },
      {
        name: 'Next.js',
        level: 85,
        category: 'Frontend',
        description: 'App Router, SSR, and full-stack development',
      },
      {
        name: 'Tailwind CSS',
        level: 92,
        category: 'Styling',
        description: 'Utility-first CSS framework expertise',
      },
      {
        name: 'WordPress',
        level: 88,
        category: 'CMS',
        description: 'Custom themes and plugin development',
      },
      {
        name: 'SEO',
        level: 85,
        category: 'Marketing',
        description: 'Technical SEO and content optimization',
      },
      {
        name: 'MongoDB',
        level: 75,
        category: 'Database',
        description: 'NoSQL database design and queries',
      },
      {
        name: 'Cloud Platforms',
        level: 80,
        category: 'DevOps',
        description: 'AWS, Vercel, and Netlify deployment',
      },
    ],
  },
  {
    name: 'Business',
    color: 'bg-green-500',
    skills: [
      {
        name: 'Tender Management',
        level: 95,
        category: 'Operations',
        description: 'End-to-end tender process management',
      },
      {
        name: 'Project Management',
        level: 82,
        category: 'Leadership',
        description: 'Agile methodologies and team coordination',
      },
      {
        name: 'Accounts Receivable',
        level: 90,
        category: 'Finance',
        description: 'Cash flow management and collections',
      },
      {
        name: 'Team Leadership',
        level: 85,
        category: 'Management',
        description: 'Cross-functional team management',
      },
      {
        name: 'Client Relations',
        level: 88,
        category: 'Communication',
        description: 'Stakeholder management and communication',
      },
      {
        name: 'Process Optimization',
        level: 87,
        category: 'Operations',
        description: 'Workflow improvement and automation',
      },
      {
        name: 'Strategic Planning',
        level: 80,
        category: 'Strategy',
        description: 'Business strategy and goal setting',
      },
      {
        name: 'Bid Management',
        level: 92,
        category: 'Operations',
        description: 'Proposal writing and submission management',
      },
    ],
  },
];

export function InteractiveSkills() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Technical');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  // const currentCategory = skillsData.find(
  //   (cat) => cat.name === selectedCategory
  // );

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Tabs
        value={selectedCategory}
        onValueChange={setSelectedCategory}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          {skillsData.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className="text-sm font-medium"
            >
              {category.name} Skills
            </TabsTrigger>
          ))}
        </TabsList>

        {skillsData.map((category) => (
          <TabsContent
            key={category.name}
            value={category.name}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.skills.map((skill) => (
                <Card
                  key={skill.name}
                  className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${
                    hoveredSkill === skill.name ? 'ring-2 ring-primary' : ''
                  }`}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-lg">{skill.name}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {skill.category}
                      </Badge>
                    </div>

                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-muted-foreground">
                          Proficiency
                        </span>
                        <span className="text-sm font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>

                    {skill.description && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Skills Summary */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle className="text-lg">
                  {category.name} Skills Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {category.skills.length}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Skills
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {Math.round(
                        category.skills.reduce(
                          (acc, skill) => acc + skill.level,
                          0
                        ) / category.skills.length
                      )}
                      %
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg. Proficiency
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {
                        category.skills.filter((skill) => skill.level >= 85)
                          .length
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Expert Level
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">
                      {
                        new Set(category.skills.map((skill) => skill.category))
                          .size
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Categories
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
