"use client";

import { Headset, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LeadCaptureForm() {
  return (
    <section className="bg-white" id="lead-capture">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        {/* Main Banner Container */}
        <div className="relative overflow-hidden rounded-xl bg-[#1A73E8] px-8 py-10 text-white shadow-md md:px-16 md:py-14">
          
          {/* Background Decorative Circles */}
          <div className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full border-[20px] border-white/5 md:h-96 md:w-96 md:border-[40px]" />
          <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full border-[20px] border-white/10 md:h-[500px] md:w-[500px] md:border-[60px]" />

          <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:justify-between">
            
            {/* Left Content: Icon + Text */}
            <div className="flex flex-col items-center gap-6 md:flex-row md:text-left">
              {/* Icon Box */}
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                <Headset className="h-10 w-10 text-[#1A73E8]" strokeWidth={1.5} />
              </div>

              {/* Headlines */}
              <div className="space-y-1 text-center md:text-left">
                <h2 className="text-xl font-semibold tracking-tight md:text-3xl">
                  Want to Learn More About Our Training Solutions?
                </h2>
                <p className="text-sm font-medium text-white/90 md:text-lg">
                  Get Expert Guidance for Your Team&apos;s Success!
                </p>
              </div>
            </div>

            {/* Right Action: Button */}
            <Link
              href="/contact"
              className="flex items-center gap-2 rounded-lg bg-white px-8 py-3.5 text-sm font-bold text-[#1A73E8] transition-all hover:bg-blue-50 md:text-base"
            >
              Contact Us
              <ChevronRight className="h-4 w-4" strokeWidth={3} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}