/**
 * Brand + contact details. Contact values are still placeholders — replace the
 * email, phone and social links with the client's real details.
 */
export const site = {
  name: "India Tour On Wheels",
  nameLine1: "India Tour",
  nameLine2: "On Wheels",
  legal: "India Tour On Wheels — Travel Agency",
  tagline: "Explore Incredible India With Us",
  statement: "Explore incredible India with us.",
  email: "hello@indiatouronwheels.com",
  phone: "+91 00000 00000",
  location: "New Delhi, India",
  socials: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "Pinterest", href: "#" },
    { label: "YouTube", href: "#" },
  ],
} as const;

export const nav = [
  { label: "Destinations", to: "/destinations" },
  { label: "Experiences", to: "/experiences" },
  { label: "Journeys", to: "/journeys" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;