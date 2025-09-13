import { developmentProcess } from '@/data';
import { CheckCircle } from 'lucide-react';

export default function DevelopmentProcess() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Development Process
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            A structured approach to web development ensuring quality,
            performance, and client satisfaction.
          </p>
        </div>

        <div className="space-y-8">
          {developmentProcess.map((phase, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {phase.step}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">{phase.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {phase.description}
                </p>
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    Key Deliverables:
                  </h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-gray-600 dark:text-gray-400"
                      >
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
