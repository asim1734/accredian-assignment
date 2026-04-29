"use client";

import { useState } from "react";
import { faqCategories } from "@/lib/data";

export default function FAQs() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white" id="faqs">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Frequently Asked <span className="text-[#1A73E8]">Questions</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-[260px_1fr]">
          <div className="space-y-4">
            {faqCategories.map((category) => {
              const isActive = category.title === activeCategory.title;
              return (
                <button
                  key={category.title}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`w-full rounded-lg border px-4 py-4 text-center text-sm font-semibold transition-colors duration-200 shadow-sm ${
                    isActive
                      ? "border-[#1A73E8] bg-white text-[#1A73E8]"
                      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                  }`}
                >
                  {category.title}
                </button>
              );
            })}
          </div>
          <div className="space-y-6">
            {activeCategory.questions.map((question, index) => {
              const isOpen = openIndex === index;
              return (
                <button
                  key={question.question}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full border-b pb-4 text-left select-none ${
                    isOpen
                      ? "border-[#1A73E8] text-[#1A73E8]"
                      : "border-slate-200 text-slate-800"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      {question.question}
                    </p>
                    <span
                      className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    >
                      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
                        <path
                          d="M5 7l5 6 5-6"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                  {isOpen ? (
                    <p className="mt-3 text-sm text-slate-600">
                      {question.answer}
                    </p>
                  ) : null}
                </button>
              );
            })}
            <div className="pt-4 text-center">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-enquire-modal"))}
                className="rounded-lg bg-[#1A73E8] px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-[#155CC4]"
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
