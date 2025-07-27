import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
};

const baseClass =
  'rounded-full font-medium transition-colors flex items-center justify-center w-full';

const sizeClass = {
  small: 'h-8 px-3 text-sm',
  medium: 'h-12 px-5 text-base',
  large: 'h-16 px-8 text-lg',
};

const variantClass = {
  primary:
    'bg-foreground text-background border border-transparent hover:bg-[#383838] dark:hover:bg-[#ccc]',
  secondary:
    'border border-black/[.08] dark:border-white/[.145] hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a]',
  outline:
    'border border-solid border-blue-500 text-blue-500 bg-transparent hover:bg-blue-50',
};

export default function Button({
  size = 'medium',
  variant = 'secondary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${baseClass} ${sizeClass[size]} ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
