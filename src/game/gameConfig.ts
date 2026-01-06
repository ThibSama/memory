import type { GameConfig } from "../types.js";

// Délai avant de retourner les cartes non appariées (en millisecondes)
const FLIP_BACK_DELAY = 800;

// Valeurs possibles pour les cartes
const VALUES = [
  "🍎",
  "🍌",
  "🍇",
  "🍒",
  "🍑",
  "🍍",
  "🥝",
  "🍉",
  "🍓",
  "🥥",
  "🍋",
  "🍐",
  "🍊",
  "🍈",
  "🍏",
  "🍅",
  "🥭",
  "🍆",
] as const;

interface DifficultyLevel {
  PAIRS_COUNT: number;
  label: string;
  timeLimit: number | null;
  moveLimit: number | null;
  icon: string;
  color: string;
}

export const DIFFICULTY_LEVELS: Record<string, DifficultyLevel> = {
  easy: {
    PAIRS_COUNT: 6,
    label: "Facile (6 paires)",
    timeLimit: null,
    moveLimit: null,
    icon: "🌱",
    color: "#28a745",
  },
  medium: {
    PAIRS_COUNT: 10,
    label: "Moyen (10 paires)",
    timeLimit: 120,
    moveLimit: null,
    icon: "⚡",
    color: "#ffc107",
  },
  hard: {
    PAIRS_COUNT: 14,
    label: "Difficile (14 paires)",
    timeLimit: 180,
    moveLimit: 40,
    icon: "🔥",
    color: "#ff6b6b",
  },
  expert: {
    PAIRS_COUNT: 18,
    label: "Expert (18 paires)",
    timeLimit: 140,
    moveLimit: 50,
    icon: "👑",
    color: "#9c27b0",
  },
};
// Export de la configuration du jeu
export function createGameConfig(
  pairsCount: number,
  timeLimit: number | null = null,
  moveLimit: number | null = null
): GameConfig {
  return {
    PAIRS_COUNT: pairsCount,
    FLIP_BACK_DELAY,
    VALUES,
    TIME_LIMIT: timeLimit,
    MOVE_LIMIT: moveLimit,
  };
}
