/**
 * Backend API response types
 */

/**
 * Backend dish response type
 */
export interface BackendDish {
  id: string;
  name: string;
  price: number;
  image_url: string | null;
  slug: string;
  description: string | null;
  rank: number;
  restaurant: {
    id: string;
    name: string;
    slug: string;
    cuisine: {
      name: string;
    };
    city: {
      name: string;
    };
  };
  category: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    review_count: number;
  } | null;
}

/**
 * Backend dish detail response type (from findBySlug)
 */
export interface BackendDishDetail {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  price: number;
  image_url: string | null;
  restaurant: {
    id: string;
    name: string;
    slug: string;
    city: {
      id: string;
      name: string;
      slug: string;
    };
    cuisine: {
      id: string;
      name: string;
      slug: string;
    };
  };
  category: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    review_count: number;
  } | null;
}

/**
 * Backend cuisine response type
 */
export interface BackendCuisine {
  id: string;
  name: string;
  slug: string;
  image: string;
}

/**
 * Backend restaurant response type
 */
export interface BackendRestaurant {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  created_at: string;
  rank?: number; // Added rank for top restaurants
  cuisine: {
    id: string;
    name: string;
    slug: string;
  };
  city: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    total_reviews: number;
  } | null;
  _count: {
    dishes: number;
  };
}

/**
 * Backend cuisine ranking response type
 */
export interface BackendCuisineRanking {
  cuisine: {
    id: string;
    name: string;
    slug: string;
  };
  city: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    restaurant_count: number;
    total_reviews: number;
    avg_score: number;
  };
  restaurants: BackendRestaurant[];
}

/**
 * Backend restaurant detail response type
 */
export interface BackendRestaurantDetail {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  image_url: string | null;
  latitude: number;
  longitude: number;
  city: {
    id: string;
    name: string;
    slug: string;
  };
  cuisine: {
    id: string;
    name: string;
    slug: string;
  };
  stats: {
    score: number;
    avg_rating: number;
    total_reviews: number;
  } | null;
  dishes: Array<{
    id: string;
    name: string;
    slug: string;
    price: number;
    image_url: string | null;
    description: string | null;
    stats: {
      score: number;
      avg_rating: number;
      review_count: number;
    } | null;
  }>;
  _count: {
    dishes: number;
  };
}

/**
 * Backend featured review response type
 */
export interface BackendFeaturedReview {
  id: string;
  rating: number;
  comment: string | null;
  featured: boolean;
  created_at: string;
  user: {
    id: string;
    name: string;
    avatar_url: string | null;
  };
  dish: {
    id: string;
    name: string;
    slug: string;
    image_url: string | null;
    restaurant: {
      id: string;
      name: string;
      slug: string;
      city: {
        name: string;
      };
    };
    category: {
      name: string;
    };
  };
}
