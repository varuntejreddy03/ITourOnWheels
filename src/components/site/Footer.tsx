import { Link } from "react-router-dom";
import { site } from "@/data/site";
import { Wordmark } from "./Wordmark";

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Destinations", to: "/destinations" },
      { label: "Journeys", to: "/journeys" },
      { label: "Experiences", to: "/experiences" },
      { label: "Gallery", to: "/gallery" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-sand/15 bg-ink text-sand">
      <div className="mx-auto w-full max-w-[92rem] px-6 py-24 md:px-12 md:py-32">
        <div className="grid gap-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Wordmark tone="sand" />
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-sand/60">
              Cultural and heritage journeys across India, planned slowly and hosted personally.
            </p>
            <div className="mt-10 flex flex-wrap gap-6">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="link-underline inline-block py-2 text-[0.7rem] uppercase tracking-[0.24em] text-sand/70 hover:text-sand"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-12 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="text-[0.7rem] uppercase tracking-[0.28em] text-teal">
                  {column.title}
                </h3>
                <ul className="mt-6 space-y-4">
                  {column.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="link-underline text-sm text-sand/70 hover:text-sand"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-24 font-[family-name:var(--font-display)] text-[clamp(2rem,6vw,5.5rem)] leading-[0.95] text-sand/90">
          {site.statement}
        </p>

        <div className="mt-16 flex flex-col gap-4 border-t border-sand/15 pt-8 text-[0.7rem] uppercase tracking-[0.22em] text-sand/45 md:flex-row md:items-center md:justify-between">
          <span>
            © {new Date().getFullYear()} {site.legal}
          </span>
          <span>{site.location}</span>
        </div>
      </div>
    </footer>
  );
}