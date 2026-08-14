export const site = {
  name: "I Tour On Wheels",
  nameLine1: "I Tour",
  nameLine2: "On Wheels",
  legal: "I Tour On Wheels — Travel Agency",
  tagline: "We Plan. You Pack. We Host.",
  founded: "2018",
  rating: "100+ Five-Star Google Reviews",
  statement: "One journey. Three iconic cities. Memories for life.",
  email: "hello@itouronwheels.com",
  phone: "+1 (267) 298-7777",
  location: "2150 Infinity Drive, Midlothian, VA 23114",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/i-tour-on-wheels" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export const nav = [
  { label: "Destinations", to: "/destinations" },
  { label: "Journeys", to: "/journeys" },
  { label: "Travel Styles", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
