import React from 'react';
import { Breadcrumb } from '@/components/dish/breadcrumb';
import { DishHero } from '@/components/dish/dish-hero';
import { DishReviewCard } from '@/components/dish/dish-review-card';
import { DishSidebar } from '@/components/dish/dish-sidebar';
import { Icon } from '@/components/ui/icon';
import { fetchDishBySlug } from '@/lib/api';
import { transformBackendDishDetailToDishDetail } from '@/lib/transformers/dish-transformers';
import { DishReview } from '@/data/dish-types';

interface DishPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DishPage({ params }: DishPageProps) {
  const { slug } = await params;
  let dish;
  let reviews: DishReview[] = [];

  try {
    const backendDish = await fetchDishBySlug(slug);
    dish = transformBackendDishDetailToDishDetail(backendDish);
    // For now, use empty reviews array - can be enhanced later with real review data
    reviews = [];
  } catch (error) {
    console.error('Failed to fetch dish:', error);
    dish = null;
  }

  if (!dish) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Dish Not Found</h1>
          <p className="text-gray-500">The dish you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#111318]">
      <main className="max-w-[1200px] mx-auto px-4 md:px-10 py-6">
        <Breadcrumb location={dish.location} category={dish.category} dishName={dish.name} />
        <DishHero dish={dish} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Culinary Experience Section */}
            <section>
              <h3 className="text-3xl font-extrabold mb-6 tracking-tight">{dish.experience.title}</h3>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                {dish.experience.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Community Reviews Section */}
            <section className="space-y-8">
              <div className="flex items-center justify-between border-b border-gray-100 pb-6">
                <div>
                  <h3 className="text-3xl font-extrabold tracking-tight">Community Reviews</h3>
                  <p className="text-gray-500 mt-1">What local foodies are saying</p>
                </div>
                <button className="purple-gradient text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg shadow-brand-purple-start/20 hover:opacity-90 transition-all flex items-center gap-2">
                  <Icon name="edit_note" className="text-lg" />
                  Write a Review
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviews.map((review, index) => (
                  <DishReviewCard
                    key={review.id}
                    review={review}
                    variant={index === 1 ? 'featured' : 'default'}
                  />
                ))}
              </div>
            </section>
          </div>

          <DishSidebar dish={dish} />
        </div>
      </main>
    </div>
  );
}

