import React from 'react';
import { DishCard, Dish } from '../cards/dish-card';
import { IconButton } from '../ui/icon-button';

interface TrendingSectionProps {
  dishes: Dish[];
}

export const TrendingSection: React.FC<TrendingSectionProps> = ({ dishes }) => {
  return (
    <section className="mb-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#007AC4] text-xs font-black uppercase tracking-[0.3em] block mb-2">
            Most Popular Now
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Trending Discovery
          </h2>
        </div>
        <div className="flex gap-2">
          <IconButton icon="chevron_left" />
          <IconButton icon="chevron_right" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </div>
    </section>
  );
};

