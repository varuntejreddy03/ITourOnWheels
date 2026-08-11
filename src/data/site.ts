/**
 * Brand + contact details. PLACEHOLDER VALUES — replace with the client's
 * real trading name, contact details and social handles.
 */
export const site = {
  name: "Safarnama",
  nameLine1: "Safar",
  nameLine2: "nama",
  tagline: "Journeys Through India",
  statement: "India, experienced differently.",
  email: "hello@example.com",
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