import { Action, Eyebrow, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { journeys } from "@/data/journeys";
import { CurrencyPrice } from "@/components/site/CurrencyPrice";

export function JourneysSection({
  eyebrow = "Featured Journeys",
  heading = "Journeys Now Available",
  limit,
}: {
  eyebrow?: string;
  heading?: string;
  limit?: number;
}) {
  const items = typeof limit === "number" ? journeys.slice(0, limit) : journeys;
  return (
    <section className="border-y border-line bg-sand-deep/40 py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl">{heading}</h2>
        </Reveal>

        <div className="mt-20 space-y-24">
          {items.map((journey, index) =>
            journey.status === "live" ? (
              <Reveal key={journey.slug} delay={index * 80}>
                <article className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
                  <div className="img-zoom">
                    <div className="aspect-[16/11] overflow-hidden bg-sand-deep">
                      <img
                        src={journey.image}
                        alt={`${journey.title} — ${journey.route}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center">
                    <p className="text-[0.7rem] uppercase tracking-[0.26em] text-teal-deep">
                      {journey.duration}
                    </p>
                    <h3 className="display-md mt-5">{journey.title}</h3>
                    <p className="mt-4 text-[0.7rem] uppercase tracking-[0.22em] text-ink-soft">
                      {journey.route}
                    </p>
                    <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
                      {journey.summary}
                    </p>
                    <ul className="mt-8 grid gap-2 text-sm text-ink-soft sm:grid-cols-2">
                      {journey.facts.slice(2, 6).map((fact) => (
                        <li key={fact.label} className="border-t border-line pt-2">
                          <span className="text-[0.58rem] uppercase tracking-[0.2em] text-ink/40">{fact.label}</span>
                          <br />{fact.value}
                        </li>
                      ))}
                    </ul>
                    <CurrencyPrice usd={3999} className="mt-8" />
                    <div className="mt-10">
                      <Action to={`/journeys/${journey.slug}`} variant="outline">
                        View Journey
                      </Action>
                    </div>
                  </div>
                </article>
              </Reveal>
            ) : null,
          )}
        </div>

        <div className="mt-24 grid gap-8 md:grid-cols-2">
          <Reveal className="md:col-span-2">
            <p className="text-[0.7rem] uppercase tracking-[0.26em] text-teal-deep">
              Being Organised — More Journeys Coming
            </p>
          </Reveal>
          {journeys
            .filter((journey) => journey.status === "coming-soon")
            .map((journey, index) => (
              <Reveal key={journey.slug} delay={index * 80}>
                <article className="flex h-full flex-col border border-dashed border-line p-10">
                  <span className="text-[0.7rem] uppercase tracking-[0.26em] text-teal-deep">
                    {journey.label}
                  </span>
                  <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl">
                    {journey.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{journey.summary}</p>
                  <div className="mt-10">
                    <TextLink to="/contact">Register Interest</TextLink>
                  </div>
                </article>
              </Reveal>
            ))}
        </div>
      </Shell>
    </section>
  );
}
