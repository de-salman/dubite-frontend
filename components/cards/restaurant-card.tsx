import React from 'react';
import Link from 'next/link';
import { Badge } from '../ui/badge';
import { Icon } from '../ui/icon';

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  cuisine: string;
  slug?: string; // Optional slug for navigation
  rank?: number; // Rank based on score (#1, #2, etc.)
  score?: number; // Score from stats
  featured?: boolean;
  trending?: boolean;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  variant?: 'featured' | 'trending' | 'compact';
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  variant = 'featured',
}) => {
  // Use slug if available, otherwise generate from name or use id
  const restaurantSlug = restaurant.slug || restaurant.id;
  const href = `/restaurant/${restaurantSlug}`;

  const CardContent = () => {
    if (variant === 'featured') {
      return (
        <div className="group relative h-full min-h-[500px] bento-card cursor-pointer">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
          style={{ backgroundImage: `url(${restaurant.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute top-6 left-6 flex gap-2">
          <Badge variant="gradient-purple">Featured Venue</Badge>
          <Badge variant="white">{restaurant.location}</Badge>
        </div>
        <div className="absolute bottom-8 left-8 right-8 text-white">
          <h3 className="text-4xl font-extrabold mb-3 tracking-tight">{restaurant.name}</h3>
          <p className="text-white/80 font-medium max-w-md text-sm mb-6 uppercase tracking-wider">
            {restaurant.description}
          </p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-amber-400 font-bold">
              <Icon name="star" className="fill-current text-sm" />
              {restaurant.rating}
            </span>
            <span className="text-white/60 text-xs font-bold">•</span>
            <span className="text-white/80 text-xs font-bold uppercase tracking-widest">
              {restaurant.cuisine}
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
          style={{ backgroundImage: `url(${restaurant.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        {restaurant.rank && (
          <div className="absolute top-3 left-3 bg-gradient-to-br from-[#C22F93] to-[#6C0561] text-white px-3 py-1.5 rounded-lg shadow-lg z-10">
            <span className="text-xs font-black">#{restaurant.rank}</span>
          </div>
        )}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">{restaurant.name}</h4>
          <div className="flex items-center gap-2 mb-1">
            <span className="flex items-center gap-1 text-amber-400 font-bold text-sm">
              <Icon name="star" className="fill-current" />
              {restaurant.rating.toFixed(1)}
            </span>
            <span className="text-white/60 text-xs font-bold">•</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/70">
              {restaurant.location}
            </span>
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-white/70">
            {restaurant.cuisine}
          </p>
        </div>
      </div>
      );
    }

    // Compact variant
    return (
      <div className="bento-card relative group cursor-pointer">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
        <h5 className="text-white text-[10px] font-black uppercase tracking-widest">
          {restaurant.name}
        </h5>
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

