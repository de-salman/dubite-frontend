import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'default' | 'blue';
}

export const Input: React.FC<InputProps> = ({
  label,
  variant = 'default',
  className = '',
  ...props
}) => {
  const inputClasses =
    variant === 'blue'
      ? `form-input-blue ${className}`
      : `form-input ${className}`;

  if (label) {
    return (
      <div>
        <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
          {label}
        </label>
        <input className={inputClasses} {...props} />
      </div>
    );
  }

  return <input className={inputClasses} {...props} />;
};

