'use client';

import React, { useState } from 'react';
import { CategorySidebar } from '@/components/category/category-sidebar';
import { FilterCategory, TrendingDish, Neighborhood } from '@/data/category-types';

interface RestaurantPageClientProps {
  children: React.ReactNode;
  filterCategories: FilterCategory[];
  neighborhoods: Neighborhood[];
  trendingDishes: TrendingDish[];
}

export function RestaurantPageClient({
  children,
  filterCategories,
  neighborhoods,
  trendingDishes,
}: RestaurantPageClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(
    filterCategories.find((c) => c.isActive)?.id || filterCategories[0]?.id || ''
  );
  const [selectedNeighborhood, setSelectedNeighborhood] = useState<string>(
    neighborhoods[0]?.id || ''
  );

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
          {children}
        </div>
      </main>
    </div>
  );
}
