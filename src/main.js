import { gameConfig } from "./game/gameConfig.js";
import { createInitialState } from "./game/gameState.js";
import { renderBoard } from "./ui/boardUI.js";
import { renderStats } from "./ui/statsUI.js";

// Création de l'état initial du jeu
const state = createInitialState(gameConfig);

const root = document.querySelector("#app");
root.innerHTML = renderStats(state) + renderBoard(state);
