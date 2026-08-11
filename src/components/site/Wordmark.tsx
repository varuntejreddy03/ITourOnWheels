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
        "group inline-flex max-w-[min(100%,33rem)] items-center gap-3 rounded-[5px] border-2 p-1 pr-3 leading-none shadow-[inset_0_0_0_1px_currentColor] sm:gap-4 sm:pr-5",
        tone === "sand"
          ? "border-sand/90 bg-ink/25 text-sand"
          : "border-ink/35 bg-sand-deep/55 text-ink",
        className,
      )}
      aria-label={`${site.name} — home`}
    >
      <img
        src={logo.url}
        alt={`${site.name} crest`}
        width={64}
        height={64}
        className="h-11 w-11 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
      />
      <span className="flex min-w-0 flex-col border-l border-current/20 pl-3 sm:pl-4">
        <span className="truncate font-[family-name:var(--font-display)] text-[0.92rem] uppercase tracking-[0.12em] sm:text-lg lg:text-[1.55rem]">
          {site.name}
        </span>
        <span className="mt-1 truncate text-[0.42rem] uppercase tracking-[0.22em] opacity-65 sm:text-[0.5rem] lg:text-[0.6rem]">
          {site.tagline}
        </span>
      </span>
    </Link>
  );
}