import { DIFFICULTY_LEVELS } from "../game/gameConfig.js";

export function renderDifficultyMenu() {
  return `
    <div style="text-align:center; padding:40px;">
      <h1>🎮 Memory Game</h1>
      <p>Choisissez votre niveau de difficulté :</p>
      <div style="display:flex; gap:15px; justify-content:center; flex-wrap:wrap;">
        ${Object.entries(DIFFICULTY_LEVELS)
          .map(
            ([key, { label }]) => `
          <button class="btn btn-lg btn-primary difficulty-btn" data-level="${key}">
            ${label}
          </button>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}
