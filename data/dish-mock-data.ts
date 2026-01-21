import { DishDetail, DishReview } from './dish-types';

export const getDishById = (id: string): DishDetail | null => {
  const dishes: Record<string, DishDetail> = {
    'truffle-wagyu-burger': {
      id: 'truffle-wagyu-burger',
      name: 'Truffle Wagyu Burger',
      description:
        'Experience culinary heights with our 48-hour aged Wagyu, shaved black winter truffles, and artisanal charcoal brioche.',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBpLMA9xAFo6-Jqueg4Cj_klVJhefG8QCj63mSW68vNpyQXJlcompCxM3FEnCkAA9uXGs8cy11LcYOVGrEtbmdVOWa-XgsuUytngbiuom8jd2185ftWJY7p5TE42hGNciP6YDIbqFjSpKxDHJG_r09u35UaAZdFvPrXx5hkoOXMrXw_1SEh7WqIvaVQyTF78ne8a8UIaAWZUSzXRpatynqipRJQFGb6DwwwbEsUrWbMJSjSAyNfkdv81pa-gM7VUBqPbxO63Y3zMQk',
      price: 85,
      category: 'Burgers',
      location: 'Dubai',
      badges: ['Premium Choice', '2024 Favorite'],
      restaurant: {
        id: 'salt-bone',
        name: 'Salt & Bone',
        address: 'Gate Village 05, DIFC',
        city: 'Dubai',
        country: 'United Arab Emirates',
        isOpen: true,
        closingTime: '11:30 PM',
      },
      experience: {
        title: 'The Culinary Experience',
        content: [
          "This signature masterpiece from Salt & Bone features a meticulously selected 200g Wagyu beef patty, seasoned with Himalayan pink salt and dry-aged for enhanced tenderness and umami depth.",
          "Topped with a generous layer of melted cave-aged Gruyère and finished with freshly shaved black winter truffles. Served in a custom-baked charcoal brioche bun that perfectly balances the rich juices of the premium beef.",
        ],
      },
    },
  };

  return dishes[id] || null;
};

export const getDishReviews = (dishId: string): DishReview[] => {
  const reviews: Record<string, DishReview[]> = {
    'truffle-wagyu-burger': [
      {
        id: '1',
        author: 'Sarah M.',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCZd9ZLMF7-tw7nWqTic8ANZeW6KTo71ssZCKdhEt90CqK6YG-uh6Y9Tw9uKw0ACWPfap_Mj8xQPMyXvutKGw0H9hkKewztsJK3fVmKg4qqIe0qqzdfpP4MJKwYYn0gyvvss-3HCjqoAuvVI3H-66wpV7XgwbXBES0qGQ0UdZNzKUcp0DaB5EVGtYmWiOALvV_XZxlbDVWPeTp2e0KlZ0lkbrpqvZYNoFP86EI_FWQRN3AsExukerNMsRDJF3L09h9fIy53R07EsnQ',
        rating: 5,
        comment:
          'The truffle flavor is subtle yet distinct. The meat quality is clearly superior to any other burger in DIFC. A must-try for any burger enthusiast.',
        dishName: 'Truffle Wagyu Burger',
        restaurantName: 'Salt & Bone',
      },
      {
        id: '2',
        author: 'Alex Chen',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuAEXac-AIKmu8cEZsHgy8COF1ZFtXGCKrpNnTkufXV7_dS5wbGN1j4mv7ou0Af4wJXqlfiWdA40jOnThVEjc9f7x8pdVjIRw1WGg-Uf4AyN8APTidxPpkaQXocAMHchh2-fmIpGr4WHbYgkP5_t9IhT_u93QhfyWr0Dj4BtALDCRxgohFmzB9FEGrdP2z150CHslaH9bnRoTaDJ3Zbsc_yc7LXOcddfkF32p-9Rljuv4Vo-NDgrb-0uuCS7kFKdorUBo4CEylyMOcE',
        rating: 5,
        comment:
          'Absolute perfection. The brioche bun is like a cloud. Make sure to order it medium-rare to truly appreciate the incredible marbling of the wagyu beef.',
        badge: 'Elite Foodie',
        dishName: 'Truffle Wagyu Burger',
        restaurantName: 'Salt & Bone',
      },
      {
        id: '3',
        author: 'Fatima K.',
        avatar:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD87EnyJA8X5VP1sea7MfC5wu6MHS6PTvz1btkq0hJOXq4Tk0uxeGXbgsipCqTJmKG8BEKWnVLQocvaFeojd8GeTtArhoVTMTPV1ppvR1QwgXh2HsR97qTfqwe2Ej644eyyaedgUViafL2jeQkYhmQvrE8iISectu5eCAyjz6dfTXi5yCj8O8lDBYIU635KNaa1i-1xuebxkDVQclQvAzEZ9HF6Rq00MtpIcGKHgsDhB0TXqa-AXFuNzSUZPSyAmTRtYvvTD1ue-cE',
        rating: 4,
        comment:
          'Delicious, but definitely heavy! Sharing is recommended if you\'re ordering appetizers as well. The truffle oil aroma hits you as soon as it arrives.',
        dishName: 'Truffle Wagyu Burger',
        restaurantName: 'Salt & Bone',
      },
    ],
  };

  return reviews[dishId] || [];
};

