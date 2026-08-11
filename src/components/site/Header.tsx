import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const overlay = pathname === "/" && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          overlay
            ? "bg-transparent py-8"
            : "border-b border-line bg-sand/92 py-5 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between px-6 md:px-12">
          <Wordmark
            tone={overlay ? "sand" : "ink"}
            className="transition-colors duration-700"
          />

          <nav className="hidden items-center gap-10 lg:flex">
            {nav.slice(0, 5).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={cn(
                  "link-underline text-[0.7rem] uppercase tracking-[0.22em] transition-colors duration-500",
                  overlay ? "text-sand/85 hover:text-sand" : "text-ink-soft hover:text-ink",
                )}
                activeProps={{ className: "text-terracotta" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className={cn(
                "hidden rounded-[2px] border px-6 py-3 text-[0.65rem] uppercase tracking-[0.24em] transition-all duration-500 md:inline-block",
                overlay
                  ? "border-sand/50 text-sand hover:bg-sand hover:text-ink"
                  : "border-terracotta text-terracotta hover:bg-terracotta hover:text-sand",
              )}
            >
              Plan Your Journey
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "flex flex-col gap-[6px] py-2 lg:hidden",
                overlay ? "text-sand" : "text-ink",
              )}
            >
              <span className="block h-[1px] w-8 bg-current" />
              <span className="block h-[1px] w-8 bg-current" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen mobile menu */}
      <div
        className={cn(
          "fixed inset-0 z-[60] flex flex-col bg-ink text-sand transition-all duration-700 lg:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-8 md:px-12">
          <Wordmark tone="sand" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-[0.7rem] uppercase tracking-[0.24em] text-sand/70"
          >
            Close
          </button>
        </div>
        <nav className="flex flex-1 flex-col justify-center gap-2 px-6 md:px-12">
          {nav.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              className="font-[family-name:var(--font-display)] text-4xl tracking-tight text-sand/90 transition-colors hover:text-terracotta"
              style={{ transitionDelay: `${index * 30}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-sand/15 px-6 py-8 text-[0.7rem] uppercase tracking-[0.22em] text-sand/60 md:px-12">
          {site.email}
        </div>
      </div>
    </>
  );
}