import { fetchCuisines, BackendCuisine } from '@/lib/api';
import { Cuisine } from '@/components/cards/cuisine-card';
import AllCuisinesPageClient from './page-client';

export default async function AllCuisinesPage() {
  let cuisines: Cuisine[] = [];

  try {
    const backendCuisines = await fetchCuisines('dubai');
    cuisines = backendCuisines.map((cuisine: BackendCuisine) => ({
      id: cuisine.id,
      name: cuisine.name,
      image: cuisine.image,
      slug: cuisine.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch cuisines:', error);
    cuisines = [];
  }

  return <AllCuisinesPageClient cuisines={cuisines} />;
}
