import { DishListingLayout } from '@/components/dish/dish-listing-layout';
import { fetchDishesByRestaurant, fetchRestaurantBySlug } from '@/lib/api';
import { transformBackendDishToRankedDish } from '@/lib/transformers/dish-transformers';
import { RankedDish } from '@/data/category-types';
import {
  filterCategories,
  neighborhoods,
  trendingDishes,
} from '@/data/category-mock-data';

export default async function RestaurantDishesPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let dishes: RankedDish[] = [];
  let restaurantName = 'Restaurant';

  try {
    // First, get restaurant by slug to get the ID
    const restaurant = await fetchRestaurantBySlug(slug);
    const backendDishes = await fetchDishesByRestaurant(restaurant.id);
    
    restaurantName = restaurant.name;
    dishes = backendDishes.map(transformBackendDishToRankedDish);
  } catch (error) {
    console.error('Failed to fetch restaurant dishes:', error);
    dishes = [];
  }

  return (
    <DishListingLayout
      dishes={dishes}
      title={`Best Dishes at ${restaurantName}`}
      titleHighlight={restaurantName}
      showCategoryFilter={true}
      filterCategories={filterCategories}
      neighborhoods={neighborhoods}
      trendingDishes={trendingDishes}
    />
  );
}
