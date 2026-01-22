import React from 'react';
import { DishCard, Dish } from '../cards/dish-card';
import { Icon } from '../ui/icon';
import Link from 'next/link';

interface DishSectionProps {
  dishes: Dish[];
}

export const DishSection: React.FC<DishSectionProps> = ({ dishes }) => {
  if (dishes.length === 0) {
    return null;
  }

  // Get dishes for layout: #1 featured, #2 trending, #3 and #4 compact
  const featuredDish = dishes[0]; // #1 - big
  const trendingDish = dishes[1]; // #2 - medium
  const compactDishes = dishes.slice(2, 4); // #3, #4 - small

  return (
    <div className="grid grid-cols-12 gap-6 mb-20">
      <div className="col-span-12 lg:col-span-6">
        {featuredDish && <DishCard dish={featuredDish} variant="featured" />}
      </div>
      <div className="col-span-12 lg:col-span-6 flex flex-col gap-6">
        {trendingDish && <DishCard dish={trendingDish} variant="trending" />}
        <div className="grid grid-cols-3 gap-6 h-[200px]">
          {compactDishes.map((dish) => (
            <div key={dish.id} className="h-full">
              <DishCard dish={dish} variant="compact" />
            </div>
          ))}
          {dishes.length >= 5 && (
            <Link
              href="/dish"
              className="grad-purple bento-card flex flex-col items-center justify-center text-white gap-2 border-0 group"
            >
              <Icon name="grid_view" className="text-3xl group-hover:scale-110 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-widest">View More</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
