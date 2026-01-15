import { Category } from './types';
import { Restaurant } from '@/components/cards/restaurant-card';
import { Dish } from '@/components/cards/dish-card';
import { Cuisine } from '@/components/cards/cuisine-card';
import { Review } from '@/components/cards/review-card';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Pizza',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC17g1_JeQq4mkUxwsO9BgLWBkGjOyU3uWWwn0LUjGvcch8hilZWe_0ZQCkZ2_p5ta5qt94qWVPKbC3P9fKnI_blJcz1XGhoCezrwxO40vGrycep7up1spbosndr9enSwkGcBTfGx1JYwPfdGGOdQ3bMm-wlzOcesV8kBkeTGhhWAhAaAcEITzkm5yPUdjRaf3vDSmX_CP5TCTpVtspzgS1GhF_689dSoxIYMzmnbMcG5c8T4pd-2oDli1FM2piI2ECuuwlZp9yGr8',
  },
  {
    id: '2',
    name: 'Shawarma',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCCgh5eLUqU_w8NcF0OD6Rof0xZGK0YUBx1HKJAsNBcXsgtLHL5G_2kvP7RIAKaiaaZH2mUxkWgEzxaWk8h7wCYBlt-J8h50pP_GgdRohCu1TeCaAkciCXM1_25RPPcijzNh3VSpvWK05mThlO9FfyRyLLvKOb0_DAYEpryqKtgFQbxo1tH8-F9CcUnsjbIo8P88m-sGvsxLdjjv4ZEmyt_KsN9ZHFPRgydpiibM6wbSG91yQtJ-JaF4p-rudn0skFudAXco3UwjAo',
  },
  {
    id: '3',
    name: 'Mandi',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZPct9KmE-N5-IO7zgmK7isyhkh-r5MZsLQhjIRBmFwIT4CcjuM5fyc-5MrRcRM3JXCT8qF3ig_Cc9dlgaYqAOZitkxPtan6U0wkkSaiyofEDZQW4RykIRln2gLQgRo1f3a9fhV25Bk_2LsHmRbPHH2CBFoNGht_Ug7Mrkg1bI2StRoCuJzVY8uiPf2XSTl1YP6p85gHDRWbE-2vkzsA3dsArvDqv0RGDaMMeo7YD7B4qMNiNM1cTgZitK1N0SBixjOsK5oJTojU',
  },
  {
    id: '4',
    name: 'Burgers',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBufEdk_nMRfs0cJATH5cP80yhmoj3VNlW6qxsTlnfKqGR1uZ3eEFA4AQRp30BvQzHDelUzDIFDSdnobuMdUiVqq0TB0lKCZgJToqzpg_zOGl3e9awIzl555YljTtDPLgyw5YKWZUwBcZJWS_pfwQUV8VhXHXk9lvYKzNEz9KrhS8rEkxx-fY8pJPBK1UXFgJ5rJauGLnUqR2aHqlq3xuTBYMIbfpIch7h6UjkJf-2URmPeFDa_Kn5f_G6wxG5AnLaP-dqE95uaa-E',
  },
  {
    id: '5',
    name: 'Steaks',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzhrncxEW2BomrFLO-xcUJw7g1XBqaQ9ba3ciqMSugrjyJujsZhKXsZjAqqHxOFxcVHpS2OJHfSm8ta1dgaCWKie5In2i_SadL8R_y_aAZzYjEy5QoT-NQHJbg8TggE8uGtfispTmnRol5g_o5Y614pBFzpSWuYeNXA-0s8nhtb2RQBCwmoZMG3DqDB-nJHSF_7PQP6NHKnH5lnxbdMvwY7HcSCrWZvawrSaFxIS69gEXXGfEVrAgY0BGjTgmll8juDRS9fGhDaPw',
  },
  {
    id: '6',
    name: 'Sushi',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV779PABJra2WoS5y89s2_fyuHYbStR1lyJpUDH_VD8M4dGxHwIlGdjPyDcGu_XoYsYVi0BxmLyfDO7aP1sfzXKtYZPHMwW9iuTxY98pPreQNm_Y2FHlTZ5fUp2rVIh07_pqmkgAIX3pJzns-V1qSjmXrg0ye-Pq0zj0bfdFcwmGF4ILRwn5A1DBtSYQd5wA1FlwrgnN7sN-yaiNDJhNZlBvWTa6H6r6NB_5AuGoqa5mo9QnG2SKGaQ7h8uTSqO4-HZj6lY_XXp5A',
  },
];

