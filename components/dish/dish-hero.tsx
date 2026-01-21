import React from 'react';
import { DishDetail } from '@/data/dish-types';

interface DishHeroProps {
  dish: DishDetail;
}

export const DishHero: React.FC<DishHeroProps> = ({ dish }) => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] rounded-2xl overflow-hidden mb-8 group">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
        style={{ backgroundImage: `url(${dish.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
        <div className="flex gap-2 mb-4">
          {dish.badges?.map((badge, index) => (
            <span
              key={index}
              className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest ${
                index === 0
                  ? 'bg-white text-gray-900'
                  : 'bg-white/20 backdrop-blur-md text-white'
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
        <h1 className="text-white text-5xl md:text-7xl font-black tracking-tight mb-4">
          {dish.name}
        </h1>
        <p className="text-white/90 text-xl max-w-2xl font-medium leading-relaxed">
          {dish.description}
        </p>
      </div>
    </div>
  );
};

