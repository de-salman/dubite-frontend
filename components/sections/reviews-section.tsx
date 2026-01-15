import React from 'react';
import { ReviewCard, Review } from '../cards/review-card';
import { IconButton } from '../ui/icon-button';

interface ReviewsSectionProps {
  reviews: Review[];
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ reviews }) => {
  return (
    <section className="mb-20">
      <div className="flex items-end justify-between mb-8">
        <div>
          <span className="text-[#007AC4] text-xs font-black uppercase tracking-[0.3em] block mb-2">
            Our Foodies
          </span>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            What our community says
          </h2>
        </div>
        <div className="flex gap-2">
          <IconButton icon="chevron_left" />
          <IconButton icon="chevron_right" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

