import philosophy from "@/assets/philosophy.webp";
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
            src={philosophy}
            alt="Indian artisan at work — the craft traditions of Rajasthan"
            className="aspect-[4/5] w-full"
            width={1000}
            height={1300}
            eager
          />

          <div className="lg:pt-16">
            <Reveal delay={120}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.25]">
                Since 2018, we have been hosting local and international clients across India's most
                extraordinary cities — with over 100 five-star Google reviews and a simple promise:
                we take care of everything.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="body-lead mt-10 max-w-lg">
                You arrive. We handle the rest. Private luxury transport, 4 and 5-star hotels,
                a dedicated host with you 24/7, monument entries, cultural experiences and daily
                breakfast — all confirmed before you leave home.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="body-lead mt-6 max-w-lg">
                One trip. Three iconic cities. Delhi, Agra and Jaipur — the heritage, the Taj
                Mahal and the Pink City — experienced the way they deserve to be.
              </p>
            </Reveal>
            <Reveal delay={380} className="mt-12">
              <TextLink to="/about">Our Story</TextLink>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}
