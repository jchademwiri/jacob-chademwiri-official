import { tenderProcessSteps } from '@/data';
import React from 'react';

export default function TenderProcessSteps() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Tender Management Process
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A proven 5-step process that ensures comprehensive tender
            preparation and maximum success rates.
          </p>
        </div>

        <div className="space-y-8">
          {tenderProcessSteps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
