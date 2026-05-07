import { useInView } from "../hooks/useInView";

export default function Pricing({ rows, discounts }) {
  const [headerRef, headerVisible] = useInView();
  const [tableRef, tableVisible] = useInView();

  return (
    <section id="pricing" className="section section--muted">
      <div
        ref={headerRef}
        className={`section__header fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <span className="section__tag">Transparent Pricing</span>
        <h2 className="section__title">No surprises. Just clear, competitive rates.</h2>
        <p className="section__subtitle">
          All pricing in USD unless noted. Custom scopes quoted on request — no obligations.
        </p>
      </div>

      <div
        ref={tableRef}
        className={`max-w-[1200px] mx-auto fade-up ${tableVisible ? "is-visible" : ""}`}
      >
        <div className="overflow-x-auto rounded-[10px] shadow-md mb-8">
          <table className="w-full border-collapse">
            <caption className="sr-only">1404 Technologies service pricing table</caption>
            <thead className="bg-navy text-white">
              <tr>
                {["Service", "Pricing model", "Rate range"].map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="py-4 px-6 text-left text-[12px] font-bold tracking-[0.08em] uppercase text-[#7BAAC8] whitespace-nowrap"
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
                    className={`transition-colors duration-150 ${highlight ? "bg-blue-600/[0.04]" : "bg-white hover:bg-[#F5F8FF]"}`}
                  >
                    <td className={`py-[18px] px-6 text-[15px] ${border}`}>
                      {url ? (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`font-semibold hover:underline ${highlight ? "text-blue-600" : "text-navy"}`}
                        >
                          {service}
                        </a>
                      ) : (
                        <span className={`font-semibold ${highlight ? "text-blue-600" : "text-navy"}`}>
                          {service}
                        </span>
                      )}
                      {highlight && (
                        <span className="inline-block ml-2 text-[10px] font-bold tracking-[0.05em] uppercase text-blue-600 bg-blue-600/[0.10] border border-blue-600/[0.20] py-[2px] px-2 rounded-full">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className={`py-[18px] px-6 text-[15px] text-[#526A96] whitespace-nowrap ${border}`}>
                      {model}
                    </td>
                    <td className={`py-[18px] px-6 text-[15px] whitespace-nowrap ${border}`}>
                      {rate ? (
                        <span className="font-bold text-navy">
                          {rate}
                          {currencyNote && (
                            <span className="ml-1 text-[11px] font-semibold text-[#526A96] bg-blue-50 border border-blue-100 py-[2px] px-[6px] rounded">
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

        <div className="bg-navy rounded-[10px] py-7 px-8 mb-10">
          <div className="text-[13px] font-bold text-white uppercase tracking-[0.05em] mb-4">
            Discounts available
          </div>
          <ul className="flex flex-col gap-[10px]">
            {discounts.map((item) => (
              <li
                key={item}
                className="flex items-start gap-[10px] text-[13px] text-blue-300
                           before:content-['→'] before:text-teal-400 before:font-bold before:shrink-0"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <p className="text-[15px] text-[#526A96] mb-6">
            Not sure which package is right for you? Our team will match you to the right services within one business day.
          </p>
          <a href="#contact" className="btn btn--primary">
            Get a custom quote →
          </a>
        </div>
      </div>
    </section>
  );
}
