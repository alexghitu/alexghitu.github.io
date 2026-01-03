import { Theme } from '../types';

const THEME_KEY = 'theme';

export const isLocalStorageAvailable = (): boolean => {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
};

const isValidTheme = (value: unknown): value is Theme => {
  return value === 'light' || value === 'dark';
};

export const getSavedTheme = (): Theme | null => {
  if (!isLocalStorageAvailable()) {
    return null;
  }

  try {
    const saved = localStorage.getItem(THEME_KEY);
    return isValidTheme(saved) ? saved : null;
  } catch {
    return null;
  }
};

export const saveTheme = (theme: Theme): void => {
  if (!isLocalStorageAvailable()) {
    return;
  }

  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (error) {
    console.warn('Failed to save theme to localStorage:', error);
  }
};

export const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};
