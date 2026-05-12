import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Animates the numeric portion of a string (e.g. "85% reduction in phishing").
// Plays once when scrolled into view.
export default function NumberTicker({ children, duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();

  const text = typeof children === "string" ? children : "";
  // Match the first run of digits (optionally with a decimal).
  const match = text.match(/(\d+(?:\.\d+)?)/);
  const [display, setDisplay] = useState(reduced || !match ? text : text.replace(match[0], "0"));

  useEffect(() => {
    if (!inView || !match || reduced) return;
    const target = parseFloat(match[0]);
    const start = performance.now();
    let raf;
    const decimals = match[0].includes(".") ? 1 : 0;
    const step = (now) => {
      const t = Math.min(1, (now - start) / (duration * 1000));
      const eased = 1 - Math.pow(1 - t, 3);
      const current = (target * eased).toFixed(decimals);
      setDisplay(text.replace(match[0], current));
      if (t < 1) raf = requestAnimationFrame(step);
      else setDisplay(text);
    };
    raf = requestAnimationFrame(step);
    return () => raf && cancelAnimationFrame(raf);
  }, [inView, match, text, duration, reduced]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}
