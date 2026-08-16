import { Link } from "react-router-dom";
import { site, globalOffices } from "@/data/site";
import { Wordmark } from "./Wordmark";

const explore = [
  { label: "Destinations", to: "/destinations" },
  { label: "Journeys", to: "/journeys" },
  { label: "Travel Styles", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
];

const company = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-sand">

      {/* Main footer body */}
      <div className="mx-auto w-full max-w-[92rem] px-6 pt-20 pb-0 md:px-12 md:pt-28">

        {/* Top grid */}
        <div className="grid gap-16 border-b border-sand/10 pb-16 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] lg:gap-12">

          {/* Brand col */}
          <div>
            <Wordmark tone="sand" />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-sand/55">
              Cultural and heritage journeys across India — planned slowly, hosted personally, remembered for life.
            </p>
            <div className="mt-8 space-y-2 text-sm text-sand/55">
              <a href={`tel:${site.phone}`} className="flex items-center gap-3 transition-colors hover:text-sand">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-teal w-12 shrink-0">Phone</span>
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 transition-colors hover:text-sand">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-teal w-12 shrink-0">Email</span>
                {site.email}
              </a>
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 transition-colors hover:text-sand">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-teal w-12 shrink-0">WA</span>
                Message Us
              </a>
              <p className="flex items-start gap-3">
                <span className="text-[0.6rem] uppercase tracking-[0.22em] text-teal w-12 shrink-0 mt-0.5">Hours</span>
                <span className="space-y-0.5">
                  <span className="block">{site.hours.weekdays}</span>
                  <span className="block">{site.hours.weekend}</span>
                </span>
              </p>
            </div>
          </div>

          {/* Explore col */}
          <div>
            <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-teal">Explore</h3>
            <ul className="mt-6 space-y-3">
              {explore.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-sand/60 transition-colors hover:text-sand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company col */}
          <div>
            <h3 className="text-[0.65rem] uppercase tracking-[0.3em] text-teal">Company</h3>
            <ul className="mt-6 space-y-3">
              {company.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-sand/60 transition-colors hover:text-sand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials col */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="mt-8 flex flex-wrap gap-4 lg:justify-end">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-[0.65rem] uppercase tracking-[0.24em] text-sand/50 transition-colors hover:text-sand"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Global Offices */}
        <div className="border-b border-sand/10 py-12">
          <p className="text-[0.65rem] uppercase tracking-[0.3em] text-teal">Global Offices</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {globalOffices.map((office) => (
              <a
                key={office.phone}
                href={office.href}
                className="flex items-center gap-4 rounded-sm border border-sand/10 p-4 transition-colors hover:border-sand/25"
              >
                <span className="text-2xl">{office.flag}</span>
                <div>
                  <p className="text-[0.58rem] uppercase tracking-[0.2em] text-sand/40">{office.region}</p>
                  <p className="mt-0.5 font-[family-name:var(--font-display)] text-sm text-sand/80">{office.phone}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Statement */}
        <p className="py-12 font-[family-name:var(--font-display)] text-[clamp(1.8rem,5vw,4.5rem)] leading-[1] text-sand/80">
          {site.statement}
        </p>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-sand/10 py-6 text-[0.62rem] uppercase tracking-[0.22em] text-sand/35 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {site.legal}</span>
          <span>Designed for those who travel with intention</span>
        </div>

      </div>
    </footer>
  );
}
