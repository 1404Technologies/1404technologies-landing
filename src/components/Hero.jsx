import { motion, useReducedMotion } from "framer-motion";
import TextReveal from "./motion/TextReveal";
import MagneticButton from "./motion/MagneticButton";
import { ease, duration, container, fadeUp } from "../lib/motion";

export default function Hero({ tag, headline, headlineAccent, subheadline, cta, ctaSecondary, badges, certifications }) {
  const reduced = useReducedMotion();

  return (
    <section className="bg-brand text-white relative overflow-hidden pt-[128px] pb-24 px-6">
      {/* Layered ambient background */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 30%, #000 30%, transparent 75%)",
          }}
        />
        <motion.div
          className="absolute -top-32 -left-32 w-[640px] h-[640px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 60%)", filter: "blur(40px)" }}
          animate={reduced ? undefined : { x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, ease: "easeInOut", repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -right-24 w-[560px] h-[560px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(45,212,191,0.16) 0%, transparent 60%)", filter: "blur(40px)" }}
          animate={reduced ? undefined : { x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 22, ease: "easeInOut", repeat: Infinity }}
        />
      </div>

      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center relative">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={container(0.1, 0.05)}
        >
          {/* Eyebrow tag */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-tag bg-brand-tag/[0.10] border border-brand-tag/[0.28] py-[6px] px-[14px] rounded-full mb-7 backdrop-blur-sm"
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-brand-tag"
              animate={reduced ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            {tag}
          </motion.div>

          {/* Headline — word-mask reveal */}
          <h1 className="text-[clamp(40px,5.4vw,64px)] font-extrabold leading-[1.04] tracking-[-0.032em] mb-6">
            <TextReveal text={headline} as="span" className="block" />{" "}
            <span className="block">
              <TextReveal
                text={headlineAccent}
                as="em"
                className="not-italic inline-block bg-gradient-to-r from-brand-tag via-brand-tag to-brand-on-dark-3 bg-clip-text text-transparent"
                delayChildren={headline.split(" ").length * 0.06 + 0.05}
              />
            </span>
          </h1>

          <motion.p
            variants={fadeUp}
            className="text-[17px] md:text-[18px] text-brand-on-dark leading-[1.65] mb-9 max-w-[560px]"
          >
            {subheadline}
          </motion.p>

          <motion.div variants={fadeUp} className="flex gap-3 flex-wrap mb-10">
            <MagneticButton
              as="a"
              href="#contact"
              className="btn btn--primary relative overflow-hidden"
              strength={12}
            >
              <span>{cta}</span>
              <motion.span
                aria-hidden
                className="inline-block"
                animate={reduced ? undefined : { x: [0, 4, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </MagneticButton>
            <MagneticButton
              as="a"
              href="#services"
              className="btn btn--outline-white"
              strength={10}
            >
              {ctaSecondary}
            </MagneticButton>
          </motion.div>

          {/* Compliance badges */}
          <motion.div
            variants={container(0.06, 0.15)}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-2"
          >
            {badges.map(({ label, accent }) => (
              <motion.span
                key={label}
                variants={{
                  hidden: { opacity: 0, y: 10, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: duration.fast, ease: ease.out } },
                }}
                whileHover={reduced ? undefined : { y: -2, scale: 1.04 }}
                className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-white py-[6px] px-3 rounded-full border backdrop-blur-sm cursor-default"
                style={{ background: `${accent}1f`, borderColor: `${accent}55` }}
              >
                <span
                  className="inline-flex items-center justify-center w-3.5 h-3.5 rounded-full shrink-0"
                  style={{ background: accent }}
                  aria-hidden
                >
                  <svg className="w-2 h-2" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10.5l3.5 3.5L15 6.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: duration.slow, ease: ease.out, delay: 0.25 }}
          className="flex justify-center items-center order-first lg:order-last"
        >
          <GlobalNetworkCard certifications={certifications} />
        </motion.div>
      </div>
    </section>
  );
}

const REGIONS = [
  { code: "UK", label: "Global HQ",      city: "London",  country: "United Kingdom",  accent: "#3b82f6" },
  { code: "US", label: "U.S. Office",    city: "Newark",  country: "Delaware, USA",   accent: "#10b981" },
  { code: "NG", label: "Nigeria Office", city: "Lagos",   country: "Nigeria",         accent: "#f59e0b" },
];

function GlobalNetworkCard({ certifications }) {
  const reduced = useReducedMotion();

  return (
    <div className="relative w-full max-w-[480px]">
      <motion.div
        aria-hidden
        className="absolute -inset-6 rounded-[28px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(45,212,191,0.22) 0%, transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={reduced ? undefined : { opacity: [0.6, 1, 0.6], scale: [1, 1.04, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        whileHover={reduced ? undefined : { y: -4 }}
        transition={{ duration: 0.4, ease: ease.out }}
        className="relative bg-brand-mid border border-white/[0.14] rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.55)]"
      >
        <div className="flex items-center justify-between bg-white/[0.04] border-b border-white/[0.08] py-3.5 px-5">
          <div className="flex items-center gap-2.5">
            <motion.span
              className="w-7 h-7 rounded-lg bg-brand-tag/[0.18] border border-brand-tag/[0.30] flex items-center justify-center"
              animate={reduced ? undefined : { rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <svg className="w-3.5 h-3.5 text-brand-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
              </svg>
            </motion.span>
            <div>
              <div className="text-[12.5px] font-bold text-white leading-tight">Global delivery network</div>
              <div className="text-[10.5px] text-brand-on-dark/80 mt-[1px]">Three regions · one team</div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.10em] uppercase text-brand-tag bg-brand-tag/[0.12] border border-brand-tag/[0.24] py-1 px-2 rounded-full">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-brand-tag"
              animate={reduced ? undefined : { opacity: [1, 0.3, 1], scale: [1, 0.7, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              aria-hidden
            />
            Active
          </span>
        </div>

        <div className="relative bg-gradient-to-br from-brand-dark to-brand-mid px-5 py-5">
          <WorldMapBackdrop />
          <ConnectionBeams />

          <motion.ul
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
            className="relative flex flex-col gap-2.5"
          >
            {REGIONS.map(({ code, label, city, country, accent }) => (
              <motion.li
                key={code}
                variants={{
                  hidden: { opacity: 0, x: -16 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: ease.out } },
                }}
                whileHover={reduced ? undefined : { x: 4, backgroundColor: "rgba(255,255,255,0.10)" }}
                className="flex items-center gap-3 bg-white/[0.06] border border-white/[0.10] rounded-xl py-2.5 px-3.5 cursor-default"
              >
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-[12px] font-bold shrink-0"
                  style={{ background: `${accent}26`, border: `1px solid ${accent}55`, color: accent }}
                >
                  {code}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold tracking-[0.10em] uppercase text-brand-on-dark/80">
                    {label}
                  </div>
                  <div className="text-[13.5px] font-semibold text-white truncate">
                    {city}
                    <span className="text-brand-on-dark/80 font-normal">, {country}</span>
                  </div>
                </div>
                <motion.span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ background: accent, boxShadow: `0 0 12px ${accent}` }}
                  animate={reduced ? undefined : { opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: REGIONS.findIndex((r) => r.code === code) * 0.4 }}
                  aria-hidden
                />
              </motion.li>
            ))}
          </motion.ul>

          <div className="relative mt-3 flex items-center justify-center gap-2 text-[11px] text-brand-on-dark/80">
            <svg className="w-3.5 h-3.5 text-brand-tag" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Follow-the-sun coverage across all time zones
          </div>
        </div>

        <div className="bg-white/[0.04] border-t border-white/[0.08] py-2.5 px-4 flex flex-wrap items-center gap-1.5">
          <span className="text-[10px] font-semibold tracking-[0.12em] uppercase text-brand-on-dark/70 mr-1">
            Compliant with
          </span>
          {certifications.map((name, i) => (
            <motion.span
              key={name}
              initial={reduced ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 + i * 0.08, ease: ease.out }}
              className="text-[10.5px] font-semibold text-brand-tag bg-brand-tag/[0.14] border border-brand-tag/[0.22] py-[2px] px-2 rounded-full"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function ConnectionBeams() {
  const reduced = useReducedMotion();
  if (reduced) return null;

  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 240"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="beam-grad-1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(45,212,191,0)" />
          <stop offset="50%" stopColor="rgba(45,212,191,0.7)" />
          <stop offset="100%" stopColor="rgba(45,212,191,0)" />
        </linearGradient>
      </defs>
      {[40, 110, 180].map((y, i) => (
        <motion.line
          key={y}
          x1="0"
          y1={y}
          x2="400"
          y2={y}
          stroke="url(#beam-grad-1)"
          strokeWidth="1"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 0.8, 0], pathLength: [0, 1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 + i * 0.8 }}
        />
      ))}
    </svg>
  );
}

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
          <circle cx="1" cy="1" r="0.9" className="fill-brand-steel" />
        </pattern>
        <mask id="continents">
          <rect width="400" height="200" fill="black" />
          <path d="M30 60 Q40 50 60 50 L90 55 Q105 60 110 75 L100 100 Q90 115 70 115 L50 105 Q35 95 30 80 Z" fill="white" />
          <path d="M95 115 Q105 115 112 125 L115 150 Q110 170 100 175 L90 170 Q85 155 88 140 Z" fill="white" />
          <path d="M180 55 Q195 50 210 55 L220 70 Q215 80 205 82 L185 80 Q175 70 180 60 Z" fill="white" />
          <path d="M195 90 Q215 88 225 100 L230 130 Q220 155 205 160 L190 150 Q183 130 188 110 Z" fill="white" />
          <path d="M225 50 Q260 45 295 55 L320 75 Q315 95 295 100 L255 95 Q230 85 225 70 Z" fill="white" />
          <path d="M310 135 Q330 130 345 140 L348 155 Q335 165 320 162 L308 155 Q305 145 310 138 Z" fill="white" />
        </mask>
      </defs>
      <rect width="400" height="200" fill="url(#dotgrid)" mask="url(#continents)" />
    </svg>
  );
}
