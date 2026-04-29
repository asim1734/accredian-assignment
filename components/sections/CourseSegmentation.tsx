"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import programImage from "@/assests/Accredian_files/project-management-v2.webp";
import industryImage from "@/assests/Accredian_files/digital-transformation-v2.webp";
import topicImage from "@/assests/Accredian_files/data-science-v2.webp";
import levelImage from "@/assests/Accredian_files/senior-management-v2.webp";

const cards = [
  {
    title: "Program Specific",
    subtitle: "Certificate, Executive, Post Graduate Certificate",
    image: programImage,
  },
  {
    title: "Industry Specific",
    subtitle: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
    image: industryImage,
  },
  {
    title: "Topic Specific",
    subtitle: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
    image: topicImage,
  },
  {
    title: "Level Specific",
    subtitle: "Senior Leadership, Mid-Career Professionals, Freshers",
    image: levelImage,
  },
];

export default function CourseSegmentation() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const firstCard = track.querySelector<HTMLElement>("[data-course-card]");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth + 16;
      const nextIndex = Math.round(track.scrollLeft / cardWidth);
      setActiveIndex(Math.min(cards.length - 1, Math.max(0, nextIndex)));
    };

    track.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
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
    const walk = (x - startX.current) * 1.2;
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
    const walk = (x - startX.current) * 1.2;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <section className="bg-white" id="course-segmentation">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Tailored <span className="text-[#1A73E8]">Course Segmentation</span>
          </h2>
          <p className="mt-2 text-xs font-medium text-slate-700">
            Explore <span className="text-[#1A73E8]">Custom-fit Courses</span> Designed to Address
            Every Professional Focus
          </p>
        </div>
        <div className="mt-8">
          <div
            ref={trackRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeaveOrUp}
            onMouseUp={handleMouseLeaveOrUp}
            onMouseMove={handleMouseMove}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleMouseLeaveOrUp}
            onTouchMove={handleTouchMove}
            className={`no-scrollbar flex gap-4 overflow-x-auto pb-4 select-none lg:grid lg:overflow-visible lg:pb-0 lg:grid-cols-4 ${
              isDragging
                ? "cursor-grabbing scroll-auto snap-none"
                : "cursor-grab scroll-smooth snap-x snap-mandatory"
            }`}
          >
            {cards.map((card) => (
              <article
                key={card.title}
                data-course-card
                className="mx-auto w-[85%] flex-none snap-start overflow-hidden rounded-2xl border border-slate-200 bg-white text-center shadow-sm sm:w-[70%] lg:w-full"
              >
                <div className="relative h-40">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <div className="px-4 py-4">
                  <h3 className="text-sm font-bold text-[#1A73E8]">{card.title}</h3>
                  <p className="mt-2 text-[11px] text-slate-600">{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-2 flex items-center justify-center gap-2 lg:hidden">
            {cards.map((card, index) => (
              <span
                key={card.title}
                className={`h-2 w-2 rounded-full ${
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
