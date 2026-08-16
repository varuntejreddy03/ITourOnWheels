const flyers = [
  "/WhatsApp Image 2026-08-16 at 12.05.11 AM (1).jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.11 AM.jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.12 AM.jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.13 AM (1).jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.13 AM (2).jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.13 AM (3).jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.13 AM.jpeg",
  "/WhatsApp Image 2026-08-16 at 12.05.14 AM.jpeg",
];

// Duplicate for seamless loop
const track = [...flyers, ...flyers];

export function SocialStrip() {
  return (
    <section className="overflow-hidden border-y border-line bg-sand-deep/30 py-10">
      <p className="mb-6 text-center text-[0.62rem] uppercase tracking-[0.32em] text-ink/35">
        As Shared On Social
      </p>
      <div className="flex animate-[socialScroll_30s_linear_infinite] gap-4 will-change-transform">
        {track.map((src, i) => (
          <div
            key={i}
            className="h-52 w-40 shrink-0 overflow-hidden rounded-sm shadow-sm"
          >
            <img
              src={src}
              alt="India Tour on Wheels promotional"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <style>{`
        @keyframes socialScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
