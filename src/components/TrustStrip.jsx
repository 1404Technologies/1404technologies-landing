import { motion, useReducedMotion } from "framer-motion";
import { ease, duration, container } from "../lib/motion";

export default function TrustStrip({ partnersLabel, partners }) {
  return (
    <section className="bg-white border-y border-brand-border py-14 px-6 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,42,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,94,0.04) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 70% 100% at 50% 50%, #000 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 100% at 50% 50%, #000 30%, transparent 75%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={container(0.06)}
        className="max-w-[1200px] mx-auto relative text-center"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: duration.base, ease: ease.out } },
          }}
          className="text-[11px] font-semibold tracking-[0.18em] uppercase text-brand-steel mb-8 inline-flex items-center gap-3"
        >
          <span className="h-px w-8 bg-brand-border-2" aria-hidden />
          {partnersLabel}
          <span className="h-px w-8 bg-brand-border-2" aria-hidden />
        </motion.div>

        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {partners.map(({ name, src }) => (
            <PartnerLogo key={name} name={name} src={src} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function PartnerLogo({ name, src }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: ease.out } },
      }}
      whileHover={reduced ? undefined : { y: -3, scale: 1.05 }}
      transition={{ duration: 0.2, ease: ease.out }}
      className="flex items-center justify-center h-9 cursor-default"
    >
      <img
        src={src}
        alt={name}
        className="h-7 w-auto opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
        loading="lazy"
        onError={(e) => {
          const fallback = document.createElement("span");
          fallback.className = "text-[14px] font-semibold tracking-tight text-brand-muted hover:text-brand transition-colors";
          fallback.textContent = name;
          e.currentTarget.replaceWith(fallback);
        }}
      />
    </motion.div>
  );
}
