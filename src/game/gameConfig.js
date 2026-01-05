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
];

export const DIFFICULTY_LEVELS = {
  easy: { PAIRS_COUNT: 6, label: "Facile (6 paires)", timeLimit: null, moveLimit: null },
  medium: { PAIRS_COUNT: 10, label: "Moyen (10 paires)", timeLimit: null, moveLimit: null },
  hard: { PAIRS_COUNT: 14, label: "Difficile (14 paires)", timeLimit: null, moveLimit: null },
  expert: { PAIRS_COUNT: 18, label: "Expert (18 paires)", timeLimit: 120, moveLimit: 40 },
};

// Exportation de la configuration du jeu
export function createGameConfig(pairsCount, timeLimit = null, moveLimit = null) {
  return {
    PAIRS_COUNT: pairsCount,
    FLIP_BACK_DELAY,
    VALUES,
    TIME_LIMIT: timeLimit,
    MOVE_LIMIT: moveLimit,
  };
}
