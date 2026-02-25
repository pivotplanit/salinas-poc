export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  groupSize: string;
  description: string;
  highlights: string[];
  price: string;
}

export interface PricingRow {
  groupSize: string;
  twoDay: string;
  threeDay: string;
  fiveDay: string;
}

export const itineraries: Itinerary[] = [
  {
    id: "cultural-immersion",
    title: "Cultural Immersion",
    duration: "3 Days",
    groupSize: "5-30 people",
    description:
      "Dive deep into Ecuadorian heritage with artisan workshops, community meetings, and traditional meals.",
    highlights: [
      "Traditional textile weaving with local artisans",
      "Hands-on coffee plantation tour and processing",
      "Indigenous community exchange and meals",
      "Artisan market exploration",
      "Evening cultural performances",
    ],
    price: "From $450 per person",
  },
  {
    id: "adventure-active",
    title: "Adventure & Activity Focus",
    duration: "3 Days",
    groupSize: "4-20 people",
    description:
      "High-energy experiences combining hiking, outdoor activities, and hands-on adventures for active groups.",
    highlights: [
      "Mountain trekking with guide",
      "Waterfall discovery and swimming",
      "Horseback riding through valleys",
      "Rock climbing introduction",
      "Outdoor cooking and camping",
    ],
    price: "From $550 per person",
  },
  {
    id: "culinary-wellness",
    title: "Culinary & Wellness Retreat",
    duration: "4 Days",
    groupSize: "6-25 people",
    description:
      "Blend cuisine, wellness, and relaxation with cooking classes, yoga sessions, and spa treatments.",
    highlights: [
      "Farm-to-table cooking classes",
      "Chocolate and coffee tasting",
      "Yoga and meditation sessions",
      "Organic farm exploration",
      "Wellness spa and massage treatments",
    ],
    price: "From $600 per person",
  },
];

export const pricingTable: PricingRow[] = [
  {
    groupSize: "2-5 people",
    twoDay: "$650",
    threeDay: "$900",
    fiveDay: "$2,200",
  },
  {
    groupSize: "6-15 people",
    twoDay: "$550",
    threeDay: "$750",
    fiveDay: "$1,800",
  },
  {
    groupSize: "16-30 people",
    twoDay: "$450",
    threeDay: "$600",
    fiveDay: "$1,500",
  },
  {
    groupSize: "30+ people",
    twoDay: "$400",
    threeDay: "$525",
    fiveDay: "$1,300",
  },
];

export const bookingSteps = [
  {
    number: 1,
    title: "Customize Your Journey",
    description: "Tell us your interests, group size, and preferences",
  },
  {
    number: 2,
    title: "Browse Itineraries",
    description: "Explore sample itineraries or let us create a custom one",
  },
  {
    number: 3,
    title: "Get a Quote",
    description: "Receive pricing and detailed logistics information",
  },
  {
    number: 4,
    title: "Confirm & Prepare",
    description: "Secure your booking and receive pre-trip information",
  },
];

export const experienceFocusOptions = [
  { id: "cultural", label: "Cultural Heritage", icon: "🎭" },
  { id: "adventure", label: "Adventure & Hiking", icon: "⛰️" },
  { id: "culinary", label: "Culinary Experiences", icon: "👨‍🍳" },
  { id: "arts", label: "Arts & Crafts", icon: "🎨" },
  { id: "nature", label: "Nature & Wildlife", icon: "🌿" },
  { id: "wellness", label: "Wellness & Yoga", icon: "🧘" },
];

export const durationOptions = [
  { id: "2day", label: "2 Days", value: "2-day" },
  { id: "3day", label: "3 Days", value: "3-day" },
  { id: "5day", label: "5 Days", value: "5-day" },
  { id: "custom", label: "Custom Duration", value: "custom" },
];

export const activityLevelOptions = [
  { id: "relaxed", label: "Relaxed (Easy walks, cultural focus)", value: "relaxed" },
  { id: "moderate", label: "Moderate (Mix of activities)", value: "moderate" },
  { id: "active", label: "Active (Hiking, adventure)", value: "active" },
];

export const accommodationOptions = [
  { id: "budget", label: "Budget (Homestay/Eco-lodge)", value: "budget" },
  { id: "comfort", label: "Comfort (Mid-range hotel)", value: "comfort" },
  { id: "premium", label: "Premium (Upscale resort)", value: "premium" },
  { id: "flexible", label: "Flexible (Mix of options)", value: "flexible" },
];

export const interestOptions = [
  "Coffee & Agriculture",
  "Textiles & Crafts",
  "Chocolate Making",
  "Cooking & Culinary",
  "Mountain Hiking",
  "Wildlife & Nature",
];
