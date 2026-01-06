import type { GameStateType } from "../types.js";

export function renderBoard(state: GameStateType): string {
  const cardCount = state.cards.length;
  let cols: number = 4;
  if (cardCount <= 6) cols = 3;
  else if (cardCount <= 12) cols = 4;
  else if (cardCount <= 20) cols = 5;
  else cols = 6;

  return `
  <div class="board" style="grid-template-columns: repeat(${cols}, 1fr);">
      ${state.cards
        .map(
          (card) => `
        <div class="card ${card.isMatched ? "matched" : ""}" data-id="${
            card.id
          }">
          <div class="card-inner">
            ${card.isFlipped || card.isMatched ? card.value : "?"}
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
