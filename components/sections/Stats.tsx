import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-white" id="stats">
      <div className="mx-auto w-full max-w-7xl px-6 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Our <span className="text-[#1A73E8]">Track Record</span>
          </h2>
          <p className="mt-2 text-base font-medium text-slate-700">
            The Numbers Behind Our <span className="text-[#1A73E8]">Success</span>
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative flex items-center gap-4 border-b border-slate-200 pb-6 last:border-b-0 md:block md:rounded-2xl md:border-0 md:px-8 md:py-10 md:text-center last:[&>span]:hidden"
            >
              <div className="inline-flex shrink-0 items-center justify-center rounded-full bg-blue-100 px-5 py-2 text-lg font-bold text-[#1A73E8] md:mx-auto md:px-8 md:text-2xl">
                {stat.value}
              </div>
              <p className="text-sm font-semibold text-slate-800 md:mt-6 md:text-base">
                {stat.label}
              </p>
              <span className="absolute right-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-slate-300 md:block"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
