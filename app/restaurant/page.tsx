import { fetchRestaurants, BackendRestaurant } from '@/lib/api';
import { RestaurantCard, Restaurant } from '@/components/cards/restaurant-card';
import {
  filterCategories,
  neighborhoods,
  trendingDishes,
} from '@/data/category-mock-data';
import { Icon } from '@/components/ui/icon';
import { RestaurantPageClient } from './page-client';

export default async function AllRestaurantsPage() {
  let restaurants: Restaurant[] = [];

  try {
    const backendRestaurants = await fetchRestaurants('dubai');
    restaurants = backendRestaurants.map((restaurant: BackendRestaurant) => ({
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

  return (
    <RestaurantPageClient
      filterCategories={filterCategories}
      neighborhoods={neighborhoods}
      trendingDishes={trendingDishes}
    >
      <div className="lg:col-span-10">
            {/* Header Section */}
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[9px] font-black purple-gradient text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
                    Live Rankings
                  </span>
                  <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1">
                    <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
                    Updated 2 hours ago
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tighter leading-none">
                  Best <span className="text-gradient-blue">Restaurants</span> in Dubai 2024
                </h1>
              </div>
              <div className="flex gap-2">
                <button className="purple-gradient text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-lg shadow-brand-purple-start/20 hover:scale-105 transition-transform flex items-center gap-2">
                  <Icon name="bookmark" className="text-sm" />
                  SAVE LIST
                </button>
                <button className="bg-white text-slate-800 border border-slate-200 px-5 py-2.5 rounded-xl text-xs font-black hover:bg-slate-50 transition-colors flex items-center gap-2">
                  <Icon name="share" className="text-sm" />
                  SHARE
                </button>
              </div>
            </div>

            {/* Restaurants Grid */}
            {restaurants.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {restaurants.map((restaurant) => (
                  <RestaurantCard
                    key={restaurant.id}
                    restaurant={restaurant}
                    variant="trending"
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-slate-500 text-lg">No restaurants found.</p>
              </div>
            )}

            {/* Load More Button */}
            {restaurants.length > 0 && (
              <div className="flex justify-center">
                <button className="blue-gradient text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-brand-purple-start/20 hover:scale-105 transition-all">
                  Load More Restaurants
                </button>
              </div>
            )}
          </div>
    </RestaurantPageClient>
  );
}
