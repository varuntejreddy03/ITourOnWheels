import hero from "@/assets/featured-golden-triangle.jpg";
import taj from "@/assets/exp-taj-sunrise.jpg";
import rickshaw from "@/assets/exp-rickshaw.jpg";
import musicNight from "@/assets/exp-music-night.jpg";
import turban from "@/assets/exp-turban.jpg";
import bonfire from "@/assets/exp-bonfire.jpg";
import royal from "@/assets/exp-royal.jpg";
import delhi from "@/assets/dest-delhi.jpg";
import agra from "@/assets/dest-agra.jpg";
import jaipur from "@/assets/dest-jaipur.jpg";

export type ItineraryDay = {
  day: number;
  place: string;
  title: string;
  description: string;
  image?: string;
};

export type JourneyHighlight = {
  title: string;
  place: string;
  description: string;
  image: string;
};

export type Journey = {
  slug: string;
  status: "live" | "coming-soon";
  label: string;
  title: string;
  duration: string;
  route: string;
  regions: string[];
  summary: string;
  intro: string[];
  image?: string;
  facts: { label: string; value: string }[];
  cities: { name: string; note: string; image: string; text: string }[];
  itinerary: ItineraryDay[];
  highlights: JourneyHighlight[];
  inclusions: string[];
  notes: string[];
};

/**
 * All journeys render from this list. Add a new object to publish a journey;
 * `status: "coming-soon"` renders a placeholder card with no detail page.
 *
 * NOTE: itinerary copy below is editable placeholder structure based on the
 * 7 Days / 6 Nights Golden Triangle outline — replace with the client's final wording.
 */
