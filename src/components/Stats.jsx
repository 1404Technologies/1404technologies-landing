export default function Stats({ items }) {
  return (
    <section className="bg-teal-600 py-14 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
        {items.map(({ value, label }) => (
          <div key={label} className="text-center">
            <div className="text-[clamp(32px,4vw,48px)] font-extrabold text-white leading-tight mb-2">
              {value}
            </div>
            <div className="text-[13px] font-medium text-white/[0.88]">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
