import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/home/Hero";
import { FeaturedJourney } from "@/components/home/FeaturedJourney";
import { Philosophy } from "@/components/home/Philosophy";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { JourneysSection } from "@/components/sections/JourneysSection";
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
      <DestinationsSection limit={3} />
      <JourneysSection limit={2} />
    </>
  );
}
