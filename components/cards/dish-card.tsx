import React from 'react';
import Link from 'next/link';
import { Icon } from '../ui/icon';
import { Badge } from '../ui/badge';

export interface Dish {
  id: string;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  price: number;
  location: string;
  slug?: string; // Optional slug for navigation
  rank?: number; // Optional rank for best dishes (#1, #2, etc.)
}

interface DishCardProps {
  dish: Dish;
  variant?: 'featured' | 'trending' | 'compact';
}

export const DishCard: React.FC<DishCardProps> = ({ dish, variant = 'featured' }) => {
  // Use slug for navigation (required)
  if (!dish.slug) {
    console.warn(`Dish ${dish.id} (${dish.name}) is missing a slug. Please ensure all dishes have slugs.`);
  }
  const dishSlug = dish.slug || dish.id; // Fallback to id only if slug is missing
  const href = `/dish/${dishSlug}`;

  const CardContent = () => {
    if (variant === 'featured') {
      return (
        <div className="group relative h-full min-h-[500px] bento-card cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${dish.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute top-6 left-6 flex gap-2">
          {dish.rank && (
            <Badge variant="gradient-purple">#{dish.rank} Best Dish</Badge>
          )}
          <Badge variant="white">{dish.location}</Badge>
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h3 className="text-4xl font-extrabold mb-3 tracking-tight">{dish.name}</h3>
          <p className="text-white/80 font-medium max-w-md text-sm mb-6 uppercase tracking-wider">
            {dish.cuisine}
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Icon name="star" className="fill-current text-sm" />
              {dish.rating.toFixed(1)}
            </span>
            <span className="text-white/60 text-xs font-bold">•</span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
              AED {dish.price}
            </span>
          </div>
        </div>
      </div>
      );
    }

    if (variant === 'trending') {
      return (
        <div className="bento-card relative h-[280px] group cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${dish.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {dish.rank && (
          <div className="absolute top-3 left-3 bg-gradient-to-br from-[#C22F93] to-[#6C0561] text-white px-3 py-1.5 rounded-lg shadow-lg">
            <span className="text-xs font-black">#{dish.rank}</span>
          </div>
        )}
        <div className="absolute bottom-6 left-6 text-white">
          <Badge variant="gradient-purple" className="text-[9px] px-3 py-1 mb-2">
            Top Rated
          </Badge>
          <h4 className="text-2xl font-bold uppercase tracking-tight">{dish.name}</h4>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
            {dish.location} • {dish.cuisine} • AED {dish.price}
          </p>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm">
          <span className="text-[10px] font-black text-slate-900">{dish.rating.toFixed(1)}</span>
          <Icon name="star" className="text-[10px] text-amber-500 fill-current" />
        </div>
      </div>
      );
    }

    // Compact variant
    return (
      <div className="bento-card relative group cursor-pointer h-full w-full">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: dish.image ? `url(${dish.image})` : 'none' }}
      />
      {!dish.image && (
        <div className="absolute inset-0 bg-slate-200" />
      )}
      <div className="absolute inset-0 bg-black/40" />
      {dish.rank && (
        <div className="absolute top-2 left-2 bg-gradient-to-br from-[#C22F93] to-[#6C0561] text-white px-2 py-1 rounded-lg shadow-lg z-10">
          <span className="text-[10px] font-black">#{dish.rank}</span>
        </div>
      )}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
        <h5 className="text-white text-[10px] font-black uppercase tracking-widest mb-1">
          {dish.name}
        </h5>
        <p className="text-white/80 text-[8px] font-bold uppercase tracking-widest">
          AED {dish.price}
        </p>
      </div>
    </div>
    );
  };

  return (
    <Link href={href}>
      <CardContent />
    </Link>
  );
};

