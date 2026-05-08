export default function Footer({ contact, footerLinks, social, certifications, company }) {
  return (
    <footer className="bg-navy border-t border-white/[0.10] pt-14 pb-8 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-10">
          {/* Brand */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img
                src="/logos/1404_logo_dark.svg"
                alt="1404 Technologies"
                className="h-10 w-auto"
              />
            </a>
            <p className="text-[13px] text-[#7BAAC8] leading-[1.7] max-w-[260px] mb-5">
              Global BPO &amp; digital operations — London, U.S., and Nigeria.
            </p>

            {/* Compliance badges — second home for these so buyers can re-verify from the footer */}
            <div>
              <div className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-[#7BAAC8] mb-2">
                Compliant with
              </div>
              <div className="flex flex-wrap gap-1.5">
                {certifications.map((name) => (
                  <span
                    key={name}
                    className="text-[10.5px] font-semibold text-blue-100 bg-white/[0.06] border border-white/[0.12] py-[3px] px-2 rounded"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>

            {social?.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="1404 Technologies on LinkedIn"
                className="inline-flex items-center gap-2 mt-5 text-[13px] text-[#7BAAC8] hover:text-white transition-colors duration-150"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            )}
          </div>

          {/* Navigation */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#7BAAC8] mb-4">
              Navigation
            </div>
            <ul className="flex flex-col gap-2.5">
              {footerLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[13px] text-[#7BAAC8] hover:text-white transition-colors duration-150"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#7BAAC8] mb-4">
              Offices
            </div>
            <ul className="flex flex-col gap-2.5">
              {contact.offices.map(({ label, region }) => (
                <li
                  key={label}
                  className="text-[13px] text-[#7BAAC8]"
                >
                  <span className="text-teal-400 font-semibold mr-1.5">{region}</span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#7BAAC8] mb-4">
              Contact
            </div>
            <div className="flex flex-col gap-2.5">
              <a
                href={`mailto:${contact.email}`}
                className="text-[13px] text-[#7BAAC8] hover:text-white transition-colors duration-150"
              >
                {contact.email}
              </a>
              {contact.offices.map(({ region, phone }) => (
                <a
                  key={phone}
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="text-[13px] text-[#7BAAC8] hover:text-white transition-colors duration-150"
                >
                  <span className="text-teal-400 font-semibold mr-1.5">{region}</span>
                  {phone}
                </a>
              ))}
              <a
                href={contact.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] text-[#7BAAC8] hover:text-white transition-colors duration-150"
              >
                {contact.website}
              </a>
            </div>
          </div>
        </div>

        {/* UK Ltd. legal block — required for commercial UK companies. Number/VAT empty until provided. */}
        {company?.registeredName && (
          <div className="border-t border-white/[0.08] pt-6 pb-2">
            <div className="text-[11.5px] text-[#526A96] leading-[1.7] max-w-[860px]">
              <span className="text-[#7BAAC8] font-semibold">{company.registeredName}</span>
              {company.registeredNumber && (
                <>
                  {" "}is a company registered in England &amp; Wales (No.{" "}
                  <span className="text-[#7BAAC8]">{company.registeredNumber}</span>).
                </>
              )}
              {company.registeredOffice && (
                <>
                  {" "}Registered office:{" "}
                  <span className="text-[#7BAAC8]">{company.registeredOffice}</span>.
                </>
              )}
              {company.vatNumber && (
                <>
                  {" "}VAT No. <span className="text-[#7BAAC8]">{company.vatNumber}</span>.
                </>
              )}
            </div>
          </div>
        )}

        {/* Bottom row */}
        <div className="border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-[12px] text-[#526A96]">
            © {new Date().getFullYear()} 1404 Technologies Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-5">
            <a
              href="/privacy"
              className="text-[12px] text-[#526A96] hover:text-[#7BAAC8] transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[12px] text-[#526A96] hover:text-[#7BAAC8] transition-colors duration-150"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
