import React from 'react';
import {
  Building2,
  Calendar,
  MapPin,
  Globe,
  ArrowLeft,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Briefcase,
  Award,
  DollarSign,
  BarChart3,
  Shield,
  Star,
  // ExternalLink,
  Wrench,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { currentPositions } from '@/data';
import { RoleBreakdown } from './role-breakdown';

interface EmploymentDetailsPageProps {
  positionId: string;
}

export function EmploymentDetails({ positionId }: EmploymentDetailsPageProps) {
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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Position Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
            <div className="lg:col-span-2 space-y-6">
              {/* Company Badge */}
              <div className="flex items-center space-x-4">
                <div className={`p-4 rounded-xl ${position.iconBg}`}>
                  {position.type === 'Full-time' ? (
                    <Building2 className={`h-8 w-8 ${position.iconColor}`} />
                  ) : (
                    <Globe className={`h-8 w-8 ${position.iconColor}`} />
                  )}
                </div>
                <div>
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full ${
                      position.type === 'Full-time'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                    }`}
                  >
                    {position.type}
                  </span>
                </div>
              </div>

              {/* Title & Company */}
              <div className="space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                  {position.company}
                </h1>
                <p className="text-xl text-muted-foreground font-medium">
                  {position.title}
                </p>
              </div>

              {/* Meta Information */}
              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">{position.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span className="font-medium">{position.location}</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-gray dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  {position.description}
                </p>
              </div>

              {/* Company Information */}
              {position.companyInfo && (
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <h3 className="font-semibold text-sm text-foreground">
                    Company Overview
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {position.companyInfo.description}
                  </p>
                  <div className="flex gap-4 text-xs text-muted-foreground">
                    <span>Industry: {position.companyInfo.industry}</span>
                    <span>Size: {position.companyInfo.size}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Stats/Highlights Card */}
            <div className="lg:col-span-1">
              <div className="bg-card border rounded-xl p-6 space-y-6 sticky top-8">
                <h3 className="text-lg font-semibold flex items-center">
                  <TrendingUp className="h-5 w-5 mr-2 text-primary" />
                  Key Highlights
                </h3>

                <div className="space-y-4">
                  {position.type === 'Full-time' ? (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Role Type
                        </span>
                        <span className="text-sm font-medium">
                          Full-time Employee
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Focus Areas
                        </span>
                        <span className="text-sm font-medium">
                          {position.roles?.length || 3} Core Disciplines
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Experience
                        </span>
                        <span className="text-sm font-medium">3+ Years</span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Client Type
                        </span>
                        <span className="text-sm font-medium">Freelance</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Service Areas
                        </span>
                        <span className="text-sm font-medium">
                          {position.roles?.length || 2} Specializations
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Experience
                        </span>
                        <span className="text-sm font-medium">5+ Years</span>
                      </div>
                    </>
                  )}
                </div>

                <div className="pt-4 border-t ">
                  <Link href="/contact">
                    <Button className="w-full text-foreground cursor-pointer">
                      Discuss Similar Projects
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      {position.achievements && position.achievements.length > 0 && (
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Award className="h-6 w-6 mr-3 text-primary" />
                Key Achievements
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Measurable results and impact delivered in this role.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {position.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 text-center space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 ${position.iconBg} rounded-full flex items-center justify-center mx-auto`}
                  >
                    <span
                      className={`text-2xl font-bold ${position.iconColor}`}
                    >
                      {achievement.metric}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-foreground">
                      {achievement.description}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {achievement.impact}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Notable Projects Section */}
      {position.notableProjects && position.notableProjects.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <BarChart3 className="h-6 w-6 mr-3 text-primary" />
                Notable Current Projects
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Significant projects and initiatives that showcase expertise and
                impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {position.notableProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 space-y-4 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`p-3 rounded-lg ${position.iconBg} flex-shrink-0`}
                    >
                      <DollarSign className={`h-5 w-5 ${position.iconColor}`} />
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        position.type === 'Full-time'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                      }`}
                    >
                      {project.value}
                    </span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                      <p className="text-sm font-medium text-foreground">
                        {project.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Detailed Roles Section */}
      <RoleBreakdown positionId={positionId} />

      {/* Tools & Technologies Section */}
      {position.tools && position.tools.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Wrench className="h-6 w-6 mr-3 text-primary" />
                Tools & Technologies
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Technologies and tools used to deliver exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {position.tools.map((toolCategory, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 space-y-4"
                >
                  <h3 className={`font-semibold ${position.iconColor}`}>
                    {toolCategory.category}
                  </h3>
                  <div className="space-y-2">
                    {toolCategory.items.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="flex items-center space-x-2"
                      >
                        <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-muted-foreground">
                          {tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {position.certifications && position.certifications.length > 0 && (
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Shield className="h-6 w-6 mr-3 text-primary" />
                Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Professional certifications and qualifications.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {position.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-xl p-6 flex items-center space-x-4"
                >
                  <div
                    className={`p-3 rounded-lg ${position.iconBg} flex-shrink-0`}
                  >
                    <Star className={`h-5 w-5 ${position.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </p>
                    <span
                      className={`inline-block mt-1 px-2 py-1 text-xs rounded-full ${
                        cert.status === 'Active'
                          ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
                      }`}
                    >
                      {cert.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stakeholders Section */}
      {position.stakeholders && position.stakeholders.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center">
                <Users className="h-6 w-6 mr-3 text-primary" />
                Key Stakeholders
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Working closely with diverse stakeholders to achieve common
                goals.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {position.stakeholders.map((stakeholder, index) => (
                <div
                  key={index}
                  className="bg-card border rounded-lg p-4 text-center space-y-2 hover:shadow-md transition-all duration-200"
                >
                  <div
                    className={`w-8 h-8 ${position.iconBg} rounded-full flex items-center justify-center mx-auto`}
                  >
                    <Users className={`h-4 w-4 ${position.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {stakeholder}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Development & Growth Section */}
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

      {/* Key Responsibilities */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Overall Responsibilities */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="text-2xl font-bold">Key Responsibilities</h2>
              </div>

              <div className="space-y-4">
                {position.keyResponsibilities.map((responsibility, index) => (
                  <div key={index} className="flex items-start space-x-3 group">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 group-hover:scale-110 transition-transform" />
                    <p className="text-muted-foreground leading-relaxed">
                      {responsibility}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Technologies */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Skills & Technologies</h2>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-3">
                  {position.skills.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition-colors hover:scale-105 cursor-default ${
                        position.type === 'Full-time'
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-900/50'
                          : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 hover:bg-green-200 dark:hover:bg-green-900/50'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skill Categories */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {position.type === 'Full-time' ? (
                  <>
                    <div className="bg-card border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                        Financial Management
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Accounts Receivable</li>
                        <li>• Sage Accounting</li>
                        <li>• Invoicing Systems</li>
                      </ul>
                    </div>
                    <div className="bg-card border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">
                        Business Operations
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Tender Management</li>
                        <li>• Project Coordination</li>
                        <li>• Stakeholder Relations</li>
                      </ul>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="bg-card border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                        Frontend Development
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• React.js & Next.js</li>
                        <li>• TypeScript</li>
                        <li>• Tailwind CSS</li>
                      </ul>
                    </div>
                    <div className="bg-card border rounded-lg p-4">
                      <h4 className="font-semibold mb-2 text-green-600 dark:text-green-400">
                        Design & Optimization
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• UI/UX Design</li>
                        <li>• SEO Strategy</li>
                        <li>• Performance Optimization</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-card border rounded-2xl p-8 md:p-12 space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">
              Interested in Similar Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {position.type === 'Full-time'
                ? 'Looking for expertise in tender management, project coordination, or financial operations? Let&apos;s discuss how I can help your organization achieve operational excellence.'
                : 'Need a custom website or digital solution? Let&apos;s create something amazing together that drives results for your business.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Start a Conversation
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  View More Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
