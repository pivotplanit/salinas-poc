/**
 * Utility helper functions for the application
 */

/**
 * Get the difficulty icon emoji based on difficulty level
 */
export const getDifficultyIcon = (difficulty: string): string => {
  switch (difficulty) {
    case "Easy":
      return "🟢";
    case "Moderate":
      return "🟡";
    case "Hard":
      return "🔴";
    default:
      return "⚪";
  }
};
