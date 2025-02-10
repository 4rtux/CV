import React from 'react';
import { Moon, Sun } from 'lucide-react';

type ThemeToggleProps = {
  isDark: boolean;
  toggleTheme: () => void;
};

export function ThemeToggle({ isDark, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-6 h-6 text-yellow-400" />
      ) : (
        <Moon className="w-6 h-6 text-slate-700" />
      )}
    </button>
  );
}