export const featuredRestaurant: Restaurant = {
  id: '1',
  name: 'THE MAJESTIC PALATE',
  description: 'Contemporary Mediterranean with Burj Views',
  image:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuCCgh5eLUqU_w8NcF0OD6Rof0xZGK0YUBx1HKJAsNBcXsgtLHL5G_2kvP7RIAKaiaaZH2mUxkWgEzxaWk8h7wCYBlt-J8h50pP_GgdRohCu1TeCaAkciCXM1_25RPPcijzNh3VSpvWK05mThlO9FfyRyLLvKOb0_DAYEpryqKtgFQbxo1tH8-F9CcUnsjbIo8P88m-sGvsxLdjjv4ZEmyt_KsN9ZHFPRgydpiibM6wbSG91yQtJ-JaF4p-rudn0skFudAXco3UwjAo',
  rating: 4.9,
  location: 'DIFC',
  cuisine: 'Fine Dining',
  featured: true,
};

export const trendingRestaurants: Restaurant[] = [
  {
    id: '2',
    name: 'NEON SUSHI LOUNGE',
    description: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC17g1_JeQq4mkUxwsO9BgLWBkGjOyU3uWWwn0LUjGvcch8hilZWe_0ZQCkZ2_p5ta5qt94qWVPKbC3P9fKnI_blJcz1XGhoCezrwxO40vGrycep7up1spbosndr9enSwkGcBTfGx1JYwPfdGGOdQ3bMm-wlzOcesV8kBkeTGhhWAhAaAcEITzkm5yPUdjRaf3vDSmX_CP5TCTpVtspzgS1GhF_689dSoxIYMzmnbMcG5c8T4pd-2oDli1FM2piI2ECuuwlZp9yGr8',
    rating: 4.8,
    location: 'Dubai Marina',
    cuisine: 'Japanese',
    trending: true,
  },
];

export const compactRestaurants: Restaurant[] = [
  {
    id: '3',
    name: 'The Grill',
    description: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV779PABJra2WoS5y89s2_fyuHYbStR1lyJpUDH_VD8M4dGxHwIlGdjPyDcGu_XoYsYVi0BxmLyfDO7aP1sfzXKtYZPHMwW9iuTxY98pPreQNm_Y2FHlTZ5fUp2rVIh07_pqmkgAIX3pJzns-V1qSjmXrg0ye-Pq0zj0bfdFcwmGF4ILRwn5A1DBtSYQd5wA1FlwrgnN7sN-yaiNDJhNZlBvWTa6H6r6NB_5AuGoqa5mo9QnG2SKGaQ7h8uTSqO4-HZj6lY_XXp5A',
    rating: 4.7,
    location: 'Downtown',
    cuisine: 'Steakhouse',
  },
  {
    id: '4',
    name: 'Aqua Bites',
    description: '',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBufEdk_nMRfs0cJATH5cP80yhmoj3VNlW6qxsTlnfKqGR1uZ3eEFA4AQRp30BvQzHDelUzDIFDSdnobuMdUiVqq0TB0lKCZgJToqzpg_zOGl3e9awIzl555YljTtDPLgyw5YKWZUwBcZJWS_pfwQUV8VhXHXk9lvYKzNEz9KrhS8rEkxx-fY8pJPBK1UXFgJ5rJauGLnUqR2aHqlq3xuTBYMIbfpIch7h6UjkJf-2URmPeFDa_Kn5f_G6wxG5AnLaP-dqE95uaa-E',
    rating: 4.6,
    location: 'JBR',
    cuisine: 'Seafood',
  },
];

