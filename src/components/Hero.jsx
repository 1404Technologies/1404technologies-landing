export default function Hero({ tag, headline, headlineAccent, subheadline, cta, ctaSecondary, badges, certifications }) {
  return (
    <section className="bg-navy text-white relative overflow-hidden pt-[120px] pb-20 px-6">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(13,148,136,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-teal-400 bg-teal-400/[0.18] border border-teal-400/[0.32] py-[6px] px-[14px] rounded-full mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            {tag}
          </div>
          <h1 className="text-[clamp(40px,5.4vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-6">
            {headline} <em className="not-italic text-teal-400">{headlineAccent}</em>
          </h1>
          <p className="text-[17px] md:text-[18px] text-blue-200 leading-[1.65] mb-9 max-w-[560px]">
            {subheadline}
          </p>
          <div className="flex gap-3 flex-wrap mb-10">
            <a href="#contact" className="btn btn--primary">{cta} →</a>
            <a href="#services" className="btn btn--outline-white">{ctaSecondary}</a>
          </div>

          <div className="flex flex-wrap gap-2">
            {badges.map(({ label, accent }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-white
                           py-[6px] px-3 rounded-full border backdrop-blur-sm"
                style={{
                  background: `${accent}1f`,
                  borderColor: `${accent}55`,
                }}
              >
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full"
                  style={{ background: accent }}
                  aria-hidden
                >
                  <svg className="w-2 h-2" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M5 10.5l3.5 3.5L15 6.5"
                      stroke="#fff"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* 1404-branded visual: global delivery network. The 3 regions are 1404's
            actual differentiator — far more on-brand than featuring OmniServe here. */}
        <div className="flex justify-center items-center order-first lg:order-last">
          <GlobalNetworkCard certifications={certifications} />
        </div>
      </div>
    </section>
  );
}

const REGIONS = [
  {
    code: "UK",
    label: "Global HQ",
    city: "London",
    country: "United Kingdom",
    accent: "#3b82f6",
  },
  {
    code: "US",
    label: "U.S. Office",
    city: "Newark",
    country: "Delaware, USA",
    accent: "#10b981",
  },
  {
    code: "NG",
    label: "Nigeria Office",
    city: "Lagos",
    country: "Nigeria",
    accent: "#f59e0b",
  },
];

function GlobalNetworkCard({ certifications }) {
  return (
    <div className="relative w-full max-w-[480px]">
      {/* Soft glow behind the card */}
      <div
        aria-hidden
        className="absolute -inset-6 rounded-[28px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(45,212,191,0.18) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      <div className="relative bg-navy-3 border border-white/[0.14] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55)]">
        {/* Header strip */}
        <div className="flex items-center justify-between bg-white/[0.04] border-b border-white/[0.08] py-3.5 px-5">
          <div className="flex items-center gap-2.5">
            <span className="w-7 h-7 rounded-lg bg-teal-400/[0.18] border border-teal-400/[0.30] flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
              </svg>
            </span>
            <div>
              <div className="text-[12.5px] font-bold text-white leading-tight">Global delivery network</div>
              <div className="text-[10.5px] text-blue-200/80 mt-[1px]">Three regions · one team</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.10em] uppercase text-teal-400 bg-teal-400/[0.12] border border-teal-400/[0.24] py-1 px-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Active
          </span>
        </div>

        {/* World-map backdrop with the 3 regions overlaid */}
        <div className="relative bg-gradient-to-br from-navy-2 to-navy-3 px-5 py-5">
          <WorldMapBackdrop />

          <ul className="relative flex flex-col gap-2.5">
            {REGIONS.map(({ code, label, city, country, accent }) => (
              <li
                key={code}
                className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.10] rounded-xl py-2.5 px-3.5"
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-bold text-white shrink-0"
                  style={{
                    background: `${accent}26`,
                    border: `1px solid ${accent}55`,
                    color: accent,
                  }}
                >
                  {code}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-blue-200/80">
                    {label}
                  </div>
                  <div className="text-[13.5px] font-semibold text-white truncate">
                    {city}
                    <span className="text-blue-200/80 font-normal">, {country}</span>
                  </div>
                </div>
                <span
                  className="w-2 h-2 rounded-full shrink-0 animate-pulse"
                  style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
                  aria-hidden
                />
              </li>
            ))}
          </ul>

          <div className="relative mt-3 flex items-center justify-center gap-2 text-[11px] text-blue-200/80">
            <svg className="w-3.5 h-3.5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Follow-the-sun coverage across all time zones
          </div>
        </div>

        {/* Footer rail with compliance — second-glance trust signal */}
        <div className="bg-white/[0.04] border-t border-white/[0.08] py-2.5 px-4 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-blue-200/70 mr-1">
            Compliant with
          </span>
          {certifications.map((name) => (
            <span
              key={name}
              className="text-[10.5px] font-semibold text-teal-400 bg-teal-400/[0.14] border border-teal-400/[0.22] py-[2px] px-2 rounded-full"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// Simple stylized world map silhouette as a faint backdrop. Pure SVG, no external image.
function WorldMapBackdrop() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      className="absolute inset-0 w-full h-full opacity-[0.10] pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="dotgrid" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.9" fill="#7BAAC8" />
        </pattern>
        <mask id="continents">
          {/* Approximate continent silhouettes — abstract, not geographically precise */}
          <rect width="400" height="200" fill="black" />
          {/* North America */}
          <path d="M30 60 Q40 50 60 50 L90 55 Q105 60 110 75 L100 100 Q90 115 70 115 L50 105 Q35 95 30 80 Z" fill="white" />
          {/* South America */}
          <path d="M95 115 Q105 115 112 125 L115 150 Q110 170 100 175 L90 170 Q85 155 88 140 Z" fill="white" />
          {/* Europe */}
          <path d="M180 55 Q195 50 210 55 L220 70 Q215 80 205 82 L185 80 Q175 70 180 60 Z" fill="white" />
          {/* Africa */}
          <path d="M195 90 Q215 88 225 100 L230 130 Q220 155 205 160 L190 150 Q183 130 188 110 Z" fill="white" />
          {/* Asia */}
          <path d="M225 50 Q260 45 295 55 L320 75 Q315 95 295 100 L255 95 Q230 85 225 70 Z" fill="white" />
          {/* Australia */}
          <path d="M310 135 Q330 130 345 140 L348 155 Q335 165 320 162 L308 155 Q305 145 310 138 Z" fill="white" />
        </mask>
      </defs>
      <rect width="400" height="200" fill="url(#dotgrid)" mask="url(#continents)" />
    </svg>
  );
}
