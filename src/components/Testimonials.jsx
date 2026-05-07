import { useInView } from "../hooks/useInView";

function TestimonialCard({ quote, author, role }) {
  return (
    <div className="bg-white border border-blue-100 rounded-2xl p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="text-[52px] leading-none text-blue-600 opacity-20 font-serif mb-3 select-none">"</div>
      <p className="text-[15px] leading-[1.75] text-navy italic mb-6 flex-1">{quote}</p>
      <div className="border-t border-blue-50 pt-5">
        <div className="text-[14px] font-bold text-navy">{author}</div>
        <div className="text-[12px] text-[#526A96] mt-1">{role}</div>
      </div>
    </div>
  );
}

export default function Testimonials({ items, certifications }) {
  const [headerRef, headerVisible] = useInView();
  const [gridRef, gridVisible] = useInView();
  const [certRef, certVisible] = useInView();

  return (
    <section id="testimonials" className="section section--muted">
      <div
        ref={headerRef}
        className={`section__header fade-up ${headerVisible ? "is-visible" : ""}`}
      >
        <span className="section__tag">Testimonials</span>
        <h2 className="section__title">Trusted by businesses across the globe</h2>
        <p className="section__subtitle">
          Hear from the leaders who chose 1404 Technologies to run their operations.
        </p>
      </div>

      <div
        ref={gridRef}
        className={`max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${gridVisible ? "is-visible" : ""}`}
      >
        {items.map(({ quote, author, role }) => (
          <TestimonialCard key={author} quote={quote} author={author} role={role} />
        ))}
      </div>

      <div
        ref={certRef}
        className={`max-w-[1200px] mx-auto mt-16 flex justify-center items-center gap-4 flex-wrap fade-up ${certVisible ? "is-visible" : ""}`}
      >
        <span className="text-[13px] text-[#526A96] font-medium mr-2">Certified &amp; compliant:</span>
        {certifications.map((cert) => (
          <span
            key={cert}
            className="inline-flex items-center gap-[6px] bg-white border border-blue-100
                       rounded-full py-2 px-4 text-[13px] font-semibold text-navy
                       before:content-['🔒'] before:text-[12px]"
          >
            {cert}
          </span>
        ))}
      </div>
    </section>
  );
}
