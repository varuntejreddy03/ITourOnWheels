import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png.asset.json";

/** Brand crest + wordmark lockup. */
export function Wordmark({ tone = "ink", className }: { tone?: "ink" | "sand" | undefined; className?: string | undefined }) {
  return (
    <Link
      to="/"
      className={cn(
        "group inline-flex items-center gap-3 leading-none",
        tone === "sand" ? "text-sand" : "text-ink",
        className,
      )}
      aria-label={`${site.name} — home`}
    >
      <img
        src={logo.url}
        alt={`${site.name} crest`}
        width={64}
        height={64}
        className="h-14 w-14 shrink-0 object-contain md:h-16 md:w-16"
      />
      <span className="flex flex-col">
        <span className="font-[family-name:var(--font-display)] text-[1.05rem] tracking-[0.14em] uppercase md:text-xl">
          {site.name}
        </span>
        <span className="mt-1 text-[0.5rem] uppercase tracking-[0.28em] opacity-60 md:text-[0.55rem]">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}