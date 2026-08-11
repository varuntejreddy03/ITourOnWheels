import { createFileRoute, notFound } from "@tanstack/react-router";
import { Action, Eyebrow, ParallaxImage, Shell } from "@/components/site/Primitives";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { getJourney, journeys, type Journey } from "@/data/journeys";
import { site } from "@/data/site";

export const Route = createFileRoute("/journeys/$slug")({
  loader: ({ params }) => {
    const journey = getJourney(params.slug);
    if (!journey || journey.status !== "live") throw notFound();
    return { journey };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Journey unavailable" }, { name: "robots", content: "noindex" }],
      };
    }
    const { journey } = loaderData;
    const title = `${journey.duration} ${journey.title} — ${site.name}`;
    const description = journey.summary;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: JourneyDetail,
});

function JourneyDetail() {
  const { journey } = Route.useLoaderData() as { journey: Journey };
  const { ref, offset } = useParallax(0.08);

  return (
    <>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink">
        <div ref={ref} className="absolute inset-0">
          <img
            src={journey.image}
            alt={`${journey.title} — ${journey.route}`}
            style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/35 to-ink/40" />
        </div>
        <Shell className="relative z-10 pb-24 pt-40">
          <Reveal>
            <Eyebrow className="text-teal">{journey.label}</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="display-xl mt-8 max-w-4xl text-sand">
              {journey.duration}
              <br />
              <span className="italic">{journey.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-10 text-[0.7rem] uppercase tracking-[0.3em] text-sand/70">
              {journey.route}
            </p>
          </Reveal>
          <Reveal delay={320} className="mt-12">
            <Action href="#plan" variant="light">
              Enquire About This Journey
            </Action>
          </Reveal>
        </Shell>
      </section>

      {/* Overview */}
      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow>Trip Overview</Eyebrow>
              </Reveal>
              {journey.intro.map((paragraph, index) => (
                <Reveal key={index} delay={120 + index * 90}>
                  <p
                    className={
                      index === 0
                        ? "mt-10 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.3]"
                        : "body-lead mt-8"
                    }
                  >
                    {paragraph}
                  </p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10">
                {journey.facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[0.6rem] uppercase tracking-[0.26em] text-ink-soft">
                      {fact.label}
                    </dt>
                    <dd className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </Shell>
      </section>

      {/* Cities */}
      <section className="border-y border-line bg-sand-deep/40 py-28 md:py-40">
        <Shell>
          <Reveal>
            <Eyebrow>The Cities</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-8 max-w-3xl">
              Three Cities,
              <br />
              <span className="italic">One Story</span>
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3">
            {journey.cities.map((city, index) => (
              <Reveal
                key={city.name}
                delay={index * 100}
                className={index === 1 ? "md:mt-16" : undefined}
              >
                <div className="img-zoom">
                  <div className="aspect-[3/4] overflow-hidden bg-sand-deep">
                    <img
                      src={city.image}
                      alt={`${city.name} — ${city.note}`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl">{city.name}</h3>
                <p className="mt-3 text-[0.65rem] uppercase tracking-[0.2em] text-teal-deep">
                  {city.note}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{city.text}</p>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Itinerary timeline */}
      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <Reveal>
            <Eyebrow>Day By Day</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-8 max-w-3xl">
              The <span className="italic">Itinerary</span>
            </h2>
          </Reveal>

          <ol className="mt-20 border-t border-line">
            {journey.itinerary.map((day, index) => (
              <Reveal key={day.day} delay={index * 50}>
                <li className="grid gap-8 border-b border-line py-12 md:grid-cols-[7rem_1fr_18rem] md:gap-12 md:py-16">
                  <div>
                    <span className="font-[family-name:var(--font-display)] text-5xl text-terracotta/80">
                      {String(day.day).padStart(2, "0")}
                    </span>
                    <p className="mt-3 text-[0.6rem] uppercase tracking-[0.24em] text-ink-soft">
                      {day.place}
                    </p>
                  </div>
                  <div>
                    <h3 className="display-md">{day.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">
                      {day.description}
                    </p>
                  </div>
                  {day.image ? (
                    <div className="img-zoom">
                      <div className="aspect-[4/3] overflow-hidden bg-sand-deep">
                        <img
                          src={day.image}
                          alt={`Day ${day.day} — ${day.title}`}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
        </Shell>
      </section>

      <HighlightsSection
        highlights={journey.highlights}
        eyebrow="Experiences"
        heading="Included Experiences"
        tone="dark"
      />

      {/* Inclusions */}
      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow>Inclusions</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-8">
                  What Is
                  <br />
                  <span className="italic">Included</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <ul className="mt-12 space-y-4 text-sm text-ink-soft">
                  {journey.notes.map((note) => (
                    <li key={note} className="border-l border-terracotta/40 pl-4">
                      {note}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ul className="border-t border-line">
                {journey.inclusions.map((inclusion) => (
                  <li
                    key={inclusion}
                    className="border-b border-line py-5 font-[family-name:var(--font-display)] text-xl"
                  >
                    {inclusion}
                  </li>
                ))}
              </ul>
              <div className="mt-12">
                <Action href="#plan">Enquire Now</Action>
              </div>
            </Reveal>
          </div>
        </Shell>
      </section>

      <GallerySection filterable={false} />
      <EnquirySection />
    </>
  );
}

export const liveJourneySlugs = journeys
  .filter((journey) => journey.status === "live")
  .map((journey) => journey.slug);