export const cuisines: Cuisine[] = [
  {
    id: '1',
    name: 'Arabic',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzhrncxEW2BomrFLO-xcUJw7g1XBqaQ9ba3ciqMSugrjyJujsZhKXsZjAqqHxOFxcVHpS2OJHfSm8ta1dgaCWKie5In2i_SadL8R_y_aAZzYjEy5QoT-NQHJbg8TggE8uGtfispTmnRol5g_o5Y614pBFzpSWuYeNXA-0s8nhtb2RQBCwmoZMG3DqDB-nJHSF_7PQP6NHKnH5lnxbdMvwY7HcSCrWZvawrSaFxIS69gEXXGfEVrAgY0BGjTgmll8juDRS9fGhDaPw',
  },
  {
    id: '2',
    name: 'Turkish',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZPct9KmE-N5-IO7zgmK7isyhkh-r5MZsLQhjIRBmFwIT4CcjuM5fyc-5MrRcRM3JXCT8qF3ig_Cc9dlgaYqAOZitkxPtan6U0wkkSaiyofEDZQW4RykIRln2gLQgRo1f3a9fhV25Bk_2LsHmRbPHH2CBFoNGht_Ug7Mrkg1bI2StRoCuJzVY8uiPf2XSTl1YP6p85gHDRWbE-2vkzsA3dsArvDqv0RGDaMMeo7YD7B4qMNiNM1cTgZitK1N0SBixjOsK5oJTojU',
  },
  {
    id: '3',
    name: 'Indian',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBufEdk_nMRfs0cJATH5cP80yhmoj3VNlW6qxsTlnfKqGR1uZ3eEFA4AQRp30BvQzHDelUzDIFDSdnobuMdUiVqq0TB0lKCZgJToqzpg_zOGl3e9awIzl555YljTtDPLgyw5YKWZUwBcZJWS_pfwQUV8VhXHXk9lvYKzNEz9KrhS8rEkxx-fY8pJPBK1UXFgJ5rJauGLnUqR2aHqlq3xuTBYMIbfpIch7h6UjkJf-2URmPeFDa_Kn5f_G6wxG5AnLaP-dqE95uaa-E',
  },
  {
    id: '4',
    name: 'Japanese',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVQTYyw3zbU326sYzuX62hKTavTrTyTEerQR7xexgZyL_4go2Txt6mljTbRWvj6-Y-Eqx6cmxuvJQGdZMAj-Q59UnXV4OCp4L5H5AokxCH8ZBr1kS7pXdKxui7guDblhiMDqAlVFZwfz8JB9FJoLNW-5BN6UPjEZKcxB-FB-eLJZS2lr1hIQ1zmHKXjVmQGlxUKPPQPept72mDGPM9NugUdxryG7lyHPaZpl7Rj_FQ0xMpEUZLRjh4wo4u9ha9kaONZTfCfNz8Xak',
  },
];

