'use client';

import React, { useRef, useState, useEffect } from 'react';
import { CuisineCard, Cuisine } from '@/components/cards/cuisine-card';
import { IconButton } from '@/components/ui/icon-button';

interface AllCuisinesPageProps {
  cuisines: Cuisine[];
}

export default function AllCuisinesPageClient({ cuisines }: AllCuisinesPageProps) {
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
      window.addEventListener('resize', checkScrollButtons);
      return () => {
        container.removeEventListener('scroll', checkScrollButtons);
        window.removeEventListener('resize', checkScrollButtons);
      };
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

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-16">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[9px] font-black purple-gradient text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
                  {cuisines.length} Cuisines
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
                All <span className="text-gradient-blue">Cuisines</span> in Dubai
              </h1>
              <p className="text-slate-600 text-sm">
                Explore all available cuisines and discover the best restaurants
              </p>
            </div>
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

        {/* Cuisines Carousel */}
        {cuisines.length > 0 ? (
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {cuisines.map((cuisine) => (
              <div key={cuisine.id} className="flex-shrink-0 w-[calc(50%-12px)] md:w-[calc(25%-18px)] lg:w-[calc(20%-19.2px)]">
                <CuisineCard cuisine={cuisine} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No cuisines found.</p>
          </div>
        )}
      </main>
    </div>
  );
}
