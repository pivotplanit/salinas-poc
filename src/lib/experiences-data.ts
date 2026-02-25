export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Experience {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
  duration: string;
  difficulty: string;
  altitude: string;
  groupSize: string;
  // Detail page properties
  overview?: string;
  whySpecial?: string;
  whatYouLearn?: string;
  highlights?: string[];
  itinerary?: Array<{ time: string; activity: string }>;
  included?: string[];
  excluded?: string[];
  whatToBring?: string[];
  walking?: string;
  accessibility?: string;
  notSuitableFor?: string;
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  relatedExperienceIds?: string[];
  price?: string;
  groupDiscounts?: Array<{ size: string; discount: string }>;
}

export const experiences: Experience[] = [
  {
    id: "coffee-plantation",
    title: "Coffee Plantation Tour",
    tag: "Agriculture",
    description: "Learn about sustainable coffee cultivation from seed to cup",
    icon: "☕",
    duration: "4 hours",
    difficulty: "Easy",
    altitude: "1,500m",
    groupSize: "2-20 people",
    overview:
      "Discover the journey of Ecuadorian coffee from seed to cup. Visit a family-owned coffee plantation and learn about sustainable farming practices that have been refined over generations.",
    whySpecial:
      "Ecuador produces some of the world's finest specialty coffee. Our partner plantations use shade-grown, organic methods that protect biodiversity while creating exceptional flavor profiles. You'll meet the farmers and taste coffee at peak freshness.",
    whatYouLearn:
      "Processing methods (wet vs. dry), grading and sorting, roasting techniques, tasting notes and flavor profiles, sustainability practices, the economics of coffee farming",
    highlights: [
      "Walk through lush coffee plantations surrounded by native shade trees",
      "Learn about the complete coffee lifecycle from flower to harvest",
      "Participate in picking and processing coffee cherries",
      "Visit the drying beds and sorting facility",
      "Experience coffee cupping (professional tasting) with the farmer",
      "Enjoy fresh-roasted coffee with traditional snacks",
      "Meet the farming family and hear their story",
      "Learn about fair trade and direct-trade practices",
      "Optional: Purchase fresh beans to take home",
      "Photos with the plantation landscape backdrop",
    ],
    itinerary: [
      { time: "8:30 AM", activity: "Hotel pickup and drive to plantation" },
      { time: "9:15 AM", activity: "Welcome and orientation with plantation manager" },
      { time: "9:45 AM", activity: "Walking tour through coffee plants" },
      { time: "10:45 AM", activity: "Harvest demonstration and picking practice" },
      { time: "11:30 AM", activity: "Visit processing facility and drying beds" },
      { time: "12:15 PM", activity: "Coffee cupping experience" },
      { time: "1:00 PM", activity: "Lunch with local specialties" },
      { time: "2:00 PM", activity: "Discussion and Q&A with farmer" },
      { time: "2:30 PM", activity: "Gift shop and fresh coffee purchase" },
      { time: "3:00 PM", activity: "Return to hotel" },
    ],
    included: [
      "Professional guide",
      "Hotel transportation",
      "Coffee plantation entrance",
      "Lunch with local dishes",
      "Coffee tasting experience",
      "Small gift (coffee sample)",
    ],
    excluded: [
      "Coffee beans to take home (available for purchase)",
      "Additional meals or drinks",
      "Travel insurance",
      "Personal souvenirs",
    ],
    whatToBring: [
      "Comfortable walking shoes (terrain is varied but manageable)",
      "Light layers (mornings are cool, afternoons warm)",
      "Sun protection (hat, sunglasses, sunscreen)",
      "Camera or phone for photos",
      "Small backpack or day bag",
      "Refillable water bottle",
    ],
    walking: "Moderate: 3-4 km of walking over hilly terrain",
    accessibility:
      "Paths are unpaved but well-maintained; not suitable for those with severe mobility issues",
    notSuitableFor: "Pregnancy (due to altitude and walking), severe joint problems",
    testimonials: [
      {
        name: "Sarah M.",
        role: "Coffee Enthusiast, USA",
        text: "One of the best experiences of my trip! The farmer was so passionate about his work, and tasting coffee right where it's grown was unforgettable. Now I can never drink grocery store coffee the same way.",
        rating: 5,
      },
      {
        name: "Roberto V.",
        role: "Businessman, Spain",
        text: "Incredible education about sustainable farming. The coffee cupping was technical but fun, and the lunch was delicious. Definitely booking again for my wife.",
        rating: 5,
      },
      {
        name: "Emma L.",
        role: "Travel Blogger, Australia",
        text: "Authentic, educational, and beautiful. The plantation views alone are worth it, but the personal connection with the farming family made it special.",
        rating: 5,
      },
    ],
    faqs: [
      {
        question: "What if I don't like coffee?",
        answer:
          "No problem! You'll still enjoy learning about agriculture, meeting the farming family, and experiencing rural Ecuador. The day includes diverse activities beyond coffee tasting.",
      },
      {
        question: "Is there shade during the tour?",
        answer:
          "Much of the tour is under the shade of native trees that grow with the coffee plants. We still recommend sun protection as you'll be in direct sun at times.",
      },
      {
        question: "Can children participate?",
        answer:
          "Yes! Children 8+ are welcome. They enjoy the picking activities and the farm environment. The tasting portion is educational and age-appropriate.",
      },
      {
        question: "How steep are the walks?",
        answer:
          "The terrain is hilly but not steep. Most people of moderate fitness can complete the tour comfortably. Let us know of any concerns when booking.",
      },
    ],
    relatedExperienceIds: ["organic-farming", "cooking-class", "market-tour"],
    price: "$89",
    groupDiscounts: [
      { size: "2-4 people", discount: "No discount" },
      { size: "5-10 people", discount: "10% off" },
      { size: "11+ people", discount: "15% off" },
    ],
  },
  {
    id: "textile-weaving",
    title: "Traditional Textile Weaving",
    tag: "Crafts",
    description: "Experience ancient weaving techniques with local artisans",
    icon: "🧵",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-15 people",
  },
  {
    id: "chocolate-making",
    title: "Artisan Chocolate Making",
    tag: "Culinary",
    description: "Create your own chocolate from cacao beans to finished product",
    icon: "🍫",
    duration: "3.5 hours",
    difficulty: "Easy",
    altitude: "1,350m",
    groupSize: "2-12 people",
  },
  {
    id: "mountain-hiking",
    title: "High Altitude Mountain Trek",
    tag: "Adventure",
    description: "Challenge yourself on scenic mountain trails with expert guides",
    icon: "⛰️",
    duration: "6 hours",
    difficulty: "Hard",
    altitude: "3,000m+",
    groupSize: "2-10 people",
  },
  {
    id: "indigenous-culture",
    title: "Indigenous Culture Exchange",
    tag: "Culture",
    description: "Connect with indigenous communities and learn their traditions",
    icon: "🌿",
    duration: "5 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-20 people",
  },
  {
    id: "organic-farming",
    title: "Organic Farm Experience",
    tag: "Agriculture",
    description: "Work alongside farmers in sustainable agricultural practices",
    icon: "🌾",
    duration: "4 hours",
    difficulty: "Moderate",
    altitude: "1,600m",
    groupSize: "2-12 people",
  },
  {
    id: "cooking-class",
    title: "Traditional Ecuadorian Cooking",
    tag: "Culinary",
    description: "Prepare authentic local dishes with traditional recipes",
    icon: "👨‍🍳",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,350m",
    groupSize: "2-10 people",
  },
  {
    id: "art-workshop",
    title: "Contemporary Art Workshop",
    tag: "Arts",
    description: "Create art inspired by Ecuadorian landscapes and culture",
    icon: "🎨",
    duration: "3.5 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-15 people",
  },
  {
    id: "herb-garden",
    title: "Medicinal Herb Garden Tour",
    tag: "Agriculture",
    description: "Discover traditional medicinal plants and their uses",
    icon: "🌱",
    duration: "2 hours",
    difficulty: "Easy",
    altitude: "1,450m",
    groupSize: "2-20 people",
  },
  {
    id: "rainforest-walk",
    title: "Cloud Forest Exploration",
    tag: "Nature",
    description: "Hike through lush cloud forests with wildlife spotting",
    icon: "🌳",
    duration: "5 hours",
    difficulty: "Moderate",
    altitude: "2,000m",
    groupSize: "2-12 people",
  },
  {
    id: "pottery-class",
    title: "Traditional Pottery Making",
    tag: "Crafts",
    description: "Hand-craft pottery using ancient techniques",
    icon: "🏺",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-10 people",
  },
  {
    id: "market-tour",
    title: "Local Market & Food Tour",
    tag: "Culture",
    description: "Explore vibrant markets and sample local delicacies",
    icon: "🛒",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,350m",
    groupSize: "2-20 people",
  },
  {
    id: "horseback-riding",
    title: "Mountain Horseback Riding",
    tag: "Adventure",
    description: "Ride through scenic valleys and mountain trails",
    icon: "🐴",
    duration: "4 hours",
    difficulty: "Moderate",
    altitude: "1,800m",
    groupSize: "2-10 people",
  },
  {
    id: "waterfall-hike",
    title: "Waterfall Discovery Trek",
    tag: "Nature",
    description: "Trek to hidden waterfalls with swimming opportunities",
    icon: "💧",
    duration: "4 hours",
    difficulty: "Moderate",
    altitude: "1,600m",
    groupSize: "2-15 people",
  },
  {
    id: "cheese-production",
    title: "Artisan Cheese Making",
    tag: "Culinary",
    description: "Learn traditional cheese production from local dairies",
    icon: "🧀",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,500m",
    groupSize: "2-12 people",
  },
  {
    id: "bird-watching",
    title: "Bird Watching Expedition",
    tag: "Nature",
    description: "Spot endemic species with expert naturalist guides",
    icon: "🦅",
    duration: "5 hours",
    difficulty: "Moderate",
    altitude: "1,800m",
    groupSize: "2-10 people",
  },
  {
    id: "textile-dyeing",
    title: "Natural Fiber Dyeing",
    tag: "Crafts",
    description: "Learn natural plant-based dyes for traditional textiles",
    icon: "🎭",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-12 people",
  },
  {
    id: "spice-garden",
    title: "Spice Garden Tour & Tasting",
    tag: "Culinary",
    description: "Explore exotic spices and create signature blends",
    icon: "🌶️",
    duration: "2.5 hours",
    difficulty: "Easy",
    altitude: "1,350m",
    groupSize: "2-15 people",
  },
  {
    id: "dance-workshop",
    title: "Traditional Dance Workshop",
    tag: "Culture",
    description: "Learn traditional Ecuadorian dances from local performers",
    icon: "💃",
    duration: "2 hours",
    difficulty: "Easy",
    altitude: "1,350m",
    groupSize: "2-20 people",
  },
  {
    id: "mountain-biking",
    title: "Mountain Biking Adventure",
    tag: "Adventure",
    description: "Ride challenging trails through diverse landscapes",
    icon: "🚵",
    duration: "5 hours",
    difficulty: "Hard",
    altitude: "2,000m",
    groupSize: "2-8 people",
  },
  {
    id: "yoga-retreat",
    title: "Mountain Yoga & Meditation",
    tag: "Wellness",
    description: "Practice yoga in serene mountain settings",
    icon: "🧘",
    duration: "2 hours",
    difficulty: "Easy",
    altitude: "1,500m",
    groupSize: "2-15 people",
  },
  {
    id: "basket-weaving",
    title: "Artisan Basket Weaving",
    tag: "Crafts",
    description: "Master traditional basket weaving techniques",
    icon: "🧺",
    duration: "3 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-10 people",
  },
  {
    id: "geological-tour",
    title: "Geological Wonder Tour",
    tag: "Nature",
    description: "Explore volcanic formations and geological history",
    icon: "🪨",
    duration: "4 hours",
    difficulty: "Moderate",
    altitude: "1,900m",
    groupSize: "2-12 people",
  },
  {
    id: "beekeeping",
    title: "Beekeeping & Honey Experience",
    tag: "Agriculture",
    description: "Learn beekeeping practices and harvest local honey",
    icon: "🐝",
    duration: "2.5 hours",
    difficulty: "Easy",
    altitude: "1,400m",
    groupSize: "2-10 people",
  },
];
