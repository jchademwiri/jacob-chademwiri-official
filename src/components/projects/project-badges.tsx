// src/components/projects/project-badges.tsx
import React from 'react';

interface ProjectBadgesProps {
  technologies?: string[];
  skills?: string[];
  variant?: 'technologies' | 'skills' | 'both';
  maxDisplay?: number;
  size?: 'sm' | 'md';
}

export function ProjectBadges({
  technologies = [],
  skills = [],
  variant = 'technologies',
  maxDisplay = 4,
  size = 'sm',
}: ProjectBadgesProps) {
  const getBadgeData = () => {
    switch (variant) {
      case 'technologies':
        return { items: technologies, label: 'tech' };
      case 'skills':
        return { items: skills, label: 'skill' };
      case 'both':
        return {
          items: [...technologies, ...skills],
          label: 'item',
        };
      default:
        return { items: technologies, label: 'tech' };
    }
  };

  const { items, label } = getBadgeData();

  if (!items || items.length === 0) {
    return null;
  }

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
  };

  const getColorClass = (index: number, isOverflow = false) => {
    if (isOverflow) {
      return 'bg-muted text-muted-foreground';
    }

    // Different colors for technologies vs skills when showing both
    if (variant === 'both') {
      const isTechnology = index < technologies.length;
      return isTechnology
        ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300'
        : 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300';
    }

    // Default styling for single type
    return variant === 'skills'
      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300'
      : 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300';
  };

  return (
    <div className="flex flex-wrap gap-1.5">
      {items.slice(0, maxDisplay).map((item: string, index: number) => (
        <span
          key={`${item}-${index}`}
          className={`
            ${sizeClasses[size]} 
            ${getColorClass(index)}
            rounded-md font-medium 
            hover:opacity-80 transition-all duration-200
            border border-current/10
          `}
          title={item}
        >
          {item}
        </span>
      ))}
      {items.length > maxDisplay && (
        <span
          className={`
            ${sizeClasses[size]} 
            ${getColorClass(0, true)}
            rounded-md font-medium
            border border-current/10
          `}
          title={`${items.length - maxDisplay} more ${label}${
            items.length - maxDisplay > 1 ? 's' : ''
          }`}
        >
          +{items.length - maxDisplay}
        </span>
      )}
    </div>
  );
}
