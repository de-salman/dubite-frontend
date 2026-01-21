import React from 'react';
import { RestaurantDetail } from '@/data/restaurant-types';
import { Icon } from '../ui/icon';

interface RestaurantHeroProps {
  restaurant: RestaurantDetail;
}

export const RestaurantHero: React.FC<RestaurantHeroProps> = ({ restaurant }) => {
  return (
    <section className="relative h-[45vh] w-full overflow-hidden">
      <img
        alt={`${restaurant.name} Hero Image`}
        className="w-full h-full object-cover"
        src={restaurant.heroImage}
      />
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute bottom-0 left-0 w-full p-12">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-4">
            <div className="flex flex-wrap gap-2">
              {restaurant.cuisine.map((cuisine, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/20 backdrop-blur-md text-white rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20"
                >
                  {cuisine}
                </span>
              ))}
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-white text-5xl md:text-6xl font-extrabold tracking-tighter mb-3 leading-none">
                  {restaurant.name}
                </h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-0.5 rounded-lg font-bold text-base">
                    <Icon name="star" className="text-lg filled-icon" />
                    {restaurant.rating}
                  </div>
                  <span className="text-base font-medium">{restaurant.reviewCount.toLocaleString()}+ reviews</span>
                  <span className="text-white/40">|</span>
                  <span className="text-base font-medium">{restaurant.priceRange}</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold hover:bg-white/20 transition-all uppercase tracking-wider">
                  <Icon name="share" className="text-lg" />
                  Share
                </button>
                <button className="flex items-center justify-center gap-2 rounded-full h-12 px-6 bg-white/10 backdrop-blur-md border border-white/30 text-white text-xs font-bold hover:bg-white/20 transition-all uppercase tracking-wider">
                  <Icon name="bookmark" className="text-lg" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

