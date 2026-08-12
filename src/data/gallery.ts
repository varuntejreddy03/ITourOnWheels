import heritage from "@/assets/gal-heritage.webp";
import heritage2 from "@/assets/gal-heritage-2.webp";
import heritage3 from "@/assets/gal-heritage-3.webp";
import culture from "@/assets/gal-culture.webp";
import culture2 from "@/assets/gal-culture-2.webp";
import culture3 from "@/assets/gal-culture-3.webp";
import people from "@/assets/gal-people.webp";
import people2 from "@/assets/gal-people-2.webp";
import food from "@/assets/gal-food.webp";
import food2 from "@/assets/gal-food-2.webp";
import architecture from "@/assets/gal-architecture.webp";
import architecture2 from "@/assets/gal-architecture-2.webp";
import landscape from "@/assets/gal-landscape.webp";
import landscape2 from "@/assets/gal-landscape-2.webp";
import taj from "@/assets/exp-taj-sunrise.webp";
import rickshaw from "@/assets/exp-rickshaw.webp";
import turban from "@/assets/exp-turban.webp";
import bonfire from "@/assets/exp-bonfire.webp";

export const galleryCategories = [
  "Heritage",
  "Culture",
  "People",
  "Food",
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
  {
    src: taj,
    alt: "The Taj Mahal at first light, marble shifting from grey to rose",
    category: "Architecture",
    orientation: "landscape",
  },
  {
    src: turban,
    alt: "A Rajasthani elder in a saffron turban, Jaipur",
    category: "People",
    orientation: "portrait",
  },
  {
    src: heritage,
    alt: "Humayun's Tomb, Delhi — Mughal symmetry at golden hour",
    category: "Heritage",
    orientation: "landscape",
  },
  {
    src: culture,
    alt: "Rajasthani folk dancers performing at a heritage haveli",
    category: "Culture",
    orientation: "portrait",
  },
  {
    src: food,
    alt: "A street vendor's chaat stall lit by lanterns in Old Delhi",
    category: "Food",
    orientation: "landscape",
  },
  {
    src: architecture2,
    alt: "Hawa Mahal's honeycomb facade catching the morning sun",
    category: "Architecture",
    orientation: "landscape",
  },
  {
    src: people,
    alt: "A flower seller arranging marigold garlands at a Delhi market",
    category: "People",
    orientation: "portrait",
  },
  {
    src: landscape,
    alt: "The Yamuna river at dusk, boats silhouetted against a copper sky",
    category: "Landscapes",
    orientation: "landscape",
  },
  {
    src: heritage2,
    alt: "Qutub Minar rising above ancient ruins in South Delhi",
    category: "Heritage",
    orientation: "portrait",
  },
  {
    src: rickshaw,
    alt: "Cycle rickshaws weaving through the lanes of Chandni Chowk",
    category: "Culture",
    orientation: "landscape",
  },
  {
    src: food2,
    alt: "Freshly made Indian breads and spiced curries at a local kitchen",
    category: "Food",
    orientation: "landscape",
  },
  {
    src: people2,
    alt: "A craftsman painting blue pottery in a Jaipur workshop",
    category: "People",
    orientation: "portrait",
  },
  {
    src: culture2,
    alt: "Bonfire and folk musicians under the Rajasthan night sky",
    category: "Culture",
    orientation: "landscape",
  },
  {
    src: heritage3,
    alt: "Amber Fort's mirrored Sheesh Mahal hall, Jaipur",
    category: "Heritage",
    orientation: "landscape",
  },
  {
    src: landscape2,
    alt: "Amber Fort reflected in Maota Lake at sunrise",
    category: "Landscapes",
    orientation: "landscape",
  },
  {
    src: architecture,
    alt: "The geometric stone steps of Chand Baori stepwell, Abhaneri",
    category: "Architecture",
    orientation: "portrait",
  },
  {
    src: culture3,
    alt: "A live tabla and sitar performance in an intimate Delhi venue",
    category: "Culture",
    orientation: "portrait",
  },
  {
    src: bonfire,
    alt: "Guests gathered around a desert bonfire in Rajasthan",
    category: "Landscapes",
    orientation: "landscape",
  },
];
