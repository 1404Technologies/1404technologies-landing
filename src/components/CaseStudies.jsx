import { motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import NumberTicker from "./motion/NumberTicker";
import Reveal, { RevealItem } from "./motion/Reveal";
import { ease, container, fadeUp } from "../lib/motion";

function MetricRow({ metric, positive }) {
  const reduced = useReducedMotion();
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: ease.out } },
      }}
      className="flex items-start gap-2.5 text-[13.5px] text-brand-on-dark leading-[1.5]"
    >
      <motion.span
        whileHover={reduced ? undefined : { scale: 1.15 }}
        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-[2px] ${
          positive
            ? "bg-emerald-500/20 border border-emerald-500/40"
            : "bg-red-500/20 border border-red-500/40"
        }`}
      >
        <svg
          className={`w-2.5 h-2.5 ${positive ? "text-emerald-400" : "text-red-400"}`}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          {positive ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 10.5l3.5 3.5L15 6.5" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l8 8M14 6l-8 8" />
          )}
        </svg>
      </motion.span>
      <span>
        <NumberTicker>{metric}</NumberTicker>
      </span>
    </motion.li>
  );
}

function CaseCard({ client, location, industry, challenge, solution, impact }) {
  const reduced = useReducedMotion();
  return (
    <RevealItem className="h-full">
      <SpotlightCard
        spotlightColor="rgba(45, 212, 191, 0.10)"
        size={380}
        className="group h-full bg-white/[0.04] border border-white/[0.12] rounded-2xl p-7 flex flex-col gap-5
                   hover:bg-white/[0.07] hover:border-white/[0.22] transition-[background,border-color] duration-400 overflow-hidden"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <motion.div
              className="inline-flex items-center gap-1.5 text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-tag mb-2.5 bg-brand-tag/[0.10] border border-brand-tag/[0.24] py-1 px-2 rounded-full"
              whileHover={reduced ? undefined : { scale: 1.04 }}
            >
              <span className="w-1 h-1 rounded-full bg-brand-tag" aria-hidden />
              {industry}
            </motion.div>
            <div className="text-[19px] font-bold text-white leading-snug tracking-[-0.01em]">{client}</div>
            <div className="text-[12.5px] text-brand-on-dark-2 mt-1">{location}</div>
          </div>
          <motion.span
            className="w-9 h-9 rounded-full border border-white/[0.16] flex items-center justify-center text-brand-tag shrink-0"
            whileHover={reduced ? undefined : { rotate: 45, scale: 1.08, borderColor: "rgba(45,212,191,0.4)" }}
            transition={{ duration: 0.3, ease: ease.out }}
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
            </svg>
          </motion.span>
        </div>

        <div>
          <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-1.5 flex items-center gap-1.5">
            <span className="w-3 h-px bg-brand-steel" aria-hidden />
            Challenge
          </div>
          <p className="text-[13px] text-brand-on-dark leading-[1.6]">{challenge}</p>
        </div>

        <div>
          <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-1.5 flex items-center gap-1.5">
            <span className="w-3 h-px bg-brand-steel" aria-hidden />
            Solution
          </div>
          <p className="text-[13px] text-brand-on-dark leading-[1.6]">{solution}</p>
        </div>

        <div className="mt-auto pt-5 border-t border-white/[0.08]">
          <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-tag mb-3 flex items-center gap-1.5">
            <span className="w-3 h-px bg-brand-tag" aria-hidden />
            Impact
          </div>
          <motion.ul
            variants={container(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="flex flex-col gap-2"
          >
            {impact.map((m) => (
              <MetricRow key={m.metric} {...m} />
            ))}
          </motion.ul>
        </div>
      </SpotlightCard>
    </RevealItem>
  );
}

export default function CaseStudies({ items }) {
  return (
    <section id="case-studies" className="section section--dark relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.08)}
        className="section__header relative"
      >
        <motion.span variants={fadeUp} className="section__tag">Client Success</motion.span>
        <motion.h2 variants={fadeUp} className="section__title">
          Results that{" "}
          <em className="not-italic bg-gradient-to-r from-brand-tag to-brand-on-dark-3 bg-clip-text text-transparent">
            speak for themselves
          </em>
        </motion.h2>
        <motion.p variants={fadeUp} className="section__subtitle">
          Real outcomes from real clients across healthcare, fintech, and retail.
        </motion.p>
      </motion.div>

      <Reveal
        staggerChildrenMode
        gap={0.1}
        amount={0.15}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 relative"
      >
        {items.map((item) => (
          <CaseCard key={item.client} {...item} />
        ))}
      </Reveal>
    </section>
  );
}
