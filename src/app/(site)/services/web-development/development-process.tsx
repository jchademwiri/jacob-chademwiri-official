'use client';

import { useState, useRef, useEffect } from 'react';
import { developmentProcess } from '@/data';
import {
  CheckCircle,
  ArrowRight,
  Clock,
  Users,
  Target,
  ChevronDown,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProcessPhase {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
  timeline?: string;
  tools?: string[];
}

export default function DevelopmentProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const toggleStep = (stepIndex: number) => {
    setActiveStep(activeStep === stepIndex ? null : stepIndex);
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header Section */}
        <div className="text-center mb-20">
          <div
            className={cn(
              'inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl transition-all duration-700',
              'bg-gradient-to-br from-purple-100 to-purple-50 dark:from-purple-900/40 dark:to-purple-800/20',
              'border border-purple-200/50 dark:border-purple-700/30 shadow-lg',
              isInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
            )}
          >
            <Target className="w-10 h-10 text-purple-600 dark:text-purple-400" />
          </div>

          <div
            className={cn(
              'transition-all duration-700 delay-200',
              isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            )}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Development{' '}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-400 dark:to-purple-500 bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our battle-tested methodology combines industry best practices
              with cutting-edge technology to deliver exceptional web
              experiences that exceed expectations.
            </p>
          </div>
        </div>

        {/* Enhanced Process Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Progress Line */}
          <div className="absolute left-8 md:left-12 top-20 bottom-20 w-0.5 bg-gradient-to-b from-purple-200/0 via-purple-300 to-purple-200/0 dark:from-purple-700/0 dark:via-purple-600 dark:to-purple-700/0 hidden md:block">
            <div
              className={cn(
                'absolute top-0 left-0 w-full bg-gradient-to-b from-purple-500 to-purple-600 transition-all duration-2000 ease-out',
                isInView ? 'h-full' : 'h-0'
              )}
            />
          </div>

          <div className="space-y-8">
            {developmentProcess.map((phase: ProcessPhase, index) => (
              <div
                key={phase.step}
                className={cn(
                  'group relative transition-all duration-500',
                  isInView
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-8 opacity-0'
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Enhanced Step Card */}
                <div
                  className={cn(
                    'relative bg-white/80 dark:bg-gray-800/60 rounded-3xl shadow-lg dark:shadow-2xl',
                    'border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm',
                    'transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl/50',
                    'hover:scale-[1.01] hover:-translate-y-1',
                    activeStep === index &&
                      'ring-2 ring-purple-500/20 shadow-purple-500/10'
                  )}
                >
                  {/* Step Number with Enhanced Design */}
                  <div className="absolute -left-8 md:-left-12 top-8 z-10">
                    <div className="relative">
                      <div
                        className={cn(
                          'w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl shadow-xl',
                          'bg-gradient-to-br from-purple-600 via-purple-600 to-purple-700',
                          'dark:from-purple-500 dark:via-purple-500 dark:to-purple-600',
                          'text-white border-4 border-white dark:border-gray-800',
                          'transition-all duration-300 group-hover:scale-110 group-hover:rotate-3'
                        )}
                      >
                        {phase.step}
                        <div className="absolute -top-1 -right-1">
                          <Sparkles className="w-4 h-4 text-purple-300 opacity-80" />
                        </div>
                      </div>

                      {/* Enhanced Arrow */}
                      {index < developmentProcess.length - 1 && (
                        <div className="hidden lg:block absolute -right-12 top-1/2 transform -translate-y-1/2">
                          <ArrowRight
                            className={cn(
                              'w-8 h-8 text-purple-400 dark:text-purple-500 transition-all duration-300',
                              'group-hover:translate-x-1 group-hover:text-purple-600 dark:group-hover:text-purple-400'
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Enhanced Content */}
                  <div className="p-8 pl-16 md:pl-20">
                    <div
                      className="cursor-pointer"
                      onClick={() => toggleStep(index)}
                    >
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            {phase.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-4 py-2 rounded-full border border-purple-200 dark:border-purple-700/50">
                            <Clock className="w-4 h-4" />
                            {phase.timeline || `Step ${phase.step}`}
                          </div>
                        </div>

                        <ChevronDown
                          className={cn(
                            'w-6 h-6 text-gray-400 transition-transform duration-300 md:hidden',
                            activeStep === index && 'rotate-180'
                          )}
                        />
                      </div>

                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Enhanced Deliverables Section */}
                    <div
                      className={cn(
                        'transition-all duration-300 md:block',
                        activeStep === index ? 'block' : 'hidden md:block'
                      )}
                    >
                      <div className="bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-700/30 dark:to-gray-600/20 rounded-2xl p-6 border border-gray-200/50 dark:border-gray-600/30">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="p-2 bg-purple-100 dark:bg-purple-900/40 rounded-lg">
                            <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                            Key Deliverables
                          </h4>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {phase.deliverables.map((deliverable, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                'flex items-start gap-3 p-4 bg-white dark:bg-gray-800/50 rounded-xl',
                                'border border-gray-200/50 dark:border-gray-600/30 shadow-sm',
                                'transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50',
                                'hover:shadow-md hover:scale-[1.02]'
                              )}
                            >
                              <div className="p-1 bg-green-100 dark:bg-green-900/30 rounded-full">
                                <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                              </div>
                              <span className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
                                {deliverable}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Tools Section (if provided) */}
                        {phase.tools && (
                          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600/30">
                            <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wide">
                              Tools & Technologies
                            </h5>
                            <div className="flex flex-wrap gap-2">
                              {phase.tools.map((tool, toolIdx) => (
                                <span
                                  key={toolIdx}
                                  className="px-3 py-1 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 text-sm rounded-full border border-purple-200 dark:border-purple-700/50"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Progress Indicator */}
                {index < developmentProcess.length - 1 && (
                  <div className="flex justify-center mt-6 md:hidden">
                    <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div
          className={cn(
            'mt-24 transition-all duration-700 delay-500',
            isInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          )}
        >
          <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 dark:from-purple-500 dark:via-purple-600 dark:to-purple-700 rounded-3xl p-10 shadow-2xl">
            {/* Simple Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute bottom-4 left-8 w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="absolute bottom-8 right-4 w-2 h-2 bg-white rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-white rounded-full"></div>
              <div className="absolute top-1/4 right-1/3 w-1.5 h-1.5 bg-white rounded-full"></div>
            </div>

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6 backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Vision?
              </h3>
              <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                Join hundreds of satisfied clients who&apos;ve experienced our
                proven development process. Let&apos;s create something
                extraordinary together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 hover:bg-gray-50 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 border border-white/20">
                  Start Your Project
                </button>
                <button className="bg-white/10 text-white hover:bg-white/20 px-8 py-4 rounded-2xl font-semibold transition-all duration-200 backdrop-blur-sm border border-white/20 hover:border-white/30">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
