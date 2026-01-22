import { Category } from '@/data/types';

/**
 * Get the base URL for the backend API
 */
export function getApiBaseUrl(): string {
  // In production, use environment variable
  // In development, default to localhost:3000 (backend port)
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
}

/**
 * Fetch categories for a given city
 * Uses Next.js fetch caching to deduplicate requests and cache responses
 */
export async function fetchCategories(citySlug: string = 'dubai'): Promise<Category[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/categories`, {
    // Use Next.js default caching - deduplicates requests within the same render
    // and caches the response for subsequent requests
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Backend dish response type
 */
export interface BackendDish {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  slug: string;
  description: string | null;
  rank: number;
  restaurant: {
    id: string;
    name: string;
    slug: string;
    cuisine: {
      name: string;
    };
    city: {
      name: string;
    };
  };
  category: {
    name: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    review_count: number;
  } | null;
}

/**
 * Backend dish detail response type (from findBySlug)
 */
export interface BackendDishDetail {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  image_url: string | null;
  restaurant: {
    id: string;
    name: string;
    slug: string;
    city: {
      id: string;
      name: string;
      slug: string;
    };
    cuisine: {
      id: string;
      name: string;
      slug: string;
    };
  };
  category: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    review_count: number;
  } | null;
}

/**
 * Fetch best dishes for a given city (ranked by score)
 */
export async function fetchBestDishes(citySlug: string = 'dubai'): Promise<BackendDish[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/best-dishes`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch best dishes: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch dish by slug
 */
export async function fetchDishBySlug(slug: string): Promise<BackendDishDetail> {
  const baseUrl = getApiBaseUrl();
  // Decode the slug in case it's URL encoded
  const decodedSlug = decodeURIComponent(slug);
  const response = await fetch(`${baseUrl}/dishes/slug/${encodeURIComponent(decodedSlug)}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Dish not found');
    }
    throw new Error(`Failed to fetch dish: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Backend cuisine response type
 */
export interface BackendCuisine {
  id: string;
  name: string;
  slug: string;
  image: string;
}

/**
 * Fetch cuisines for a given city
 */
export async function fetchCuisines(citySlug: string = 'dubai'): Promise<BackendCuisine[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/cuisines`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch cuisines: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Backend restaurant response type
 */
export interface BackendRestaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  created_at: string;
  rank?: number; // Added rank for top restaurants
  cuisine: {
    id: string;
    name: string;
    slug: string;
  };
  city: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    total_reviews: number;
  } | null;
  _count: {
    dishes: number;
  };
}

/**
 * Backend cuisine ranking response type
 */
export interface BackendCuisineRanking {
  cuisine: {
    id: string;
    name: string;
    slug: string;
  };
  city: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    restaurant_count: number;
    total_reviews: number;
    avg_score: number;
  };
  restaurants: BackendRestaurant[];
}

/**
 * Fetch restaurants for a given city (ranked by score)
 */
export async function fetchRestaurants(citySlug: string = 'dubai'): Promise<BackendRestaurant[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/restaurants`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch restaurants: ${response.statusText}`);
  }

  const restaurants = await response.json();
  
  // Add rank based on position (sorted by score)
  return restaurants.map((restaurant: any, index: number) => ({
    ...restaurant,
    rank: index + 1,
  }));
}

/**
 * Fetch restaurants by cuisine for a given city
 */
export async function fetchRestaurantsByCuisine(
  citySlug: string = 'dubai',
  cuisineSlug: string
): Promise<BackendCuisineRanking> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/cuisines/${cuisineSlug}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch restaurants by cuisine: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Backend restaurant detail response type
 */
export interface BackendRestaurantDetail {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  latitude: number;
  longitude: number;
  city: {
    id: string;
    name: string;
    slug: string;
  };
  cuisine: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    total_reviews: number;
  } | null;
  dishes: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    image_url: string | null;
    description: string | null;
    stats: {
      score: number;
      avg_rating: number;
      review_count: number;
    } | null;
  }>;
  _count: {
    dishes: number;
  };
}

/**
 * Fetch restaurant by slug
 */
export async function fetchRestaurantBySlug(slug: string): Promise<{ id: string; name: string; slug: string }> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/restaurants/slug/${slug}`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch restaurant: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch restaurant details by slug (with dishes and full info)
 */
export async function fetchRestaurantDetailBySlug(slug: string): Promise<BackendRestaurantDetail> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/restaurants/slug/${slug}/details`, {
    next: { revalidate: 60 },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch restaurant details: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Fetch dishes by restaurant ID
 */
export async function fetchDishesByRestaurant(restaurantId: string): Promise<BackendDish[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/restaurants/${restaurantId}/dishes`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch dishes by restaurant: ${response.statusText}`);
  }

  const dishes = await response.json();
  
  // Transform to BackendDish format and add rank
  return dishes.map((dish: any, index: number) => ({
    id: dish.id,
    name: dish.name,
    price: dish.price,
    image_url: dish.image_url,
    slug: dish.slug,
    description: dish.description,
    rank: index + 1,
    restaurant: {
      id: dish.restaurant.id,
      name: dish.restaurant.name,
      slug: dish.restaurant.slug,
      cuisine: {
        name: dish.restaurant.cuisine?.name || '',
      },
      city: {
        name: dish.restaurant.city?.name || '',
      },
    },
    category: {
      name: dish.category?.name || '',
    },
    stats: dish.stats || null,
  }));
}

/**
 * Transform backend dish data to RankedDish format
 */
export function transformBackendDishToRankedDish(backendDish: BackendDish): import('@/data/category-types').RankedDish {
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
): import('@/data/dish-types').DishDetail {
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

/**
 * Backend featured review response type
 */
export interface BackendFeaturedReview {
  id: string;
  rating: number;
  comment: string | null;
  featured: boolean;
  created_at: string;
  user: {
    id: string;
    name: string;
    avatar_url: string | null;
  };
  dish: {
    id: string;
    name: string;
    slug: string;
    image_url: string | null;
    restaurant: {
      id: string;
      name: string;
      slug: string;
      city: {
        name: string;
      };
    };
    category: {
      name: string;
    };
  };
}

/**
 * Fetch featured reviews
 */
export async function fetchFeaturedReviews(): Promise<BackendFeaturedReview[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/reviews/featured`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch featured reviews: ${response.statusText}`);
  }

  return response.json();
}
