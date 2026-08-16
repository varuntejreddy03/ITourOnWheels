import { Eyebrow, ParallaxImage, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

export function Philosophy() {
  return (
    <section className="border-y border-line bg-sand-deep py-28 md:py-40">
      <Shell>
        <Eyebrow>Our Philosophy</Eyebrow>
        <h2 className="mt-8 max-w-4xl font-[family-name:var(--font-display-alt)] text-[clamp(2.25rem,5.5vw,4.5rem)] font-semibold leading-[1] tracking-[-0.015em] text-ink">
          We Plan.
          <br />
          <span className="font-light text-ink/70">You Pack. We Host.</span>
        </h2>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <ParallaxImage
            src="/WhatsApp Image 2026-08-16 at 12.05.14 AM.jpeg"
            alt="Indian artisan at work — the craft traditions of Rajasthan"
            className="aspect-[4/5] w-full"
            width={1000}
            height={1300}
            eager
          />

          <div className="lg:pt-16">
            <Reveal delay={120}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.25]">
                In 2018, we started with two people, one simple idea, and a genuine love for travellers and India.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="body-lead mt-10 max-w-lg">
                We asked ourselves: what if travelling to India could feel less like following an itinerary and more like being hosted by someone who truly knows the country? That question became everything we do.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="body-lead mt-6 max-w-lg">
                Today, with over 100 five-star Google reviews and journeys built for international travellers, we bring together personal hosting and global reach — so you can experience the real India with confidence, comfort and a genuine human connection.
              </p>
            </Reveal>
            <Reveal delay={380} className="mt-12">
              <TextLink to="/about">Our Full Story</TextLink>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
