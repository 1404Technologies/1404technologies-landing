import { useInView } from "../hooks/useInView";

function MetricRow({ metric, positive }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] text-blue-100 leading-[1.5]">
      <span
        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-[2px] ${
          positive
            ? "bg-emerald-500/20 border border-emerald-500/40"
            : "bg-red-500/20 border border-red-500/40"
        }`}
      >
        <svg
          className={`w-2.5 h-2.5 ${positive ? "text-emerald-400" : "text-red-400"}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          {positive ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5L15 6.5" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M14 6l-8 8" />
          )}
        </svg>
      </span>
      {metric}
    </li>
  );
}

function CaseCard({ client, location, industry, challenge, solution, impact }) {
  return (
    <div
      className="bg-white/[0.05] border border-white/[0.12] rounded-2xl p-7 flex flex-col gap-5
                 hover:bg-white/[0.08] hover:border-white/[0.22] transition-all duration-200 h-full"
    >
      <div>
        <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-teal-400 mb-2">
          {industry}
        </div>
        <div className="text-[18px] font-bold text-white leading-snug">{client}</div>
        <div className="text-[12.5px] text-blue-300 mt-1">{location}</div>
      </div>

      <div>
        <div className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#7BAAC8] mb-1.5">
          Challenge
        </div>
        <p className="text-[13px] text-blue-200 leading-[1.6]">{challenge}</p>
      </div>

      <div>
        <div className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#7BAAC8] mb-1.5">
          Solution
        </div>
        <p className="text-[13px] text-blue-200 leading-[1.6]">{solution}</p>
      </div>

      <div className="mt-auto pt-5 border-t border-white/[0.08]">
        <div className="text-[10.5px] font-bold tracking-[0.12em] uppercase text-[#7BAAC8] mb-2.5">
          Impact
        </div>
        <ul className="flex flex-col gap-2">
          {impact.map((m) => (
            <MetricRow key={m.metric} {...m} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function CaseStudies({ items }) {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section id="case-studies" className="section section--dark">
      <div
        ref={headerRef}
        className={`section__header fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <span className="section__tag">Client Success</span>
        <h2 className="section__title">Results that speak for themselves</h2>
        <p className="section__subtitle">
          Real outcomes from real clients across healthcare, fintech, and retail.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${gridVisible ? "is-visible" : ""}`}
      >
        {items.map((item) => (
          <CaseCard key={item.client} {...item} />
        ))}
      </div>
    </section>
  );
}
