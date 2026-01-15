import React from 'react';
import { RestaurantCard, Restaurant } from '../cards/restaurant-card';
import { Icon } from '../ui/icon';
import { IconButton } from '../ui/icon-button';

interface RestaurantsSectionProps {
  featuredRestaurant: Restaurant;
  trendingRestaurants: Restaurant[];
  compactRestaurants: Restaurant[];
}

export const RestaurantsSection: React.FC<RestaurantsSectionProps> = ({
  featuredRestaurant,
  trendingRestaurants,
  compactRestaurants,
}) => {
  return (
    <div className="grid grid-cols-12 gap-6 mb-20">
      <div className="col-span-12 lg:col-span-6">
        <RestaurantCard restaurant={featuredRestaurant} variant="featured" />
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
        {trendingRestaurants[0] && (
          <RestaurantCard restaurant={trendingRestaurants[0]} variant="trending" />
        )}
        <div className="grid grid-cols-3 gap-6 h-[200px]">
          {compactRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} variant="compact" />
          ))}
          <button className="grad-purple bento-card flex flex-col items-center justify-center text-white gap-2 border-0 group">
            <Icon name="grid_view" className="text-3xl group-hover:scale-110 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">View More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

