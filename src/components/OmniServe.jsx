import { useInView } from "../hooks/useInView";

const ICONS = {
  chart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    />
  ),
  bolt: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  link: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
    />
  ),
};

function OmniIcon({ name }) {
  return (
    <svg className="w-5 h-5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      {ICONS[name]}
    </svg>
  );
}

export default function OmniServe({ tag, headline, headlineAccent, description, url, cta, ctaSecondary, features, badge }) {
  const [headerRef, headerVisible] = useInView();
  const [bodyRef, bodyVisible] = useInView();

  return (
    <section id="omniServe" className="section section--dark overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 50%, rgba(37,99,235,0.14) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(13,148,136,0.08) 0%, transparent 60%)",
        }}
      />

      <div
        ref={bodyRef}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative fade-up ${bodyVisible ? "is-visible" : ""}`}
      >
        {/* Left: text */}
        <div ref={headerRef} className={`fade-up ${headerVisible ? "is-visible" : ""}`}>
          <span className="section__tag">{tag}</span>
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-white leading-tight mb-5 mt-3">
            {headline} <em className="not-italic text-teal-400">{headlineAccent}</em>
          </h2>
          <p className="text-[17px] text-blue-300 leading-[1.7] mb-8">{description}</p>
          <div className="flex gap-3 flex-wrap mb-6">
            <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
              {cta} ↗
            </a>
            <a href="#pricing" className="btn btn--outline-white">
              {ctaSecondary}
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-[12px] text-blue-300 bg-white/[0.06] border border-white/[0.12] rounded-full py-2 px-4">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 animate-pulse" />
            {badge}
          </div>
        </div>

        {/* Right: feature cards */}
        <div className="flex flex-col gap-4">
          {features.map(({ iconName, title, description: desc }) => (
            <div
              key={title}
              className="bg-white/[0.07] border border-white/[0.14] rounded-[10px] p-6 flex items-start gap-4
                         hover:bg-white/[0.10] hover:border-white/[0.22] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-400/[0.12] border border-teal-400/[0.2] flex items-center justify-center shrink-0">
                <OmniIcon name={iconName} />
              </div>
              <div>
                <div className="text-[15px] font-bold text-white mb-1">{title}</div>
                <div className="text-[13px] text-blue-300 leading-normal">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
