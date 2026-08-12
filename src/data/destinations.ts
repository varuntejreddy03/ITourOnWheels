import delhi from "@/assets/dest-delhi.webp";
import agra from "@/assets/dest-agra.webp";
import jaipur from "@/assets/dest-jaipur.webp";

export type Destination = {
  slug: string;
  name: string;
  region: string;
  themes: string[];
  intro: string;
  image?: string;
  status: "live" | "coming-soon";
};

/** Add new destinations here — cards and pages render from this list. */
export const destinations: Destination[] = [
  {
    slug: "delhi",
    name: "Delhi",
    region: "North India",
    themes: ["History", "Culture", "Old Delhi"],
    intro:
      "Layered, loud and endlessly alive — imperial avenues, Mughal tombs and the narrow lanes of the old city in one place.",
    image: delhi,
    status: "live",
  },
  {
    slug: "agra",
    name: "Agra",
    region: "North India",
    themes: ["Taj Mahal", "Heritage", "Mughal Architecture"],
    intro:
      "A city shaped by marble and memory, where the Taj Mahal is only the beginning of the Mughal story.",
    image: agra,
    status: "live",
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    region: "Rajasthan",
    themes: ["Royalty", "Forts", "Rajasthani Culture"],
    intro:
      "Pink sandstone city of courtyards, forts and craft traditions carried through generations.",
    image: jaipur,
    status: "live",
  },
  {
    slug: "more-destinations",
    name: "More Coming",
    region: "Across India",
    themes: ["In preparation"],
    intro:
      "Further destinations are being added. Tell us where you would like to travel and we will build the journey around it.",
    status: "coming-soon",
  },
];