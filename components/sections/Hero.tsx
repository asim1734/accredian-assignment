"use client";

import Image from "next/image";
import { heroContent } from "@/lib/data";
import EnquireButton from "@/components/common/EnquireButton";
import heroImage from "@/assests/home.png";

const CheckIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export default function Hero() {
  return (
    <section className="bg-white" id="home">
      <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:py-10">
        {/* Slightly smaller container rounding and padding */}
        <div className="rounded-[28px] bg-[#EEF5FF] px-6 py-8 sm:px-8 sm:py-10 lg:px-16 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-2">
            
            {/* Left Content - Reduced text sizes */}
            <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
              <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl">
                Next-Gen <br />
                <span className="text-[#1A73E8]">Expertise</span> For <br />
                Your <span className="text-[#1A73E8]">Enterprise</span>
              </h1>

              <p className="mx-auto max-w-sm text-sm font-medium text-slate-700 sm:text-base lg:mx-0">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Badges Section - Tighter spacing */}
              <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 lg:justify-start">
                {heroContent.badges.map((badge) => (
                  <div key={badge} className="flex items-center gap-1.5">
                    <CheckIcon />
                    <span className="text-xs font-bold text-slate-800">{badge}</span>
                  </div>
                ))}
              </div>

              {/* Compact Button */}
              <div className="pt-2 flex justify-center lg:justify-start">
                <EnquireButton
                  label="Enquire Now"
                  className="rounded-lg bg-[#1A73E8] px-8 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-[#155CC4]"
                />
              </div>
            </div>

            {/* Right Image Section - Capped width */}
            <div className="order-1 relative flex justify-center lg:order-2 lg:justify-end">
              <div className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[440px]">
                <Image
                  src={heroImage}
                  alt="Enterprise learning team"
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}