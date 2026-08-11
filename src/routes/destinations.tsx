import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { site } from "@/data/site";

const title = `Destinations in India — ${site.name}`;
const description =
  "Delhi, Agra and Jaipur today, with further Indian destinations being added. Explore where our cultural journeys travel.";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: DestinationsPage,
});

function DestinationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Destinations"
        title="Where Will"
        italic="You Go?"
        intro="We open destinations slowly, only once we know them well enough to host you properly. More are on the way."
      />
      <DestinationsSection heading="Now Travelling" eyebrow="Open Destinations" />
      <EnquirySection />
    </>
  );
}