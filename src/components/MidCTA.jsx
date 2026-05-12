import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import { useIsMobile } from "../hooks/useIsMobile";
import { container, fadeUp } from "../lib/motion";

export default function MidCTA() {
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();

  return (
    <section className="bg-white px-6 py-16 border-y border-brand-border relative overflow-hidden">
      {/* Slow conic sweep — desktop only (heavy on mobile GPUs) */}
      {!reduced && !isMobile && (
        <motion.div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(37,99,235,0.08) 60deg, transparent 120deg, transparent 240deg, rgba(45,212,191,0.06) 300deg, transparent 360deg)",
            filter: "blur(40px)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.08)}
        className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative"
      >
        <motion.div variants={fadeUp}>
          <div className="text-[21px] md:text-[23px] font-bold text-brand leading-snug tracking-[-0.012em]">
            Ready to see what 1404 can do for your operations?
          </div>
          <div className="text-[14.5px] text-brand-muted mt-1.5">
            Book a free consultation. No prep required, no obligation.
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="flex items-center gap-4 shrink-0">
          <MagneticButton as="a" href="#contact" className="btn btn--primary" strength={12}>
            <span>Book a free consultation</span>
            <span aria-hidden>→</span>
          </MagneticButton>
          <a
            href="#pricing"
            className="text-[14px] font-semibold text-brand-accent hover:text-brand-accent-hover transition-colors relative group"
          >
            See pricing
            <span
              aria-hidden
              className="absolute left-0 right-0 -bottom-0.5 h-px bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