export const trendingDishes: Dish[] = [
  {
    id: '1',
    name: 'Dragon Maki Roll',
    cuisine: 'Japanese',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV779PABJra2WoS5y89s2_fyuHYbStR1lyJpUDH_VD8M4dGxHwIlGdjPyDcGu_XoYsYVi0BxmLyfDO7aP1sfzXKtYZPHMwW9iuTxY98pPreQNm_Y2FHlTZ5fUp2rVIh07_pqmkgAIX3pJzns-V1qSjmXrg0ye-Pq0zj0bfdFcwmGF4ILRwn5A1DBtSYQd5wA1FlwrgnN7sN-yaiNDJhNZlBvWTa6H6r6NB_5AuGoqa5mo9QnG2SKGaQ7h8uTSqO4-HZj6lY_XXp5A',
    rating: 4.8,
    price: 115,
    location: 'Marina',
  },
  {
    id: '2',
    name: 'Mushroom Risotto',
    cuisine: 'Italian',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBufEdk_nMRfs0cJATH5cP80yhmoj3VNlW6qxsTlnfKqGR1uZ3eEFA4AQRp30BvQzHDelUzDIFDSdnobuMdUiVqq0TB0lKCZgJToqzpg_zOGl3e9awIzl555YljTtDPLgyw5YKWZUwBcZJWS_pfwQUV8VhXHXk9lvYKzNEz9KrhS8rEkxx-fY8pJPBK1UXFgJ5rJauGLnUqR2aHqlq3xuTBYMIbfpIch7h6UjkJf-2URmPeFDa_Kn5f_G6wxG5AnLaP-dqE95uaa-E',
    rating: 4.7,
    price: 140,
    location: 'JBR',
  },
  {
    id: '3',
    name: 'Hokkaido Scallops',
    cuisine: 'Seafood',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVQTYyw3zbU326sYzuX62hKTavTrTyTEerQR7xexgZyL_4go2Txt6mljTbRWvj6-Y-Eqx6cmxuvJQGdZMAj-Q59UnXV4OCp4L5H5AokxCH8ZBr1kS7pXdKxui7guDblhiMDqAlVFZwfz8JB9FJoLNW-5BN6UPjEZKcxB-FB-eLJZS2lr1hIQ1zmHKXjVmQGlxUKPPQPept72mDGPM9NugUdxryG7lyHPaZpl7Rj_FQ0xMpEUZLRjh4wo4u9ha9kaONZTfCfNz8Xak',
    rating: 4.9,
    price: 195,
    location: 'The Palm',
  },
  {
    id: '4',
    name: 'Croissant Supreme',
    cuisine: 'Bakery',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ZPct9KmE-N5-IO7zgmK7isyhkh-r5MZsLQhjIRBmFwIT4CcjuM5fyc-5MrRcRM3JXCT8qF3ig_Cc9dlgaYqAOZitkxPtan6U0wkkSaiyofEDZQW4RykIRln2gLQgRo1f3a9fhV25Bk_2LsHmRbPHH2CBFoNGht_Ug7Mrkg1bI2StRoCuJzVY8uiPf2XSTl1YP6p85gHDRWbE-2vkzsA3dsArvDqv0RGDaMMeo7YD7B4qMNiNM1cTgZitK1N0SBixjOsK5oJTojU',
    rating: 4.6,
    price: 45,
    location: 'Al Quoz',
  },
  {
    id: '5',
    name: 'Bluefin Toro',
    cuisine: 'Fine Dining',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBVQTYyw3zbU326sYzuX62hKTavTrTyTEerQR7xexgZyL_4go2Txt6mljTbRWvj6-Y-Eqx6cmxuvJQGdZMAj-Q59UnXV4OCp4L5H5AokxCH8ZBr1kS7pXdKxui7guDblhiMDqAlVFZwfz8JB9FJoLNW-5BN6UPjEZKcxB-FB-eLJZS2lr1hIQ1zmHKXjVmQGlxUKPPQPept72mDGPM9NugUdxryG7lyHPaZpl7Rj_FQ0xMpEUZLRjh4wo4u9ha9kaONZTfCfNz8Xak',
    rating: 4.9,
    price: 260,
    location: 'Downtown',
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    author: 'Sarah H.',
    role: 'Food Critic',
    comment:
      'Dubite changed how I explore DIFC. The dish-first approach ensures I never miss out on the best wagyu in the city.',
    rating: 5,
    dishName: 'A5 Wagyu Striploin',
    restaurantName: 'Zuma',
    location: 'DIFC',
    dishImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBzhrncxEW2BomrFLO-xcUJw7g1XBqaQ9ba3ciqMSugrjyJujsZhKXsZjAqqHxOFxcVHpS2OJHfSm8ta1dgaCWKie5In2i_SadL8R_y_aAZzYjEy5QoT-NQHJbg8TggE8uGtfispTmnRol5g_o5Y614pBFzpSWuYeNXA-0s8nhtb2RQBCwmoZMG3DqDB-nJHSF_7PQP6NHKnH5lnxbdMvwY7HcSCrWZvawrSaFxIS69gEXXGfEVrAgY0BGjTgmll8juDRS9fGhDaPw',
    avatarInitials: 'SH',
    variant: 'gradient',
  },
  {
    id: '2',
    author: 'Ahmed M.',
    role: 'Local Guide',
    comment:
      "The curation is unmatched. Every recommendation I've followed from the \"Trending Discovery\" list has been phenomenal.",
    rating: 5,
    dishName: 'Spicy Tuna Roll',
    restaurantName: 'Goldfish Sushi',
    location: 'Jumeirah',
    dishImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV779PABJra2WoS5y89s2_fyuHYbStR1lyJpUDH_VD8M4dGxHwIlGdjPyDcGu_XoYsYVi0BxmLyfDO7aP1sfzXKtYZPHMwW9iuTxY98pPreQNm_Y2FHlTZ5fUp2rVIh07_pqmkgAIX3pJzns-V1qSjmXrg0ye-Pq0zj0bfdFcwmGF4ILRwn5A1DBtSYQd5wA1FlwrgnN7sN-yaiNDJhNZlBvWTa6H6r6NB_5AuGoqa5mo9QnG2SKGaQ7h8uTSqO4-HZj6lY_XXp5A',
    avatarInitials: 'AM',
    variant: 'default',
  },
  {
    id: '3',
    author: 'Linda C.',
    role: 'Casual Diner',
    comment:
      'Love the UI! Finding new gems in Dubai Marina is now just a tap away. The Pro membership is worth every dirham.',
    rating: 4,
    dishName: 'Black Cod Miso',
    restaurantName: 'Nobu',
    location: 'The Palm',
    dishImage:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBV779PABJra2WoS5y89s2_fyuHYbStR1lyJpUDH_VD8M4dGxHwIlGdjPyDcGu_XoYsYVi0BxmLyfDO7aP1sfzXKtYZPHMwW9iuTxY98pPreQNm_Y2FHlTZ5fUp2rVIh07_pqmkgAIX3pJzns-V1qSjmXrg0ye-Pq0zj0bfdFcwmGF4ILRwn5A1DBtSYQd5wA1FlwrgnN7sN-yaiNDJhNZlBvWTa6H6r6NB_5AuGoqa5mo9QnG2SKGaQ7h8uTSqO4-HZj6lY_XXp5A',
    avatarInitials: 'LC',
    variant: 'default',
  },
];

