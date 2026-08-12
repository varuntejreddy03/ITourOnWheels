import delhi from "@/assets/dest-delhi-monument.webp";
import agra from "@/assets/dest-agra-dining.webp";
import jaipur from "@/assets/dest-jaipur-palace.webp";
import rishikesh from "@/assets/dest-rishikesh-river.webp";
import delhiWide from "@/assets/dest-delhi.webp";
import agraWide from "@/assets/dest-agra.webp";
import jaipurWide from "@/assets/dest-jaipur.webp";
import rishikeshWide from "@/assets/dest-rishikesh.webp";

export type DestinationHighlight = {
  title: string;
  description: string;
};

export type Destination = {
  slug: string;
  name: string;
  region: string;
  themes: string[];
  tagline: string;
  intro: string;
  image: string;
  imageTall: string;
  status: "live" | "coming-soon";
  /** True for destinations that are only offered as an add-on to an existing journey, not a standalone trip. */
  extensionOnly?: boolean;
  history: string;
  bestFor: string;
  bestTime: string;
  highlights: DestinationHighlight[];
  mustSee: { name: string; description: string }[];
};

export const destinations: Destination[] = [
  {
    slug: "agra",
    name: "Agra",
    region: "North India",
    themes: ["Taj Mahal", "Mughal Empire", "Heritage"],
    tagline: "Where marble meets memory.",
    intro: "A city shaped by one of the greatest love stories in history — and the monument built to prove it.",
    image: agra,
    imageTall: agraWide,
    status: "live",
    history:
      "Agra rose to prominence under the Mughal Emperor Akbar in the 16th century, who made it the capital of his empire. It was here that three of the greatest Mughal emperors — Akbar, Jahangir and Shah Jahan — built the monuments that still define the city. Shah Jahan's Taj Mahal, completed in 1653 as a mausoleum for his wife Mumtaz Mahal, is considered the finest example of Mughal architecture in the world. The city's red sandstone fort, begun by Akbar and expanded by his successors, held the Mughal court for over a century. Agra's decline began when Aurangzeb moved the capital to Delhi, but the monuments remained — and they remain today among the most visited and most photographed places on earth.",
    bestFor: "First-time visitors to India, history lovers, photographers, anyone who wants to understand the Mughal Empire at its peak.",
    bestTime: "October to March. The Taj Mahal at sunrise in winter light is one of the great travel experiences.",
    highlights: [
      { title: "Taj Mahal at Sunrise", description: "Enter as the gates open, before the heat and the crowds. The marble shifts from grey to rose gold in the first hour of light — no photograph prepares you for the scale of it." },
      { title: "Agra Fort", description: "The red sandstone seat of Mughal power, with marble pavilions, audience halls and a distant view of the Taj across the Yamuna. Most visitors spend an hour here. It deserves three." },
      { title: "Fatehpur Sikri", description: "The abandoned Mughal capital 40km from Agra — built by Akbar, occupied for 14 years, then left entirely. One of the best-preserved Mughal complexes in India and almost always quiet." },
      { title: "Mehtab Bagh", description: "The moonlight garden directly across the Yamuna from the Taj — the best view of the monument, almost no tourists, and the place Shah Jahan planned to build his own black marble tomb." },
    ],
    mustSee: [
      { name: "Taj Mahal", description: "The world's most recognised building. Go at opening time." },
      { name: "Agra Fort", description: "A UNESCO World Heritage Site and the seat of three Mughal emperors." },
      { name: "Fatehpur Sikri", description: "Akbar's abandoned capital — perfectly preserved, rarely crowded." },
      { name: "Itmad-ud-Daulah", description: "The 'Baby Taj' — a smaller, earlier Mughal mausoleum of extraordinary delicacy." },
      { name: "Mehtab Bagh", description: "The garden across the river with the finest view of the Taj." },
    ],
  },
  {
    slug: "delhi",
    name: "Delhi",
    region: "North India",
    themes: ["History", "Culture", "Old Delhi"],
    tagline: "Eight cities in one. All of them still alive.",
    intro: "Layered, loud and endlessly alive — imperial avenues, Mughal mosques and the narrow lanes of the old city in one place.",
    image: delhi,
    imageTall: delhiWide,
    status: "live",
    history:
      "Delhi has been the capital of at least eight successive empires over three thousand years. The city's oldest surviving monuments date to the 12th century — the Qutub Minar, built by the first Sultan of Delhi, still stands in the city's south. The Mughals arrived in the 16th century and built Purana Qila, Humayun's Tomb and, under Shah Jahan, the walled city of Shahjahanabad — what we now call Old Delhi — with its great mosque, the Jama Masjid, and the Red Fort at its centre. The British arrived in the 18th century, eventually moving their capital from Calcutta to Delhi in 1911 and building New Delhi — the wide ceremonial avenues, the Rashtrapati Bhavan and India Gate — to a design by Edwin Lutyens. India's independence in 1947 made Delhi the capital of the world's largest democracy. Today it holds all of these histories simultaneously, often within walking distance of each other.",
    bestFor: "History, food, culture, shopping, and understanding modern India. The best starting point for any journey across North India.",
    bestTime: "October to March. Delhi summers are extreme — 45°C is not unusual in May and June.",
    highlights: [
      { title: "Old Delhi by Cycle Rickshaw", description: "The lanes of Chandni Chowk, the spice market of Khari Baoli, the silver shops of Dariba Kalan — all best seen at street level and human speed, by cycle rickshaw, the way the old city was built to be navigated." },
      { title: "Humayun's Tomb", description: "The first great Mughal garden tomb in India, built in 1570 and the direct architectural predecessor of the Taj Mahal. Quieter, more intimate, and in many ways more moving." },
      { title: "Qutub Minar", description: "The 73-metre minaret built in 1193 — the oldest surviving monument of the Delhi Sultanate, surrounded by ruins that span a thousand years of Indian history." },
      { title: "Lodi Garden", description: "15th-century tombs set in a public park in the heart of South Delhi. One of the most peaceful places in the city, and almost entirely unknown to foreign visitors." },
    ],
    mustSee: [
      { name: "Jama Masjid", description: "India's largest mosque, built by Shah Jahan in 1656. Climb the minaret for the best view of Old Delhi." },
      { name: "Red Fort", description: "The Mughal imperial palace, built by Shah Jahan as the centrepiece of his new capital." },
      { name: "Humayun's Tomb", description: "The UNESCO-listed Mughal garden tomb that inspired the Taj Mahal." },
      { name: "Qutub Minar", description: "The 12th-century minaret and the oldest Islamic monument in India." },
      { name: "India Gate", description: "The war memorial at the heart of Lutyens' New Delhi — best seen at dusk." },
    ],
  },
  {
    slug: "jaipur",
    name: "Jaipur",
    region: "West India",
    themes: ["Heritage", "Forts", "Rajasthani Culture"],
    tagline: "The Pink City. Every shade of it.",
    intro: "Pink sandstone city of courtyards, forts and craft traditions carried through generations of Rajasthani artisans.",
    image: jaipur,
    imageTall: jaipurWide,
    status: "live",
    history:
      "Jaipur was founded in 1727 by Maharaja Jai Singh II — one of the few planned cities in pre-colonial India, laid out on a grid according to the principles of Vastu Shastra, the ancient Hindu system of architecture. Jai Singh was an astronomer as well as a ruler; he built five observatories across India, the largest of which — Jantar Mantar — still stands in the centre of Jaipur. The city's famous pink colour dates to 1876, when the entire old city was painted terracotta pink to welcome the Prince of Wales. The colour stuck, and the law requiring it to be maintained still stands today. Jaipur's Amber Fort, built by the Kachhwaha Rajputs in the 16th century, is one of the finest examples of Rajput military architecture in India. The city remained a princely state under British rule and retained its royal character long after independence — the Maharaja's City Palace is still partially occupied by the royal family.",
    bestFor: "Architecture, craft, shopping, Rajasthani culture and food. The best base for exploring Rajasthan.",
    bestTime: "October to March. The Jaipur Literature Festival in January is one of the world's great literary events.",
    highlights: [
      { title: "Amber Fort at Sunrise", description: "The hillside fort seen from the road below at first light, reflected in Maota Lake — one of the great views in Rajasthan. Inside: mirrored halls, elephant stables and a thousand years of Rajput history." },
      { title: "Hawa Mahal", description: "The Palace of Winds — 953 small windows built so the women of the royal court could watch street processions without being seen. The facade is one of the most photographed in India." },
      { title: "Jantar Mantar", description: "Jai Singh's 18th-century astronomical observatory — a collection of enormous stone instruments that could measure time to within two seconds. A UNESCO World Heritage Site and one of the most unusual places in India." },
      { title: "Block Printing & Blue Pottery", description: "Jaipur's craft traditions are still alive in family workshops across the old city. Block printing, blue pottery, gem cutting, miniature painting — all can be seen being made, not just sold." },
    ],
    mustSee: [
      { name: "Amber Fort", description: "The 16th-century Rajput hill fort — the finest in Rajasthan." },
      { name: "City Palace", description: "The royal palace complex, still partially occupied by the Jaipur royal family." },
      { name: "Hawa Mahal", description: "The iconic five-storey facade of 953 latticed windows." },
      { name: "Jantar Mantar", description: "The UNESCO-listed astronomical observatory built in 1734." },
      { name: "Nahargarh Fort", description: "The hilltop fort above the city — the best sunset view in Jaipur." },
    ],
  },
  {
    slug: "rishikesh",
    name: "Rishikesh",
    region: "North India",
    themes: ["Spiritual", "Yoga", "Himalayas"],
    tagline: "Yoga's original address.",
    intro: "The yoga capital of the world — a small Himalayan town on the Ganges, still more ashram than resort.",
    image: rishikesh,
    imageTall: rishikeshWide,
    status: "live",
    extensionOnly: true,
    history:
      "Rishikesh sits at the point where the Ganges emerges from the Himalayan foothills onto the plains of North India — a transition that has made it sacred for thousands of years. The town is mentioned in the ancient Hindu texts as a place of meditation and spiritual practice; sages and ascetics have been coming here since at least the 9th century. The Beatles' visit in 1968 to study Transcendental Meditation with Maharishi Mahesh Yogi brought Rishikesh to the attention of the Western world, and it has been a destination for spiritual seekers from across the globe ever since. Today it is home to hundreds of ashrams, yoga schools and meditation centres, ranging from ancient institutions to modern wellness retreats. The town is divided by the Ganges, with the two halves connected by two famous suspension footbridges — Ram Jhula and Lakshman Jhula. It is a place of genuine spiritual practice, not performance — the evening Ganga Aarti ceremony on the ghats has been performed every single day for centuries.",
    bestFor: "Yoga, meditation, spiritual experience, Himalayan trekking, white-water rafting on the Ganges, and anyone who wants to understand the spiritual heart of India.",
    bestTime: "September to November and February to April. The monsoon (July–August) brings heavy rain but the river is spectacular.",
    highlights: [
      { title: "Ganga Aarti at Triveni Ghat", description: "Every evening at sunset, priests perform the ancient fire ceremony on the banks of the Ganges — brass lamps, Sanskrit chants, marigolds on the water. One of the most genuinely moving experiences in India." },
      { title: "Yoga at Dawn", description: "Rishikesh has been teaching yoga for centuries. A morning practice on the banks of the Ganges, with the Himalayas visible upstream, is unlike any yoga class anywhere else in the world." },
      { title: "Lakshman Jhula", description: "The iron suspension bridge across the Ganges, built in 1929 on the site of a rope bridge used by the sage Lakshman. The view upstream towards the mountains from the bridge is one of the defining images of Rishikesh." },
      { title: "Beatles Ashram", description: "The abandoned ashram where John, Paul, George and Ringo spent six weeks in 1968 — now open as a heritage site, its walls covered in murals, the meditation domes slowly being reclaimed by the forest." },
    ],
    mustSee: [
      { name: "Triveni Ghat", description: "The main bathing ghat and the site of the nightly Ganga Aarti ceremony." },
      { name: "Lakshman Jhula", description: "The iconic suspension bridge and the neighbourhood around it." },
      { name: "Beatles Ashram", description: "Maharishi Mahesh Yogi's ashram, now a heritage site open to visitors." },
      { name: "Neelkanth Mahadev Temple", description: "The Shiva temple 32km into the hills — a significant pilgrimage site and a beautiful drive." },
      { name: "Rajaji National Park", description: "The tiger and elephant reserve at the edge of town — jeep safaris available from Rishikesh." },
    ],
  },
];

export const getDestination = (slug: string) => destinations.find((d) => d.slug === slug);
