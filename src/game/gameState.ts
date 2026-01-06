import { shuffle } from "../utils/shuffle.js";
import type { Card, GameStateType, GameConfig } from "../types.js";

// Crée un deck de cartes pour le jeu de mémoire
function buildDeck(config: GameConfig): Card[] {
  const { VALUES, PAIRS_COUNT } = config;

  if (!Array.isArray(VALUES)) {
    throw new Error("VALUES doit être un tableau");
  }

  if (!Number.isInteger(PAIRS_COUNT) || PAIRS_COUNT <= 0) {
    throw new Error("PAIRS_COUNT doit être un entier positif");
  }

  if (VALUES.length < PAIRS_COUNT) {
    throw new Error("Pas assez de valeurs pour créer les paires");
  }

  const selectedValues = VALUES.slice(0, PAIRS_COUNT);
  const doubled = [...selectedValues, ...selectedValues];
  const shuffled = shuffle(doubled);

  return shuffled.map((value, index) => ({
    id: `card-${index}`,
    value,
    isFlipped: false,
    isMatched: false,
  }));
}

// Créer l'état initial du jeu
export function gameState(gameConfig: GameConfig): GameStateType {
  return {
    cards: buildDeck(gameConfig),
    flippedCards: [],
    movesCount: 0,
    startTime: null,
    statut: "idle",
  };
}

// Réinitialiser l'état du jeu
export function resetState(config: GameConfig): GameStateType {
  return gameState(config);
}
