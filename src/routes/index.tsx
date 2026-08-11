import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { FeaturedJourney } from "@/components/home/FeaturedJourney";
import { Philosophy } from "@/components/home/Philosophy";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { JourneysSection } from "@/components/sections/JourneysSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { featuredJourney } from "@/data/journeys";
import { site } from "@/data/site";

const title = `${site.name} — Luxury Cultural Journeys Across India`;
const description =
  "Editorial, culturally led journeys across India. Explore the 7 day Luxury Golden Triangle through Delhi, Agra and Jaipur, or plan a tailor-made trip.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FeaturedJourney />
      <Philosophy />
      <DestinationsSection />
      <ExperiencesSection />
      <JourneysSection />
      <HighlightsSection
        highlights={featuredJourney.highlights}
        eyebrow="Experiences Highlight"
        heading="Moments From The Golden Triangle"
      />
      <StoriesSection />
      <GallerySection filterable={false} />
      <AboutSection />
      <EnquirySection />
    </>
  );
}
