import heritage from "@/assets/exp-heritage.webp";
import culinary from "@/assets/exp-culinary.webp";
import culture from "@/assets/exp-culture.webp";
import royal from "@/assets/exp-royal.webp";
import nature from "@/assets/exp-nature.webp";

export type ExperienceCategory = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

/** Travel styles / tour categories. Extend freely. */
export const experienceCategories: ExperienceCategory[] = [
  {
    slug: "heritage-history",
    title: "Heritage & History",
    description: "Forts that held off empires, tombs older than most nations, streets where the 17th century never quite left.",
    image: heritage,
  },
  {
    slug: "culinary-journeys",
    title: "Culinary Journeys",
    description: "Meals cooked the way families actually cook them — not the menu written for tourists.",
    image: culinary,
  },
  {
    slug: "culture-traditions",
    title: "Culture & Traditions",
    description: "Craftsmen, musicians and dancers keeping traditions alive that time has mostly forgotten elsewhere.",
    image: culture,
  },
  {
    slug: "royal-experiences",
    title: "Royal Experiences",
    description: "Palaces some royal families still call home — and the kind of evenings once reserved for maharajas.",
    image: royal,
  },
  {
    slug: "nature-adventure",
    title: "Nature & Adventure",
    description: "The Himalayan foothills, the Ganges at dawn, and the India that has nothing to do with monuments.",
    image: nature,
  },
];