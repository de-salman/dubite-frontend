import React from 'react';
import { Icon } from '../ui/icon';

export interface Dish {
  id: string;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  price: number;
  location: string;
}

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  return (
    <div className="bento-card group bg-white">
      <div className="h-48 overflow-hidden relative">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${dish.image})` }}
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span className="text-[10px] font-black text-slate-900">{dish.rating}</span>
          <Icon name="star" className="text-[10px] text-amber-500 fill-current" />
        </div>
      </div>
      <div className="p-4">
        <span className="text-[#C22F93] text-[9px] font-black uppercase tracking-widest">
          {dish.cuisine}
        </span>
        <h4 className="text-slate-900 text-sm font-bold uppercase tracking-tight mt-1 truncate">
          {dish.name}
        </h4>
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-50">
          <span className="text-slate-900 text-[13px] font-extrabold">AED {dish.price}</span>
          <span className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">
            {dish.location}
          </span>
        </div>
      </div>
    </div>
  );
};

