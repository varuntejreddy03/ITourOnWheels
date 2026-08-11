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
          <h1 className="display-lg mt-8 max-w-4xl">
            {title}
            {italic ? (
              <>
                <br />
                <span className="italic">{italic}</span>
              </>
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