import { useInView } from "../hooks/useInView";

function FeatureQuote({ quote, author, role }) {
  const initial = author.trim().charAt(0).toUpperCase();
  return (
    <figure className="relative bg-white border border-blue-100 rounded-3xl px-8 md:px-12 py-10 md:py-12 shadow-[0_24px_60px_-20px_rgba(30,42,94,0.18)]">
      <div
        aria-hidden
        className="absolute -top-6 left-10 md:left-12 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center shadow-lg"
      >
        <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.5A1.5 1.5 0 0 1 7 10h.17V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.5v-6.5H15.5A1.5 1.5 0 0 1 17 10h.17V6Z" />
        </svg>
      </div>

      <blockquote className="text-[19px] md:text-[22px] leading-[1.55] text-navy font-medium tracking-[-0.005em]">
        “{quote}”
      </blockquote>

      <figcaption className="mt-7 pt-6 border-t border-blue-50 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-teal-400 text-white flex items-center justify-center text-[18px] font-bold shrink-0 shadow-md">
          {initial}
        </div>
        <div>
          <div className="text-[15px] font-bold text-navy">{author}</div>
          <div className="text-[13px] text-[#526A96] mt-0.5">{role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

// Empty testimonial slot — looks intentional, not broken. Held for future quotes.
function PlaceholderQuote() {
  return (
    <div
      className="relative bg-white/60 border border-dashed border-blue-200 rounded-3xl px-8 py-10
                 flex flex-col justify-center items-center text-center min-h-[260px]"
      aria-hidden
    >
      <svg
        className="w-7 h-7 text-blue-300 mb-3"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.5v-6.5H5.5A1.5 1.5 0 0 1 7 10h.17V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.5v-6.5H15.5A1.5 1.5 0 0 1 17 10h.17V6Z" />
      </svg>
      <div className="text-[12.5px] font-semibold tracking-[0.10em] uppercase text-[#7BAAC8]">
        More client stories
      </div>
      <div className="text-[12.5px] text-[#7BAAC8] mt-1">coming soon</div>
    </div>
  );
}

export default function Testimonials({ items }) {
  const [headerRef, headerVisible] = useInView();
  const [bodyRef, bodyVisible] = useInView();

  if (!items?.length) return null;

  const featured = items.find((i) => !i.placeholder);
  const placeholders = items.filter((i) => i.placeholder);

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
        ref={bodyRef}
        className={`max-w-[1200px] mx-auto fade-up ${bodyVisible ? "is-visible" : ""}`}
      >
        {/* Featured quote takes 2/3, two placeholder slots stack on the right.
            Once user adds 2 more real quotes, swap the placeholders for FeatureQuote. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="lg:col-span-2">
            {featured && <FeatureQuote {...featured} />}
          </div>
          <div className="flex flex-col gap-5">
            {placeholders.map((_, i) => (
              <PlaceholderQuote key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
