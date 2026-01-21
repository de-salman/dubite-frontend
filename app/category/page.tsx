import React from 'react';
import Link from 'next/link';
import { fetchCategories } from '@/lib/api';
import { Category } from '@/data/types';

export default async function CategoryPage() {
  // Fetch categories from backend API (uses cached data if available)
  let categories: Category[] = [];
  try {
    categories = await fetchCategories('dubai');
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    // Fallback to empty array if API fails
    categories = [];
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="flex-1 w-full bg-white">
        {/* Title Section */}
        <section className="pt-16 pb-12 px-6 lg:px-12 bg-white">
          <div className="max-w-[1400px] mx-auto text-center">
            <span className="text-brand-blue-end font-black tracking-[0.3em] text-[10px] uppercase mb-3 block">
              Discovery Hub
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
              Explore All Categories
            </h2>
            <div className="h-1 w-20 grad-purple mx-auto mt-6 rounded-full opacity-30"></div>
          </div>
        </section>

        {/* Categories Grid Section */}
        <section className="pb-24 px-6 lg:px-12">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-12 gap-x-8">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.name.toLowerCase()}`}
                  className="flex flex-col items-center group"
                >
                  <div className="category-ring rounded-full transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(194,47,147,0.4)]">
                    <div className="relative size-36 md:size-44 rounded-full overflow-hidden border-2 border-white drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)]">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{ backgroundImage: `url(${category.image})` }}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                    </div>
                  </div>
                  <span className="mt-5 text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-900 group-hover:text-brand-purple-start transition-colors">
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
