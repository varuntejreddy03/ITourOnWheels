import { Link } from "react-router-dom";
import { Eyebrow, Shell } from "@/components/site/Primitives";
import { Reveal } from "@/components/site/Reveal";
import { experienceCategories } from "@/data/experiences";
import { featuredJourney } from "@/data/journeys";

export function ExperiencesSection({
  eyebrow = "Travel Styles",
  heading = "How You Travel Matters",
}: {
  eyebrow?: string;
  heading?: string;
}) {
  return (
    <section className="bg-ink py-28 text-sand md:py-40">
      <Shell>
        <Reveal>
          <Eyebrow className="text-teal">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="display-lg mt-8 max-w-3xl text-sand">{heading}</h2>
        </Reveal>
      </Shell>

      <div className="mt-20 border-t border-sand/12">
        {experienceCategories.map((experience, index) => (
          <Reveal key={experience.slug} delay={index * 60}>
            <Link
              to={`/journeys/${featuredJourney.slug}`}
              className="group relative block border-b border-sand/12"
            >
              <Shell className="relative z-10 flex flex-col gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-16">
                <div className="flex items-baseline gap-8">
                  <span className="text-[0.7rem] tracking-[0.26em] text-sand/40">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3.4rem)] leading-none text-sand transition-colors duration-700 group-hover:text-terracotta">
                    {experience.title}
                  </h3>
                </div>
                <p className="max-w-sm text-sm leading-relaxed text-sand/60 md:text-right">
                  {experience.description}
                </p>
              </Shell>

              <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                <img
                  src={experience.image}
                  alt={experience.title}
                  loading="lazy"
                  className="h-full w-full scale-105 object-cover"
                />
                <div className="absolute inset-0 bg-ink/72" />
              </div>

              {/* Mobile / no-hover imagery */}
              <div className="md:hidden">
                <Shell className="pb-12">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Shell>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}