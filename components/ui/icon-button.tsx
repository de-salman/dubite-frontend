import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'md',
  className = '',
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
  };
  
  return (
    <button
      className={`${sizeStyles[size]} rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition-colors ${className}`}
      {...props}
    >
      <span className="material-symbols-outlined text-slate-600">{icon}</span>
      {children}
    </button>
  );
};

