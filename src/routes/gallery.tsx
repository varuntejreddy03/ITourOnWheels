import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { GallerySection } from "@/components/sections/GallerySection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { site } from "@/data/site";

const title = `Gallery — India Through Our Lens | ${site.name}`;
const description =
  "People, food, architecture, landscapes and culture — imagery from the places our Indian journeys travel through.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="India,"
        italic="Photographed"
        intro="Filter by what you travel for — the people, the food, the architecture, the land."
      />
      <GallerySection />
      <EnquirySection />
    </>
  );
}