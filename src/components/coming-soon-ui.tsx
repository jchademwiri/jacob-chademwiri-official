'use client';
import { useState } from 'react';
import { Sun, Moon, Mail } from 'lucide-react';
import { SocialLinks } from './social-links';

export default function ModernDarkUI() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center px-6 py-16 sm:py-24 font-sans transition-colors duration-500 ${
        darkMode
          ? 'bg-gradient-to-b from-green-950 to-black text-green-50'
          : 'bg-gradient-to-b from-green-50 to-green-100 text-green-900'
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        className={`absolute top-6 right-6 p-2 rounded-full ${
          darkMode
            ? 'bg-green-900 hover:bg-green-800'
            : 'bg-white/80 hover:bg-white shadow-md'
        } transition-all duration-300`}
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={18} /> : <Moon size={18} />}
      </button>

      <main className="text-center space-y-8 max-w-2xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
            Website Coming Soon
          </h1>
          <p
            className={`text-lg sm:text-xl ${
              darkMode ? 'text-green-300' : 'text-green-700'
            } max-w-md mx-auto`}
          >
            Something great is on the way. We&apos;re working hard to launch our
            site!
          </p>
        </div>

        {/* Contact Details */}
        <div
          className={`flex flex-col items-center gap-3 mb-6 ${
            darkMode ? 'text-green-200' : 'text-green-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <a href="mailto:hello@jacobc.co.za" className="hover:underline">
              hello@jacobc.co.za
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <a href="tel:0740491433" className="hover:underline">
              074 049 1433
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@jacobc.co.za"
            className={`inline-flex items-center justify-center font-medium gap-2 px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 ${
              darkMode
                ? 'bg-green-700 hover:bg-green-600 text-white'
                : 'bg-green-700 hover:bg-green-800 text-white'
            }`}
          >
            <Mail size={16} />
            Contact Us
          </a>

          <a
            href="#subscribe"
            className={`inline-flex items-center justify-center font-medium gap-2 px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 ${
              darkMode
                ? 'bg-green-900/60 hover:bg-green-800/80 text-green-100'
                : 'bg-green-100 hover:bg-green-200 text-green-800'
            }`}
          >
            Stay Updated
          </a>
        </div>

        {/* Feature Highlights */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 ${
            darkMode ? 'text-green-200' : 'text-green-800'
          }`}
        >
          <div
            className={`p-6 rounded-xl ${
              darkMode ? 'bg-green-900/30' : 'bg-white/80'
            }`}
          >
            <div className="mb-4">
              <span
                className={`inline-flex p-3 rounded-lg ${
                  darkMode ? 'bg-green-800/60' : 'bg-green-100'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-medium">Lightning Fast</h3>
            <p
              className={`mt-2 text-sm ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              Optimized for speed and performance
            </p>
          </div>

          <div
            className={`p-6 rounded-xl ${
              darkMode ? 'bg-green-900/30' : 'bg-white/80'
            }`}
          >
            <div className="mb-4">
              <span
                className={`inline-flex p-3 rounded-lg ${
                  darkMode ? 'bg-green-800/60' : 'bg-green-100'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-medium">Secure</h3>
            <p
              className={`mt-2 text-sm ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              Built with the latest security standards
            </p>
          </div>

          <div
            className={`p-6 rounded-xl ${
              darkMode ? 'bg-green-900/30' : 'bg-white/80'
            }`}
          >
            <div className="mb-4">
              <span
                className={`inline-flex p-3 rounded-lg ${
                  darkMode ? 'bg-green-800/60' : 'bg-green-100'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </span>
            </div>
            <h3 className="text-lg font-medium">Reliable</h3>
            <p
              className={`mt-2 text-sm ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}
            >
              99.9% uptime guaranteed
            </p>
          </div>
        </div>

        {/* Social Links */}
        <SocialLinks />
      </main>
    </div>
  );
}
