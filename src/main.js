import { gameConfig } from "./game/gameConfig.js";
import { gameLogic } from "./game/gameLogic.js";
import { gameState } from "./game/gameState.js";
import { renderBoard } from "./ui/boardUI.js";
import { renderStats } from "./ui/statsUI.js";

// Création de l'état initial du jeu
const state = gameState(gameConfig);

const root = document.querySelector("#app");
root.innerHTML = renderStats(state) + renderBoard(state);
