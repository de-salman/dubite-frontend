import { RestaurantHero } from '@/components/restaurant/restaurant-hero';
import { SignatureDishCard } from '@/components/restaurant/signature-dish-card';
import { RestaurantAbout } from '@/components/restaurant/restaurant-about';
import { RestaurantLocationCard } from '@/components/restaurant/restaurant-location-card';
import { fetchRestaurantDetailBySlug, BackendRestaurantDetail } from '@/lib/api';
import { RestaurantDetail } from '@/data/restaurant-types';

interface RestaurantPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params;
  let restaurant: RestaurantDetail | null = null;

  try {
    const backendRestaurant = await fetchRestaurantDetailBySlug(slug);
    
    // Calculate price range based on average dish price
    const avgPrice = backendRestaurant.dishes.length > 0
      ? backendRestaurant.dishes.reduce((sum, d) => sum + d.price, 0) / backendRestaurant.dishes.length
      : 0;
    
    let priceRange = '$$';
    if (avgPrice > 200) priceRange = '$$$$';
    else if (avgPrice > 100) priceRange = '$$$';
    else if (avgPrice > 50) priceRange = '$$';

    // Transform backend data to RestaurantDetail format
    restaurant = {
      id: backendRestaurant.id,
      name: backendRestaurant.name,
      description: backendRestaurant.description || '',
      heroImage: backendRestaurant.image_url || '',
      rating: backendRestaurant.stats?.avg_rating || 0,
      reviewCount: backendRestaurant.stats?.total_reviews || 0,
      priceRange,
      cuisine: [backendRestaurant.cuisine.name],
      location: {
        address: backendRestaurant.city.name, // Using city name as address for now
        city: backendRestaurant.city.name,
        country: 'UAE',
        coordinates: {
          lat: backendRestaurant.latitude,
          lng: backendRestaurant.longitude,
        },
      },
      isOpen: true, // Default to open, can be enhanced later
      closingTime: '11:30 PM', // Default, can be enhanced later
      about: {
        title: 'About The Concept',
        content: [
          backendRestaurant.description || `${backendRestaurant.name} offers an exceptional dining experience in ${backendRestaurant.city.name}.`,
          `Specializing in ${backendRestaurant.cuisine.name} cuisine, we bring you the finest flavors and culinary excellence.`,
        ],
        experience: `${backendRestaurant.cuisine.name} • Fine Dining`,
        averageCost: `AED ${Math.round(avgPrice * 2)} for two people`,
      },
      signatureDishes: backendRestaurant.dishes.slice(0, 5).map((dish, index) => ({
        id: dish.id,
        name: dish.name,
        price: dish.price,
        image: dish.image_url || '',
        slug: dish.slug || dish.id, // Use slug, fallback to id if slug not available
        rank: index + 1,
        isLarge: index === 0, // First dish is large
      })),
    };
  } catch (error) {
    console.error('Failed to fetch restaurant:', error);
    restaurant = null;
  }

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Restaurant Not Found</h1>
          <p className="text-gray-500">The restaurant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#161118]">
      <main className="w-full">
        <RestaurantHero restaurant={restaurant} />

        {/* Signature Dishes Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-20">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-[#161118] tracking-tight">Signature Dishes</h3>
            <p className="text-gray-500 text-lg font-medium mt-1">
              Discover the legendary flavors that define our kitchen.
            </p>
          </div>
          <div className="bento-grid">
            {restaurant.signatureDishes.map((dish) => (
              <SignatureDishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>

        {/* About & Location Section */}
        <div className="bg-gray-50/30">
          <div className="max-w-[1280px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <RestaurantAbout restaurant={restaurant} />
            <RestaurantLocationCard restaurant={restaurant} />
          </div>
        </div>
      </main>
    </div>
  );
}

