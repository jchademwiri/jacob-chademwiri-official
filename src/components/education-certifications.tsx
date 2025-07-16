'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Award, GraduationCap, ExternalLink } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  field: string;
  period: string;
  location: string;
  description?: string;
  achievements?: string[];
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  expiryDate?: string;
  skills: string[];
  verificationUrl?: string;
  category: 'Technical' | 'Business' | 'Project Management';
}

const educationData: Education[] = [
  {
    institution: 'Harare Institute of Technology',
    degree: 'Diploma',
    field: 'Information Technology',
    period: '2016 - 2018',
    location: 'Harare, Zimbabwe',
    description:
      'Comprehensive program covering software development, database management, networking, and IT support.',
    achievements: [
      'Graduated with Distinction',
      'Led final year project on web application development',
      'Active member of IT Students Association',
    ],
  },
];

const certificationsData: Certification[] = [
  {
    name: 'Explore a Career in Project Management',
    issuer: 'LinkedIn Learning',
    date: '2024',
    category: 'Project Management',
    skills: ['Project Planning', 'Risk Management', 'Stakeholder Management'],
    verificationUrl: '#',
  },
  {
    name: 'Agile Foundations',
    issuer: 'LinkedIn Learning',
    date: '2024',
    category: 'Project Management',
    skills: ['Agile Methodology', 'Scrum', 'Sprint Planning'],
    verificationUrl: '#',
  },
  {
    name: 'Project Management Foundations',
    issuer: 'LinkedIn Learning',
    date: '2024',
    category: 'Project Management',
    skills: ['Project Lifecycle', 'Resource Management', 'Quality Control'],
    verificationUrl: '#',
  },
  {
    name: 'Build Your Project Management Skills',
    issuer: 'LinkedIn Learning',
    date: '2024',
    category: 'Project Management',
    skills: ['Leadership', 'Communication', 'Problem Solving'],
    verificationUrl: '#',
  },
  {
    name: 'Career Essentials in Project Management',
    issuer: 'Microsoft & LinkedIn',
    date: '2024',
    category: 'Project Management',
    skills: ['Microsoft Project', 'Team Collaboration', 'Project Delivery'],
    verificationUrl: '#',
  },
  {
    name: 'Front-End Developer Certificate',
    issuer: 'freeCodeCamp',
    date: '2020',
    category: 'Technical',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    verificationUrl: '#',
  },
  {
    name: 'Microsoft 365 Essential Training',
    issuer: 'LinkedIn Learning',
    date: '2023',
    category: 'Business',
    skills: ['Microsoft 365', 'Teams', 'SharePoint', 'OneDrive'],
    verificationUrl: '#',
  },
  {
    name: 'Introduction to Microsoft 365 for IT Pros',
    issuer: 'LinkedIn Learning',
    date: '2023',
    category: 'Technical',
    skills: ['Microsoft 365 Admin', 'Security', 'Compliance'],
    verificationUrl: '#',
  },
];

export function EducationCertifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCertifications =
    selectedCategory === 'all'
      ? certificationsData
      : certificationsData.filter((cert) => cert.category === selectedCategory);

  const certificationCategories = [
    'all',
    ...Array.from(new Set(certificationsData.map((cert) => cert.category))),
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-12">
      {/* Education Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Education</h2>
        </div>

        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {edu.degree} in {edu.field}
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {edu.institution}
                    </h4>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.period}</span>
                      </div>
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>

                {edu.description && (
                  <p className="text-muted-foreground mb-4">
                    {edu.description}
                  </p>
                )}

                {edu.achievements && edu.achievements.length > 0 && (
                  <div>
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-1">✓</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Certifications Section */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <Award className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold">Professional Certifications</h2>
        </div>

        {/* Category Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            {certificationCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {category === 'all' ? 'All Certifications' : category}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertifications.map((cert, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge
                    variant="secondary"
                    className={`mb-2 ${
                      cert.category === 'Technical'
                        ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'
                        : cert.category === 'Business'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                        : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                    }`}
                  >
                    {cert.category}
                  </Badge>
                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">
                  {cert.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-sm text-primary">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar className="w-3 h-3" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  {cert.credentialId && (
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Credential ID:</span>{' '}
                      {cert.credentialId}
                    </div>
                  )}

                  {cert.expiryDate && (
                    <div className="text-xs text-muted-foreground">
                      <span className="font-medium">Expires:</span>{' '}
                      {cert.expiryDate}
                    </div>
                  )}

                  <div>
                    <h5 className="text-sm font-semibold mb-2">
                      Skills Covered:
                    </h5>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="text-xs px-2 py-0.5"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Summary */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Certifications Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {certificationsData.length}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Certifications
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {
                    certificationsData.filter(
                      (cert) => cert.category === 'Project Management'
                    ).length
                  }
                </div>
                <div className="text-sm text-muted-foreground">
                  Project Management
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {
                    certificationsData.filter(
                      (cert) => cert.category === 'Technical'
                    ).length
                  }
                </div>
                <div className="text-sm text-muted-foreground">Technical</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {
                    certificationsData.filter(
                      (cert) => cert.category === 'Business'
                    ).length
                  }
                </div>
                <div className="text-sm text-muted-foreground">Business</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
