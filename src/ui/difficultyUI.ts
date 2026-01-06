import { DIFFICULTY_LEVELS } from "../game/gameConfig.js";

export function renderDifficultyMenu(): string {
  return `
    <div class="home-container">
      <div class="home-content">
        <div class="home-header">
          <h1 class="home-title">🎮 Memory Game</h1>
          <p class="home-subtitle">Testez votre mémoire et trouvez tous les emojis</p>
        </div>

        <div class="difficulty-grid">
          ${Object.entries(DIFFICULTY_LEVELS)
            .map(
              ([key, { label, icon, color }]) => `
            <div class="difficulty-card" data-level="${key}">
              <div class="difficulty-icon">${icon}</div>
              <div class="difficulty-info">
                <h3 class="difficulty-title">${label.split(" ")[0]}</h3>
                <p class="difficulty-desc">${label}</p>
              </div>
              <button class="difficulty-btn" data-level="${key}" 
                style="border-top: 3px solid ${color};">
                Jouer
              </button>
            </div>
          `
            )
            .join("")}
        </div>

        <div class="home-footer">
          <p class="home-info">⏱️ Gagnez en trouvant toutes les paires avant le temps limite</p>
        </div>
      </div>
    </div>
  `;
}
