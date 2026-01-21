import React from 'react';
import { DishReview } from '@/data/dish-types';
import { Icon } from '../ui/icon';

interface DishReviewCardProps {
  review: DishReview;
  variant?: 'default' | 'featured';
}

export const DishReviewCard: React.FC<DishReviewCardProps> = ({ review, variant = 'default' }) => {
  if (variant === 'featured') {
    return (
      <div className="purple-gradient rounded-2xl p-6 shadow-xl flex flex-col text-white transform hover:scale-[1.02] transition-transform h-full">
        <div className="flex-grow">
          <div className="flex items-center gap-3 mb-4">
            <div
              className="size-12 rounded-full border-2 border-white/30 bg-cover bg-center"
              style={{ backgroundImage: `url(${review.avatar})` }}
            />
            <div>
              <p className="text-sm font-bold">{review.author}</p>
              {review.badge && (
                <span className="bg-white/20 text-[9px] px-2 py-0.5 rounded-full uppercase font-extrabold tracking-tighter">
                  {review.badge}
                </span>
              )}
            </div>
          </div>
          <p className="text-white text-sm font-medium leading-relaxed mb-6">{review.comment}</p>
        </div>
        <div className="pt-4 border-t border-white/20 flex items-center gap-3">
          <div className="size-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Icon name="auto_awesome" className="text-sm text-white" />
          </div>
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-white">
              {review.restaurantName}
            </p>
            <p className="text-[9px] text-white/60 font-bold uppercase tracking-widest">
              {review.dishName}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col h-full">
      <div className="flex-grow">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="size-12 rounded-full bg-gray-200 border border-gray-100 bg-cover bg-center"
            style={{ backgroundImage: `url(${review.avatar})` }}
          />
          <div>
            <p className="text-sm font-bold">{review.author}</p>
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Icon
                  key={i}
                  name="star"
                  className={`text-[14px] ${i < review.rating ? 'filled-icon' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{review.comment}"</p>
      </div>
      <div className="pt-4 border-t border-gray-50 flex items-center gap-3">
        <div className="size-8 rounded-lg bg-gray-50 flex items-center justify-center">
          <Icon name="restaurant" className="text-sm text-[#007AC4]" />
        </div>
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-widest text-gray-900">
            {review.restaurantName}
          </p>
          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
            {review.dishName}
          </p>
        </div>
      </div>
    </div>
  );
};

