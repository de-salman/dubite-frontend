'use client';

import React, { use } from 'react';
import { RestaurantHero } from '@/components/restaurant/restaurant-hero';
import { SignatureDishCard } from '@/components/restaurant/signature-dish-card';
import { RestaurantAbout } from '@/components/restaurant/restaurant-about';
import { RestaurantLocationCard } from '@/components/restaurant/restaurant-location-card';
import { getRestaurantById } from '@/data/restaurant-mock-data';

interface RestaurantPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = use(params);
  const restaurant = getRestaurantById(slug);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Restaurant Not Found</h1>
          <p className="text-gray-500">The restaurant you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-[#161118]">
      <main className="w-full">
        <RestaurantHero restaurant={restaurant} />

        {/* Signature Dishes Section */}
        <section className="max-w-[1280px] mx-auto px-8 py-20">
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-[#161118] tracking-tight">Signature Dishes</h3>
            <p className="text-gray-500 text-lg font-medium mt-1">
              Discover the legendary flavors that define our kitchen.
            </p>
          </div>
          <div className="bento-grid">
            {restaurant.signatureDishes.map((dish) => (
              <SignatureDishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </section>

        {/* About & Location Section */}
        <div className="bg-gray-50/30">
          <div className="max-w-[1280px] mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <RestaurantAbout restaurant={restaurant} />
            <RestaurantLocationCard restaurant={restaurant} />
          </div>
        </div>
      </main>
    </div>
  );
}

