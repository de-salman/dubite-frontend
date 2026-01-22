'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { CuisineCard, Cuisine } from '../cards/cuisine-card';
import { IconButton } from '../ui/icon-button';

interface CuisinesSectionProps {
  cuisines: Cuisine[];
}

export const CuisinesSection: React.FC<CuisinesSectionProps> = ({ cuisines }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollButtons);
      return () => container.removeEventListener('scroll', checkScrollButtons);
    }
  }, [cuisines]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Show only first 4-5 cuisines in one row
  const displayedCuisines = cuisines.slice(0, 5);

  return (
    <section className="mb-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div className="flex-1 min-w-0">
          <span className="text-brand-blue-end text-xs font-black uppercase tracking-[0.3em] block mb-2">
            Modern Flavors
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Best Cuisines
          </h2>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <Link
            href="/cuisines"
            className="blue-gradient text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest shadow-lg shadow-brand-purple-start/20 hover:scale-105 transition-all whitespace-nowrap"
          >
            View More
          </Link>
          <div className="flex gap-2">
            <IconButton
              icon="chevron_left"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            />
            <IconButton
              icon="chevron_right"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            />
          </div>
        </div>
      </div>
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayedCuisines.map((cuisine) => (
          <div key={cuisine.id} className="shrink-0 w-[calc(50%-12px)] md:w-[calc(25%-18px)]">
            <CuisineCard cuisine={cuisine} />
          </div>
        ))}
      </div>
    </section>
  );
};

