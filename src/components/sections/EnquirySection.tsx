import { Eyebrow, Shell } from "@/components/site/Primitives";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { site } from "@/data/site";

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
          </div>

          <Reveal delay={140}>
            <EnquiryForm defaultDestination={defaultDestination} defaultJourney={defaultJourney} />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}
