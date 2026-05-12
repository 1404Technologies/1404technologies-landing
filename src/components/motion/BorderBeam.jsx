import { useId } from "react";
import { useReducedMotion } from "framer-motion";

// Rotating conic-gradient confined to a 1px border via mask-composite.
// Parent must be `relative` and have a border-radius matching `radius` prop.
// Works in all modern browsers (Chrome 120+, Safari 15.4+, Firefox 120+).
export default function BorderBeam({
  duration = 6,
  className = "",
  color = "#2DD4BF",
  glowOpacity = 0.6,
  thickness = 1.5,
}) {
  const reduced = useReducedMotion();
  const reactId = useId();
  if (reduced) return null;

  const id = `beam-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden ${className}`}
    >
      <span
        className="absolute"
        style={{
          inset: `-${thickness}px`,
          background: `conic-gradient(from 0deg, transparent 0%, ${color} 18%, transparent 38%, transparent 100%)`,
          opacity: glowOpacity,
          animation: `${id}-spin ${duration}s linear infinite`,
          WebkitMask: `linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: `${thickness}px`,
          borderRadius: "inherit",
        }}
      />
      <style>{`
        @keyframes ${id}-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </span>
  );
}
