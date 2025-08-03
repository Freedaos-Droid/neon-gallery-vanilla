import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-card border border-border hover:bg-accent transition-all duration-300 neon-glow-purple hover:neon-border-purple"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-neon-yellow" />
      ) : (
        <Moon className="w-6 h-6 text-neon-purple" />
      )}
    </button>
  );
}