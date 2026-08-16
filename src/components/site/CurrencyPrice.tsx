import { useState } from "react";
import { cn } from "@/lib/utils";

const currencies = [
  { code: "USD", symbol: "$",  rate: 1,      label: "USD" },
  { code: "GBP", symbol: "£",  rate: 0.79,   label: "GBP" },
  { code: "EUR", symbol: "€",  rate: 0.92,   label: "EUR" },
  { code: "CAD", symbol: "CA$", rate: 1.36,  label: "CAD" },
  { code: "AUD", symbol: "A$", rate: 1.53,   label: "AUD" },
];

function fmt(usd: number, rate: number, symbol: string) {
  const val = Math.round(usd * rate);
  if (val >= 100000) return `${symbol}${(val / 100000).toFixed(1)}L`;
  return `${symbol}${val.toLocaleString()}`;
}

export function CurrencyPrice({
  className,
}: {
  className?: string;
}) {
  const [active, setActive] = useState("USD");
  const [withFlights, setWithFlights] = useState(false);
  const cur = currencies.find((c) => c.code === active)!;
  const usd = withFlights ? 4999 : 3999;

  return (
    <div className={cn("space-y-3", className)}>
      {/* Flights toggle */}
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setWithFlights(false)}
          className={cn(
            "rounded-[2px] border px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.18em] transition-all duration-300",
            !withFlights ? "border-terracotta bg-terracotta text-sand" : "border-line text-ink-soft hover:border-ink hover:text-ink",
          )}
        >
          Without Flights
        </button>
        <button
          type="button"
          onClick={() => setWithFlights(true)}
          className={cn(
            "rounded-[2px] border px-3 py-1.5 text-[0.55rem] uppercase tracking-[0.18em] transition-all duration-300",
            withFlights ? "border-terracotta bg-terracotta text-sand" : "border-line text-ink-soft hover:border-ink hover:text-ink",
          )}
        >
          With Flights
        </button>
      </div>

      {/* Price display */}
      <div className="font-[family-name:var(--font-display)] text-[clamp(2rem,4vw,3rem)] leading-none text-terracotta">
        {fmt(usd, cur.rate, cur.symbol)}
        <span className="ml-2 text-[0.55rem] uppercase tracking-[0.22em] text-ink-soft align-middle">
          per person
        </span>
      </div>

      {/* Currency switcher */}
      <div className="flex flex-wrap gap-1">
        {currencies.map((c) => (
          <button
            key={c.code}
            type="button"
            onClick={() => setActive(c.code)}
            className={cn(
              "rounded-[2px] border px-2 py-1 text-[0.55rem] uppercase tracking-[0.18em] transition-all duration-300",
              active === c.code
                ? "border-terracotta bg-terracotta text-sand"
                : "border-line text-ink-soft hover:border-ink hover:text-ink",
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <p className="text-[0.5rem] uppercase tracking-[0.18em] text-ink/30">
        Approximate conversion · Rates may vary
      </p>
    </div>
  );
}
