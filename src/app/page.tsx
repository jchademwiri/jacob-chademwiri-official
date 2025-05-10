'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Github, Twitter, Linkedin, Sun, Moon } from 'lucide-react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-24 font-sans transition-colors duration-500 bg-gradient-to-b from-[#f5f7fa] to-[#c3cfe2] dark:from-[#1f2937] dark:to-[#111827] text-gray-900 dark:text-gray-100">
      {/* Dark Mode Toggle */}
      <button
        className="absolute top-6 right-6 p-2 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur hover:bg-white/50 dark:hover:bg-white/20 transition"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <main className="text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
          Coming Soon
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-md mx-auto">
          Something great is on the way. We’re working hard to launch our site!
        </p>

        <Link
          href="mailto:hello@jacobc.co.za"
          className="inline-flex items-center font-semibold gap-2 bg-black text-white px-6 py-3 rounded-full text-sm sm:text-base hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-200"
        >
          <Mail size={16} />
          hello@jacobc.co.za
        </Link>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4">
          <Link
            href="https://github.com/jchademwiri"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            target="_blank"
          >
            <Github />
          </Link>
          <Link
            href="https://twitter.com/yourhandle"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            target="_blank"
          >
            <Twitter />
          </Link>
          <Link
            href="https://linkedin.com/in/jchademwiri"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            target="_blank"
          >
            <Linkedin />
          </Link>
        </div>
      </main>

      <footer className="absolute bottom-6 text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} jacobc.co.za. All rights reserved.
      </footer>
    </div>
  );
}
