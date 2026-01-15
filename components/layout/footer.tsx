import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="grad-blue text-white pt-20 pb-10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
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
            <p className="text-white/80 text-sm max-w-md leading-relaxed">
              Dubai's leading dish-first discovery platform. We help you find your next favorite meal
              through curated community reviews and exclusive access to the city's culinary scene.
            </p>
            <div className="flex gap-6 mt-8">
              <a
                className="text-white/60 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-widest"
                href="#"
              >
                Instagram
              </a>
              <a
                className="text-white/60 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-widest"
                href="#"
              >
                TikTok
              </a>
              <a
                className="text-white/60 hover:text-white transition-colors font-bold uppercase text-[10px] tracking-widest"
                href="#"
              >
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-8">
              EXPLORE
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Palm Jumeirah
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Downtown Dubai
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  DIFC
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Dubai Marina
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60 mb-8">
              COMPANY
            </h4>
            <ul className="space-y-4 text-xs font-bold uppercase tracking-widest">
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Partner With Us
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white transition-colors" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-white/40 tracking-[0.2em] uppercase">
            © 2024 DUBITE TECHNOLOGIES. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-10 text-[10px] font-bold text-white/40 uppercase tracking-widest">
            <a className="hover:text-white" href="#">
              Privacy
            </a>
            <a className="hover:text-white" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

