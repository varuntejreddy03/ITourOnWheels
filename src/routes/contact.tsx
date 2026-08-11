import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { site } from "@/data/site";

const title = `Contact & Enquiries — ${site.name}`;
const description =
  "Tell us how you like to travel and we will shape an Indian itinerary around it. Enquire about a listed journey or a tailor-made trip.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Start The"
        italic="Conversation"
        intro="Share your dates, the pace you prefer and what you hope to see. We reply personally within one working day."
      />
      <EnquirySection />
    </>
  );
}