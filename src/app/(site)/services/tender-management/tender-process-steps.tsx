import { tenderProcessSteps } from '@/data';
import React from 'react';

export default function TenderProcessSteps() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/30 dark:from-gray-900 dark:via-gray-900/80 dark:to-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
            <svg
              className="w-8 h-8 text-blue-600 dark:text-blue-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 dark:from-white dark:via-blue-200 dark:to-indigo-200 bg-clip-text text-transparent">
            My Tender Management Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A proven 5-step methodology that ensures comprehensive tender
            preparation and delivers exceptional success rates through
            systematic excellence.
          </p>
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Proven Process</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>5 Key Steps</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Maximum Success</span>
            </div>
          </div>
        </div>

        {/* Process Steps - Desktop: Alternating Layout */}
        <div className="hidden lg:block space-y-16">
          {tenderProcessSteps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center ${
                index % 2 === 0 ? '' : 'flex-row-reverse'
              } gap-12`}
            >
              {/* Content Side */}
              <div className="flex-1 group">
                <div
                  className={`bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                    index % 2 === 0 ? 'text-left' : 'text-right'
                  }`}
                >
                  <div
                    className={`flex items-center mb-4 ${
                      index % 2 === 0 ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Visual Side */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-105 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">
                      {step.step}
                    </span>
                  </div>
                  {index < tenderProcessSteps.length - 1 && (
                    <div
                      className={`absolute top-24 ${
                        index % 2 === 0 ? 'left-12' : 'right-12'
                      } w-0.5 h-16 bg-gradient-to-b from-blue-300 to-transparent`}
                    ></div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Process Steps - Mobile: Vertical Timeline */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-200 via-blue-400 to-blue-200 dark:from-blue-800 dark:via-blue-600 dark:to-blue-800"></div>

            <div className="space-y-8">
              {tenderProcessSteps.map((step, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Step number */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-white">
                        {step.step}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="ml-6 flex-1">
                    <div className="bg-white dark:bg-gray-800/50 rounded-xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center mb-3">
                        <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                          Step {step.step}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Transform Your Tender Success Rate?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how my proven process can help you win more tenders
              and grow your business.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
