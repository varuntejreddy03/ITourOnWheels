import { Eyebrow, Shell } from "@/components/site/Primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { site, globalOffices } from "@/data/site";

export function EnquirySection({
  defaultDestination,
  defaultJourney,
}: {
  defaultDestination?: string;
  defaultJourney?: string;
}) {
  return (
    <section id="plan" className="border-t border-line bg-sand-deep/50 py-28 md:py-40">
      <Shell>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow>Plan Your Journey</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-8">
                Let's Plan
                <br />
                <span className="font-[family-name:var(--font-display-alt)] font-light">Your Journey</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="body-lead mt-8 max-w-md">
                Tell us how you like to travel and we will shape an itinerary around it — a listed
                journey, or something built entirely for you.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-12 text-[0.7rem] uppercase tracking-[0.28em] text-teal">Global Offices</p>
              <ul className="mt-4 space-y-3">
                {globalOffices.map((office) => (
                  <li key={office.phone} className="flex items-center gap-4 rounded-sm border border-line p-4">
                    <span className="text-2xl">{office.flag}</span>
                    <div>
                      <p className="text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">{office.region}</p>
                      <a href={office.href} className="font-[family-name:var(--font-display)] text-base transition-colors hover:text-terracotta">{office.phone}</a>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal delay={140}>
            <EnquiryForm defaultDestination={defaultDestination} defaultJourney={defaultJourney} />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}