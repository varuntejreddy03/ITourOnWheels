import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { ExperiencesSection } from "@/components/sections/ExperiencesSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { featuredJourney } from "@/data/journeys";
import { site } from "@/data/site";

const title = `Experiences & Tour Styles — ${site.name}`;
const description =
  "Heritage, culinary, cultural, royal and nature experiences across India — the building blocks of every journey we plan.";

export const Route = createFileRoute("/experiences")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ExperiencesPage,
});

function ExperiencesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Experiences"
        title="Ways To"
        italic="Experience India"
        intro="Every journey is assembled from these travel styles. Choose one, or let us blend several into a single itinerary."
      />
      <ExperiencesSection eyebrow="Tour Categories" heading="Five Ways To Travel" />
      <HighlightsSection
        highlights={featuredJourney.highlights}
        eyebrow="Signature Experiences"
        heading="Currently Running"
      />
      <EnquirySection />
    </>
  );
}