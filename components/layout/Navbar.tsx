"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import EnquireButton from "@/components/common/EnquireButton";

// Path established from previous successful render
import logo from "../../assests/Accredian_files/accredian.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href.replace("#", ""))
      .concat(["domain-expertise", "course-segmentation", "who-should-join", "lead-capture"]);
    
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const sortedSections = [...sections].sort((a, b) => a.offsetTop - b.offsetTop);

    let rafId = 0;
    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const offset = 140;
        const scrollY = window.scrollY + offset;
        let currentSection = sortedSections[0]?.id ?? "home";

        for (const section of sortedSections) {
          if (scrollY >= section.offsetTop) {
            currentSection = section.id;
          }
        }
        setActiveSection(currentSection);
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Container */}
        <a href="#home" className="relative block h-10 w-40">
          <Image 
            src={logo}
            alt="Accredian"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-10 lg:flex">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative pb-1 text-[15px] font-semibold transition-all duration-200 hover:text-[#1A73E8] ${
                    isActive ? "text-[#1A73E8]" : "text-[#2C3E50]"
                  }`}
                >
                  {link.label}
                  {/* Underline Fix: Now sits 2px below the text */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 h-[2.5px] w-full rounded-full bg-[#1A73E8]" />
                  )}
                </a>
              );
            })}
          </div>
          
          
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="rounded-lg p-2 text-slate-700 lg:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-6 rounded-full bg-current transition-all ${isOpen ? "translate-y-2 rotate-45" : ""}`}></span>
            <span className={`h-0.5 w-6 rounded-full bg-current transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`h-0.5 w-6 rounded-full bg-current transition-all ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${isOpen ? "max-h-96 border-t border-slate-50" : "max-h-0"}`}>
        <div className="flex flex-col gap-5 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`text-base font-semibold ${activeSection === link.href.replace("#", "") ? "text-[#1A73E8]" : "text-[#2C3E50]"}`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <EnquireButton
            label="Enquire Now"
            className="w-full rounded-full bg-[#1A73E8] py-4 text-center text-base font-bold text-white"
          />
        </div>
      </div>
    </header>
  );
}