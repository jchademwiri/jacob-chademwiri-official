'use client';
import React, { useState } from 'react';
import {
  ChevronRight,
  CheckCircle,
  Clock,
  Users,
  Target,
  BarChart,
} from 'lucide-react';
import { projectPhases } from '@/data';

const phaseIcons = [Target, Users, CheckCircle, BarChart, Clock];
const phaseColors = [
  'from-blue-500 to-blue-600',
  'from-purple-500 to-purple-600',
  'from-green-500 to-green-600',
  'from-orange-500 to-orange-600',
  'from-red-500 to-red-600',
];

export default function ProjectManagementLifecycle() {
  const [activePhase, setActivePhase] = useState(0);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'timeline'

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            <Target className="w-4 h-4" />
            Project Management
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent transition-all duration-300">
            Project Management Lifecycle
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed transition-colors duration-300">
            A comprehensive, structured approach ensuring successful project
            delivery through systematic phase management and continuous
            improvement.
          </p>

          {/* View Toggle */}
          <div className="flex justify-center mt-8">
            <div className="bg-white dark:bg-gray-800 p-1 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'cards'
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                Card View
              </button>
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  viewMode === 'timeline'
                    ? 'bg-blue-500 text-white shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                }`}
              >
                Timeline View
              </button>
            </div>
          </div>
        </div>

        {/* Card View */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectPhases.map((phase, index) => {
              const Icon = phaseIcons[index];
              const colorClass = phaseColors[index];

              return (
                <div
                  key={index}
                  className="group cursor-pointer"
                  onMouseEnter={() => setActivePhase(index)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700 overflow-hidden h-full group-hover:border-gray-300 dark:group-hover:border-gray-600 relative">
                    {/* Header with gradient */}
                    <div
                      className={`bg-gradient-to-r ${colorClass} p-6 text-white relative`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div className="text-2xl font-bold opacity-60">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{phase.phase}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {phase.description}
                      </p>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Key Activities
                      </h4>
                      <ul className="space-y-3">
                        {phase.activities.map((activity, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-400"
                          >
                            <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom indicator - Made more visible */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-gray-100 dark:bg-gray-700/50 transition-colors duration-300 rounded-b-2xl overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${colorClass} transform transition-all duration-700 ${
                          activePhase === index ? 'scale-x-100' : 'scale-x-0'
                        } origin-left shadow-sm`}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Timeline View */}
        {viewMode === 'timeline' && (
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 via-green-500 via-orange-500 to-red-500 opacity-80 dark:opacity-60"></div>

              {projectPhases.map((phase, index) => {
                const Icon = phaseIcons[index];
                const colorClass = phaseColors[index];
                const isActive = activePhase === index;

                return (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 pb-12 last:pb-0"
                    onMouseEnter={() => setActivePhase(index)}
                  >
                    {/* Timeline dot */}
                    <div
                      className={`relative z-10 w-16 h-16 bg-gradient-to-r ${colorClass} rounded-2xl flex items-center justify-center shadow-lg transform transition-all duration-300 ${
                        isActive ? 'scale-110 shadow-xl' : ''
                      }`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 dark:text-gray-300 border-2 border-gray-200 dark:border-gray-600">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 ${
                        isActive
                          ? 'shadow-lg transform -translate-y-1 border-gray-300 dark:border-gray-600'
                          : ''
                      }`}
                    >
                      <div className="p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {phase.phase}
                          </h3>
                          <ChevronRight
                            className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                              isActive ? 'rotate-90' : ''
                            }`}
                          />
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 mb-4 text-lg">
                          {phase.description}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {phase.activities.map((activity, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <CheckCircle className="w-4 h-4 text-green-500 dark:text-green-400 flex-shrink-0" />
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {activity}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 transition-colors duration-300">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Project Progress
            </h3>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Phase {activePhase + 1} of {projectPhases.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 transition-colors duration-300">
            <div
              className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full transition-all duration-500"
              style={{
                width: `${((activePhase + 1) / projectPhases.length) * 100}%`,
              }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500 dark:text-gray-400">
            {projectPhases.map((phase, index) => (
              <span
                key={index}
                className={`transition-colors duration-300 ${
                  index <= activePhase
                    ? 'text-blue-600 dark:text-blue-400 font-medium'
                    : ''
                }`}
              >
                {phase.phase}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
