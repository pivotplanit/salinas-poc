// Navigation
export const navigation = [
  { label: "Home", href: "/" },
  { label: "Experiences", href: "/experiences" },
  { label: "About", href: "/about" },
  { label: "Practical Info", href: "/practical-info" },
  { label: "Group Booking", href: "/group-booking" },
];

// Contact Information
export const contact = {
  email: "info@salinas-experiences.com",
  phone: "+593 2 123 4567",
  whatsapp: "+593 98 765 4321",
  address: "Salinas, Imbabura Province, Ecuador",
  hours: "Monday - Sunday: 8:00 AM - 6:00 PM EST",
};

// Social Media
export const socialMedia = {
  facebook: "https://facebook.com/salinas-experiences",
  instagram: "https://instagram.com/salinas.experiences",
  twitter: "https://twitter.com/salinas_exp",
  youtube: "https://youtube.com/c/salinaexperiences",
};

// Colors
export const colors = {
  primary: "#2D5016", // Deep green
  secondary: "#8B7355", // Warm brown
  accent: "#C89968", // Light brown
  lightGreen: "#A8D5BA", // Light green
  darkText: "#1a1a1a",
  lightText: "#ffffff",
  border: "#e0e0e0",
  success: "#4CAF50",
  warning: "#FF9800",
  error: "#F44336",
  neutral: "#f5f5f5",
};

// Spacing
export const spacing = {
  xs: "0.25rem", // 4px
  sm: "0.5rem", // 8px
  md: "1rem", // 16px
  lg: "1.5rem", // 24px
  xl: "2rem", // 32px
  "2xl": "3rem", // 48px
  "3xl": "4rem", // 64px
};

// Breakpoints
export const breakpoints = {
  mobile: "375px",
  tablet: "768px",
  desktop: "1200px",
  wide: "1440px",
};

// Animation Timings
export const timing = {
  fast: "150ms",
  normal: "300ms",
  slow: "500ms",
  slower: "800ms",
};

// Button Variants
export const buttonVariants = {
  primary: {
    bg: colors.primary,
    text: colors.lightText,
    hover: "#1f3610",
  },
  secondary: {
    bg: colors.secondary,
    text: colors.lightText,
    hover: "#6f5444",
  },
  outline: {
    bg: "transparent",
    text: colors.primary,
    border: colors.primary,
    hover: colors.primary,
  },
};

// FAQ Categories
export const faqCategories = ["General Information", "Health & Safety", "Logistics", "Experiences"];

// Experience Difficulties
export const difficulties = [
  { label: "Easy", value: "easy", icon: "🟢" },
  { label: "Moderate", value: "moderate", icon: "🟡" },
  { label: "Hard", value: "hard", icon: "🔴" },
];

// Duration Presets
export const durationPresets = [
  "2 hours",
  "3 hours",
  "4 hours",
  "5 hours",
  "Full Day",
  "Multi-Day",
];
