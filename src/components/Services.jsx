import { motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import Reveal, { RevealItem } from "./motion/Reveal";
import { ease, container, fadeUp } from "../lib/motion";

function ServiceCard({ number, title, description, highlights, differentiators, benefit }) {
  const reduced = useReducedMotion();
  return (
    <RevealItem className="h-full">
      <SpotlightCard
        spotlightColor="rgba(37, 99, 235, 0.10)"
        size={420}
        className="group h-full bg-white border border-brand-border rounded-[20px] p-7 md:p-9 overflow-hidden
                   hover:border-brand-border-2 hover:shadow-[0_24px_60px_-20px_rgba(30,42,94,0.22)]
                   transition-[border-color,box-shadow] duration-500"
      >
        {/* Oversized editorial number */}
        <div className="flex items-start justify-between mb-5">
          <span
            className="text-[88px] md:text-[104px] font-extrabold leading-none tabular-nums tracking-[-0.04em]
                       text-transparent bg-clip-text bg-gradient-to-b from-brand-accent/35 to-brand-accent/5
                       select-none"
            aria-hidden
          >
            {number}
          </span>
          <motion.span
            className="mt-3 w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-brand-accent shrink-0"
            whileHover={reduced ? undefined : { rotate: 45, scale: 1.08, backgroundColor: "rgba(37,99,235,0.08)" }}
            transition={{ duration: 0.3, ease: ease.out }}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </motion.span>
        </div>

        <h3 className="text-[22px] md:text-[24px] font-bold text-brand mb-2.5 tracking-[-0.012em] leading-snug">
          {title}
        </h3>
        <p className="text-[14.5px] text-brand-muted leading-[1.65] mb-7 max-w-[42ch]">
          {description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5 mb-7">
          <div>
            <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-3 flex items-center gap-1.5">
              <span className="w-3 h-px bg-brand-steel" aria-hidden />
              Includes
            </div>
            <ul className="flex flex-col gap-1.5">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-brand-slate pl-5 relative leading-[1.5]
                             before:content-['✓'] before:absolute before:left-0 before:top-0
                             before:text-brand-accent before:text-[12px] before:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-tag-bg mb-3 flex items-center gap-1.5">
              <span className="w-3 h-px bg-brand-tag-bg" aria-hidden />
              Differentiators
            </div>
            <ul className="flex flex-col gap-1.5">
              {differentiators.map((item) => (
                <li
                  key={item}
                  className="text-[13.5px] text-brand-slate pl-5 relative leading-[1.5]
                             before:content-['→'] before:absolute before:left-0 before:top-0
                             before:text-brand-tag-bg before:text-[12px] before:font-bold"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          whileHover={reduced ? undefined : { y: -2 }}
          className="relative mt-auto bg-gradient-to-br from-brand-accent to-brand-accent-hover rounded-xl py-4 px-5
                     shadow-[0_10px_28px_-12px_rgba(37,99,235,0.55)] overflow-hidden"
        >
          {!reduced && (
            <motion.span
              aria-hidden
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{
                background:
                  "linear-gradient(115deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
              }}
              animate={{ x: ["-100%", "120%"] }}
              transition={{ duration: 2.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }}
            />
          )}
          <div className="relative flex items-center justify-between gap-3">
            <div>
              <div className="text-[10px] text-brand-on-dark-2 uppercase tracking-[0.14em] font-bold mb-1">
                Key benefit
              </div>
              <div className="text-[14.5px] font-bold text-white leading-snug">{benefit}</div>
            </div>
            <svg className="w-5 h-5 text-white/70 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </motion.div>
      </SpotlightCard>
    </RevealItem>
  );
}

export default function Services({ items }) {
  return (
    <section id="services" className="section section--muted relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, #000, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, #000, transparent 80%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.08)}
        className="section__header relative"
      >
        <motion.span variants={fadeUp} className="section__tag">Our Services</motion.span>
        <motion.h2 variants={fadeUp} className="section__title">
          Enterprise-grade services,{" "}
          <em className="not-italic bg-gradient-to-r from-brand-accent to-brand-tag-bg bg-clip-text text-transparent">
            global delivery
          </em>
        </motion.h2>
        <motion.p variants={fadeUp} className="section__subtitle">
          Managed IT, cybersecurity, call centre, and custom software — all under one SLA.
        </motion.p>
      </motion.div>

      <Reveal
        staggerChildrenMode
        gap={0.1}
        amount={0.1}
        className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5 relative"
      >
        {items.map((service) => (
          <ServiceCard key={service.number} {...service} />
        ))}
      </Reveal>
    </section>
  );
}
