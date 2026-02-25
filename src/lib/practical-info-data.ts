export interface FAQItem {
  question: string;
  answer: string;
}

export interface PackingItem {
  category: string;
  items: string[];
}

export interface HealthItem {
  title: string;
  description: string;
  icon: string;
}

export interface Route {
  name: string;
  description: string;
  details: string[];
}

export const faqs: FAQItem[] = [
  {
    question: "What's the best time to visit?",
    answer:
      "Ecuador's climate is pleasant year-round due to its equatorial location. The dry seasons (June-August and December-January) offer the clearest skies, perfect for hiking and outdoor activities. However, the green season brings lush landscapes and is equally beautiful.",
  },
  {
    question: "Do I need any vaccinations?",
    answer:
      "Check with your healthcare provider, but common recommendations include Yellow Fever (especially for lowland areas), Typhoid, and Hepatitis A. Malaria prophylaxis may be recommended for certain regions. Schedule a travel consultation 4-6 weeks before your trip.",
  },
  {
    question: "What currency is used?",
    answer:
      "Ecuador uses the US Dollar (USD). This makes payment simple for international visitors. ATMs are widely available in cities and larger towns. Credit cards are accepted at most establishments, though some rural communities may be cash-only.",
  },
  {
    question: "Is it safe for tourists?",
    answer:
      "Yes, Ecuador is generally safe for tourists, especially when visiting organized experiences through trusted operators. Follow standard travel safety practices: avoid displaying expensive items, stay in well-traveled areas, and use registered taxis. Our guides are trained in safety protocols.",
  },
  {
    question: "What languages are spoken?",
    answer:
      "Spanish is the official language. English is spoken in tourist areas and by our guides. We offer experiences in both languages, and many signs are bilingual. Learning basic Spanish phrases is helpful and appreciated by locals.",
  },
  {
    question: "How does altitude affect visitors?",
    answer:
      "Salinas is at moderate altitude (1,350-1,600m). Some visitors may experience mild altitude effects like shortness of breath or fatigue. We recommend acclimatization time, staying hydrated, and taking it easy the first day. Serious altitude sickness is rare at our elevation.",
  },
  {
    question: "What's the weather really like?",
    answer:
      "Expect mild temperatures (12-20°C) with cool mornings and afternoons. Rainfall is common but usually brief. Mornings often start cool and misty (perfect for hiking), while afternoons warm up nicely. Pack layers that you can add or remove.",
  },
  {
    question: "Can I drink the tap water?",
    answer:
      "Tap water in Quito and major cities is generally safe. In rural areas, bottled water is recommended. We provide filtered water at all accommodations. Always carry water during hikes and activities.",
  },
  {
    question: "What's included in experiences?",
    answer:
      "Most experiences include expert guidance, basic meals (lunch on full-day experiences), and all materials for hands-on activities. Transportation to and from your accommodation, entrance fees, and special equipment are typically included. Check your specific experience details.",
  },
  {
    question: "How physically fit do I need to be?",
    answer:
      "We offer experiences for all fitness levels. While some hikes require moderate fitness, many activities are accessible to beginners. Difficulty levels are clearly marked. Our guides adjust pace and activities to your ability. Always inform us of any physical limitations.",
  },
];

export const packingChecklist: PackingItem[] = [
  {
    category: "Clothing",
    items: [
      "Lightweight layers (fleece or merino)",
      "Comfortable walking shoes (broken in)",
      "Weather-resistant jacket",
      "Hat or cap for sun protection",
      "Moisture-wicking socks",
      "Comfortable pants (convertible to shorts)",
    ],
  },
  {
    category: "Protection & Health",
    items: [
      "High SPF sunscreen (strong UV at altitude)",
      "Lip balm with SPF",
      "Insect repellent (DEET or picaridin)",
      "Basic first aid kit",
      "Any personal medications",
      "Blister treatment",
    ],
  },
  {
    category: "Hiking Essentials",
    items: [
      "Day backpack (20-30L)",
      "Reusable water bottle (1.5L minimum)",
      "Trail snacks (nuts, dried fruit, bars)",
      "Headlamp or flashlight",
      "Map and compass (if experienced)",
      "Trekking poles (optional but helpful)",
    ],
  },
  {
    category: "Personal Items",
    items: [
      "Passport and copies of important documents",
      "Travel insurance documents",
      "Phone charger (adaptors for Ecuador)",
      "Toiletries and personal medications",
      "Lightweight towel or quick-dry towel",
      "Camera (waterproof case recommended)",
    ],
  },
];

