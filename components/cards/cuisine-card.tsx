import React from 'react';
import Link from 'next/link';
import { Icon } from '../ui/icon';

export interface Cuisine {
  id: string;
  name: string;
  image: string;
  slug?: string; // Optional slug for navigation
}

interface CuisineCardProps {
  cuisine: Cuisine;
}

export const CuisineCard: React.FC<CuisineCardProps> = ({ cuisine }) => {
  // Use slug if available, otherwise generate from name
  const cuisineSlug = cuisine.slug || cuisine.name.toLowerCase().replace(/\s+/g, '-');
  const href = `/cuisine/${cuisineSlug}`;

  return (
    <Link href={href}>
      <div className="bg-white rounded-3xl overflow-hidden group border border-slate-100 shadow-sm transition-all hover:shadow-xl cursor-pointer">
        <div className="h-44 overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            style={{ backgroundImage: `url(${cuisine.image})` }}
          />
        </div>
        <div className="p-5 flex items-center justify-between">
          <span className="text-xs font-black uppercase tracking-widest text-slate-900">
            {cuisine.name}
          </span>
          <Icon name="arrow_outward" className="text-[#009BDF] text-lg" />
        </div>
      </div>
    </Link>
  );
};

