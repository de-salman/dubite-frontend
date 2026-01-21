import { Category, RankedDish, FilterCategory, TrendingDish, Neighborhood } from './category-types';

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

export const getRankedDishesByCategory = (categorySlug: string): RankedDish[] => {
  const dishes: Record<string, RankedDish[]> = {
    shawarma: [
      {
        id: '1',
        rank: 1,
        name: 'OG Charcoal Chicken Shawarma',
        restaurant: 'Al Mallah',
        location: 'Deira',
        price: 24,
        rating: 4.9,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA6eaIxTry_KRDyKZj88txaKzEOa9SnVJtM1vl41wsEJ5lqW5ZYcMDkAXcCSxx2agsXzT-mZFsqiNRVxRlmEcIzhZ3iJ5paQCdyVufsKS3dxp6IIaoWfDkmTqMZYDkOhXjU7WdtEoLycbLFCPOnivRbG4ktgXTat3Dp9i4-1hJtt9i11ztHOVMY8jcpEYwKBn1uRbIv7QV461o07h8BWCnPq5tkY1Bq8RYSIdkTEbDBURWjQUmDHghOzdGhpW50JKAg6ZqqlGd74dw',
        isTop: true,
      },
      {
        id: '2',
        rank: 2,
        name: 'Spicy Lamb Doner Platter',
        restaurant: 'Bait Al Shawarma',
        location: 'JLT',
        price: 45,
        rating: 4.8,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ydUbjGgmUQ8WWFjb2pj71lU3I8Jfl1wT4yRGSt18lK_uf7fewFIsNpgBlzqM2pHbIm0N_JqOSo_lEHFEsgzsaaKxEBjfL3qjDbSCueiAoyBQAPAikCSuyRI0BTszutbXi7Gb-zz5r74-9IOLV2ogskgVEAWuiGzs1Tmxt1CuInVwvIe0cyTHKdCKj9r9BsOLbxMSoh1SMs-XlOSW7rjw9OSZkC_Pe-42tgaaNMl3QtSBLZx4THifIpqEyZadvlp9thiVhORdMow',
        isTop: true,
      },
      {
        id: '3',
        rank: 3,
        name: 'Authentic Lebanese Kafta Wrap',
        restaurant: 'Sultan Lebanese',
        location: 'DIFC',
        price: 18,
        rating: 4.7,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCQqdIBtUu3ICxl9faTAUMdvy3PNE1CutrV5sCgYLQvMjhLc4jASOn5EzoTRD0UpyHqATJ-N3PI1Jx2xTl0B9V10wAfCB4oq--yKSrP0AwWtrcgqkc_7a4w37OwaVqoCZg3PP-kQ2lbM5IIF0C7GXhyUk7k8kWFI7_tmY82YFaS7pjVP7yI5NasJscoLbLAYcmirlv9hWU5CrBwslQussJLeIUdXzWC-icgVecGSxzD0YzugBXICAhG87SPdQrW-UnaOTLs5owCRyw',
        isTop: true,
      },
      {
        id: '4',
        rank: 4,
        name: 'The Garlic Bomb (Chicken)',
        restaurant: 'Al Qusais Hidden Gem',
        location: 'Al Qusais',
        price: 21,
        rating: 4.6,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA6eaIxTry_KRDyKZj88txaKzEOa9SnVJtM1vl41wsEJ5lqW5ZYcMDkAXcCSxx2agsXzT-mZFsqiNRVxRlmEcIzhZ3iJ5paQCdyVufsKS3dxp6IIaoWfDkmTqMZYDkOhXjU7WdtEoLycbLFCPOnivRbG4ktgXTat3Dp9i4-1hJtt9i11ztHOVMY8jcpEYwKBn1uRbIv7QV461o07h8BWCnPq5tkY1Bq8RYSIdkTEbDBURWjQUmDHghOzdGhpW50JKAg6ZqqlGd74dw',
      },
      {
        id: '5',
        rank: 5,
        name: 'Pomegranate Beef Wrap',
        restaurant: 'JLT Modern Twist',
        location: 'JLT',
        price: 32,
        rating: 4.5,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ydUbjGgmUQ8WWFjb2pj71lU3I8Jfl1wT4yRGSt18lK_uf7fewFIsNpgBlzqM2pHbIm0N_JqOSo_lEHFEsgzsaaKxEBjfL3qjDbSCueiAoyBQAPAikCSuyRI0BTszutbXi7Gb-zz5r74-9IOLV2ogskgVEAWuiGzs1Tmxt1CuInVwvIe0cyTHKdCKj9r9BsOLbxMSoh1SMs-XlOSW7rjw9OSZkC_Pe-42tgaaNMl3QtSBLZx4THifIpqEyZadvlp9thiVhORdMow',
      },
      {
        id: '6',
        rank: 6,
        name: 'Spicy Sujuk Shawarma',
        restaurant: 'Street Food',
        location: 'Deira',
        price: 26,
        rating: 4.4,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCQqdIBtUu3ICxl9faTAUMdvy3PNE1CutrV5sCgYLQvMjhLc4jASOn5EzoTRD0UpyHqATJ-N3PI1Jx2xTl0B9V10wAfCB4oq--yKSrP0AwWtrcgqkc_7a4w37OwaVqoCZg3PP-kQ2lbM5IIF0C7GXhyUk7k8kWFI7_tmY82YFaS7pjVP7yI5NasJscoLbLAYcmirlv9hWU5CrBwslQussJLeIUdXzWC-icgVecGSxzD0YzugBXICAhG87SPdQrW-UnaOTLs5owCRyw',
      },
      {
        id: '7',
        rank: 7,
        name: 'Classic Spicy Mix',
        restaurant: 'Old Dubai Kitchen',
        location: 'Deira',
        price: 15,
        rating: 4.3,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA6eaIxTry_KRDyKZj88txaKzEOa9SnVJtM1vl41wsEJ5lqW5ZYcMDkAXcCSxx2agsXzT-mZFsqiNRVxRlmEcIzhZ3iJ5paQCdyVufsKS3dxp6IIaoWfDkmTqMZYDkOhXjU7WdtEoLycbLFCPOnivRbG4ktgXTat3Dp9i4-1hJtt9i11ztHOVMY8jcpEYwKBn1uRbIv7QV461o07h8BWCnPq5tkY1Bq8RYSIdkTEbDBURWjQUmDHghOzdGhpW50JKAg6ZqqlGd74dw',
      },
      {
        id: '8',
        rank: 8,
        name: 'Smoked Turkey Platter',
        restaurant: 'Marina Heights',
        location: 'Dubai Marina',
        price: 29,
        rating: 4.2,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuD7ydUbjGgmUQ8WWFjb2pj71lU3I8Jfl1wT4yRGSt18lK_uf7fewFIsNpgBlzqM2pHbIm0N_JqOSo_lEHFEsgzsaaKxEBjfL3qjDbSCueiAoyBQAPAikCSuyRI0BTszutbXi7Gb-zz5r74-9IOLV2ogskgVEAWuiGzs1Tmxt1CuInVwvIe0cyTHKdCKj9r9BsOLbxMSoh1SMs-XlOSW7rjw9OSZkC_Pe-42tgaaNMl3QtSBLZx4THifIpqEyZadvlp9thiVhORdMow',
      },
      {
        id: '9',
        rank: 9,
        name: 'Vegetarian Falafel Saj',
        restaurant: 'Green Eats',
        location: 'JBR',
        price: 22,
        rating: 4.1,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuCQqdIBtUu3ICxl9faTAUMdvy3PNE1CutrV5sCgYLQvMjhLc4jASOn5EzoTRD0UpyHqATJ-N3PI1Jx2xTl0B9V10wAfCB4oq--yKSrP0AwWtrcgqkc_7a4w37OwaVqoCZg3PP-kQ2lbM5IIF0C7GXhyUk7k8kWFI7_tmY82YFaS7pjVP7yI5NasJscoLbLAYcmirlv9hWU5CrBwslQussJLeIUdXzWC-icgVecGSxzD0YzugBXICAhG87SPdQrW-UnaOTLs5owCRyw',
      },
      {
        id: '10',
        rank: 10,
        name: 'Grilled Halloumi Special',
        restaurant: 'The Grille Room',
        location: 'DIFC',
        price: 35,
        rating: 4.0,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuA6eaIxTry_KRDyKZj88txaKzEOa9SnVJtM1vl41wsEJ5lqW5ZYcMDkAXcCSxx2agsXzT-mZFsqiNRVxRlmEcIzhZ3iJ5paQCdyVufsKS3dxp6IIaoWfDkmTqMZYDkOhXjU7WdtEoLycbLFCPOnivRbG4ktgXTat3Dp9i4-1hJtt9i11ztHOVMY8jcpEYwKBn1uRbIv7QV461o07h8BWCnPq5tkY1Bq8RYSIdkTEbDBURWjQUmDHghOzdGhpW50JKAg6ZqqlGd74dw',
      },
    ],
    burgers: [
      {
        id: 'b1',
        rank: 1,
        name: 'Wagyu Truffle Burger',
        restaurant: 'The Burger House',
        location: 'DIFC',
        price: 95,
        rating: 4.9,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBufEdk_nMRfs0cJATH5cP80yhmoj3VNlW6qxsTlnfKqGR1uZ3eEFA4AQRp30BvQzHDelUzDIFDSdnobuMdUiVqq0TB0lKCZgJToqzpg_zOGl3e9awIzl555YljTtDPLgyw5YKWZUwBcZJWS_pfwQUV8VhXHXk9lvYKzNEz9KrhS8rEkxx-fY8pJPBK1UXFgJ5rJauGLnUqR2aHqlq3xuTBYMIbfpIch7h6UjkJf-2URmPeFDa_Kn5f_G6wxG5AnLaP-dqE95uaa-E',
        isTop: true,
      },
      {
        id: 'b2',
        rank: 2,
        name: 'Smoky BBQ Classic',
        restaurant: 'Grill Masters',
        location: 'JBR',
        price: 45,
        rating: 4.8,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuBV779PABJra2WoS5y89s2_fyuHYbStR1lyJpUDH_VD8M4dGxHwIlGdjPyDcGu_XoYsYVi0BxmLyfDO7aP1sfzXKtYZPHMwW9iuTxY98pPreQNm_Y2FHlTZ5fUp2rVIh07_pqmkgAIX3pJzns-V1qSjmXrg0ye-Pq0zj0bfdFcwmGF4ILRwn5A1DBtSYQd5wA1FlwrgnN7sN-yaiNDJhNZlBvWTa6H6r6NB_5AuGoqa5mo9QnG2SKGaQ7h8uTSqO4-HZj6lY_XXp5A',
        isTop: true,
      },
    ],
    pizza: [
      {
        id: 'p1',
        rank: 1,
        name: 'Truffle Margherita',
        restaurant: 'Pizza Palace',
        location: 'Downtown',
        price: 85,
        rating: 4.9,
        image:
          'https://lh3.googleusercontent.com/aida-public/AB6AXuC17g1_JeQq4mkUxwsO9BgLWBkGjOyU3uWWwn0LUjGvcch8hilZWe_0ZQCkZ2_p5ta5qt94qWVPKbC3P9fKnI_blJcz1XGhoCezrwxO40vGrycep7up1spbosndr9enSwkGcBTfGx1JYwPfdGGOdQ3bMm-wlzOcesV8kBkeTGhhWAhAaAcEITzkm5yPUdjRaf3vDSmX_CP5TCTpVtspzgS1GhF_689dSoxIYMzmnbMcG5c8T4pd-2oDli1FM2piI2ECuuwlZp9yGr8',
        isTop: true,
      },
    ],
  };

  return dishes[categorySlug] || dishes.shawarma;
};

