import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Wordmark({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "sand";
  className?: string;
}) {
  const overlay = tone === "sand";

  return (
    <Link
      to="/"
      aria-label={`${site.name} — home`}
      className={cn("inline-flex items-center gap-3 transition-all duration-700", className)}
    >
      {/* Crest */}
      <div className={cn(
        "shrink-0 transition-all duration-700",
        overlay
          ? "h-24 w-24 sm:h-28 sm:w-28"
          : "h-12 w-12 sm:h-14 sm:w-14",
      )}>
        <img
          src="/logo-transparent.png"
          alt={site.name}
          width={128}
          height={128}
          className="h-full w-full object-contain transition-all duration-700"
        />
      </div>

      {/* Name — slides in when scrolled */}
      <div className={cn(
        "flex flex-col leading-none transition-all duration-700",
        overlay ? "w-0 overflow-hidden opacity-0" : "w-auto opacity-100",
      )}>
        <span className={cn(
          "whitespace-nowrap font-[family-name:var(--font-display)] text-[1rem] font-semibold uppercase tracking-[0.08em] sm:text-[1.05rem]",
          overlay ? "text-sand" : "text-ink"
        )}>
          I Tour On Wheels
        </span>
      </div>
    </Link>
  );
}
