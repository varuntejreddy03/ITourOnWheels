import { Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

/**
 * Traveller stories. Intentionally empty of content — no invented reviews.
 * Replace each slot with a real quote, name and journey when supplied.
 */
const slots = [
  { journey: "Luxury Golden Triangle", place: "Delhi · Agra · Jaipur" },
  { journey: "Awaiting story", place: "To be added" },
  { journey: "Awaiting story", place: "To be added" },
];

export function StoriesSection() {
  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>Traveller Stories</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl">
            Told By The People
            <br />
            <span className="italic">Who Travelled</span>
          </h2>
        </Reveal>
        <Reveal delay={180}>
          <p className="body-lead mt-8 max-w-xl">
            Stories from our travellers will be published here as journeys are completed. We only
            share words we have actually been given.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px border-t border-line bg-line sm:grid-cols-3">
          {slots.map((slot, index) => (
            <Reveal key={index} delay={index * 90} className="bg-sand p-10">
              <span className="text-[0.6rem] uppercase tracking-[0.26em] text-teal-deep">
                {slot.journey}
              </span>
              <p className="mt-8 font-[family-name:var(--font-display)] text-2xl leading-snug text-ink/40 italic">
                “ ”
              </p>
              <p className="mt-10 text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft">
                {slot.place}
              </p>
            </Reveal>
          ))}
        </div>
      </Shell>
    </section>
  );
}