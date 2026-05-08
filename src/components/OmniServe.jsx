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
  card: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
    />
  ),
  shield: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  ),
  building: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
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

// Browser-chrome screenshot frame for the OmniServe dashboard.
// Placeholder body until the real screenshot is provided.
function ProductFrame() {
  return (
    <div className="relative w-full">
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[36px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(45,212,191,0.22) 0%, transparent 70%)",
          filter: "blur(28px)",
        }}
      />
      <div className="relative bg-navy-3 border border-white/[0.14] rounded-[14px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.55)]">
        <div className="flex items-center gap-2 bg-white/[0.04] border-b border-white/[0.08] py-2.5 px-3.5">
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <span className="ml-3 text-[11px] text-blue-200/70 font-mono tracking-tight">
            app.myomniserve.com
          </span>
        </div>
        <div className="aspect-[16/10] bg-gradient-to-br from-navy-2 to-navy-3 flex items-center justify-center relative">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.30]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative flex flex-col items-center gap-3 text-center px-6">
            <img
              src="/logos/omniserve_symbol_dark.svg"
              alt="OmniServe"
              className="w-16 h-16 opacity-90"
              loading="lazy"
            />
            <div className="text-[14px] font-semibold text-white">Dashboard preview</div>
            <div className="text-[12px] text-blue-200/80 max-w-[320px] leading-relaxed">
              Real-time KPIs across CRM, helpdesk, finance, and compliance — in one view.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OmniServe({
  tag,
  meetHeadline,
  meetSubhead,
  description,
  url,
  cta,
  ctaSecondary,
  features,
  benefits,
}) {
  const [bannerRef, bannerVisible] = useInView(0.18);
  const [bodyRef, bodyVisible] = useInView();

  return (
    <section id="omniserve" className="section section--dark overflow-hidden relative">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 30%, rgba(37,99,235,0.18) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 10% 80%, rgba(13,148,136,0.10) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative">
        {/* Banner first — introduces the product before the feature grid. */}
        <div
          ref={bannerRef}
          className={`fade-up ${bannerVisible ? "is-visible" : ""}`}
        >
          <div className="text-center mb-10">
            <span className="section__tag">{tag}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center mb-16">
            <div>
              <h2
                className="font-extrabold text-white leading-[1.05] mb-5 tracking-[-0.02em]"
                style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
              >
                {meetHeadline}{" "}
                <span className="text-teal-400">— one platform.</span>
              </h2>
              <p className="text-[18px] md:text-[20px] text-white/95 font-medium leading-[1.45] mb-5">
                {meetSubhead}
              </p>
              <p className="text-[15px] md:text-[16px] text-blue-200 leading-[1.7] mb-8 max-w-[560px]">
                {description}
              </p>

              {/* Real client benefits from the brochure. */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-9">
                {benefits.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-2.5 text-[14px] text-blue-100"
                  >
                    <svg
                      className="w-4 h-4 mt-[3px] text-teal-400 shrink-0"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5L13 6.5" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <a href={url} target="_blank" rel="noopener noreferrer" className="btn btn--primary">
                  {cta} ↗
                </a>
                <a href="#pricing" className="btn btn--outline-white">
                  {ctaSecondary}
                </a>
              </div>
            </div>

            <ProductFrame />
          </div>
        </div>

        {/* Feature grid — real capabilities pulled from the brochure. */}
        <div
          ref={bodyRef}
          className={`fade-up ${bodyVisible ? "is-visible" : ""}`}
        >
          <div className="text-center mb-8">
            <h3
              className="font-bold text-white leading-tight"
              style={{ fontSize: "clamp(22px, 2.4vw, 28px)" }}
            >
              Everything you need in one platform
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ iconName, title, description: desc }) => (
              <div
                key={title}
                className="bg-white/[0.05] border border-white/[0.12] rounded-2xl p-6
                           hover:bg-white/[0.08] hover:border-white/[0.20] transition-all duration-200"
              >
                <div className="w-11 h-11 rounded-xl bg-teal-400/[0.12] border border-teal-400/[0.22] flex items-center justify-center mb-4">
                  <OmniIcon name={iconName} />
                </div>
                <div className="text-[15.5px] font-bold text-white mb-2">{title}</div>
                <div className="text-[13.5px] text-blue-200 leading-[1.6]">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
