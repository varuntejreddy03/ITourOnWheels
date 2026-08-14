import { Eyebrow, Shell } from "./Primitives";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  italic,
  intro,
}: {
  eyebrow: string;
  title: string;
  italic?: string | undefined;
  intro?: string | undefined;
}) {
  return (
    <header className="bg-sand pb-16 pt-40 md:pb-24 md:pt-52">
      <Shell>
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-8 max-w-4xl" style={{ lineHeight: 1 }}>
            <span className="block font-[family-name:var(--font-display-alt)] text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium tracking-[-0.015em]">
              {title}
            </span>
            {italic ? (
              <span className="block font-[family-name:var(--font-display-alt)] text-[clamp(2.25rem,5.5vw,4.5rem)] font-light tracking-[-0.015em] text-ink/75">
                {italic}
              </span>
            ) : null}
          </h1>
        </Reveal>
        {intro ? (
          <Reveal delay={180}>
            <p className="body-lead mt-10 max-w-2xl">{intro}</p>
          </Reveal>
        ) : null}
      </Shell>
    </header>
  );
}