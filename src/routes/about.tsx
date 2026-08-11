import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AboutSection } from "@/components/sections/AboutSection";
import { Philosophy } from "@/components/home/Philosophy";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { EnquirySection } from "@/components/sections/EnquirySection";
import { site } from "@/data/site";

const title = `About ${site.name} — Culturally Led Travel in India`;
const description =
  "Who we are, how we design journeys, and why we travel slowly: small groups, characterful stays and hosts who know their cities.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="We Travel"
        italic="Slowly"
        intro="A small studio designing cultural journeys across India, hosted personally from arrival to departure."
      />
      <Philosophy />
      <AboutSection withLink={false} />
      <StoriesSection />
      <EnquirySection />
    </>
  );
}