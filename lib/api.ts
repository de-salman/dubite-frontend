import { Category } from '@/data/types';

/**
 * Get the base URL for the backend API
 */
export function getApiBaseUrl(): string {
  // In production, use environment variable
  // In development, default to localhost:3000 (backend port)
  return process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5050';
}

/**
 * Fetch categories for a given city
 * Uses Next.js fetch caching to deduplicate requests and cache responses
 */
export async function fetchCategories(citySlug: string = 'dubai'): Promise<Category[]> {
  const baseUrl = getApiBaseUrl();
  const response = await fetch(`${baseUrl}/cities/${citySlug}/categories`, {
    // Use Next.js default caching - deduplicates requests within the same render
    // and caches the response for subsequent requests
    next: { revalidate: 60 }, // Revalidate every 60 seconds (ISR)
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.statusText}`);
  }

  return response.json();
}
