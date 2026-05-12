import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import Reveal from "./motion/Reveal";
import { ease, container, fadeUp } from "../lib/motion";

export default function Pricing({ rows, discounts }) {
  const reduced = useReducedMotion();

  return (
    <section id="pricing" className="section bg-white relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(rgba(37,99,235,0.05) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 40%, #000, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 40%, #000, transparent 80%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.08)}
        className="section__header relative"
      >
        <motion.span variants={fadeUp} className="section__tag">Transparent Pricing</motion.span>
        <motion.h2 variants={fadeUp} className="section__title">
          No surprises.{" "}
          <em className="not-italic bg-gradient-to-r from-brand-accent to-brand-tag-bg bg-clip-text text-transparent">
            Just clear rates.
          </em>
        </motion.h2>
        <motion.p variants={fadeUp} className="section__subtitle">
          Service rates in USD; OmniServe in GBP. Custom scopes quoted on request — no obligation.
        </motion.p>
      </motion.div>

      <Reveal className="max-w-[1100px] mx-auto relative">
        <div className="relative overflow-hidden rounded-2xl border border-brand-border shadow-[0_18px_44px_-22px_rgba(30,42,94,0.18)] mb-8 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <caption className="sr-only">1404 Technologies service pricing table</caption>
              <thead className="bg-brand text-white">
                <tr>
                  {["Service", "Pricing model", "Rate range"].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className="py-4 px-6 text-left text-[11.5px] font-bold tracking-[0.12em] uppercase text-brand-on-dark whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <motion.tbody
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={container(0.04)}
              >
                {rows.map(({ service, url, model, rate, currencyNote, highlight }, idx) => {
                  const isLast = idx === rows.length - 1;
                  const border = isLast ? "" : "border-b border-brand-border";
                  return (
                    <motion.tr
                      key={service}
                      variants={{
                        hidden: { opacity: 0, y: 8 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: ease.out } },
                      }}
                      whileHover={reduced ? undefined : { backgroundColor: "rgba(37,99,235,0.04)" }}
                      transition={{ duration: 0.2 }}
                      className={`relative ${highlight ? "bg-gradient-to-r from-brand-accent/[0.04] via-brand-tag/[0.04] to-transparent" : "bg-white"}`}
                    >
                      <td className={`relative py-[18px] px-6 text-[15px] ${border}`}>
                        {highlight && !reduced && (
                          <motion.span
                            aria-hidden
                            className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-gradient-to-b from-brand-accent to-brand-tag-bg"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, ease: ease.out, delay: 0.2 }}
                            style={{ transformOrigin: "top" }}
                          />
                        )}
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`font-semibold hover:underline ${highlight ? "text-brand-accent-hover" : "text-brand"}`}
                          >
                            {service}
                          </a>
                        ) : (
                          <span className={`font-semibold ${highlight ? "text-brand-accent-hover" : "text-brand"}`}>
                            {service}
                          </span>
                        )}
                        {highlight && (
                          <span className="inline-flex items-center gap-1 ml-2 text-[10px] font-bold tracking-[0.12em] uppercase text-brand-accent-hover bg-brand-accent/10 border border-brand-accent/30 py-[2px] px-2 rounded-full">
                            <motion.span
                              className="w-1 h-1 rounded-full bg-brand-accent"
                              animate={reduced ? undefined : { opacity: [1, 0.3, 1] }}
                              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                              aria-hidden
                            />
                            Featured
                          </span>
                        )}
                      </td>
                      <td className={`py-[18px] px-6 text-[14.5px] text-brand-muted whitespace-nowrap ${border}`}>
                        {model}
                      </td>
                      <td className={`py-[18px] px-6 text-[15px] whitespace-nowrap ${border}`}>
                        {rate ? (
                          <span className="font-bold text-brand">
                            {rate}
                            {currencyNote && (
                              <span className="ml-1.5 text-[10.5px] font-semibold text-brand-muted bg-brand-surface border border-brand-border py-[2px] px-[6px] rounded">
                                {currencyNote}
                              </span>
                            )}
                          </span>
                        ) : (
                          <a href="#contact" className="text-[13px] font-semibold text-brand-accent hover:underline group inline-flex items-center gap-1">
                            Request a quote
                            <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                          </a>
                        )}
                      </td>
                    </motion.tr>
                  );
                })}
              </motion.tbody>
            </table>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container(0.06)}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
        >
          {discounts.map((item) => (
            <motion.div
              key={item}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.out } },
              }}
              whileHover={reduced ? undefined : { y: -3, borderColor: "rgba(37,99,235,0.30)" }}
              transition={{ duration: 0.25 }}
              className="bg-brand-surface-2 border border-brand-border rounded-xl py-4 px-5 flex items-start gap-3"
            >
              <span className="w-7 h-7 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center shrink-0">
                <svg className="w-3.5 h-3.5 text-brand-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5L15 6.5" />
                </svg>
              </span>
              <span className="text-[13px] text-brand-slate leading-[1.55]">{item}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <p className="text-[15px] text-brand-muted mb-5 max-w-[600px] mx-auto leading-[1.6]">
            Not sure which package is right for you? Tell us your business size and industry and our team will match you to the right services.
          </p>
          <MagneticButton as="a" href="#contact" className="btn btn--primary" strength={12}>
            <span>Get a custom quote</span>
            <span aria-hidden>→</span>
          </MagneticButton>
        </div>
      </Reveal>
    </section>
  );
}
