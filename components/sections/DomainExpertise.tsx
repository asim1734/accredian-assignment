import { domainExpertise } from "@/lib/data";

const iconClasses = "h-9 w-9 text-[#1A73E8] stroke-[2]";

const icons = {
  lightbulb: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <path d="M9 18h6" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10 22h4" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M8 14c-1.8-1.4-3-3.6-3-6a7 7 0 0 1 14 0c0 2.4-1.2 4.6-3 6"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  brain: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <path
        d="M8 7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1a3 3 0 0 1-1 2.2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 9a3 3 0 0 0 0 6v1a3 3 0 0 0 3 3h2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M18 9a3 3 0 0 1 0 6v1a3 3 0 0 1-3 3h-2"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <circle cx="12" cy="7" r="3" strokeWidth="1.5" />
      <path d="M5 20c1.5-4 12.5-4 14 0" strokeWidth="1.5" />
      <path d="M3 11c2-1.8 4-1.8 6 0" strokeWidth="1.5" />
      <path d="M15 11c2-1.8 4-1.8 6 0" strokeWidth="1.5" />
    </svg>
  ),
  chart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <path d="M4 20h16" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M7 16v-5" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 16v-9" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M17 16v-3" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  gear: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <circle cx="12" cy="12" r="3" strokeWidth="1.5" />
      <path
        d="M19 12a7 7 0 0 0-.1-1l2-1.2-2-3.4-2.3.7a6.8 6.8 0 0 0-1.6-.9L14 3h-4l-.9 2.2c-.6.2-1.1.5-1.6.9l-2.3-.7-2 3.4 2 1.2a7 7 0 0 0 0 2l-2 1.2 2 3.4 2.3-.7c.5.4 1 .7 1.6.9L10 21h4l.9-2.2c.6-.2 1.1-.5 1.6-.9l2.3.7 2-3.4-2-1.2c.1-.3.1-.7.1-1Z"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  ),
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <circle cx="12" cy="12" r="8" strokeWidth="1.5" />
      <path d="M4 12h16" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 4c2.5 3 2.5 13 0 16" strokeWidth="1.5" />
      <path d="M12 4c-2.5 3-2.5 13 0 16" strokeWidth="1.5" />
    </svg>
  ),
  fintech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={iconClasses}>
      <rect x="4" y="6" width="16" height="12" rx="2" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="2.2" strokeWidth="1.5" />
      <path d="M8 12h-2" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M18 12h-2" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
};

export default function DomainExpertise() {
  return (
    <section className="bg-white" id="domain-expertise">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="text-center">
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            Our <span className="text-[#1A73E8]">Domain Expertise</span>
          </h2>
          <p className="mt-2 text-xs font-medium text-slate-700">
            <span className="text-[#1A73E8]">Specialized Programs</span> Designed to Fuel Innovation
          </p>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {domainExpertise.map((item, index) => (
            <div
              key={item.title}
              className={`mx-auto flex w-full max-w-[340px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-left shadow-md ${
                index === domainExpertise.length - 1 ? "col-span-2 sm:col-span-3" : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-blue-50">
                {icons[item.icon]}
              </div>
              <h3 className="text-sm font-bold text-slate-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
