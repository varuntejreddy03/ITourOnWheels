import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { JourneysSection } from "@/components/sections/JourneysSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { site } from "@/data/site";

const title = `Journeys & Tours in India — ${site.name}`;
const description =
  "Our current collection of Indian journeys, led by the 7 Days / 6 Nights Luxury Golden Triangle through Delhi, Agra and Jaipur.";

export const Route = createFileRoute("/journeys/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: JourneysPage,
});

function JourneysPage() {
  return (
    <>
      <PageHeader
        eyebrow="Journeys"
        title="Featured"
        italic="Journeys"
        intro="A small, growing collection built for U.S. travelers. The 7 Days / 6 Nights Luxury Golden Triangle is our starting point — new routes are published only once every hotel, host and experience is confirmed."
      />
      <JourneysSection eyebrow="Available Now" heading="Current Collection" />
      <EnquirySection />
    </>
  );
}