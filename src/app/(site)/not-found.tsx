'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden flex items-center justify-center relative">
      {/* Background gradient - matches your hero section */}
      <div className="absolute inset-0 transition-colors duration-300 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black" />

      {/* Animated orbs - same as hero section */}
      <div
        className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full blur-3xl transition-colors duration-300 bg-green-600/15 dark:bg-green-500/20"
        style={{
          transform: `translate(${mousePosition.x * 20}px, ${
            mousePosition.y * 20
          }px)`,
          transition: 'transform 0.7s ease-out',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl transition-colors duration-300 bg-green-500/10 dark:bg-green-400/10"
        style={{
          transform: `translate(${-mousePosition.x * 30}px, ${
            -mousePosition.y * 30
          }px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div
        className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full blur-3xl transition-colors duration-300 bg-emerald-600/10 dark:bg-emerald-500/15"
        style={{
          transform: `translate(${-mousePosition.x * 15}px, ${
            mousePosition.y * 15
          }px)`,
          transition: 'transform 0.9s ease-out',
        }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNCIvPjwvZz48L3N2Zz4=')] transition-opacity duration-300 opacity-20 dark:opacity-5" />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* 404 Number with glitch effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 select-none">
            404
          </h1>
          {/* Glitch layer */}
          <h1 className="absolute inset-0 text-9xl md:text-[12rem] font-black text-green-600/20 dark:text-green-400/20 select-none animate-pulse">
            404
          </h1>
        </div>

        {/* Status indicator */}
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
          <span className="text-sm uppercase tracking-wider font-medium text-gray-600 dark:text-gray-400">
            Page Not Found
          </span>
          <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
        </div>

        {/* Main heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
          Oops! You&apos;ve ventured into
          <br className="hidden sm:block" />
          <span className="text-green-600 dark:text-green-400">
            uncharted territory
          </span>
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
          The page you&apos;re looking for seems to have wandered off. But
          don&apos;t worry - let&apos;s get you back on the right path to
          explore my work in project management and web development.
        </p>

        {/* Suggestion cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
          <Link href="/#portfolio" className="group">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-green-500/50 transition-all duration-300 cursor-pointer group-hover:scale-105">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg
                  className="w-4 h-4 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Portfolio
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                View my latest projects
              </p>
            </div>
          </Link>

          <Link href="/#about" className="group">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-green-500/50 transition-all duration-300 cursor-pointer group-hover:scale-105">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg
                  className="w-4 h-4 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                About
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Learn about my services
              </p>
            </div>
          </Link>

          <Link href="/#contact" className="group">
            <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200/50 dark:border-gray-700/50 hover:border-green-500/50 transition-all duration-300 cursor-pointer group-hover:scale-105">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-3 mx-auto">
                <svg
                  className="w-4 h-4 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Contact
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Get in touch with me
              </p>
            </div>
          </Link>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white border-0"
          >
            <Link href="/">Back to Home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-green-600 text-green-600 hover:bg-green-600/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/10"
          >
            <Link href="/#projects">Browse Projects</Link>
          </Button>
        </div>

        {/* Search suggestion */}
        <div className="mt-12 py-8 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            Looking for something specific? Try searching:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { term: 'tender management', href: '/#features' },
              { term: 'web development', href: '/#features' },
              { term: 'project coordination', href: '/#features' },
              { term: 'portfolio', href: '/#projects' },
            ].map(({ term, href }) => (
              <Link
                key={term}
                href={href}
                className="px-3 py-1 text-xs bg-gray-200/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 rounded-full hover:bg-green-100 dark:hover:bg-green-900/30 cursor-pointer transition-colors duration-200"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
