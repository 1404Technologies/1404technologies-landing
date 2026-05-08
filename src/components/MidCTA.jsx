import { useInView } from "../hooks/useInView";

export default function MidCTA() {
  const [ref, visible] = useInView();

  return (
    <section className="bg-white px-6 py-14 border-y border-blue-100">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6 fade-up ${
          visible ? "is-visible" : ""
        }`}
      >
        <div>
          <div className="text-[20px] md:text-[22px] font-bold text-navy leading-snug">
            Ready to see what 1404 can do for your operations?
          </div>
          <div className="text-[14.5px] text-[#526A96] mt-1">
            Book a free consultation. No prep required, no obligation.
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a href="#contact" className="btn btn--primary">
            Book a free consultation →
          </a>
          <a href="#pricing" className="text-[14px] font-semibold text-blue-600 hover:underline">
            See pricing
          </a>
        </div>
      </div>
    </section>
  );
}
