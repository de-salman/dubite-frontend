import { HeroSection } from '@/components/sections/hero-section';
import { CategorySection } from '@/components/sections/category-section';
import { DishSection } from '@/components/sections/dish-section';
import { CuisinesSection } from '@/components/sections/cuisines-section';
import { TrendingSection } from '@/components/sections/trending-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import {
  featuredRestaurant,
  trendingRestaurants,
  compactRestaurants,
  cuisines,
  trendingDishes,
  reviews,
} from '@/data/mock-data';
import { fetchCategories } from '@/lib/api';
import { Category } from '@/data/types';

export default async function Home() {
  // Fetch categories from backend API
  let categories: Category[] = [];
  try {
    categories = await fetchCategories('dubai');
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    // Fallback to empty array if API fails
    categories = [];
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <HeroSection />
      <CategorySection categories={categories} />
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-16">
        <DishSection
          featuredRestaurant={featuredRestaurant}
          trendingRestaurants={trendingRestaurants}
          compactRestaurants={compactRestaurants}
        />
        <CuisinesSection cuisines={cuisines} />
        <TrendingSection dishes={trendingDishes} />
        <ReviewsSection reviews={reviews} />
      </main>
    </div>
  );
}
