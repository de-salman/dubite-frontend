import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'gradient-purple' | 'gradient-blue';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'font-bold uppercase tracking-widest transition-all';
  
  const variantStyles = {
    primary: 'bg-white text-slate-900 hover:bg-slate-50',
    secondary: 'border border-slate-200 text-slate-900 hover:bg-slate-50',
    'gradient-purple': 'grad-purple text-white hover:brightness-110',
    'gradient-blue': 'grad-blue text-white hover:brightness-110',
  };
  
  const sizeStyles = {
    sm: 'text-[9px] px-3 py-1 rounded-full',
    md: 'text-[11px] px-6 py-2.5 rounded-full',
    lg: 'text-xs tracking-[0.2em] px-8 py-3 rounded-xl',
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

