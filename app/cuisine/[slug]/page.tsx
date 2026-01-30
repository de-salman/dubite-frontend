import { fetchRestaurantsByCuisine } from '@/lib/api';
import { BackendRestaurant } from '@/data/backend-types';
import { RestaurantCard, Restaurant } from '@/components/cards/restaurant-card';

interface CuisinePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function CuisinePage({ params }: CuisinePageProps) {
  const { slug } = await params;
  let cuisineData = null;
  let restaurants: Restaurant[] = [];

  try {
    cuisineData = await fetchRestaurantsByCuisine('dubai', slug);
    restaurants = cuisineData.restaurants.map((restaurant: BackendRestaurant, index: number) => ({
      id: restaurant.id,
      name: restaurant.name,
      description: restaurant.description || '',
      image: restaurant.image_url || '',
      rating: restaurant.stats?.avg_rating || 0,
      location: restaurant.city.name,
      cuisine: restaurant.cuisine.name,
      slug: restaurant.slug,
      rank: index + 1, // Rank within this cuisine
      score: restaurant.stats?.score || 0,
    }));
  } catch (error) {
    console.error('Failed to fetch restaurants by cuisine:', error);
    restaurants = [];
  }

  if (!cuisineData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-500">Cuisine not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-16">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[9px] font-black purple-gradient text-white px-2 py-0.5 rounded-full uppercase tracking-widest">
              {cuisineData.stats.restaurant_count} Restaurants
            </span>
            <span className="text-[9px] font-bold text-slate-400 flex items-center gap-1">
              <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Live Data
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2">
            Best <span className="text-gradient-blue">{cuisineData.cuisine.name}</span> Restaurants in Dubai
          </h1>
          <p className="text-slate-600 text-sm">
            Discover the top-rated {cuisineData.cuisine.name.toLowerCase()} restaurants in Dubai
          </p>
        </div>

        {/* Restaurants Grid */}
        {restaurants.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {restaurants.map((restaurant, index) => (
              <RestaurantCard
                key={restaurant.id}
                restaurant={restaurant}
                variant={index === 0 ? 'featured' : index < 3 ? 'trending' : 'compact'}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-slate-500 text-lg">No restaurants found for this cuisine.</p>
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
      </main>
    </div>
  );
}
