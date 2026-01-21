import React from 'react';
import Link from 'next/link';
import { Icon } from '../ui/icon';

export const Footer: React.FC = () => {
  return (
    <footer className="grad-blue text-white pt-20 pb-10">
      <div className="max-w-[1600px] mx-auto px-4 md:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="size-8 text-white">
                <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-black tracking-tighter text-white">DUBITE</h2>
            </div>
            <p className="text-white/80 text-sm max-w-md leading-relaxed mb-8">
              Dubai's premier dish-first discovery platform. Pinpointing the city's absolute best bites
              with precision data and vibrant community curation.
            </p>
            <div className="flex gap-6">
              <a
                className="text-white/60 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-widest"
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
              <a
                className="text-white/60 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-widest"
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                TikTok
              </a>
              <a
                className="text-white/60 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-widest"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-8">
              Curated Rankings
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li>
                <Link href="/category/shawarma" className="hover:text-white transition-colors">
                  Best Shawarma
                </Link>
              </li>
              <li>
                <Link href="/category/burgers" className="hover:text-white transition-colors">
                  Burger Rankings
                </Link>
              </li>
              <li>
                <Link href="/category/pizza" className="hover:text-white transition-colors">
                  Pizza Rankings
                </Link>
              </li>
              <li>
                <Link href="/category/fine-dining" className="hover:text-white transition-colors">
                  Fine Dining
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-8">
              Company
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Partner With Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
            © 2024 DUBITE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <Link href="/" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
