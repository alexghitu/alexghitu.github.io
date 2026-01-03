import { ReactNode, memo } from 'react';
import { classNames } from '../../utils/classNames';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
  className?: string;
  target?: string;
  rel?: string;
}

function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
  target,
  rel
}: ButtonProps) {
  const buttonClass = classNames(
    'button',
    variant === 'secondary' && 'button-secondary',
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClass} target={target} rel={rel}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default memo(Button);
