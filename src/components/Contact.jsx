import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";
import { useInView } from "../hooks/useInView";

const inputClass =
  "bg-white/[0.11] border border-white/[0.18] rounded-[6px] py-3 px-4 text-[13px] text-white " +
  "placeholder:text-[#7BAAC8] focus:border-teal-500 focus:outline-none w-full transition-colors duration-150";

const emptyForm = { name: "", email: "", phone: "", company: "", service: "", message: "" };

export default function Contact({ website, websiteUrl, email, phones, offices, serviceOptions }) {
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
        className={`max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start fade-up ${visible ? "is-visible" : ""}`}
      >
        {/* Left: contact info */}
        <div>
          <h2 className="text-[clamp(28px,3.5vw,40px)] font-bold text-white mb-4 leading-snug">
            Ready to <em className="not-italic text-teal-400">transform</em> your operations?
          </h2>
          <p className="text-[17px] text-blue-300 leading-[1.7] mb-10">
            Talk to our team today. We'll match you with the right services and pricing for your business size and industry.
          </p>

          <div className="flex flex-col gap-5 mb-8">
            {offices.map(({ label, address }) => (
              <div key={label}>
                <div className="text-[12px] font-bold tracking-[0.08em] uppercase text-teal-400 mb-1">
                  {label}
                </div>
                <div className="text-[13px] text-blue-300 leading-normal">{address}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-[10px] text-[13px] text-blue-200 hover:text-white transition-colors duration-150"
            >
              <span className="text-[17px] shrink-0">✉</span>
              <span>{email}</span>
            </a>
            {phones.map(({ label, number }) => (
              <a
                key={number}
                href={`tel:${number.replace(/\s/g, "")}`}
                className="flex items-center gap-[10px] text-[13px] text-blue-200 hover:text-white transition-colors duration-150"
              >
                <span className="text-[17px] shrink-0">📞</span>
                <span>
                  <span className="text-[11px] font-semibold text-teal-400 mr-1">{label}</span>
                  {number}
                </span>
              </a>
            ))}
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[10px] text-[13px] text-blue-200 hover:text-white transition-colors duration-150"
            >
              <span className="text-[17px] shrink-0">🌐</span>
              <span>{website}</span>
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="bg-white/[0.07] border border-white/[0.14] rounded-2xl p-10 flex flex-col gap-5">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-500/[0.15] border border-emerald-500/[0.25] flex items-center justify-center mx-auto mb-5">
                <svg className="w-8 h-8 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="text-[20px] font-bold text-white mb-2">Message received!</div>
              <div className="text-[14px] text-blue-300 mb-6">
                We'll reply to{" "}
                <strong className="text-white">{form.email}</strong>{" "}
                within one business day.
              </div>
              <a href="#services" className="btn btn--outline-white text-[14px] py-3 px-5">
                Explore our services ↓
              </a>
            </div>
          ) : (
            <>
              <div>
                <div className="text-xl font-bold text-white mb-1">Get in touch</div>
                <div className="text-[13px] text-blue-300">We respond within one business day.</div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="name" className="text-[13px] font-semibold text-blue-200">
                      Full name <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="name"
                      className={inputClass}
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="email" className="text-[13px] font-semibold text-blue-200">
                      Work email <span className="text-teal-400">*</span>
                    </label>
                    <input
                      id="email"
                      className={inputClass}
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
                      <label htmlFor="phone" className="text-[13px] font-semibold text-blue-200">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        className={inputClass}
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <label htmlFor="company" className="text-[13px] font-semibold text-blue-200">
                        Company
                      </label>
                      <input
                        id="company"
                        className={inputClass}
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="service" className="text-[13px] font-semibold text-blue-200">
                      Service of interest
                    </label>
                    <select
                      id="service"
                      className={inputClass}
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="" className="bg-navy-2 text-white">Select a service…</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-navy-2 text-white">{opt}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label htmlFor="message" className="text-[13px] font-semibold text-blue-200">
                      Message
                    </label>
                    <textarea
                      id="message"
                      className={`${inputClass} resize-y min-h-[100px]`}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs…"
                    />
                  </div>
                  {status === "error" && (
                    <div className="text-[13px] text-red-400 bg-red-400/[0.08] border border-red-400/[0.2] rounded-[6px] py-3 px-4">
                      Something went wrong — please try again or email us at{" "}
                      <a href={`mailto:${email || "info@1404technologies.com"}`} className="underline">
                        {email || "info@1404technologies.com"}
                      </a>
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn--primary w-full justify-center py-4 text-[17px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send message →"}
                  </button>
                  <p className="text-[11px] text-[#7BAAC8] text-center">
                    By submitting you agree to our{" "}
                    <a href="/privacy" className="underline hover:text-blue-300 transition-colors">
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
