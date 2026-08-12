import { Eyebrow, Shell, Action } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const reasons = [
  {
    number: "01",
    title: "Private, Always",
    body: "Every journey runs exclusively for your party. No shared coaches, no strangers at dinner, no compromises on pace or itinerary.",
  },
  {
    number: "02",
    title: "One Host, Start to Finish",
    body: "Your dedicated host meets you at the airport on day one and stays with you until your final transfer. One point of contact. No handoffs.",
  },
  {
    number: "03",
    title: "Hotels Chosen for Character",
    body: "We select 4 and 5-star properties for location, design and service — not just star rating. Every hotel is confirmed before you book.",
  },
  {
    number: "04",
    title: "Access You Cannot Arrange Alone",
    body: "Sunrise entry before the public gates open. Private workshops. Dinners in heritage spaces. The kind of access that takes years of relationships to build.",
  },
  {
    number: "05",
    title: "Built for U.S. Travelers",
    body: "We understand the time zones, the visa process, the jet lag and the questions American travelers actually ask. We have planned for all of it.",
  },
  {
    number: "06",
    title: "Transparent from Day One",
    body: "Full itinerary, confirmed hotels and a clear price — all shared before you pay a deposit. No surprises on the ground.",
  },
];

export function StoriesSection() {
  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>Why Travel With Us</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl">
            Six Reasons to
            <br />
            <span className="italic">Travel Differently</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.number} delay={i * 60} className="bg-sand p-10 md:p-12">
              <span className="font-[family-name:var(--font-display)] text-4xl text-terracotta/25">
                {r.number}
              </span>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl">{r.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">{r.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 flex flex-wrap gap-4">
          <Action to="/journeys">See Our Journey</Action>
          <Action to="/about" variant="outline">About Us</Action>
        </Reveal>
      </Shell>
    </section>
  );
}
