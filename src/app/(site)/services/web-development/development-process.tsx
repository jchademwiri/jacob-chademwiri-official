import { developmentProcess } from '@/data';
import { CheckCircle, ArrowRight, Clock, Users, Target } from 'lucide-react';

export default function DevelopmentProcess() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-6">
            <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Development Process
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A structured, client-focused approach to web development that
            ensures quality, performance, and exceptional results at every
            stage.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-6 top-16 bottom-16 w-0.5 bg-gradient-to-b from-purple-200 via-purple-400 to-purple-600 dark:from-purple-800 dark:via-purple-600 dark:to-purple-400 hidden md:block"></div>

          <div className="space-y-12">
            {developmentProcess.map((phase, index) => (
              <div key={index} className="group relative">
                {/* Step Card */}
                <div className="relative bg-white dark:bg-gray-800/50 rounded-2xl shadow-lg dark:shadow-xl border border-gray-200 dark:border-gray-700/50 p-8 transition-all duration-300 hover:shadow-xl dark:hover:shadow-2xl hover:scale-[1.02] backdrop-blur-sm">
                  {/* Step Number Circle */}
                  <div className="absolute -left-6 top-8 md:relative md:left-0 md:top-0 md:inline-flex md:mb-6">
                    {/* Step Number */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                        {phase.step}
                      </div>
                      {/* Arrow Right */}
                      {index < developmentProcess.length - 1 && (
                        <div className="hidden md:block absolute -right-8 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-6 h-6 text-purple-400 dark:text-purple-500" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:ml-0 ml-8">
                    <div className="flex items-center gap-3 mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {phase.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-purple-600 dark:text-purple-400 bg-purple-50 dark:bg-purple-900/30 px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4" />
                        Step {phase.step}
                      </div>
                    </div>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {phase.description}
                    </p>

                    {/* Deliverables Section */}
                    <div className="bg-gray-50 dark:bg-gray-700/30 rounded-xl p-6 border border-gray-100 dark:border-gray-600/30">
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                          Key Deliverables
                        </h4>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-600/30 transition-colors duration-200 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                              {deliverable}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Progress Indicator */}
                {index < developmentProcess.length - 1 && (
                  <div className="flex justify-center mt-8 md:hidden">
                    <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-400"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Let's discuss how our proven development process can bring your
              vision to life.
            </p>
            <button className="bg-white text-purple-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-purple-400 dark:hover:bg-gray-700 px-8 py-3 rounded-full font-semibold transition-colors duration-200 shadow-lg">
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
