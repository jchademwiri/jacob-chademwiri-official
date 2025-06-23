'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SocialLinks } from '@/components/social-links';
import Link from 'next/link';
import {
  Calendar,
  MapPin,
  Briefcase,
  Mail,
  Download,
  ExternalLink,
  Star,
  Code,
  Users,
  Target,
  Zap,
  ChevronDown,
  Send,
  CheckCircle,
} from 'lucide-react';
import { aboutData } from '@/data';

// Counter Animation Hook
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration, isVisible]);

  return { count, setIsVisible };
};

// Intersection Observer Hook
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
};

// Animated Number Component
const AnimatedNumber = ({
  value,
  suffix = '',
}: {
  value: string;
  suffix?: string;
}) => {
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const { count, setIsVisible } = useCountUp(numericValue);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView) setIsVisible(true);
  }, [isInView, setIsVisible]);

  return (
    <div
      ref={ref}
      className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-green-400 bg-clip-text text-transparent"
    >
      {value.includes('+')
        ? `${count}+`
        : value.includes('%')
        ? `${count}%`
        : value.includes('R')
        ? `R${count}M+`
        : value.includes('100')
        ? `${count}%`
        : count}
      {suffix}
    </div>
  );
};

// Skill Progress Bar Component
const SkillBar = ({ skill, level }: { skill: string; level: number }) => {
  const [progress, setProgress] = useState(0);
  const { ref, isInView } = useInView();

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setProgress(level), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView, level]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="font-medium">{skill}</span>
        <span className="text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-green-400 transition-all duration-1000 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

// Interactive Timeline Component
const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-green-400 to-primary"></div>

      {aboutData.experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative mb-12 md:ml-16 transition-all duration-500 ${
            activeIndex === index ? 'scale-105' : 'hover:scale-102'
          }`}
          onMouseEnter={() => setActiveIndex(index)}
        >
          <div className="hidden md:block absolute -left-20 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>

          <Card
            className={`transition-all duration-300 ${
              activeIndex === index
                ? 'border-primary shadow-lg shadow-primary/20'
                : ''
            }`}
          >
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <CardTitle className="text-xl">
                    {experience.company}
                  </CardTitle>
                  <p className="text-primary font-semibold mt-1">
                    {experience.role}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {experience.period}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {experience.description.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50"
                  >
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
        <p className="text-muted-foreground">
          I'll get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Name</label>
          <Input
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Your name"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Email</label>
          <Input
            required
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            placeholder="your@email.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Message</label>
        <Textarea
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
          placeholder="Tell me about your project..."
          rows={4}
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-primary hover:bg-primary/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};

export default function ModernAboutPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at ${50 + scrollY * 0.01}% ${
              50 + scrollY * 0.005
            }%, hsl(var(--primary)) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <Avatar className="size-32 md:size-40 mx-auto mb-8 shadow-2xl border-4 border-background">
              <AvatarImage
                src={aboutData.hero.profileImage}
                alt={`${aboutData.hero.name} profile photo`}
              />
              <AvatarFallback className="text-2xl">JC</AvatarFallback>
            </Avatar>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                {aboutData.hero.name}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-4">
              {aboutData.hero.title}
            </p>

            <p className="text-lg md:text-xl text-primary font-semibold mb-8">
              {aboutData.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {aboutData.hero.badges.map((badge, index) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="px-4 py-2 text-sm animate-in fade-in slide-in-from-bottom-4"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="/projects">
                  <Briefcase className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  View My Work
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Link href="#contact">
                  <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  Let's Talk
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 bg-gradient-to-br from-card to-muted/20 backdrop-blur-sm shadow-2xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                My Story
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {aboutData.story.content.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              <blockquote className="text-xl italic text-center border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg">
                "{aboutData.story.quote}"
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            By the Numbers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {aboutData.achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <AnimatedNumber value={achievement.value} />
                  <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors duration-300" />
                </div>
                <div className="text-muted-foreground mt-4 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Skills & Expertise
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Technical Skills with Progress Bars */}
            <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Code className="w-6 h-6 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <SkillBar skill="React.js / Next.js" level={95} />
                <SkillBar skill="TypeScript" level={90} />
                <SkillBar skill="WordPress / WooCommerce" level={88} />
                <SkillBar skill="Tailwind CSS" level={92} />
                <SkillBar skill="Node.js / MongoDB" level={85} />
                <SkillBar skill="Cloud Platforms" level={80} />
              </CardContent>
            </Card>

            {/* Business Skills */}
            <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  Business Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <SkillBar skill="Project Management" level={94} />
                <SkillBar skill="Team Leadership" level={91} />
                <SkillBar skill="Client Relations" level={96} />
                <SkillBar skill="Process Optimization" level={88} />
                <SkillBar skill="Tender Management" level={92} />
                <SkillBar skill="Strategic Planning" level={85} />
              </CardContent>
            </Card>
          </div>

          {/* Certifications */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              Certifications
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {aboutData.skills[2].items.map((cert, index) => (
                <Badge
                  key={cert}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 hover:border-primary transition-colors"
                >
                  <Star className="w-4 h-4 mr-2 text-primary" />
                  {cert}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Professional Journey
          </h2>
          <Timeline />
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aboutData.featuredProjects.map((project, index) => (
              <Card
                key={project.title}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-gradient-to-br from-card to-muted/20"
              >
                <CardHeader>
                  <CardTitle className="flex items-start justify-between">
                    <span>{project.title}</span>
                    <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {project.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        CHALLENGE
                      </h4>
                      <p className="text-sm">{project.challenge}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        RESULTS
                      </h4>
                      <p className="text-sm text-primary font-medium">
                        {project.results}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="group">
              <Link href="/projects">
                <Target className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View All Projects
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What Others Say
          </h2>

          {aboutData.testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 bg-gradient-to-br from-card to-muted/20 shadow-2xl"
            >
              <CardContent className="p-8">
                <blockquote className="text-xl italic text-center mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div className="text-center">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Beyond Work
          </h2>

          <Card className="border-0 bg-gradient-to-br from-card to-muted/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aboutData.personalInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <Zap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-sm">{interest}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/20 to-primary/5"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Let's Work Together
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {aboutData.contact.description}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Info & Actions */}
            <div className="space-y-8">
              <Card className="border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link href={`mailto:${aboutData.contact.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      {aboutData.contact.email}
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="w-full justify-start"
                    variant="outline"
                  >
                    <Link
                      href={aboutData.contact.cvLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download CV
                    </Link>
                  </Button>

                  <Button
                    asChild
                    className="w-full justify-start bg-primary hover:bg-primary/90"
                  >
                    <Link href="/projects">
                      <Briefcase className="w-4 h-4 mr-2" />
                      View Portfolio
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Connect</CardTitle>
                </CardHeader>
                <CardContent>
                  <SocialLinks />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
