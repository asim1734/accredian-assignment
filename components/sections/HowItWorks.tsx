import Image from "next/image";

import catFramework from "@/assests/Accredian_files/catV2.svg";
import { steps } from "@/lib/data";

export default function HowItWorks() {
  return (
    <section className="bg-white" id="cat-section">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div id="cat" className="scroll-mt-24">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              The <span className="text-[#1A73E8]">CAT Framework</span>
            </h2>
            <p className="mt-2 text-base font-medium text-slate-700">
              Our Proven Approach to <span className="text-[#1A73E8]">Learning Excellence</span>
            </p>
          </div>
          <div className="mt-10">
            <Image
              src={catFramework}
              alt="The CAT Framework"
              className="mx-auto h-auto w-full max-w-5xl object-contain"
              loading="eager"
              priority
            />
          </div>
        </div>

        <div id="how-it-works" className="mt-16 scroll-mt-24 text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            How We <span className="text-[#1A73E8]">Deliver Results</span> That Matter?
          </h2>
          <p className="mt-2 text-base font-medium text-slate-700">
            A Structured Three-Step Approach to <span className="text-[#1A73E8]">Skill Development</span>
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-blue-200 bg-blue-50/60 p-5 text-center shadow-sm"
            >
              <span className="absolute left-4 top-4 inline-flex h-7 w-7 items-center justify-center rounded-full border border-blue-300 bg-white text-xs font-semibold text-[#1A73E8]">
                {index + 1}
              </span>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1A73E8] text-white shadow-sm">
                {index === 0 ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                    <path d="M4 20h16" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M7 16v-4" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M12 16v-7" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M17 16v-2" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ) : index === 1 ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                    <rect x="4" y="5" width="16" height="10" rx="2" strokeWidth="1.6" />
                    <path d="M8 19h8" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M12 15v4" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                    <rect x="4" y="5" width="16" height="10" rx="2" strokeWidth="1.6" />
                    <path d="M9 9l6 3-6 3V9Z" strokeWidth="1.6" strokeLinejoin="round" />
                    <path d="M8 19h8" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                )}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              <span className="absolute -left-2 top-8 hidden h-16 w-1 rounded-full bg-[#1A73E8] md:block"></span>
              <span className="absolute -right-2 top-8 hidden h-16 w-1 rounded-full bg-[#1A73E8] md:block"></span>
            </div>
          ))}
        </div>
        <div id="faqs" className="sr-only" />
      </div>
    </section>
  );
}
