import React from 'react';
import { RestaurantDetail } from '@/data/restaurant-types';
import { Icon } from '../ui/icon';

interface RestaurantLocationCardProps {
  restaurant: RestaurantDetail;
}

export const RestaurantLocationCard: React.FC<RestaurantLocationCardProps> = ({ restaurant }) => {
  return (
    <div className="lg:col-span-5">
      <div className="rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/40 overflow-hidden bg-white">
        <div className="h-64 w-full relative">
          <div className="absolute inset-0 bg-gray-100">
            <div
              className="w-full h-full bg-cover bg-center grayscale opacity-40 mix-blend-multiply"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxTdwBqzVWPUir8WPot2WWlT5aiR4JELoi1ySkiSzCFm-Mup6qEar3CIaZxut-uIeczuJyjhviQ1iLj7Q6PC503vZ2TyKrabhDwAe3ytbNtCVdZ4k4pnHQEX-n6sIUjjl8DklS1E_FOjPrWmK5syCWvxQatAXMou8hR8mZm-Vt-6V3bZo-leak0UOQZ1_Z2GfNGf2uHxF5SH5qOMpEGKzVM_qZSevOJ53diIM_6usGiYH4o7Ccu3hCdLfLpHGQKRrUgu46MIyTpI4')",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="size-14 bg-[#007AC4] rounded-full flex items-center justify-center shadow-2xl ring-[8px] ring-[#007AC4]/10">
                <Icon name="location_on" className="text-white text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-lg font-extrabold text-[#161118]">{restaurant.location.city}</h4>
                <p className="text-gray-500 font-semibold text-sm mt-0.5">
                  {restaurant.location.address}, {restaurant.location.country}
                </p>
              </div>
              <div className="text-right">
                {restaurant.isOpen ? (
                  <>
                    <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1 rounded-full border border-green-100 uppercase">
                      OPEN NOW
                    </span>
                    {restaurant.closingTime && (
                      <p className="text-[10px] text-gray-400 font-bold mt-1.5 uppercase tracking-wide">
                        Closes {restaurant.closingTime}
                      </p>
                    )}
                  </>
                ) : (
                  <span className="text-[10px] font-black text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100 uppercase">
                    CLOSED
                  </span>
                )}
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 rounded-2xl py-4 bg-[#007AC4]/5 text-[#007AC4] text-sm font-bold hover:bg-[#007AC4]/10 transition-all border-2 border-transparent uppercase tracking-wider">
              <Icon name="directions" className="text-xl" />
              Get Directions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

