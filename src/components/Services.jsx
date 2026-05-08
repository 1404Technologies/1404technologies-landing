import { useInView } from "../hooks/useInView";

function ServiceCard({ number, title, description, highlights, differentiators, benefit }) {
  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-[64px_1fr_minmax(220px,auto)] gap-6 lg:gap-8 items-start
                 bg-white border border-blue-100 rounded-2xl p-7 md:p-9
                 hover:shadow-[0_18px_40px_-20px_rgba(30,42,94,0.18)] hover:border-blue-200
                 transition-all duration-200"
    >
      <div className="text-[44px] font-extrabold text-blue-600/80 leading-none tabular-nums">
        {number}
      </div>

      <div>
        <h3 className="text-[22px] font-bold text-navy mb-2">{title}</h3>
        <p className="text-[15px] text-[#526A96] leading-[1.65] mb-6">{description}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6">
          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#7BAAC8] mb-3">
              Includes
            </div>
            <ul className="flex flex-col gap-1.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-[#354E7A] pl-5 relative
                             before:content-['✓'] before:absolute before:left-0 before:top-0
                             before:text-blue-600 before:text-[12px] before:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] font-bold tracking-[0.12em] uppercase text-[#7BAAC8] mb-3">
              What sets us apart
            </div>
            <ul className="flex flex-col gap-1.5">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-[#354E7A] pl-5 relative
                             before:content-['→'] before:absolute before:left-0 before:top-0
                             before:text-teal-500 before:text-[12px] before:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl py-5 px-5 self-center
                   shadow-[0_10px_28px_-12px_rgba(37,99,235,0.55)]"
      >
        <div className="text-[10.5px] text-blue-100 uppercase tracking-[0.12em] font-semibold mb-1.5">
          Key benefit
        </div>
        <div className="text-[14px] font-bold text-white leading-snug">{benefit}</div>
      </div>
    </div>
  );
}

export default function Services({ items }) {
  const [headerRef, headerVisible] = useInView();
  const [listRef, listVisible] = useInView();

  return (
    <section id="services" className="section section--muted">
      <div
        ref={headerRef}
        className={`section__header fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <span className="section__tag">Our Services</span>
        <h2 className="section__title">Enterprise-grade services, global delivery</h2>
        <p className="section__subtitle">
          Managed IT, cybersecurity, call centre, and custom software — all under one SLA.
        </p>
      </div>
      <div
        ref={listRef}
        className={`max-w-[1200px] mx-auto flex flex-col gap-5 stagger-children ${listVisible ? "is-visible" : ""}`}
      >
        {items.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </div>
    </section>
  );
}
