import React from 'react';
import { Button } from '../ui/button';
import { Icon } from '../ui/icon';

export const HeroSection: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center bg-white border-b border-slate-100 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] grayscale"
        style={{
          backgroundImage:
            'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzhrncxEW2BomrFLO-xcUJw7g1XBqaQ9ba3ciqMSugrjyJujsZhKXsZjAqqHxOFxcVHpS2OJHfSm8ta1dgaCWKie5In2i_SadL8R_y_aAZzYjEy5QoT-NQHJbg8TggE8uGtfispTmnRol5g_o5Y614pBFzpSWuYeNXA-0s8nhtb2RQBCwmoZMG3DqDB-nJHSF_7PQP6NHKnH5lnxbdMvwY7HcSCrWZvawrSaFxIS69gEXXGfEVrAgY0BGjTgmll8juDRS9fGhDaPw")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        <span className="text-grad-purple font-black tracking-[0.3em] text-xs uppercase mb-4 block">
          The Ultimate Dubai Food Guide
        </span>
        <h2 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
          Search less. <br /> <span className="text-[#007AC4]">Eat better.</span>
        </h2>
        <div className="search-container w-full max-w-2xl mx-auto relative group">
          <input
            className="w-full bg-white border border-slate-100 rounded-2xl h-20 px-16 text-xl font-medium focus:ring-4 focus:ring-blue-50 transition-all outline-none placeholder:text-slate-400 shadow-xl"
            placeholder="Search for dishes, cuisines, or restaurants..."
          />
          <Icon name="search" className="absolute left-6 top-6 text-3xl text-[#007AC4]" />
          <Button variant="gradient-purple" size="lg" className="absolute right-3 top-3 bottom-3">
            Find Food
          </Button>
        </div>
      </div>
    </div>
  );
};

