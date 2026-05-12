import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Animates the numeric portion of a string (e.g. "85% reduction in phishing").
// Plays once when scrolled into view.
export default function NumberTicker({ children, duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();

  const text = typeof children === "string" ? children : "";
  const matched = text.match(/(\d+(?:\.\d+)?)/);
  const numberStr = matched ? matched[0] : null;

  const [display, setDisplay] = useState(() =>
    reduced || !numberStr ? text : text.replace(numberStr, "0")
  );

  useEffect(() => {
    if (!inView || !numberStr || reduced) return;
    const target = parseFloat(numberStr);
    const decimals = numberStr.includes(".") ? 1 : 0;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (target * eased).toFixed(decimals);
      setDisplay(text.replace(numberStr, current));
      if (t < 1) raf = requestAnimationFrame(step);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [inView, numberStr, text, duration, reduced]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
