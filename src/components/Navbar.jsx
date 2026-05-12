import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ease, duration } from "../lib/motion";

export default function Navbar({ links, cta }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", "")).filter(Boolean);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [links]);

  return (
    <motion.nav
      initial={reduced ? false : { y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: duration.base, ease: ease.out }}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? "bg-white/[0.92] backdrop-blur-xl shadow-[0_1px_0_rgba(30,42,94,0.06),0_8px_24px_-12px_rgba(30,42,94,0.18)]"
          : "bg-white/[0.70] backdrop-blur-md"
      }`}
    >
      <div
        className={`max-w-[1200px] mx-auto px-6 flex items-center justify-between gap-6 transition-[height] duration-300 ${
          scrolled ? "h-[60px]" : "h-[76px]"
        }`}
      >
        <a href="#" className="shrink-0 group">
          <motion.img
            src="/logos/1404_logo_light.svg"
            alt="1404 Technologies"
            className={`w-auto transition-[height] duration-300 ${scrolled ? "h-8" : "h-9"}`}
            whileHover={reduced ? undefined : { scale: 1.03 }}
            transition={{ duration: 0.2 }}
          />
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`relative inline-flex text-[13px] font-medium tracking-[-0.005em] py-2 px-3.5 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "text-brand-accent"
                      : "text-brand-slate hover:text-brand"
                  }`}
                >
                  {isActive && !reduced && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-brand-accent/[0.08]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative">{label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <motion.a
            href="#contact"
            whileHover={reduced ? undefined : { y: -1 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="hidden sm:inline-flex btn btn--primary py-[10px] px-5 text-[13px]"
          >
            {cta} <span aria-hidden>→</span>
          </motion.a>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2, ease: ease.inOut }}
              className="block w-5 h-[2px] bg-brand origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-5 h-[2px] bg-brand"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2, ease: ease.inOut }}
              className="block w-5 h-[2px] bg-brand origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: ease.inOut }}
            className="md:hidden overflow-hidden bg-white/[0.97] backdrop-blur-xl border-t border-brand-border"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
              className="px-6 py-5 flex flex-col gap-3"
            >
              {links.map(({ label, href }) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  variants={{
                    hidden: { opacity: 0, x: -12 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: ease.out } },
                  }}
                  className="text-[15px] font-medium text-brand-slate hover:text-brand-accent transition-colors duration-150"
                >
                  {label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setOpen(false)}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: ease.out } },
                }}
                className="mt-2 btn btn--primary justify-center sm:hidden"
              >
                {cta} →
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
