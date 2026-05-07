export default function Hero({ tag, headline, headlineAccent, subheadline, cta, ctaSecondary, badges, stats, certifications }) {
  return (
    <section className="min-h-screen flex items-center bg-navy text-white relative overflow-hidden py-[120px] px-6 pb-20">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(37,99,235,0.14) 0%, transparent 70%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(13,148,136,0.08) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative">
        <div>
          <div className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.12em] uppercase text-teal-400 bg-teal-400/[0.20] border border-teal-400/[0.35] py-[6px] px-[14px] rounded-full mb-6">
            {tag}
          </div>
          <h1 className="text-[clamp(36px,5vw,60px)] font-extrabold leading-tight tracking-[-0.03em] mb-6">
            {headline} <em className="not-italic text-teal-400">{headlineAccent}</em>
          </h1>
          <p className="text-lg text-blue-300 leading-[1.7] mb-10 max-w-[520px]">{subheadline}</p>
          <div className="flex gap-4 flex-wrap mb-12">
            <a href="#contact" className="btn btn--primary">{cta} →</a>
            <a href="#services" className="btn btn--outline-white">{ctaSecondary}</a>
          </div>
          <div className="flex gap-3 flex-wrap">
            {badges.map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-[6px] text-[13px] font-medium text-blue-200
                           before:content-['✓'] before:text-teal-400 before:font-bold"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center order-first lg:order-last">
          <div className="bg-navy-3 border border-white/[0.14] rounded-2xl p-7 w-full max-w-[460px] shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
            <div className="text-[12px] font-semibold tracking-[0.08em] uppercase text-blue-300 mb-5">
              Trusted by enterprises across UK, U.S. &amp; Africa
            </div>

            <div className="grid grid-cols-2 gap-3 mb-5">
              {stats.map(({ value, label, accent }) => (
                <div key={label} className="bg-white/[0.15] border border-white/[0.24] rounded-[10px] p-4">
                  <div className={`text-[26px] font-bold leading-none mb-1 ${accent ? "text-teal-400" : "text-white"}`}>
                    {value}
                  </div>
                  <div className="text-[12px] text-blue-200 uppercase tracking-[0.05em]">{label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white/[0.15] border border-white/[0.24] rounded-[10px] p-4 mb-3">
              <div className="text-[12px] text-blue-200 uppercase tracking-[0.05em] mb-3">Compliance &amp; certifications</div>
              <div className="flex flex-wrap gap-[6px]">
                {certifications.map((name) => (
                  <span
                    key={name}
                    className="text-[12px] font-semibold text-teal-400 bg-teal-400/[0.15] border border-teal-400/[0.25] py-1 px-[10px] rounded-full"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-[10px] bg-emerald-600/[0.08] border border-emerald-600/[0.15] rounded-[10px] py-3 px-4">
              <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0 animate-pulse" />
              <span className="text-[12px] text-blue-50">
                <strong className="text-emerald-400">HQ London</strong> · Subsidiaries in U.S. &amp; Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
