import { ReactNode } from 'react';

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  title?: string;
}

export function ExternalLink({
  href,
  children,
  className,
  ariaLabel,
  title,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      title={title}
    >
      {children}
    </a>
  );
}
