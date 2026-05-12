import { motion, useReducedMotion } from "framer-motion";
import BorderBeam from "./motion/BorderBeam";
import { ease, duration, container, fadeUp } from "../lib/motion";

function FeatureQuote({ quote, author, role }) {
  const reduced = useReducedMotion();
  const initial = author.trim().charAt(0).toUpperCase();
  return (
    <motion.figure
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: duration.base, ease: ease.out }}
      whileHover={reduced ? undefined : { y: -4 }}
      className="relative bg-white border border-brand-border rounded-3xl px-8 md:px-14 py-12 md:py-16 shadow-[0_30px_70px_-24px_rgba(30,42,94,0.22)] overflow-hidden"
    >
      <BorderBeam color="#2563EB" duration={11} glowOpacity={0.35} thickness={1} />

      {/* Decorative quote glyph */}
      <span
        aria-hidden
        className="absolute -top-2 -left-2 text-[180px] md:text-[220px] font-extrabold leading-none text-brand-accent/[0.06] select-none pointer-events-none"
        style={{ fontFamily: "Georgia, serif" }}
      >
        “
      </span>

      <motion.div
        aria-hidden
        className="absolute -top-8 left-10 md:left-14 w-14 h-14 rounded-full bg-gradient-to-br from-brand-accent to-brand-accent-hover flex items-center justify-center shadow-[0_10px_30px_-6px_rgba(37,99,235,0.5)]"
        whileHover={reduced ? undefined : { rotate: -8, scale: 1.06 }}
        transition={{ duration: 0.35, ease: ease.out }}
      >
        <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.5A1.5 1.5 0 0 1 7 10h.17V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.5v-6.5H15.5A1.5 1.5 0 0 1 17 10h.17V6Z" />
        </svg>
      </motion.div>

      <blockquote className="relative text-[20px] md:text-[24px] leading-[1.5] text-brand font-medium tracking-[-0.008em] max-w-[68ch]">
        “{quote}”
      </blockquote>

      <figcaption className="relative mt-9 pt-6 border-t border-brand-surface flex items-center gap-4">
        <motion.div
          whileHover={reduced ? undefined : { scale: 1.06 }}
          transition={{ duration: 0.25, ease: ease.out }}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent to-brand-tag text-white flex items-center justify-center text-[18px] font-bold shrink-0 shadow-md"
        >
          {initial}
        </motion.div>
        <div>
          <div className="text-[15px] font-bold text-brand">{author}</div>
          <div className="text-[13px] text-brand-muted mt-0.5">{role}</div>
        </div>
      </figcaption>
    </motion.figure>
  );
}

export default function Testimonials({ items }) {
  if (!items?.length) return null;
  const featured = items.find((i) => !i.placeholder);

  return (
    <section id="testimonials" className="section section--muted relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(rgba(37,99,235,0.06) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
          maskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, #000, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 60% 70% at 50% 50%, #000, transparent 75%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.08)}
        className="section__header relative"
      >
        <motion.span variants={fadeUp} className="section__tag">Testimonials</motion.span>
        <motion.h2 variants={fadeUp} className="section__title">
          Trusted by businesses across the{" "}
          <em className="not-italic bg-gradient-to-r from-brand-accent to-brand-tag-bg bg-clip-text text-transparent">
            globe
          </em>
        </motion.h2>
        <motion.p variants={fadeUp} className="section__subtitle">
          Hear from the leaders who chose 1404 Technologies to run their operations.
        </motion.p>
      </motion.div>

      <div className="max-w-[1000px] mx-auto relative">
        {featured && <FeatureQuote {...featured} />}
      </div>
    </section>
  );
}
