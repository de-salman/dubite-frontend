import { Category } from '@/data/category-types';
import { getApiBaseUrl } from './utils/api-config';
import {
  BackendDish,
  BackendDishDetail,
  BackendCuisine,
  BackendRestaurant,
  BackendCuisineRanking,
  BackendRestaurantDetail,
  BackendFeaturedReview,
} from '@/data/backend-types';

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

/**
 * Fetch dishes by category for a given city
 */
export async function fetchDishesByCategory(
  citySlug: string = 'dubai',
  categorySlug: string
): Promise<BackendDish[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/dishes?category=${encodeURIComponent(categorySlug)}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch dishes by category: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Auth response types
 */
export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export interface RegisterResponse {
  id: string;
  name: string;
  email: string;
  auth_provider: string;
  avatar_url: string | null;
  role: string;
  city_id: string;
  created_at: string;
}

/**
 * Login user
 */
export async function login(email: string, password: string): Promise<LoginResponse> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'Login failed');
  }

  return response.json();
}

/**
 * Register user
 */
export async function register(
  name: string,
  email: string,
  password: string,
  cityId: string,
  authProvider: string = 'email',
  avatarUrl?: string
): Promise<RegisterResponse> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
      auth_provider: authProvider,
      city_id: cityId,
      avatar_url: avatarUrl,
    }),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: response.statusText }));
    throw new Error(error.message || 'Registration failed');
  }

  return response.json();
}

/**
 * Get city by slug (to get city_id)
 */
export interface City {
  id: string;
  name: string;
  slug: string;
  image_url?: string | null;
}

export async function getCityBySlug(slug: string = 'dubai'): Promise<City> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${slug}`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch city: ${response.statusText}`);
  }

  return response.json();
}

/**
 * Get all cities
 */
export async function getAllCities(): Promise<City[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities`, {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch cities: ${response.statusText}`);
  }

  return response.json();
}
