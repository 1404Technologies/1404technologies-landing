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

function OmniMark() {
  return (
    <div className="relative w-36 h-36 md:w-44 md:h-44 shrink-0">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(45,212,191,0.35) 0%, rgba(37,99,235,0.18) 45%, transparent 75%)",
          filter: "blur(10px)",
        }}
      />
      <img
        src="/logos/omniserve_symbol_dark.svg"
        alt="OmniServe"
        className="relative w-full h-full"
        loading="lazy"
      />
    </div>
  );
}

export default function OmniServe({
  tag,
  meetHeadline,
  meetSubhead,
  headline,
  headlineAccent,
  description,
  url,
  cta,
  ctaSecondary,
  features,
  badge,
}) {
  const [bodyRef, bodyVisible] = useInView();
  const [meetRef, meetVisible] = useInView(0.18);

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
        className={`max-w-[1200px] mx-auto relative fade-up ${bodyVisible ? "is-visible" : ""}`}
      >
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="section__tag">{tag}</span>
          <h2 className="text-[clamp(26px,3.4vw,40px)] font-bold text-white leading-tight mt-3">
            {headline} <em className="not-italic text-teal-400">{headlineAccent}</em>
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          {features.map(({ iconName, title, description: desc }) => (
            <div
              key={title}
              className="bg-white/[0.05] border border-white/[0.12] rounded-[14px] p-6
                         hover:bg-white/[0.08] hover:border-white/[0.20] transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-teal-400/[0.12] border border-teal-400/[0.2] flex items-center justify-center mb-4">
                <OmniIcon name={iconName} />
              </div>
              <div className="text-[15px] font-bold text-white mb-1.5">{title}</div>
              <div className="text-[13.5px] text-blue-300 leading-normal">{desc}</div>
            </div>
          ))}
        </div>

        {/* Meet OmniServe — contained banner card */}
        <div
          ref={meetRef}
          className={`relative fade-up ${meetVisible ? "is-visible" : ""}`}
        >
          <div
            className="relative rounded-[24px] border border-white/[0.10] overflow-hidden
                       p-8 md:p-12 lg:p-14"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(45,212,191,0.06) 50%, rgba(37,99,235,0.08) 100%)",
              boxShadow:
                "0 1px 0 rgba(255,255,255,0.06) inset, 0 30px 60px -20px rgba(13,148,136,0.18)",
            }}
          >
            {/* soft accent glow inside the card */}
            <div
              aria-hidden
              className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(45,212,191,0.18) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
              <OmniMark />

              <div>
                <h3
                  className="font-bold text-teal-400 leading-[1.05] mb-4"
                  style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
                >
                  {meetHeadline}
                </h3>
                {meetSubhead && (
                  <p className="text-[18px] md:text-[20px] text-white font-medium leading-[1.4] mb-4 max-w-[640px]">
                    {meetSubhead}
                  </p>
                )}
                <p className="text-[15px] md:text-[16px] text-blue-300 leading-[1.65] mb-6 max-w-[640px]">
                  {description}
                </p>
                <div className="flex flex-wrap gap-3 mb-5">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
