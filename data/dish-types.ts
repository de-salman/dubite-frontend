export interface DishDetail {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  location: string;
  badges?: string[];
  restaurant: {
    id: string;
    name: string;
    address: string;
    city: string;
    country: string;
    image?: string;
    isOpen: boolean;
    closingTime?: string;
  };
  experience: {
    title: string;
    content: string[];
  };
}

export interface DishReview {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  comment: string;
  badge?: string;
  dishName: string;
  restaurantName: string;
}

