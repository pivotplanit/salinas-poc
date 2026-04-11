export interface Person {
  name: string;
  role: string;
  description: string;
  image: string;
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
  image: string;
}

export interface Commitment {
  title: string;
}

export interface Cooperative {
  name: string;
  category: string;
  description: string;
  logo: string;
  url: string;
}

export const people: Person[] = [
  {
    name: "Juan Pérez",
    role: "Master Cheesemaker",
    description: "30 years crafting award-winning cheeses",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    name: "María González",
    role: "Textile Artisan",
    description: "Preserving traditional weaving techniques",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Carlos Ruiz",
    role: "Chocolate Maker",
    description: "Creating artisan chocolate from local cacao",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Ana Torres",
    role: "Local Guide",
    description: "Sharing Salinas stories with visitors",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    name: "Roberto Sánchez",
    role: "Community Leader",
    description: "Coordinating cooperative development",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
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
  { label: "Family businesses supported", value: "40+", icon: "Users" },
  { label: "Families employed", value: "200+", icon: "Users" },
  { label: "Of tradition", value: "50+ Years", icon: "Calendar" },
  { label: "Recognized Model", value: "UNESCO", icon: "Medal" },
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
    title: "Traditional Festivals",
    description: "Carnival, harvest celebrations, and community gatherings",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
  },
  {
    title: "Daily Life",
    description: "Morning markets, cooperative work, family traditions",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=600&h=400&fit=crop",
  },
  {
    title: "Agricultural Practices",
    description: "Sustainable farming, traditional crops, organic methods",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
  },
  {
    title: "Artisan Techniques",
    description: "Cheese-making, weaving, chocolate production passed down generations",
    image: "https://images.unsplash.com/photo-1609553944726-47b4cbf6a19c?w=600&h=400&fit=crop",
  },
  {
    title: "Community Gatherings",
    description: "Weekly meetings, cooperative assemblies, shared meals",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&h=400&fit=crop",
  },
  {
    title: "Music & Dance",
    description: "Traditional Andean music, folk dances, cultural performances",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
  },
];

export const commitments: Commitment[] = [
  {
    title: "Fair wages for guides and artisans",
  },
  {
    title: "Profits stay in community",
  },
  {
    title: "Environmental conservation",
  },
  {
    title: "Cultural preservation",
  },
  {
    title: "Educational opportunities",
  },
];

export const cooperatives: Cooperative[] = [
  {
    name: "El Salinerito",
    category: "Cheese & Dairy",
    description: "Award-winning artisan cheese production cooperative",
    logo: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&h=200&fit=crop",
    url: "https://elsalinerito.com",
  },
  {
    name: "Texsal",
    category: "Textiles & Wool",
    description: "Traditional weaving and textile production",
    logo: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=200&h=200&fit=crop",
    url: "https://texsal.com",
  },
  {
    name: "Chocolates Salinas",
    category: "Artisan Chocolate",
    description: "Fine chocolate crafted from local cacao beans",
    logo: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=200&h=200&fit=crop",
    url: "https://chocolatesalinas.com",
  },
  {
    name: "Hongos Salinas",
    category: "Mushrooms",
    description: "Sustainable mushroom cultivation and products",
    logo: "https://images.unsplash.com/photo-1504545102780-26774c1bb073?w=200&h=200&fit=crop",
    url: "https://hongossalinas.com",
  },
  {
    name: "Turismo Salinas",
    category: "Community Tourism",
    description: "Experience guides and tourism coordination",
    logo: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=200&h=200&fit=crop",
    url: "https://turismosalinas.com",
  },
  {
    name: "Confites Don Bosco",
    category: "Candies & Sweets",
    description: "Traditional confectionery and sweets production",
    logo: "https://images.unsplash.com/photo-1582058091505-f87a2e55a40f?w=200&h=200&fit=crop",
    url: "https://confitesdonbosco.com",
  },
  {
    name: "Queseras Rurales",
    category: "Rural Cheese",
    description: "Rural cheese-making cooperative network",
    logo: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=200&h=200&fit=crop",
    url: "https://queserasrurales.com",
  },
  {
    name: "Artesanías",
    category: "Handicrafts",
    description: "Traditional handcrafted goods and artisan works",
    logo: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=200&h=200&fit=crop",
    url: "https://artesaniassalinas.com",
  },
];
