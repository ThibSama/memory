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
  easy: { PAIRS_COUNT: 6, label: "Facile" },
  medium: { PAIRS_COUNT: 10, label: "Moyen" },
  hard: { PAIRS_COUNT: 12, label: "Difficile" },
  expert: { PAIRS_COUNT: 18, label: "Expert" },
};

// Exportation de la configuration du jeu
export function createGameConfig(pairsCount) {
  return {
    PAIRS_COUNT: pairsCount,
    FLIP_BACK_DELAY,
    VALUES,
  };
}
