'use client';

import React, { useState, useMemo } from 'react';
import { CategorySidebar } from '@/components/category/category-sidebar';
import { RankedDishCard } from '@/components/category/ranked-dish-card';
import { Icon } from '@/components/ui/icon';
import { RankedDish, FilterCategory, TrendingDish, Neighborhood } from '@/data/category-types';

interface DishListingLayoutProps {
  dishes: RankedDish[];
  title: string;
  titleHighlight?: string;
  showCategoryFilter?: boolean;
  filterCategories?: FilterCategory[];
  neighborhoods?: Neighborhood[];
  trendingDishes?: TrendingDish[];
}

export const DishListingLayout: React.FC<DishListingLayoutProps> = ({
  dishes,
  title,
  titleHighlight,
  showCategoryFilter = true,
  filterCategories = [],
  neighborhoods = [],
  trendingDishes = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    filterCategories.find((c) => c.isActive)?.id || filterCategories[0]?.id || ''
  );
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>(
    neighborhoods[0]?.id || ''
  );

  const filteredDishes = useMemo(() => {
    // In a real app, this would filter by neighborhood and category
    return dishes;
  }, [dishes, selectedNeighborhood, selectedCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-[1600px] mx-auto px-4 py-6 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <CategorySidebar
            filterCategories={filterCategories}
            neighborhoods={neighborhoods}
            trendingDishes={trendingDishes}
            selectedCategory={selectedCategory}
            selectedNeighborhood={selectedNeighborhood}
            onCategoryChange={setSelectedCategory}
            onNeighborhoodChange={setSelectedNeighborhood}
          />

          <div className="lg:col-span-10">
            {/* Header Section */}
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-black purple-gradient text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
                    Live Rankings
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1">
                    <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Updated 2 hours ago
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                  {titleHighlight ? (
                    <>
                      {title.split(titleHighlight)[0]}
                      <span className="text-gradient-blue">{titleHighlight}</span>
                      {title.split(titleHighlight)[1]}
                    </>
                  ) : (
                    title
                  )}
                </h1>
              </div>
              <div className="flex gap-2">
                <button className="purple-gradient text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-[#C22F93]/20 hover:scale-105 transition-transform flex items-center gap-2">
                  <Icon name="bookmark" className="text-sm" />
                  SAVE LIST
                </button>
                <button className="bg-white text-slate-800 border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-black hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Icon name="share" className="text-sm" />
                  SHARE
                </button>
              </div>
            </div>

            {/* Dishes Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-4">
              {filteredDishes.map((dish) => (
                <RankedDishCard key={dish.id} dish={dish} />
              ))}
            </div>

            {/* Load More Button */}
            {filteredDishes.length > 0 && (
              <div className="mt-12 flex justify-center">
                <button className="blue-gradient text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-[#009BDF]/20 hover:scale-105 transition-all">
                  Load More Discoveries
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
