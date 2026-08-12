import hero from "@/assets/hero-taj-sunrise.webp";
import { Action, Eyebrow } from "@/components/site/Primitives";
import { Reveal, useParallax } from "@/components/site/Reveal";

const trustPoints = [
  { label: "Private Tours", value: "Just Your Party" },
  { label: "Dedicated Host", value: "With You Throughout" },
  { label: "Hotels", value: "4 & 5-Star Only" },
  { label: "Response Time", value: "Within 24 Hours" },
];

export function Hero() {
  const { ref, offset } = useParallax(0.08);

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink">
      {/* Background image */}
      <div ref={ref} className="absolute inset-0">
        <img
          src={hero}
          alt="The Taj Mahal at sunrise seen across misty gardens"
          width={1920}
          height={1088}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
          className="h-full w-full object-cover"
        />
        {/* Gradient — heavier at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/40 to-ink/20" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-10 pt-40 md:px-12 md:pb-14">
        <Reveal>
          <Eyebrow className="text-teal/90">
            Private Cultural Journeys · Designed for U.S. Travelers
          </Eyebrow>
        </Reveal>

        <Reveal delay={100}>
          <h1 className="display-xl mt-6 max-w-4xl text-sand">
            India, the way
            <br />
            <span className="italic">it should be seen.</span>
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-sand/70">
            We plan private, hosted journeys through India's most extraordinary cities — with the
            right hotels, the right access, and one dedicated host from your first transfer to your
            last. No group buses. No rushed itineraries.
          </p>
        </Reveal>

        <Reveal delay={320} className="mt-10 flex flex-wrap items-center gap-4">
          <Action to="/journeys">Explore The Journey</Action>
          <Action to="/contact" variant="light">Talk to Us First</Action>
        </Reveal>

        {/* Trust bar */}
        <Reveal delay={440}>
          <div className="mt-14 grid grid-cols-2 gap-px border-t border-sand/15 bg-sand/10 sm:grid-cols-4">
            {trustPoints.map((point) => (
              <div key={point.label} className="bg-ink/40 px-6 py-5 backdrop-blur-sm">
                <p className="text-[0.7rem] uppercase tracking-[0.24em] text-sand/45">{point.label}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] text-lg text-sand/90">{point.value}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[0.7rem] uppercase tracking-[0.3em] text-sand/40">Scroll</span>
        <span className="relative h-10 w-[1px] overflow-hidden bg-sand/20">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-[scrollLine_1.8s_ease-in-out_infinite] bg-sand/60" />
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
