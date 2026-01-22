'use client';

import React, { useMemo, use } from 'react';
import { DishListingLayout } from '@/components/dish/dish-listing-layout';
import {
  getRankedDishesByCategory,
  filterCategories,
  neighborhoods,
  trendingDishes,
  categories,
} from '@/data/category-mock-data';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = use(params);

  const category = useMemo(
    () => categories.find((c) => c.slug === slug) || categories[0],
    [slug]
  );

  const dishes = useMemo(
    () => getRankedDishesByCategory(slug),
    [slug]
  );

  return (
    <DishListingLayout
      dishes={dishes}
      title={`Best ${category.name} in Dubai 2024`}
      titleHighlight={category.name}
      showCategoryFilter={true}
      filterCategories={filterCategories}
      neighborhoods={neighborhoods}
      trendingDishes={trendingDishes}
    />
  );
}

