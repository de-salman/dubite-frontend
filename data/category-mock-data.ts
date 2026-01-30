import { Category, FilterCategory, TrendingDish, Neighborhood } from './category-types';

export const categories: Category[] = [
  { id: '1', name: 'Shawarma', slug: 'shawarma' },
  { id: '2', name: 'Burgers', slug: 'burgers' },
  { id: '3', name: 'Pizza', slug: 'pizza' },
  { id: '4', name: 'Sushi', slug: 'sushi' },
  { id: '5', name: 'Steaks', slug: 'steaks' },
  { id: '6', name: 'Mandi', slug: 'mandi' },
  { id: '7', name: 'Street Food', slug: 'street-food' },
  { id: '8', name: 'Fine Dining', slug: 'fine-dining' },
];

export const neighborhoods: Neighborhood[] = [
  { id: '1', name: 'All Dubai' },
  { id: '2', name: 'Deira' },
  { id: '3', name: 'JLT' },
  { id: '4', name: 'DIFC' },
  { id: '5', name: 'Downtown Dubai' },
  { id: '6', name: 'Dubai Marina' },
  { id: '7', name: 'JBR' },
  { id: '8', name: 'The Palm' },
];

export const filterCategories: FilterCategory[] = [
  { id: '1', name: 'Shawarma', count: 42, isActive: true },
  { id: '2', name: 'Burgers', count: 38 },
  { id: '3', name: 'Street Food', count: 25 },
  { id: '4', name: 'Pizza', count: 31 },
  { id: '5', name: 'Sushi', count: 19 },
];

export const trendingDishes: TrendingDish[] = [
  { id: '1', rank: 1, name: 'Truffle Shawarma', mentions: '12.4k Mentions' },
  { id: '2', rank: 2, name: 'Wagyu Sando', mentions: '8.9k Mentions' },
  { id: '3', rank: 3, name: 'Pistachio Kunafa', mentions: '5.2k Mentions' },
  { id: '4', rank: 4, name: 'Dragon Maki Roll', mentions: '4.8k Mentions' },
  { id: '5', rank: 5, name: 'A5 Wagyu Striploin', mentions: '3.9k Mentions' },
];

