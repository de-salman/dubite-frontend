import React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { SocialButton } from '@/components/ui/social-button';

export default function LoginPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="flex flex-1 w-full">
        {/* Left Side - Image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzhrncxEW2BomrFLO-xcUJw7g1XBqaQ9ba3ciqMSugrjyJujsZhKXsZjAqqHxOFxcVHpS2OJHfSm8ta1dgaCWKie5In2i_SadL8R_y_aAZzYjEy5QoT-NQHJbg8TggE8uGtfispTmnRol5g_o5Y614pBFzpSWuYeNXA-0s8nhtb2RQBCwmoZMG3DqDB-nJHSF_7PQP6NHKnH5lnxbdMvwY7HcSCrWZvawrSaFxIS69gEXXGfEVrAgY0BGjTgmll8juDRS9fGhDaPw")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-black/10" />
          <div className="absolute bottom-16 left-16 right-16 text-white">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 block opacity-80">
              Experience Excellence
            </span>
            <h2 className="text-4xl font-extrabold tracking-tight leading-tight">
              DISCOVER THE ART <br />
              OF DUBAI DINING
            </h2>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full lg:w-1/2 flex flex-col relative">
          <div className="flex-1 flex items-center justify-center px-8 lg:px-24">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2 uppercase">
                Welcome Back
              </h2>
              <p className="text-slate-500 text-sm font-medium">
                Please enter your details to sign in to your account.
              </p>
            </div>

            <form className="space-y-6">
              <Input
                label="Email or Username"
                placeholder="alex@dubai.com"
                type="text"
                variant="blue"
              />
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Password
                  </label>
                  <Link
                    href="/"
                    className="text-[10px] font-bold uppercase tracking-widest text-[#C22F93] hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <input
                  className="form-input-blue"
                  placeholder="••••••••"
                  type="password"
                />
              </div>
              <button
                type="submit"
                className="w-full grad-purple text-white py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs shadow-xl shadow-[#C22F93]/20 hover:brightness-110 transition-all"
              >
                Sign In
              </button>
            </form>

            <div className="relative my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-100"></div>
              </div>
              <div className="relative flex justify-center text-[10px] font-black uppercase tracking-widest">
                <span className="bg-white px-4 text-slate-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <SocialButton provider="google" />
              <SocialButton provider="facebook" />
            </div>

            <div className="mt-12 text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                New to Dubite?{' '}
                <Link href="/register" className="text-[#009BDF] hover:underline ml-1">
                  Join Now
                </Link>
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

