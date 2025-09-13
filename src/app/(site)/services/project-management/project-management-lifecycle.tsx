import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { projectPhases } from '@/data';
import React from 'react';

export default function ProjectManagementLifecycle() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Management Lifecycle
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A structured approach to project management ensuring comprehensive
            coverage of all project phases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {projectPhases.map((phase, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {index + 1}
                </div>
                <CardTitle className="text-lg">{phase.phase}</CardTitle>
                <CardDescription className="text-sm">
                  {phase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm">
                  {phase.activities.map((activity, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-400">
                      • {activity}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
