'use client';

import React, { useState, FormEvent, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { SocialButton } from '@/components/ui/social-button';
import { register, getAllCities, City } from '@/lib/api';

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cityId, setCityId] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);
  const [isLoadingCities, setIsLoadingCities] = useState(true);

  // Fetch all cities on mount
  useEffect(() => {
    getAllCities()
      .then((citiesList) => {
        setCities(citiesList);
        // Set default to Dubai if available
        const dubai = citiesList.find((c) => c.slug === 'dubai');
        if (dubai) {
          setCityId(dubai.id);
        } else if (citiesList.length > 0) {
          setCityId(citiesList[0].id);
        }
        setIsLoadingCities(false);
      })
      .catch((err) => {
        console.error('Failed to fetch cities:', err);
        setError('Failed to load cities. Please refresh the page.');
        setIsLoadingCities(false);
      });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    // Validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    if (!cityId) {
      setError('Please select a city.');
      return;
    }

    setIsLoading(true);

    try {
      await register(name, email, password, cityId, 'email');
      router.push('/login?registered=true');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1 w-full">
        {/* Left Side - Image with Content */}
        <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCCgh5eLUqU_w8NcF0OD6Rof0xZGK0YUBx1HKJAsNBcXsgtLHL5G_2kvP7RIAKaiaaZH2mUxkWgEzxaWk8h7wCYBlt-J8h50pP_GgdRohCu1TeCaAkciCXM1_25RPPcijzNh3VSpvWK05mThlO9FfyRyLLvKOb0_DAYEpryqKtgFQbxo1tH8-F9CcUnsjbIo8P88m-sGvsxLdjjv4ZEmyt_KsN9ZHFPRgydpiibM6wbSG91yQtJ-JaF4p-rudn0skFudAXco3UwjAo")',
          }}
        />
        <div className="absolute inset-0 grad-blue-overlay backdrop-blur-[2px]" />
        <div className="relative z-10 p-16 flex flex-col justify-between h-full w-full">
          <div className="flex items-center gap-2">
            <div className="size-10 text-white">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
              </svg>
            </div>
            <h1 className="text-3xl font-extrabold tracking-tighter text-white">DUBITE</h1>
          </div>
          <div className="max-w-md">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest mb-6">
              Discovery Platform
            </span>
            <h2 className="text-5xl font-extrabold text-white leading-tight mb-6">
              Experience Dubai's flavors, dish by dish.
            </h2>
            <p className="text-white/80 text-lg font-medium leading-relaxed">
              Join thousands of foodies discovering the city's hidden culinary gems through a modern,
              dish-first perspective.
            </p>
          </div>
          <div className="flex items-center gap-8">
            <div className="flex -space-x-3">
              <div className="size-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                <img
                  alt="User"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBTU3JFJAbS2pHDQGHKwPyVLn4YhitmVAri87QfJZM1kzbMrBZ4dx8RInqFwgKtrTi0U3cKjZLNCrCFYgKCQZlVCHfmwbD7cCZHZLCBk11_IMBlxsLsTpZ6F7wiKuYkjdxagrwuElHBwbNtwrTck1tIh3xeRUi5_oiPPOoFWRfW9_TdB3-5kmxljAPGXdfn71WxuM6gH4nS5_Flnhj6G7Q34yEa8OBCcI_TJdAG197taeE1Oo9SKHD4SEExMZBgvm9l1LdZAjlhHA"
                />
              </div>
              <div className="size-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden">
                <img
                  alt="User"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD03Y2xZvDPi9enPhqq2fCn9lsWHFmOGefeKBPisSqs33FWR9bTQUGVdliK43wmxviBLQkXChCDxVOL0gVuDXI8zTTsyvF8txbC6jZRZ7zZJig0q6Z6zxsPBYk09VJFSkd8FtEKXMaRLwa3Mwpi7Lq7Ed3UcxDY0Wy4pY6B3GJKttrNdViodFk_cWR-rI6VA2QoYcLGpbyOabJ5xUSpn9khoGk-_qOzcHHNnqhZ2HU0BIi-uRsCGg0ApTncF9f09toP849c_lqYkAM"
                />
              </div>
              <div className="size-10 rounded-full border-2 border-white bg-slate-400 overflow-hidden">
                <img
                  alt="User"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAwlw2yYpP31BCN72EyLEq7NgycD6lHvQePAoHtbPfrWo8sZJ6EXNqEdx6KUY122oaE9Exr6ZclhxB4o5XGsuhPj-T4cs3SoDCOQLhqK-RwPq5aFjU4iHmA2YwT7HZqaHjy9Drnr39h96C-Z15-V3SimxopAbZejIPtTYtzA8CBP51nlp9mLQ2qRGiELY6hMm-Ftlr5Z-5tVHgh-TdV4FFt5gySkQvRctRxC1JNU62l8sayRTI5KzzIY8GR_nXia2QUCJydPR8Ayw"
                />
              </div>
              <div className="size-10 rounded-full border-2 border-white bg-[#C22F93] flex items-center justify-center text-[10px] font-bold text-white uppercase">
                +5k
              </div>
            </div>
            <p className="text-white/70 text-sm font-bold uppercase tracking-widest">
              Joined this week
            </p>
          </div>
        </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-16 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <div className="size-8 text-[#C22F93]">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tighter text-slate-900">DUBITE</h1>
          </div>

          <div className="mb-10">
            <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Create Account
            </h3>
            <p className="text-slate-500 text-sm font-medium">
              Start your culinary journey in Dubai today.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Full Name
              </label>
              <input
                className="form-input"
                placeholder="e.g. Sarah J. Ahmed"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Email Address
              </label>
              <input
                className="form-input"
                placeholder="name@example.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isLoading}
              />
            </div>
            <div>
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                Location
              </label>
              <select
                className="form-input"
                value={cityId}
                onChange={(e) => setCityId(e.target.value)}
                required
                disabled={isLoading || isLoadingCities}
              >
                {isLoadingCities ? (
                  <option value="">Loading cities...</option>
                ) : (
                  <>
                    <option value="">Select a city</option>
                    {cities.map((city) => (
                      <option key={city.id} value={city.id}>
                        {city.name}
                      </option>
                    ))}
                  </>
                )}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Password
                </label>
                <input
                  className="form-input"
                  placeholder="••••••••"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={isLoading}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Confirm
                </label>
                <input
                  className="form-input"
                  placeholder="••••••••"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  disabled={isLoading}
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isLoading || !cityId || isLoadingCities}
              className="grad-purple w-full py-4 rounded-xl text-white font-bold uppercase text-xs tracking-[0.2em] shadow-xl shadow-[#C22F93]/20 hover:brightness-110 transition-all active:scale-[0.98] mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
                <span className="bg-white px-4">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton provider="google" />
              <SocialButton provider="apple" />
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm font-medium text-slate-500">
              Already have an account?{' '}
              <Link href="/login" className="text-[#C22F93] font-bold hover:underline ml-1">
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-12 flex items-center justify-center gap-6">
            <Link
              href="/"
              className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-slate-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

