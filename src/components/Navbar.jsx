import { useState, useEffect } from "react";

export default function Navbar({ links, cta }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("");

  // Subtle bg/shadow change once the user scrolls past hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track which section is in view so the matching nav link highlights
  useEffect(() => {
    const ids = links.map((l) => l.href.replace("#", "")).filter(Boolean);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
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
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-200 ${
        scrolled
          ? "bg-white/[0.94] backdrop-blur-md shadow-[0_2px_12px_rgba(30,42,94,0.08)]"
          : "bg-white/[0.85] backdrop-blur-sm"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between gap-6">
        <a href="#" className="shrink-0">
          <img
            src="/logos/1404_logo_light.svg"
            alt="1404 Technologies"
            className="h-9 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {links.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={label}>
                <a
                  href={href}
                  className={`relative text-[13px] font-medium transition-colors duration-150 py-2 ${
                    isActive ? "text-blue-600" : "text-[#526A96] hover:text-blue-600"
                  }`}
                >
                  {label}
                  <span
                    aria-hidden
                    className={`absolute left-0 right-0 -bottom-0.5 h-[2px] rounded-full bg-blue-600 transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn--primary py-[10px] px-5 text-[13px]">
            {cta} →
          </a>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className={`block w-5 h-[2px] bg-navy origin-center transition-transform duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy origin-center transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/[0.97] border-t border-blue-100 px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-[#526A96] hover:text-blue-600 transition-colors duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
