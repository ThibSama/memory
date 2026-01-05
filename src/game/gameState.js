import { shuffle } from "../utils/shuffle.js";

// Crée un deck de cartes pour le jeu de mémoire
function BuildDeck({ VALUES, PAIRS_COUNT }) {
  if (!Array.isArray(VALUES)) {
    throw new Error("VALUES doit être un tableau");
  }

  // Vérifie si PAIRS_COUNT est un entier positif
  if (!Number.isInteger(PAIRS_COUNT) || PAIRS_COUNT <= 0) {
    throw new Error("PAIRS_COUNT doit être un entier positif");
  }

  // Vérifie si le nombre de valeurs disponibles est suffisant
  if (VALUES.length < PAIRS_COUNT) {
    throw new Error("");
  }

  // Sélectionne les valeurs pour les paires de cartes
  const selectedValues = VALUES.slice(0, PAIRS_COUNT);

  // Crée des paires de cartes et les mélange
  const doubled = [...selectedValues, ...selectedValues];

  // Mélange les cartes
  const shuffled = shuffle(doubled);

  // Créer les objets carte avec des propriétés initiales
  return shuffled.map((value, index) => ({
    id: `card-${index}`,
    value,
    isFlipped: false,
    isMatched: false,
  }));
}

// Créer l'état initial du jeu
export function createInitialState(gameConfig) {
  return {
    cards: BuildDeck(gameConfig),
    flippedCards: [],
    movesCount: 0,
    startTime: null,
    statut: "idle",
  };
}

// Réinitialiser l'état du jeu
export function resetState(config) {
  return createInitialState(config);
}
