'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { RestaurantCard, Restaurant } from '../cards/restaurant-card';
import { IconButton } from '../ui/icon-button';

interface TrendingSectionProps {
  restaurants: Restaurant[];
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ restaurants }) => {
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
  }, [restaurants]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Show only first 10 restaurants in one row
  const displayedRestaurants = restaurants.slice(0, 10);

  return (
    <section className="mb-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#007AC4] text-xs font-black uppercase tracking-[0.3em] block mb-2">
            Most Popular Now
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Top Restaurants
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/restaurant"
            className="blue-gradient text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest shadow-lg shadow-[#009BDF]/20 hover:scale-105 transition-all whitespace-nowrap"
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
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pt-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {displayedRestaurants.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex-shrink-0 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(20%-19.2px)]"
          >
            <RestaurantCard
              restaurant={restaurant}
              variant="trending"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

