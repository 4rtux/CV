import React from 'react';
import { Github } from 'lucide-react';
import type { Project } from '../types';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-[0.5rem] bg-white dark:bg-gray-800 shadow-lg transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:text-blue-100"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center text-sm text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Github className="mr-1 h-4 w-4" />
          View on GitHub
        </a>
      </div>
    </div>
  );
}