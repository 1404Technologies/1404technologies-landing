import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebase";

const inputClass =
  "bg-white/[0.11] border border-white/[0.18] rounded-[6px] py-3 px-4 text-[13px] text-white " +
  "placeholder:text-[#7BAAC8] focus:border-teal-500 focus:outline-none w-full transition-colors duration-150";

const emptyForm = { name: "", email: "", company: "", service: "", message: "" };

export default function Contact({ website, email, phones, offices, serviceOptions }) {
  const [form, setForm] = useState(emptyForm);
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

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
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-[10px] text-[13px] text-blue-200">
              <span className="text-[17px] shrink-0">✉</span>
              <span>{email}</span>
            </div>
            {phones.map((phone) => (
              <div key={phone} className="flex items-center gap-[10px] text-[13px] text-blue-200">
                <span className="text-[17px] shrink-0">📞</span>
                <span>{phone}</span>
              </div>
            ))}
            <div className="flex items-center gap-[10px] text-[13px] text-blue-200">
              <span className="text-[17px] shrink-0">🌐</span>
              <span>{website}</span>
            </div>
          </div>
        </div>

        <div className="bg-white/[0.07] border border-white/[0.14] rounded-2xl p-10 flex flex-col gap-5">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="text-[48px] mb-4">✓</div>
              <div className="text-[20px] font-bold text-white mb-2">Message received!</div>
              <div className="text-[14px] text-[#9ca3af]">We'll be in touch within one business day.</div>
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
                    <label className="text-[13px] font-semibold text-blue-200">Full name</label>
                    <input
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
                    <label className="text-[13px] font-semibold text-blue-200">Work email</label>
                    <input
                      className={inputClass}
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-semibold text-blue-200">Company</label>
                    <input
                      className={inputClass}
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Acme Corp"
                    />
                  </div>
                  <div className="flex flex-col gap-[6px]">
                    <label className="text-[13px] font-semibold text-blue-200">Service of interest</label>
                    <select
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
                    <label className="text-[13px] font-semibold text-blue-200">Message</label>
                    <textarea
                      className={`${inputClass} resize-y min-h-[100px]`}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your needs…"
                    />
                  </div>
                  {status === "error" && (
                    <div className="text-[13px] text-red-400">
                      Something went wrong — please try again or email us directly.
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn btn--primary w-full justify-center py-4 text-[17px] disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? "Sending…" : "Send message →"}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
