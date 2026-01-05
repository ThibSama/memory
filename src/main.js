import { GAME_CONFIG } from "./game/gameConfig.js";
import { createInitialState } from "./game/gameState.js";

// Création de l'état initial du jeu
const state = createInitialState(GAME_CONFIG);

const root = document.querySelector("#app");
root.innerHTML = `
  <h1>Test deck</h1>
  <p>Cartes: ${state.cards.length}</p>
  <div style="display:grid;grid-template-columns:repeat(8,40px);gap:8px;font-size:24px;">
    ${state.cards.map((c) => `<div>${c.value}</div>`).join("")}
  </div>
`;
