import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const hasDarkHero = pathname === "/" || /^\/journeys\/[^/]+$/.test(pathname) || /^\/destinations\/[^/]+$/.test(pathname);
  const overlay = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* ── Desktop / scrolled header ─────────────────────────────────────── */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          overlay
            ? "py-7"
            : "border-b border-line bg-sand/95 py-4 shadow-[0_1px_24px_-8px_rgba(0,0,0,0.08)] backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex w-full max-w-[92rem] items-center justify-between px-6 lg:px-12">

          {/* Logo */}
          <Wordmark tone={overlay ? "sand" : "ink"} className="transition-all duration-700" />

          {/* Desktop nav — centred */}
          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 xl:flex">
            {nav.slice(0, 5).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => cn(
                  "relative text-[0.7rem] uppercase tracking-[0.24em] transition-colors duration-500 after:absolute after:-bottom-[3px] after:left-0 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500 hover:after:scale-x-100",
                  overlay
                    ? "text-sand/80 hover:text-sand"
                    : "text-ink/60 hover:text-ink",
                  isActive && (overlay ? "text-sand after:scale-x-100" : "text-terracotta after:scale-x-100"),
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-5">
            {/* CTA button — desktop */}
            <NavLink
              to="/contact"
              className={cn(
                "hidden text-[0.7rem] uppercase tracking-[0.26em] transition-all duration-500 xl:inline-flex items-center gap-2",
                overlay
                  ? "text-sand/80 hover:text-sand"
                  : "text-terracotta hover:text-ink",
              )}
            >
              Plan Your Journey
              <span className={cn(
                "inline-block h-[1px] w-6 bg-current transition-all duration-500",
              )} />
            </NavLink>

            {/* Hamburger — mobile */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={cn(
                "relative flex h-11 w-11 flex-col items-center justify-center gap-[5px] xl:hidden",
              )}
            >
              <span className={cn(
                "block h-[1.5px] w-6 origin-center bg-current transition-all duration-500",
                overlay ? "text-sand bg-sand" : "bg-ink",
              )} />
              <span className={cn(
                "block h-[1.5px] w-4 origin-center bg-current transition-all duration-500",
                overlay ? "bg-sand" : "bg-ink",
              )} />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ─────────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm transition-opacity duration-500 xl:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
      />

      {/* Drawer panel — slides in from right */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[min(100vw,420px)] flex-col bg-ink text-sand transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between border-b border-sand/10 px-8 py-6">
          <Wordmark tone="sand" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sand/15 text-sand/60 transition-colors hover:border-sand/40 hover:text-sand"
          >
            {/* × icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l12 12M13 1L1 13" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-1 flex-col justify-center px-8 gap-1">
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ transitionDelay: open ? `${i * 55}ms` : "0ms" }}
              className={({ isActive }) => cn(
                "group flex items-center justify-between border-b border-sand/8 py-5 font-[family-name:var(--font-display)] text-[2.2rem] leading-none tracking-tight transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                isActive ? "text-terracotta" : "text-sand/85 hover:text-sand",
              )}
            >
              {item.label}
              <span className="text-[0.7rem] uppercase tracking-[0.2em] text-sand/30 transition-colors group-hover:text-sand/60">
                {String(i + 1).padStart(2, "0")}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Drawer footer */}
        <div className="border-t border-sand/10 px-8 py-6 space-y-1">
          <p className="text-[0.7rem] uppercase tracking-[0.26em] text-sand/35">Get in touch</p>
          <a
            href={`mailto:${site.email}`}
            className="block text-sm text-sand/70 transition-colors hover:text-sand"
          >
            {site.email}
          </a>
        </div>
      </div>
    </>
  );
}
