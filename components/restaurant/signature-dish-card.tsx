import React from 'react';
import Link from 'next/link';
import { SignatureDish } from '@/data/restaurant-types';

interface SignatureDishCardProps {
  dish: SignatureDish;
}

export const SignatureDishCard: React.FC<SignatureDishCardProps> = ({ dish }) => {
  const isLarge = dish.isLarge || dish.rank === 1;

  return (
    <Link
      href={`/dish/${dish.id}`}
      className={`group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer ${
        isLarge ? 'col-span-2 row-span-2' : ''
      }`}
    >
      <img
        className={`w-full h-full object-cover ${
          isLarge ? 'group-hover:scale-105' : 'group-hover:scale-110'
        } transition-transform duration-700`}
        src={dish.image}
        alt={dish.name}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      {dish.rank === 1 ? (
        <div className="absolute top-6 left-6 z-10 rank-badge text-white text-xs font-black px-4 py-2 rounded-full shadow-lg">
          #1 SIGNATURE
        </div>
      ) : (
        <div className="absolute top-4 left-4 z-10 rank-badge text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
          #{dish.rank}
        </div>
      )}
      <div className={`absolute ${isLarge ? 'bottom-8 left-8' : 'bottom-5 left-5 right-5'}`}>
        <h4 className={`text-white font-bold leading-tight mb-1 ${isLarge ? 'text-3xl' : 'text-lg'}`}>
          {dish.name}
        </h4>
        <p
          className={`font-bold ${
            isLarge
              ? 'text-[#ad2bee] bg-white inline-block px-3 py-1 rounded-lg text-sm uppercase tracking-widest'
              : 'text-white/80 text-xs'
          }`}
        >
          {isLarge ? '' : 'AED '}
          {dish.price}
        </p>
      </div>
    </Link>
  );
};

