import React from 'react';
import Link from 'next/link';

interface BreadcrumbProps {
  location: string;
  category: string;
  dishName: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ location, category, dishName }) => {
  // Normalize category slug (handle spaces, special characters)
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  
  return (
    <div className="flex flex-wrap items-center gap-2 mb-6">
      <Link href="/" className="text-gray-500 text-sm font-medium hover:underline">
        {location}
      </Link>
      <span className="text-gray-400 text-sm">/</span>
      <Link href={`/category/${categorySlug}`} className="text-gray-500 text-sm font-medium hover:underline">
        {category}
      </Link>
      <span className="text-gray-400 text-sm">/</span>
      <span className="text-[#007AC4] text-sm font-semibold">{dishName}</span>
    </div>
  );
};

