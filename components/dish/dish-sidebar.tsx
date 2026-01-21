import React from 'react';
import { DishDetail } from '@/data/dish-types';
import { Icon } from '../ui/icon';

interface DishSidebarProps {
  dish: DishDetail;
}

export const DishSidebar: React.FC<DishSidebarProps> = ({ dish }) => {
  return (
    <div className="lg:col-span-1">
      <div className="sticky top-24 space-y-6">
        {/* Price Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
              <span className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                Price per Dish
              </span>
              <span className="text-4xl font-black text-gray-900">AED {dish.price}</span>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs font-extrabold text-gray-400 uppercase tracking-widest">
                Where to find it
              </h4>
              <div className="flex items-start gap-4">
                <div className="size-14 rounded-xl blue-gradient flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-[#009BDF]/20">
                  <Icon name="restaurant" className="text-3xl" />
                </div>
                <div>
                  <h5 className="text-xl font-extrabold text-gray-900 leading-tight mb-1">
                    {dish.restaurant.name}
                  </h5>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {dish.restaurant.address}
                    <br />
                    {dish.restaurant.city}, {dish.restaurant.country}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <button className="w-full border-2 border-[#007AC4] text-[#007AC4] hover:bg-[#007AC4] hover:text-white font-extrabold py-4 rounded-xl flex items-center justify-center gap-3 transition-all tracking-tight">
                  <Icon name="map" />
                  Visit Restaurant
                </button>
                {dish.restaurant.isOpen && (
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <span className="size-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-bold text-green-600">
                      Open Now {dish.restaurant.closingTime && `• Closes ${dish.restaurant.closingTime}`}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Map Preview */}
        <div className="rounded-2xl overflow-hidden h-52 relative border border-gray-100 shadow-sm group">
          <div
            className="absolute inset-0 bg-gray-200 transition-transform duration-700 group-hover:scale-110 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSLbVFtDN1YjpwSdQxIrCs2EUG6GwT8rkryfoI3rgspO2ibLnCrIZ4RfcgF_hDsYVF0czntAHvfBVr1773tT0H0SibuJ2ffa4hRleBhVVTUVVh0zugEwRf45YzXV5Bj_KB4AdxHmKH1a_8oTxwZ_poIwC_tQALi8kNleUjki9iV0hLrMqgOu07RtLFnACb-XibQ5xKpEIhNpUHtm7IJkTl6rK7IZyVL-EBaxn3yNwTzEGMjIKXeq8WlLU_FURQcGpOojLwm_YLrbc")',
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="size-12 bg-white/90 backdrop-blur shadow-xl rounded-full flex items-center justify-center border-2 border-[#007AC4]">
              <Icon name="location_on" className="text-[#007AC4] font-black" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

