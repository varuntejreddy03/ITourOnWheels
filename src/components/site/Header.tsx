import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { nav, site } from "@/data/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "./Wordmark";

export function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const hasDarkHero =
    pathname === "/" ||
    /^\/journeys\/[^/]+$/.test(pathname) ||
    /^\/destinations\/[^/]+$/.test(pathname);
  const overlay = hasDarkHero && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative text-[0.68rem] uppercase tracking-[0.26em] transition-colors duration-500",
      "after:absolute after:-bottom-[3px] after:left-0 after:h-[1px] after:w-full",
      "after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-500",
      "hover:after:scale-x-100",
      overlay ? "text-sand/75 hover:text-sand" : "text-ink/55 hover:text-ink",
      isActive && (overlay ? "text-sand after:scale-x-100" : "text-terracotta after:scale-x-100"),
    );

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-700",
          overlay
            ? "py-6"
            : "border-b border-line bg-sand/95 py-3 shadow-[0_1px_20px_-6px_rgba(0,0,0,0.1)] backdrop-blur-md",
        )}
      >
        <div className="relative mx-auto flex w-full max-w-[92rem] items-center px-6 lg:px-12">

          {/* Left nav — desktop only */}
          <nav className="hidden flex-1 items-center gap-8 xl:flex">
            {nav.slice(0, 3).map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Logo — centred on hero, left on scroll */}
          <div className={cn(
            "transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
            overlay
              ? "absolute left-1/2 top-2 -translate-x-1/2"
              : "relative left-0 translate-x-0",
          )}>
            <Wordmark tone={overlay ? "sand" : "ink"} />
          </div>

          {/* Spacer so right side stays aligned when logo is absolute */}
          {!overlay && <div className="flex-1" />}

          {/* Right nav + CTA — desktop */}
          <div className="hidden flex-1 items-center justify-end gap-8 xl:flex">
            {nav.slice(3, 5).map((item) => (
              <NavLink key={item.to} to={item.to} className={linkClass}>
                {item.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={cn(
                "ml-2 rounded-[2px] border px-5 py-2.5 text-[0.62rem] uppercase tracking-[0.26em] transition-all duration-500",
                overlay
                  ? "border-sand/40 text-sand hover:bg-sand hover:text-ink"
                  : "border-terracotta text-terracotta hover:bg-terracotta hover:text-sand",
              )}
            >
              Plan Your Journey
            </NavLink>
          </div>

          {/* Hamburger — mobile */}
          <div className={cn("flex items-center xl:hidden", overlay ? "ml-auto" : "ml-auto")}>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px]"
            >
              <span className={cn("block h-[1.5px] w-7 transition-all duration-500", overlay ? "bg-sand" : "bg-ink")} />
              <span className={cn("block h-[1.5px] w-5 transition-all duration-500", overlay ? "bg-sand" : "bg-ink")} />
              <span className={cn("block h-[1.5px] w-7 transition-all duration-500", overlay ? "bg-sand" : "bg-ink")} />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile drawer backdrop */}
      <div
        onClick={() => setOpen(false)}
        className={cn(
          "fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm transition-opacity duration-500 xl:hidden",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-[70] flex w-[min(100vw,400px)] flex-col bg-ink text-sand",
          "transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] xl:hidden",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-center justify-between border-b border-sand/10 px-8 py-5">
          <Wordmark tone="sand" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-sand/15 text-sand/50 transition-colors hover:border-sand/40 hover:text-sand"
          >
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M1 1l11 11M12 1L1 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col justify-center gap-0 px-8">
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
              className={({ isActive }) => cn(
                "group flex items-center justify-between border-b border-sand/8 py-5",
                "font-[family-name:var(--font-display)] text-[2rem] leading-none tracking-tight",
                "transition-all duration-500",
                open ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0",
                isActive ? "text-terracotta" : "text-sand/80 hover:text-sand",
              )}
            >
              {item.label}
              <span className="text-[0.58rem] uppercase tracking-[0.22em] text-sand/25 transition-colors group-hover:text-sand/50">
                {String(i + 1).padStart(2, "0")}
              </span>
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-sand/10 px-8 py-6">
          <p className="text-[0.58rem] uppercase tracking-[0.26em] text-sand/30">Get in touch</p>
          <a href={`mailto:${site.email}`} className="mt-1 block text-sm text-sand/65 transition-colors hover:text-sand">
            {site.email}
          </a>
        </div>
      </div>
    </>
  );
}
