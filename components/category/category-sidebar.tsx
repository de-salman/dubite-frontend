import React from 'react';
import { FilterCategory, TrendingDish, Neighborhood } from '@/data/category-types';
import { Icon } from '../ui/icon';

interface CategorySidebarProps {
  filterCategories: FilterCategory[];
  neighborhoods: Neighborhood[];
  trendingDishes: TrendingDish[];
  selectedCategory?: string;
  selectedNeighborhood?: string;
  onCategoryChange?: (categoryId: string) => void;
  onNeighborhoodChange?: (neighborhoodId: string) => void;
}

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  filterCategories,
  neighborhoods,
  trendingDishes,
  selectedCategory,
  selectedNeighborhood,
  onCategoryChange,
  onNeighborhoodChange,
}) => {
  return (
    <aside className="lg:col-span-2 flex flex-col gap-6">
      {/* Filters */}
      <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-[11px] font-black text-gradient-blue mb-5 flex items-center gap-2 uppercase tracking-widest">
          <Icon name="tune" className="text-lg" />
          Discovery Filters
        </h3>
        <div className="space-y-5">
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Category
            </p>
            <div className="space-y-1.5">
              {filterCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => onCategoryChange?.(category.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg font-bold text-[11px] flex justify-between items-center transition-colors ${
                    category.isActive || selectedCategory === category.id
                      ? 'filter-chip-active shadow-md shadow-brand-purple-start/20'
                      : 'text-slate-600 hover:bg-slate-50 border border-transparent hover:border-slate-100'
                  }`}
                >
                  {category.name}
                  {category.count && (
                    <span
                      className={`size-4 ${
                        category.isActive || selectedCategory === category.id
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-100 text-slate-600'
                      } text-[8px] flex items-center justify-center rounded-full`}
                    >
                      {category.count}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-3">
              Neighborhood
            </p>
            <select
              value={selectedNeighborhood}
              onChange={(e) => onNeighborhoodChange?.(e.target.value)}
              className="w-full text-[11px] font-bold border-slate-200 rounded-lg focus:ring-[#009BDF] focus:border-[#009BDF] py-2"
            >
              {neighborhoods.map((neighborhood) => (
                <option key={neighborhood.id} value={neighborhood.id}>
                  {neighborhood.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Trending */}
      <div className="bg-slate-50/50 p-5 rounded-2xl border border-slate-100">
        <h3 className="text-[11px] font-black text-gradient-blue mb-5 flex items-center gap-2 uppercase tracking-widest">
          <Icon name="trending_up" className="text-lg" />
          Trending in Dubai
        </h3>
        <div className="flex flex-col gap-4">
          {trendingDishes.map((dish) => (
            <div key={dish.id} className="flex items-center gap-3 group cursor-pointer">
              <span className="text-xs font-black text-slate-300 group-hover:text-[#C22F93] transition-colors">
                {String(dish.rank).padStart(2, '0')}
              </span>
              <div>
                <p className="text-xs font-black text-slate-800 leading-none group-hover:text-[#009BDF] transition-colors">
                  {dish.name}
                </p>
                <p className="text-[9px] text-slate-400 mt-1 uppercase font-bold tracking-tight">
                  {dish.mentions}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

