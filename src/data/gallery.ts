import heritage from "@/assets/gal-heritage.jpg";
import culture from "@/assets/gal-culture.jpg";
import people from "@/assets/gal-people.jpg";
import food from "@/assets/gal-food.jpg";
import architecture from "@/assets/gal-architecture.jpg";
import landscape from "@/assets/gal-landscape.jpg";
import taj from "@/assets/exp-taj-sunrise.jpg";
import rickshaw from "@/assets/exp-rickshaw.jpg";
import turban from "@/assets/exp-turban.jpg";

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
    src: heritage,
    alt: "Mughal garden tomb in Delhi at golden hour",
    category: "Heritage",
    orientation: "landscape",
  },
  {
    src: turban,
    alt: "A Rajasthani man tying a traditional turban",
    category: "People",
    orientation: "portrait",
  },
  {
    src: taj,
    alt: "The Taj Mahal reflected in still water at first light",
    category: "Architecture",
    orientation: "landscape",
  },
  {
    src: culture,
    alt: "Rajasthani folk musicians playing in a courtyard",
    category: "Culture",
    orientation: "portrait",
  },
  {
    src: food,
    alt: "Indian street food cooked at a night stall",
    category: "Food",
    orientation: "landscape",
  },
  {
    src: people,
    alt: "A market vendor arranging marigold garlands",
    category: "People",
    orientation: "portrait",
  },
  {
    src: landscape,
    alt: "Boats on the Yamuna river at dusk near Agra",
    category: "Landscapes",
    orientation: "landscape",
  },
  {
    src: architecture,
    alt: "Geometric stone steps of an ancient Indian stepwell",
    category: "Architecture",
    orientation: "portrait",
  },
  {
    src: rickshaw,
    alt: "A cycle rickshaw ride through the lanes of Old Delhi",
    category: "Culture",
    orientation: "landscape",
  },
];