// 'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { SocialLinks } from '@/components/social-links';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Jacob Chademwiri | Web Developer & Project Manager',
  description:
    'Learn about Jacob Chademwiri: Full-stack web developer, project manager, and business problem solver. Discover his story, achievements, skills, and how to connect.',
  openGraph: {
    title: 'About Jacob Chademwiri | Web Developer & Project Manager',
    description:
      'Learn about Jacob Chademwiri: Full-stack web developer, project manager, and business problem solver. Discover his story, achievements, skills, and how to connect.',
    url: 'https://jacobc.co.za/about',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jacob Chademwiri – About',
      },
    ],
    type: 'profile',
  },
};

export default function AboutPage() {
  return (
    <main className="flex flex-col gap-16 pb-24">
      {/* Hero/Intro Section */}
      <section className="relative w-full overflow-hidden min-h-[400px] flex items-center justify-center bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black">
        <div className="absolute inset-0 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center text-center space-y-6 py-16">
          <Avatar className="size-28 md:size-36 shadow-lg border-4 border-white dark:border-gray-900 mb-4">
            <AvatarImage
              src="/jacobc.jpg"
              alt="Jacob Chademwiri profile photo"
            />
            <AvatarFallback>JC</AvatarFallback>
          </Avatar>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tighter mb-2">
            Jacob Chademwiri
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Full-Stack Web Developer & Project Manager
            <br />
            <span className="text-green-600 dark:text-green-400 font-semibold">
              Delivering business results, not just code.
            </span>
          </p>
          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <Badge>Web Development</Badge>
            <Badge variant="secondary">Project Management</Badge>
            <Badge variant="secondary">SEO</Badge>
            <Badge variant="secondary">Tender Management</Badge>
            <Badge variant="secondary">IT Support</Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button
              asChild
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 text-white border-0"
            >
              <Link href="/projects">See My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/10"
            >
              <Link href="/contact">Book a Free Consultation</Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link
                href="/jacob-chademwiri-cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* My Story / Why I Do This */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>My Story</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              I didn't start out planning to be both a developer and a project
              manager—but every project taught me that great technology without
              great execution is just expensive code.
            </p>
            <p className="mb-4">
              Over the past 5+ years, I've written thousands of lines of code
              and led cross-functional teams. I've debugged complex issues at 2
              AM and explained project delays in boardrooms. These experiences
              taught me that the best solutions aren't just technically
              elegant—they're business-smart.
            </p>
            <p className="mb-4">
              That's why I approach every project with two questions:{' '}
              <span className="font-semibold">How do we build this right?</span>{' '}
              and{' '}
              <span className="font-semibold">
                How do we build the right thing?
              </span>{' '}
              Whether I'm architecting a new web application or coordinating a
              digital transformation, I bring that dual perspective to
              everything I do.
            </p>
            <p className="text-muted-foreground italic">
              "Code is communication. Whether I'm writing JavaScript or leading
              a project meeting, everything I do is about clear, effective
              communication—between systems, teams, and business goals."
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Key Achievements / By the Numbers */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Key Achievements
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              50+
            </span>
            <div className="text-muted-foreground mt-1">Projects Delivered</div>
          </div>
          <div>
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              92%
            </span>
            <div className="text-muted-foreground mt-1">
              Tender Success Rate
            </div>
          </div>
          <div>
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              R15M+
            </span>
            <div className="text-muted-foreground mt-1">Contracts Secured</div>
          </div>
          <div>
            <span className="text-4xl font-bold text-green-600 dark:text-green-400">
              100%
            </span>
            <div className="text-muted-foreground mt-1">
              On-Time Delivery (3 Years)
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Skills & Certifications
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>React.js, Next.js, TypeScript</li>
                <li>WordPress, WooCommerce</li>
                <li>HTML5, CSS3, Tailwind CSS</li>
                <li>Node.js, MongoDB</li>
                <li>Google Cloud, Vercel, Netlify</li>
                <li>Figma, Adobe XD</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project & Business Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Project Management (Agile, Microsoft Project)</li>
                <li>Stakeholder & Team Leadership</li>
                <li>Budget & Risk Management</li>
                <li>Quality Assurance & Compliance</li>
                <li>Tender Management & RFPs</li>
                <li>Process Optimization & Automation</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  Career Essentials in Project Management (Microsoft & LinkedIn)
                </li>
                <li>Agile Project Management Foundations</li>
                <li>Microsoft 365 Administration</li>
                <li>Sage Evolution Certified User</li>
                <li>
                  Diploma in Information Technology (Mutare Polytechnical
                  College)
                </li>
                <li>Frontend Development Certification (Treehouse)</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Experience & Roles */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Experience & Roles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sithembe Transportation & Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">
                Tendering & Accounts Receivable Manager | Projects Coordinator
              </p>
              <p className="text-muted-foreground mb-2">
                Centurion, Gauteng, South Africa | 2021 - Present
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-2">
                <li>Managing R500K+ in annual receivables</li>
                <li>Leading digital transformation initiatives</li>
                <li>Overseeing tender processes with 85%+ win rate</li>
                <li>Coordinating cross-departmental teams</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Playhouse Media Group</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-semibold mb-2">
                Senior Web Developer (Freelance)
              </p>
              <p className="text-muted-foreground mb-2">
                Gauteng, South Africa | 2020 - Present
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-2">
                <li>50+ successful project deliveries</li>
                <li>Specializing in React, Next.js, and WordPress</li>
                <li>SEO, analytics, and digital marketing</li>
                <li>UI/UX design and prototyping</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Highlights (Story-Driven) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Project Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Sithembe Transportation Website Redesign</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Challenge: Modernize digital presence for a competitive market.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-2">
                <li>Led stakeholder meetings to define business goals</li>
                <li>Designed user-friendly wireframes in Figma</li>
                <li>
                  Rebuilt site with Next.js & Tailwind CSS for performance
                </li>
                <li>Implemented SEO best practices</li>
              </ul>
              <div className="text-green-600 font-semibold mt-2">
                Results: 60% faster loading, mobile-optimized, improved search
                rankings
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Edurite Tutors Educational Platform</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2">
                Challenge: Build a complete digital presence from scratch.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground mb-2">
                <li>Custom WordPress site with Elementor</li>
                <li>Brand identity and social media integration</li>
                <li>Google My Business for local SEO</li>
                <li>Analytics for performance tracking</li>
              </ul>
              <div className="text-green-600 font-semibold mt-2">
                Results: Professional brand, strong local presence, easy content
                management
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials / Endorsements */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>What Others Say</CardTitle>
          </CardHeader>
          <CardContent>
            <blockquote className="italic text-lg text-muted-foreground border-l-4 border-green-600 pl-4 mb-2">
              "Jacob is a skilled, dedicated professional with exceptional
              problem-solving abilities, strong teamwork, and a proven track
              record of delivering results."
            </blockquote>
            <div className="text-right text-sm text-muted-foreground">
              — Bright Bhamu, Software Development Project Manager
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Personal Interests / Fun Facts */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card>
          <CardHeader>
            <CardTitle>Beyond Work</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
              <li>Currently learning AI integration for web apps</li>
              <li>
                Passionate about photography and exploring South Africa's
                landscapes
              </li>
              <li>
                Enjoy collaborating with diverse teams and mentoring junior
                developers
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Connect / CTA Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <Card>
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-4">
              <p className="mb-2">
                Ready to start your project or just want to connect? I typically
                respond within 24 hours.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  <Link href="/contact">Send a Message</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-green-600 text-green-600"
                >
                  <Link
                    href="/jacob-chademwiri-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="lg">
                  <Link href="mailto:hello@jacobc.co.za">Email Me</Link>
                </Button>
              </div>
            </div>
            <SocialLinks />
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
