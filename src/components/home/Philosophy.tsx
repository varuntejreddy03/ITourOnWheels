import philosophy from "@/assets/philosophy.webp";
import { Eyebrow, ParallaxImage, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

export function Philosophy() {
  return (
    <section className="border-y border-line bg-sand-deep/50 py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>Our Philosophy</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-4xl">
            See Less.
            <br />
            <span className="italic">Feel More.</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
          <ParallaxImage
              src={philosophy}
              alt="An Indian artisan at work in a sunlit workshop"
              className="aspect-[4/5] w-full"
              width={1000}
              height={1300}
              eager
            />

          <div className="lg:pt-16">
            <Reveal delay={120}>
              <p className="font-[family-name:var(--font-display)] text-[clamp(1.6rem,2.6vw,2.4rem)] leading-[1.25]">
                Anyone can show you the Taj Mahal at sunrise. We want you to also remember the
                sitar player in an empty haveli courtyard, the block printer whose hands move
                faster than you can watch, and the thirty feet of cotton a Jaipur elder ties into
                your first turban.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="body-lead mt-10 max-w-lg">
                So we plan fewer sights and more time. Mornings before the crowds arrive. Afternoons
                with the people who keep a craft, a recipe or a song alive. Evenings that end late
                because nobody wanted to leave.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-12">
              <TextLink to="/about">Read Our Story</TextLink>
            </Reveal>
          </div>
        </div>
      </Shell>
    </section>
  );
}