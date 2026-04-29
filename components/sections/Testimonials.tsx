"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { testimonials } from "@/lib/data";

import adpLogo from "@/assests/Accredian_files/adp.svg";
import bayerLogo from "@/assests/Accredian_files/bayer.svg";
import relianceLogo from "@/assests/Accredian_files/rel.png";

const logoMap: Record<string, string> = {
  ADP: adpLogo,
  Bayer: bayerLogo,
  Reliance: relianceLogo,
};

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const firstCard = track.querySelector<HTMLElement>("[data-testimonial-card]");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 24;
      const nextIndex = Math.round(track.scrollLeft / cardWidth);
      setActiveIndex(Math.min(testimonials.length - 1, Math.max(0, nextIndex)));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => track.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Adjust sensitivity
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    startX.current = e.touches[0].pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !trackRef.current) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="bg-white" id="testimonials">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Testimonials from Our <span className="text-[#1A73E8]">Partners</span>
          </h2>
          <p className="mt-2 text-base font-medium text-slate-700">
            What <span className="text-[#1A73E8]">Our Clients</span> Are Saying
          </p>
        </div>

        <div className="mt-12">
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseLeaveOrUp}
            onTouchMove={handleTouchMove}
            className={`no-scrollbar flex gap-6 overflow-x-auto pb-6 select-none ${
              isDragging 
                ? "cursor-grabbing scroll-auto snap-none" 
                : "cursor-grab scroll-smooth snap-x snap-mandatory"
            }`}
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.company}
                data-testimonial-card
                className="w-[85%] flex-none snap-start rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:w-[70%] lg:w-[48%]"
              >
                <Image
                  src={logoMap[testimonial.company]}
                  alt={`${testimonial.company} logo`}
                  className="pointer-events-none h-8 w-auto object-contain"
                />
                <p className="mt-6 text-sm text-slate-700">“{testimonial.quote}”</p>
                <p className="mt-4 text-xs font-semibold text-slate-500">
                  Enterprise Partnership
                </p>
                <p className="mt-1 text-xs text-slate-500">{testimonial.role}</p>
              </div>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">

  {testimonials.slice(0, 2).map((_, index) => (
    <span
      key={index}
      className={`h-2 w-2 rounded-full transition-colors duration-300 ${
        activeIndex === index ? "bg-[#1A73E8]" : "bg-slate-300"
      }`}
    />
  ))}
</div>
        </div>
      </div>
    </section>
  );
}