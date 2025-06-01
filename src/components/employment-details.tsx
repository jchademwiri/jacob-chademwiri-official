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
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { currentPositions } from '@/data';

interface EmploymentDetailsPageProps {
  positionId: string;
}

export function EmploymentDetails({
  positionId,
}: EmploymentDetailsPageProps) {
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
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
                          3 Core Disciplines
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                          Experience
                        </span>
                        <span className="text-sm font-medium">9+ Months</span>
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
                          Technologies
                        </span>
                        <span className="text-sm font-medium">12+ Tools</span>
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

                <div className="pt-4 border-t">
                  <Link href="/contact">
                    <Button className="w-full">Discuss Similar Projects</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Responsibilities */}
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Responsibilities */}
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

      {/* Impact Section */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              Impact & Achievements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {position.type === 'Full-time'
                ? 'Contributing to operational excellence and business growth through strategic management and process optimization.'
                : 'Delivering exceptional digital solutions that drive business success and user engagement.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {position.type === 'Full-time' ? (
              <>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Process Efficiency</h3>
                  <p className="text-sm text-muted-foreground">
                    Streamlined accounts receivable and tender management
                    processes
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                    <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Strategic Planning</h3>
                  <p className="text-sm text-muted-foreground">
                    Enhanced project coordination and stakeholder management
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Quality Assurance</h3>
                  <p className="text-sm text-muted-foreground">
                    Maintained high standards in financial accuracy and
                    compliance
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <Globe className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold">Web Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Custom websites that drive engagement and business growth
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold">SEO Performance</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized digital presence for improved search rankings
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold">User Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    Responsive designs focused on accessibility and usability
                  </p>
                </div>
              </>
            )}
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
                ? "Looking for expertise in tender management, project coordination, or financial operations? Let's discuss how I can help your organization achieve operational excellence."
                : "Need a custom website or digital solution? Let's create something amazing together that drives results for your business."}
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
