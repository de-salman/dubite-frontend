import React from 'react';
import { Icon } from '../ui/icon';

export interface Review {
  id: string;
  author: string;
  role: string;
  comment: string;
  rating: number;
  dishName: string;
  restaurantName: string;
  location: string;
  dishImage: string;
  avatarInitials: string;
  variant?: 'gradient' | 'default';
}

interface ReviewCardProps {
  review: Review;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  const isGradient = review.variant === 'gradient';

  return (
    <div
        className={`${
          isGradient
            ? 'grad-purple rounded-3xl p-8 text-white shadow-xl relative overflow-hidden group flex flex-col justify-between h-full'
            : 'bento-card p-8 bg-white border-[#C22F93]/10 flex flex-col justify-between h-full'
        }`}
    >
      <div>
        <div className="flex items-center gap-3 mb-6">
          <div
            className={`size-10 rounded-full ${
              isGradient
                ? 'bg-white/20 flex items-center justify-center font-bold'
                : 'grad-purple text-white flex items-center justify-center font-bold'
            }`}
          >
            {review.avatarInitials}
          </div>
          <div>
            <p className={`text-sm font-bold ${isGradient ? 'text-white' : 'text-slate-900'}`}>
              {review.author}
            </p>
            <p
              className={`text-[9px] uppercase tracking-widest font-black ${
                isGradient ? 'text-white/70' : 'text-[#C22F93]'
              }`}
            >
              {review.role}
            </p>
          </div>
        </div>
        <p
          className={`text-sm leading-relaxed italic mb-6 ${
            isGradient ? 'text-white' : 'text-slate-600'
          }`}
        >
          "{review.comment}"
        </p>
        <div className={`flex mb-8 ${isGradient ? 'text-white' : 'text-[#C22F93]'}`}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon
              key={i}
              name="star"
              className={`text-sm ${i < review.rating ? 'fill-current' : ''}`}
            />
          ))}
        </div>
      </div>
      <div
        className={`${
          isGradient
            ? 'bg-white/10 backdrop-blur-md rounded-2xl p-3 flex items-center gap-3 border border-white/10 mt-auto'
            : 'bg-slate-50 rounded-2xl p-3 flex items-center gap-3 border border-slate-100 mt-auto'
        }`}
      >
        <div
          className="size-12 rounded-lg bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(${review.dishImage})` }}
        />
        <div className="min-w-0">
          <p
            className={`text-[10px] font-black uppercase tracking-widest truncate ${
              isGradient ? 'text-white' : 'text-slate-900'
            }`}
          >
            {review.dishName}
          </p>
          <p
            className={`text-[9px] truncate uppercase font-bold ${
              isGradient ? 'text-white/70' : 'text-slate-400'
            }`}
          >
            {review.restaurantName} • {review.location}
          </p>
        </div>
      </div>
    </div>
  );
};

