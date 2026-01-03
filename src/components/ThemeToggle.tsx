import { useTheme } from '../hooks/useTheme';
import { SunIcon, MoonIcon } from './ui/Icon';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="toggle-track">
        <div className="toggle-thumb" data-theme={theme}>
          {theme === 'light' ? (
            <SunIcon size={16} />
          ) : (
            <MoonIcon size={16} />
          )}
        </div>
      </div>
    </button>
  );
}
