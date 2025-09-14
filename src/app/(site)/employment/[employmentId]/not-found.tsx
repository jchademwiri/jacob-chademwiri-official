'use client';
import React, { useState, useEffect } from 'react';
import {
  Home,
  Search,
  Mail,
  ArrowRight,
  FileQuestion,
  Compass,
} from 'lucide-react';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const quickLinks = [
    {
      title: 'Home',
      description: 'Return to the main page',
      icon: Home,
      href: '/',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400',
    },
    {
      title: 'Portfolio',
      description: 'View my work and projects',
      icon: Compass,
      href: '/portfolio',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      iconColor: 'text-green-600 dark:text-green-400',
    },
    {
      title: 'Contact',
      description: 'Get in touch with me',
      icon: Mail,
      href: '/contact',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400',
    },
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl bg-blue-500/10 dark:bg-blue-400/10 transition-all duration-1000"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${
              mousePosition.y * 30
            }px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl bg-green-500/10 dark:bg-green-400/10 transition-all duration-700"
          style={{
            transform: `translate(${-mousePosition.x * 20}px, ${
              -mousePosition.y * 20
            }px)`,
          }}
        />
        <div
          className="absolute top-2/3 left-2/3 w-48 h-48 rounded-full blur-3xl bg-purple-500/10 dark:bg-purple-400/10 transition-all duration-1200"
          style={{
            transform: `translate(${-mousePosition.x * 25}px, ${
              mousePosition.y * 25
            }px)`,
          }}
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNCIvPjwvZz48L3N2Zz4=')] opacity-30 dark:opacity-10" />

      {/* Main Content */}
      <div className="relative  py-20 z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* 404 Icon and Number */}
          <div className="space-y-4">
            <div className="relative mx-auto w-32 h-32 mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full animate-pulse" />
              <div className="relative w-full h-full bg-background border-2 border-muted rounded-full flex items-center justify-center">
                <FileQuestion
                  className="h-16 w-16 text-muted-foreground animate-bounce"
                  style={{ animationDelay: '0.5s' }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-600 animate-pulse">
                404
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full mx-auto" />
            </div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Oops! Page Not Found
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The company you&apos;re looking for seems to have wandered off
              into the digital void. Don&apos;t worry though – let&apos;s get
              you back on track with some helpful options below.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mt-12">
            {quickLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <div
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                  onClick={() => (window.location.href = link.href)}
                >
                  <div className="relative bg-card border rounded-xl p-6 space-y-4 hover:shadow-lg transition-all duration-300 overflow-hidden">
                    {/* Gradient Background on Hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div
                      className={`w-12 h-12 ${link.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className={`h-6 w-6 ${link.iconColor}`} />
                    </div>

                    {/* Content */}
                    <div className="relative space-y-2">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {link.description}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end">
                      <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Search Suggestion */}
          <div
            className={`mt-12 transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="bg-muted/30 border rounded-xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-3">
                <Search className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-sm font-medium text-foreground">
                  Looking for something specific?
                </h3>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Try checking the URL for typos, or use the navigation menu to
                explore available pages.
              </p>
              <div className="text-xs text-muted-foreground">
                <span className="font-medium">Popular pages:</span> Portfolio,
                Services, Contact
              </div>
            </div>
          </div>

          {/* Fun Element */}
          <div
            className={`mt-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className="text-xs text-muted-foreground italic">
              &ldquo;Not all who wander are lost... but this page definitely
              is.&rdquo; 🧭
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
