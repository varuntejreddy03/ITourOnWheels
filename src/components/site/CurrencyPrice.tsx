import { useState } from "react";
import { cn } from "@/lib/utils";

const currencies = [
  { code: "USD", symbol: "$",  rate: 1,      label: "USD" },
  { code: "GBP", symbol: "£",  rate: 0.79,   label: "GBP" },
  { code: "EUR", symbol: "€",  rate: 0.92,   label: "EUR" },
  { code: "CAD", symbol: "CA$", rate: 1.36,  label: "CAD" },
  { code: "AUD", symbol: "A$", rate: 1.53,   label: "AUD" },
  { code: "INR", symbol: "₹",  rate: 83.5,   label: "INR" },
];

function fmt(usd: number, rate: number, symbol: string) {
  const val = Math.round(usd * rate);
  if (val >= 100000) return `${symbol}${(val / 100000).toFixed(1)}L`;
  return `${symbol}${val.toLocaleString()}`;
}

export function CurrencyPrice({
  usd,
  className,
}: {
  usd: number;
  className?: string;
}) {
  const [active, setActive] = useState("USD");
  const cur = currencies.find((c) => c.code === active)!;

  return (
    <div className={cn("space-y-3", className)}>
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
