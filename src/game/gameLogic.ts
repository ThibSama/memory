import type { Card, GameStateType } from "../types.js";

// Fonction pour initialiser les cartes
export function flipCard(state: GameStateType, cardId: string): GameStateType {
  const card = state.cards.find((c) => c.id === cardId);

  // Ne rien faire si la carte est déjà retournée, ou si 2 cartes sont déjà retournées
  if (!card || card.isMatched || state.flippedCards.length >= 2) {
    return state;
  }

  card.isFlipped = true;
  return {
    ...state,
    flippedCards: [...state.flippedCards, card.id],
  };
}

// Fonction pour vérifier si les cartes correspondent
export function checkMatch(state: GameStateType): GameStateType {
  if (state.flippedCards.length !== 2) {
    return state;
  }

  const [cardID1, cardID2] = state.flippedCards;
  const card1 = state.cards.find((card) => card.id === cardID1);
  const card2 = state.cards.find((card) => card.id === cardID2);
  if (!card1 || !card2) {
    return state; // Safety check
  }

  if (card1.value === card2.value) {
    card1.isMatched = true;
    card2.isMatched = true;

    return {
      ...state,
      flippedCards: [],
      movesCount: state.movesCount + 1,
    };
  } else {
    card1.isFlipped = false;
    card2.isFlipped = false;
    return {
      ...state,
      flippedCards: [],
      movesCount: state.movesCount + 1,
    };
  }
}

export function isGameWon(state: GameStateType): boolean {
  return state.cards.every((card) => card.isMatched);
}
