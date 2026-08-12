import hero from "@/assets/hero-taj-sunrise.webp";
import { Action, Eyebrow } from "@/components/site/Primitives";
import { Reveal, useParallax } from "@/components/site/Reveal";

export function Hero() {
  const { ref, offset } = useParallax(0.08);

  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
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
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/45" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[92rem] px-6 pb-24 pt-40 md:px-12 md:pb-32">
        <Reveal>
          <Eyebrow className="text-teal">Cultural Journeys Across India · For U.S. Travelers</Eyebrow>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="display-xl mt-8 max-w-5xl text-sand">
            India, Experienced
            <br />
            <span className="italic">Differently.</span>
          </h1>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={240}>
            <p className="max-w-xl text-lg leading-relaxed text-sand/75">
              Private, hosted journeys through India, designed for American travelers. We begin with
              the 7 day Luxury Golden Triangle — with more routes added through the year.
            </p>
          </Reveal>

          <Reveal delay={360} className="flex flex-wrap gap-4 lg:justify-end">
            <Action to="/journeys">Explore Journeys</Action>
            <Action to="/contact" variant="light">
              Plan Your Trip
            </Action>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 text-[0.6rem] uppercase tracking-[0.3em] text-sand/50 md:flex md:right-12">
        Scroll
        <span className="block h-10 w-[1px] bg-sand/40" />
      </div>
    </section>
  );
}