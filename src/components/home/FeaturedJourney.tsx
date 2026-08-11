import { Action, Eyebrow, ParallaxImage, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { featuredJourney } from "@/data/journeys";

export function FeaturedJourney() {
  const journey = featuredJourney;

  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>{journey.label}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-8">
                {journey.duration}
                <br />
                <span className="italic">{journey.title}</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 text-[0.7rem] uppercase tracking-[0.26em] text-teal-deep">
                {journey.route}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="body-lead mt-8 max-w-lg">{journey.summary}</p>
            </Reveal>
            <Reveal delay={320} className="mt-12">
              <Action to="/journeys/$slug" params={{ slug: journey.slug }}>
                Explore This Journey
              </Action>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10">
                {journey.facts.slice(0, 4).map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[0.6rem] uppercase tracking-[0.26em] text-ink-soft">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-display)] text-xl">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal variant="clip">
              <ParallaxImage
                src={journey.image!}
                alt="Hawa Mahal in Jaipur in late afternoon light"
                className="aspect-[4/5] w-full"
                width={1600}
                height={1104}
              />
            </Reveal>
            <Reveal delay={120} className="grid grid-cols-2 gap-8">
              {journey.cities.slice(0, 2).map((city) => (
                <figure key={city.name} className="img-zoom">
                  <div className="aspect-[3/4] overflow-hidden bg-sand-deep">
                    <img
                      src={city.image}
                      alt={`${city.name} — ${city.note}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.62rem] uppercase tracking-[0.26em] text-ink-soft">
                    {city.name}
                  </figcaption>
                </figure>
              ))}
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}