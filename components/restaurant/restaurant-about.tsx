import React from 'react';
import { RestaurantDetail } from '@/data/restaurant-types';

interface RestaurantAboutProps {
  restaurant: RestaurantDetail;
}

export const RestaurantAbout: React.FC<RestaurantAboutProps> = ({ restaurant }) => {
  return (
    <div className="lg:col-span-7">
      <h3 className="text-3xl font-extrabold mb-8 text-[#161118]">{restaurant.about.title}</h3>
      <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-6 font-medium">
        {restaurant.about.content.map((paragraph, index) => (
          <p key={index} className={index === 0 ? 'text-lg' : ''}>
            {paragraph}
          </p>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">
            The Experience
          </p>
          <p className="font-bold text-gray-900 text-base">{restaurant.about.experience}</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1">
            Average Cost
          </p>
          <p className="font-bold text-gray-900 text-base">{restaurant.about.averageCost}</p>
        </div>
      </div>
    </div>
  );
};

