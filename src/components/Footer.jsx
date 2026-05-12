import { motion, useReducedMotion } from "framer-motion";
import { ease, container, fadeUp } from "../lib/motion";

export default function Footer({ contact, footerLinks, social, certifications, company }) {
  const reduced = useReducedMotion();

  return (
    <footer className="bg-brand border-t border-white/[0.10] pt-16 pb-8 px-6 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 70% 80% at 50% 0%, #000, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 80% at 50% 0%, #000, transparent 80%)",
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={container(0.08)}
        className="max-w-[1200px] mx-auto relative"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
          <motion.div variants={fadeUp}>
            <a href="#" className="inline-block mb-4 group">
              <motion.img
                src="/logos/1404_logo_dark.svg"
                alt="1404 Technologies"
                className="h-10 w-auto"
                whileHover={reduced ? undefined : { scale: 1.04 }}
                transition={{ duration: 0.25 }}
              />
            </a>
            <p className="text-[13px] text-brand-steel leading-[1.7] max-w-[260px] mb-6">
              Global BPO &amp; digital operations — London, U.S., and Nigeria.
            </p>

            <div>
              <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-2">
                Compliant with
              </div>
              <div className="flex flex-wrap gap-1.5">
                {certifications.map((name, i) => (
                  <motion.span
                    key={name}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06, ease: ease.out }}
                    whileHover={reduced ? undefined : { y: -2, borderColor: "rgba(45,212,191,0.3)" }}
                    className="text-[10.5px] font-semibold text-brand-on-dark bg-white/[0.06] border border-white/[0.12] py-[3px] px-2 rounded"
                  >
                    {name}
                  </motion.span>
                ))}
              </div>
            </div>

            {social?.linkedin && (
              <motion.a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="1404 Technologies on LinkedIn"
                whileHover={reduced ? undefined : { x: 2 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2 mt-5 text-[13px] text-brand-steel hover:text-white transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/[0.12] flex items-center justify-center group-hover:bg-brand-accent/20 group-hover:border-brand-accent/40 transition-colors duration-200">
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                LinkedIn
              </motion.a>
            )}
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-4">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13px] text-brand-steel hover:text-white transition-colors duration-200 inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-tag opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-4">
              Offices
            </div>
            <ul className="flex flex-col gap-2.5">
              {contact.offices.map(({ label, region }) => (
                <li key={label} className="text-[13px] text-brand-steel">
                  <span className="text-brand-tag font-semibold mr-1.5">{region}</span>
                  {label}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-brand-steel mb-4">
              Contact
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${contact.email}`}
                className="text-[13px] text-brand-steel hover:text-white transition-colors duration-200"
              >
                {contact.email}
              </a>
              {contact.offices.map(({ region, phone }) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-[13px] text-brand-steel hover:text-white transition-colors duration-200"
                >
                  <span className="text-brand-tag font-semibold mr-1.5">{region}</span>
                  {phone}
                </a>
              ))}
              <a
                href={contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-brand-steel hover:text-white transition-colors duration-200"
              >
                {contact.website}
              </a>
            </div>
          </motion.div>
        </div>

        {company?.registeredName && (
          <motion.div variants={fadeUp} className="border-t border-white/[0.08] pt-6 pb-2">
            <div className="text-[11.5px] text-brand-muted leading-[1.7] max-w-[860px]">
              <span className="text-brand-steel font-semibold">{company.registeredName}</span>
              {company.registeredNumber && (
                <> is a company registered in England &amp; Wales (No.{" "}
                  <span className="text-brand-steel">{company.registeredNumber}</span>).
                </>
              )}
              {company.registeredOffice && (
                <> Registered office:{" "}
                  <span className="text-brand-steel">{company.registeredOffice}</span>.
                </>
              )}
              {company.vatNumber && (
                <> VAT No. <span className="text-brand-steel">{company.vatNumber}</span>.</>
              )}
            </div>
          </motion.div>
        )}

        <motion.div
          variants={fadeUp}
          className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
        >
          <div className="text-[12px] text-brand-muted">
            © {new Date().getFullYear()} 1404 Technologies Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="text-[12px] text-brand-muted hover:text-brand-steel transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[12px] text-brand-muted hover:text-brand-steel transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
