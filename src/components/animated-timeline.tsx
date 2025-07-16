'use client';

import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface TimelineItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  skills?: string[];
  achievements?: string[];
}

interface AnimatedTimelineProps {
  items: TimelineItem[];
}

export function AnimatedTimeline({ items }: AnimatedTimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.getAttribute('data-item-id');
            if (itemId) {
              setVisibleItems((prev) => new Set([...prev, itemId]));
            }
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    // Observe all timeline items
    itemRefs.current.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const setItemRef = (id: string, element: HTMLDivElement | null) => {
    if (element) {
      itemRefs.current.set(id, element);
    } else {
      itemRefs.current.delete(id);
    }
  };

  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"></div>

      <div className="space-y-12">
        {items.map((item, index) => {
          const isVisible = visibleItems.has(item.id);
          const isActive = activeItem === item.id;

          return (
            <div
              key={item.id}
              ref={(el) => setItemRef(item.id, el)}
              data-item-id={item.id}
              className={`relative pl-16 transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
              style={{
                transitionDelay: `${index * 200}ms`,
              }}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
            >
              {/* Timeline Dot */}
              <div
                className={`absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-background transition-all duration-300 ${
                  isVisible ? 'bg-primary scale-100' : 'bg-muted scale-75'
                } ${isActive ? 'ring-4 ring-primary/30 scale-110' : ''}`}
              >
                {/* Pulse animation for active item */}
                {isActive && (
                  <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75"></div>
                )}
              </div>

              {/* Content Card */}
              <Card
                className={`transition-all duration-300 hover:shadow-lg ${
                  isActive ? 'shadow-xl ring-2 ring-primary/20' : ''
                }`}
              >
                <CardContent className="p-6">
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-primary mb-1">
                      {item.company}
                    </h3>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.role}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <span className="font-medium">{item.period}</span>
                      <span className="hidden sm:inline">•</span>
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {item.description.map((desc, i) => (
                        <li
                          key={i}
                          className={`flex items-start gap-2 text-sm text-muted-foreground transition-all duration-300 ${
                            isVisible
                              ? 'opacity-100 translate-x-0'
                              : 'opacity-0 translate-x-4'
                          }`}
                          style={{
                            transitionDelay: `${index * 200 + i * 100}ms`,
                          }}
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills */}
                  {item.skills && item.skills.length > 0 && (
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold mb-2">
                        Key Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, i) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className={`text-xs transition-all duration-300 ${
                              isVisible
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-75'
                            }`}
                            style={{
                              transitionDelay: `${
                                index * 200 + 400 + i * 50
                              }ms`,
                            }}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Achievements */}
                  {item.achievements && item.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold mb-2">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-1">
                        {item.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className={`flex items-start gap-2 text-sm text-muted-foreground transition-all duration-300 ${
                              isVisible
                                ? 'opacity-100 translate-x-0'
                                : 'opacity-0 translate-x-4'
                            }`}
                            style={{
                              transitionDelay: `${
                                index * 200 + 600 + i * 100
                              }ms`,
                            }}
                          >
                            <span className="text-primary">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
