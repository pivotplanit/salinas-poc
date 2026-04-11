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
    groupSize: "1-10 people",
    twoDay: "$150/person",
    threeDay: "$280/person",
    fiveDay: "$450/person",
  },
  {
    groupSize: "11-20",
    twoDay: "$130",
    threeDay: "$250",
    fiveDay: "$420",
  },
  {
    groupSize: "21-30 people",
    twoDay: "$115",
    threeDay: "$225",
    fiveDay: "$385",
  },
  {
    groupSize: "31+ people",
    twoDay: "Contact for quote",
    threeDay: "Contact for quote",
    fiveDay: "Contact for quote",
  },
];

export const bookingSteps = [
  {
    number: 1,
    title: "Tell Us",
    description: "Your group details",
  },
  {
    number: 2,
    title: "We Design",
    description: "Custom itinerary",
  },
  {
    number: 3,
    title: "You Approve",
    description: "Final details & book",
  },
  {
    number: 4,
    title: "Experience",
    description: "Your trip",
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
  {
    id: "relaxed",
    label: "Relaxed (Easy walks, cultural focus)",
    value: "relaxed",
  },
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

export const whyBookHabitat = [
  {
    title: "Community Impact",
    description: "Direct beneifts to local families",
  },
  {
    title: "Expert Guides",
    description: "Local knowledge and expertise",
  },
  {
    title: "Flexibility",
    description: "Customizable itineraries",
  },
  {
    title: "Safety",
    description: "Comprehensive support",
  },
];

export const whatLeadersSay = [
  {
    name: "Dr. Sarah Martinez",
    organization: "University of Colorado",
    rating: 5,
    testimonial:
      "Our students gained invaluable insights into cooperative economics and sustainable community development. The experience exceeded all expectations.",
  },
  {
    name: "James Thompson",
    organization: "Global Education Tours",
    rating: 5,
    testimonial:
      "The attention to detail and customization made this trip perfect for our group. The local guides were knowledgeable and passionate.",
  },
  {
    name: "Maria Rodriguez",
    organization: "Stanford Study Abroad",
    rating: 5,
    testimonial:
      "An authentic and transformative experience. The community welcomed us warmly and we learned so much about solidarity economy in action.",
  },
];
