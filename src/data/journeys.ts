import hero from "@/assets/featured-golden-triangle.webp";
import taj from "@/assets/exp-taj-sunrise.webp";
import rickshaw from "@/assets/exp-rickshaw.webp";
import musicNight from "@/assets/exp-music-night.webp";
import turban from "@/assets/exp-turban.webp";
import bonfire from "@/assets/exp-bonfire.webp";
import royal from "@/assets/exp-royal.webp";
import delhi from "@/assets/dest-delhi.webp";
import agra from "@/assets/dest-agra.webp";
import jaipur from "@/assets/dest-jaipur.webp";
import dayDelhi from "@/assets/day-delhi-arrival.webp";
import dayOldDelhi from "@/assets/day-old-delhi.webp";
import dayAgraFort from "@/assets/day-agra-fort.webp";
import dayTajMorning from "@/assets/day-taj-morning.webp";
import dayJaipurAmber from "@/assets/day-jaipur-amber.webp";
import dayJaipurCulture from "@/assets/day-jaipur-culture.webp";
import dayFarewell from "@/assets/day-farewell.webp";

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

export const journeys: Journey[] = [
  {
    slug: "luxury-golden-triangle",
    status: "live",
    label: "Our First Journey",
    title: "Luxury Golden Triangle",
    duration: "7 Days / 6 Nights",
    route: "Delhi → Agra → Jaipur",
    regions: ["Delhi", "Agra", "Jaipur"],
    summary:
      "India's most iconic route, travelled the way it deserves — private transport, handpicked hotels, a dedicated host, and time to actually feel each city.",
    intro: [
      "Most Golden Triangle tours rush you through three cities in a minibus with thirty strangers. This one doesn't. We slow the pace, cut the crowds, and replace the coach stops with the kind of access that takes years to arrange — a textile workshop in Old Delhi, the Taj Mahal before the gates open to the public, a private dinner in a Jaipur haveli.",
      "Seven days, three cities, one dedicated host who travels with you from your first transfer to your last. Every hotel is chosen for character and location, every experience is confirmed before you arrive. This is where ITouronwheels begins — and it is the journey we are most proud of.",
    ],
    image: hero,
    facts: [
      { label: "Duration", value: "7 Days / 6 Nights" },
      { label: "Route", value: "Delhi → Agra → Jaipur" },
      { label: "Hotels", value: "4-Star & 5-Star" },
      { label: "Transport", value: "Private Luxury Mini Bus" },
      { label: "Group Size", value: "Max 20 per departure" },
      { label: "Host", value: "Dedicated 24/7" },
      { label: "Flights", value: "Included" },
      { label: "Without Flights", value: "$4,999 per person" },
      { label: "With Flights", value: "$5,999 per person" },
    ],
    cities: [
      {
        name: "Delhi",
        note: "Old City · Mughal History · Modern India",
        image: delhi,
        text: "Two cities in one — the narrow spice lanes and Mughal mosques of Old Delhi, and the wide ceremonial avenues of New Delhi built by the British. Most visitors see one. We show you both, at the right pace.",
      },
      {
        name: "Agra",
        note: "Taj Mahal · Agra Fort · Mughal Empire",
        image: agra,
        text: "The Taj Mahal is one of the few places on earth that exceeds its reputation. We get you there at first light, before the crowds, when the marble shifts from grey to rose gold and the gardens are almost silent.",
      },
      {
        name: "Jaipur",
        note: "Amber Fort · Royal Palaces · Rajasthani Craft",
        image: jaipur,
        text: "The Pink City of Rajasthan — hill forts, mirrored palace rooms, block printers, gem cutters and folk musicians who have been performing the same songs for generations. Jaipur rewards those who stay long enough to find it.",
      },
    ],
    itinerary: [
      {
        day: 1,
        place: "Delhi",
        title: "Arrival in Delhi",
        description:
          "Your host meets you at the airport and transfers you to your hotel in central Delhi. The afternoon is yours — rest, explore the neighbourhood, or take a slow walk through Lodi Garden. In the evening, a welcome dinner with your host to walk through the days ahead over good food.",
        image: dayDelhi,
      },
      {
        day: 2,
        place: "Delhi",
        title: "Old Delhi & New Delhi",
        description:
          "A full day across both Delhis. Morning in the old city — Jama Masjid, the spice market of Khari Baoli, and the lanes of Chandni Chowk by cycle rickshaw at the pace the city was built for. Afternoon in New Delhi: Humayun's Tomb, the India Gate boulevard, and Qutub Minar in the late light.",
        image: dayOldDelhi,
      },
      {
        day: 3,
        place: "Delhi → Agra",
        title: "Drive to Agra",
        description:
          "An early start on the Yamuna Expressway to Agra. Afternoon at Agra Fort — the red sandstone seat of Mughal power, with its marble pavilions and a distant view of the Taj across the river. Evening at leisure in Agra; dinner at a rooftop restaurant with the Taj lit up after dark.",
        image: dayAgraFort,
      },
      {
        day: 4,
        place: "Agra → Jaipur",
        title: "Taj Mahal at Sunrise",
        description:
          "Up before dawn for the Taj Mahal as the gates open. An hour inside before the tour groups arrive — the marble, the inlay work, the scale of it. Late morning, the drive to Jaipur via Fatehpur Sikri, the abandoned Mughal capital that most visitors skip entirely.",
        image: dayTajMorning,
      },
      {
        day: 5,
        place: "Jaipur",
        title: "Forts, Palaces & the Pink City",
        description:
          "Amber Fort at sunrise from the hillside, then the City Palace, Jantar Mantar observatory and Hawa Mahal. Afternoon free for the bazaars — textiles, blue pottery, gems — with your host on hand to navigate and translate.",
        image: dayJaipurAmber,
      },
      {
        day: 6,
        place: "Jaipur",
        title: "Craft, Culture & an Evening to Remember",
        description:
          "A slower day. Morning with a block printer or a turban-tying demonstration in a family workshop. Afternoon at leisure. Evening: a Rajasthani cultural dinner — folk music, Kalbelia dance and a bonfire under the open sky, in a setting that has been doing this for centuries.",
        image: dayJaipurCulture,
      },
      {
        day: 7,
        place: "Jaipur → Departure",
        title: "Farewell",
        description:
          "A final Indian breakfast before your transfer to Jaipur airport or onward by train to Delhi. Your host stays with you until you are on your way. Extensions into Rajasthan — Jodhpur, Udaipur, Jaisalmer — can be arranged on request.",
        image: dayFarewell,
      },
    ],
    highlights: [
      {
        title: "Taj Mahal at First Light",
        place: "Agra",
        description:
          "We enter as the gates open, before the heat and the tour groups arrive. The marble changes color every few minutes — grey, then pink, then white gold. There is nothing else quite like it.",
        image: taj,
      },
      {
        title: "Old Delhi by Cycle Rickshaw",
        place: "Delhi",
        description:
          "Through Chandni Chowk at street level and human speed — past spice warehouses, silver shops, street food stalls and mosques that have been here since the 17th century.",
        image: rickshaw,
      },
      {
        title: "Live Indian Music Evening",
        place: "Delhi",
        description:
          "An intimate evening of live Indian classical and folk music — tabla, sitar, vocals — performed close enough to feel the resonance. The kind of evening you cannot book through a hotel concierge.",
        image: musicNight,
      },
      {
        title: "Rajasthani Turban Ceremony",
        place: "Jaipur",
        description:
          "Thirty feet of cotton, tied the traditional way by a master who has been doing it his whole life. Every color carries meaning. Every fold has a name. You leave wearing yours.",
        image: turban,
      },
      {
        title: "Bonfire Dinner Under the Stars",
        place: "Jaipur",
        description:
          "Dinner outdoors in a heritage courtyard, around a fire, with folk musicians and dancers performing the songs of Rajasthan. The kind of evening that becomes the story you tell when you get home.",
        image: bonfire,
      },
      {
        title: "Royal Cultural Evening",
        place: "Jaipur",
        description:
          "A private cultural performance in a heritage setting — Kalbelia dance, puppet theatre and Rajasthani hospitality in a space built for exactly this kind of evening.",
        image: royal,
      },
    ],
    inclusions: [
      "6 nights in handpicked 4-star and 5-star hotels",
      "Daily breakfast at your hotel",
      "Private air-conditioned vehicle for all transfers and sightseeing",
      "One dedicated host traveling with you for the full 7 days",
      "All airport, hotel and station transfers",
      "All monument and heritage site entry fees per itinerary",
      "All cultural experiences listed in the itinerary",
      "All applicable taxes, tolls and driver charges",
    ],
    notes: [
      "Without Flights: $4,999 per person. With Flights: $5,999 per person.",
      "Reserve your spot with a $1,999 deposit.",
      "Group departures: November 2026 · December 2026 · January 2027 · February 2027. Max 20 seats per group.",
      "Indian visa fees and travel insurance are not included.",
      "Hotels confirmed at booking. Full details shared before departure.",
    ],
  },
  {
    slug: "rajasthan-extended",
    status: "coming-soon",
    label: "Coming Soon",
    title: "Rajasthan, Extended",
    duration: "Being organised",
    route: "Jaipur → Jodhpur → Udaipur → Jaisalmer",
    regions: ["Rajasthan"],
    summary:
      "A deeper journey through Rajasthan — the Blue City, the Lake City and the desert fort of Jaisalmer. Being organised now; details published once every stay is confirmed.",
    intro: [],
    facts: [],
    cities: [],
    itinerary: [],
    highlights: [],
    inclusions: [],
    notes: [],
  },
  {
    slug: "north-india-himalaya",
    status: "coming-soon",
    label: "Coming Soon",
    title: "North India & the Himalaya",
    duration: "Being organised",
    route: "Delhi → Rishikesh → Shimla → Dharamshala",
    regions: ["North India"],
    summary:
      "From the Ganges ghats of Rishikesh to the colonial hill stations and Himalayan foothills of Himachal Pradesh. Being organised now; details published once every stay is confirmed.",
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
