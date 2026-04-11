import rawExperiencesData from "../data/experiences.json";

export interface Testimonial {
  name: string;
  location?: string;
  role?: string;
  text: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface GroupDiscount {
  groupSize?: string;
  size?: string;
  discount: number | string;
}

export interface ItineraryItem {
  time: string;
  title?: string;
  activity?: string;
  description?: string;
}

export interface Experience {
  id: string;
  title: string;
  tag: string;
  description: string;
  icon: string;
  emoji?: string;
  image?: string;
  duration: string;
  difficulty: string;
  difficultyLevel?: number;
  altitude: string;
  groupSize: string;
  category?: string;
  // Detail page properties
  overview?: string;
  whySpecial?: string;
  whatYouLearn?: string;
  highlights?: string[];
  itinerary?: ItineraryItem[];
  included?: string[];
  excluded?: string[];
  whatToBring?: string[];
  walking?: string;
  accessibility?: string;
  notSuitableFor?: string;
  testimonials?: Testimonial[];
  faqs?: FAQ[];
  relatedExperienceIds?: string[];
  price?: number | string;
  groupDiscounts?: GroupDiscount[];
}

// Import from JSON and convert to TypeScript interface
const jsonData = rawExperiencesData as { experiences: Experience[] };
export const experiences: Experience[] = jsonData.experiences;
