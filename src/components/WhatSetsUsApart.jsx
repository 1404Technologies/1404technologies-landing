import { useInView } from "../hooks/useInView";

const ICONS = {
  building: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  bolt: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  card: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  ),
  link: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  ),
  chart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  ),
};

function ItemIcon({ name }) {
  return (
    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-5">
      <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {ICONS[name]}
      </svg>
    </div>
  );
}

export default function WhatSetsUsApart({ tag, title, subtitle, items }) {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView();

  return (
    <section id="why-us" className="section bg-white">
      <div
        ref={headerRef}
        className={`section__header fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <span className="section__tag">{tag}</span>
        <h2 className="section__title">{title}</h2>
        <p className="section__subtitle">{subtitle}</p>
      </div>

      <div
        ref={gridRef}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${gridVisible ? "is-visible" : ""}`}
      >
        {items.map(({ iconName, title: t, description }) => (
          <div
            key={t}
            className="bg-[#F9FBFF] border border-blue-100 rounded-2xl p-7
                       hover:bg-white hover:shadow-[0_18px_40px_-20px_rgba(30,42,94,0.16)] hover:border-blue-200
                       transition-all duration-200"
          >
            <ItemIcon name={iconName} />
            <h3 className="text-[18px] font-bold text-navy mb-2 leading-snug">{t}</h3>
            <p className="text-[14.5px] text-[#526A96] leading-[1.65]">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
