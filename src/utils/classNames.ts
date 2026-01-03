type ClassValue = string | number | boolean | undefined | null;

export const classNames = (...classes: ClassValue[]): string => {
  return classes.filter(Boolean).join(' ');
};
