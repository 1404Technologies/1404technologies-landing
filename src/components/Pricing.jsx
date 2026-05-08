import { useInView } from "../hooks/useInView";

export default function Pricing({ rows, discounts }) {
  const [headerRef, headerVisible] = useInView();
  const [tableRef, tableVisible] = useInView();

  return (
    <section id="pricing" className="section bg-white">
      <div
        ref={headerRef}
        className={`section__header fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <span className="section__tag">Transparent Pricing</span>
        <h2 className="section__title">No surprises. Just clear, competitive rates.</h2>
        <p className="section__subtitle">
          Service rates in USD; OmniServe in GBP. Custom scopes quoted on request — no obligation.
        </p>
      </div>

      <div
        ref={tableRef}
        className={`max-w-[1100px] mx-auto fade-up ${tableVisible ? "is-visible" : ""}`}
      >
        <div className="overflow-x-auto rounded-2xl border border-blue-100 shadow-[0_10px_30px_-15px_rgba(30,42,94,0.12)] mb-8">
          <table className="w-full border-collapse">
            <caption className="sr-only">1404 Technologies service pricing table</caption>
            <thead className="bg-navy text-white">
              <tr>
                {["Service", "Pricing model", "Rate range"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="py-4 px-6 text-left text-[11.5px] font-bold tracking-[0.10em] uppercase text-blue-200 whitespace-nowrap"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ service, url, model, rate, currencyNote, highlight }, idx) => {
                const isLast = idx === rows.length - 1;
                const border = isLast ? "" : "border-b border-blue-100";
                return (
                  <tr
                    key={service}
                    className={`transition-colors duration-150 ${
                      highlight
                        ? "bg-blue-50/60"
                        : "bg-white hover:bg-[#F9FBFF]"
                    }`}
                  >
                    <td className={`py-[18px] px-6 text-[15px] ${border}`}>
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-semibold hover:underline ${
                            highlight ? "text-blue-700" : "text-navy"
                          }`}
                        >
                          {service}
                        </a>
                      ) : (
                        <span className={`font-semibold ${highlight ? "text-blue-700" : "text-navy"}`}>
                          {service}
                        </span>
                      )}
                      {highlight && (
                        <span className="inline-block ml-2 text-[10px] font-bold tracking-[0.10em] uppercase text-blue-700 bg-blue-600/10 border border-blue-600/30 py-[2px] px-2 rounded-full">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className={`py-[18px] px-6 text-[14.5px] text-[#526A96] whitespace-nowrap ${border}`}>
                      {model}
                    </td>
                    <td className={`py-[18px] px-6 text-[15px] whitespace-nowrap ${border}`}>
                      {rate ? (
                        <span className="font-bold text-navy">
                          {rate}
                          {currencyNote && (
                            <span className="ml-1.5 text-[10.5px] font-semibold text-[#526A96] bg-blue-50 border border-blue-100 py-[2px] px-[6px] rounded">
                              {currencyNote}
                            </span>
                          )}
                        </span>
                      ) : (
                        <a
                          href="#contact"
                          className="text-[13px] font-semibold text-blue-600 hover:underline"
                        >
                          Request a quote →
                        </a>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Discounts as 3 pill cards — visually lighter than the old navy block, fits the light section. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {discounts.map((item) => (
            <div
              key={item}
              className="bg-[#F9FBFF] border border-blue-100 rounded-xl py-4 px-5
                         flex items-start gap-3"
            >
              <span className="w-7 h-7 rounded-full bg-blue-600/10 border border-blue-600/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-blue-600" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5L15 6.5" />
                </svg>
              </span>
              <span className="text-[13px] text-[#354E7A] leading-[1.55]">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[15px] text-[#526A96] mb-5">
            Not sure which package is right for you? Tell us your business size and industry and our team will match you to the right services.
          </p>
          <a href="#contact" className="btn btn--primary">
            Get a custom quote →
          </a>
        </div>
      </div>
    </section>
  );
}
