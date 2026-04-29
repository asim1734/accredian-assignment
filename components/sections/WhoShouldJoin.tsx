import Image from "next/image";
import type React from "react";

import teamImage from "@/assests/Accredian_files/imagehuman.png";

type GroupIcon = "monitor" | "x" | "cap" | "briefcase";

const groups: { title: string; description: string; icon: GroupIcon }[] = [
  {
    title: "Tech Professionals",
    description: "Enhance expertise, embrace tech, drive innovation.",
    icon: "monitor",
  },
  {
    title: "Non-Tech Professionals",
    description: "Adapt digitally, collaborate in tech environments.",
    icon: "x",
  },
  {
    title: "Emerging Professionals",
    description: "Develop powerful skills for rapid career growth.",
    icon: "cap",
  },
  {
    title: "Senior Professionals",
    description: "Strengthen leadership, enhance strategic decisions.",
    icon: "briefcase",
  },
];

const iconClass = "h-10 w-10 text-white";

const icons: Record<GroupIcon, React.ReactNode> = {
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
      <path d="M8 20h8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16v4" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 10l2 2 4-4" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <rect x="3" y="4" width="18" height="12" rx="2" strokeWidth="1.5" />
      <path d="M8 8l8 8" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 8l-8 8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  cap: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <path d="M3 10l9-4 9 4-9 4-9-4Z" strokeWidth="1.5" />
      <path d="M6 12v4c3 2 9 2 12 0v-4" strokeWidth="1.5" />
    </svg>
  ),
  briefcase: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClass}>
      <rect x="3" y="7" width="18" height="12" rx="2" strokeWidth="1.5" />
      <path d="M9 7V5h6v2" strokeWidth="1.5" />
      <path d="M3 12h18" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function WhoShouldJoin() {
  return (
    <section className="bg-white" id="who-should-join">
      <div className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-[#1A73E8] px-8 py-10 text-white shadow-sm md:px-12 md:py-12">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
                Who Should Join?
              </p>
              <h2 className="text-3xl font-bold">Strategic Skill Enhancement</h2>
              <div className="mt-6 hidden lg:block">
                <Image
                  src={teamImage}
                  alt="Team members"
                  className="h-auto w-full max-w-sm object-contain"
                  loading="eager"
                  priority
                />
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              {groups.map((group) => (
                <div key={group.title} className="space-y-3">
                  {icons[group.icon]}
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                  <p className="text-sm text-white/80">{group.description}</p>
                </div>
              ))}
            </div>
            <div className="hidden lg:hidden">
              <Image
                src={teamImage}
                alt="Team members"
                className="mt-4 h-auto w-full max-w-xs object-contain"
                loading="eager"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
