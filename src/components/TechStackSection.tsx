import React from 'react';
import type { TechStack } from '../types';

export function TechStackSection({ stacks }: { stacks: TechStack[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stacks.map((stack) => (
        <div
          key={stack.category}
          className="p-6 rounded-[0.5rem] bg-white dark:bg-gray-700 shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl">{stack.icon}</span>
            <h3 className="text-lg font-semibold">{stack.category}</h3>
          </div>
          <ul className="space-y-2">
            {stack.skills.map((skill) => (
              <li key={skill} className="text-sm text-gray-600 dark:text-gray-300">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}