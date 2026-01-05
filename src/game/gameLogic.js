// Fonction pour retourner les cartes
export function flipCard(state, cardId) {
  const card = state.cards.find((c) => c.id === cardId);

  // Ne rien faire si la carte est déjà retournée, ou si 2 cartes sont déjà retournées
  if (!card || card.isMatched || state.flippedCards.length >= 2) {
    return state;
  }

  card.isFlipped = true;
  return {
    ...state,
    flippedCards: [...state.flippedCards, card],
  };
}

// Fonction pour vérifier si les cartes correspondent
export function checkMatch(state) {
  if (state.flippedCards.length !== 2) {
    return state;
  }
  const [id1, id2] = state.flippedCards;
  const card1 = state.cards.find((c) => c.id === id1);
  const card2 = state.cards.find((c) => c.id === id2);
}
