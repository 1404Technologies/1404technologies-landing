import { useInView } from "../hooks/useInView";

export default function TrustStrip({ /* clientsLabel, clientLogos, */ partnersLabel, partners }) {
  const [ref, visible] = useInView();

  return (
    <section className="bg-white border-y border-blue-100 py-12 px-6">
      <div
        ref={ref}
        className={`max-w-[1200px] mx-auto fade-up ${visible ? "is-visible" : ""}`}
      >
        {/* Clients row — commented out until real logos are provided.
        <div className="text-center mb-10">
          <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#7BAAC8] mb-5">
            {clientsLabel}
          </div>
          {clientLogos && clientLogos.length > 0 ? (
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
              {clientLogos.map((logo) => (
                <img
                  key={logo.name}
                  src={logo.src}
                  alt={logo.name}
                  className="h-7 w-auto"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-[760px] mx-auto">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 rounded-md bg-[#F5F8FF] border border-dashed border-blue-200 flex items-center justify-center text-[10px] tracking-[0.12em] uppercase text-[#7BAAC8]"
                  aria-hidden
                >
                  Client logo
                </div>
              ))}
            </div>
          )}
        </div>
        */}

        {/* Partners row — names are real (from brochure); the image paths point to logo files
            the user will drop into /public/logos/partners/. Until they exist, render names. */}
        <div className="text-center">
          <div className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#7BAAC8] mb-5">
            {partnersLabel}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {partners.map(({ name, src }) => (
              <PartnerLogo key={name} name={name} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Renders the partner logo if the file is present; otherwise shows the partner name as a
// neutral wordmark. This way the section always looks intentional, never broken.
function PartnerLogo({ name, src }) {
  return (
    <div className="flex items-center justify-center h-8">
      <img
        src={src}
        alt={name}
        className="h-7 w-auto opacity-60 hover:opacity-90 transition-opacity duration-200"
        loading="lazy"
        onError={(e) => {
          // Replace broken image with a wordmark fallback in the same flex slot.
          const fallback = document.createElement("span");
          fallback.className =
            "text-[13px] font-semibold tracking-tight text-[#526A96] hover:text-navy transition-colors";
          fallback.textContent = name;
          e.currentTarget.replaceWith(fallback);
        }}
      />
    </div>
  );
}
