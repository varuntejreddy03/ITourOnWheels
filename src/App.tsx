import { Routes, Route, Navigate, useParams, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";
import { CurrencyPrice } from "@/components/site/CurrencyPrice";

import { Hero } from "@/components/home/Hero";
import { SocialStrip } from "@/components/home/SocialStrip";
import { FeaturedJourney } from "@/components/home/FeaturedJourney";
import { Philosophy } from "@/components/home/Philosophy";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { DestinationsGrid } from "@/components/sections/DestinationsGrid";
import { DestinationDetailPage } from "@/components/sections/DestinationDetailPage";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { JourneysSection } from "@/components/sections/JourneysSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { Action, Eyebrow, ParallaxImage, Shell } from "@/components/site/Primitives";
import { Reveal, useParallax } from "@/components/site/Reveal";
import { getJourney, featuredJourney } from "@/data/journeys";
import { site } from "@/data/site";
import { useTitle } from "@/hooks/use-title";

function HomePage() {
  useTitle(`${site.name} — ${site.tagline}`);
  return (
    <>
      <Hero />
      <FeaturedJourney />
      <Philosophy />
      <DestinationsGrid />
      <JourneysSection limit={2} />
      <StoriesSection />
      <SocialStrip />
      <EnquirySection />
    </>
  );
}

function AboutPage() {
  useTitle(`About Us — ${site.name}`);
  return (
    <>
      <PageHeader eyebrow="About Us" title="Our" italic="Story" />
      <Philosophy showLink={false} />
      <AboutSection withLink={false} />
      <StoriesSection />
      <EnquirySection />
    </>
  );
}

function ContactPage() {
  useTitle(`Contact — ${site.name}`);
  return (
    <>
      <PageHeader eyebrow="Contact" title="Start The" italic="Conversation" intro="Share your dates, the pace you prefer and what you hope to see. We reply personally within one working day." />
      <EnquirySection />
    </>
  );
}

function DestinationsPage() {
  useTitle(`Destinations — ${site.name}`);
  return (
    <>
      <PageHeader eyebrow="Destinations" title="Where Will" italic="You Go?" intro="We open destinations slowly, only once we know them well enough to host you properly. More are on the way." />
      <DestinationsSection heading="Now Travelling" eyebrow="Open Destinations" />
      <EnquirySection />
    </>
  );
}

function ExperiencesPage() {
  useTitle(`Travel Styles — ${site.name}`);
  return (
    <>
      <PageHeader eyebrow="Travel Styles" title="Ways To" italic="Experience India" intro="Every journey is assembled from these travel styles. Choose one, or let us blend several into a single itinerary." />
      <ExperiencesSection eyebrow="Travel Styles" heading="Five Ways To Travel" />
      <HighlightsSection highlights={featuredJourney.highlights} eyebrow="Signature Experiences" heading="Currently Running" />
      <EnquirySection />
    </>
  );
}

function GalleryPage() {
  useTitle(`Gallery — ${site.name}`);
  return (
    <>
      <PageHeader eyebrow="Gallery" title="India," italic="Photographed" intro="Filter by what you travel for — the people, the food, the architecture, the land." />
      <GallerySection />
      <EnquirySection />
    </>
  );
}

function JourneysPage() {
  useTitle(`Journeys — ${site.name}`);
  return (
    <>
      <PageHeader eyebrow="Journeys" title="Our First" italic="Journey" intro="The 7 Days / 6 Nights Luxury Golden Triangle is our first published journey. More routes across India are being organised and will be added as soon as every hotel, host and experience is confirmed." />
      <JourneysSection eyebrow="Available Now" heading="Current Collection" />
      <EnquirySection />
    </>
  );
}

function JourneyDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const journey = getJourney(slug ?? "");
  const { ref, offset } = useParallax(0.08);
  useTitle(journey ? `${journey.title} — ${site.name}` : site.name);

  useEffect(() => {
    if (!journey || journey.status !== "live") navigate("/journeys", { replace: true });
  }, [journey, navigate]);

  if (!journey || journey.status !== "live") return null;

  return (
    <>
      <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-ink">
        <div ref={ref} className="absolute inset-0">
          <img src={journey.image} alt={`${journey.title} — ${journey.route}`} style={{ transform: `translate3d(0, ${offset}px, 0) scale(1.1)` }} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/88 via-ink/35 to-ink/40" />
        </div>
        <Shell className="relative z-10 pb-24 pt-40">
          <Reveal><Eyebrow className="text-teal">{journey.label}</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h1 className="display-xl mt-8 max-w-4xl text-sand">
              {journey.duration}<br /><span className="font-[family-name:var(--font-display-alt)] font-light">{journey.title}</span>
            </h1>
          </Reveal>
          <Reveal delay={240}><p className="mt-10 text-[0.7rem] uppercase tracking-[0.3em] text-sand/70">{journey.route}</p></Reveal>
          <Reveal delay={320} className="mt-12"><Action href="#plan" variant="light">Enquire About This Journey</Action></Reveal>
        </Shell>
      </section>

      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
            <div>
              <Reveal><Eyebrow>Trip Overview</Eyebrow></Reveal>
              {journey.intro.map((paragraph, index) => (
                <Reveal key={index} delay={120 + index * 90}>
                  <p className={index === 0 ? "mt-10 font-[family-name:var(--font-display)] text-[clamp(1.5rem,2.4vw,2.2rem)] leading-[1.3]" : "body-lead mt-8"}>{paragraph}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={200}>
              <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t border-line pt-10">
                {journey.facts.filter(f => f.label !== "Early Bird").map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft">{fact.label}</dt>
                    <dd className="mt-2 font-[family-name:var(--font-display)] text-xl leading-snug">{fact.value}</dd>
                  </div>
                ))}
                <div className="col-span-2 border-t border-line pt-8">
                  <dt className="text-[0.7rem] uppercase tracking-[0.26em] text-ink-soft mb-4">Early Bird Price</dt>
                  <CurrencyPrice />
                </div>
              </dl>
            </Reveal>
          </div>
        </Shell>
      </section>

      <section className="border-y border-line bg-sand-deep/40 py-28 md:py-40">
        <Shell>
          <Reveal><Eyebrow>The Cities</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="display-lg mt-8 max-w-3xl">Three Cities,<br /><span className="font-[family-name:var(--font-display-alt)] font-light">One Story</span></h2></Reveal>
          <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-3">
            {journey.cities.map((city, index) => (
              <Reveal key={city.name} delay={index * 100} className={index === 1 ? "md:mt-16" : undefined}>
                <div className="img-zoom">
                  <div className="aspect-[3/4] overflow-hidden bg-sand-deep">
                    <img src={city.image} alt={`${city.name} — ${city.note}`} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-display)] text-3xl">{city.name}</h3>
                <p className="mt-3 text-[0.7rem] uppercase tracking-[0.2em] text-teal-deep">{city.note}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{city.text}</p>
              </Reveal>
            ))}
          </div>
        </Shell>
      </section>

      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <Reveal><Eyebrow>Day By Day</Eyebrow></Reveal>
          <Reveal delay={100}><h2 className="display-lg mt-8 max-w-3xl">The <span className="font-[family-name:var(--font-display-alt)] font-light">Itinerary</span></h2></Reveal>
          <Reveal delay={160} className="mt-10 flex flex-wrap gap-2">
            {journey.itinerary.map((day) => (
              <a
                key={day.day}
                href={`#day-${day.day}`}
                className="inline-flex min-h-11 items-center border border-line px-3 text-[0.7rem] uppercase tracking-[0.2em] text-ink-soft transition-colors duration-500 hover:border-terracotta hover:text-terracotta"
              >
                Day {day.day}
              </a>
            ))}
          </Reveal>
          <ol className="mt-12 border-t border-line">
            {journey.itinerary.map((day, index) => (
              <Reveal key={day.day} delay={index * 50}>
                <li id={`day-${day.day}`} className="grid scroll-mt-28 gap-8 border-b border-line py-12 md:grid-cols-[7rem_1fr_18rem] md:gap-12 md:py-16">
                  <div>
                    <span className="font-[family-name:var(--font-display)] text-5xl text-terracotta/80">{String(day.day).padStart(2, "0")}</span>
                    <p className="mt-3 text-[0.7rem] uppercase tracking-[0.24em] text-ink-soft">{day.place}</p>
                  </div>
                  <div>
                    <h3 className="display-md">{day.title}</h3>
                    <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft">{day.description}</p>
                  </div>
                  {day.image ? (
                    <div className="img-zoom"><div className="aspect-[4/3] overflow-hidden bg-sand-deep"><img src={day.image} alt={`Day ${day.day} — ${day.title}`} loading="lazy" className="h-full w-full object-cover" /></div></div>
                  ) : <div />}
                </li>
              </Reveal>
            ))}
          </ol>
        </Shell>
      </section>

      <HighlightsSection highlights={journey.highlights} eyebrow="Experiences" heading="Included Experiences" tone="dark" />

      <section className="bg-sand py-28 md:py-40">
        <Shell>
          <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
            <div>
              <Reveal><Eyebrow>Inclusions</Eyebrow></Reveal>
              <Reveal delay={100}><h2 className="display-lg mt-8">What Is<br /><span className="font-[family-name:var(--font-display-alt)] font-light">Included</span></h2></Reveal>
              <Reveal delay={200}>
                <ul className="mt-12 space-y-4 text-sm text-ink-soft">
                  {journey.notes.map((note) => <li key={note} className="border-l border-terracotta/40 pl-4">{note}</li>)}
                </ul>
              </Reveal>
            </div>
            <Reveal delay={140}>
              <ul className="border-t border-line">
                {journey.inclusions.map((inclusion) => (
                  <li key={inclusion} className="border-b border-line py-5 font-[family-name:var(--font-display)] text-xl">{inclusion}</li>
                ))}
              </ul>
              <div className="mt-12"><Action href="#plan">Enquire Now</Action></div>
            </Reveal>
          </div>
        </Shell>
      </section>

      <GallerySection filterable={false} />
      <EnquirySection defaultJourney={journey.title} />
    </>
  );
}

function NotFoundPage() {
  useTitle(`Page Not Found — ${site.name}`);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Wrong Turn</h2>
        <p className="mt-2 text-sm text-muted-foreground">This page isn't on the itinerary. Let's get you back to the journey.</p>
        <div className="mt-6">
          <a href="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const { pathname } = useLocation();

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  // Back to top button visibility
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/destinations/:slug" element={<DestinationDetailPage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/journeys" element={<JourneysPage />} />
          <Route path="/journeys/:slug" element={<JourneyDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
      <Toaster />

      {/* Back to top button */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={[
          "fixed bottom-8 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-sand/90 text-ink shadow-lift backdrop-blur-sm transition-all duration-500 hover:bg-terracotta hover:text-sand hover:border-terracotta md:right-10",
          showTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
        ].join(" ")}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 12V2M2 7l5-5 5 5" />
        </svg>
      </button>
    </>
  );
}
