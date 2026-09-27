/**
 * Hyperlocal amenities — The Lakes Las Vegas
 * Map center matches {@link theLakesGeo} (approximate community centroid).
 * HOA office reference: 2902 Lake East Dr, Las Vegas, NV 89117 (Prime / Lakes HOA).
 */

import { agentInfo } from "@/lib/site-config";
import { theLakesGeo, theLakesPrimaryKeyword } from "@/lib/the-lakes-aeo";

export const communityMapCenter = {
  name: theLakesGeo.name,
  nameWithCity: theLakesGeo.nameWithCity,
  latitude: theLakesGeo.latitude,
  longitude: theLakesGeo.longitude,
  /** Documented HOA / management office (not necessarily map centroid) */
  hoaOfficeAddress: "2902 Lake East Dr, Las Vegas, NV 89117",
  searchRadiusMeters: 8000,
} as const;

export type AmenityCategoryId =
  | "parks"
  | "restaurants"
  | "grocery"
  | "golf"
  | "healthcare"
  | "shopping"
  | "fitness"
  | "cafes"
  | "pharmacies"
  | "schools"
  | "parking";

export type AmenityCategory = {
  id: AmenityCategoryId;
  label: string;
  /** Places API (New) primary types — one searchNearby per category */
  primaryTypes: string[];
};

/** Master-planned west Las Vegas — parks, daily errands, healthcare, schools */
export const amenityCategories: AmenityCategory[] = [
  {
    id: "parks",
    label: "Parks",
    primaryTypes: ["park"],
  },
  {
    id: "restaurants",
    label: "Restaurants",
    primaryTypes: ["restaurant"],
  },
  {
    id: "grocery",
    label: "Grocery",
    primaryTypes: ["grocery_store", "supermarket"],
  },
  {
    id: "golf",
    label: "Golf",
    primaryTypes: ["golf_course"],
  },
  {
    id: "healthcare",
    label: "Healthcare",
    primaryTypes: ["hospital", "doctor"],
  },
  {
    id: "shopping",
    label: "Shopping",
    primaryTypes: ["shopping_mall", "department_store"],
  },
  {
    id: "fitness",
    label: "Fitness",
    primaryTypes: ["gym"],
  },
  {
    id: "cafes",
    label: "Cafes",
    primaryTypes: ["cafe", "coffee_shop"],
  },
  {
    id: "pharmacies",
    label: "Pharmacies",
    primaryTypes: ["pharmacy"],
  },
  {
    id: "schools",
    label: "Schools",
    primaryTypes: ["school", "primary_school", "secondary_school"],
  },
  {
    id: "parking",
    label: "Parking",
    primaryTypes: ["parking"],
  },
];

export type CuratedAmenity = {
  name: string;
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  latitude: number;
  longitude: number;
  categoryId: AmenityCategoryId;
  schemaType:
    | "Restaurant"
    | "GroceryStore"
    | "Park"
    | "GolfCourse"
    | "Hospital"
    | "Pharmacy"
    | "Store"
    | "ShoppingCenter"
    | "ExerciseGym"
    | "School"
    | "Place";
  /** Official source used to verify name and address */
  sourceUrl: string;
  note?: string;
};

