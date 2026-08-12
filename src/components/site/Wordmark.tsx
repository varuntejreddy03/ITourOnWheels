import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Wordmark({ tone = "ink", className }: { tone?: "ink" | "sand"; className?: string }) {
  return (
    <Link to="/" aria-label={`${site.name} — home`} className={cn("inline-block shrink-0", className)}>
      <img
        src="/india-tour-on-wheels-crest.png"
        alt={site.name}
        width={64}
        height={64}
        className={cn(
          "h-14 w-14 object-contain transition-opacity duration-300 hover:opacity-85 sm:h-16 sm:w-16",
          tone === "sand"
            ? "[filter:drop-shadow(0_2px_8px_rgba(0,0,0,0.55))]"
            : "[filter:drop-shadow(0_1px_3px_rgba(0,0,0,0.15))]",
        )}
      />
    </Link>
  );
}
