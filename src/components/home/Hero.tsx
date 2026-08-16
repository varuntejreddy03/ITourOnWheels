import hero from "@/assets/hero-taj-sunrise.webp";
import { Action } from "@/components/site/Primitives";
import { Reveal, useParallax } from "@/components/site/Reveal";

const tags = ["Private journeys.", "Personal hosting.", "Unforgettable India."];

const trustPoints = [
  { label: "Group Size", value: "Up to 20" },
  { label: "Dedicated Host", value: "Arrival to Departure" },
  { label: "Airport Transfers", value: "Included" },
  { label: "Response", value: "24/7" },
];

export function Hero() {
  const { ref, offset } = useParallax(0.08);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      {/* Background */}
      <div ref={ref} className="absolute inset-0">
        <img
          src={hero}
          alt="The Taj Mahal at sunrise"
          width={1920}
          height={1088}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
          className="h-full w-full object-cover"
        />
        {/* Heavy gradient — ensures text is always legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/15" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-10 pt-40 md:px-12 md:pb-14">

        {/* Premium tag strip */}
        <Reveal>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            {tags.map((tag, i) => (
              <span key={tag} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="h-[3px] w-[3px] rounded-full bg-sand/70" />
                )}
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.28em] text-sand drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                  {tag}
                </span>
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="mt-7 max-w-4xl text-sand" style={{ lineHeight: 0.95 }}>
            <span className="block font-[family-name:var(--font-display-alt)] text-[clamp(2.75rem,8vw,7rem)] font-medium tracking-[-0.02em] text-sand">
              India, Beyond
            </span>
            <span className="block font-[family-name:var(--font-display-alt)] text-[clamp(2.75rem,8vw,7rem)] font-light tracking-[-0.02em] text-sand/90">
              the Itinerary.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-xl text-base leading-[1.9] text-sand/70 md:text-lg">
            Experience Delhi, Agra, Jaipur &amp; Rishikesh through a journey designed around you — with local insight, seamless travel, and a host personally by your side.
          </p>
          <p className="mt-3 text-sm text-sand/45">
            Curated for those who want to experience India, not simply visit it.
          </p>
        </Reveal>

        <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-4">
          <Action to="/journeys">Explore The Journey</Action>
          <Action to="/contact" variant="light">Talk to Us First</Action>
        </Reveal>

        {/* Trust bar */}
        <Reveal delay={440}>
          <div className="mt-14 grid grid-cols-2 gap-px border-t border-sand/10 bg-sand/8 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label} className="bg-ink/60 px-6 py-5 backdrop-blur-sm">
                <p className="text-[0.56rem] uppercase tracking-[0.28em] text-sand/38">{point.label}</p>
                <p className="mt-1.5 font-[family-name:var(--font-display)] text-[1.05rem] text-sand/90">{point.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.52rem] uppercase tracking-[0.32em] text-sand/30">Scroll</span>
        <span className="relative h-10 w-[1px] overflow-hidden bg-sand/15">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollLine_1.8s_ease-in-out_infinite] bg-sand/50" />
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