/** Names and street addresses verified against each sourceUrl (primary sources only). */
export const curatedAmenities: CuratedAmenity[] = [
  {
    name: "Sprouts Farmers Market",
    streetAddress: "7530 W Lake Mead Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89128",
    latitude: 36.197,
    longitude: -115.2739,
    categoryId: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://www.sprouts.com/store/nv/las-vegas/las-vegas-lake-mead/",
  },
  {
    name: "Albertsons",
    streetAddress: "1650 N Buffalo Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89128",
    latitude: 36.1896,
    longitude: -115.26,
    categoryId: "grocery",
    schemaType: "GroceryStore",
    sourceUrl: "https://local.albertsons.com/nv/las-vegas/1650-n-buffalo-dr.html",
  },
  {
    name: "Summerlin Gateway Plaza",
    streetAddress: "7550 W Lake Mead Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89128",
    latitude: 36.1975,
    longitude: -115.2725,
    categoryId: "shopping",
    schemaType: "ShoppingCenter",
    note: "Retail center at Lake Mead Blvd and Buffalo Dr with grocery, services, and dining options.",
    sourceUrl: "https://www.loopnet.com/Listing/7450-7590-W-Lake-Mead-Blvd-Las-Vegas-NV/14436420/",
  },
  {
    name: "Summerlin Hospital Medical Center",
    streetAddress: "657 N Town Center Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89144",
    latitude: 36.1599,
    longitude: -115.3334,
    categoryId: "healthcare",
    schemaType: "Hospital",
    note: "Full-service hospital serving west Las Vegas and Summerlin addresses.",
    sourceUrl: "https://www.summerlinhospital.com/about/contact-us",
  },
  {
    name: "Centennial Hills Park",
    streetAddress: "7101 N Buffalo Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89131",
    latitude: 36.28694,
    longitude: -115.26278,
    categoryId: "parks",
    schemaType: "Park",
    sourceUrl: "https://www.lasvegasnevada.gov/Residents/Parks-Facilities/Centennial-hills-park",
  },
  {
    name: "Angel Park Golf Club",
    streetAddress: "100 S Rampart Blvd",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89145",
    latitude: 36.1734,
    longitude: -115.2895,
    categoryId: "golf",
    schemaType: "GolfCourse",
    note: "Public golf facility west of The Lakes toward Summerlin.",
    sourceUrl: "https://www.angelpark.com/",
  },
  {
    name: "TPC Las Vegas",
    streetAddress: "9851 Canyon Run Dr",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89144",
    latitude: 36.1642,
    longitude: -115.3378,
    categoryId: "golf",
    schemaType: "GolfCourse",
    note: "PGA Tour-affiliated public course in the Summerlin area.",
    sourceUrl: "https://tpc.com/lasvegas/",
  },
];

export type AmenityGuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const amenityGuideSections: AmenityGuideSection[] = [
  {
    id: "dining",
    title: "Dining near The Lakes",
    paragraphs: [
      `Along the Lake Mead Boulevard and Buffalo Drive corridors near ${theLakesPrimaryKeyword}, you'll find national and local restaurants, fast casual, and coffee options serving west Las Vegas and Summerlin gateway shoppers. Exact options change over time — use the map filters for current nearby restaurants and cafes, or ask ${theLakesPrimaryKeyword} buyers' agent Dr. Jan Duffy for favorites that match your routine.`,
    ],
  },
  {
    id: "parks-recreation",
    title: "Parks & recreation",
    paragraphs: [
      `${theLakesPrimaryKeyword} is built around man-made lakes, greenbelts, and tree-lined streets — the community itself is the main outdoor amenity for many residents. Centennial Hills Park and other Clark County parks are a short drive north on Buffalo Drive for sports fields, playgrounds, and open space.`,
      "The Lakes Homeowners Association manages community lakes, paths, and resident amenities; architectural and community questions go through the HOA management office on Lake East Drive.",
    ],
  },
  {
    id: "golf",
    title: "Golf",
    paragraphs: [
      "West Las Vegas and Summerlin offer multiple public golf courses. Angel Park Golf Club on Rampart Boulevard and TPC Las Vegas on Canyon Run Drive are two well-known public options west of The Lakes. Summerlin and Red Rock country club communities add additional choices within a reasonable drive.",
    ],
  },
  {
    id: "healthcare",
    title: "Healthcare",
    paragraphs: [
      "Summerlin Hospital Medical Center on Town Center Drive is a major full-service hospital serving west Las Vegas, including many 89128 and Summerlin addresses. Urgent care, primary care, dental, and specialty clinics cluster along Buffalo Drive, Lake Mead Boulevard, and the Summerlin medical corridor.",
      "Always confirm in-network providers with your insurance and check current hours before visiting.",
    ],
  },
  {
    id: "shopping-grocery",
    title: "Shopping & grocery",
    paragraphs: [
      "Sprouts Farmers Market and Albertsons on Lake Mead Boulevard and Buffalo Drive are everyday grocery anchors for west-side residents. Summerlin Gateway Plaza at 7550 W Lake Mead Blvd combines retail, services, and food in one center.",
      "Downtown Summerlin and larger Summerlin retail centers are typically about a 10–20 minute drive west, depending on traffic and your starting point in The Lakes.",
    ],
  },
  {
    id: "schools",
    title: "Schools",
    paragraphs: [
      "The Lakes sits within the Clark County School District. Assigned schools depend on your exact street address and CCSD boundaries — verify enrollment with the district and your listing agent before you buy.",
      "Which CCSD schools are assigned to The Lakes addresses? Verify with the CCSD Zoning Search before you rely on a school name in a listing or marketing material.",
      "Many households in west Las Vegas also consider private and charter options in Summerlin and the northwest valley.",
    ],
  },
  {
    id: "commute",
    title: "Commute & drive times (approximate)",
    paragraphs: [
      "Drive times vary with traffic and your exact address in The Lakes. Approximate ranges from the community area: Las Vegas Strip resort corridor — often about 20–35 minutes; Harry Reid International Airport — often about 25–40 minutes; Downtown Summerlin — often about 10–20 minutes; major employment centers along the 215 beltway — often about 10–25 minutes.",
      "The 215 Bruce Woodbury Beltway and Sahara Avenue provide primary east–west connections for west Las Vegas commuters.",
    ],
  },
];

