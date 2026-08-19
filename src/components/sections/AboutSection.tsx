import about from "@/assets/about-haveli.webp";
import aboutTeam from "@/assets/about-team.webp";
import camel from "@/assets/gurudongmar-lake.jpg";
import fort from "@/assets/fort.jpg";
import { Eyebrow, ParallaxImage, Shell, TextLink } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";

const credentials = [
  { label: "Founded", value: "2018" },
  { label: "Google Reviews", value: "100+ · 5 Stars" },
  { label: "Based", value: "Midlothian, VA" },
  { label: "Hosted In", value: "Delhi, India" },
];

const realIndia = [
  "The chai shared with a stranger.",
  "The sound of a city waking up.",
  "A family welcoming you into their home.",
  "The stories behind centuries-old streets.",
  "The food that doesn't need a menu.",
];

export function AboutSection({ withLink = true }: { withLink?: boolean }) {
  return (
    <>
      {/* Origin story */}
      <section className="bg-ink py-28 text-sand md:py-40">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <div>
              <Reveal>
                <Eyebrow className="text-teal">Our Story</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-8 text-sand">
                  From An Idea
                  <br />
                  <span className="font-[family-name:var(--font-display-alt)] font-light">to I Tour On Wheels</span>
                </h2>
              </Reveal>
              <Reveal delay={180}>
                <p className="mt-10 max-w-lg text-lg leading-relaxed text-sand/70">
                  In 2018, I Tour On Wheels began with just two people, one simple idea, and a genuine love for travellers and India.
                </p>
              </Reveal>
              <Reveal delay={220}>
                <p className="mt-6 max-w-lg text-sm leading-relaxed text-sand/55">
                  We were sitting together, talking about travel and the thousands of people who come to India every year — often excited, curious, and sometimes unsure about how to experience the country beyond the usual tourist trail.
                </p>
              </Reveal>
              <Reveal delay={260}>
                <blockquote className="mt-8 border-l-2 border-teal pl-6 font-[family-name:var(--font-display)] text-xl leading-snug text-sand/80">
                  What if travelling to India could feel less like following an itinerary and more like being hosted by someone who truly knows the country?
                </blockquote>
              </Reveal>
              <Reveal delay={300}>
                <p className="mt-8 max-w-lg text-sm leading-relaxed text-sand/55">
                  That question became our starting point. What began as a side hustle alongside our regular professional careers slowly became something much bigger — corporate groups, college trips, school trips, senior citizen journeys, and specially designed experiences for specially abled travellers.
                </p>
              </Reveal>

              <Reveal delay={360}>
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
                <Reveal delay={420} className="mt-12">
                  <TextLink to="/about">More About Us</TextLink>
                </Reveal>
              )}
            </div>

            <ParallaxImage
              src={camel}
              alt="Camel safari — I Tour On Wheels"
              className="aspect-[4/3] w-full"
              width={1600}
              height={1000}
            />
          </div>
        </Shell>
      </section>

      {/* Hosting philosophy — only on full about page */}
      {!withLink && (
        <>
          <section className="bg-sand py-28 md:py-40">
            <Shell>
              <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
                <div>
                  <Reveal>
                    <Eyebrow>What We Learned</Eyebrow>
                  </Reveal>
                  <Reveal delay={100}>
                    <h2 className="display-lg mt-8">
                      We Weren't Arranging Trips.
                      <br />
                      <span className="font-[family-name:var(--font-display-alt)] font-light">We Were Hosting People.</span>
                    </h2>
                  </Reveal>
                  <Reveal delay={180}>
                    <p className="mt-8 max-w-lg text-sm leading-relaxed text-ink-soft">
                      People don't just remember the monuments they visited. They remember the person who helped them navigate a busy street. The meal they shared with someone local. The unexpected conversation. The laughter in the vehicle. The feeling of being looked after when they were thousands of miles from home.
                    </p>
                  </Reveal>
                  <Reveal delay={240}>
                    <p className="mt-6 max-w-lg text-sm leading-relaxed text-ink-soft">
                      Our professional background is in online marketing — years of understanding how people connect, communicate and discover businesses across the world. That experience gave us the confidence to think beyond traditional travel and bring together both sides of what we do: our experience in hosting travellers and our expertise in connecting with people globally.
                    </p>
                  </Reveal>
                </div>
                <ParallaxImage
                  src={fort}
                  alt="Historic fort — I Tour On Wheels"
                  className="aspect-[4/3] w-full"
                  width={1600}
                  height={1000}
                />
              </div>
            </Shell>
          </section>

          {/* Real India */}
          <section className="bg-ink py-28 text-sand md:py-40">
            <Shell>
              <Reveal>
                <Eyebrow className="text-teal">Taking Our India to the World</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="display-lg mt-8 max-w-3xl text-sand">
                  The Real India
                  <br />
                  <span className="font-[family-name:var(--font-display-alt)] font-light">Is Much Bigger Than a Postcard.</span>
                </h2>
              </Reveal>
              <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-24">
                <div>
                  <Reveal delay={160}>
                    <p className="text-sm leading-relaxed text-sand/60">
                      India is often presented through postcards — Taj Mahal sunsets, colourful markets, palaces, forts and famous monuments. But the real India is much bigger than that.
                    </p>
                  </Reveal>
                  <ul className="mt-8 space-y-4">
                    {realIndia.map((line, i) => (
                      <Reveal key={i} delay={200 + i * 60}>
                        <li className="flex items-start gap-4 border-b border-sand/10 pb-4 text-sm text-sand/70">
                          <span className="mt-1 h-[5px] w-[5px] shrink-0 rounded-full bg-teal" />
                          {line}
                        </li>
                      </Reveal>
                    ))}
                  </ul>
                  <Reveal delay={520}>
                    <p className="mt-8 text-sm leading-relaxed text-sand/60">
                      It's the chaos, colours, spirituality, warmth and incredible contrasts that make India unlike anywhere else. We want our guests to experience <em className="text-sand/90 not-italic font-[family-name:var(--font-display)]">The Real India</em> — not just see it. Feel it. Live it. Remember it.
                    </p>
                  </Reveal>
                </div>
                <div className="lg:pt-8">
                  <Reveal delay={200}>
                    <blockquote className="border-l-2 border-teal pl-6 font-[family-name:var(--font-display)] text-[clamp(1.4rem,2.5vw,2rem)] leading-snug text-sand/80">
                      The best trips aren't measured by how many places you check off a list. They're measured by how much of a place stays with you after you return home.
                    </blockquote>
                  </Reveal>
                  <Reveal delay={320}>
                    <div className="mt-12 space-y-3 border-t border-sand/15 pt-10 text-sm text-sand/55">
                      <p>You bring the curiosity.</p>
                      <p>We'll take care of the journey.</p>
                      <p>India will take care of the memories.</p>
                    </div>
                  </Reveal>
                  <Reveal delay={400}>
                    <p className="mt-8 font-[family-name:var(--font-display)] text-xl text-sand/90">
                      Welcome to I Tour On Wheels.
                    </p>
                  </Reveal>
                </div>
              </div>
            </Shell>
          </section>
        </>
      )}
    </>
  );
}
