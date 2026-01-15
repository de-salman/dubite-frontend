import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Header: React.FC = () => {
  return (
    <header className="grad-blue sticky top-0 z-[100] w-full px-6 lg:px-12 py-4 shadow-lg">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <div className="size-8 text-white">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-white">DUBITE</h1>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-white/90">
            <Link className="border-b-2 border-white pb-1" href="/">
              Home
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Trending
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Curated Lists
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Offers
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
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

