"use client";

import Image from "next/image";
import EnquireButton from "@/components/common/EnquireButton";

// Relative path to skip alias issues:
// Climbing up from components/layout/ to the root
import logo from "../../assests/Accredian_files/accredian.png";

// Filled Social Icons (Solid Style)
const FacebookFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
);

const LinkedinFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

const TwitterFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
);

const InstagramFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
);

const YoutubeFilled = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
);

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 text-slate-900">
      <div className="mx-auto w-full max-w-7xl px-6">
        
        {/* TOP ROW: Logo above Socials */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
          <div className="flex flex-col items-start gap-4">
            {/* Logo Wrapper */}
            <div className="relative h-12 w-44">
              <Image 
                src={logo} 
                alt="Accredian" 
                fill
                className="object-contain object-left"
                priority
              />
            </div>
            
            {/* Socials - Directly below logo */}
            <div className="flex items-center gap-4 text-black/80">
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><FacebookFilled /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><LinkedinFilled /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><TwitterFilled /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><InstagramFilled /></a>
              <a href="#" className="hover:text-[#1A73E8] transition-colors"><YoutubeFilled /></a>
            </div>
          </div>

          {/* Right side: Button and text */}
          <div className="flex flex-col items-center md:items-end gap-1.5">
            <EnquireButton 
              label="Enquire Now"
              className="min-w-[170px] rounded-lg bg-[#1A73E8] py-3 text-sm font-bold text-white shadow-md hover:bg-blue-700"
            />
            <p className="text-[12px] font-medium text-slate-600">Speak with our Advisor</p>
          </div>
        </div>

        {/* DARK Divider */}
        <div className="mt-10 mb-12 h-[1px] w-full bg-black/90" />

        {/* MIDDLE ROW: Columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div className="space-y-4">
            <h4 className="text-[17px] font-bold text-black">Accredian</h4>
            <ul className="space-y-3 text-[15px] font-medium text-slate-700">
              <li><a href="#" className="hover:text-[#1A73E8] transition-colors">About</a></li>
              <li><a href="#" className="hover:text-[#1A73E8] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#1A73E8] transition-colors">Why Accredian</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-[17px] font-bold text-black">Contact Us</h4>
            <div className="space-y-3 text-[15px] font-medium text-slate-700">
              <p>
                Email us: <a href="mailto:enterprise@accredian.com" className="text-[#1A73E8] hover:underline">enterprise@accredian.com</a>
              </p>
              <p className="max-w-md leading-relaxed">
                Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18, Gurugram, Haryana
              </p>
            </div>
          </div>
        </div>

        {/* DARK Divider */}
        <div className="mt-12 mb-8 h-[1px] w-full bg-black/90" />

        {/* BOTTOM ROW: Copyright */}
        <div className="text-center text-[14px] font-medium text-slate-600">
          © 2026 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}