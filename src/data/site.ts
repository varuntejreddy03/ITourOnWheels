/**
 * Brand + contact details. Social links are still placeholders — replace with
 * the client's real profile URLs once they exist.
 */
export const site = {
  name: "India Tour On Wheels",
  nameLine1: "India Tour",
  nameLine2: "On Wheels",
  legal: "India Tour On Wheels — Travel Agency",
  tagline: "Private, Hosted Journeys Across India",
  statement: "Fewer stops. Longer stays. All of it done properly.",
  email: "hello@itouronwheels.com",
  phone: "+1 (267) 298-7777",
  location: "2150 Infinity Drive, Midlothian, VA 23114",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Pinterest", href: "#" },
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