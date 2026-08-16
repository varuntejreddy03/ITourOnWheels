export const site = {
  name: "I Tour On Wheels",
  nameLine1: "I Tour",
  nameLine2: "On Wheels",
  legal: "I Tour On Wheels — Travel Agency",
  tagline: "We Plan. You Pack. We Host.",
  founded: "2018",
  rating: "100+ Five-Star Google Reviews",
  statement: "One journey. Three iconic cities. Memories for life.",
  email: "info@themarkettitans.com",
  phone: "+1 (267) 298-7777",
  whatsapp: "https://wa.me/12672987777",
  location: "2150 Infinity Drive, Midlothian, VA 23114",
  hours: {
    weekdays: "Monday – Saturday: 9 am to 5 pm",
    weekend: "Sunday: 11 am to 4 pm",
  },
  socials: [
    { label: "Instagram", href: "https://www.instagram.com/indiatouronwheels" },
    { label: "LinkedIn", href: "https://www.linkedin.com/company/indiatouronwheels/" },
    { label: "WhatsApp", href: "https://wa.me/12672987777" },
  ],
} as const;

export const globalOffices = [
  { flag: "🇺🇸", region: "US & Canada", phone: "+1 (267) 298-7777", href: "tel:+12672987777" },
  { flag: "🇬🇧", region: "Potters Bar, Hertfordshire, England", phone: "+44 7587 910957", href: "tel:+447587910957" },
  { flag: "🇩🇪", region: "Lichtenberg, Berlin, Germany", phone: "+49 176 58698118", href: "tel:+4917658698118" },
  { flag: "🇦🇺", region: "Wyndham, Melbourne, Australia", phone: "+61 469 342953", href: "tel:+61469342953" },
] as const;

export const nav = [
  { label: "Destinations", to: "/destinations" },
  { label: "Journeys", to: "/journeys" },
  { label: "Travel Styles", to: "/experiences" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;
