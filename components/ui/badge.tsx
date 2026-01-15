import React from 'react';

interface BadgeProps {
  variant?: 'gradient-purple' | 'white' | 'default';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className = '',
}) => {
  const baseStyles = 'text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg';
  
  const variantStyles = {
    'gradient-purple': 'grad-purple text-white',
    white: 'bg-white/90 backdrop-blur-md text-slate-900',
    default: 'bg-slate-100 text-slate-900',
  };
  
  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};

