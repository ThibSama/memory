// Nombre de paires de cartes dans le jeu
const PAIRS_COUNT = 8;

// Délai avant de retourner les cartes non appariées (en millisecondes)
const FLIP_BACK_DELAY = 800;

// Valeurs possibles pour les cartes (emojis de fruits)
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
];

// Exportation de la configuration du jeu
export const gameConfig = {
  PAIRS_COUNT,
  FLIP_BACK_DELAY,
  VALUES,
};
