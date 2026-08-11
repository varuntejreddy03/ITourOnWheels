import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

/**
 * Typographic wordmark placeholder. Replace the inner markup with the client's
 * logo file (import it from src/assets) when supplied.
 */
export function Wordmark({ tone = "ink", className }: { tone?: "ink" | "sand" | undefined; className?: string | undefined }) {
  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex flex-col leading-none",
        tone === "sand" ? "text-sand" : "text-ink",
        className,
      )}
      aria-label={`${site.name} — home`}
    >
      <span className="font-[family-name:var(--font-display)] text-2xl tracking-[0.14em] uppercase">
        {site.name}
      </span>
      <span className="mt-1 text-[0.55rem] uppercase tracking-[0.34em] opacity-60">
        {site.tagline}
      </span>
    </Link>
  );
}