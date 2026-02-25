export interface Person {
  name: string;
  role: string;
  avatar: string;
}

export interface TimelineItem {
  decade: string;
  title: string;
  description: string;
}

export interface Location {
  name: string;
  region: string;
  description: string;
  emoji: string;
}

export interface CultureItem {
  title: string;
  description: string;
  emoji: string;
}

export interface Commitment {
  title: string;
  description: string;
  emoji: string;
}

export interface Cooperative {
  name: string;
  category: string;
  description: string;
}

export const people: Person[] = [
  {
    name: "Juan Pablo",
    role: "Founder & Visionary",
    avatar: "👨‍💼",
  },
  {
    name: "Maria Gonzalez",
    role: "Community Director",
    avatar: "👩‍💼",
  },
  {
    name: "Carlos Ruiz",
    role: "Operations Manager",
    avatar: "👨‍🔧",
  },
  {
    name: "Ana Martinez",
    role: "Experience Designer",
    avatar: "👩‍🎨",
  },
  {
    name: "Roberto Flores",
    role: "Guide Coordinator",
    avatar: "👨‍🏫",
  },
];

export const timeline: TimelineItem[] = [
  {
    decade: "1970s",
    title: "The Beginning",
    description:
      "Started as a small family cooperative with a vision to preserve local traditions and create sustainable opportunities.",
  },
  {
    decade: "1980s",
    title: "Growth Phase",
    description:
      "Expanded to support multiple artisan groups and established first cooperative partnerships across Ecuador.",
  },
  {
    decade: "1990s",
    title: "International Recognition",
    description:
      "Received UNESCO Cultural Heritage recognition and began welcoming international visitors.",
  },
  {
    decade: "2000s",
    title: "Diversification",
    description:
      "Developed comprehensive tourism experiences while maintaining commitment to community development.",
  },
  {
    decade: "Today",
    title: "Global Impact",
    description:
      "Operating across 40+ communities, supporting 200+ jobs, and leading sustainable tourism in Ecuador.",
  },
];

export const stats = [
  { label: "Communities", value: "40+", icon: "🏘️" },
  { label: "Jobs Created", value: "200+", icon: "💼" },
  { label: "Years History", value: "50+", icon: "📅" },
  { label: "UNESCO Heritage", value: "✓", icon: "🏛️" },
];

export const locations: Location[] = [
  {
    name: "Quito",
    region: "Northern Highlands",
    description:
      "Our headquarters and primary coordination center, surrounded by coffee plantations and artisan communities.",
    emoji: "🏙️",
  },
  {
    name: "Guayaquil",
    region: "Pacific Coast",
    description:
      "Gateway to coastal experiences featuring chocolate production, agriculture, and maritime culture.",
    emoji: "🌊",
  },
  {
    name: "Cuenca",
    region: "Southern Highlands",
    description:
      "Center of textile and pottery traditions with pristine cloud forests and colonial charm.",
    emoji: "🎭",
  },
  {
    name: "Salinas Region",
    region: "Local Community",
    description:
      "Our heart and home, where this journey began with local families and continues to thrive.",
    emoji: "🌿",
  },
];

export const culture: CultureItem[] = [
  {
    title: "Textiles",
    description:
      "Ancient weaving techniques passed down through generations create intricate patterns and vibrant colors.",
    emoji: "🧵",
  },
  {
    title: "Arts & Crafts",
    description:
      "From pottery to basket weaving, each piece tells a story of cultural heritage and artistic mastery.",
    emoji: "🎨",
  },
  {
    title: "Indigenous Heritage",
    description:
      "Deep roots in indigenous traditions with respect for ancestral knowledge and sustainable practices.",
    emoji: "🌿",
  },
  {
    title: "Agricultural Traditions",
    description:
      "Sustainable farming methods cultivated over centuries producing coffee, cacao, and spices.",
    emoji: "🌾",
  },
  {
    title: "Culinary Excellence",
    description:
      "Farm-to-table cuisine using locally-sourced ingredients and traditional cooking methods.",
    emoji: "👨‍🍳",
  },
  {
    title: "Artistic Expression",
    description:
      "Living arts through music, dance, and contemporary creative works inspired by natural beauty.",
    emoji: "🎭",
  },
];

export const commitments: Commitment[] = [
  {
    title: "Environmental Stewardship",
    description:
      "Protecting Ecuador's biodiversity through sustainable practices and conservation initiatives.",
    emoji: "🌍",
  },
  {
    title: "Community Development",
    description:
      "Creating economic opportunities while preserving cultural identity and local autonomy.",
    emoji: "🤝",
  },
  {
    title: "Cultural Preservation",
    description:
      "Safeguarding traditional knowledge, arts, and indigenous practices for future generations.",
    emoji: "📚",
  },
  {
    title: "Fair Labor Practices",
    description:
      "Ensuring fair wages, safe working conditions, and dignified work for all community members.",
    emoji: "⚖️",
  },
];

export const cooperatives: Cooperative[] = [
  {
    name: "ACGR",
    category: "Coffee Growers",
    description: "Sustainable coffee cultivation and export cooperative",
  },
  {
    name: "SALINA",
    category: "Community Hub",
    description: "Central coordination and community gathering space",
  },
  {
    name: "TEXTIL",
    category: "Textile Artists",
    description: "Traditional weaving and textile production",
  },
  {
    name: "CHOCO",
    category: "Chocolate Makers",
    description: "Artisan chocolate production from cacao",
  },
  {
    name: "AGRI",
    category: "Organic Farmers",
    description: "Sustainable agriculture and crop production",
  },
  {
    name: "TURISMO",
    category: "Tourism Services",
    description: "Experience guides and tourism coordination",
  },
  {
    name: "CAFE",
    category: "Coffee Processing",
    description: "Coffee roasting and specialty processing",
  },
  {
    name: "GARDEN",
    category: "Herb & Spice",
    description: "Medicinal herbs and spice cultivation",
  },
  {
    name: "HERB",
    category: "Traditional Medicine",
    description: "Herbal remedies and wellness products",
  },
  {
    name: "CRAFT",
    category: "Artisan Crafts",
    description: "Basket weaving, pottery, and traditional arts",
  },
];
