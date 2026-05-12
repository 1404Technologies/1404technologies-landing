import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import SpotlightCard from "./motion/SpotlightCard";
import BorderBeam from "./motion/BorderBeam";
import Reveal, { RevealItem } from "./motion/Reveal";
import { ease, container, fadeUp } from "../lib/motion";

const ICONS = {
  building: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  ),
  shield: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  ),
  bolt: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  ),
  card: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  ),
  link: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  ),
  chart: (
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  ),
};

function CapabilityCard({ iconName, title, description, index, featured }) {
  const reduced = useReducedMotion();
  return (
    <RevealItem className="h-full">
      <SpotlightCard
        spotlightColor="rgba(37, 99, 235, 0.10)"
        className={`group relative h-full rounded-2xl p-7 border transition-[border-color,background] duration-400 overflow-hidden
                    ${featured
                      ? "bg-gradient-to-br from-white to-brand-surface-2 border-brand-border-2 shadow-[0_18px_40px_-24px_rgba(30,42,94,0.20)]"
                      : "bg-white border-brand-border hover:border-brand-border-2"}`}
      >
        {featured && <BorderBeam color="#2563EB" duration={9} glowOpacity={0.5} />}

        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={reduced ? undefined : { rotate: -8, scale: 1.08 }}
            transition={{ duration: 0.4, ease: ease.out }}
            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
              featured
                ? "bg-brand-accent/[0.10] border border-brand-accent/30"
                : "bg-brand-surface border border-brand-border group-hover:border-brand-accent/30"
            }`}
          >
            <svg className="w-6 h-6 text-brand-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {ICONS[iconName]}
            </svg>
          </motion.div>
          <span className="ml-auto text-[11px] font-bold tracking-[0.14em] text-brand-steel tabular-nums">
            0{index + 1}
          </span>
        </div>

        <h3 className="text-[18px] font-bold text-brand mb-2 leading-snug tracking-[-0.005em]">{title}</h3>
        <p className="text-[14px] text-brand-muted leading-[1.65]">{description}</p>
      </SpotlightCard>
    </RevealItem>
  );
}

export default function WhatSetsUsApart({ tag, title, subtitle, items }) {
  const sectionRef = useRef(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.05, 0.85], ["0%", "100%"]);

  return (
    <section id="why-us" ref={sectionRef} className="section bg-white relative overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.08)}
        className="section__header relative"
      >
        <motion.span variants={fadeUp} className="section__tag">{tag}</motion.span>
        <motion.h2 variants={fadeUp} className="section__title">
          {title}
        </motion.h2>
        <motion.p variants={fadeUp} className="section__subtitle">{subtitle}</motion.p>
      </motion.div>

      <div className="max-w-[1200px] mx-auto relative">
        {/* Vertical progress line — visible only on lg */}
        {!reduced && (
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px bg-brand-border pointer-events-none">
            <motion.div
              className="w-full bg-gradient-to-b from-brand-accent via-brand-tag-bg to-transparent origin-top"
              style={{ height: lineHeight }}
            />
          </div>
        )}

        <Reveal
          staggerChildrenMode
          gap={0.09}
          amount={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 relative"
        >
          {items.map((item, i) => (
            <CapabilityCard
              key={item.title}
              {...item}
              index={i}
              featured={i === 0 || i === 4}
            />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