export const journeys: Journey[] = [
  {
    slug: "luxury-golden-triangle",
    status: "live",
    label: "Featured Journey",
    title: "Luxury Golden Triangle",
    duration: "7 Days / 6 Nights",
    route: "Delhi → Agra → Jaipur",
    regions: ["Delhi", "Agra", "Jaipur"],
    summary:
      "Three cities, one unbroken story of empires, craft and everyday Indian life — travelled slowly, stayed comfortably, hosted personally.",
    intro: [
      "The Golden Triangle is India's most travelled route, and the easiest one to travel badly. This journey slows it down: sunrise before the crowds, afternoons in courtyards rather than coaches, evenings spent with musicians, cooks and craftspeople.",
      "Seven days between Delhi, Agra and Jaipur, in 4 and 5-star hotels, with private air-conditioned transport and a dedicated host traveling with you throughout.",
    ],
    image: hero,
    facts: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Route", value: "Delhi → Agra → Jaipur" },
      { label: "Hotels", value: "4 / 5-Star" },
      { label: "Transport", value: "Private luxury vehicle" },
      { label: "Host", value: "Dedicated tour host" },
      { label: "Style", value: "Cultural & heritage" },
    ],
    cities: [
      {
        name: "Delhi",
        note: "History · Culture · Old Delhi",
        image: delhi,
        text: "Begin where India's capitals have risen and fallen for a thousand years — from Mughal Old Delhi to the wide colonial avenues of New Delhi.",
      },
      {
        name: "Agra",
        note: "Taj Mahal · Heritage · Mughal Architecture",
        image: agra,
        text: "Marble, inlay and imperial ambition. Agra is seen at first light, when the Taj Mahal belongs almost entirely to you.",
      },
      {
        name: "Jaipur",
        note: "Royalty · Forts · Rajasthani Culture",
        image: jaipur,
        text: "The pink city of Rajasthan: hill forts, mirrored palaces, block printers, puppeteers and folk musicians still working today.",
      },
    ],
    itinerary: [
      {
        day: 1,
        place: "Delhi",
        title: "Arrival & Welcome",
        description:
          "Met on arrival in Delhi and transferred to your hotel. The rest of the day is left open to rest, followed by a relaxed welcome dinner with your host and an outline of the days ahead.",
        image: delhi,
      },
      {
        day: 2,
        place: "Delhi",
        title: "Old & New Delhi",
        description:
          "A full day across both Delhis — Mughal monuments and mosques, the lanes and spice markets of the old city explored by cycle rickshaw, and the ceremonial avenues of New Delhi in the late afternoon light.",
        image: rickshaw,
      },
      {
        day: 3,
        place: "Delhi → Agra",
        title: "The Road To Agra",
        description:
          "Drive to Agra by expressway. Afternoon at Agra Fort, the red sandstone seat of Mughal power, with its distant view of the Taj across the Yamuna. Evening at leisure.",
        image: agra,
      },
      {
        day: 4,
        place: "Agra → Jaipur",
        title: "Taj Mahal At Sunrise",
        description:
          "An early start for the Taj Mahal as it opens, when the marble shifts from grey to rose. Later, the drive to Jaipur with a stop at the abandoned city of Fatehpur Sikri.",
        image: taj,
      },
      {
        day: 5,
        place: "Jaipur",
        title: "Forts & The Pink City",
        description:
          "Amber Fort in the morning, then the City Palace, the observatory of Jantar Mantar and Hawa Mahal. Late afternoon in the bazaars with time for craft workshops.",
        image: jaipur,
      },
      {
        day: 6,
        place: "Jaipur",
        title: "Culture & Celebration",
        description:
          "A slower day in Jaipur — turban tying, local crafts and a Rajasthani cultural evening with folk music, dance and dinner around a bonfire.",
        image: bonfire,
      },
      {
        day: 7,
        place: "Jaipur → Departure",
        title: "Farewell",
        description:
          "A final Indian breakfast before your transfer to the airport or onward journey, with the option to extend into Rajasthan or beyond.",
        image: royal,
      },
    ],
    highlights: [
      {
        title: "Taj Mahal At Sunrise",
        place: "Agra",
        description:
          "Entering as the gates open, before the heat and the crowds, when the marble changes color minute by minute.",
        image: taj,
      },
      {
        title: "Bollywood Music Night",
        place: "Delhi",
        description:
          "An evening of live Indian music — film classics and folk — performed close enough to feel the tabla.",
        image: musicNight,
      },
      {
        title: "Old Delhi Rickshaw Ride",
        place: "Delhi",
        description:
          "Through Chandni Chowk by cycle rickshaw, at the speed and eye level of the old city itself.",
        image: rickshaw,
      },
      {
        title: "Rajasthani Turban Experience",
        place: "Jaipur",
        description:
          "Thirty feet of cotton, tied the traditional way, with the meaning behind every color and fold.",
        image: turban,
      },
      {
        title: "Bonfire Night",
        place: "Jaipur",
        description:
          "Dinner outdoors around a fire under the Rajasthan sky, with folk musicians and unhurried conversation.",
        image: bonfire,
      },
      {
        title: "Royal Cultural Evening",
        place: "Jaipur",
        description:
          "Music, dance and Rajasthani hospitality in a heritage setting built for exactly this.",
        image: royal,
      },
    ],
    inclusions: [
      "6 nights in 4 / 5-star hotels",
      "Daily breakfast",
      "Private air-conditioned vehicle throughout",
      "Dedicated tour host for the full journey",
      "All airport and hotel transfers",
      "Monument and heritage site visits as per itinerary",
      "Cultural experiences listed in the itinerary",
      "All applicable taxes and driver charges",
    ],
    notes: [
      "Flights, visas and travel insurance are not included.",
      "Hotels are confirmed at the time of booking and shared before departure.",
      "The itinerary can be shortened, extended or re-paced on request.",
    ],
  },
  {
    slug: "rajasthan-in-preparation",
    status: "coming-soon",
    label: "In Preparation",
    title: "Rajasthan, Extended",
    duration: "Dates to be announced",
    route: "Route being finalised",
    regions: ["Rajasthan"],
    summary:
      "A longer Rajasthan journey is being planned. Details will be published once hotels and hosts are confirmed.",
    intro: [],
    facts: [],
    cities: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    notes: [],
  },
  {
    slug: "south-india-in-preparation",
    status: "coming-soon",
    label: "In Preparation",
    title: "South India, Slowly",
    duration: "Dates to be announced",
    route: "Route being finalised",
    regions: ["South India"],
    summary:
      "A southern journey through temple towns, backwaters and coastal kitchens is in development.",
    intro: [],
    facts: [],
    cities: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    notes: [],
  },
];

export const featuredJourney = journeys[0]!;

export const getJourney = (slug: string) => journeys.find((j) => j.slug === slug);