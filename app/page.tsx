import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero-section';
import { CategorySection } from '@/components/sections/category-section';
import { RestaurantsSection } from '@/components/sections/restaurants-section';
import { CuisinesSection } from '@/components/sections/cuisines-section';
import { TrendingSection } from '@/components/sections/trending-section';
import { ReviewsSection } from '@/components/sections/reviews-section';
import {
  categories,
  featuredRestaurant,
  trendingRestaurants,
  compactRestaurants,
  cuisines,
  trendingDishes,
  reviews,
} from '@/data/mock-data';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <HeroSection />
      <CategorySection categories={categories} />
      <main className="flex-1 max-w-[1400px] mx-auto w-full px-6 lg:px-12 py-16">
        <RestaurantsSection
          featuredRestaurant={featuredRestaurant}
          trendingRestaurants={trendingRestaurants}
          compactRestaurants={compactRestaurants}
        />
        <CuisinesSection cuisines={cuisines} />
        <TrendingSection dishes={trendingDishes} />
        <ReviewsSection reviews={reviews} />
      </main>
      <Footer />
    </div>
  );
}
