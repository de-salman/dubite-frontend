import { BackendDish, BackendDishDetail } from '@/data/backend-types';
import { RankedDish } from '@/data/category-types';
import { DishDetail } from '@/data/dish-types';

/**
 * Transform backend dish data to RankedDish format
 */
export function transformBackendDishToRankedDish(backendDish: BackendDish): RankedDish {
  return {
    id: backendDish.id,
    rank: backendDish.rank,
    name: backendDish.name,
    restaurant: backendDish.restaurant.name,
    location: backendDish.restaurant.city.name,
    price: backendDish.price,
    rating: backendDish.stats?.avg_rating || 0,
    image: backendDish.image_url || '',
    slug: backendDish.slug,
    isTop: backendDish.rank <= 3, // Top 3 are marked as top
  };
}

/**
 * Transform backend dish detail to DishDetail format
 */
export function transformBackendDishDetailToDishDetail(
  backendDish: BackendDishDetail
): DishDetail {
  // Create badges based on stats
  const badges: string[] = [];
  if (backendDish.stats?.score && backendDish.stats.score >= 8) {
    badges.push('Premium Choice');
  }
  if (backendDish.stats?.avg_rating && backendDish.stats.avg_rating >= 4.5) {
    badges.push('Top Rated');
  }

  // Split description into experience content paragraphs
  const experienceContent = backendDish.description
    ? backendDish.description.split('\n').filter((p) => p.trim().length > 0)
    : [`Experience the culinary excellence of ${backendDish.name} at ${backendDish.restaurant.name}.`];

  return {
    id: backendDish.id,
    name: backendDish.name,
    description: backendDish.description || `${backendDish.name} from ${backendDish.restaurant.name}`,
    image: backendDish.image_url || '',
    price: backendDish.price,
    category: backendDish.category.name,
    location: backendDish.restaurant.city.name,
    badges: badges.length > 0 ? badges : undefined,
    restaurant: {
      id: backendDish.restaurant.id,
      name: backendDish.restaurant.name,
      address: `${backendDish.restaurant.city.name}`, // Default address - can be enhanced later
      city: backendDish.restaurant.city.name,
      country: 'United Arab Emirates', // Default - can be enhanced later
      isOpen: true, // Default - can be enhanced later
      closingTime: undefined, // Can be enhanced later
    },
    experience: {
      title: 'The Culinary Experience',
      content: experienceContent,
    },
  };
}
