import { DishListingLayout } from '@/components/dish/dish-listing-layout';
import { fetchDishesByCategory, fetchCategories } from '@/lib/api';
import { transformBackendDishToRankedDish } from '@/lib/transformers/dish-transformers';
import { RankedDish } from '@/data/category-types';
import { Category } from '@/data/category-types';
import {
  filterCategories,
  neighborhoods,
  trendingDishes,
} from '@/data/category-mock-data';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  // Fetch category info and dishes from backend
  let category: Category | null = null;
  let dishes: RankedDish[] = [];

  try {
    // Fetch all categories to find the matching one
    const categories = await fetchCategories('dubai');
    category = categories.find((c) => c.slug === slug) || null;

    // Fetch dishes for this category
    const backendDishes = await fetchDishesByCategory('dubai', slug);
    dishes = backendDishes.map(transformBackendDishToRankedDish);
  } catch (error) {
    console.error('Failed to fetch category data:', error);
    dishes = [];
  }

  // Fallback category name if not found
  const categoryName = category?.name || slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

  return (
    <DishListingLayout
      dishes={dishes}
      title={`Best ${categoryName} in Dubai 2024`}
      titleHighlight={categoryName}
      showCategoryFilter={true}
      filterCategories={filterCategories}
      neighborhoods={neighborhoods}
      trendingDishes={trendingDishes}
    />
  );
}

