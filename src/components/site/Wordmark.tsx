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
      {/* Crest — only show when scrolled */}
      {!overlay && (
        <img
          src="/india-tour-on-wheels-crest.png"
          alt={site.name}
          className="shrink-0 object-contain"
          style={{ width: 80, height: 80 }}
        />
      )}

      {/* Name — always show when scrolled */}
      {!overlay && (
        <span className="whitespace-nowrap font-[family-name:var(--font-display)] text-[0.95rem] font-semibold uppercase tracking-[0.08em] text-ink sm:text-[1rem]">
          I Tour On Wheels
        </span>
      )}
    </Link>
  );
}
