'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';

interface HeaderProps {
  showSearch?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showSearch }) => {
  const pathname = usePathname();

  // Automatically show search on category pages if not explicitly set
  const shouldShowSearch = showSearch ?? (pathname?.startsWith('/category') ?? false);

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="grad-blue sticky top-0 z-[100] w-full px-4 md:px-6 lg:px-12 py-4 shadow-lg">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-8 flex-1 min-w-0">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="size-8 text-white">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">DUBITE</h1>
          </Link>
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-bold uppercase tracking-[0.15em] text-white/90">
            <Link
              className={`transition-colors ${
                isActive('/') ? 'border-b-2 border-white pb-1' : 'hover:text-white'
              }`}
              href="/"
            >
              Home
            </Link>
            <Link
              className={`transition-colors ${
                isActive('/category') ? 'border-b-2 border-white pb-1' : 'hover:text-white'
              }`}
              href="/category/shawarma"
            >
              Rankings
            </Link>
            <Link
              className="transition-colors hover:text-white"
              href="/"
            >
              Trending
            </Link>
            <Link
              className="transition-colors hover:text-white"
              href="/"
            >
              Restaurants
            </Link>
          </nav>
        </div>
        {shouldShowSearch && (
          <div className="hidden md:flex flex-1 max-w-xl justify-center">
            <label className="w-full flex flex-col !h-10">
              <div className="flex w-full flex-1 items-stretch rounded-full h-full overflow-hidden bg-white/10 border border-white/20 focus-within:bg-white focus-within:ring-4 focus-within:ring-white/20 focus-within:border-white transition-all group">
                <div className="text-white/60 group-focus-within:text-[#009BDF] flex items-center justify-center pl-4">
                  <Icon name="search" className="text-lg" />
                </div>
                <input
                  className="w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-white focus:text-slate-900 placeholder:text-white/60 focus:placeholder:text-slate-400 px-3 text-sm font-medium"
                  placeholder="Search Dubai's finest dishes..."
                />
              </div>
            </label>
          </div>
        )}
        <div className="flex items-center gap-4 flex-shrink-0">
          <Link
            href="/login"
            className="text-[11px] font-bold uppercase tracking-widest text-white hover:opacity-80 transition-opacity"
          >
            Sign In
          </Link>
          <Button variant="gradient-purple" size="md">
            Join Pro
          </Button>
        </div>
      </div>
    </header>
  );
};
