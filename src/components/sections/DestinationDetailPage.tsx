import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { getDestination } from "@/data/destinations";
import { site } from "@/data/site";
import { Action, Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { useTitle } from "@/hooks/use-title";

export function DestinationDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const dest = getDestination(slug ?? "");
  const { ref, offset } = useParallax(0.07);
  useTitle(dest ? `${dest.name} — ${site.name}` : site.name);

  useEffect(() => {
    if (!dest) navigate("/destinations", { replace: true });
  }, [dest, navigate]);

  if (!dest) return null;

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-ink">
        <div ref={ref} className="absolute inset-0">
          <img
            src={dest.imageTall}
            alt={dest.name}
            className="h-full w-full object-cover"
            style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-ink/20" />
        </div>
        <Shell className="relative z-10 pb-24 pt-40">
          <Reveal>
            <span className="text-[0.7rem] uppercase tracking-[0.3em] text-teal">
              {dest.region}
            </span>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display-xl mt-4 text-sand">{dest.name}</h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-6 font-[family-name:var(--font-display)] text-xl italic text-sand/70">
              {dest.tagline}
            </p>
          </Reveal>
          <Reveal delay={280} className="mt-4 flex flex-wrap gap-2">
            {dest.extensionOnly && (
              <span className="rounded-full border border-terracotta/50 bg-terracotta/20 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-sand backdrop-blur-sm">
                Journey Extension, Not A Standalone Trip
              </span>
            )}
            {dest.themes.map((theme) => (
              <span
                key={theme}
                className="rounded-full border border-sand/25 bg-ink/30 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-sand/80 backdrop-blur-sm"
              >
                {theme}
              </span>
            ))}
          </Reveal>
          <Reveal delay={360} className="mt-10">
            <Action href="#plan" variant="light">Plan a Journey Here</Action>
          </Reveal>
        </Shell>
      </section>

      {/* Intro + History */}
      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-28">
            <div>
              <Reveal>
                <Eyebrow>About {dest.name}</Eyebrow>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-10 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.3]">
                  {dest.intro}
                </p>
              </Reveal>
              <Reveal delay={180}>
                <p className="body-lead mt-8">{dest.history}</p>
              </Reveal>
            </div>
            <div className="lg:pt-8">
              <Reveal delay={120}>
                <div className="space-y-8 border-t border-line pt-10">
                  <div>
                    <dt className="text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft">Best For</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-ink">{dest.bestFor}</dd>
                  </div>
                  <div className="border-t border-line pt-8">
                    <dt className="text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft">Best Time to Visit</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-ink">{dest.bestTime}</dd>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-12 overflow-hidden rounded-sm">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </Shell>
      </section>

      {/* Highlights */}
      <section className="border-y border-line bg-sand-deep/40 py-28 md:py-40">
        <Shell>
          <Reveal>
            <Eyebrow>Highlights</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-8 max-w-3xl">
              What Makes {dest.name}
              <br />
              <span className="italic">Unforgettable</span>
            </h2>
          </Reveal>
          <div className="mt-20 grid gap-px border-t border-line bg-line sm:grid-cols-2">
            {dest.highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 80} className="bg-sand p-10 md:p-14">
                <span className="font-[family-name:var(--font-display)] text-5xl text-terracotta/30">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-2xl">{h.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{h.description}</p>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      {/* Must See */}
      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <Reveal>
            <Eyebrow>Must See</Eyebrow>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="display-lg mt-8 max-w-3xl">
              The Essential
              <br />
              <span className="italic">{dest.name}</span>
            </h2>
          </Reveal>
          <ol className="mt-16 border-t border-line">
            {dest.mustSee.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <li className="grid gap-6 border-b border-line py-8 md:grid-cols-[4rem_1fr_2fr] md:gap-12 md:py-10">
                  <span className="font-[family-name:var(--font-display)] text-4xl text-terracotta/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl self-center">{item.name}</h3>
                  <p className="text-sm leading-relaxed text-ink-soft self-center">{item.description}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </Shell>
      </section>

      {/* CTA to journeys */}
      <section className="bg-ink py-24 text-sand">
        <Shell>
          <Reveal>
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div>
                <Eyebrow className="text-teal">Travel Here</Eyebrow>
                <h2 className="display-md mt-6 max-w-xl text-sand">
                  Ready to visit {dest.name}?
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-sand/60">
                  {dest.extensionOnly
                    ? `Ask us about combining ${dest.name} with your journey — we can build it in on request.`
                    : `Our Luxury Golden Triangle journey includes ${dest.name}. Tell us your dates and we will plan the rest.`}
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Action to="/journeys" variant="light">View Journeys</Action>
                <Action href="#plan" variant="outline">Enquire Now</Action>
              </div>
            </div>
          </Reveal>
        </Shell>
      </section>

      <EnquirySection defaultDestination={dest.name} />
    </>
  );
}
