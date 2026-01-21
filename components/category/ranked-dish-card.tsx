import React from 'react';
import { RankedDish } from '@/data/category-types';
import { Icon } from '../ui/icon';

interface RankedDishCardProps {
  dish: RankedDish;
}

export const RankedDishCard: React.FC<RankedDishCardProps> = ({ dish }) => {
  return (
    <div className="compact-card group">
      <div className={`ranking-badge ${!dish.isTop ? '!bg-slate-800 !bg-none' : ''}`}>
        <span className="text-sm leading-none">#{dish.rank}</span>
        {dish.isTop && <span className="text-[6px] font-black tracking-tighter uppercase">TOP</span>}
      </div>
      <div className="price-tag">AED {dish.price}</div>
      <div className="rating-chip">
        <Icon name="star" className="text-amber-400 text-[10px] filled-icon" />
        <span>{dish.rating}</span>
      </div>
      <div className="aspect-[3/2] overflow-hidden bg-slate-100">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-3">
        <h3 className="text-xs font-black text-slate-900 truncate mb-1">{dish.name}</h3>
        <p className="text-[10px] text-slate-500 font-bold mb-3">
          {dish.restaurant} • {dish.location}
        </p>
        <button className="w-full purple-gradient text-white py-2 rounded-lg text-[9px] font-black uppercase tracking-widest hover:brightness-110 shadow-md shadow-[#C22F93]/10 transition-all">
          View Details
        </button>
      </div>
    </div>
  );
};

