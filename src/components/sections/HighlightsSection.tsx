import { Eyebrow, ParallaxImage, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import type { JourneyHighlight } from "@/data/journeys";
import { cn } from "@/lib/utils";

export function HighlightsSection({
  highlights,
  eyebrow = "Experiences",
  heading = "Moments You Will Remember",
  tone = "light",
}: {
  highlights: JourneyHighlight[];
  eyebrow?: string;
  heading?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";

  return (
    <section className={cn("py-28 md:py-40", dark ? "bg-ink text-sand" : "bg-sand")}>
      <Shell>
        <Reveal>
          <Eyebrow className={dark ? "text-teal" : undefined}>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className={cn("display-lg mt-8 max-w-3xl", dark && "text-sand")}>{heading}</h2>
        </Reveal>

        <div className="mt-24 space-y-28 md:space-y-40">
          {highlights.map((highlight, index) => {
            const flipped = index % 2 === 1;
            return (
              <Reveal key={highlight.title}>
                <article
                  className={cn(
                    "grid items-center gap-10 lg:gap-20",
                    flipped ? "lg:grid-cols-[1fr_1.3fr]" : "lg:grid-cols-[1.3fr_1fr]",
                  )}
                >
                  <ParallaxImage
                    src={highlight.image}
                    alt={`${highlight.title} in ${highlight.place}`}
                    className={cn(
                      "aspect-[4/3] w-full",
                      flipped ? "lg:order-2" : "lg:order-1",
                    )}
                    strength={0.08}
                  />
                  <div className={cn(flipped ? "lg:order-1" : "lg:order-2")}>
                    <span
                      className={cn(
                        "text-[0.6rem] uppercase tracking-[0.28em]",
                        dark ? "text-sand/50" : "text-ink-soft",
                      )}
                    >
                      {String(index + 1).padStart(2, "0")} · {highlight.place}
                    </span>
                    <h3 className={cn("display-md mt-6", dark && "text-sand")}>
                      {highlight.title}
                    </h3>
                    <p
                      className={cn(
                        "mt-6 max-w-md text-base leading-relaxed",
                        dark ? "text-sand/65" : "text-ink-soft",
                      )}
                    >
                      {highlight.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Shell>
    </section>
  );
}