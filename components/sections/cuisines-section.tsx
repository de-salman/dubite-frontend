import React from 'react';
import { CuisineCard, Cuisine } from '../cards/cuisine-card';
import { IconButton } from '../ui/icon-button';

interface CuisinesSectionProps {
  cuisines: Cuisine[];
}

export const CuisinesSection: React.FC<CuisinesSectionProps> = ({ cuisines }) => {
  return (
    <section className="mb-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="text-[#007AC4] text-xs font-black uppercase tracking-[0.3em] block mb-2">
            Modern Flavors
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            Best Cuisines
          </h2>
        </div>
        <div className="flex gap-2">
          <IconButton icon="chevron_left" />
          <IconButton icon="chevron_right" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cuisines.map((cuisine) => (
          <CuisineCard key={cuisine.id} cuisine={cuisine} />
        ))}
      </div>
    </section>
  );
};

