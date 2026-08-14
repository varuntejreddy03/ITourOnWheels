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
        "shrink-0 overflow-hidden rounded-full transition-all duration-700",
        overlay
          ? "h-20 w-20 bg-ink/10 shadow-[0_4px_32px_rgba(0,0,0,0.6)] ring-2 ring-sand/30 sm:h-28 sm:w-28"
          : "h-10 w-10 bg-sand ring-[1.5px] ring-ink/20 sm:h-12 sm:w-12",
      )}>
        <img
          src="/india-tour-on-wheels-crest.png"
          alt={site.name}
          width={96}
          height={96}
          className="h-full w-full object-cover scale-[1.08]"
        />
      </div>

      {/* Name — slides in when scrolled */}
      <div className={cn(
        "flex flex-col leading-none transition-all duration-700",
        overlay ? "w-0 overflow-hidden opacity-0" : "w-auto opacity-100",
      )}>
        <span className="whitespace-nowrap font-[family-name:var(--font-display-alt)] text-[1.1rem] font-medium tracking-[0.02em] text-ink sm:text-[1.2rem]">
          ITouronwheels
        </span>
      </div>
    </Link>
  );
}
