import about from "@/assets/about-haveli.webp";
import { Eyebrow, ParallaxImage, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const credentials = [
  { label: "Founded", value: "2018" },
  { label: "Google Reviews", value: "100+ · 5 Stars" },
  { label: "Based", value: "Midlothian, VA" },
  { label: "Hosted In", value: "Delhi, India" },
];

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
                Hosting India
                <br />
                <span className="font-[family-name:var(--font-display-alt)] font-light">Since 2018</span>
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-10 max-w-lg text-lg leading-relaxed text-sand/70">
                I Tour On Wheels is a travel agency built on one idea — that India is best
                experienced with someone who knows it personally. We have been hosting local and
                international clients since 2018, with over 100 five-star Google reviews and a
                reputation built entirely on word of mouth.
              </p>
            </Reveal>
            <Reveal delay={260}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-sand/55">
                We are based in Midlothian, Virginia and operate on the ground in Delhi. Every
                journey is hosted personally — not handed to a third-party operator. Your host
                is with you from airport arrival to final departure, 24 hours a day.
              </p>
            </Reveal>

            <Reveal delay={320}>
              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-sand/15 pt-10">
                {credentials.map((c) => (
                  <div key={c.label}>
                    <dt className="text-[0.58rem] uppercase tracking-[0.26em] text-sand/35">{c.label}</dt>
                    <dd className="mt-1 font-[family-name:var(--font-display)] text-lg text-sand/85">{c.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            {withLink && (
              <Reveal delay={400} className="mt-12">
                <TextLink to="/about">More About Us</TextLink>
              </Reveal>
            )}
          </div>

          <ParallaxImage
            src={about}
            alt="Travelers at the Taj Mahal — I Tour On Wheels"
            className="aspect-[4/3] w-full"
            width={1600}
            height={1000}
          />
        </div>
      </Shell>
    </section>
  );
}
