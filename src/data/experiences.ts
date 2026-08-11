import heritage from "@/assets/exp-heritage.jpg";
import culinary from "@/assets/exp-culinary.jpg";
import culture from "@/assets/exp-culture.jpg";
import royal from "@/assets/exp-royal.jpg";
import nature from "@/assets/exp-nature.jpg";

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
    description: "Explore India's monuments, forts and historic streets.",
    image: heritage,
  },
  {
    slug: "culinary-journeys",
    title: "Culinary Journeys",
    description: "Discover authentic Indian food and local flavours.",
    image: culinary,
  },
  {
    slug: "culture-traditions",
    title: "Culture & Traditions",
    description: "Experience music, dance, crafts and living traditions.",
    image: culture,
  },
  {
    slug: "royal-experiences",
    title: "Royal Experiences",
    description: "Step into India's palaces, forts and royal heritage.",
    image: royal,
  },
  {
    slug: "nature-adventure",
    title: "Nature & Adventure",
    description: "Discover landscapes beyond India's famous cities.",
    image: nature,
  },
];