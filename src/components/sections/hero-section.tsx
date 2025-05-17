'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export function HeroSection({ height = 'min-h-[600px]' }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      className={`relative w-full overflow-hidden ${height} flex items-center justify-center`}
    >
      {/* Background gradient - changes based on theme */}
      <div className="absolute inset-0 transition-colors duration-300 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black" />

      {/* Animated orbs - colors change based on theme */}
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

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
            <span className="text-sm uppercase tracking-wider font-medium text-green-600 dark:text-green-400">
              Jacob C
            </span>
            <span className="h-1 w-12 bg-green-600 dark:bg-green-400 rounded-full"></span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
            Bridging{' '}
            <span className="text-green-600 dark:text-green-400">
              Project Management
            </span>
            <br className="hidden sm:block" /> with{' '}
            <span className="text-green-600 dark:text-green-400">
              Digital Excellence
            </span>
          </h1>

          <p className="text-xl max-w-[800px] text-gray-700 dark:text-gray-300">
            Specialized in tender acquisition, project coordination, and
            creating sustainable web solutions that elevate your business. From
            winning contracts to delivering exceptional digital experiences.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <span className="px-3 py-1 text-sm bg-gray-200/60 dark:bg-gray-800/60 rounded-full">
              Tender Management
            </span>
            <span className="px-3 py-1 text-sm bg-gray-200/60 dark:bg-gray-800/60 rounded-full">
              Project Coordination
            </span>
            <span className="px-3 py-1 text-sm bg-gray-200/60 dark:bg-gray-800/60 rounded-full">
              Web Development
            </span>
            <span className="px-3 py-1 text-sm bg-gray-200/60 dark:bg-gray-800/60 rounded-full">
              UI/UX Design
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white border-0"
            >
              View Portfolio
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-600 text-green-600 hover:bg-green-600/10 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-500/10"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Light grid pattern overlay - opacity changes with theme */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBmaWxsPSIjMjIyIiBmaWxsLW9wYWNpdHk9Ii4wNCIvPjwvZz48L3N2Zz4=')] transition-opacity duration-300 opacity-20 dark:opacity-5" />
    </section>
  );
}
