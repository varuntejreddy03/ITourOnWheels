import about from "@/assets/about-haveli.webp";
import { Eyebrow, ParallaxImage, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

export function AboutSection({ withLink = true }: { withLink?: boolean }) {
  return (
    <section className="bg-ink py-28 text-sand md:py-40">
      <Shell>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
          <div>
            <Reveal>
              <Eyebrow className="text-teal">About Us</Eyebrow>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="display-lg mt-8 text-sand">
                More Than
                <br />
                <span className="italic">A Journey</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-10 max-w-lg text-lg leading-relaxed text-sand/70">
                We design journeys across India for travelers who want to understand a place, not
                only photograph it. Every itinerary is built around culture, craft, food and the
                people who carry those traditions forward.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-8 max-w-lg text-sm leading-relaxed text-sand/55">
                We work with a small number of travelers at a time, choose hotels for character as
                much as comfort, and host each journey personally from arrival to departure.
              </p>
            </Reveal>
            {withLink && (
              <Reveal delay={340} className="mt-12">
                <TextLink to="/about">More About Us</TextLink>
              </Reveal>
            )}
          </div>

          <Reveal variant="clip">
            <ParallaxImage
              src={about}
              alt="Candlelit heritage courtyard dining in Rajasthan"
              className="aspect-[4/3] w-full"
              width={1600}
              height={1000}
            />
          </Reveal>
        </div>
      </Shell>
    </section>
  );
}