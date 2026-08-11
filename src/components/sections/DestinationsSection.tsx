import { Eyebrow, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { destinations } from "@/data/destinations";

export function DestinationsSection({
  heading = "Where Will You Go?",
  eyebrow = "Destinations",
  limit,
}: {
  heading?: string;
  eyebrow?: string;
  limit?: number;
}) {
  const items = typeof limit === "number" ? destinations.slice(0, limit) : destinations;
  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div>
            <Reveal>
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-8 max-w-3xl">{heading}</h2>
            </Reveal>
          </div>
          <Reveal delay={180}>
            <TextLink to="/destinations">All Destinations</TextLink>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {items.map((destination, index) => (
            <Reveal
              key={destination.slug}
              delay={index * 90}
              className={index % 3 === 1 ? "lg:mt-20" : undefined}
            >
              {destination.status === "live" && destination.image ? (
                <article className="img-zoom group">
                  <div className="aspect-[3/4] overflow-hidden bg-sand-deep">
                    <img
                      src={destination.image}
                      alt={`${destination.name} — ${destination.themes.join(", ")}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="font-[family-name:var(--font-display)] text-3xl">
                      {destination.name}
                    </h3>
                    <span className="text-[0.6rem] uppercase tracking-[0.26em] text-ink-soft">
                      {destination.region}
                    </span>
                  </div>
                  <p className="mt-3 text-[0.68rem] uppercase tracking-[0.2em] text-teal-deep">
                    {destination.themes.join(" · ")}
                  </p>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                    {destination.intro}
                  </p>
                </article>
              ) : (
                <article className="flex aspect-[3/4] flex-col justify-end border border-dashed border-line p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-3xl">
                    {destination.name}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{destination.intro}</p>
                  <div className="mt-8">
                    <TextLink to="/contact">Request A Destination</TextLink>
                  </div>
                </article>
              )}
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}