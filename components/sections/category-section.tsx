import React from 'react';
import { Category } from '@/data/types';

interface CategorySectionProps {
  categories: Category[];
}

export const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="relative z-20 -mt-10 px-6 lg:px-12">
      <div className="bg-white rounded-3xl p-8 max-w-[1400px] mx-auto shadow-xl border border-slate-100">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">
            Quick Discover
          </h3>
          <div className="flex gap-2">
            <div className="h-1.5 w-8 rounded-full grad-purple"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-slate-100"></div>
          </div>
        </div>
        <div className="flex justify-between items-center gap-6 overflow-x-auto no-scrollbar pb-2">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-4 shrink-0 group cursor-pointer">
              <div className="category-ring">
                <div className="size-20 rounded-full border-2 border-white overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-110"
                    style={{ backgroundImage: `url(${category.image})` }}
                  />
                </div>
              </div>
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600 group-hover:text-[#C22F93] transition-colors">
                {category.name}
              </span>
            </div>
          ))}
          <div className="flex flex-col items-center gap-4 shrink-0 group cursor-pointer">
            <div className="category-ring">
              <div className="size-20 rounded-full border-2 border-white overflow-hidden flex items-center justify-center bg-slate-50">
                <span className="material-symbols-outlined text-slate-400">add</span>
              </div>
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-slate-600">
              More
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

