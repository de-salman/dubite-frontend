import { HeroSection } from '@/components/sections/hero-section';
import { CategorySection } from '@/components/sections/category-section';
import { DishSection } from '@/components/sections/dish-section';
import { CuisinesSection } from '@/components/sections/cuisines-section';
import { TrendingSection } from '@/components/sections/trending-section';
import { ReviewsSection } from '@/components/sections/reviews-section';

import { fetchCategories, fetchBestDishes, fetchCuisines, fetchRestaurants, fetchFeaturedReviews } from '@/lib/api';
import { BackendDish, BackendCuisine, BackendRestaurant, BackendFeaturedReview } from '@/data/backend-types';
import { Review } from '@/components/cards/review-card';
import { Category } from '@/data/category-types';
import { Dish } from '@/components/cards/dish-card';
import { Cuisine } from '@/components/cards/cuisine-card';
import { Restaurant } from '@/components/cards/restaurant-card';

export default async function Home() {
  // Fetch categories from backend API
  let categories: Category[] = [];
  try {
    categories = await fetchCategories('dubai');
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    categories = [];
  }

  // Fetch best dishes from backend API (top 5 for home page)
  let bestDishes: Dish[] = [];
  try {
    const backendDishes = await fetchBestDishes('dubai');
    // Transform backend dishes to frontend format and take top 5
    bestDishes = backendDishes.slice(0, 5).map((dish: BackendDish) => ({
      id: dish.id,
      name: dish.name,
      cuisine: dish.restaurant.cuisine.name,
      image: dish.image_url || '',
      rating: dish.stats?.avg_rating || 0,
      price: dish.price,
      location: dish.restaurant.city.name,
      slug: dish.slug,
      rank: dish.rank,
    }));
  } catch (error) {
    console.error('Failed to fetch best dishes:', error);
    bestDishes = [];
  }

  // Fetch cuisines from backend API
  let cuisines: Cuisine[] = [];
  try {
    const backendCuisines = await fetchCuisines('dubai');
    cuisines = backendCuisines.map((cuisine: BackendCuisine) => ({
      id: cuisine.id,
      name: cuisine.name,
      image: cuisine.image,
      slug: cuisine.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch cuisines:', error);
    cuisines = [];
  }

  // Fetch restaurants from backend API (top 10 for home page)
  let restaurants: Restaurant[] = [];
  try {
    const backendRestaurants = await fetchRestaurants('dubai');
    restaurants = backendRestaurants.slice(0, 10).map((restaurant: BackendRestaurant) => ({
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description || '',
      image: restaurant.image_url || '',
      rating: restaurant.stats?.avg_rating || 0,
      location: restaurant.city.name,
      cuisine: restaurant.cuisine.name,
      slug: restaurant.slug,
      rank: restaurant.rank,
      score: restaurant.stats?.score || 0,
    }));
  } catch (error) {
    console.error('Failed to fetch restaurants:', error);
    restaurants = [];
  }

  // Fetch featured reviews from backend API
  let reviews: Review[] = [];
  try {
    const backendReviews = await fetchFeaturedReviews();
    reviews = backendReviews.map((review: BackendFeaturedReview, index: number) => {
      // Get user initials from name
      const initials = review.user.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase()
        .slice(0, 2);

      return {
        id: review.id,
        author: review.user.name,
        role: 'Foodie', // Default role
        comment: review.comment || '',
        rating: review.rating,
        dishName: review.dish.name,
        dishSlug: review.dish.slug,
        restaurantName: review.dish.restaurant.name,
        location: review.dish.restaurant.city.name,
        dishImage: review.dish.image_url || '',
        avatarInitials: initials,
        variant: index === 0 ? 'gradient' : 'default', // First review gets gradient variant
      };
    });
  } catch (error) {
    console.error('Failed to fetch featured reviews:', error);
    reviews = [];
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <HeroSection />
      <CategorySection categories={categories} />
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-16">
        <DishSection dishes={bestDishes} />
        <CuisinesSection cuisines={cuisines} />
        <TrendingSection restaurants={restaurants} />
        <ReviewsSection reviews={reviews} />
      </main>
    </div>
  );
}
