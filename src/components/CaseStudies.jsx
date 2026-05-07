import { useInView } from "../hooks/useInView";

function CaseCard({ client, location, challenge, impact }) {
  return (
    <div className="bg-white/[0.07] border border-white/[0.14] rounded-[10px] p-8 flex flex-col gap-5
                    hover:bg-white/[0.10] hover:border-white/[0.22] transition-all duration-200">
      <div className="flex flex-col gap-1">
        <div className="text-lg font-bold text-white">{client}</div>
        <div className="text-[13px] text-teal-400 font-medium">{location}</div>
      </div>
      <div>
        <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#7BAAC8] mb-[6px]">
          Challenge
        </div>
        <p className="text-[13px] text-blue-300 leading-normal">{challenge}</p>
      </div>
      <div>
        <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-[#7BAAC8] mb-[10px]">
          Impact
        </div>
        <ul className="flex flex-col gap-2">
          {impact.map(({ metric, positive }) => (
            <li key={metric} className="flex items-start gap-2 text-[13px] text-blue-200">
              <span className={`font-bold shrink-0 leading-[1.6] ${positive ? "text-emerald-400" : "text-red-400"}`}>
                {positive ? "✓" : "✗"}
              </span>
              {metric}
            </li>
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
        className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 stagger-children ${gridVisible ? "is-visible" : ""}`}
      >
        {items.map((item) => (
          <CaseCard key={item.client} {...item} />
        ))}
      </div>
    </section>
  );
}
