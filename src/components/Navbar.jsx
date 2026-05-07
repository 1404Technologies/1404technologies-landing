import { useState } from "react";

export default function Navbar({ links, cta }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-white/[0.92] backdrop-blur-md shadow-sm">
      <div className="max-w-[1200px] mx-auto px-6 h-[68px] flex items-center justify-between">
        <a href="#" className="shrink-0">
          <img
            src="/logos/1404_logo_light.svg"
            alt="1404 Technologies"
            className="h-14 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-9">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-medium text-[#526A96] hover:text-blue-600 transition-colors duration-150"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="btn btn--primary py-[10px] px-5 text-[13px]">
            {cta}
          </a>
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[2px] bg-navy origin-center transition-transform duration-200 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[2px] bg-navy origin-center transition-transform duration-200 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white/[0.97] border-t border-blue-100 px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[15px] font-medium text-[#526A96] hover:text-blue-600 transition-colors duration-150"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
