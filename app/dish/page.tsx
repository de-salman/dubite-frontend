import { DishListingLayout } from '@/components/dish/dish-listing-layout';
import { fetchBestDishes } from '@/lib/api';
import { transformBackendDishToRankedDish } from '@/lib/transformers/dish-transformers';
import { RankedDish } from '@/data/category-types';
import { fetchCategories } from '@/lib/api';
import { Category } from '@/data/category-types';
import {
  filterCategories,
  neighborhoods,
  trendingDishes,
} from '@/data/category-mock-data';

export default async function BestDishesPage() {
  let dishes: RankedDish[] = [];

  try {
    const backendDishes = await fetchBestDishes('dubai');
    dishes = backendDishes.map(transformBackendDishToRankedDish);
  } catch (error) {
    console.error('Failed to fetch best dishes:', error);
    dishes = [];
  }

  // Fetch categories for filter (optional - can use mock data for now)
  let categories: Category[] = [];
  try {
    categories = await fetchCategories('dubai');
  } catch (error) {
    console.error('Failed to fetch categories:', error);
  }

  // Transform categories to filter format (or use mock data)
  // For now, using mock data for filters
  const filterCategoriesData = filterCategories;

  return (
    <DishListingLayout
      dishes={dishes}
      title="Best Dishes in Dubai 2024"
      filterCategories={filterCategoriesData}
      neighborhoods={neighborhoods}
      trendingDishes={trendingDishes}
    />
  );
}
