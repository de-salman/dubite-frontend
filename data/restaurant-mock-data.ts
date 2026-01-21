import { RestaurantDetail } from './restaurant-types';

export const getRestaurantById = (id: string): RestaurantDetail | null => {
  const restaurants: Record<string, RestaurantDetail> = {
    'the-alchemist-lab': {
      id: 'the-alchemist-lab',
      name: 'The Alchemist Lab',
      description: 'A culinary sanctuary where traditional Emirati flavors meet avant-garde techniques.',
      heroImage:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAL1neQmBLngr96Y7kVK_BsmrkGsd0StV8APxPHadrRrNPERJGlM6n0U--aaoztSynFXFn6Z5Wzn9L9-LmGTU3To2_gkgjVrIPkM0R-9A_cvAmPJ1hET86ZVVD1cgCQRbKQBbrgeUNETMh0QU1UVWBT1D6ESdGSWvpdVfvgQLubV7XsXSo-6lLZdvxJRldFGOxnhtUpJsTBXDcJLLLsF5ufDbPW004HA4zbhDq2xCobhHP5GoKaYmGE-dkHLAtnGAiDWx7KBR7GYoM',
      rating: 4.8,
      reviewCount: 1200,
      priceRange: '$$$$',
      cuisine: ['Emirati Fusion', 'Fine Dining'],
      location: {
        address: 'Sheikh Mohammed bin Rashid Blvd',
        city: 'Downtown Dubai',
        country: 'UAE',
      },
      isOpen: true,
      closingTime: '11:30 PM',
      about: {
        title: 'About The Concept',
        content: [
          "The Alchemist Lab is a culinary sanctuary where traditional Emirati flavors meet avant-garde techniques. Under the direction of Michelin-star Chef Omar Al-Farsi, our kitchen transforms classic ingredients into sensory experiences.",
          'Located in the heart of Downtown Dubai, we offer an intimate atmosphere where every dish tells a story of heritage and innovation. We specialize in molecular gastronomy applied to traditional Arabian Gulf seafood and meats.',
        ],
        experience: 'Signature Fine Dining • Romantic',
        averageCost: 'AED 450 for two people',
      },
      signatureDishes: [
        {
          id: '1',
          name: 'Wagyu Truffle Carpaccio',
          price: 145,
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAL1neQmBLngr96Y7kVK_BsmrkGsd0StV8APxPHadrRrNPERJGlM6n0U--aaoztSynFXFn6Z5Wzn9L9-LmGTU3To2_gkgjVrIPkM0R-9A_cvAmPJ1hET86ZVVD1cgCQRbKQBbrgeUNETMh0QU1UVWBT1D6ESdGSWvpdVfvgQLubV7XsXSo-6lLZdvxJRldFGOxnhtUpJsTBXDcJLLLsF5ufDbPW004HA4zbhDq2xCobhHP5GoKaYmGE-dkHLAtnGAiDWx7KBR7GYoM',
          rank: 1,
          isLarge: true,
        },
        {
          id: '2',
          name: 'Saffron Lobster Risotto',
          price: 210,
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAHsmhcX5APl5dxcb1kdCWDsimtEoMiFuzHI92zpNMoj5kXUJL3H3Qi3EwfXWXyn6Jjyins3tsTzYy4au_VjVd-Jg13oKlqoAZuZabjp87fPp0JTNXf2iH3YTb2fcUyCjAuhtZlfoo3H6yYVy9z4uNZeEEVvpIX3Ij3rovUSCfhlATAwRmuaDHb8mOFCKgqg5xC7xh9BXz2_qBJqqHolxSr07zLKOsFQ7LHAtpMq-lGXZpnhYGKsCLyd9NsJFbWp0xyHbWqYw6wMR4',
          rank: 2,
        },
        {
          id: '3',
          name: 'Burrata & Balsamic Pearls',
          price: 85,
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuCg0OCWHjo9fGkn3UDlKMHCaP40CjVxTxOzW5RcGIXchmX7XuXANhaao6d23FFip-Yn5KPCoNecu3zuDEtlcpv8uGjbNzLZCEl_3zVuOUX-74tqeH-SuNnLcUHsRBx9U0W7JQOjdfr8mT7HICoAxmRAZlCXhaIXsRRgSATvoBLLJzyTmi_J9vKkyXnNxZLxl-aWOooXEplQERHXj0dUeWZoTxg-bmfnRHEfH5xVR2felFTMqYUKWR__GYmdmsddDFDeRrDYYm1doTU',
          rank: 3,
        },
        {
          id: '4',
          name: 'Gold Flaked Date Pudding',
          price: 75,
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuDHGWUWGO0g31j68iw-jAQ2mKQ7nQZyJzbllJVU-LtkXYTz4yloBOvYGmDrkgYWVbFXLfTBwQ-SCEOxgxOHQrEebwGxUUDi3nB6UNxMhAN5KdsqyLo8QTnzweWbjGHqlhD0CMTPoQbr0JbfSIkZjsZtz856br2SsyLuMDytoHEWGt7Pgs2rYNVIuEozQlCBsIuSzo_6I5G4Ydh7BcDA-htbxBhczYyE9BnYrxBmxmevBGB3Ca64hengZmdPDdwCapIZZ__EYagF50A',
          rank: 4,
        },
        {
          id: '5',
          name: 'Spiced Lamb Shoulder',
          price: 190,
          image:
            'https://lh3.googleusercontent.com/aida-public/AB6AXuAL1neQmBLngr96Y7kVK_BsmrkGsd0StV8APxPHadrRrNPERJGlM6n0U--aaoztSynFXFn6Z5Wzn9L9-LmGTU3To2_gkgjVrIPkM0R-9A_cvAmPJ1hET86ZVVD1cgCQRbKQBbrgeUNETMh0QU1UVWBT1D6ESdGSWvpdVfvgQLubV7XsXSo-6lLZdvxJRldFGOxnhtUpJsTBXDcJLLLsF5ufDbPW004HA4zbhDq2xCobhHP5GoKaYmGE-dkHLAtnGAiDWx7KBR7GYoM',
          rank: 5,
        },
      ],
    },
  };

  return restaurants[id] || null;
};

