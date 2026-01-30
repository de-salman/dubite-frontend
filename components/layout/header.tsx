'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';
import { isAuthenticated, getEmailFromToken, clearAuthTokens, onAuthChange } from '@/lib/auth';

interface HeaderProps {
  showSearch?: boolean;
}

function syncAuth() {
  const ok = isAuthenticated();
  const email = getEmailFromToken();
  return { isLoggedIn: ok, userEmail: email };
}

export const Header: React.FC<HeaderProps> = ({ showSearch }) => {
  const pathname = usePathname();
  const router = useRouter();
  const [auth, setAuth] = useState({ isLoggedIn: false, userEmail: null as string | null });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const shouldShowSearch = showSearch ?? (pathname?.startsWith('/category') ?? false);

  const refreshAuth = useCallback(() => {
    if (typeof window !== 'undefined') setAuth(syncAuth());
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    refreshAuth();
  }, [mounted, pathname, refreshAuth]);

  useEffect(() => {
    if (!mounted) return () => {};
    return onAuthChange(refreshAuth);
  }, [mounted, refreshAuth]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    clearAuthTokens();
    setDropdownOpen(false);
    router.push('/');
  };

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
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
                isActive('/restaurant') ? 'border-b-2 border-white pb-1' : 'hover:text-white'
              }`}
              href="/restaurant"
            >
              Restaurants
            </Link>
            <Link
              className={`transition-colors ${
                isActive('/dish') ? 'border-b-2 border-white pb-1' : 'hover:text-white'
              }`}
              href="/dish"
            >
              Dishes
            </Link>
            <Link
              className={`transition-colors ${
                isActive('/cuisine') ? 'border-b-2 border-white pb-1' : 'hover:text-white'
              }`}
              href="/cuisine"
            >
              Cuisine
            </Link>
            <Link
              className={`transition-colors ${
                isActive('/category') ? 'border-b-2 border-white pb-1' : 'hover:text-white'
              }`}
              href="/category"
            >
              Category
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
          {auth.isLoggedIn ? (
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen((o) => !o)}
                className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-white hover:opacity-90 transition-opacity py-2 px-3 rounded-lg hover:bg-white/10"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
              >
                <span className="max-w-[140px] truncate" title={auth.userEmail ?? undefined}>
                  {auth.userEmail ?? 'Account'}
                </span>
                <svg
                  className={`size-4 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 rounded-xl bg-white shadow-xl border border-slate-100 py-1 z-[110]">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">Signed in</p>
                    <p className="text-sm font-semibold text-slate-900 truncate" title={auth.userEmail ?? undefined}>
                      {auth.userEmail ?? 'Account'}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-[11px] font-bold uppercase tracking-widest text-white hover:opacity-80 transition-opacity"
              >
                Sign In
              </Link>
              <Link href="/register">
                <Button variant="gradient-purple" size="md">
                  Join
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};
