export interface RankedDish {
  id: string;
  rank: number;
  name: string;
  restaurant: string;
  location: string;
  price: number;
  rating: number;
  image: string;
  isTop?: boolean;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

export interface FilterCategory {
  id: string;
  name: string;
  count: number;
  isActive?: boolean;
}

export interface TrendingDish {
  id: string;
  rank: number;
  name: string;
  mentions: string;
}

export interface Neighborhood {
  id: string;
  name: string;
}

