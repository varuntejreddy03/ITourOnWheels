import { Link } from "react-router-dom";
import { Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

/** Asymmetric rhythm for the grid, repeating every 4 cards so the layout doesn't
 * depend on there being exactly four live destinations. */
const spanPattern: { className: string; tall?: boolean; wide?: boolean }[] = [
  { className: "lg:col-span-4 lg:row-span-2", tall: true },
  { className: "lg:col-span-4 lg:row-span-1" },
  { className: "lg:col-span-4 lg:row-span-1" },
  { className: "lg:col-span-8 lg:row-span-1", wide: true },
];

export function DestinationsGrid() {
  const live = destinations.filter((d) => d.status === "live");

  return (
    <section className="bg-sand py-28 md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow>Where We Travel</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl">
            Four Cities,
            <br />
            <span className="font-[family-name:var(--font-display-alt)] font-light">One Extraordinary Country</span>
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="body-lead mt-6 max-w-2xl">
            Each destination we offer is one we know deeply — the right hotels, the right guides, the right time of day to be somewhere. We add cities slowly, only once we can host them properly.
          </p>
        </Reveal>
      </Shell>

      {/* Asymmetric grid — rhythm repeats every 4 cards, see spanPattern */}
      <Shell className="mt-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
          {live.map((dest, index) => {
            const pattern = spanPattern[index % spanPattern.length]!;
            return (
              <DestCard
                key={dest.slug}
                dest={dest}
                className={pattern.className}
                tall={pattern.tall}
                wide={pattern.wide}
              />
            );
          })}
        </div>
      </Shell>
    </section>
  );
}

function DestCard({
  dest,
  className,
  tall,
  wide,
}: {
  dest: (typeof destinations)[number];
  className?: string;
  tall?: boolean;
  wide?: boolean;
}) {
  return (
    <Reveal className={cn("group relative overflow-hidden rounded-sm bg-ink", className)}>
      <Link to={`/destinations/${dest.slug}`} className="block h-full">
        {/* Image */}
        <div className={cn("relative w-full overflow-hidden", tall ? "h-full min-h-[520px]" : wide ? "aspect-[16/7]" : "aspect-[4/3]")}>
          <img
            src={dest.image}
            alt={dest.name}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] text-sand/60">
              {dest.region}
            </span>
            <h3 className={cn(
              "mt-2 font-[family-name:var(--font-display)] text-sand leading-none",
              tall ? "text-5xl md:text-6xl" : "text-4xl md:text-5xl"
            )}>
              {dest.name}
            </h3>
            {dest.extensionOnly && (
              <p className="mt-2 text-[0.7rem] uppercase tracking-[0.24em] text-terracotta">
                Extension Only — Not A Standalone Trip
              </p>
            )}
            <div className="mt-3 flex flex-wrap gap-2">
              {dest.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-full border border-sand/25 bg-ink/30 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-sand/80 backdrop-blur-sm"
                >
                  {theme}
                </span>
              ))}
            </div>
            {/* Hover CTA */}
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-sand/70 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {dest.tagline}
            </p>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
