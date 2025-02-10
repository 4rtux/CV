import React from 'react';
import { Code2 } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';

type NavigationProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function Navigation({ isDark, toggleTheme }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a 
              href="/" 
              className="flex items-center space-x-2 hover:scale-105 transition-transform"
            >
              <Code2 className="w-6 h-6" />
              <span className="font-bold">4rtux.dev</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {['About', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-all hover:scale-105"
              >
                {item}
              </a>
            ))}
            <LanguageToggle />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
          <div className="md:hidden">
            <LanguageToggle />
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>
        </div>
      </div>
    </nav>
  );
}