export const healthSafety: HealthItem[] = [
  {
    title: "Altitude Adjustment",
    description:
      "Spend your first day at moderate activity levels. Drink extra water and eat light meals. If you experience severe headache or shortness of breath, inform your guide immediately.",
    icon: "🏔️",
  },
  {
    title: "Travel Insurance",
    description:
      "Comprehensive travel insurance is strongly recommended. It should cover medical evacuation, trip cancellation, and emergency care. Verify coverage for activities you plan to do.",
    icon: "🛡️",
  },
  {
    title: "Sun & UV Protection",
    description:
      "The sun is intense at altitude. Use SPF 50+ sunscreen, reapply frequently, wear UV-protective clothing, and consider sunglasses. Even on cloudy days, UV exposure is significant.",
    icon: "☀️",
  },
  {
    title: "Medical Services",
    description:
      "Quito has excellent medical facilities with English-speaking doctors. Rural areas have basic health posts. We maintain communication with medical providers and can arrange rapid evacuation if needed.",
    icon: "⚕️",
  },
  {
    title: "Food & Water Safety",
    description:
      "Tap water in cities is safe; bottled water recommended elsewhere. Restaurant food is generally safe and fresh. If you have a sensitive stomach, stick to cooked foods and avoid raw vegetables from unknown sources.",
    icon: "💧",
  },
];

export const routes: Route[] = [
  {
    name: "From Quito",
    description:
      "Ecuador's capital offers daily flights from major cities and good infrastructure.",
    details: [
      "Fly into Mariscal Sucre International Airport (UIO)",
      "45-minute flight from major South American hubs",
      "Ground transportation: 2-3 hours by car to Salinas",
      "Option to explore Quito before heading to rural areas",
    ],
  },
  {
    name: "From Guayaquil",
    description: "Ecuador's largest city on the coast with extensive flight connections.",
    details: [
      "Fly into José Joaquín de Olmedo International Airport (GYE)",
      "Gateway for Pacific coast flights",
      "Ground transportation: 4-5 hours by car to Salinas",
      "More humid climate; acclimatize before heading to highlands",
    ],
  },
  {
    name: "From Cuenca",
    description: "Located in the southern highlands with regional airport.",
    details: [
      "Mariscal Lamar International Airport (CUE)",
      "Smaller airport with flights to major cities",
      "Ground transportation: 3-4 hours by car to Salinas",
      "Excellent alternative to other airports",
    ],
  },
  {
    name: "Overland Options",
    description: "For the adventurous: bus or rental car through scenic Ecuador.",
    details: [
      "South America bus network extensive and affordable",
      "Self-drive offers flexibility but requires international permit",
      "Pan-American Highway connects Ecuador's major cities",
      "Takes longer but offers rich travel experience",
    ],
  },
];

export const weather = [
  {
    season: "Cool Mornings",
    temperature: "12-15°C (54-59°F)",
    description: "Perfect for hiking and outdoor activities. Bring a light jacket.",
    emoji: "🌅",
  },
  {
    season: "Afternoon Sun",
    temperature: "18-22°C (64-72°F)",
    description: "Warm and pleasant. Peak hours for outdoor exploration.",
    emoji: "☀️",
  },
  {
    season: "Evening",
    temperature: "14-16°C (57-61°F)",
    description: "Cool down with layers needed. Beautiful for sunset views.",
    emoji: "🌇",
  },
];
