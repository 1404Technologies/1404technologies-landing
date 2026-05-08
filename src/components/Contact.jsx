import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useInView } from "../hooks/useInView";

const emptyForm = { name: "", email: "", phone: "", company: "", service: "", message: "" };

// Light input styles — the form lives on a white card now, so dark inputs were dropped.
const lightInput =
  "bg-[#F9FBFF] border border-blue-100 rounded-lg py-3 px-4 text-[14px] text-navy " +
  "placeholder:text-[#9AB0CF] focus:border-blue-500 focus:bg-white focus:outline-none " +
  "focus:ring-4 focus:ring-blue-500/15 w-full transition-all duration-150";

function MailIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.5a1 1 0 011 .76l1 4a1 1 0 01-.5 1.1L7.4 9.92a12 12 0 006.7 6.7l1.06-1.6a1 1 0 011.1-.5l4 1a1 1 0 01.76 1V19a2 2 0 01-2 2A16 16 0 013 5z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-18c2.5 3 4 7 4 9s-1.5 6-4 9c-2.5-3-4-7-4-9s1.5-6 4-9zM3 12h18" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-7 7-12a7 7 0 10-14 0c0 5 7 12 7 12zM12 11a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
}

export default function Contact({ website, websiteUrl, email, offices, serviceOptions }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [ref, visible] = useInView();

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await addDoc(collection(db, "1404technologies_consultation_requests"), {
        ...form,
        submittedAt: serverTimestamp(),
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section section--dark">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-20 items-start fade-up ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Left: contact info */}
        <div>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white mb-4 leading-[1.15] tracking-[-0.01em]">
            Ready to <em className="not-italic text-teal-400">transform</em> your operations?
          </h2>
          <p className="text-[16.5px] text-blue-200 leading-[1.7] mb-9 max-w-[520px]">
            Talk to our team today. We'll match you with the right services and pricing for your business size and industry.
          </p>

          {/* Offices grouped with their phone — region flag chip on each so the buyer can scan by country. */}
          <div className="flex flex-col gap-4 mb-8">
            {offices.map(({ label, region, address, phone }) => (
              <div
                key={label}
                className="bg-white/[0.05] border border-white/[0.10] rounded-xl p-5"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10.5px] font-bold tracking-[0.14em] uppercase text-teal-400">
                    {label}
                  </span>
                  <span className="text-[10px] font-bold tracking-[0.10em] uppercase text-blue-200/80 bg-white/[0.08] border border-white/[0.12] py-[2px] px-2 rounded-full">
                    {region}
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-[13px] text-blue-200 leading-[1.55] mb-2">
                  <span className="text-blue-300/80 mt-[2px] shrink-0"><PinIcon /></span>
                  {address}
                </div>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-[13px] text-blue-100 hover:text-white transition-colors"
                >
                  <span className="text-teal-400 shrink-0"><PhoneIcon /></span>
                  {phone}
                </a>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 text-[13.5px] text-blue-100 hover:text-white transition-colors duration-150"
            >
              <span className="text-teal-400 shrink-0"><MailIcon /></span>
              {email}
            </a>
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[13.5px] text-blue-100 hover:text-white transition-colors duration-150"
            >
              <span className="text-teal-400 shrink-0"><GlobeIcon /></span>
              {website}
            </a>
          </div>
        </div>

        {/* Right: form on lighter card so it reads as a form, not a media surface */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[20px] font-bold text-navy mb-2">Message received!</div>
              <div className="text-[14px] text-[#526A96] mb-6">
                We'll reply to <strong className="text-navy">{form.email}</strong> shortly.
              </div>
              <a href="#services" className="btn btn--primary">
                Explore our services ↓
              </a>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <div className="text-[20px] font-bold text-navy mb-1">Get in touch</div>
                <div className="text-[13.5px] text-[#526A96]">A member of our team will be in touch.</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="name" className="text-[12.5px] font-semibold text-[#354E7A]">
                      Full name <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="name"
                      className={lightInput}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="email" className="text-[12.5px] font-semibold text-[#354E7A]">
                      Work email <span className="text-blue-600">*</span>
                    </label>
                    <input
                      id="email"
                      className={lightInput}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="phone" className="text-[12.5px] font-semibold text-[#354E7A]">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        className={lightInput}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="company" className="text-[12.5px] font-semibold text-[#354E7A]">
                        Company
                      </label>
                      <input
                        id="company"
                        className={lightInput}
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="service" className="text-[12.5px] font-semibold text-[#354E7A]">
                      Service of interest
                    </label>
                    <select
                      id="service"
                      className={lightInput}
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="message" className="text-[12.5px] font-semibold text-[#354E7A]">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className={`${lightInput} resize-y min-h-[110px]`}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs…"
                    />
                  </div>
                  {status === "error" && (
                    <div className="text-[13px] text-red-600 bg-red-50 border border-red-200 rounded-lg py-3 px-4">
                      Something went wrong — please try again or email us at{" "}
                      <a href={`mailto:${email || "info@1404technologies.com"}`} className="underline font-semibold">
                        {email || "info@1404technologies.com"}
                      </a>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn--primary w-full justify-center py-[14px] text-[15px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send message →"}
                  </button>
                  <p className="text-[11.5px] text-[#7BAAC8] text-center leading-[1.55]">
                    By submitting you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-blue-600 transition-colors">
                      Privacy Policy
                    </a>
                    . We never share your data with third parties.
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
