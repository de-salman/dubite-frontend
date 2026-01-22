export interface RestaurantDetail {
  id: string;
  name: string;
  description: string;
  heroImage: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  cuisine: string[];
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  isOpen: boolean;
  closingTime?: string;
  about: {
    title: string;
    content: string[];
    experience: string;
    averageCost: string;
  };
  signatureDishes: SignatureDish[];
}

export interface SignatureDish {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string; // Required slug for navigation
  rank: number;
  isLarge?: boolean;
}

