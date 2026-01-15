import React from 'react';

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  provider: 'google' | 'apple' | 'facebook';
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  className = '',
  ...props
}) => {
  const baseStyles =
    'flex items-center justify-center gap-3 w-full py-3.5 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors';

  const getProviderContent = () => {
    switch (provider) {
      case 'google':
        return (
          <>
            <svg className="size-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Google</span>
          </>
        );
      case 'apple':
        return (
          <>
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C4.3 16.92 3.5 11.4 5.36 8.24c.92-1.55 2.4-2.5 4.02-2.55 1.25-.03 2.1.6 3.03.6.86 0 2.05-.75 3.52-.6 1.63.15 2.84.77 3.58 1.86-3.13 1.88-2.62 6.04.5 7.33-.65 1.6-1.5 3.2-2.92 5.4M12.03 5.68c-.05-2.2 1.83-4.14 4-4.22.25 2.45-2.12 4.45-4 4.22" />
            </svg>
            <span className="text-xs font-bold text-slate-600 uppercase tracking-widest">Apple</span>
          </>
        );
      case 'facebook':
        return (
          <>
            <svg className="size-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
            </svg>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-600">Facebook</span>
          </>
        );
    }
  };

  return (
    <button type="button" className={`${baseStyles} ${className}`} {...props}>
      {getProviderContent()}
    </button>
  );
};

