export function renderBoard(state) {
  return `
    <div class="board" style="display:grid;grid-template-columns:repeat(4,1fr);gap:10px;">
      ${state.cards
        .map(
          (card) => `
        <div class="card 
            ${card.isFlipped ? "flipped" : ""} 
            ${card.isMatched ? "matched" : ""}"
   data-id="${card.id}" style="width:100px;height:100px;cursor:pointer;">
          <div class="card-inner" style="font-size:40px;display:flex;align-items:center;justify-content:center;">
            ${card.isFlipped || card.isMatched ? card.value : "?"}
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
}
