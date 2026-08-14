import featuredMain from "@/assets/ChatGPT Image Aug 13, 2026, 07_57_18 PM.png";
import featuredCity1 from "@/assets/ChatGPT Image Aug 13, 2026, 08_04_49 PM.png";
import featuredCity2 from "@/assets/featured-city-2.webp";
import { Action, Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { featuredJourney } from "@/data/journeys";

const cityImages = [
  { src: featuredCity1, label: "Delhi", alt: "Delhi — Qutub Minar and ancient ruins" },
  { src: featuredCity2, label: "Agra", alt: "Taj Mahal reflected in the long pool at sunrise" },
];

export function FeaturedJourney() {
  const journey = featuredJourney;

  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:gap-24">

          {/* Images — left */}
          <div className="space-y-8">
            <div className="w-full overflow-hidden rounded-sm bg-sand-deep">
              <img
                src={featuredMain}
                alt="Hawa Mahal — the Palace of Winds, Jaipur at dusk"
                loading="eager"
                className="w-full object-contain"
              />
            </div>
            <div className="grid grid-cols-2 gap-8">
              {cityImages.map((city) => (
                <figure key={city.label} className="img-zoom">
                  <div className="aspect-[3/4] overflow-hidden bg-sand-deep">
                    <img
                      src={city.src}
                      alt={city.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <figcaption className="mt-4 text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft">
                    {city.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          {/* Text — right, sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <Eyebrow>{journey.label}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-8">
                {journey.duration}
                <br />
                <span className="font-[family-name:var(--font-display-alt)] font-light">{journey.title}</span>
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
              <Action to={`/journeys/${journey.slug}`}>
                Explore This Journey
              </Action>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
                Our first published journey. More routes across Rajasthan, the Himalaya and North
                India are being organised — this collection grows as each one is confirmed.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-line pt-10">
                {journey.facts.slice(0, 4).map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft">
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

        </div>
      </Shell>
    </section>
  );
}
