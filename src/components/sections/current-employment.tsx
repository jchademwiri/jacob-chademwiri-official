import { currentPositions } from '@/data';
import { Building2, Calendar, MapPin, Globe } from 'lucide-react';

import Link from 'next/link';

export function CurrentEmployment() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
            <span className="text-sm uppercase tracking-wider font-medium text-green-600 dark:text-green-400">
              Current Positions
            </span>
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
          </div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Where I&apos;m Making an Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-[700px]">
            Currently contributing expertise across tender management, project
            coordination, and web development in both corporate and freelance
            environments.
          </p>
        </div>

        {/* Position Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPositions.map((position) => (
            <Link
              href={`/${position.id}`}
              key={position.id}
              className="group relative bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 "
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${position.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Content */}
              <div className="relative p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${position.iconBg}`}>
                    {position.type === 'Full-time' ? (
                      <Building2 className={`h-6 w-6 ${position.iconColor}`} />
                    ) : (
                      <Globe className={`h-6 w-6 ${position.iconColor}`} />
                    )}
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      position.type === 'Full-time'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    }`}
                  >
                    {position.type}
                  </span>
                </div>

                {/* Company & Title */}
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {position.company}
                  </h3>
                  <p className="text-sm font-medium text-muted-foreground">
                    {position.title}
                  </p>
                </div>

                {/* Meta Information */}
                <div className="flex items-center justify-between text-sm text-muted-foreground w-full">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{position.duration}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{position.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {position.description}
                </p>

                {/* Skills */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-foreground">
                    Core Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, index) => (
                      <span
                        key={index}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          position.type === 'Full-time'
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                            : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