export type AmenitiesFaqItem = { question: string; answer: string };

export const amenitiesFaqItems: AmenitiesFaqItem[] = [
  {
    question: "What grocery stores are near The Lakes Las Vegas?",
    answer:
      "Sprouts Farmers Market at 7530 W Lake Mead Blvd and Albertsons at 1650 N Buffalo Dr are two full-service grocery options commonly used by west Las Vegas residents near The Lakes; Summerlin Gateway Plaza at 7550 W Lake Mead Blvd adds additional retail and food choices.",
  },
  {
    question: "How far is The Lakes Las Vegas from the Las Vegas Strip?",
    answer:
      "The Lakes is in west Las Vegas, several miles from the central Strip corridor; many residents report approximate drive times of about 20–35 minutes to major Strip resorts, depending on traffic and the exact route.",
  },
  {
    question: "Are there hospitals near The Lakes Las Vegas?",
    answer:
      "Summerlin Hospital Medical Center at 657 N Town Center Dr is a major hospital serving west Las Vegas and Summerlin, within a typical short-to-moderate drive from The Lakes addresses.",
  },
  {
    question: "What parks are near The Lakes community?",
    answer:
      "The Lakes itself features lakes, greenbelts, and HOA-managed outdoor space; Centennial Hills Park at 7101 N Buffalo Dr is a Clark County park a short drive north for fields, playgrounds, and open recreation.",
  },
  {
    question: "Which CCSD schools are assigned to The Lakes Las Vegas addresses?",
    answer:
      "School assignments depend on your exact street address within The Lakes. Verify current zoning with the Clark County School District Zoning Search and your REALTOR® before you buy — do not rely on neighborhood names alone.",
  },
  {
    question: "Is The Lakes Las Vegas close to Summerlin?",
    answer:
      "Yes — The Lakes borders Summerlin and Peccole Ranch to the west and north; Downtown Summerlin shopping and employment are typically about a 10–20 minute drive, making west-side errands convenient.",
  },
  {
    question: "Where is The Lakes HOA office?",
    answer:
      "The Lakes Homeowners Association management office is at 2902 Lake East Dr, Las Vegas, NV 89117 (Prime Association Management); contact the HOA for assessments, architectural review, and community rules.",
  },
  {
    question: "Who can help me buy or sell in The Lakes Las Vegas?",
    answer:
      `Dr. Jan Duffy with Berkshire Hathaway HomeServices Nevada Properties specializes in west Las Vegas communities including The Lakes — call ${agentInfo.phone} or email ${agentInfo.email} for a curated tour of homes and nearby amenities.`,
  },
];

export function curatedAmenitiesForCategory(categoryId: AmenityCategoryId): CuratedAmenity[] {
  return curatedAmenities.filter((a) => a.categoryId === categoryId);
}

export function mapsEmbedUrl(lat = communityMapCenter.latitude, lng = communityMapCenter.longitude): string {
  return `https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`;
}

export function directionsUrl(lat: number, lng: number, label?: string): string {
  const q = label ? encodeURIComponent(label) : `${lat},${lng}`;
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}

export function placeDirectionsUrl(name: string, address: string): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${name}, ${address}`)}`;
}
