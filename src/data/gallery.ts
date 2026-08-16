import heritage3 from "@/assets/gal-heritage-3.webp";
import culture2 from "@/assets/gal-culture-2.webp";
import culture3 from "@/assets/gal-culture-3.webp";
import people from "@/assets/gal-people.webp";
import architecture2 from "@/assets/gal-architecture-2.webp";
import landscape2 from "@/assets/gal-landscape-2.webp";
import camel from "@/assets/camel.jpg";
import fort from "@/assets/fort.jpg";
import jaipur from "@/assets/jaipur.jpg";
import valley from "@/assets/valley.jpg";

export const galleryCategories = [
  "Heritage",
  "Culture",
  "People",
  "Architecture",
  "Landscapes",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export type GalleryImage = {
  src: string;
  alt: string;
  category: GalleryCategory;
  orientation: "landscape" | "portrait";
};

export const galleryImages: GalleryImage[] = [
  { src: jaipur, alt: "The Pink City of Jaipur at golden hour", category: "Architecture", orientation: "landscape" },
  { src: people, alt: "A flower seller arranging marigold garlands at a Delhi market", category: "People", orientation: "portrait" },
  { src: fort, alt: "A Rajasthan hill fort rising above the plains at dusk", category: "Heritage", orientation: "landscape" },
  { src: culture2, alt: "Bonfire and folk musicians under the Rajasthan night sky", category: "Culture", orientation: "landscape" },
  { src: camel, alt: "Camel safari at dusk in the Rajasthan desert", category: "Landscapes", orientation: "landscape" },
  { src: architecture2, alt: "Hawa Mahal's honeycomb facade catching the morning sun", category: "Architecture", orientation: "landscape" },
  { src: heritage3, alt: "Amber Fort's mirrored Sheesh Mahal hall, Jaipur", category: "Heritage", orientation: "landscape" },
  { src: valley, alt: "A lush valley in the Himalayan foothills near Rishikesh", category: "Landscapes", orientation: "landscape" },
  { src: culture3, alt: "A live tabla and sitar performance in an intimate Delhi venue", category: "Culture", orientation: "portrait" },
  { src: landscape2, alt: "Amber Fort reflected in Maota Lake at sunrise", category: "Landscapes", orientation: "landscape" },
];
